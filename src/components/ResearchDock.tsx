"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties, type MouseEvent } from "react";
import { UsersRound, ScanLine, ChartNoAxesCombined, ClipboardList, Compass, MessageCircle } from "lucide-react";

const shortcuts = [
  { label: "Customer insight", mobileLabel: "Customers", Icon: UsersRound, href: "/services/market-research#research-questions" },
  { label: "Brand & product", mobileLabel: "Brand", Icon: ScanLine, href: "/services/market-research#research-questions" },
  { label: "Market opportunity", mobileLabel: "Markets", Icon: ChartNoAxesCombined, href: "/services/market-research#research-questions" },
  { label: "Build a brief", mobileLabel: "Brief", Icon: ClipboardList, href: "/#research-planner" },
  { label: "Our approach", mobileLabel: "Approach", Icon: Compass, href: "/about" },
  { label: "Contact", mobileLabel: "Contact", Icon: MessageCircle, href: "/contact" },
];

export default function ResearchDock() {
  const pathname = usePathname();
  const [selection, setSelection] = useState({ index: 0, path: "/" });
  const [click, setClick] = useState<{ index: number; key: number; x: number; y: number } | null>(null);
  const active = pathname === selection.path ? selection.index : pathname.startsWith("/about") ? 4 : pathname.startsWith("/contact") ? 5 : 0;

  function onClick(event: MouseEvent<HTMLAnchorElement>, index: number, href: string) {
    // Modified clicks retain normal browser behavior without changing this page.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const box = event.currentTarget.getBoundingClientRect();
    const keyboard = event.detail === 0;
    setClick(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? null : { index, key: Date.now(), x: keyboard ? box.width / 2 : event.clientX - box.left, y: keyboard ? box.height / 2 : event.clientY - box.top });
    setSelection({ index, path: href.split("#")[0] });
  }

  return <nav className="research-dock" aria-label="Research shortcuts" style={{ "--dock-active": active } as CSSProperties}>
    <span className="research-dock-selection" aria-hidden="true" />
    {shortcuts.map(({ label, mobileLabel, Icon, href }, index) => <Link href={href} key={label} className={`research-dock-link${active === index ? " is-selected" : ""}`} aria-label={label} aria-current={pathname === href ? "page" : undefined} onClick={event => onClick(event, index, href)}>
      <span key={click?.index === index ? `icon-${click.key}` : "idle"} className={`research-dock-icon${click?.index === index ? " is-clicked" : ""}`}><Icon size={22} strokeWidth={1.6} /></span>
      <span className="research-dock-label">{label}</span><span className="research-dock-mobile-label" aria-hidden="true">{mobileLabel}</span>
      {click?.index === index && <span key={`ripple-${click.key}`} className="research-dock-ripple" aria-hidden="true" style={{ left: click.x, top: click.y }} onAnimationEnd={() => setClick(null)} />}
    </Link>)}
  </nav>;
}
