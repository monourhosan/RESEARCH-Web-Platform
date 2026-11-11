import ResearchPhoto from "./ResearchPhoto";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollPhoto from "./ScrollPhoto";

export default function ResearchIntroduction() {
  return <section className="research-introduction section-space photo-approach"><ScrollPhoto photo="home-agricultural-interview" /><div className="photo-approach-shade" aria-hidden="true" /><div className="site-container introduction-layout"><div><h2>Insight starts with listening.</h2><p>Local understanding. Careful research. Useful answers.</p><div className="introduction-links"><Link href="/about" className="text-link">About Mirror Metrics <ArrowUpRight size={16} /></Link></div></div><ResearchPhoto photo="home-roadside-interview" className="home-listening-photo" sizes="(max-width: 767px) 90vw, 40vw" /></div><p className="site-container photo-approach-credit"><Link href="/photography#illustrative-fieldwork">AI-generated illustrative fieldwork scenes <ArrowUpRight size={12} /></Link></p></section>;
}
