import { HomeHero, ServicesOverview } from "@/components/HomeSections";
import ResearchShowcase from "@/components/ResearchShowcase";
import MethodologySection from "@/components/MethodologySection";
import NationwideReach from "@/components/NationwideReach";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import EvidenceSection from "@/components/EvidenceSection";
import FieldworkStory from "@/components/FieldworkStory";

export default function Home() {
  return <><HomeHero /><ServicesOverview /><FieldworkStory /><MethodologySection /><NationwideReach /><EvidenceSection /><ResearchShowcase /><FaqAccordion /><ContactSection /></>;
}
