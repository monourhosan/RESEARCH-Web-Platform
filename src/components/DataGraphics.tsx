"use client";

import { useState, type CSSProperties } from "react";
import { ArrowUpRight, ChevronDown, ChartNoAxesCombined } from "lucide-react";
import Link from "next/link";

const examples = [
  {
    id: "social",
    label: "Social research",
    question: "What would make a local service easier to use?",
    responses: [
      { label: "Closer location", share: 38 },
      { label: "Clearer information", share: 28 },
      { label: "Shorter waiting time", share: 22 },
      { label: "Extended opening hours", share: 12 },
    ],
    ages: [30, 40, 30],
    observation: "Location leads in this example. A follow-up conversation could explore which journeys people find difficult, and why.",
  },
  {
    id: "market",
    label: "Market research",
    question: "What matters most when choosing a new product?",
    responses: [
      { label: "Product quality", share: 36 },
      { label: "Fair pricing", share: 28 },
      { label: "A brand I trust", share: 22 },
      { label: "Easy availability", share: 14 },
    ],
    ages: [35, 40, 25],
    observation: "Quality leads in this example. Interviews could help explain what people mean by quality before a product decision is made.",
  },
];

const ageLabels = ["18–29 years", "30–44 years", "45+ years"];
const colors = ["#004f40", "#759e7f", "#b18b45"];
const sampleSize = 200;

export default function DataGraphics() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState(0);
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const example = examples[exampleIndex];
  const response = example.responses[selectedResponse];

  function changeExample(index: number) {
    setExampleIndex(index);
    setSelectedResponse(0);
    setSelectedAge(null);
  }

  return (
    <section id="data-graphics" className="section-space data-section" aria-labelledby="data-heading">
      <div className="site-container">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">From responses to understanding</p><h2 id="data-heading">Make the findings easier to see.</h2></div>
          <p>Clear graphics help a team see patterns, ask better questions, and decide what to explore next.</p>
        </div>

        <div className="data-workbook">
          <div className="data-toolbar">
            <div className="data-workbook-label"><ChartNoAxesCombined size={20} strokeWidth={1.5} /><span>The research, visualized</span><span className="data-example-badge">Illustrative data</span></div>
            <div className="data-switch" role="group" aria-label="Chart examples">
              {examples.map((item, index) => <button key={item.id} type="button" aria-pressed={exampleIndex === index} aria-controls="example-charts" onClick={() => changeExample(index)}>{item.label}</button>)}
            </div>
          </div>

          <div id="example-charts" className="data-chart-grid">
            <figure className="response-chart">
              <figcaption><p className="data-chart-kicker">Priorities at a glance</p><h3>{example.question}</h3><p>One answer per person · Example sample: {sampleSize} adults</p></figcaption>
              <div className="response-bars" role="group" aria-label="Explore response values">
                {example.responses.map((item, index) => <button className="response-bar" type="button" key={index} aria-pressed={selectedResponse === index} aria-label={`${item.label}: ${item.share}%, ${item.share * 2} of ${sampleSize} example responses`} onPointerEnter={(event) => { if (event.pointerType === "mouse") setSelectedResponse(index); }} onFocus={() => setSelectedResponse(index)} onClick={() => setSelectedResponse(index)}>
                  <span className="response-bar-label"><span>{item.label}</span><strong>{item.share}<span>%</span></strong></span>
                  <span className="response-track" aria-hidden="true"><span className="response-fill" style={{ width: `${item.share * 2}%` }} /></span>
                </button>)}
                <div className="response-axis" aria-hidden="true"><span>0%</span><span>25%</span><span>50%</span></div>
              </div>
              <p className="response-detail"><span className="data-detail-dot" aria-hidden="true" /><span><strong>{response.share * 2} of {sampleSize}</strong> chose “{response.label}”.</span></p>
            </figure>

            <figure className="profile-chart">
              <figcaption><p className="data-chart-kicker">Put the findings in context</p><h3>Who is represented?</h3><p>Age profile of the example sample</p></figcaption>
              <div className="profile-ring" role="img" aria-label={`Illustrative age profile: ${ageLabels.map((label, index) => `${label}: ${example.ages[index]}%`).join(", ")}.`}>
                <svg viewBox="0 0 200 200" aria-hidden="true">
                  {example.ages.map((share, index) => {
                    const offset = example.ages.slice(0, index).reduce((sum, value) => sum + value, 0);
                    return <circle key={index} cx="100" cy="100" r="78" pathLength="100" fill="none" stroke={colors[index]} strokeWidth="21" strokeDasharray={`${share - 1.4} ${100 - share + 1.4}`} strokeDashoffset={-offset} className={selectedAge !== null && selectedAge !== index ? "ring-segment is-muted" : "ring-segment"} />;
                  })}
                </svg>
                <div className="profile-ring-label" aria-hidden="true"><strong>{selectedAge === null ? sampleSize : `${example.ages[selectedAge]}%`}</strong><span>{selectedAge === null ? "example participants" : ageLabels[selectedAge]}</span></div>
              </div>
              <div className="profile-legend" role="group" aria-label="Explore age groups">
                {ageLabels.map((label, index) => <button type="button" key={label} aria-pressed={selectedAge === index} onPointerEnter={(event) => { if (event.pointerType === "mouse") setSelectedAge(index); }} onPointerLeave={(event) => { if (event.pointerType === "mouse" && event.currentTarget !== document.activeElement) setSelectedAge(null); }} onFocus={() => setSelectedAge(index)} onBlur={() => setSelectedAge(null)} onClick={() => setSelectedAge(index)} style={{ "--segment-color": colors[index] } as CSSProperties}><span className="legend-swatch" aria-hidden="true" /><span>{label}</span><strong>{example.ages[index]}%</strong></button>)}
              </div>
            </figure>
          </div>

          <div className="data-reading"><span className="handwritten">Look closer.</span><p>{example.observation}</p><Link href="/services" className="text-link">Explore our approach <ArrowUpRight size={17} /></Link></div>
          <div className="data-source-note"><p>All figures are invented to demonstrate presentation. They are not client findings or estimates for Bangladesh. Each example uses an unweighted sample of 200; percentages total 100%.</p>
            <details className="data-table-details"><summary>View the data table <ChevronDown size={15} /></summary><div className="data-table-scroll"><table><caption>{example.label} example · {sampleSize} illustrative participants</caption><thead><tr><th scope="col">Measure</th><th scope="col">People</th><th scope="col">Share</th></tr></thead><tbody>{example.responses.map(item => <tr key={item.label}><th scope="row">{item.label}</th><td>{item.share * 2}</td><td>{item.share}%</td></tr>)}<tr className="data-table-divider"><th colSpan={3} scope="colgroup">Age profile of the same sample</th></tr>{ageLabels.map((label, index) => <tr key={label}><th scope="row">{label}</th><td>{example.ages[index] * 2}</td><td>{example.ages[index]}%</td></tr>)}</tbody></table></div></details>
          </div>
        </div>
      </div>
    </section>
  );
}
