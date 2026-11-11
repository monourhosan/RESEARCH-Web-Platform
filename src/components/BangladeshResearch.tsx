import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResearchPhoto from "./ResearchPhoto";
import { HOMEPAGE_FIELDWORK_SETTINGS } from "@/data/homepageFieldwork";

const steps = [
  { title: "Plan", copy: "Agree the question, audience, and scope." },
  { title: "Prepare", copy: "Adapt the language. Pilot the tools." },
  { title: "Listen", copy: "Meet people. Ask with care and consent." },
  { title: "Explain", copy: "Check the data. Make the findings useful." },
];
const settings = HOMEPAGE_FIELDWORK_SETTINGS;

export default function BangladeshResearch() {
  return <section id="research-in-bangladesh" className="bangladesh-research section-space" aria-labelledby="bangladesh-research-title"><div className="site-container">
    <div className="bangladesh-research-heading"><div><p className="eyebrow">Research in Bangladesh</p><h2 id="bangladesh-research-title">Meet people. Understand their world.</h2></div><Link href="/services/market-research#how-we-work" className="text-link">Our process <ArrowUpRight size={16} /></Link></div>
    <div className="bangladesh-settings">{settings.map(setting => <article key={setting.photo}><ResearchPhoto photo={setting.photo} sizes="(max-width: 767px) 90vw, (max-width: 1279px) 45vw, 550px" caption={setting.caption} /><h3>{setting.title}</h3></article>)}</div>
    <ol className="bangladesh-research-steps">{steps.map((step, index) => <li key={step.title}><span className="bangladesh-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    <p className="research-photo-sources">AI-generated illustrative scenes of data collection in Bangladesh. <Link href="/photography#illustrative-fieldwork">About these images <ArrowUpRight size={12} /></Link></p>
  </div></section>;
}
