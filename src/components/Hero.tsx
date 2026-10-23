"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import survey from "../../public/illustrations/household-survey.png";

export default function Hero({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  return (
    <section id="home" className="hero-section">
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="hero-introduction">Social &amp; market research in Bangladesh</p>
          <h1>Good research begins with people.</h1>
          <p className="hero-description">We help NGOs, public institutions, and businesses understand communities, evaluate programs, and get closer to their customers across Bangladesh.</p>
          <div className="hero-actions">
            <button type="button" className="button button-primary" onClick={onOpenProposalModal}>Discuss your research <ArrowUpRight size={18} /></button>
            <a href="#services" className="text-link">See how we can help <ArrowDown size={17} /></a>
          </div>
          <p className="hero-location"><MapPin size={15} strokeWidth={1.5} /> From Dhaka, with a nationwide perspective.</p>
        </div>
        <figure className="hero-illustration">
          <div className="handwritten hero-note" aria-hidden="true">Every voice adds something.
            <svg viewBox="0 0 140 48" fill="none"><path className="ink-stroke" pathLength="1" d="M5 21c35-6 79-7 129-1M9 28c33-6 76-7 120-2" /></svg>
          </div>
          <Image src={survey} alt="Hand-drawn illustration of a field researcher listening to two community members during a household survey in Bangladesh" sizes="(max-width: 767px) 100vw, 55vw" loading="eager" fetchPriority="high" className="survey-illustration" />
          <figcaption><span className="caption-line" />Listening in the field. An illustrated research moment.</figcaption>
        </figure>
      </div>
      <div className="audience-strip"><div className="site-container audience-layout"><span className="audience-label">A research partner for</span><span>Development organizations</span><span>Public institutions</span><span>Brands &amp; businesses</span></div></div>
    </section>
  );
}
