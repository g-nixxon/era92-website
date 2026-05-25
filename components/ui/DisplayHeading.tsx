import { ReactNode } from "react";

type DisplayHeadingProps = {
  // Two strings let consumers mix roman + italic emphasis, e.g. "Image" + "treatment".
  regular?: string;
  italic?: string;
  children?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  className?: string;
};

const SIZE_CLASSES = {
  xl: "text-5xl md:text-7xl lg:text-8xl",
  lg: "text-4xl md:text-5xl lg:text-6xl",
  md: "text-3xl md:text-4xl lg:text-5xl",
} as const;

export function DisplayHeading({
  regular,
  italic,
  children,
  as: Tag = "h2",
  size = "lg",
  className = "",
}: DisplayHeadingProps) {
  return (
    <Tag
      className={`font-display font-normal leading-[1.05] tracking-tight text-charcoal ${SIZE_CLASSES[size]} ${className}`}
    >
      {children ?? (
        <>
          {regular}
          {regular && italic ? " " : null}
          {italic ? <em className="italic">{italic}</em> : null}
        </>
      )}
    </Tag>
  );
}
