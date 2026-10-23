import { HomeHero, ServicesOverview } from "@/components/HomeSections";
import ResearchShowcase from "@/components/ResearchShowcase";
import MethodologySection from "@/components/MethodologySection";
import NationwideReach from "@/components/NationwideReach";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import EvidenceSection from "@/components/EvidenceSection";
import FieldworkStory from "@/components/FieldworkStory";
import DataGraphics from "@/components/DataGraphics";
import ResearchIntroduction from "@/components/ResearchIntroduction";

export default function Home() {
  return <><HomeHero /><ResearchIntroduction /><ServicesOverview /><FieldworkStory /><MethodologySection /><NationwideReach /><DataGraphics /><EvidenceSection /><ResearchShowcase /><FaqAccordion /><ContactSection /></>;
}
