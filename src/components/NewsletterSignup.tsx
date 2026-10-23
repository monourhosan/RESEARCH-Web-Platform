"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight, Mail, Check } from "lucide-react";
import { Honeypot, RequestConsent, RequestFeedback, SendingIcon, useResearchRequest } from "./RequestForm";
import type { ResearchRequest } from "@/lib/requests";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const delivery = useResearchRequest();
  const data: ResearchRequest = { kind: "newsletter", email, organization, consent, website };
  return <aside className="newsletter-card"><div className="newsletter-icon"><Mail size={25} strokeWidth={1.3} /><span>The Mirror Metrics brief</span></div><h3>Keep a little curiosity in your inbox.</h3><p>Research, observations, and ideas from Bangladesh. A considered view of the people and markets shaping what comes next.</p><div className="newsletter-topics"><span>Consumer intelligence</span><span>Social impact</span><span>Market perspectives</span></div>
    {delivery.status === "sent" ? <div className="newsletter-success" role="status"><Check size={22} /><strong>Your subscription request has been sent.</strong><p>Our team will follow up about receiving the brief. You have not been automatically enrolled in a mailing list.</p><button type="button" className="text-link" onClick={delivery.reset}>Use another email <ArrowUpRight size={15} /></button></div> : <form onSubmit={event => { event.preventDefault(); void delivery.submit(data); }}><label htmlFor="newsletter-email">Work email</label><input id="newsletter-email" type="email" required maxLength={254} autoComplete="email" placeholder="you@organization.com" value={email} onChange={event => setEmail(event.target.value)} /><label htmlFor="newsletter-organization">Organization <span>(optional)</span></label><input id="newsletter-organization" type="text" maxLength={180} autoComplete="organization" placeholder="Your organization" value={organization} onChange={event => setOrganization(event.target.value)} /><Honeypot value={website} onChange={setWebsite} /><RequestConsent checked={consent} onChange={setConsent} id="newsletter-consent" newsletter /><RequestFeedback error={delivery.error} data={data} /><button type="submit" className="button button-light" disabled={delivery.status === "sending"}>{delivery.status === "sending" ? <>Sending request <SendingIcon /></> : <>Request the brief <ArrowRight size={16} /></>}</button><small>A thoughtful read. No noise. You can request removal anytime.</small></form>}
  </aside>;
}
