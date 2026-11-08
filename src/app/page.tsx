import { HomeHero, ServicesOverview } from "@/components/HomeSections";
import ResearchIntroduction from "@/components/ResearchIntroduction";
import { PageCta } from "@/components/PageElements";
import BangladeshResearch from "@/components/BangladeshResearch";

export default function Home() {
  return <><HomeHero /><ServicesOverview compact /><BangladeshResearch /><ResearchIntroduction /><PageCta /></>;
}
