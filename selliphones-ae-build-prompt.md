# Selliphones.ae — Website Build Prompt

Paste this whole doc into your AI coding tool (Claude Code, Cursor, v0, etc.) as the system/task prompt, or use it as a dev ticket.

---

## 1. What this business actually is

Domain: **Selliphones.ae** — a UAE-based **phone buyback service**: people sell their used iPhone/Samsung/other smartphones for instant cash. Not a marketplace, not a listings site, not peer-to-peer. The company itself buys the phone directly from the customer.

Core mechanics (confirmed by all three reference sites):
- Customer picks their device / describes condition → gets an **instant estimated valuation**
- Free **doorstep pickup** anywhere in the Emirates (Dubai primarily, but design so Abu Dhabi/Sharjah/Ajman can be added)
- On-site inspection by an agent, **instant cash or bank transfer** paid on the spot
- **Certified data wipe** performed before/after purchase (this is a trust signal, lean on it)
- WhatsApp is the primary contact channel, phone call second, contact form third
- Supported devices: iPhone (all models incl. broken/damaged/locked/no-box), Samsung Galaxy (S series, Z Fold/Flip). Reference sites also mention laptops/tablets/watches/cameras as an upsell category — decide with your manager whether Selliphones.ae is phone-only or all-devices; default to **phone-only for launch**, structured so device categories can be added later.

