import Link from "next/link";
import { ArrowUpRight, UsersRound, ScanLine, ChartNoAxesCombined } from "lucide-react";

const services = [
  { Icon: UsersRound, title: "Customer insight", copy: "Understand needs and buying decisions." },
  { Icon: ScanLine, title: "Brand & product", copy: "Test ideas, products, and brand perception." },
  { Icon: ChartNoAxesCombined, title: "Market opportunity", copy: "Explore demand, competitors, and growth." },
];

export default function MarketServices() {
  return <section id="services" className="market-services section-space"><div className="site-container">
    <div className="market-section-heading"><h2>Research services.</h2><Link href="/services" className="text-link">All services <ArrowUpRight size={16} /></Link></div>
    <div className="market-service-grid">{services.map(({ Icon, title, copy }) => <article key={title} className="market-service-card"><div className="market-service-top"><Icon size={24} strokeWidth={1.5} /></div><h3><Link href="/services/market-research#research-questions">{title}<ArrowUpRight size={18} /></Link></h3><p>{copy}</p></article>)}</div>
  </div></section>;
}
