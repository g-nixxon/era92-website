import { ReactNode } from "react";

type PullQuoteProps = {
  children: ReactNode;
  attribution?: string;
  className?: string;
};

// Orange usage: the 3px left rail is an approved orange surface for founder quotes.
export function PullQuote({ children, attribution, className = "" }: PullQuoteProps) {
  return (
    <figure className={`border-l-[3px] border-orange pl-6 ${className}`}>
      <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-charcoal">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 font-body text-sm uppercase tracking-widest text-stone-600">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
