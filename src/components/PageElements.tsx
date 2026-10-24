import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProposalButton } from "./SiteShell";
import ResearchPhoto from "./ResearchPhoto";
import type { PhotoKey } from "@/data/photography";

export function PageIntro({ label, title, accent, description }: { label: string; title: string; accent: string; description: string }) {
  const photos: Record<string, PhotoKey> = { About: "wp-160846", Services: "wp-74435", "Research applications": "wp-159205", Insights: "wp-233471", Contact: "wp-221554", Privacy: "wp-98061", Photography: "wp-158729" };
  return <section className="page-intro"><div className="site-container"><div className="breadcrumbs"><Link href="/">Home</Link><ArrowRight size={12} /><span>{label}</span></div><div className="page-intro-layout"><div><h1>{title} {accent}</h1><p className="page-intro-description">{description}</p></div><ResearchPhoto photo={photos[label] || "wp-160846"} className="page-intro-photo" /></div></div></section>;
}

export function PageCta() {
  return <section className="page-cta"><div className="site-container"><div><p className="handwritten">What are you curious about?</p><h2>Let’s find out, together.</h2></div><ResearchPhoto photo="wp-18079" className="cta-photo" /><div><ProposalButton /><Link href="/contact" className="text-link">Contact the team <ArrowUpRight size={16} /></Link></div></div></section>;
}
