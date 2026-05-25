import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";

// POST /api/lead
//
// Validates the brief-form submission with the shared Zod schema, then forwards
// the lead to LEAD_WEBHOOK_URL. The forward is best-effort: if the env var is
// unset OR the webhook is unreachable, we still return 200 so the visitor isn't
// blocked. The submission is also console.logged so Vercel runtime logs act as
// a fallback record of every lead.
//
// Only invalid input gets a 4xx. The provider URL changes (Mailchimp →
// ConvertKit → etc.) without touching this file.

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const lead = parsed.data;

  // Always log so Vercel runtime logs preserve the lead even if the webhook fails.
  console.log("[lead]", {
    receivedAt: new Date().toISOString(),
    ...lead,
  });

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("[lead] LEAD_WEBHOOK_URL not set; lead saved to logs only.");
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      console.warn(
        `[lead] Webhook returned non-2xx (${res.status}); lead saved to logs.`
      );
    }
  } catch (err) {
    console.warn("[lead] Webhook fetch failed; lead saved to logs.", err);
  }

  return NextResponse.json({ success: true });
}
