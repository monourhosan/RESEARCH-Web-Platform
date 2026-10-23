"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ClipboardList, X } from "lucide-react";
import { BANGLADESH_DIVISIONS } from "@/data/researchData";
import { Honeypot, RequestConsent, RequestFeedback, SendingIcon, useResearchRequest } from "./RequestForm";
import type { ResearchRequest } from "@/lib/requests";

export default function ProposalModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [studyType, setStudyType] = useState("Social & Development Research");
  const [geography, setGeography] = useState("Nationwide / to be scoped");
  const [methodology, setMethodology] = useState("Digital face-to-face survey");
  const [sampleSize, setSampleSize] = useState(2400);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const delivery = useResearchRequest();
  useEffect(() => {
    if (isOpen && !ref.current?.open) ref.current?.showModal();
    if (!isOpen && ref.current?.open) ref.current.close();
  }, [isOpen]);
  const enumerators = Math.max(12, Math.ceil(sampleSize / 150));
  const data: ResearchRequest = { kind: "proposal", name, email, studyType, geography, methodology, sampleSize, consent, website };
  return (
    <dialog ref={ref} className="proposal-dialog" aria-labelledby="proposal-title" onClose={onClose} onClick={event => { const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) ref.current?.close(); }}>
      <div className="proposal-header"><span><ClipboardList size={16} /> Your next research study</span><button type="button" aria-label="Close proposal dialog" onClick={() => ref.current?.close()}><X size={21} /></button></div>
      <div className="proposal-body"><p className="eyebrow">A clearer starting point</p><h2 id="proposal-title">Let’s shape your research.</h2><p>Outline your study below. We’ll use these details to discuss the scope, approach, and practical next steps.</p>
        {delivery.status === "sent" ? <div className="inquiry-prepared" role="status"><span><Check size={27} /></span><h4>Your request has been sent.</h4><p>Thank you, {name}. Your study details have been sent to our research inbox. Our team can reply to {email}.</p><button type="button" className="button button-primary" onClick={() => { delivery.reset(); ref.current?.close(); }}>Return to the website <ArrowUpRight size={16} /></button></div> : <form onSubmit={event => { event.preventDefault(); void delivery.submit(data); }}>
          <fieldset disabled={delivery.status === "sending"}><legend>01 / What would you like to understand?</legend><div className="proposal-types">{["Social & Development Research", "Market & Consumer Intelligence", "Quantitative & Qualitative Fieldwork"].map(type => <button type="button" key={type} aria-pressed={studyType === type} onClick={() => setStudyType(type)}>{type}</button>)}</div></fieldset>
          <div className="form-two-columns"><div><label htmlFor="proposal-geography">02 / Geographic scope</label><select id="proposal-geography" value={geography} onChange={event => setGeography(event.target.value)}><option>Nationwide / to be scoped</option>{BANGLADESH_DIVISIONS.map(item => <option key={item.id}>{item.name}</option>)}</select></div><div><label htmlFor="proposal-method">03 / Research approach</label><select id="proposal-method" value={methodology} onChange={event => setMethodology(event.target.value)}><option>Digital face-to-face survey</option><option>Qualitative interviews & focus groups</option><option>Mixed methods</option><option>Telephone survey</option><option>Let’s decide together</option></select></div></div>
          <div><div className="sample-heading"><label htmlFor="proposal-sample">04 / Indicative sample size</label><output htmlFor="proposal-sample">{sampleSize.toLocaleString("en-US")} participants</output></div><input id="proposal-sample" type="range" min={300} max={12000} step={100} value={sampleSize} onChange={event => setSampleSize(Number(event.target.value))} /><div className="range-labels"><span>300 / Pilot</span><span>12,000 / Large study</span></div></div>
          <div><div className="proposal-estimates"><div><strong>{enumerators}</strong><span>Indicative field staff</span></div><div><strong>{Math.max(2, Math.ceil(enumerators / 5))}</strong><span>Indicative supervisors</span></div><div><strong>~{Math.max(14, Math.ceil(sampleSize / (enumerators * 4.5)))}</strong><span>Field days</span></div><div><strong>{Math.round(sampleSize * .1)}</strong><span>Illustrative 10% checks</span></div></div><p className="proposal-note">Illustrative planning estimates for a face-to-face survey, not a quotation or delivery commitment. Qualitative designs, locations, and interview length require a separate field plan.</p></div>
          <div className="form-two-columns"><div><label htmlFor="proposal-name">Your name *</label><input id="proposal-name" required minLength={2} maxLength={120} autoComplete="name" placeholder="Your full name" value={name} onChange={event => setName(event.target.value)} /></div><div><label htmlFor="proposal-email">Work email *</label><input id="proposal-email" type="email" required maxLength={254} autoComplete="email" placeholder="you@organization.com" value={email} onChange={event => setEmail(event.target.value)} /></div></div>
          <Honeypot value={website} onChange={setWebsite} /><RequestConsent checked={consent} onChange={setConsent} id="proposal-consent" /><RequestFeedback error={delivery.error} data={data} />
          <div className="proposal-actions"><button type="button" className="text-link" onClick={() => ref.current?.close()}>Cancel</button><button type="submit" disabled={delivery.status === "sending"} className="button button-primary">{delivery.status === "sending" ? <>Sending request <SendingIcon /></> : <>Request a proposal <ArrowUpRight size={16} /></>}</button></div>
        </form>}
      </div>
    </dialog>
  );
}
