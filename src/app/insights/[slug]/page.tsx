import { ARTICLE_PHOTOS } from "@/data/photography";
import ResearchPhoto from "@/components/ResearchPhoto";
import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { RESEARCH_GUIDES } from "@/data/researchData";
import { PageCta } from "@/components/PageElements";

export function generateStaticParams() { return RESEARCH_GUIDES.map(guide => ({ slug: guide.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = RESEARCH_GUIDES.find(item => item.slug === slug);
  return guide ? { title: guide.title, description: guide.summary, alternates: { canonical: `/insights/${guide.slug}` }, openGraph: { title: guide.title, description: guide.summary, type: "article" } } : { title: "Note not found" };
}
export default function ResearchNote({ params }: { params: Promise<{ slug: string }> }) {
  return <Suspense fallback={<div className="site-container section-space"><p role="status">Loading research note…</p></div>}><ResearchNoteContent params={params} /></Suspense>;
}

async function ResearchNoteContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = RESEARCH_GUIDES.find(item => item.slug === slug);
  if (!guide) notFound();
  const photos = ARTICLE_PHOTOS[RESEARCH_GUIDES.findIndex(item => item.slug === slug)];
  return <><header className="article-header"><div className="site-container"><Link href="/insights" className="text-link"><ArrowLeft size={15} />All research notes</Link><p className="eyebrow">{guide.category} / {guide.readTime}</p><h1>{guide.title}</h1><p>{guide.summary}</p><span>Mirror Metrics / Research perspectives</span><ResearchPhoto photo={photos[0]} className="article-header-photo" /></div></header><article className="site-container article-body">{guide.sections.map((section, index) => <section key={section.title}><p className="eyebrow">0{index + 1}</p><h2>{section.title}</h2><p>{section.body}</p><ResearchPhoto photo={photos[index + 1]} className="article-inline-photo" /></section>)}<div className="article-endnote"><p>This is a general research planning note, not a report of a client study. An appropriate design depends on your objectives, participants, and context.</p><Link href="/contact" className="text-link">Discuss your research question <ArrowUpRight size={16} /></Link></div></article><PageCta /></>;
}
