import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { CaseStudyHeader } from "@/components/sections/CaseStudyHeader";
import { LightboxGallery } from "@/components/ui/LightboxGallery";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
} from "@/lib/case-studies";
import { mdxComponents } from "@/mdx-components";

// Renders one case study from /content/case-studies/[slug].mdx. The MDX body
// gets the era92 design-system component map from mdx-components.tsx, so any
// <h2> / <blockquote> / etc. Trinity writes inside the file picks up the right
// typography automatically.

const SITE_URL = "https://era92.com";

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  const { title, brief, hero } = study.frontmatter;
  const pageTitle = `${title} — era92 Creative`;
  return {
    title: { absolute: pageTitle },
    description: brief,
    openGraph: {
      title: pageTitle,
      description: brief,
      type: "article",
      images: [{ url: hero, alt: title }],
    },
    twitter: {
      title: pageTitle,
      description: brief,
      card: "summary_large_image",
      images: [hero],
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();
  const { frontmatter, content } = study;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.brief,
    image: `${SITE_URL}${frontmatter.hero}`,
    datePublished: `${frontmatter.year}-01-01`,
    author: {
      "@type": "Organization",
      name: "era92 Creative",
      url: `${SITE_URL}/ventures/creative`,
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

      <CaseStudyHeader frontmatter={frontmatter} />

      {/* Section B — Brief & outcome */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-6">
              <EyebrowLabel>The brief</EyebrowLabel>
              <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed">
                {frontmatter.brief}
              </p>
            </div>
            <div className="lg:col-span-6">
              <EyebrowLabel>The outcome</EyebrowLabel>
              <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed">
                {frontmatter.outcome}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section C — MDX body */}
      <section className="pb-16 lg:pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </Container>
      </section>

      {/* Section D — Image gallery */}
      {frontmatter.gallery.length > 0 && (
        <section className="pb-16 lg:pb-20">
          <Container>
            <LightboxGallery
              images={frontmatter.gallery}
              altPrefix={frontmatter.title}
            />
          </Container>
        </section>
      )}

      {/* Section E — Closing CTA */}
      <section className="bg-charcoal text-cream py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <DisplayHeading
              className="text-cream"
              regular="Could we do this"
              italic="for you?"
            />
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Button href="/hire" variant="primary" size="lg">
                Hire era92 Creative
              </Button>
              <Button href="/portfolio" variant="text-link" className="text-cream">
                See more work →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
