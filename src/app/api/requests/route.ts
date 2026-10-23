import { deliverRequest, validateRequest } from "@/lib/requests";

const attempts = new Map<string, { count: number; expires: number }>();
const MAX_BODY_BYTES = 16384;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowedOrigins = [new URL(request.url).origin, process.env.NEXT_PUBLIC_SITE_URL].filter(Boolean);
  if (origin && !allowedOrigins.includes(origin)) return Response.json({ error: "This request must be sent from our website." }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ error: "Please send a JSON request." }, { status: 415 });
  const now = Date.now();
  for (const [key, entry] of attempts) if (entry.expires < now) attempts.delete(key);
  // Per-instance abuse protection. Use a shared rate limiter for large multi-instance deployments.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const entry = attempts.get(ip) || { count: 0, expires: now + 60000 };
  if (entry.count >= 8) return Response.json({ error: "Please wait a minute before sending another request." }, { status: 429, headers: { "Retry-After": "60" } });
  entry.count += 1;
  attempts.set(ip, entry);
  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return Response.json({ error: "Your request is empty." }, { status: 400 });
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BODY_BYTES) { await reader.cancel(); return Response.json({ error: "Your request is too large. Please shorten your project details." }, { status: 413 }); }
      chunks.push(value);
    }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    input = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return Response.json({ error: "We couldn’t read your request. Please try again." }, { status: 400 });
  }
  const validated = validateRequest(input);
  if (validated.error || !validated.data) return Response.json({ error: validated.error }, { status: 400 });
  const result = await deliverRequest(validated.data, { apiKey: process.env.RESEND_API_KEY, from: process.env.INQUIRY_FROM_EMAIL, to: process.env.INQUIRY_TO_EMAIL });
  if (!result.ok) return Response.json({ error: result.message, emailFallback: true }, { status: result.status });
  return Response.json({ ok: true, reference: result.reference }, { headers: { "Cache-Control": "no-store" } });
}
