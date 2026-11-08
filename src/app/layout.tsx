import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import SiteShell from "@/components/SiteShell";
import "./globals.css";
import "./reference-theme.css";
import "./photography.css";
import "./market-research.css";
import "./fieldwork-gallery.css";
import "./professional.css";
import "./market-brand.css";
import "./interactions.css";
import "./photo-backgrounds.css";

const displayFont = localFont({ src: "./fonts/bricolage-grotesque-latin.woff2", variable: "--font-display", weight: "400 700", display: "swap", preload: false });
const bodyFont = localFont({ src: "./fonts/source-sans-3-latin.woff2", variable: "--font-body", weight: "200 900", display: "swap" });
const noteFont = localFont({ src: "./fonts/caveat-latin.woff2", variable: "--font-note", weight: "400 700", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://research-web-platform.vercel.app"),
  title: { default: "Mirror Metrics Research Ltd | Market & Customer Research Bangladesh", template: "%s | Mirror Metrics Research Ltd" },
  description: "Market and customer research in Bangladesh. Explore customer needs, brand perception, product concepts, and market opportunities with Mirror Metrics.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: "Mirror Metrics Research Ltd", title: "Mirror Metrics Research Ltd", description: "Human insight. Market clarity. Meaningful impact.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Mirror Metrics Research Ltd - Human insight. Market clarity. Meaningful impact." }] },
  twitter: { card: "summary_large_image", title: "Mirror Metrics Research Ltd", description: "Market & customer research in Bangladesh.", images: ["/opengraph-image"] },
  icons: { icon: "/icon.svg", apple: "/logo.png" },
};
export const viewport: Viewport = { themeColor: "#102b43", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${displayFont.variable} ${bodyFont.variable} ${noteFont.variable}`}><body><Suspense fallback={<main>{children}</main>}><SiteShell>{children}</SiteShell></Suspense></body></html>;
}
