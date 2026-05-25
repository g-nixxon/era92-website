import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { WavyUnderline } from "@/components/ui/WavyUnderline";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import {
  CASE_STUDY_CATEGORIES,
  getAllCaseStudies,
  type CaseStudyCategory,
} from "@/lib/case-studies";

// Filter state lives in the URL (?category=brand) so the page is fully
// server-rendered, every filter is a real URL Trinity can share, and SEO
// crawlers see real listings — not a JS-only filter.

const PAGE_TITLE = "Portfolio — Recent work from era92 Creative";
const PAGE_DESCRIPTION =
  "Brand, web, video, and digital case studies. Delivered by era92 Creative for international clients.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

type Search = { category?: string };

function isCategory(value: string | undefined): value is CaseStudyCategory {
  return (
    typeof value === "string" &&
    (CASE_STUDY_CATEGORIES as readonly string[]).includes(value)
  );
}

export default function PortfolioIndexPage({
  searchParams,
}: {
  searchParams: Search;
}) {
  const active = isCategory(searchParams.category) ? searchParams.category : null;
  const studies = getAllCaseStudies();
  const filtered = active
    ? studies.filter((s) => s.frontmatter.category === active)
    : studies;

  const pills: { label: string; href: string; isActive: boolean }[] = [
    { label: "All", href: "/portfolio", isActive: active === null },
    ...CASE_STUDY_CATEGORIES.map((cat) => ({
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
      href: `/portfolio?category=${cat}`,
      isActive: active === cat,
    })),
  ];

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>Our work</EyebrowLabel>
          <div className="mt-6 inline-block">
            <DisplayHeading as="h1" regular="Recent" italic="projects." />
            <WavyUnderline className="mt-3 w-40" />
          </div>
          <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed max-w-2xl">
            Brand, web, video, and digital &mdash; delivered by era92 Creative. Hover any
            project to see the brief.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Filter by category">
          {pills.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className={
                  p.isActive
                    ? "inline-flex items-center px-4 py-2 rounded-full text-sm font-body font-medium border bg-orange text-cream border-orange"
                    : "inline-flex items-center px-4 py-2 rounded-full text-sm font-body font-medium border border-stone-300 text-charcoal hover:border-orange hover:text-orange transition-colors"
                }
                aria-current={p.isActive ? "page" : undefined}
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-16 font-body text-lg text-stone-600">
            No case studies in this category yet. Check back soon.
          </p>
        ) : (
          <ul className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filtered.map((study) => (
              <li key={study.slug}>
                <CaseStudyCard study={study} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
