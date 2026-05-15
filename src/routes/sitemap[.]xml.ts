import { createFileRoute, Link } from "@tanstack/react-router";
import type { Service } from "@/lib/site-data";

// Sitemap as a TSR file route — XML at /sitemap.xml
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: string;
  priority?: string;
}

import { services } from "@/lib/site-data";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
          ...services.map((s: Service) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly",
            priority: "0.8",
          })),
        ];

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

// Unused fallback to satisfy TSR; never rendered
export const __unused = Link;
