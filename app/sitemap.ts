import type { MetadataRoute } from "next";

import { absoluteUrl, siteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return siteRoutes.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified: now,
    changeFrequency: route.href.startsWith("/guias/") ? "monthly" : "weekly",
    priority: route.priority,
  }));
}
