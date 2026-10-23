"use client";

import { useProposal } from "./SiteShell";
import Hero from "./Hero";
import CorePillars from "./CorePillars";

export function HomeHero() {
  const open = useProposal();
  return <Hero onOpenProposalModal={open} />;
}
export function ServicesOverview() {
  const open = useProposal();
  return <CorePillars onOpenProposalModal={open} />;
}
