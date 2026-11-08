"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

const MotionContext = createContext({ paused: false, reduced: false, toggle: () => {} });
export const useHomeMotion = () => useContext(MotionContext);

export function MotionToggle() {
  const { paused, reduced, toggle } = useHomeMotion();
  const label = reduced ? "Animations disabled by your reduced-motion preference" : paused ? "Play homepage animations" : "Pause homepage animations";
  return <button type="button" className="home-motion-toggle" onClick={toggle} disabled={reduced} aria-label={label} title={label} aria-pressed={paused}>{paused ? <Play size={15} /> : <Pause size={15} />}</button>;
}

export default function HomeMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const paused = userPaused || reduced;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reveals = root.querySelectorAll<HTMLElement>(".market-service-card, .bangladesh-settings article, .bangladesh-research-heading");
    const zones = root.querySelectorAll<HTMLElement>(".market-service-grid, .bangladesh-research-steps");
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.entered = "true";
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .15 });
    const zoneObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { (entry.target as HTMLElement).dataset.inView = String(entry.isIntersecting); });
    });
    reveals.forEach(element => revealObserver.observe(element));
    zones.forEach(element => zoneObserver.observe(element));
    return () => { revealObserver.disconnect(); zoneObserver.disconnect(); };
  }, []);

  return <MotionContext.Provider value={{ paused, reduced, toggle: () => setUserPaused(value => !value) }}><div ref={rootRef} className="home-motion" data-paused={paused}>{children}</div></MotionContext.Provider>;
}
