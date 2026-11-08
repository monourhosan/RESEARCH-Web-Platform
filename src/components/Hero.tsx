"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { PHOTOS } from "@/data/photography";

export default function Hero({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  return <section id="home" className="hero-section">
    <div className="site-container compact-hero">
      <div className="hero-copy">
        <p className="hero-introduction"><span className="eyebrow-dot" /> Market &amp; customer research · Bangladesh</p>
        <h1>Know your market.<br /><span>Understand<br />your customers.</span></h1>
        <p className="hero-description">Customer insight, brand research, and market intelligence to help you decide what comes next.</p>
        <div className="hero-actions"><button type="button" className="button button-primary" onClick={onOpenProposalModal}>Discuss your research <ArrowUpRight size={17} /></button><a href="#services" className="text-link">Explore services <ArrowDown size={16} /></a></div>
        <p className="hero-location"><MapPin size={14} /> Based in Dhaka. Research across Bangladesh.</p>
      </div>
      <figure className="hero-photo">
        <div className="hero-photo-frame"><Image src={PHOTOS["dhaka-market"].src} alt={PHOTOS["dhaka-market"].alt} fill sizes="(max-width: 767px) 100vw, 45vw" loading="eager" fetchPriority="high" /><div className="market-photo-label"><span>Real people. Everyday choices.</span><strong>That’s where insight starts.</strong></div></div>
        <figcaption><span>Markets in context · Dhaka, Bangladesh</span><Link href="/photography">Photo credits <ArrowUpRight size={12} /></Link></figcaption>
      </figure>
    </div>
  </section>;
}
