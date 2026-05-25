import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Mirrors lib/case-studies.ts so the /insights pages, sitemap, and any future
// reader all go through one helper. Frontmatter shape is validated at read
// time — a malformed file fails the build with a clear error instead of
// rendering undefined into the page.

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

export const INSIGHT_CATEGORIES = [
  "field-notes",
  "founder-letters",
  "research",
  "investor-updates",
] as const;
export type InsightCategory = (typeof INSIGHT_CATEGORIES)[number];

// Human labels for the filter pills + meta lines. Keeping the source-of-truth
// here means the pills and the breadcrumbs never drift from each other.
export const INSIGHT_CATEGORY_LABEL: Record<InsightCategory, string> = {
  "field-notes": "Field Notes",
  "founder-letters": "Founder Letters",
  research: "Research",
  "investor-updates": "Investor Updates",
};

export type InsightFrontmatter = {
  title: string;
  italicWord: string;
  category: InsightCategory;
  author: string;
  authorRole: string;
  authorBio?: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: string;
  excerpt: string;
  hero: string;
};

export type Insight = {
  slug: string;
  frontmatter: InsightFrontmatter;
  content: string; // raw MDX body, frontmatter stripped
};

function readMdx(file: string): Insight {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  const { data, content } = matter(raw);
  for (const key of [
    "title",
    "italicWord",
    "category",
    "author",
    "authorRole",
    "date",
    "readingTime",
    "excerpt",
    "hero",
  ] as const) {
    if (data[key] == null) {
      throw new Error(`[insights] ${file} is missing required frontmatter: ${key}`);
    }
  }
  if (!INSIGHT_CATEGORIES.includes(data.category)) {
    throw new Error(
      `[insights] ${file} category "${data.category}" must be one of ${INSIGHT_CATEGORIES.join(", ")}`
    );
  }
  return {
    slug,
    frontmatter: data as InsightFrontmatter,
    content,
  };
}

export function getAllInsights(): Insight[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readMdx)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getInsightBySlug(slug: string): Insight | null {
  const file = `${slug}.mdx`;
  const fullPath = path.join(CONTENT_DIR, file);
  if (!fs.existsSync(fullPath)) return null;
  return readMdx(file);
}

export function getInsightCategories(): readonly InsightCategory[] {
  return INSIGHT_CATEGORIES;
}

// Same category, excluding self, capped at `limit`. Used by the related-posts
// strip on the detail page. Falls back gracefully when fewer than `limit`
// matching posts exist (e.g. first post in a category).
export function getRelatedInsights(slug: string, limit = 3): Insight[] {
  const current = getInsightBySlug(slug);
  if (!current) return [];
  return getAllInsights()
    .filter(
      (i) => i.slug !== slug && i.frontmatter.category === current.frontmatter.category
    )
    .slice(0, limit);
}
