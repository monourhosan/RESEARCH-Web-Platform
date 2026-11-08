import Link from "next/link";
import { ArrowUpRight, UsersRound, ScanLine, ChartNoAxesCombined } from "lucide-react";

const services = [
  { number: "01", Icon: UsersRound, title: "Customer insight", copy: "Understand needs, buying habits, and the experiences that make customers stay or leave.", tags: "Needs & segmentation · Customer experience" },
  { number: "02", Icon: ScanLine, title: "Brand & product research", copy: "Explore how people see your brand. Test concepts, products, and pricing before your next launch.", tags: "Brand perception · Concept & product testing" },
  { number: "03", Icon: ChartNoAxesCombined, title: "Market opportunity", copy: "Investigate demand, competitors, and channels to find where your business could grow.", tags: "Demand & opportunity · Competitors & retail" },
];

export default function MarketServices() {
  return <section id="services" className="market-services section-space"><div className="site-container">
    <div className="market-section-heading"><div><p className="eyebrow">Research for your next decision</p><h2>Clarity where it counts.</h2></div><Link href="/services/market-research" className="text-link">Explore our expertise <ArrowUpRight size={16} /></Link></div>
    <div className="market-service-grid">{services.map(({ number, Icon, title, copy, tags }) => <article key={number} className="market-service-card"><div className="market-service-top"><Icon size={24} strokeWidth={1.5} /><span>{number}</span></div><h3><Link href="/services/market-research#research-questions">{title}<ArrowUpRight size={18} /></Link></h3><p>{copy}</p><span className="market-service-tags">{tags}</span></article>)}</div>
    <div className="market-services-foot"><span>Interviews &amp; focus groups</span><span>Customer surveys</span><span>Fieldwork &amp; analysis</span><Link href="/services">All research services <ArrowUpRight size={14} /></Link></div>
  </div></section>;
}
