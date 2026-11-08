import ResearchCharacter from "@/components/ResearchCharacter";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollPhoto from "./ScrollPhoto";

export default function ResearchIntroduction() {
  return <section className="research-introduction section-space photo-approach"><ScrollPhoto photo="dhaka-gathering" /><div className="photo-approach-shade" aria-hidden="true" /><div className="site-container introduction-layout"><div><h2>Insight starts with listening.</h2><p>Local understanding. Careful research. Useful answers.</p><div className="introduction-links"><Link href="/about" className="text-link">About Mirror Metrics <ArrowUpRight size={16} /></Link></div></div><ResearchCharacter /></div><p className="site-container photo-approach-credit"><Link href="/photography">Dhaka · Reference photo: Ian Taylor / Pexels <ArrowUpRight size={12} /></Link></p></section>;
}
