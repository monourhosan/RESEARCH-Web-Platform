export const MARKET_STUDIES = [
  {
    id: "customers", label: "Customer needs", question: "What would make someone choose us?",
    introduction: "Understand the needs, routines, motivations, and trade-offs behind a purchase. We help you look beyond age and income to the situations in which people use a product, the alternatives they already rely on, and the problems they still need to solve.",
    people: "Current customers, potential customers, people who chose an alternative, and relevant household decision-makers.",
    stages: [
      { title: "Listen", method: "Interviews & group discussions", detail: "Explore needs, everyday routines, and the language people use." },
      { title: "Measure", method: "A structured customer survey", detail: "Examine usage, purchase triggers, and priorities across the agreed sample." },
      { title: "Compare", method: "Needs-based customer profiles", detail: "Look for meaningful differences between groups and buying situations." },
    ],
    evidence: ["Unmet needs", "Purchase triggers", "Alternatives used", "Reasons for switching"],
    output: "Customer profiles, a needs-and-barriers map, and clearly described priority groups.",
    decision: "Decide whom to serve first, which problem to address, and how to describe your offer in terms customers understand.",
  },
  {
    id: "demand", label: "Demand & opportunity", question: "Is there a useful opportunity for our offer?",
    introduction: "Before expanding or launching, define the category, location, and audience you want to serve. We can combine available market information with customer and trade research to examine category use, unmet demand, access barriers, and the assumptions behind an opportunity estimate.",
    people: "Category users and non-users, potential buyers, retailers, distributors, and sector stakeholders relevant to the market.",
    stages: [
      { title: "Define", method: "Desk research & market mapping", detail: "Set the category boundaries and review available secondary evidence." },
      { title: "Investigate", method: "Customer & trade research", detail: "Explore current use, unmet needs, access, and interest in the proposed offer." },
      { title: "Assess", method: "Opportunity scenarios", detail: "Connect the evidence to explicit assumptions and practical constraints." },
    ],
    evidence: ["Category participation", "Unmet demand", "Access barriers", "Adoption conditions"],
    output: "A market opportunity assessment with an evidence trail, assumptions, and remaining gaps.",
    decision: "Identify which locations or customer groups warrant further testing before committing to a wider launch.",
  },
  {
    id: "pricing", label: "Price & product", question: "What feels useful, credible, and worth paying for?",
    introduction: "Explore how customers understand your product, service, pack, or concept. We can investigate which features matter, how people judge value, and how reactions change when the offer or price changes. The design separates stated interest from evidence about actual buying behaviour.",
    people: "Relevant category buyers, intended users, household purchasers, and decision-makers for the proposed offer.",
    stages: [
      { title: "Explore", method: "Concept & product interviews", detail: "Check comprehension, relevance, concerns, and perceived alternatives." },
      { title: "Test", method: "Structured concept or price study", detail: "Use consistent materials and an appropriate comparison design." },
      { title: "Refine", method: "Offer & value comparison", detail: "Examine appeal alongside affordability, credibility, and usage context." },
    ],
    evidence: ["Concept understanding", "Feature priorities", "Perceived value", "Price reactions"],
    output: "Concept feedback, value and price findings, and recommendations for the next test.",
    decision: "Refine a proposition, pack, feature set, or price hypothesis before taking it to a pilot or live market test.",
  },
  {
    id: "brand", label: "Brand & competitors", question: "How do people see us beside the alternatives?",
    introduction: "Understand whether people know your brand, what they associate with it, and why it enters or leaves their consideration. Competitor research can examine publicly visible offers, customer perceptions, and the alternatives people actually use, including informal or non-branded options.",
    people: "People aware and unaware of the brand, current and former customers, and buyers of competing or substitute offers.",
    stages: [
      { title: "Discover", method: "Exploratory brand interviews", detail: "Learn which alternatives and associations arise without prompting." },
      { title: "Measure", method: "Awareness & perception survey", detail: "Distinguish unprompted awareness, prompted awareness, and consideration." },
      { title: "Position", method: "Brand & competitor comparison", detail: "Compare perceptions with the promise your organization wants to make." },
    ],
    evidence: ["Brand awareness", "Consideration", "Trust & associations", "Competitive alternatives"],
    output: "An awareness and perception profile, competitor overview, and positioning questions to test.",
    decision: "Choose which audience, message, or brand promise to investigate further, and establish measures for later tracking.",
  },
  {
    id: "channels", label: "Retail & channels", question: "Where does the route to the customer break down?",
    introduction: "A product can be relevant and still be difficult to find, buy, or recommend. We can investigate the route from supplier to outlet to customer, looking at availability, assortment, visibility, retailer experience, and the role of physical and digital channels.",
    people: "Customers, outlet owners, sales staff, distributors, and other participants in the agreed distribution chain.",
    stages: [
      { title: "Map", method: "Channel & outlet mapping", detail: "Define the outlet types, locations, and routes relevant to the category." },
      { title: "Observe", method: "Retail audits & trade interviews", detail: "Review availability and presentation using a consistent checklist." },
      { title: "Connect", method: "Shopper & channel comparison", detail: "Relate shopping habits to what customers encounter at each touchpoint." },
    ],
    evidence: ["Product availability", "Shopping channels", "Retailer barriers", "Purchase convenience"],
    output: "A channel map, outlet findings, and a practical view of distribution and shopper barriers.",
    decision: "Prioritize the channels, outlet types, locations, or retailer support that deserve a closer operational test.",
  },
  {
    id: "experience", label: "Customer experience", question: "What makes people stay, leave, or come back?",
    introduction: "Follow the experience from the first enquiry through purchase, use, support, and renewal. We can examine where expectations and delivery differ, what customers find difficult, and how experiences vary between locations, channels, or customer groups.",
    people: "New, repeat, and former customers; people who abandoned a purchase; and relevant frontline or service staff.",
    stages: [
      { title: "Trace", method: "Customer journey interviews", detail: "Reconstruct specific experiences rather than relying on general impressions." },
      { title: "Measure", method: "Experience & satisfaction survey", detail: "Examine touchpoints, effort, resolution, and reasons for leaving." },
      { title: "Prioritize", method: "Journey & issue analysis", detail: "Compare recurring problems with customer priorities and operational context." },
    ],
    evidence: ["Touchpoint experience", "Unresolved problems", "Reasons for leaving", "Repeat-use motivations"],
    output: "A customer journey map, experience findings, and an issue-priority discussion for your team.",
    decision: "Choose which service problems to address first and define measures to assess a subsequent improvement.",
  },
] as const;

