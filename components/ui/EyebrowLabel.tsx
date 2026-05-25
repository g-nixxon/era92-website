import { ReactNode } from "react";

// Orange usage: eyebrow labels are one of the approved orange surfaces.
// Keep them small, uppercase, and tracked-out so the color reads as accent, not noise.
type EyebrowLabelProps = {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
};

export function EyebrowLabel({ children, className = "", as: Tag = "p" }: EyebrowLabelProps) {
  return (
    <Tag className={`text-xs font-body font-medium uppercase tracking-widest text-orange ${className}`}>
      {children}
    </Tag>
  );
}
