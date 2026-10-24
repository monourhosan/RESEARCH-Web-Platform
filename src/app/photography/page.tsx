import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageElements";
import ResearchPhoto from "@/components/ResearchPhoto";
import { PHOTOS, type PhotoKey } from "@/data/photography";

export const metadata: Metadata = { title: "Photography & credits", description: "Sources and credits for the real photography used on the Mirror Metrics website.", alternates: { canonical: "/photography" } };

export default function PhotographyPage() {
  return <><PageIntro label="Photography" title="Bangladesh, in focus." accent="Real people. Real places." description="Photographs made in Bangladesh, selected to reflect the communities and contexts our research seeks to understand." /><section className="section-space photography-credits"><div className="site-container"><div className="photography-intro"><h2>About the photographs</h2><p>Every photograph in this collection was taken in Bangladesh; the original source pages document each location. These stock images show local communities and places. The people pictured are not identified as Mirror Metrics employees, clients, or research participants, and no endorsement is implied.</p><p>The photographs are used under the <a href="https://www.pexels.com/license/" className="text-link">Pexels license <ArrowUpRight size={14} /></a>. Follow each source link for photographer information and the original image.</p></div><div className="photography-grid">{(Object.keys(PHOTOS) as PhotoKey[]).map(key => <article key={key}><ResearchPhoto photo={key} sizes="(max-width: 767px) 90vw, 30vw" /><h3>{PHOTOS[key].title}</h3><p>{PHOTOS[key].location}<br /><a href={PHOTOS[key].photographerUrl}>{PHOTOS[key].credit}</a></p><a href={PHOTOS[key].source} className="text-link">View photograph on Pexels <ArrowUpRight size={15} /></a></article>)}</div><Link href="/" className="text-link photography-return">Return to Mirror Metrics <ArrowUpRight size={16} /></Link></div></section></>;
}
