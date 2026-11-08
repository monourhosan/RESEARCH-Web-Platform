import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResearchPhoto from "./ResearchPhoto";
import { PHOTOS, getPhotoLicenseUrl } from "@/data/photography";

const steps = [
  { title: "Plan", copy: "Agree the question, audience, and scope." },
  { title: "Prepare", copy: "Adapt the language. Pilot the tools." },
  { title: "Listen", copy: "Meet people. Ask with care and consent." },
  { title: "Explain", copy: "Check the data. Make the findings useful." },
];
const settings = [
  { photo: "gallery-household-survey", title: "Household interviews", caption: "BRAC survey · Korail, Dhaka · 2011" },
  { photo: "gallery-local-shop", title: "Retail research", caption: "Dholaikhal, Dhaka · 2012" },
] as const;

export default function BangladeshResearch() {
  return <section id="research-in-bangladesh" className="bangladesh-research section-space" aria-labelledby="bangladesh-research-title"><div className="site-container">
    <div className="bangladesh-research-heading"><div><p className="eyebrow">Research in Bangladesh</p><h2 id="bangladesh-research-title">Meet people. Understand their world.</h2></div><Link href="/services/market-research#how-we-work" className="text-link">Our process <ArrowUpRight size={16} /></Link></div>
    <div className="bangladesh-settings">{settings.map(setting => <article key={setting.photo}><ResearchPhoto photo={setting.photo} sizes="(max-width: 767px) 90vw, (max-width: 1279px) 45vw, 550px" caption={setting.caption} /><h3>{setting.title}</h3></article>)}</div>
    <ol className="bangladesh-research-steps">{steps.map((step, index) => <li key={step.title}><span className="bangladesh-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    <details className="research-photo-sources"><summary>Reference photographs &amp; credits</summary><p>These photographs show third-party fieldwork and local settings, not the Mirror Metrics team.</p><ul>{settings.map(({ photo: key }) => { const photo = PHOTOS[key]; return <li key={key}><a href={photo.source} target="_blank" rel="noreferrer">{photo.title} — {photo.credit}</a> · <a href={getPhotoLicenseUrl(photo)} target="_blank" rel="noreferrer">{photo.license}</a></li>; })}</ul></details>
  </div></section>;
}
