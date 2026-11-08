"use client";

import { useState } from "react";

export default function ResearchCharacter() {
  const [paused, setPaused] = useState(false);
  return <figure className={`research-character${paused ? " is-paused" : ""}`}>
    <svg viewBox="0 0 360 240" fill="none" role="img" aria-label="Illustration of a researcher taking notes at a desk">
      <ellipse cx="184" cy="212" rx="137" ry="13" fill="#dae5df" />
      <rect x="245" y="44" width="69" height="87" rx="7" fill="white" stroke="#bccfc4" />
      <path d="M259 69h40M259 82h24M259 95h33" stroke="#9cb9a9" strokeWidth="3" strokeLinecap="round" />
      <g className="character-check"><path d="m262 113 6 6 15-16" stroke="#28604b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></g>
      <path d="M103 197v-50q0-17 17-17h54v67" fill="#bfd1c5" />
      <path d="M124 191v23m43-23v23" stroke="#365c4b" strokeWidth="5" strokeLinecap="round" />
      <path d="M137 105q-22 10-23 41l-1 38h82l-8-44q-4-27-28-35" fill="#28604b" />
      <g className="character-head">
        <path d="M144 91v20q11 12 21 0V90" fill="#dca77d" />
        <ellipse cx="154" cy="72" rx="27" ry="33" fill="#e8bc96" />
        <path d="M127 75q-10-42 22-44 39-3 34 44l-10-24q-21 12-36 1Z" fill="#233f35" />
        <g className="character-eyes" stroke="#233f35" strokeWidth="3" strokeLinecap="round"><path d="M146 73v2m19-2v2" /></g>
        <path d="M151 88q7 5 13-1" stroke="#8b5944" strokeWidth="2" strokeLinecap="round" />
      </g>
      <path d="M125 132v30q0 11 13 11h32" stroke="#e8bc96" strokeWidth="12" strokeLinecap="round" />
      <path d="M179 130q6 24 18 33" stroke="#e8bc96" strokeWidth="12" strokeLinecap="round" />
      <path d="M80 182h217M95 183v30m186-30v30" stroke="#365c4b" strokeWidth="5" strokeLinecap="round" />
      <path d="m158 179 18-22h50l-16 22Z" fill="white" stroke="#9cb9a9" strokeWidth="2" />
      <g className="character-writing"><path d="m195 164 15 5" stroke="#e8bc96" strokeWidth="12" strokeLinecap="round" /><path d="m208 154-7 20" stroke="#365c4b" strokeWidth="3" strokeLinecap="round" /></g>
      <path d="M248 164h18l-3 15h-12Z" fill="#c4d7ad" /><path d="M266 167q12-1 3 8h-5" stroke="#75976d" strokeWidth="2" />
      <path d="M58 178v-28m0 14q-20-2-17-19 17 0 17 19m0-7q19-2 17-20-17 0-17 20" stroke="#75976d" strokeWidth="3" fill="#c4d7ad" /><path d="M44 178h28l-5 23H49Z" fill="#d3b89e" />
    </svg>
    <figcaption><span>A little curiosity goes a long way.</span><button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Play animation" : "Pause animation"}</button></figcaption>
  </figure>;
}
