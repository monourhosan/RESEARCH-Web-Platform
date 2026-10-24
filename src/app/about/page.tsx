import ResearchPhoto from "@/components/ResearchPhoto";
import type { Metadata } from "next";
import { PageIntro, PageCta } from "@/components/PageElements";
import EvidenceSection from "@/components/EvidenceSection";
import MethodologySection from "@/components/MethodologySection";
import FieldworkStory from "@/components/FieldworkStory";
import { Compass, UsersRound, Scale, ScanLine } from "lucide-react";

export const metadata: Metadata = { title: "About", description: "Get to know Mirror Metrics Research Ltd and our approach to social and market research in Bangladesh.", alternates: { canonical: "/about" } };
const principles = [
  { Icon: Compass, title: "Start with purpose.", body: "The decision comes first. We shape the research question and the approach around what you need to understand." },
  { Icon: UsersRound, title: "Keep people in view.", body: "Participants bring context that numbers alone cannot capture. Clear communication, appropriate language, and respectful research matter." },
  { Icon: ScanLine, title: "Make the process visible.", body: "From sampling to field checks and analysis, a documented process helps make the evidence easier to understand and assess." },
  { Icon: Scale, title: "Be clear about the limits.", body: "Research is useful when its boundaries are visible. Findings, interpretation, and recommendations should be clearly distinguished." },
];
export default function AboutPage() {
  return <><PageIntro label="About" title="Curious about people." accent="Careful with their stories." description="Mirror Metrics Research Ltd is a social and market research organization in Bangladesh. We bring thoughtful questions, local context, and structured inquiry together." /><FieldworkStory /><section id="principles" className="section-space"><div className="site-container"><div className="section-heading split-heading"><div><p className="eyebrow">What guides our work</p><h2>Research that respects the people behind it.</h2></div><p>We work across social and development research, market and consumer intelligence, and quantitative and qualitative fieldwork.</p></div><ResearchPhoto photo="dhaka-gathering" className="section-photo-strip" /><div className="principles-grid">{principles.map(({ Icon, title, body }) => <article key={title}><Icon size={27} strokeWidth={1.3} /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><MethodologySection /><EvidenceSection /><PageCta /></>;
}
