import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Sell your phone for instant cash in Dubai`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "sell phone Dubai",
    "sell iPhone Dubai",
    "sell Samsung Dubai",
    "phone buyback UAE",
    "instant cash for phone",
    "sell used phone Dubai",
  ],
  alternates: { canonical: site.domain },
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — Sell your phone for instant cash in Dubai`,
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Sell your phone for instant cash in Dubai`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${manrope.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-ivory">{children}</body>
    </html>
  );
}
