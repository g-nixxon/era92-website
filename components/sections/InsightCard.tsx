import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/lib/insights";
import { INSIGHT_CATEGORY_LABEL } from "@/lib/insights";

// Standard grid card used on /insights index (non-featured) and on the related-
// posts strip inside each detail page. Keep the visual language identical to
// CaseStudyCard so the two listing pages feel like siblings.

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function InsightCard({ insight }: { insight: Insight }) {
  const { slug, frontmatter } = insight;
  return (
    <Link href={`/insights/${slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={frontmatter.hero}
          alt={`${frontmatter.title} hero`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="mt-5">
        <p className="text-xs font-body font-medium uppercase tracking-widest text-orange">
          {INSIGHT_CATEGORY_LABEL[frontmatter.category]}
        </p>
        <h3 className="mt-2 font-display text-2xl text-charcoal leading-tight">
          {frontmatter.title}
        </h3>
        <p className="mt-3 font-body text-sm text-stone-600">
          {formatDate(frontmatter.date)} &middot; {frontmatter.readingTime} &middot;{" "}
          {frontmatter.author}
        </p>
      </div>
    </Link>
  );
}
