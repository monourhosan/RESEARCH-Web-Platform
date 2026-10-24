import ResearchPhoto from "@/components/ResearchPhoto";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, FileText, ScanText, Compass } from "lucide-react";

const resources = [
  { Icon: FileText, label: "Company overview", title: "Meet Mirror Metrics.", description: "Our focus, research services, and approach to answering your questions.", href: "/downloads/mirror-metrics-company-profile.pdf", action: "Download company profile", download: true },
  { Icon: ScanText, label: "Illustrative work sample", title: "A study, thoughtfully scoped.", description: "An example research brief showing objectives, methods, quality checks, and deliverables. Not a client case study.", href: "/downloads/illustrative-study-brief.pdf", action: "View the sample brief", download: true },
  { Icon: Compass, label: "Research principles", title: "The thinking behind the work.", description: "Clear questions, appropriate methods, respect for participants, and transparent limitations.", href: "/about#principles", action: "Explore our principles", download: false },
];

export default function EvidenceSection() {
  return <section className="section-space evidence-section"><div className="site-container"><div className="section-heading split-heading"><div><p className="eyebrow">Get to know us</p><h2>Take a closer look at our work.</h2></div><p>Get to know the organization and see how a research question can become a structured study.</p></div><div className="resource-grid">{resources.map(({ Icon, label, title, description, href, action, download }, index) => <article className="resource-card" key={label}><ResearchPhoto photo={(["dhaka-gathering", "dhaka-market", "sreemangal-livelihood"] as const)[index]} className="resource-photo" sizes="(max-width: 767px) 90vw, 30vw" /><div className="resource-icon"><Icon size={25} strokeWidth={1.2} /><span>{label}</span></div><h3>{title}</h3><p>{description}</p>{download ? <a href={href} className="text-link" download>{action}<ArrowUpRight size={16} /></a> : <Link href={href} className="text-link">{action}<ArrowRight size={16} /></Link>}</article>)}</div></div></section>;
}
