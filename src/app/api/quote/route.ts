import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteSchema } from "@/lib/quote-schema";
import { site, brands, conditions } from "@/lib/site";

export const runtime = "nodejs";

const brandLabel = (id: string) =>
  brands.find((b) => b.id === id)?.name ?? id;
const conditionLabel = (id: string) =>
  conditions.find((c) => c.id === id)?.label ?? id;

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: silently accept so bots think they succeeded.
  if (data.company && data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_INBOX_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL ?? "Selliphones <onboarding@resend.dev>";

  // If email isn't configured yet, don't hard-fail the UX in development.
  if (!apiKey || !to) {
    console.warn(
      "[quote] RESEND_API_KEY or QUOTE_INBOX_EMAIL not set — logging submission instead of emailing.",
      data,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);

  const summary = `
New quote request — ${site.name}

Name:      ${data.name}
Phone:     ${data.phone}
Email:     ${data.email || "—"}
Device:    ${brandLabel(data.brand)} ${data.model}
Storage:   ${data.storage}
Condition: ${conditionLabel(data.condition)}
Location:  ${data.city}
`.trim();

  try {
    // 1) Notify the business inbox
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email || undefined,
      subject: `New quote: ${brandLabel(data.brand)} ${data.model} — ${data.name}`,
      text: summary,
      html: businessEmailHtml(data),
    });

    if (error) {
      console.error("[quote] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send that just now. Please WhatsApp us." },
        { status: 502 },
      );
    }

    // 2) Optional branded auto-reply to the customer
    if (data.email) {
      await resend
        .emails.send({
          from,
          to: [data.email],
          subject: `We got your request — ${site.name}`,
          text: `Hi ${data.name}, thanks! We've received your details for a ${brandLabel(
            data.brand,
          )} ${data.model}. Expect a WhatsApp message from our team shortly to confirm your quote and arrange free pickup.`,
          html: customerEmailHtml(data),
        })
        .catch((e) => console.error("[quote] auto-reply failed:", e));
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (e) {
    console.error("[quote] unexpected error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please WhatsApp us." },
      { status: 500 },
    );
  }
}

function businessEmailHtml(d: import("@/lib/quote-schema").QuoteInput) {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#8a877e;font:13px/1.5 monospace">${k}</td><td style="padding:6px 0;color:#0b0b0d;font:14px/1.5 sans-serif;font-weight:600">${v}</td></tr>`;
  return `
  <div style="background:#0b0b0d;padding:24px">
    <div style="max-width:520px;margin:0 auto;background:#f4f0e7;padding:28px">
      <p style="font:12px monospace;letter-spacing:.15em;text-transform:uppercase;color:#8a877e;margin:0 0 8px">New quote request</p>
      <h1 style="font:700 26px sans-serif;color:#0b0b0d;margin:0 0 20px">${brandLabel(d.brand)} ${d.model}</h1>
      <table style="border-collapse:collapse;width:100%">
        ${row("Name", d.name)}
        ${row("Phone", d.phone)}
        ${row("Email", d.email || "—")}
        ${row("Storage", d.storage)}
        ${row("Condition", conditionLabel(d.condition))}
        ${row("Location", d.city)}
      </table>
    </div>
  </div>`;
}

function customerEmailHtml(d: import("@/lib/quote-schema").QuoteInput) {
  return `
  <div style="background:#0b0b0d;padding:24px">
    <div style="max-width:520px;margin:0 auto;background:#f4f0e7;padding:28px">
      <h1 style="font:700 26px sans-serif;color:#0b0b0d;margin:0 0 12px">Thanks, ${d.name} 👋</h1>
      <p style="font:15px/1.6 sans-serif;color:#0b0b0d;margin:0 0 16px">
        We've received your details for a <strong>${brandLabel(d.brand)} ${d.model}</strong>.
        Our team will WhatsApp you shortly to confirm your quote and arrange a free doorstep pickup anywhere in Dubai.
      </p>
      <p style="font:15px/1.6 sans-serif;color:#0b0b0d;margin:0 0 24px">
        Prefer to chat now? <a href="https://wa.me/${site.whatsappNumber}" style="color:#0b0b0d;font-weight:700">Message us on WhatsApp →</a>
      </p>
      <p style="font:12px monospace;color:#8a877e;margin:0">${site.name} · Dubai phone buyback</p>
    </div>
  </div>`;
}
