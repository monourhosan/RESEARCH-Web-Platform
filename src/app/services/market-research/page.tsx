import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Check, ChevronDown } from "lucide-react";
import ResearchPhoto from "@/components/ResearchPhoto";
import MarketResearchExplorer from "@/components/MarketResearchExplorer";
import { ProposalButton } from "@/components/SiteShell";
import { MARKET_ORGANIZATIONS, MARKET_PROCESS, MARKET_OUTPUTS } from "@/data/marketResearch";

export const metadata: Metadata = {
  title: "Market & customer research in Bangladesh",
  description: "Understand customer needs, assess demand, test products and pricing, explore competitors and channels, and improve customer experience with research designed for your organization.",
  alternates: { canonical: "/services/market-research" },
};

const journey = [
  { stage: "Discover", question: "How did the need arise?", explore: "Information sources, first impressions, and the problem someone wants to solve." },
  { stage: "Compare", question: "What alternatives feel relevant?", explore: "Trust, price, availability, recommendations, and the criteria people use." },
  { stage: "Choose & use", question: "What makes the experience easy or difficult?", explore: "Purchase steps, payment, delivery, product use, and service expectations." },
  { stage: "Return or leave", question: "What happens after the first purchase?", explore: "Support, unresolved problems, repeat use, and reasons for switching." },
];
const faqs = [
  { question: "We have a business problem, but no research brief. Can we start there?", answer: "Yes. Tell us about the decision you face, your offer, and what you already know. We can help separate the business problem from the questions research can answer, then discuss an appropriate scope. An early conversation does not require a finished questionnaire." },
  { question: "Can a study include customers outside Dhaka?", answer: "We can discuss research in any of Bangladesh’s eight divisions. We agree the locations and access plan for the project, including whether urban, peri-urban, rural, or seasonal settings matter. The sample should follow your target market rather than simply the locations easiest to reach." },
  { question: "How are sample size, cost, and timing decided?", answer: "These depend on the decision, audience, method, recruitment difficulty, geographic spread, and required comparisons. We discuss the precision or depth needed and the practical trade-offs before proposing a sample, budget, and schedule. A larger sample does not by itself resolve a poorly defined population or biased recruitment." },
  { question: "Will research tell us exactly how much we will sell?", answer: "Research can examine needs, reactions, behaviour, and market assumptions. Stated purchase interest alone does not establish future sales. Any demand estimate or scenario needs explicit assumptions, and a live pilot or market test may be an appropriate next step before wider investment." },
  { question: "What should our organization share at the start?", answer: "A short description of your product or service, the people or organizations you want to understand, the decision ahead, relevant locations, and your preferred timing. Mention any existing evidence or constraints. Please keep confidential customer records and sensitive personal information out of the initial website inquiry." },
];

