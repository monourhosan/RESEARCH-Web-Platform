import ResearchCharacter from "@/components/ResearchCharacter";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ResearchIntroduction() {
  return <section className="research-introduction section-space"><div className="site-container introduction-layout"><div><p className="eyebrow">About Mirror Metrics</p><h2>Local understanding.<br />Useful evidence.</h2><p>From study design to fieldwork and analysis, we turn your questions into findings you can use.</p><div className="introduction-links"><Link href="/about#methodology" className="text-link">Our approach <ArrowUpRight size={16} /></Link><Link href="/contact#faqs" className="text-link">Common questions <ArrowUpRight size={16} /></Link></div></div><ResearchCharacter /></div></section>;
}
