"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, ArrowRight, Check, LockKeyhole } from "lucide-react";
import { Honeypot, RequestConsent, RequestFeedback, SendingIcon, useResearchRequest } from "./RequestForm";
import type { ResearchRequest } from "@/lib/requests";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", organization: "", email: "", researchScope: "Social & Development Research", projectDetails: "" });
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const delivery = useResearchRequest();
  const data: ResearchRequest = { kind: "contact", ...formData, consent, website };
  return (
    <section id="contact" className="section-space contact-section">
      <div className="site-container">
        <div className="contact-layout">
          <div className="contact-intro"><p className="eyebrow">Let’s talk research</p><h2>Tell us what you want to understand.</h2><p>Share a question, an early idea, or a research brief. We’ll help you find an approach that fits.</p><div className="contact-details"><div><Mail size={19} strokeWidth={1.4} /><div><span>Write to us</span><a href="mailto:inquiry@mirrormetrics.com.bd">inquiry@mirrormetrics.com.bd <ArrowUpRight size={14} /></a></div></div><div><MapPin size={19} strokeWidth={1.4} /><div><span>Find us</span><p>Dhaka, Bangladesh<br />Meetings by arrangement</p></div></div></div><p className="contact-location-note">Based in Dhaka. Looking across Bangladesh.</p></div>
          <div className="contact-form-card"><span className="eyebrow">A good place to start</span><h3>What would you like to explore?</h3><p>Share a few details about your organization and your research needs.</p>
            {delivery.status === "sent" ? <div className="inquiry-prepared" role="status"><span><Check size={27} /></span><h4>Your inquiry has been sent.</h4><p>Thank you, {formData.name}. Your brief has been sent to our research inbox. Our team can reply to {formData.email}.</p><button type="button" className="text-link" onClick={delivery.reset}>Send another inquiry</button></div> : <form onSubmit={event => { event.preventDefault(); void delivery.submit(data); }}>
              <div className="form-two-columns"><div><label htmlFor="contact-name">Full name <span>*</span></label><input id="contact-name" required autoComplete="name" placeholder="Your name" value={formData.name} onChange={event => setFormData({ ...formData, name: event.target.value })} /></div><div><label htmlFor="contact-organization">Organization <span>*</span></label><input id="contact-organization" required autoComplete="organization" placeholder="Organization name" value={formData.organization} onChange={event => setFormData({ ...formData, organization: event.target.value })} /></div></div>
              <div><label htmlFor="contact-email">Work email <span>*</span></label><input id="contact-email" required type="email" autoComplete="email" placeholder="you@organization.com" value={formData.email} onChange={event => setFormData({ ...formData, email: event.target.value })} /></div>
              <div><label htmlFor="contact-scope">Research interest</label><select id="contact-scope" value={formData.researchScope} onChange={event => setFormData({ ...formData, researchScope: event.target.value })}><option>Social &amp; Development Research</option><option>Market &amp; Consumer Intelligence</option><option>Quantitative &amp; Qualitative Fieldwork</option><option>Nationwide Survey</option><option>Other / Let’s Discuss</option></select></div>
              <div><label htmlFor="contact-details">A little about your project</label><textarea id="contact-details" rows={4} placeholder="Your research questions, locations, or expected timeline…" value={formData.projectDetails} onChange={event => setFormData({ ...formData, projectDetails: event.target.value })} /></div>
              <Honeypot value={website} onChange={setWebsite} /><RequestConsent checked={consent} onChange={setConsent} id="contact-consent" /><RequestFeedback error={delivery.error} data={data} /><button type="submit" className="button button-primary" disabled={delivery.status === "sending"}>{delivery.status === "sending" ? <>Sending inquiry <SendingIcon /></> : <>Send your inquiry <ArrowRight size={16} /></>}</button><small className="form-note"><LockKeyhole size={12} />Your details are used to respond to your inquiry.</small>
            </form>}
          </div>
        </div>
      </div>
    </section>
  );
}
