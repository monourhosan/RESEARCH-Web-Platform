"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, Search, UsersRound, ChartColumn, Waypoints, Lightbulb } from "lucide-react";
import { MARKET_STUDIES } from "@/data/marketResearch";

export default function MarketResearchExplorer() {
  const [selected, setSelected] = useState(0);
  const panelId = useId();
  const study = MARKET_STUDIES[selected];
  const stageIcons = [Search, UsersRound, ChartColumn];
  return <div className="market-explorer">
    <div className="market-explorer-heading"><span><Waypoints size={18} /> Explore a research question</span><span>Example study designs</span></div>
    <div className="market-explorer-layout">
      <div className="market-topic-list" role="group" aria-label="Market research questions">
        {MARKET_STUDIES.map((item, index) => <button type="button" key={item.id} aria-pressed={index === selected} aria-controls={panelId} onClick={() => setSelected(index)}>{item.label}<ArrowRight size={16} /></button>)}
      </div>
      <div className="market-study-panel" id={panelId} aria-live="polite" aria-atomic="true">
        <div className="market-study-content" key={study.id}>
          <h3>{study.question}</h3><p className="market-study-intro">{study.introduction}</p>
          <div className="market-people"><UsersRound size={19} /><p><strong>Whose perspective matters?</strong>{study.people}</p></div>
          <ol className="market-evidence-flow" aria-label="A possible research approach">{study.stages.map((stage, index) => { const Icon = stageIcons[index]; return <li key={stage.title}><span className="market-stage-icon"><Icon size={22} strokeWidth={1.4} /></span><h4>{stage.title}</h4><strong>{stage.method}</strong><p>{stage.detail}</p></li>; })}</ol>
          <div className="market-evidence-tags"><span>Evidence to explore</span><ul>{study.evidence.map(item => <li key={item}><Check size={12} />{item}</li>)}</ul></div>
          <div className="market-study-output"><Lightbulb size={20} /><div><h4>From evidence to a decision</h4><p>{study.decision}</p><p><strong>A possible output:</strong> {study.output}</p></div></div>
        </div>
      </div>
    </div>
    <p className="market-example-note">These examples show how a study could be structured. Methods, participants, sample size, locations, and outputs are agreed for each project.</p>
  </div>;
}
