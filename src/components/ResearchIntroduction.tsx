import ResearchCharacter from "@/components/ResearchCharacter";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ResearchIntroduction() {
  return <section className="research-introduction section-space"><div className="site-container introduction-layout"><div><p className="eyebrow">The Mirror Metrics approach</p><h2>Business questions.<br />Human understanding.</h2><p>We connect local context with structured research, from the first customer conversation to findings your team can act on.</p><ol className="market-method"><li>Define the decision</li><li>Listen &amp; measure</li><li>Explain the evidence</li></ol><div className="introduction-links"><Link href="/about#methodology" className="text-link">How we work <ArrowUpRight size={16} /></Link><Link href="/services/market-research#research-questions" className="text-link">What we investigate <ArrowUpRight size={16} /></Link></div></div><ResearchCharacter /></div></section>;
}