Trust levers used across all three sites — reuse these, they're the actual conversion drivers, not decoration:
- Instant/same-day payout, no waiting for bank clearance
- No middleman / no shady classifieds / no haggling
- Certified/registered UAE business
- Number of phones purchased + years in operation (use placeholder stats until real numbers are provided — don't invent fake precise numbers like "1,500+ phones" without client sign-off)
- Coverage area (list actual Dubai neighborhoods once confirmed)
- Data privacy / secure wipe guarantee

## 2. Non-negotiable design brief: do NOT make this look AI-generated

This is the most important constraint. Specifically avoid:

**Banned patterns:**
- Centered hero with a gradient-blob background and a fade-in-up headline + subhead + two pill buttons
- Purple-to-blue or teal-to-violet gradients anywhere
- Generic 3-column "icon in a rounded square + heading + paragraph" feature grids
- Default Inter/system-ui font pairing with no personality
- Lucide/Heroicons default icon set used generically instead of custom-drawn or purposefully sourced icons
- Boxy white cards with a soft drop-shadow floating on a light-gray background (the "SaaS landing page" look)
- Testimonial carousels with circular avatar photos and 5-star icon rows
- Symmetrical, perfectly centered everything — no visual tension or hierarchy risk-taking
- Stock photography of a hand holding a phone against a plain background

**Do instead:**
- Pick a real **art direction**: e.g. an editorial/magazine feel (asymmetric grid, oversized type, pull quotes), or a bold "resale tech" feel (dark mode, sharp geometric accents, mono/serif contrast pairing), or a tactile/physical feel (paper-texture cards, hand-drawn underline accents on CTAs). Commit to one and carry it through every section — don't mix.
- Typography: pair a distinctive display face (e.g. a condensed grotesk, a modern serif, or a variable font with real personality) with a clean workhorse text face. Avoid Inter/Roboto/Poppins as the display face. Consider licensing/using something like **Fields**, **General Sans**, **Clash Display**, **Söhne**, or similar from Fontshare/Google Fonts variable fonts — something that isn't the default seen on every template.
- Color: a genuine brand palette with one confident accent (not a gradient) — e.g. an off-black + warm ivory base with a single saturated accent color (acid green, cobalt, burnt orange) used sparingly and consistently for CTAs only.
- Motion: purposeful micro-interactions (magnetic buttons, cursor-aware hover states, number counters that tick up on scroll, marquee of device logos) rather than generic scroll-fade-ins on every element.
- Layout: break the grid intentionally in at least 2 sections — overlapping elements, off-center headlines, diagonal section dividers, or a sticky/pinned element while content scrolls past it.
- Imagery: either real photography of the actual pickup/inspection process (if client can supply), or custom illustration/3D renders of devices — not generic stock.
- Micro-copy with actual personality/voice instead of generic SaaS phrasing ("Turn your old phone into cash today" is fine but push for something sharper and more local/UAE-flavored).

Reference for "how to think about this" (not to copy): look at recent Awwwards/FWA site-of-the-day winners in the **fintech/resale/marketplace** category for pacing and restraint — the goal is confident minimalism with 1-2 signature moments, not maximalist decoration everywhere.

## 3. Information architecture

Single well-structured landing page (matches "landing page" brief), built so sections can later be split into their own SEO pages without a rebuild:

1. **Announcement bar** (optional) — e.g. "Free doorstep pickup across Dubai · 24/7"
2. **Header** — logo, nav (How it works / Devices / FAQ / Contact), phone number, WhatsApp CTA button, sticky on scroll
3. **Hero** — headline + subhead making the value prop unmistakable in 3 seconds ("Sell your phone for instant cash — we come to you"), primary CTA (Get Instant Quote → scrolls to valuation form) + secondary CTA (WhatsApp), trust strip (doorstep pickup / instant cash / certified data wipe / same-day)
4. **Device selector** — choose iPhone / Samsung (extendable) → routes into the valuation form pre-filled with brand
5. **How it works** — 3 steps (Get valuation → Free doorstep pickup → Instant cash), numbered, with the one signature layout/motion moment of the page
6. **Why Selliphones.ae** — trust section: stats (phones bought, years active, response time), certified data wipe explainer, no-middleman positioning
7. **Instant valuation / lead form** — Full name, WhatsApp/phone, email, device model + storage + condition, city/area. Submits via Resend (see §5). Include a WhatsApp deep-link alternative right next to the form for people who don't want to fill a form.
8. **Coverage area** — list of neighborhoods/emirates served (can be a simple tag cloud, doesn't need a literal embedded Google Map — an embedded iframe map is a classic "looks unfinished" element; consider a custom styled SVG/illustrated map instead, or skip it)
9. **FAQ** — accordion, 5-7 real questions (how it works, is it safe, how is price determined, what devices, how fast is payment, what happens to my data)
10. **Final CTA banner** — repeat primary conversion action
11. **Footer** — logo/blurb, quick links, contact (WhatsApp/phone/email), social, legal links (Privacy Policy, Terms — stub pages), copyright

## 4. Tech stack

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS with a fully customized theme (custom color tokens, custom font families, custom spacing scale) — no default Tailwind look-and-feel left in place
- **Animation:** Framer Motion (or GSAP if you want scroll-triggered pinning/parallax) — used deliberately, not on every element
- **Forms:** React Hook Form + Zod validation on the client; server action or API route on the backend
- **Email delivery:** **Resend** for the contact/valuation form — see §5 for exact implementation
- **Hosting:** Vercel (pairs natively with Next.js + Resend)
- **Icons:** either a custom icon set (drawn to match the brand) or a distinctive existing set (Phosphor, Tabler) restyled — not default Lucide with no customization
- **Fonts:** self-hosted or `next/font` loaded variable fonts for performance, subset to needed characters

## 5. Contact/valuation form via Resend

- Create a Next.js API route (e.g. `/app/api/quote/route.ts`) that:
  1. Validates incoming form data (Zod schema: name, phone, email, device model, storage, condition, city — mark required fields matching reference sites)
  2. Uses the **Resend SDK** to send a formatted email to the business inbox with all submitted details
  3. Optionally sends a branded auto-reply confirmation email to the customer ("We got your request — expect a WhatsApp message within X minutes")
  4. Returns a success/error JSON response the frontend uses to show a confirmation state (not just an alert — design an actual success UI state matching the site's art direction)
- Store `RESEND_API_KEY` and destination email in environment variables, never hardcoded
- Rate-limit or add basic spam protection (honeypot field is sufficient for a launch version; consider hCaptcha/Turnstile if spam becomes an issue)
- Keep the WhatsApp deep-link (`https://wa.me/971XXXXXXXXX?text=...`) as a parallel/faster path — many UAE users will prefer it over a form

## 6. SEO & performance requirements

- Full metadata: title, meta description, canonical URL, Open Graph + Twitter card images (custom-designed OG image, not a generic screenshot)
- **Structured data (JSON-LD):** `LocalBusiness` schema (name, phone, address/service area, hours) and `FAQPage` schema for the FAQ section
- Semantic HTML throughout (proper heading hierarchy, `<nav>`, `<main>`, `<footer>`, landmark roles)
- `sitemap.xml` and `robots.txt`
- Image optimization via `next/image`, served in modern formats (AVIF/WebP), properly sized/lazy-loaded below the fold
- Font loading optimized (variable fonts, `font-display: swap`, preloaded critical fonts)
- Target Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms — audit with Lighthouse before handoff
- Mobile-first: the majority of UAE traffic for this kind of service will be on mobile via WhatsApp referral links — design and test mobile first, not as an afterthought
- Accessible: proper contrast ratios (especially against your accent color), keyboard-navigable form and accordion, alt text on all images

## 7. Content to write (don't leave as lorem ipsum)

- Hero headline/subhead
- 3-step process copy
- Trust/stats section copy
- 5-7 FAQ Q&As
- Form field labels + microcopy + success/error states
- Footer blurb
- Meta description + OG description

## 8. Open questions to confirm with your manager before final content

- Real phone number / WhatsApp number for Selliphones.ae
- Whether it's Dubai-only at launch or multi-emirate
- Whether device scope is phones-only or includes laptops/tablets/watches like quicksellphone.com
- Real stats (phones purchased, years in business) — don't publish invented numbers
- Business address / registration details for the LocalBusiness schema and footer
- Brand assets: logo, color direction preference, any existing brand guidelines
