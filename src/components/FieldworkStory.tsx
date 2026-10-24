import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ResearchPhoto from "./ResearchPhoto";

export default function FieldworkStory() {
  return <section className="fieldwork-story section-space"><div className="site-container fieldwork-layout"><ResearchPhoto photo="dhaka-gathering" className="fieldwork-photo" caption="Community life in Dhaka, Bangladesh. Photograph by Ian Taylor / Pexels." /><div className="fieldwork-copy"><p className="handwritten">Make room for another perspective.</p><h2>Some answers need a conversation.</h2><p>A survey can show a pattern. A conversation can help you understand what sits behind it.</p><p>We make space for people to share experiences in their own words, through interviews, group discussions, and carefully designed qualitative research.</p><Link href="/services" className="text-link">Explore our research services <ArrowRight size={17} /></Link></div></div></section>;
}
