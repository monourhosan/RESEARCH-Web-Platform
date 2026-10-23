"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { FAQ_ITEMS } from "@/data/researchData";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState("faq-1");
  return <section id="faqs" className="section-space faq-section"><div className="site-container faq-layout"><div className="section-heading"><p className="eyebrow">A few useful answers</p><h2>Before we get started.</h2><p>What to expect when we plan a study together.</p><a href="/contact#contact" className="text-link">Ask us something else <ArrowUpRight size={17} /></a></div><div className="faq-list">{FAQ_ITEMS.map(item => { const isOpen = openId === item.id; return <div key={item.id} className={`faq-item ${isOpen ? "is-open" : ""}`}><h3><button type="button" id={`${item.id}-trigger`} aria-expanded={isOpen} aria-controls={`${item.id}-answer`} onClick={() => setOpenId(isOpen ? "" : item.id)}><span>{item.question}</span>{isOpen ? <Minus size={19} /> : <Plus size={19} />}</button></h3><div id={`${item.id}-answer`} role="region" aria-labelledby={`${item.id}-trigger`} className="faq-answer" aria-hidden={!isOpen} inert={!isOpen}><div className="faq-answer-inner"><p>{item.answer}</p></div></div></div>; })}</div></div></section>;
}
