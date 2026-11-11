"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type MovingPhoto = { image: HTMLImageElement; visible: boolean; x: number; y: number };
const frames = ".photo-frame, .scroll-photo-layer, .field-gallery-image, .field-gallery-large-image";
const clamp = (value: number) => Math.max(-1, Math.min(1, value));

/** One event loop for all visible photos, including images changed by filters. */
export default function PhotoMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.querySelector(".site-shell");
    if (!root) return;
    const photos = new Map<HTMLElement, MovingPhoto>();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pointerX = 0;
    let pointerY = 0;
    let request = 0;
    let previousTime = 0;

    const update = (time: number) => {
      request = 0;
      if (reduced.matches || document.hidden) return;
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      const smoothing = 1 - Math.exp(-elapsed / 110);
      let moving = false;
      photos.forEach((photo, frame) => {
        if (!photo.visible || frame.closest('.home-motion[data-paused="true"]')) return;
        const box = frame.getBoundingClientRect();
        if (!box.width || !box.height) return;
        // 8% zoom leaves 4% overscan per edge; movement stays within 3.5%.
        const scroll = clamp((window.innerHeight / 2 - box.top - box.height / 2) / window.innerHeight);
        const targetX = pointerX * Math.min(box.width * .025, 16);
        const targetY = scroll * Math.min(box.height * .02, 16) + pointerY * Math.min(box.height * .015, 9);
        photo.x += (targetX - photo.x) * smoothing;
        photo.y += (targetY - photo.y) * smoothing;
        const settled = Math.abs(targetX - photo.x) < .05 && Math.abs(targetY - photo.y) < .05;
        if (settled) { photo.x = targetX; photo.y = targetY; }
        photo.image.style.setProperty("--photo-x", `${photo.x.toFixed(2)}px`);
        photo.image.style.setProperty("--photo-y", `${photo.y.toFixed(2)}px`);
        moving ||= !settled;
      });
      previousTime = moving ? time : 0;
      if (moving) request = window.requestAnimationFrame(update);
    };
    const schedule = () => {
      if (!request && !reduced.matches && !document.hidden) request = window.requestAnimationFrame(update);
    };
    const visibility = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const frame = entry.target as HTMLElement;
        const photo = photos.get(frame);
        if (photo) {
          photo.visible = entry.isIntersecting;
          frame.toggleAttribute("data-photo-visible", entry.isIntersecting);
        }
      });
      schedule();
    });
    const reset = (frame: HTMLElement, photo: MovingPhoto) => {
      frame.removeAttribute("data-photo-motion");
      frame.removeAttribute("data-photo-visible");
      photo.image.style.removeProperty("--photo-x");
      photo.image.style.removeProperty("--photo-y");
    };
    const refresh = () => {
      photos.forEach((photo, frame) => {
        if (!root.contains(frame) || frame.querySelector("img") !== photo.image) {
          visibility.unobserve(frame);
          reset(frame, photo);
          photos.delete(frame);
        }
      });
      root.querySelectorAll<HTMLElement>(frames).forEach(frame => {
        const image = frame.querySelector("img");
        if (!image || photos.has(frame)) return;
        photos.set(frame, { image, visible: false, x: 0, y: 0 });
        frame.setAttribute("data-photo-motion", "");
        visibility.observe(frame);
      });
      schedule();
    };
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      pointerX = clamp(event.clientX / window.innerWidth * 2 - 1);
      pointerY = clamp(event.clientY / window.innerHeight * 2 - 1);
      schedule();
    };
    const onLeave = () => { pointerX = 0; pointerY = 0; schedule(); };
    const onPreference = () => {
      window.cancelAnimationFrame(request);
      request = 0;
      previousTime = 0;
      if (reduced.matches) {
        photos.forEach(photo => {
          photo.x = 0; photo.y = 0;
          photo.image.style.removeProperty("--photo-x");
          photo.image.style.removeProperty("--photo-y");
        });
      } else schedule();
    };
    const onVisibility = () => {
      window.cancelAnimationFrame(request);
      request = 0;
      previousTime = 0;
      schedule();
    };
    const changes = new MutationObserver(refresh);
    changes.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-paused"] });
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", onPreference);
    refresh();
    return () => {
      window.cancelAnimationFrame(request);
      changes.disconnect();
      visibility.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onPreference);
      photos.forEach((photo, frame) => reset(frame, photo));
    };
  }, [pathname]);
  return null;
}
