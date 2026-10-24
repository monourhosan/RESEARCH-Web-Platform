import type { MetadataRoute } from "next";
import { RESEARCH_GUIDES } from "@/data/researchData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://mirrormetrics.vercel.app";
  return ["", "/about", "/services", "/services/market-research", "/projects", "/insights", "/contact", "/privacy", "/photography", ...RESEARCH_GUIDES.map(guide => `/insights/${guide.slug}`)].map(path => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : .7 }));
}
