"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { PHOTOS } from "@/data/photography";

export default function Hero({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-stage">
        <div className="hero-image-layer" data-photo="rangpur-farming"><Image src={PHOTOS["rangpur-farming"].src} alt={PHOTOS["rangpur-farming"].alt} fill sizes="100vw" loading="eager" fetchPriority="high" className="hero-editorial-image" /></div>
        <div className="hero-shade" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="hero-introduction">Social &amp; market research in Bangladesh</p>
          <h1>Good research begins with people.</h1>
        </div>
        <div className="hero-bottom">
          <div className="hero-context"><p className="hero-location"><MapPin size={15} strokeWidth={1.5} /> Rooted in Bangladesh.<br />Informed by people.</p><a className="hero-art-credit" href="/photography">Pirganj, Bangladesh · masudar rahman / Pexels</a></div>
          <div className="hero-summary">
          <p className="hero-description">Understand communities. Get closer to your customers. Make decisions with thoughtful social and market research.</p>
          <div className="hero-actions">
            <button type="button" className="button button-primary" onClick={onOpenProposalModal}>Discuss your research <ArrowUpRight size={18} /></button>
            <a href="#services" className="text-link">Our expertise <ArrowDown size={17} /></a>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className="audience-strip"><div className="site-container audience-layout"><span className="audience-label">A research partner for</span><span>Development organizations</span><span>Public institutions</span><span>Brands &amp; businesses</span></div></div>
    </section>
  );
}
