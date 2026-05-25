import { ReactNode } from "react";
import {
  AsteriskShape,
  ArcRadial,
  CircleOutline,
  CubeWireframe,
  DottedGridSquare,
  OpenSquare,
  SparkleShape,
  SquareLeaf,
} from "./OutlineShapes";

type Layout = "hero" | "side" | "inline";

type ShapePlacement = {
  Component: (props: { color?: string; size?: number; className?: string }) => JSX.Element;
  className: string;
  size: number;
  color?: string;
};

// One orange accent per collage at most — see orange usage rules in README.
const LAYOUTS: Record<Layout, ShapePlacement[]> = {
  hero: [
    { Component: AsteriskShape, className: "absolute -top-6 -left-6 rotate-12", size: 56, color: "#FF4E00" },
    { Component: SparkleShape, className: "absolute -top-8 right-10 -rotate-12", size: 40 },
    { Component: CubeWireframe, className: "absolute -bottom-6 -right-8 rotate-6", size: 64 },
    { Component: DottedGridSquare, className: "absolute -bottom-10 left-6 -rotate-6", size: 48 },
  ],
  side: [
    { Component: ArcRadial, className: "absolute -top-4 -right-4", size: 52 },
    { Component: CircleOutline, className: "absolute -bottom-6 -left-6", size: 44, color: "#FF4E00" },
    { Component: OpenSquare, className: "absolute -bottom-4 right-8 rotate-12", size: 36 },
  ],
  inline: [
    { Component: SquareLeaf, className: "absolute -top-4 left-4 -rotate-12", size: 36 },
    { Component: SparkleShape, className: "absolute -bottom-4 right-6 rotate-6", size: 32, color: "#FF4E00" },
    { Component: DottedGridSquare, className: "absolute -top-2 -right-4", size: 28 },
  ],
};

type ShapeCollageProps = {
  children: ReactNode;
  layout?: Layout;
  className?: string;
};

export function ShapeCollage({ children, layout = "hero", className = "" }: ShapeCollageProps) {
  const shapes = LAYOUTS[layout];
  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {shapes.map(({ Component, className: shapeClass, size, color }, i) => (
        <span key={i} className={shapeClass} aria-hidden="true">
          <Component size={size} color={color} />
        </span>
      ))}
    </div>
  );
}
