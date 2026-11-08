"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ScrollPhoto from "./ScrollPhoto";

export default function Hero({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  return <section id="home" className="hero-section photo-hero">
    <ScrollPhoto photo="gallery-household-survey" eager />
    <div className="photo-hero-shade" aria-hidden="true" />
    <div className="site-container compact-hero">
      <div className="hero-copy">
        <p className="hero-introduction"><span className="eyebrow-dot" /> Market &amp; customer research · Bangladesh</p>
        <h1>Know your market.<br /><span>Know your customers.</span></h1>
        <p className="hero-description">Clear insight for your next business decision.</p>
        <div className="hero-actions"><button type="button" className="button button-primary" onClick={onOpenProposalModal}>Discuss your research <ArrowUpRight size={17} /></button><a href="#services" className="button button-outline">Explore services <ArrowDown size={16} /></a></div>
      </div>
    </div>
    <div className="site-container photo-hero-caption"><Link href="/photography">BRAC survey, Korail · Reference photo: Lucy Milmo / DFID · CC BY 2.0 <ArrowUpRight size={12} /></Link></div>
  </section>;
}
