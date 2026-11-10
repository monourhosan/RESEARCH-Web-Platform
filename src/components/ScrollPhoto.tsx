"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { PHOTOS, type PhotoKey } from "@/data/photography";
import { useHomeMotion } from "./HomeMotion";

export default function ScrollPhoto({ photo, eager = false }: { photo: PhotoKey; eager?: boolean }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<number | null>(null);
  const item = PHOTOS[photo];
  const { paused } = useHomeMotion();

  useEffect(() => {
    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!frame || !layer || paused) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let request = 0;
    let visible = true;
    let previousTime: number | null = null;
    const update = (time: number) => {
      request = 0;
      if (!visible) {
        previousTime = null;
        return;
      }
      if (reducedMotion.matches) {
        positionRef.current = null;
        previousTime = null;
        layer.style.transform = "none";
        return;
      }
      const bounds = frame.getBoundingClientRect();
      const mobile = window.innerWidth < 768;
      const limit = mobile ? 56 : 110;
      const offset = (window.innerHeight / 2 - bounds.top - bounds.height / 2) * (mobile ? .12 : .24);
      const target = Math.max(-limit, Math.min(limit, offset));
      const current = positionRef.current ?? target;
      const elapsed = previousTime === null ? 16 : time - previousTime;
      // Ease toward the scroll position at the same rate on different displays.
      const next = current + (target - current) * (1 - Math.exp(-elapsed / 85));
      const settled = Math.abs(target - next) < .25;
      const position = settled ? target : next;
      positionRef.current = position;
      layer.style.transform = `translate3d(0, ${position}px, 0)`;
      previousTime = settled ? null : time;
      if (!settled) request = window.requestAnimationFrame(update);
    };
    const schedule = () => {
      if (visible && !request) request = window.requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    });
    observer.observe(frame);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    schedule();
    return () => {
      window.cancelAnimationFrame(request);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, [paused]);

  return <div ref={frameRef} className="scroll-photo" aria-hidden="true"><div ref={layerRef} className="scroll-photo-layer"><Image src={item.src} alt="" fill sizes="100vw" loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} style={{ objectFit: "cover", objectPosition: item.position }} /></div></div>;
}
