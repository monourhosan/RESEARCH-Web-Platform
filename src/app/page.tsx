import { HomeHero, ServicesOverview } from "@/components/HomeSections";
import ResearchIntroduction from "@/components/ResearchIntroduction";
import { PageCta } from "@/components/PageElements";
import BangladeshResearch from "@/components/BangladeshResearch";
import HomeMotion from "@/components/HomeMotion";

export default function Home() {
  return <HomeMotion><HomeHero /><ServicesOverview compact /><BangladeshResearch /><ResearchIntroduction /><PageCta /></HomeMotion>;
}
