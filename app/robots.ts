import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Generates `/robots.txt` (Next.js file-convention route). Allows all
 * crawlers on all paths and points them at the generated sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
