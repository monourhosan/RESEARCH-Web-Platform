import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import ResearchPhoto from "./ResearchPhoto";
import { PHOTOS, getPhotoLicenseUrl } from "@/data/photography";

const steps = [
  { title: "Define the question", copy: "Start with the business decision: who to serve, what to offer, or which customer experience to improve. Agree the audience, locations, and scope." },
  { title: "Prepare for the field", copy: "Plan the sample and recruitment. Adapt questions to Bangla or relevant local languages, brief interviewers, and pilot the tools before wider collection." },
  { title: "Listen where life happens", copy: "Use agreed surveys, interviews, or group discussions to understand households, shoppers, and retailers. Explain the study and seek informed consent." },
  { title: "Check, analyse, explain", copy: "Review responses and field records, investigate inconsistencies, and analyse patterns. Present findings with their context, limitations, and practical implications." },
];

const settings = [
  { photo: "gallery-household-survey", title: "At home: understand everyday choices", copy: "Household interviews can explore needs, spending priorities, and who influences a purchase. Timing, privacy, and the language used can shape whose voice is heard.", caption: "BRAC household survey, Korail, Dhaka · 2011" },
  { photo: "gallery-local-shop", title: "In the market: see the retail context", copy: "Retailer interviews and observation can explore availability, price, customer requests, and competing products—from neighbourhood shops to busy trading areas.", caption: "A shopkeeper in Dholaikhal, Dhaka · 2012" },
] as const;

export default function BangladeshResearch() {
  return <section id="research-in-bangladesh" className="bangladesh-research section-space" aria-labelledby="bangladesh-research-title"><div className="site-container">
    <div className="bangladesh-research-heading"><div><p className="eyebrow">How research works in Bangladesh</p><h2 id="bangladesh-research-title">Local conversations.<br />A structured path to insight.</h2></div><p>A study needs to fit the people taking part. Urban and rural settings, language, travel, and daily routines all help shape the field plan.</p></div>
    <ol className="bangladesh-research-steps">{steps.map((step, index) => <li key={step.title}><span className="bangladesh-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    <div className="bangladesh-settings">{settings.map(setting => {
      const photo = PHOTOS[setting.photo];
      return <article key={setting.photo}>
        <ResearchPhoto photo={setting.photo} sizes="(max-width: 767px) 90vw, (max-width: 1279px) 45vw, 550px" caption={<><span>{setting.caption}</span><span><a href={photo.source} target="_blank" rel="noreferrer">Photo: {photo.credit}</a> · <a href={getPhotoLicenseUrl(photo)} target="_blank" rel="noreferrer">{photo.license}</a></span></>} />
        <h3>{setting.title}</h3><p>{setting.copy}</p>
      </article>;
    })}</div>
    <p className="bangladesh-photo-note">Reference photographs of Bangladesh and third-party fieldwork; the people pictured are not the Mirror Metrics team.</p>
    <div className="bangladesh-research-output"><div><p className="eyebrow">From fieldwork to your next decision</p><p><Check size={15} /> An agreed study plan <Check size={15} /> Documented findings <Check size={15} /> Clear implications</p></div><Link href="/services/market-research#how-we-work" className="text-link">Explore our research process <ArrowUpRight size={16} /></Link></div>
  </div></section>;
}
