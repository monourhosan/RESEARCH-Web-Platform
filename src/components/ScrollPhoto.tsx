"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { PHOTOS, type PhotoKey } from "@/data/photography";

export default function ScrollPhoto({ photo, eager = false }: { photo: PhotoKey; eager?: boolean }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const item = PHOTOS[photo];

  useEffect(() => {
    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!frame || !layer) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let request = 0;
    let visible = true;
    const update = () => {
      request = 0;
      if (reducedMotion.matches) {
        layer.style.transform = "none";
        return;
      }
      const bounds = frame.getBoundingClientRect();
      const mobile = window.innerWidth < 768;
      const limit = mobile ? 32 : 64;
      const offset = (window.innerHeight / 2 - bounds.top - bounds.height / 2) * (mobile ? .06 : .12);
      layer.style.transform = `translate3d(0, ${Math.max(-limit, Math.min(limit, offset))}px, 0)`;
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
  }, []);

  return <div ref={frameRef} className="scroll-photo" aria-hidden="true"><div ref={layerRef} className="scroll-photo-layer"><Image src={item.src} alt="" fill sizes="100vw" loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} style={{ objectFit: "cover", objectPosition: item.position }} /></div></div>;
}