export const MARKET_ORGANIZATIONS = [
  { title: "Consumer brands & manufacturers", question: "Who is buying, what matters, and why do they switch?", body: "We can study category habits, product use, brand perceptions, pack preferences, and shopping occasions. Including current users, competitor users, and non-users helps distinguish a product issue from a communication or access issue.", outcome: "Use the findings to refine a proposition, identify a customer group to investigate, or plan a product and packaging test." },
  { title: "Retailers & e-commerce businesses", question: "What helps a shopper complete the purchase?", body: "Research can explore assortment, discovery, trust, payment preferences, delivery expectations, returns, and the reasons people abandon a purchase. Store visits, interviews, and surveys can connect what shoppers say with the experience your channels offer.", outcome: "Use the findings to prioritize changes to the shopping journey and decide what to test in store or online." },
  { title: "Financial & digital service providers", question: "What makes a service feel understandable and accessible?", body: "We can explore service awareness, onboarding experiences, trust, perceived costs, and barriers to continued use. A study should consider people who struggle to access or use the service, alongside existing users, with appropriate care for sensitive information.", outcome: "Use the findings to improve explanations, investigate adoption barriers, and plan a more inclusive service experience." },
  { title: "Health, education & other service organizations", question: "How do people choose a provider and judge their experience?", body: "The person paying, the person using a service, and the person making the decision may be different. We can investigate expectations, information sources, convenience, affordability, and service experiences while respecting consent and the sensitivity of the setting.", outcome: "Use the findings to understand different decision-makers and identify access or service issues worth addressing." },
  { title: "NGOs, development programs & social enterprises", question: "Does an offer fit the people it is intended to reach?", body: "Market research can help examine demand for a service, affordability, local supply, and the practical conditions for uptake. We distinguish participants, users, and purchasers, and can include underserved groups and local providers when the study calls for them.", outcome: "Use the findings to adapt a service model, explore a local value chain, or design a pilot around community needs." },
  { title: "B2B suppliers, SMEs & expanding businesses", question: "How do organizations select and keep a supplier?", body: "Business buying often involves several roles: users, procurement teams, technical reviewers, owners, and budget holders. Interviews and targeted surveys can investigate purchase criteria, approval processes, service expectations, and reasons for changing suppliers.", outcome: "Use the findings to clarify your target accounts, refine a business offer, and assess an expansion hypothesis." },
];

export const MARKET_PROCESS = [
  { title: "Define the decision", body: "We discuss your offer, existing evidence, intended audience, and the decision ahead. Together, we turn a broad concern into research questions, a defined scope, and a proposal with agreed outputs." },
  { title: "Include the right perspectives", body: "We identify whose experience matters and develop a recruitment or sampling approach. Current customers alone may not explain missed demand; former customers, non-users, trade partners, or other decision-makers may also be relevant." },
  { title: "Pilot, listen, and collect", body: "Questions and materials are tested before the main study. We agree participant consent, field instructions, supervision, and validation checks. Locations, interview format, languages, access, and travel are planned for the project." },
  { title: "Analyze with context", body: "We clean and document the data, compare the groups the design can support, and bring qualitative accounts together with measured patterns. We distinguish observations from interpretation and explain coverage, assumptions, and limitations." },
  { title: "Turn findings into next steps", body: "We present the evidence around your original decision. A discussion with your team can identify priorities, unresolved questions, practical tests, and measures for future tracking. Recommendations remain tied to what the study can support." },
];

export const MARKET_OUTPUTS = [
  { title: "A decision-focused findings report", body: "An executive summary, supporting evidence, implications, and specific questions or actions for your team to consider." },
  { title: "Customer profiles & needs", body: "Clearly described customer groups, motivations, barriers, and buying situations where the study supports this level of analysis." },
  { title: "Market & competitor context", body: "A documented view of relevant alternatives, channels, available market evidence, and the assumptions behind any estimates." },
  { title: "Journey, concept, or channel findings", body: "Visual outputs matched to the question: a customer journey, concept comparison, retail map, or issue-priority framework." },
  { title: "Documented data & methods", body: "An agreed dataset, codebook, analysis tables, instrument, and methods notes, with access and confidentiality arrangements defined in the scope." },
  { title: "A findings discussion", body: "A presentation or workshop to review what the evidence means, where uncertainty remains, and which next step is realistic." },
];
