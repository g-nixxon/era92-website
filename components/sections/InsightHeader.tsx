import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import {
  INSIGHT_CATEGORY_LABEL,
  type InsightFrontmatter,
} from "@/lib/insights";

// Detail page header for an insight post. Same italicWord-splitting trick as
// CaseStudyHeader so display headings keep the era92 italic-emphasis pattern.

function splitTitle(title: string, italicWord: string) {
  const idx = title.lastIndexOf(italicWord);
  if (idx === -1) return { regular: title, italic: "" };
  const regular = title.slice(0, idx).trim();
  const italic = title.slice(idx);
  return { regular, italic };
}

export function InsightHeader({
  frontmatter,
}: {
  frontmatter: InsightFrontmatter;
}) {
  const { regular, italic } = splitTitle(frontmatter.title, frontmatter.italicWord);
  return (
    <header className="pt-12 lg:pt-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights"
            className="font-body text-sm text-stone-600 hover:text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
          >
            ← All insights
          </Link>
          <p className="mt-8 text-xs font-body font-medium uppercase tracking-widest text-orange">
            {INSIGHT_CATEGORY_LABEL[frontmatter.category]}
          </p>
          <DisplayHeading
            as="h1"
            size="lg"
            className="mt-4"
            regular={regular}
            italic={italic}
          />
          <p className="mt-6 font-body text-base text-stone-600">
            {frontmatter.author} &middot;{" "}
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            &middot; {frontmatter.readingTime}
          </p>
        </div>
        <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto mt-10 lg:mt-12 overflow-hidden bg-stone-100">
          <Image
            src={frontmatter.hero}
            alt={`${frontmatter.title} hero`}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1024px"
            priority
          />
        </div>
      </Container>
    </header>
  );
}
