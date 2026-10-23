"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProposalModal from "./ProposalModal";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

const ProposalContext = createContext<() => void>(() => {});
export const useProposal = () => useContext(ProposalContext);

export function ProposalButton({ children = "Discuss your research", className = "button button-primary" }: { children?: ReactNode; className?: string }) {
  const open = useProposal();
  return <button type="button" className={className} onClick={open}>{children}<ArrowUpRight size={16} /></button>;
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const [proposalOpen, setProposalOpen] = useState(false);
  const pathname = usePathname();
  return <ProposalContext.Provider value={() => setProposalOpen(true)}><div className={`site-shell${pathname === "/" ? " is-home" : ""}`}><Header onOpenProposalModal={() => setProposalOpen(true)} /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></div><ProposalModal isOpen={proposalOpen} onClose={() => setProposalOpen(false)} /></ProposalContext.Provider>;
}
