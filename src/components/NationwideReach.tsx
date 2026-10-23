"use client";

import { useState } from "react";
import { ArrowUpRight, Check, MapPin, Languages, Compass } from "lucide-react";
import { BANGLADESH_DIVISIONS } from "@/data/researchData";

export default function NationwideReach() {
  const [selectedId, setSelectedId] = useState("dhaka");
  const division = BANGLADESH_DIVISIONS.find(item => item.id === selectedId) || BANGLADESH_DIVISIONS[0];
  return (
    <section id="reach" className="section-space reach-section">
      <div className="site-container reach-layout">
        <div className="reach-intro"><p className="eyebrow">Local context matters</p><h2>A country of different perspectives.</h2><p>Bangladesh is more than a single market. Research planning needs to account for regional voices, local languages, and lived experience.</p><div className="reach-stat"><strong>08</strong><span>divisions.<br />A nationwide research perspective.</span><Compass size={45} strokeWidth={.8} /></div><p className="reach-select-label">Where would you like to understand more?</p><div className="division-selector" role="group" aria-label="Select a division">{BANGLADESH_DIVISIONS.map(item => <button type="button" key={item.id} aria-pressed={selectedId === item.id} aria-controls="division-detail" onClick={() => setSelectedId(item.id)}>{item.name.replace(" Division", "")}<ArrowUpRight size={14} /></button>)}</div></div>
        <article className="division-card" id="division-detail" key={division.id} aria-live="polite">
          <div className="division-card-top"><span><MapPin size={14} /> Research in the region</span><span>{division.districtsCount} districts</span></div><h3>{division.name.replace(" Division", "")}</h3><p className="division-bengali" lang="bn">{division.bengaliName}</p><p className="division-base">Study coverage and field access are agreed for each project.</p><div className="division-specialties"><p className="eyebrow">Questions worth exploring here</p>{division.specialties.map(specialty => <p key={specialty}><Check size={15} /><span>{specialty}</span></p>)}</div><div className="division-languages"><Languages size={20} strokeWidth={1.5} /><div><strong>Language considerations</strong><p>{division.dialects.join(" · ")}</p></div></div><a href="/contact" className="division-cta">Plan research in {division.name.replace(" Division", "")}<ArrowUpRight size={18} /></a>
        </article>
      </div>
    </section>
  );
}
