import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { InsightHeader } from "@/components/sections/InsightHeader";
import { InsightCard } from "@/components/sections/InsightCard";
import {
  getAllInsights,
  getInsightBySlug,
  getRelatedInsights,
} from "@/lib/insights";
import { mdxComponents } from "@/mdx-components";

// Long-form reading page for a single insight. Same MDX pipeline as
// /portfolio/[slug] — the design-system mapping in mdx-components.tsx is the
// only thing keeping these MDX bodies on-brand.

const SITE_URL = "https://era92.com";

export function generateStaticParams() {
  return getAllInsights().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const insight = getInsightBySlug(params.slug);
  if (!insight) return {};
  const { title, excerpt, hero } = insight.frontmatter;
  const pageTitle = `${title} — era92 Insights`;
  return {
    title: { absolute: pageTitle },
    description: excerpt,
    openGraph: {
      title: pageTitle,
      description: excerpt,
      type: "article",
      images: [{ url: hero, alt: title }],
    },
    twitter: {
      title: pageTitle,
      description: excerpt,
      card: "summary_large_image",
      images: [hero],
    },
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug);
  if (!insight) notFound();
  const { frontmatter, content } = insight;
  const related = getRelatedInsights(params.slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    image: `${SITE_URL}${frontmatter.hero}`,
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: "era92 Group",
      url: SITE_URL,
    },
    about: frontmatter.category,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <InsightHeader frontmatter={frontmatter} />

      {/* Section B — MDX body */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </Container>
      </section>

      {/* Section C — Author bio (only if frontmatter.authorBio exists) */}
      {frontmatter.authorBio && (
        <section className="pb-12 lg:pb-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="bg-stone-100 border border-stone-300 rounded-lg p-6 lg:p-8 flex items-start gap-5">
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden bg-stone-300 shrink-0">
                  <Image
                    src="/images/placeholders/founder-portrait.svg"
                    alt={`Portrait of ${frontmatter.author}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="font-display text-xl text-charcoal leading-tight">
                    {frontmatter.author}
                  </p>
                  <p className="mt-1 font-body text-xs uppercase tracking-widest text-stone-600">
                    {frontmatter.authorRole}
                  </p>
                  <p className="mt-3 font-body text-base text-stone-600 leading-relaxed">
                    {frontmatter.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Section D — Related posts (only if there's at least one) */}
      {related.length > 0 && (
        <section className="py-12 lg:py-16 border-t border-stone-300">
          <Container>
            <p className="text-xs font-body font-medium uppercase tracking-widest text-orange">
              More from this series
            </p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {related.map((r) => (
                <li key={r.slug}>
                  <InsightCard insight={r} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Section E — Closing CTA (same pattern as AboutClosingCTA) */}
      <section className="bg-charcoal text-cream py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <DisplayHeading
              className="text-cream"
              regular="There's a place"
              italic="for you in this."
            />
            <p className="mt-6 font-body text-lg text-cream/80 leading-relaxed">
              Whether you hire us, partner with us, or share our story &mdash; we&rsquo;d love
              to meet you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button href="/hire" variant="primary" size="lg">
                Hire era92 Creative
              </Button>
              <Button
                href="/partner"
                variant="secondary"
                size="lg"
                className="border-cream text-cream hover:bg-cream hover:text-charcoal"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
