import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import group from "../../public/illustrations/group-discussion.png";

export default function FieldworkStory() {
  return <section className="fieldwork-story section-space"><div className="site-container fieldwork-layout"><figure className="discussion-illustration"><Image src={group} alt="Hand-drawn illustration of six Bangladeshi adults taking part in a facilitated focus-group discussion" sizes="(max-width: 767px) 100vw, 55vw" /><figcaption>A focus-group discussion, illustrated.</figcaption></figure><div className="fieldwork-copy"><p className="handwritten">Make room for another perspective.</p><h2>Some answers need a conversation.</h2><p>A survey can show a pattern. A conversation can help you understand what sits behind it.</p><p>We make space for people to share experiences in their own words, through interviews, group discussions, and carefully designed qualitative research.</p><Link href="/services" className="text-link">Explore our research services <ArrowRight size={17} /></Link></div></div></section>;
}
