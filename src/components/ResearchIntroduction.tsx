import ResearchPhoto from "@/components/ResearchPhoto";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const commitments = [
  { title: "People first", copy: "Listen with care. Respect the people behind every response." },
  { title: "Local context", copy: "Understand the languages, places, and realities shaping an answer." },
  { title: "Careful checks", copy: "Build quality review into the design, fieldwork, and analysis." },
  { title: "Clear findings", copy: "Explain the evidence, its meaning, and its limitations." },
];

export default function ResearchIntroduction() {
  return <section className="research-introduction section-space"><div className="site-container"><p className="eyebrow">A considered way of seeing</p><div className="introduction-layout"><h2>Behind every finding is a person.<br />We make sure their perspective<br className="introduction-break" /> comes through.</h2><div><ResearchPhoto photo="dhaka-community" className="introduction-photo" /><p>We bring research design, fieldwork, and analysis together to help development organizations, public institutions, and businesses understand what matters.</p><Link href="/about" className="button button-primary">Get to know us <ArrowUpRight size={17} /></Link></div></div><div className="research-commitments">{commitments.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></div>)}</div></div></section>;
}
