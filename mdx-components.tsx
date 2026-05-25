import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { PullQuote } from "@/components/ui/PullQuote";

// Maps HTML/MDX elements to the era92 design system. Imported by both the
// Next file-convention `useMDXComponents` hook (if @next/mdx is ever wired in)
// and explicitly by <MDXRemote components={mdxComponents}> in the case-study
// detail page. Keep this file the only source of MDX styling so MDX bodies
// always look like the rest of the site.

export const mdxComponents: MDXComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <div className="mt-12 mb-4">
      <DisplayHeading as="h2" size="md">
        {children}
      </DisplayHeading>
    </div>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-10 mb-3 font-display text-2xl text-charcoal leading-tight">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="my-4 font-body text-base lg:text-lg text-stone-600 leading-relaxed">
      {children}
    </p>
  ),
  a: ({ children, href, ...rest }: ComponentPropsWithoutRef<"a">) => (
    <a
      href={href}
      {...rest}
      className="text-charcoal underline decoration-orange underline-offset-4 decoration-2 hover:text-orange"
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="my-5 ml-1 space-y-2 font-body text-base lg:text-lg text-stone-600 leading-relaxed">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="my-5 ml-1 space-y-2 list-decimal list-inside font-body text-base lg:text-lg text-stone-600 leading-relaxed">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="flex items-start gap-3">
      <span className="text-orange mt-2 shrink-0" aria-hidden="true">
        •
      </span>
      <span className="flex-1">{children}</span>
    </li>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <div className="my-10">
      <PullQuote>{children}</PullQuote>
    </div>
  ),
  hr: () => <hr className="my-12 border-stone-300" />,
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="text-charcoal font-medium">{children}</strong>
  ),
  em: ({ children }: { children?: ReactNode }) => (
    <em className="italic">{children}</em>
  ),
};

// Next looks for this hook at the project root when @next/mdx is enabled —
// returning the same map keeps the design system consistent across both
// rendering paths.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components };
}
