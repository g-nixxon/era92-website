import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { WavyUnderline } from "@/components/ui/WavyUnderline";
import { InsightCard } from "@/components/sections/InsightCard";
import { FeaturedInsightCard } from "@/components/sections/FeaturedInsightCard";
import {
  INSIGHT_CATEGORIES,
  INSIGHT_CATEGORY_LABEL,
  getAllInsights,
  type InsightCategory,
} from "@/lib/insights";

const PAGE_TITLE = "Insights — Field notes from era92 Group";
const PAGE_DESCRIPTION =
  "Founder letters, research, and on-the-ground updates from era92 Group.";

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

function isCategory(v: string | undefined): v is InsightCategory {
  return (
    typeof v === "string" &&
    (INSIGHT_CATEGORIES as readonly string[]).includes(v)
  );
}

export default function InsightsIndexPage({
  searchParams,
}: {
  searchParams: Search;
}) {
  const active = isCategory(searchParams.category) ? searchParams.category : null;
  const all = getAllInsights();
  const filtered = active
    ? all.filter((i) => i.frontmatter.category === active)
    : all;

  // Featured-post block only shows when no filter is active. When filtered, the
  // user is hunting in a specific category — pulling the first item out into a
  // big card on top of the grid would look like a layout bug.
  const showFeatured = active === null && filtered.length > 0;
  const featured = showFeatured ? filtered[0] : null;
  const rest = showFeatured ? filtered.slice(1) : filtered;

  const pills: { label: string; href: string; isActive: boolean }[] = [
    { label: "All", href: "/insights", isActive: active === null },
    ...INSIGHT_CATEGORIES.map((cat) => ({
      label: INSIGHT_CATEGORY_LABEL[cat],
      href: `/insights?category=${cat}`,
      isActive: active === cat,
    })),
  ];

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>Insights</EyebrowLabel>
          <div className="mt-6 inline-block">
            <DisplayHeading as="h1" regular="Field notes from" italic="the work." />
            <WavyUnderline className="mt-3 w-40" />
          </div>
          <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed max-w-2xl">
            Founder letters, research, and on-the-ground updates from era92 Group.
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

        {featured && (
          <div className="mt-12 lg:mt-16">
            <FeaturedInsightCard insight={featured} />
          </div>
        )}

        {rest.length > 0 ? (
          <ul
            className={`${featured ? "mt-16 pt-12 border-t border-stone-300" : "mt-12 lg:mt-16"} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10`}
          >
            {rest.map((insight) => (
              <li key={insight.slug}>
                <InsightCard insight={insight} />
              </li>
            ))}
          </ul>
        ) : (
          !featured && (
            <p className="mt-16 font-body text-lg text-stone-600">
              No posts in this category yet. Check back soon.
            </p>
          )
        )}
      </Container>
    </section>
  );
}
