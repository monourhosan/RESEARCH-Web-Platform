"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PHOTOS, type PhotoKey } from "@/data/photography";
import { HOMEPAGE_FIELDWORK_SETTINGS } from "@/data/homepageFieldwork";
import ScrollPhoto from "./ScrollPhoto";

const scenes: PhotoKey[] = HOMEPAGE_FIELDWORK_SETTINGS.map(setting => setting.photo);

export default function Hero({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  const [scene, setScene] = useState(0);
  const photo = PHOTOS[scenes[scene]];
  const changeScene = (direction: number) => setScene(value => (value + direction + scenes.length) % scenes.length);
  return <section id="home" className="hero-section photo-hero" aria-label="Mirror Metrics introduction">
    <ScrollPhoto key={scenes[scene]} photo={scenes[scene]} eager />
    <div className="photo-hero-shade" aria-hidden="true" />
    <div className="site-container compact-hero">
      <div className="hero-copy">
        <p className="hero-introduction"><span className="eyebrow-dot" /> Market &amp; customer research · Bangladesh</p>
        <h1><span className="hero-title-main">Know your market.</span><span className="hero-title-script">Know your customers.</span></h1>
        <p className="hero-description">Clear insight for your next business decision.</p>
        <div className="hero-actions"><button type="button" className="button button-primary" onClick={onOpenProposalModal}>Discuss your research <ArrowUpRight size={17} /></button><a href="#services" className="hero-explore">Explore services <ArrowDown size={16} /></a></div>
      </div>
    </div>
    <button type="button" className="hero-scene-arrow hero-scene-previous" onClick={() => changeScene(-1)} aria-label="Previous background photo"><ChevronLeft size={21} /></button>
    <button type="button" className="hero-scene-arrow hero-scene-next" onClick={() => changeScene(1)} aria-label="Next background photo"><ChevronRight size={21} /></button>
    <div className="site-container photo-hero-caption"><Link href="/photography#illustrative-fieldwork">{photo.title} · AI-generated illustrative scene <ArrowUpRight size={12} /></Link></div>
    <div className="hero-scene-selector" aria-label="Background photos">{scenes.map((key, index) => <button key={key} type="button" aria-label={`Show ${PHOTOS[key].title}`} aria-pressed={scene === index} onClick={() => setScene(index)}>{String(index + 1).padStart(2, "0")}<span>.</span></button>)}</div>
  </section>;
}
