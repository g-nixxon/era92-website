import { getAllCaseStudies } from "@/lib/case-studies";

// Sitemap as a Route Handler rather than the app/sitemap.ts file convention.
// Why: Next 14's next-metadata-route-loader embeds the source file path in
// generated JS as a single-quoted string without escaping apostrophes. This
// project lives at "Garrett's Web Design 2.0" — the loader breaks. Same fix
// pattern as /api/og in batch 1. Search engines accept any URL for the sitemap
// as long as it's discoverable, and /sitemap.xml is the conventional location
// regardless of whether we got there via file convention or a route handler.

const SITE_URL = "https://era92.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/contact",
  "/hire",
  "/partner",
  "/portfolio",
  "/ventures",
  "/ventures/elevate",
  "/ventures/creative",
  "/ventures/fund",
  "/ventures/hub",
] as const;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(loc: string, lastmod: string, priority: number) {
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export async function GET() {
  const now = new Date().toISOString().slice(0, 10);
  const entries: string[] = [];
  for (const route of STATIC_ROUTES) {
    entries.push(urlEntry(`${SITE_URL}${route}`, now, route === "" ? 1 : 0.7));
  }
  for (const study of getAllCaseStudies()) {
    entries.push(urlEntry(`${SITE_URL}/portfolio/${study.slug}`, now, 0.6));
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
