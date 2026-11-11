import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageElements";
import { PHOTOS, getPhotoLicenseUrl, type PhotoKey } from "@/data/photography";
import { HOMEPAGE_FIELDWORK_PHOTOS } from "@/data/homepageFieldwork";

export const metadata: Metadata = { title: "Photography & credits", description: "Sources for documentary photography and details of AI-generated illustrative fieldwork scenes used on the Mirror Metrics website.", alternates: { canonical: "/photography" } };

export default function PhotographyPage() {
  return <>
    <PageIntro label="Photography" title="Bangladesh, in focus." accent="Fieldwork, in context." description="Documentary photography and illustrative fieldwork scenes reflecting the communities and contexts our research seeks to understand." />
    <section id="illustrative-fieldwork" className="section-space photography-credits"><div className="site-container">
      <div className="photography-intro"><h2>Homepage fieldwork illustrations</h2><p>The homepage uses four AI-generated, photorealistic scenes showing example household, market, roadside, and agricultural interviews in Bangladesh. These images illustrate research settings. They do not document actual Mirror Metrics fieldwork or depict verified staff, clients, or research participants.</p><p>Created with OpenAI image generation. Natural image colors are preserved; responsive crops and a green overlay are used in some placements.</p></div>
      <div className="photography-grid">{Object.entries(HOMEPAGE_FIELDWORK_PHOTOS).map(([key, photo]) => <article key={key}><h3>{photo.title}</h3><p>{photo.location}<br />{photo.credit}</p><a href={photo.src} className="text-link">View illustration <ArrowUpRight size={15} /></a></article>)}</div>
    </div></section>
    <section className="section-space photography-credits"><div className="site-container"><div className="photography-intro"><h2>About the documentary photographs</h2><p>These photographs show places and everyday life in Bangladesh. The original source pages document their locations. People pictured are not identified as Mirror Metrics employees, clients, or research participants, and no endorsement is implied.</p><p>Sources use the <a href="https://www.pexels.com/license/" className="text-link">Pexels license</a> or the WordPress Photo Directory’s <a href="https://wordpress.org/photos/license/" className="text-link">CC0 dedication</a>, as indicated below. Gallery reference photographs also use the Creative Commons attribution licenses linked with their credits. Images are displayed with responsive sizing and cropping; the original source files remain available through the source links. Credits are listed here without repeating images from other sections.</p></div><div className="photography-grid">{(Object.keys(PHOTOS) as PhotoKey[]).filter(key => !(key in HOMEPAGE_FIELDWORK_PHOTOS)).map(key => <article key={key}><h3>{PHOTOS[key].title}</h3><p>{PHOTOS[key].location}<br /><a href={PHOTOS[key].photographerUrl}>{PHOTOS[key].credit}</a><br /><a href={getPhotoLicenseUrl(PHOTOS[key])}>{PHOTOS[key].license}</a></p><a href={PHOTOS[key].source} className="text-link">Original photograph <ArrowUpRight size={15} /></a></article>)}</div><Link href="/" className="text-link photography-return">Return to Mirror Metrics <ArrowUpRight size={16} /></Link></div></section>
  </>;
}
