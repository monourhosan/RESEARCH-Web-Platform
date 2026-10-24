"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import ResearchPhoto from "@/components/ResearchPhoto";
import { BANGLADESH_DIVISIONS } from "@/data/researchData";
import { REGIONAL_CONTEXT } from "@/data/regionalContext";
import { PHOTOS } from "@/data/photography";

export default function NationwideReach() {
  const [selectedId, setSelectedId] = useState("dhaka");
  const division = BANGLADESH_DIVISIONS.find(item => item.id === selectedId) || BANGLADESH_DIVISIONS[0];
  const region = REGIONAL_CONTEXT[division.id];
  const name = division.name.replace(" Division", "");

  return (
    <section id="reach" className="section-space reach-section" aria-labelledby="reach-title">
      <div className="site-container reach-layout">
        <div className="reach-intro">
          <p className="eyebrow">Research across Bangladesh</p>
          <h2 id="reach-title">Every region has<br />a story of its own.</h2>
          <p>A question asked in Dhaka may need a different approach in a coastal village or a tea-growing community. Explore the local contexts that can shape your next study.</p>
          <p className="reach-select-label">Choose a division to explore</p>
          <div className="division-selector" role="group" aria-label="Select a division">
            {BANGLADESH_DIVISIONS.map(item => <button type="button" key={item.id} aria-pressed={selectedId === item.id} aria-controls="division-detail" onClick={() => setSelectedId(item.id)}>{item.name.replace(" Division", "")}<ArrowUpRight size={14} /></button>)}
          </div>
          <p className="reach-planning-note">Your question sets the scope. We agree locations, participant groups, and field access with you before each project.</p>
        </div>
        <article className="division-card" id="division-detail" key={division.id} aria-live="polite" aria-atomic="true" aria-labelledby="division-name">
          <div className="division-card-top"><span><MapPin size={14} /> Explore the region</span><span>{division.districtsCount} districts</span></div>
          <div className="division-title"><h3 id="division-name">{name}</h3><p className="division-bengali" lang="bn">{division.bengaliName}</p></div>
          <div className="division-gallery" aria-label={`Photographs from ${name}`}>
            {region.photos.map(({ photo, caption }) => <ResearchPhoto key={photo} photo={photo} className="division-photo" sizes="(max-width: 767px) 43vw, 25vw" caption={<><span>{caption}</span><a href={PHOTOS[photo].source} target="_blank" rel="noreferrer">Photo: {PHOTOS[photo].credit}</a></>} />)}
          </div>
          <h4 className="division-headline">{region.headline}</h4>
          <p className="division-description">{region.description}</p>
          <div className="division-specialties"><p className="eyebrow">What could your study uncover?</p><ul>{region.questions.map(question => <li key={question}>{question}</li>)}</ul></div>
          <a href="/contact" className="division-cta">Discuss a study in {name}<ArrowUpRight size={18} /></a>
        </article>
      </div>
    </section>
  );
}
