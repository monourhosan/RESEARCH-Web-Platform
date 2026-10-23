import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { PageIntro, PageCta } from "@/components/PageElements";
import { RESEARCH_GUIDES } from "@/data/researchData";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = { title: "Research notes & insights", description: "Practical perspectives on research briefs, qualitative and quantitative methods, and fieldwork quality.", alternates: { canonical: "/insights" } };
export default function InsightsPage() {
  return <><PageIntro label="Insights" title="A considered perspective." accent="A useful starting point." description="Practical research notes on defining questions, choosing methods, and working carefully with evidence." /><section className="section-space"><div className="site-container"><div className="article-grid">{RESEARCH_GUIDES.map((guide) => <article className="article-card" key={guide.slug}><div className="article-cover"><span>Research notebook</span><BookOpen size={62} strokeWidth={.7} /><em>{guide.category}</em></div><div className="article-card-copy"><p className="eyebrow">{guide.category} / {guide.readTime}</p><h2><Link href={`/insights/${guide.slug}`}>{guide.title}</Link></h2><p>{guide.summary}</p><Link href={`/insights/${guide.slug}`} className="text-link">Read the note <ArrowUpRight size={16} /></Link></div></article>)}</div><div className="insights-newsletter"><div className="section-heading"><p className="eyebrow">Stay curious</p><h2>Make room for a new perspective.</h2><p className="spaced-copy">Request the Mirror Metrics brief for future research perspectives and observations.</p></div><NewsletterSignup /></div></div></section><PageCta /></>;
}
