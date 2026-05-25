import { ReactNode } from "react";

type PullQuoteProps = {
  children: ReactNode;
  attribution?: string;
  className?: string;
};

// Orange usage: the 3px left rail is an approved orange surface for founder quotes.
// Text color lives on the figure (text-charcoal by default) so callers can override
// with className="text-cream" on dark backgrounds — the blockquote inherits.
export function PullQuote({ children, attribution, className = "" }: PullQuoteProps) {
  return (
    <figure className={`border-l-[3px] border-orange pl-6 text-charcoal ${className}`}>
      <blockquote className="font-display italic text-2xl md:text-3xl leading-snug">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 font-body text-sm uppercase tracking-widest opacity-60">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
