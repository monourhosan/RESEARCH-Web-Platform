"use client";

import { ArrowRight, Check } from "lucide-react";
import { CommunityMark, MarketMark, FieldworkMark } from "./ResearchMarks";

const services = [
  { Icon: CommunityMark, title: "Social & development research", description: "Understand what a program means for the people it serves, and where there is room to do more.", capabilities: ["Baseline, midline & endline studies", "Program & impact evaluation", "Community & livelihood research"], action: "Plan a social research study" },
  { Icon: MarketMark, title: "Market & consumer research", description: "Get to know the choices, habits, and everyday realities that shape your market.", capabilities: ["Consumer behavior & brand research", "Market sizing & retail studies", "Product & concept testing"], action: "Explore your market questions" },
  { Icon: FieldworkMark, title: "Fieldwork & data collection", description: "Bring a thoughtful study into the field, with the right tools and careful checks along the way.", capabilities: ["Digital surveys & field interviews", "Focus groups & in-depth conversations", "Supervision & quality review"], action: "Talk through your fieldwork" },
];

export default function CorePillars({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  return <section id="services" className="section-space services-section"><div className="site-container"><div className="section-heading split-heading"><div><p className="eyebrow">How we can help</p><h2>Different questions.<br />Thoughtful ways to answer them.</h2></div><p>Whether you are evaluating a program or exploring a market, we start with what you need to understand.</p></div><div className="services-grid">{services.map(({ Icon, title, description, capabilities, action }) => <article className="service-card" key={title}><Icon className="service-drawing" /><h3>{title}</h3><p className="service-description">{description}</p><ul className="service-capabilities">{capabilities.map(capability => <li key={capability}><Check size={15} /><span>{capability}</span></li>)}</ul><button type="button" className="service-link" onClick={onOpenProposalModal}>{action}<ArrowRight size={17} /></button></article>)}</div><div className="services-note"><p>From the first question to the final recommendation.</p><a href="/about#methodology" className="text-link">A look at our process <ArrowRight size={16} /></a></div></div></section>;
}
