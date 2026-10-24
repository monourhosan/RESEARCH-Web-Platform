"use client";

import ResearchPhoto from "@/components/ResearchPhoto";
import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { METHODOLOGY_STEPS } from "@/data/researchData";

const phases = [
  { title: "Design with purpose", subtitle: "The right questions. The right approach." },
  { title: "Listen in the field", subtitle: "Local context. First-hand understanding." },
  { title: "Verify the evidence", subtitle: "Careful checks at every stage." },
  { title: "Bring clarity", subtitle: "Analysis that informs your next step." },
];

export default function MethodologySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const step = METHODOLOGY_STEPS[activeIndex];
  const phasePhotos = ["wp-65076", "wp-78919", "wp-32191", "wp-32203"] as const;
  return (
    <section id="methodology" className="section-space approach-section">
      <div className="site-container">
        <div className="section-heading split-heading"><div><p className="eyebrow">Our approach</p><h2>Care in the details.<br />Clarity in the findings.</h2></div><p>We work through each stage with the same question in mind: will this help you understand what matters?</p></div>
        <div className="approach-steps" role="group" aria-label="Research process">{phases.map((phase, index) => <button type="button" key={phase.title} aria-pressed={activeIndex === index} aria-controls="methodology-detail" onClick={() => setActiveIndex(index)}><span className="step-number">0{index + 1}</span><strong>{phase.title}</strong><span className="step-subtitle">{phase.subtitle}</span><ArrowUpRight size={18} /></button>)}</div>
        <div className="approach-detail" id="methodology-detail" aria-live="polite">
          <div className="approach-detail-main" key={step.step}><span className="eyebrow">Step {step.step}: {step.badge}</span><h3>{step.title}</h3><p>{step.description}</p><div className="deliverables">{step.deliverables.map(deliverable => <span key={deliverable}><Check size={15} />{deliverable}</span>)}</div></div>
          <aside className="approach-principle"><ResearchPhoto photo={phasePhotos[activeIndex]} className="process-photo" /><p>A method that fits your question.</p><span>Every stage connects back to your research objectives, your context, and the decisions ahead.</span><a href="/contact" className="text-link">Let’s discuss your approach <ArrowUpRight size={15} /></a></aside>
        </div>
      </div>
    </section>
  );
}
