import ResearchPhoto from "@/components/ResearchPhoto";
import type { Metadata } from "next";
import { PageIntro, PageCta } from "@/components/PageElements";
import { ServicesOverview } from "@/components/HomeSections";
import { Check } from "lucide-react";

export const metadata: Metadata = { title: "Research services", description: "Social and development research, market intelligence, quantitative surveys, and qualitative fieldwork in Bangladesh.", alternates: { canonical: "/services" } };
const deliverables = ["Research framework & sampling plan", "Survey instruments & discussion guides", "Fieldwork and quality documentation", "Documented dataset & codebook", "Analytical report & executive summary", "Findings presentation & recommendations"];
export default function ServicesPage() {
  return <><PageIntro label="Services" title="Research built around" accent="the decisions ahead." description="Understand a community. Evaluate a program. Explore a market. We help define the right research approach for the questions that matter to your organization." /><ServicesOverview /><section className="section-space deliverables-section"><div className="site-container split-heading"><div className="section-heading"><p className="eyebrow">What you take away</p><h2>Findings you can put to use.</h2><p className="spaced-copy">Every proposal sets out the scope, methods, timeline, and outputs. Depending on the project, these can include:</p><ResearchPhoto photo="wp-222436" className="deliverables-photo" /></div><ul className="deliverable-list">{deliverables.map(item => <li key={item}><Check size={17} />{item}</li>)}</ul></div></section><PageCta /></>;
}
