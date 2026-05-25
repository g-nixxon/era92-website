import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/lib/insights";
import { INSIGHT_CATEGORY_LABEL } from "@/lib/insights";

// Used at the top of the /insights index when no filter is active. Larger
// 2-col layout (image left, content right) draws the eye away from the
// regular card grid below.

export function FeaturedInsightCard({ insight }: { insight: Insight }) {
  const { slug, frontmatter } = insight;
  return (
    <Link
      href={`/insights/${slug}`}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={frontmatter.hero}
          alt={`${frontmatter.title} hero`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div>
        <p className="text-xs font-body font-medium uppercase tracking-widest text-orange">
          {INSIGHT_CATEGORY_LABEL[frontmatter.category]}
        </p>
        <h2 className="mt-3 font-display text-3xl lg:text-5xl text-charcoal leading-tight">
          {frontmatter.title}
        </h2>
        <p className="mt-4 font-body text-base lg:text-lg text-stone-600 leading-relaxed">
          {frontmatter.excerpt}
        </p>
        <p className="mt-5 font-body text-sm text-stone-600">
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &middot; {frontmatter.readingTime} &middot; {frontmatter.author}
        </p>
        <span className="mt-6 inline-block font-body text-charcoal group-hover:underline decoration-orange underline-offset-4 decoration-2">
          Read →
        </span>
      </div>
    </Link>
  );
}
