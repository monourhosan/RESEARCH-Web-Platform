"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import styles from "./ResearchPlanner.module.css";

const goals = {
  customers: {
    label: "Understand customer needs",
    method: "Start with interviews about recent buying decisions. Use a survey to see how common the patterns are.",
    output: "A ranked list of needs and barriers, with examples in customers’ own words.",
  },
  launch: {
    label: "Test a new product idea",
    method: "Show people a simple concept or prototype. Observe how they use it, then ask what they would change.",
    output: "A list of improvements to make before launch, with evidence for each.",
  },
  market: {
    label: "Explore a new market",
    method: "Review local competitors and prices, then interview shoppers and retailers about what is missing.",
    output: "A shortlist of market gaps and the questions to validate before investing.",
  },
};

const audiences = {
  current: "Current customers",
  potential: "Potential customers",
  retailers: "Retailers and trade partners",
};

export default function ResearchPlanner() {
  const [goal, setGoal] = useState<keyof typeof goals>("customers");
  const [audience, setAudience] = useState<keyof typeof audiences>("potential");
  const study = goals[goal];
  const people = audiences[audience];

  function downloadBrief() {
    const brief = [
      "Mirror Metrics | Research starting brief",
      "",
      `Goal: ${study.label}`,
      `Who to speak with: ${people}`,
      `Suggested approach: ${study.method}`,
      `Expected output: ${study.output}`,
      "",
      "To discuss: study locations, sample size, timing, and budget.",
    ].join("\n");
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "mirror-metrics-research-brief.txt";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <section id="research-planner" className="section-space" aria-labelledby="research-planner-title">
      <div className="site-container">
        <div className={styles.planner}>
          <div className={styles.controls}>
            <h2 id="research-planner-title">Build a research brief.</h2>
            <p>Pick a goal and who you want to hear from.</p>
            <label>
              Research goal
              <select value={goal} onChange={event => setGoal(event.target.value as keyof typeof goals)}>
                {Object.entries(goals).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}
              </select>
            </label>
            <label>
              Who to speak with
              <select value={audience} onChange={event => setAudience(event.target.value as keyof typeof audiences)}>
                {Object.entries(audiences).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
            </label>
          </div>
          <div className={styles.result}>
            <div aria-live="polite" aria-atomic="true">
              <p className="eyebrow">Suggested starting point</p>
              <h3>{study.label}</h3>
              <p className={styles.audience}>{people}</p>
              <p>{study.method}</p>
              <p><strong>What you could learn</strong> {study.output}</p>
            </div>
            <button type="button" className="button button-primary" onClick={downloadBrief}>
              Download brief <Download size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
