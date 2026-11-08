"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { PHOTOS } from "@/data/photography";

export default function Hero({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  return <section id="home" className="hero-section">
    <div className="site-container compact-hero">
      <div className="hero-copy">
        <p className="hero-introduction"><span className="eyebrow-dot" /> Social &amp; market research in Bangladesh</p>
        <h1>Good research.<br /><span>Clearer decisions.</span></h1>
        <p className="hero-description">Understand your community. Know your customers. Make informed decisions.</p>
        <div className="hero-actions"><button type="button" className="button button-primary" onClick={onOpenProposalModal}>Discuss your research <ArrowUpRight size={17} /></button><a href="#services" className="text-link">Explore services <ArrowDown size={16} /></a></div>
        <p className="hero-location"><MapPin size={14} /> Based in Dhaka. Research across Bangladesh.</p>
      </div>
      <figure className="hero-photo">
        <div className="hero-photo-frame"><Image src={PHOTOS["rangpur-farming"].src} alt={PHOTOS["rangpur-farming"].alt} fill sizes="(max-width: 767px) 100vw, 45vw" loading="eager" fetchPriority="high" /></div>
        <figcaption><span>People at the heart of every question.</span><Link href="/photography">Photo credits <ArrowUpRight size={12} /></Link></figcaption>
      </figure>
    </div>
  </section>;
}
