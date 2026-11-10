import { HomeHero, ServicesOverview } from "@/components/HomeSections";
import ResearchIntroduction from "@/components/ResearchIntroduction";
import { PageCta } from "@/components/PageElements";
import BangladeshResearch from "@/components/BangladeshResearch";
import HomeMotion from "@/components/HomeMotion";
import ResearchPlanner from "@/components/ResearchPlanner";

export default function Home() {
  return <HomeMotion><HomeHero /><ServicesOverview compact /><ResearchPlanner /><BangladeshResearch /><ResearchIntroduction /><PageCta /></HomeMotion>;
}
