import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Single source of truth for reading case studies off disk. The /portfolio
// index and the [slug] detail page both go through these helpers — never read
// the content directory directly elsewhere. Frontmatter shape is enforced here
// so a malformed file fails loudly at build time, not at view time.

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

export const CASE_STUDY_CATEGORIES = ["brand", "web", "video", "digital"] as const;
export type CaseStudyCategory = (typeof CASE_STUDY_CATEGORIES)[number];

export type CaseStudyFrontmatter = {
  title: string;
  italicWord: string;
  client: string;
  category: CaseStudyCategory;
  year: number;
  role: string;
  hero: string;
  brief: string;
  outcome: string;
  gallery: string[];
};

export type CaseStudy = {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string; // raw MDX body, frontmatter stripped
};

function readMdx(file: string): CaseStudy {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  const { data, content } = matter(raw);
  // Light shape validation — surfaces missing required fields with a clear
  // error rather than rendering undefined into the page.
  for (const key of [
    "title",
    "italicWord",
    "client",
    "category",
    "year",
    "role",
    "hero",
    "brief",
    "outcome",
  ] as const) {
    if (data[key] == null) {
      throw new Error(`[case-studies] ${file} is missing required frontmatter: ${key}`);
    }
  }
  if (!CASE_STUDY_CATEGORIES.includes(data.category)) {
    throw new Error(
      `[case-studies] ${file} category "${data.category}" must be one of ${CASE_STUDY_CATEGORIES.join(", ")}`
    );
  }
  return {
    slug,
    frontmatter: {
      ...(data as Omit<CaseStudyFrontmatter, "gallery">),
      gallery: Array.isArray(data.gallery) ? data.gallery : [],
    },
    content,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readMdx)
    .sort((a, b) => b.frontmatter.year - a.frontmatter.year);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const file = `${slug}.mdx`;
  const fullPath = path.join(CONTENT_DIR, file);
  if (!fs.existsSync(fullPath)) return null;
  return readMdx(file);
}

export function getCaseStudyCategories(): readonly CaseStudyCategory[] {
  return CASE_STUDY_CATEGORIES;
}
