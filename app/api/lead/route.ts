import { NextResponse } from "next/server";
import { SOURCES, schemaBySource, type LeadSource } from "@/lib/lead-schema";

// POST /api/lead
//
// Body envelope is keyed by `source` ("hire" | "contact" | "partner"). If
// `source` is missing (e.g. a legacy submission), we default to "hire" so
// existing integrations don't break. The chosen schema validates the body;
// invalid input → 400 with fieldErrors; valid input is logged + best-effort
// forwarded to LEAD_WEBHOOK_URL; we always return 200 on valid input so the
// visitor isn't blocked by an upstream provider hiccup.
//
// The full validated lead (including `source`) is what gets forwarded — Trinity
// can filter Mailchimp/ConvertKit/etc by source.

function isLeadSource(x: unknown): x is LeadSource {
  return typeof x === "string" && (SOURCES as readonly string[]).includes(x);
}

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

  // Pick the schema based on `source`, defaulting to "hire" for backward compat.
  const rawSource =
    body && typeof body === "object" && "source" in body
      ? (body as { source: unknown }).source
      : undefined;
  const source: LeadSource = isLeadSource(rawSource) ? rawSource : "hire";
  const schema = schemaBySource[source];

  // Ensure the body has the source we resolved (covers the legacy-no-source case).
  const candidate =
    body && typeof body === "object" ? { ...(body as object), source } : { source };
  const parsed = schema.safeParse(candidate);

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

  // Always log so Vercel runtime logs preserve the lead even if webhook fails.
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
