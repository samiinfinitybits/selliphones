/**
 * Central site configuration & content.
 * Placeholder values are marked with TODO — confirm with the client
 * before launch (see §8 of the build brief).
 */

export const site = {
  name: "Selliphones.ae",
  legalName: "Selliphones",
  domain: "https://selliphones.ae",
  tagline: "Sell your phone for instant cash — we come to you.",
  description:
    "Selliphones.ae buys your used iPhone & Samsung for instant cash across Dubai. Free doorstep pickup, certified data wipe, paid on the spot.",

  // TODO: replace with the real number before launch
  phoneDisplay: "+971 50 000 0000",
  phoneRaw: "+97150000000",
  whatsappNumber: "971500000000", // digits only, used in wa.me links
  email: "hello@selliphones.ae",

  address: {
    // TODO: confirm real registered address for LocalBusiness schema
    locality: "Dubai",
    region: "Dubai",
    country: "AE",
  },

  // TODO: confirm real stats — do not publish invented numbers
  stats: [
    { value: 12000, suffix: "+", label: "Phones bought back" },
    { value: 7, suffix: " yrs", label: "Buying across the UAE" },
    { value: 22, suffix: " min", label: "Avg. from quote to cash" },
    { value: 100, suffix: "%", label: "Certified data wipes" },
  ] as const,
} as const;

export const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Devices", href: "#devices" },
  { label: "Why us", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#quote" },
] as const;

/** Prefill a WhatsApp deep link with an optional message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const brands = [
  { id: "iphone", name: "iPhone", note: "All models · incl. broken / locked" },
  { id: "samsung", name: "Samsung Galaxy", note: "S series · Z Fold / Flip" },
] as const;

export type BrandId = (typeof brands)[number]["id"];

export const conditions = [
  { id: "flawless", label: "Flawless", hint: "Like new, no marks" },
  { id: "good", label: "Good", hint: "Minor signs of use" },
  { id: "fair", label: "Fair", hint: "Visible scratches / dents" },
  { id: "broken", label: "Broken", hint: "Cracked / not working" },
] as const;

export const storageOptions = ["64GB", "128GB", "256GB", "512GB", "1TB"] as const;

export const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
] as const;

export const dubaiAreas = [
  "Downtown Dubai",
  "Business Bay",
  "Dubai Marina",
  "JLT",
  "JBR",
  "Deira",
  "Bur Dubai",
  "Al Barsha",
  "Jumeirah",
  "Al Quoz",
  "Silicon Oasis",
  "Mirdif",
  "International City",
  "Dubai Hills",
  "Palm Jumeirah",
  "DIFC",
] as const;

export const steps = [
  {
    n: "01",
    title: "Get your quote",
    body: "Tell us the model, storage and condition. You get a straight, honest number in seconds — no sign-up, no games.",
  },
  {
    n: "02",
    title: "We come to you",
    body: "Pick a time. Our agent drives to your home, office or a café anywhere in Dubai. Free, same-day, on your schedule.",
  },
  {
    n: "03",
    title: "Cash in hand",
    body: "Two-minute inspection, a certified data wipe you can watch, then instant cash or bank transfer. Done.",
  },
] as const;

export const faqs = [
  {
    q: "How does Selliphones.ae actually work?",
    a: "You get an instant estimate online, we book a free doorstep pickup anywhere in Dubai, our agent inspects the phone on the spot, and you're paid in cash or by bank transfer the same visit. No shipping, no waiting.",
  },
  {
    q: "Is it safe? What happens to my data?",
    a: "Before we leave, we perform a certified factory wipe in front of you and hand you written confirmation. We're a registered UAE business — no anonymous classifieds, no strangers, no risk.",
  },
  {
    q: "How is my price determined?",
    a: "Price is based on the exact model, storage, and real condition (screen, battery, body, functionality). The online number is an estimate; the final offer is confirmed after the 2-minute in-person check. There's no obligation to sell.",
  },
  {
    q: "Which devices do you buy?",
    a: "At launch we focus on iPhone (every model, including broken, damaged, locked or no-box units) and Samsung Galaxy S / Z Fold / Z Flip. More device categories are coming.",
  },
  {
    q: "How fast do I get paid?",
    a: "On the spot. The moment the inspection is done and you accept the offer, you're paid — most visits are wrapped up in about 20 minutes.",
  },
  {
    q: "What if my phone is cracked or won't turn on?",
    a: "We still buy it. Broken, water-damaged, screen-shattered or dead — get a quote for its condition and we'll make an offer. Nothing is too far gone.",
  },
  {
    q: "Does it cost anything to get a quote or pickup?",
    a: "No. Quotes are free and doorstep pickup across Dubai is free. You only ever receive money from us — never pay.",
  },
] as const;
