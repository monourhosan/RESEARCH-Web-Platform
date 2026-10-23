"use client";

import { useRef, useState } from "react";
import { emailFallback, type ResearchRequest } from "@/lib/requests";
import Link from "next/link";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

export function useResearchRequest() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const sending = useRef(false);
  const submit = async (data: ResearchRequest) => {
    if (sending.current) return;
    sending.current = true;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), signal: AbortSignal.timeout(15000) });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.error || "We couldn’t confirm delivery. Please use the email option below.");
      setStatus("sent");
    } catch (issue) {
      setError(issue instanceof Error && issue.name !== "TimeoutError" && issue.name !== "AbortError" ? issue.message : "We couldn’t confirm delivery. Your details are still here; please use the email option below.");
      setStatus("error");
    } finally { sending.current = false; }
  };
  return { status, error, submit, reset: () => { setStatus("idle"); setError(""); } };
}

export function RequestFeedback({ error, data }: { error: string; data: ResearchRequest }) {
  return error ? <div className="form-error" role="alert"><p>{error}</p><a href={emailFallback(data)}>Send your request by email <ArrowUpRight size={15} /></a></div> : null;
}

export function RequestConsent({ checked, onChange, id, newsletter = false }: { checked: boolean; onChange: (checked: boolean) => void; id: string; newsletter?: boolean }) {
  return <label className="consent-label" htmlFor={id}><input id={id} type="checkbox" required checked={checked} onChange={event => onChange(event.target.checked)} /><span>{newsletter ? "I’d like to receive the Mirror Metrics brief by email." : "You may contact me about this research inquiry."} <Link href="/privacy" target="_blank" rel="noopener noreferrer">Privacy notice</Link>.</span></label>;
}

export function Honeypot({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div hidden aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" value={value} onChange={event => onChange(event.target.value)} /></label></div>;
}

export function SendingIcon() { return <LoaderCircle size={16} className="sending-spinner" aria-hidden="true" />; }
