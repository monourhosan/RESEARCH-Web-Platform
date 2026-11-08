import { HomeHero, ServicesOverview } from "@/components/HomeSections";
import ResearchIntroduction from "@/components/ResearchIntroduction";
import { PageCta } from "@/components/PageElements";

export default function Home() {
  return <><HomeHero /><ServicesOverview compact /><ResearchIntroduction /><PageCta /></>;
}
