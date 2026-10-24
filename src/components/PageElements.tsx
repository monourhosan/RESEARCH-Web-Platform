import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProposalButton } from "./SiteShell";
import ResearchPhoto from "./ResearchPhoto";
import type { PhotoKey } from "@/data/photography";

export function PageIntro({ label, title, accent, description }: { label: string; title: string; accent: string; description: string }) {
  const photos: Record<string, PhotoKey> = { About: "dhaka-gathering", Services: "dhaka-gathering", "Research applications": "dhaka-market", Insights: "bangladesh-learning", Contact: "rangpur-community", Privacy: "dhaka-market", Photography: "bangladesh-river" };
  return <section className="page-intro"><div className="site-container"><div className="breadcrumbs"><Link href="/">Home</Link><ArrowRight size={12} /><span>{label}</span></div><div className="page-intro-layout"><div><h1>{title} {accent}</h1><p className="page-intro-description">{description}</p></div><ResearchPhoto photo={photos[label] || "bangladesh-learning"} className="page-intro-photo" /></div></div></section>;
}

export function PageCta() {
  return <section className="page-cta"><div className="site-container"><div><p className="handwritten">What are you curious about?</p><h2>Let’s find out, together.</h2></div><ResearchPhoto photo="rangpur-community" className="cta-photo" /><div><ProposalButton /><Link href="/contact" className="text-link">Contact the team <ArrowUpRight size={16} /></Link></div></div></section>;
}
