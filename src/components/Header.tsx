"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, MapPin } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Expertise", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Our work", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ onOpenProposalModal }: { onOpenProposalModal: () => void }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) menuRef.current?.close(); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}><div className="site-container header-layout"><Link href="/" aria-label="Mirror Metrics Research Ltd home" className="brand-link"><Logo /></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link href={link.href} key={link.href} className={active(link.href) ? "is-active" : ""} aria-current={active(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav><div className="header-actions"><button type="button" className="button button-primary header-cta" onClick={onOpenProposalModal}>Request a proposal <ArrowUpRight size={15} /></button><button type="button" className="menu-toggle" aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => { menuRef.current?.showModal(); setMenuOpen(true); }}><Menu size={24} /></button></div></div></header>
    <dialog ref={menuRef} id="mobile-navigation" className="mobile-navigation" aria-label="Navigation" onClose={() => setMenuOpen(false)} onClick={event => { const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) menuRef.current?.close(); }}><div className="mobile-nav-top"><Logo size="sm" /><button type="button" aria-label="Close navigation" className="icon-button" onClick={() => menuRef.current?.close()}><X size={23} /></button></div><p className="eyebrow">Explore Mirror Metrics</p><nav aria-label="Mobile navigation">{links.map((link) => <Link href={link.href} key={link.href} aria-current={active(link.href) ? "page" : undefined} onClick={() => menuRef.current?.close()}>{link.label}<ArrowUpRight size={20} /></Link>)}<Link href="/contact#faqs" onClick={() => menuRef.current?.close()}>FAQs<ArrowUpRight size={20} /></Link></nav><button className="button button-primary" type="button" onClick={() => { menuRef.current?.close(); onOpenProposalModal(); }}>Request a proposal <ArrowUpRight size={17} /></button><div className="mobile-nav-footer"><MapPin size={15} /><span>Dhaka, Bangladesh · Nationwide perspective</span></div></dialog>
  </>;
}
