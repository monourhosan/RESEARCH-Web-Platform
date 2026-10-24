"use client";

import { GUIDE_PHOTOS } from "@/data/photography";
import ResearchPhoto from "@/components/ResearchPhoto";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, ArrowRight } from "lucide-react";
import { RESEARCH_GUIDES } from "@/data/researchData";
import NewsletterSignup from "./NewsletterSignup";

export default function ResearchShowcase() {
  const [selected, setSelected] = useState(RESEARCH_GUIDES[0].slug);
  const guide = RESEARCH_GUIDES.find(item => item.slug === selected) || RESEARCH_GUIDES[0];
  return <section id="insights" className="section-space insights-section"><div className="site-container"><div className="section-heading split-heading"><div><p className="eyebrow">From our research notebook</p><h2>A few notes for curious minds.</h2></div><p>Practical notes on asking better questions, choosing appropriate methods, and making evidence useful.</p></div><div className="insights-layout"><div className="insight-report"><div className="report-tabs" role="group" aria-label="Research topics">{RESEARCH_GUIDES.map(item => <button type="button" key={item.slug} aria-pressed={guide.slug === item.slug} onClick={() => setSelected(item.slug)}>{item.category}</button>)}</div><article className="report-content" key={guide.slug}><div className="report-meta"><span><BookOpen size={14} /> Research notes</span><span>{guide.readTime}</span></div><ResearchPhoto photo={GUIDE_PHOTOS[RESEARCH_GUIDES.findIndex(item => item.slug === guide.slug)]} className="guide-photo" /><h3>{guide.title}</h3><p className="report-summary">{guide.summary}</p><div className="report-findings"><p className="eyebrow">In this note</p>{guide.sections.slice(0, 3).map(section => <p key={section.title}><span /><span>{section.title}</span></p>)}</div><div className="report-footer"><Link href={`/insights/${guide.slug}`} className="text-link">Read the perspective <ArrowUpRight size={16} /></Link><Link href="/insights" className="text-link">All notes <ArrowRight size={14} /></Link></div></article></div><NewsletterSignup /></div></div></section>;
}
