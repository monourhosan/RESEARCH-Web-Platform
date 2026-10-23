import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProposalButton } from "./SiteShell";

export function PageIntro({ label, title, accent, description }: { label: string; title: string; accent: string; description: string }) {
  return <section className="page-intro"><div className="site-container"><div className="breadcrumbs"><Link href="/">Home</Link><ArrowRight size={12} /><span>{label}</span></div><h1>{title} {accent}</h1><p className="page-intro-description">{description}</p></div></section>;
}

export function PageCta() {
  return <section className="page-cta"><div className="site-container"><div><p className="handwritten">What are you curious about?</p><h2>Let’s find out, together.</h2></div><div><ProposalButton /><Link href="/contact" className="text-link">Contact the team <ArrowUpRight size={16} /></Link></div></div></section>;
}
