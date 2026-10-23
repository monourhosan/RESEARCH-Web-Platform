import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import FaqAccordion from "@/components/FaqAccordion";
import { PageIntro } from "@/components/PageElements";

export const metadata: Metadata = { title: "Contact", description: "Discuss a research brief, request a proposal, or contact Mirror Metrics Research Ltd in Bangladesh.", alternates: { canonical: "/contact" } };
export default function ContactPage() {
  return <><PageIntro label="Contact" title="Every useful study starts" accent="with a conversation." description="Share the question you are trying to answer. We’ll discuss how research can help you take the next step." /><ContactSection /><FaqAccordion /></>;
}
