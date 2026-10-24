import { HomeHero, ServicesOverview } from "@/components/HomeSections";
import ResearchShowcase from "@/components/ResearchShowcase";
import MethodologySection from "@/components/MethodologySection";
import NationwideReach from "@/components/NationwideReach";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import EvidenceSection from "@/components/EvidenceSection";
import FieldworkStory from "@/components/FieldworkStory";
import PublishedData from "@/components/PublishedData";
import ResearchIntroduction from "@/components/ResearchIntroduction";
import MarketResearchSection from "@/components/MarketResearchSection";
import FieldworkGallery from "@/components/FieldworkGallery";

export default function Home() {
  return <><HomeHero /><ResearchIntroduction /><ServicesOverview /><MarketResearchSection /><FieldworkStory /><FieldworkGallery /><MethodologySection /><NationwideReach /><PublishedData /><EvidenceSection /><ResearchShowcase /><FaqAccordion /><ContactSection /></>;
}