export default function MarketResearchPage() {
  return <>
    <header className="market-page-hero"><div className="site-container">
      <div className="breadcrumbs"><Link href="/">Home</Link><ArrowRight size={12} /><Link href="/services">Expertise</Link><ArrowRight size={12} /><span>Market research</span></div>
      <div className="market-hero-layout"><div><p className="eyebrow">Market & customer research in Bangladesh</p><h1>Understand your customers.<br />Find your place in the market.</h1><p className="market-hero-lead">Make your next decision with a clearer view of the people you serve, the alternatives they consider, and the market around them.</p><p>Mirror Metrics helps organizations turn questions about customers, products, brands, and growth into a structured research plan—from the first conversation to a useful findings discussion.</p><div className="market-hero-actions"><Link href="#research-questions" className="button button-primary">Explore what we can investigate <ArrowUpRight size={17} /></Link><Link href="#start-a-study" className="text-link">Plan a market study <ArrowRight size={16} /></Link></div></div><ResearchPhoto photo="market-street-life" className="market-page-hero-photo" caption="Everyday commerce in Dhaka. Photograph by Tanha Tamanna Syed / Pexels." sizes="(max-width: 767px) 90vw, 45vw" /></div>
    </div></header>
    <nav className="market-page-nav" aria-label="Market research page"><div className="site-container"><a href="#research-questions">Research questions</a><a href="#customer-journey">Customer journey</a><a href="#your-organization">Your organization</a><a href="#how-we-work">How we work</a><a href="#what-you-receive">What you receive</a></div></nav>

    <section id="research-questions" className="section-space market-questions-section"><div className="site-container">
      <div className="market-detail-heading"><div><p className="eyebrow">Start with what you need to know</p><h2>Good market research connects a question to a decision.</h2><p>A falling sales figure, a new product idea, or an expansion plan is a starting point. The next step is to understand what evidence is missing. We help define the people to include, the questions to investigate, and the comparisons that would be useful to your team.</p><p>Market research can combine conversations, surveys, observation, retail checks, and a review of existing information. The mix depends on whether you need to explore an unfamiliar issue, measure a pattern, compare alternatives, or understand a customer experience.</p></div><ResearchPhoto photo="market-retail-trade" className="market-detail-photo" caption="Local retail in Dhaka. Photograph by Juber Ahmed Sahel / Pexels." /></div>
      <MarketResearchExplorer />
    </div></section>

    <section id="customer-journey" className="section-space market-journey-section"><div className="site-container">
      <div className="market-journey-intro"><div><p className="eyebrow">See the whole experience</p><h2>The purchase is one moment.<br />The journey tells you more.</h2><p>Understanding customers means following what happens before and after a transaction. We can explore a specific journey through interviews, observation where appropriate, and structured feedback across the touchpoints that matter.</p><p>This example shows questions a journey study could investigate. Actual journeys are mapped from the evidence collected in your study.</p></div><ResearchPhoto photo="market-food-service" className="market-journey-photo" caption="A food vendor serving customers in Dhaka. Photograph by Tanha Tamanna Syed / Pexels." /></div>
      <ol className="market-journey-map" aria-label="An example customer journey">{journey.map((item, index) => <li key={item.stage}><span className="journey-point">{index + 1}</span><h3>{item.stage}</h3><h4>{item.question}</h4><p>{item.explore}</p></li>)}</ol>
      <div className="market-journey-conclusion"><span>What this can give your team</span><p>A journey map that connects customer needs and friction points to specific service, communication, or operational questions.</p></div>
    </div></section>

    <section id="your-organization" className="section-space market-organizations-section"><div className="site-container market-organizations-layout">
      <div className="market-organizations-intro"><p className="eyebrow">Research for your organization</p><h2>Different businesses.<br />Different questions.</h2><p>A consumer brand, a local retailer, and a service program do not need the same study. We shape the approach around your organization’s offer, audience, and decision.</p><ResearchPhoto photo="market-neighbourhood" className="market-organization-photo" caption="Neighbourhood commerce in Dhaka. Photograph by Nazmul Hasan Nahid / Pexels." /></div>
      <div className="market-organizations-list">{MARKET_ORGANIZATIONS.map(item => <article key={item.title}><h3>{item.title}</h3><p className="market-organization-question">{item.question}</p><p>{item.body}</p><p className="market-organization-outcome"><Check size={16} /><span>{item.outcome}</span></p></article>)}</div>
    </div></section>

    <section id="how-we-work" className="section-space market-process-section"><div className="site-container">
      <div className="market-detail-heading"><div><p className="eyebrow">From a brief to useful evidence</p><h2>A clear process.<br />A study that fits your context.</h2><p>Research in Bangladesh needs to reflect differences in shopping settings, household decision-making, access, and regional context. We discuss these factors when defining the study, rather than assuming one audience or one channel represents your whole market.</p></div><ResearchPhoto photo="market-working-day" className="market-detail-photo" caption="A working day in Dhaka. Photograph by Nazmul Hasan Nahid / Pexels." /></div>
      <ol className="market-process-list">{MARKET_PROCESS.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></li>)}</ol>
    </div></section>

    <section id="what-you-receive" className="section-space market-outputs-section"><div className="site-container">
      <div className="market-detail-heading"><div><p className="eyebrow">Evidence your team can work with</p><h2>Findings with a purpose.<br />Next steps you can discuss.</h2><p>We agree the deliverables in the proposal. The final outputs should make the evidence understandable, show how the study was conducted, and support the decision you brought to us.</p><a href="/downloads/market-research-planning-matrix.csv" download className="button button-primary">Download the planning matrix <Download size={17} /></a><p className="market-download-note">A planning guide in CSV format, with six example study designs to help your team prepare a research brief.</p></div><ResearchPhoto photo="market-bazaar" className="market-detail-photo" caption="A Dhaka bazaar. Photograph by Tanha Tamanna Syed / Pexels." /></div>
      <div className="market-outputs-grid">{MARKET_OUTPUTS.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      <p className="market-reading-note">Further reading: <a href="https://shop.esomar.org/what-we-do/code-guidelines/Decision-Makers-Guide-The-12-killer-Questions" target="_blank" rel="noreferrer">ESOMAR’s guide to assessing consumer research evidence <ArrowUpRight size={13} /></a></p>
    </div></section>

    <section id="start-a-study" className="section-space market-start-section"><div className="site-container market-start-layout">
      <div><p className="eyebrow">Let’s understand your market</p><h2>Bring us the question<br />behind your next decision.</h2><p>Tell us what you offer, whom you want to understand, and what you need to decide. We can help shape a research approach around that starting point.</p><div className="market-start-actions"><ProposalButton>Discuss a market study</ProposalButton><Link href="/contact#contact" className="text-link">Send your research question <ArrowUpRight size={16} /></Link></div><ResearchPhoto photo="market-essentials" className="market-start-photo" caption="Everyday retail in Dhaka. Photograph by Tafsin Naeem / Pexels." /></div>
      <div className="market-faq-list"><h3>A few practical questions</h3>{faqs.map(item => <details key={item.question}><summary>{item.question}<ChevronDown size={17} /></summary><p>{item.answer}</p></details>)}</div>
    </div></section>
  </>;
}
