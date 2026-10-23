export type RequestKind = "contact" | "proposal" | "newsletter";
export type ResearchRequest = {
  kind: RequestKind;
  name?: string;
  email: string;
  organization?: string;
  researchScope?: string;
  projectDetails?: string;
  studyType?: string;
  geography?: string;
  methodology?: string;
  sampleSize?: number;
  consent: boolean;
  website?: string;
};

const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
export function validateRequest(input: unknown): { data: ResearchRequest; error?: never } | { data?: never; error: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { error: "Please provide your request details." };
  const value = input as Record<string, unknown>;
  if (!["contact", "proposal", "newsletter"].includes(String(value.kind))) return { error: "Please select a valid request type." };
  if (typeof value.email !== "string" || value.email.length > 254 || !emailPattern.test(value.email.trim())) return { error: "Please enter a valid email address." };
  if (value.consent !== true) return { error: "Please confirm that we may contact you about this request." };
  if (value.website) return { error: "This request could not be accepted." };
  const data: ResearchRequest = { kind: value.kind as RequestKind, email: value.email.trim(), consent: true };
  const limits = { name: 120, organization: 180, researchScope: 150, projectDetails: 5000, studyType: 150, geography: 150, methodology: 180 } as const;
  for (const [key, limit] of Object.entries(limits)) {
    const field = value[key];
    if (field === undefined) continue;
    if (typeof field !== "string" || field.length > limit) return { error: `Please shorten or correct the ${key.replace(/([A-Z])/g, " $1").toLowerCase()} field.` };
    (data as Record<string, unknown>)[key] = field.trim();
  }
  if (data.kind !== "newsletter" && (!data.name || data.name.length < 2)) return { error: "Please enter your full name." };
  if (data.kind === "contact" && !data.organization) return { error: "Please enter your organization." };
  if (data.kind === "proposal") {
    if (!data.studyType || !data.geography || !data.methodology) return { error: "Please complete your study settings." };
    if (typeof value.sampleSize !== "number" || !Number.isInteger(value.sampleSize) || value.sampleSize < 300 || value.sampleSize > 12000) return { error: "Choose a sample size between 300 and 12,000." };
    data.sampleSize = value.sampleSize;
  }
  return { data };
}

export function requestEmail(data: ResearchRequest) {
  const title = data.kind === "newsletter" ? "Newsletter subscription request" : data.kind === "proposal" ? "Research proposal request" : "Research inquiry";
  const fields = [
    ["Name", data.name], ["Organization", data.organization], ["Email", data.email],
    ["Research interest", data.researchScope], ["Study type", data.studyType],
    ["Geography", data.geography], ["Methodology", data.methodology], ["Sample size", data.sampleSize],
  ];
  return { subject: `Mirror Metrics | ${title}`, text: `${title}\n\n${fields.filter(([, value]) => value !== undefined && value !== "").map(([key, value]) => `${key}: ${value}`).join("\n")}\n\n${data.projectDetails || ""}\n\nContact consent: explicitly provided.${data.kind === "newsletter" ? "\nRequest to receive the Mirror Metrics brief. This email is a subscription request, not an automated enrollment." : ""}` };
}

export function emailFallback(data: ResearchRequest) {
  const email = requestEmail(data);
  return `mailto:inquiry@mirrormetrics.com.bd?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.text)}`;
}

export type DeliverySettings = { apiKey?: string; from?: string; to?: string };
export async function deliverRequest(data: ResearchRequest, settings: DeliverySettings, send: typeof fetch = fetch) {
  if (!settings.apiKey || !settings.from || !settings.to) return { ok: false as const, status: 503, message: "Online delivery is not available yet. You can send your details directly by email below." };
  const email = requestEmail(data);
  try {
    const response = await send("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${settings.apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: settings.from, to: [settings.to], reply_to: data.email, subject: email.subject, text: email.text }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return { ok: false as const, status: 502, message: "We couldn’t confirm delivery. Your details are still here; please try again or send them by email." };
    const result = await response.json();
    if (!result || typeof result.id !== "string" || !result.id) return { ok: false as const, status: 502, message: "We couldn’t confirm delivery. Please send your request by email." };
    return { ok: true as const, reference: result.id };
  } catch {
    return { ok: false as const, status: 502, message: "We couldn’t confirm delivery. Please try again or use the email option below." };
  }
}
