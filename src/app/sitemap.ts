import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.domain, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.domain}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.domain}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
