import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageElements";
import { PHOTOS, type PhotoKey } from "@/data/photography";

export const metadata: Metadata = { title: "Photography & credits", description: "Sources and credits for the real photography used on the Mirror Metrics website.", alternates: { canonical: "/photography" } };

export default function PhotographyPage() {
  return <><PageIntro label="Photography" title="Bangladesh, in focus." accent="Real people. Real places." description="Photographs made in Bangladesh, selected to reflect the communities and contexts our research seeks to understand." /><section className="section-space photography-credits"><div className="site-container"><div className="photography-intro"><h2>About the photographs</h2><p>These photographs show places and everyday life in Bangladesh. The original source pages document their locations. People pictured are not identified as Mirror Metrics employees, clients, or research participants, and no endorsement is implied.</p><p>Sources use the <a href="https://www.pexels.com/license/" className="text-link">Pexels license</a> or the WordPress Photo Directory’s <a href="https://wordpress.org/photos/license/" className="text-link">CC0 dedication</a>, as indicated below. Credits are listed here without repeating images from other sections.</p></div><div className="photography-grid">{(Object.keys(PHOTOS) as PhotoKey[]).map(key => <article key={key}><h3>{PHOTOS[key].title}</h3><p>{PHOTOS[key].location}<br /><a href={PHOTOS[key].photographerUrl}>{PHOTOS[key].credit}</a><br />{PHOTOS[key].license}</p><a href={PHOTOS[key].source} className="text-link">Original photograph <ArrowUpRight size={15} /></a></article>)}</div><Link href="/" className="text-link photography-return">Return to Mirror Metrics <ArrowUpRight size={16} /></Link></div></section></>;
}
