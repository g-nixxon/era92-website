import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "text-link";
type Size = "sm" | "md" | "lg";

// Orange usage: the `primary` variant intentionally uses brand orange because
// CTAs are one of the approved orange surfaces. See README.md → "Orange usage rules".
const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-orange text-cream hover:bg-orange/90 border border-transparent",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream",
  "text-link":
    "bg-transparent text-charcoal border-none px-0 py-0 hover:underline decoration-orange underline-offset-4 decoration-2",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:ring-charcoal";
  const sizeClass = variant === "text-link" ? "" : SIZE_CLASSES[size];
  const merged = `${base} ${VARIANT_CLASSES[variant]} ${sizeClass} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={merged}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={merged} {...rest}>
      {children}
    </button>
  );
}
