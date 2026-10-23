"use client";

import { ArrowRight, Check } from "lucide-react";
import { CommunityMark, MarketMark, FieldworkMark } from "./ResearchMarks";
import Image from "next/image";
import survey from "../../public/illustrations/household-survey.png";
import group from "../../public/illustrations/group-discussion.png";

const services = [
  { Icon: CommunityMark, title: "Social & development research", description: "Understand what a program means for the people it serves, and where there is room to do more.", capabilities: ["Baseline, midline & endline studies", "Program & impact evaluation", "Community & livelihood research"], action: "Plan a social research study" },
  { Icon: MarketMark, title: "Market & consumer research", description: "Get to know the choices, habits, and everyday realities that shape your market.", capabilities: ["Consumer behavior & brand research", "Market sizing & retail studies", "Product & concept testing"], action: "Explore your market questions" },
  { Icon: FieldworkMark, title: "Fieldwork & data collection", description: "Bring a thoughtful study into the field, with the right tools and careful checks along the way.", capabilities: ["Digital surveys & field interviews", "Focus groups & in-depth conversations", "Supervision & quality review"], action: "Talk through your fieldwork" },
];

export default function CorePillars({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  return (
    <section id="services" className="section-space services-section">
      <div className="site-container">
        <div className="section-heading split-heading"><div><p className="eyebrow">Our expertise</p><h2>Good questions.<br />Thoughtful research.</h2></div><p>Whether you are evaluating a program or exploring a market, we start with what you need to understand.</p></div>
        <div className="services-grid">
          {services.map(({ Icon, title, description, capabilities, action }, index) => (
            <article className="service-card" key={title}>
              <div className={`service-visual service-visual-${index}`} aria-hidden="true">
                {index === 1 ? <><MarketMark className="market-visual-mark" /><span className="handwritten">People. Choices. Context.</span></> : <Image src={index === 0 ? survey : group} alt="" sizes="(max-width: 767px) 90vw, 30vw" />}
              </div>
              <div className="service-card-body"><Icon className="service-drawing" /><h3>{title}</h3><p className="service-description">{description}</p><ul className="service-capabilities">{capabilities.map(capability => <li key={capability}><Check size={15} /><span>{capability}</span></li>)}</ul><button type="button" className="service-link" onClick={onOpenProposalModal}>{action}<ArrowRight size={17} /></button></div>
            </article>
          ))}
        </div>
        <div className="services-note"><p>From the first question to the final recommendation.</p><a href="/about#methodology" className="text-link">A look at our process <ArrowRight size={16} /></a></div>
      </div>
    </section>
  );
}
