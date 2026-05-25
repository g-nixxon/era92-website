import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

// Used by the /portfolio index grid. Same hover treatment as the homepage
// SelectedWork cards (image zoom + orange arrow appears) so the visual
// vocabulary stays consistent across the site.

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const { slug, frontmatter } = study;
  return (
    <Link href={`/portfolio/${slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={frontmatter.hero}
          alt={`${frontmatter.title} hero`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-body font-medium uppercase tracking-widest text-orange">
          {frontmatter.category}
        </p>
        <h3 className="mt-2 font-display text-2xl lg:text-3xl text-charcoal leading-tight">
          {frontmatter.title}
        </h3>
        <p className="mt-1 font-body text-sm text-stone-600">{frontmatter.client}</p>
        <p className="mt-3 font-body text-base text-charcoal leading-relaxed">
          {frontmatter.outcome}
        </p>
      </div>
    </Link>
  );
}
