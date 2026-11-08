"use client";

import { useProposal } from "./SiteShell";
import Hero from "./Hero";
import CorePillars from "./CorePillars";
import MarketServices from "./MarketServices";

export function HomeHero() {
  const open = useProposal();
  return <Hero onOpenProposalModal={open} />;
}
export function ServicesOverview({ compact = false }: { compact?: boolean }) {
  const open = useProposal();
  return compact ? <MarketServices /> : <CorePillars onOpenProposalModal={open} />;
}
