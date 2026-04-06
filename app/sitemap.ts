import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
  ];
}
