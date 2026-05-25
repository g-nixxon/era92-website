import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import type { CaseStudyFrontmatter } from "@/lib/case-studies";

// We split the title into "regular | italic" using the `italicWord` field from
// frontmatter so the display heading inherits the era92 brand pattern. If the
// italic word isn't actually the final token (rare), we still highlight it
// wherever it appears.
function splitTitle(title: string, italicWord: string) {
  const idx = title.lastIndexOf(italicWord);
  if (idx === -1) return { regular: title, italic: "" };
  const regular = title.slice(0, idx).trim();
  const italic = title.slice(idx);
  return { regular, italic };
}

export function CaseStudyHeader({
  frontmatter,
}: {
  frontmatter: CaseStudyFrontmatter;
}) {
  const { regular, italic } = splitTitle(frontmatter.title, frontmatter.italicWord);
  return (
    <header className="pt-12 lg:pt-20">
      <Container>
        <Link
          href="/portfolio"
          className="font-body text-sm text-stone-600 hover:text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
        >
          ← All projects
        </Link>
        <div className="mt-8 max-w-4xl">
          <p className="text-xs font-body font-medium uppercase tracking-widest text-orange">
            {frontmatter.category}
          </p>
          <DisplayHeading
            as="h1"
            size="lg"
            className="mt-4"
            regular={regular}
            italic={italic}
          />
          <p className="mt-6 font-body text-base text-stone-600">
            {frontmatter.client} &middot; {frontmatter.year} &middot; {frontmatter.role}
          </p>
        </div>
        <div className="relative aspect-[16/9] w-full mt-12 overflow-hidden bg-stone-100">
          <Image
            src={frontmatter.hero}
            alt={`${frontmatter.title} hero`}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </Container>
    </header>
  );
}
