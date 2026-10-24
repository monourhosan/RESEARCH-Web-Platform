import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResearchPhoto from "./ResearchPhoto";
import MarketResearchExplorer from "./MarketResearchExplorer";

export default function MarketResearchSection() {
  return <section className="section-space market-research-feature" id="market-research" aria-labelledby="market-research-title"><div className="site-container">
    <div className="market-feature-intro"><div><p className="eyebrow">Market & consumer research</p><h2 id="market-research-title">Know the people.<br />Understand the market.</h2><p>Who could become your customer? What matters when they choose? What makes them stay—or look elsewhere?</p><p>We help businesses, service providers, and social enterprises in Bangladesh investigate the needs, habits, and market conditions behind those decisions.</p><Link href="/services/market-research" className="text-link">Explore our market research services <ArrowUpRight size={17} /></Link></div><ResearchPhoto photo="market-textiles" className="market-feature-photo" caption="Textile retail in Dhaka. Photograph by Tanha Tamanna Syed / Pexels." /></div>
    <MarketResearchExplorer />
    <div className="market-feature-footer"><p>From customer discovery to product testing, pricing, brand perception, retail, and customer experience.</p><Link href="/services/market-research#your-organization" className="text-link">Find an approach for your organization <ArrowUpRight size={16} /></Link></div>
  </div></section>;
}
