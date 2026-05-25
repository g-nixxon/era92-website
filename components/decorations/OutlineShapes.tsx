type ShapeProps = {
  color?: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

// All shapes default to charcoal stroke. Orange may be used sparingly per the
// "outline geometric shape decorations" allowance in the orange usage rules —
// stick to one or two orange shapes per collage, not all of them.
const DEFAULT_COLOR = "#1F2027";
const DEFAULT_SIZE = 48;
const DEFAULT_STROKE = 1.5;

function svgProps(size: number, className: string) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none" as const,
    "aria-hidden": true,
    focusable: false as const,
    className,
  };
}

export function AsteriskShape({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  className = "",
  strokeWidth = DEFAULT_STROKE,
}: ShapeProps) {
  return (
    <svg {...svgProps(size, className)}>
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
        <line x1="24" y1="6" x2="24" y2="42" />
        <line x1="6" y1="24" x2="42" y2="24" />
        <line x1="11" y1="11" x2="37" y2="37" />
        <line x1="37" y1="11" x2="11" y2="37" />
      </g>
    </svg>
  );
}

export function CubeWireframe({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  className = "",
  strokeWidth = DEFAULT_STROKE,
}: ShapeProps) {
  return (
    <svg {...svgProps(size, className)}>
      <g stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" fill="none">
        <polygon points="10,18 24,10 38,18 38,34 24,42 10,34" />
        <polyline points="10,18 24,26 38,18" />
        <line x1="24" y1="26" x2="24" y2="42" />
      </g>
    </svg>
  );
}

export function ArcRadial({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  className = "",
  strokeWidth = DEFAULT_STROKE,
}: ShapeProps) {
  return (
    <svg {...svgProps(size, className)}>
      <g stroke={color} strokeWidth={strokeWidth} fill="none">
        <path d="M6 38 A 24 24 0 0 1 42 38" />
        <path d="M12 38 A 16 16 0 0 1 36 38" />
        <path d="M18 38 A 8 8 0 0 1 30 38" />
      </g>
    </svg>
  );
}

export function SparkleShape({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  className = "",
  strokeWidth = DEFAULT_STROKE,
}: ShapeProps) {
  return (
    <svg {...svgProps(size, className)}>
      <g stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round">
        <path d="M24 6 C 26 18, 30 22, 42 24 C 30 26, 26 30, 24 42 C 22 30, 18 26, 6 24 C 18 22, 22 18, 24 6 Z" />
      </g>
    </svg>
  );
}

export function DottedGridSquare({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  className = "",
}: ShapeProps) {
  const positions = [8, 16, 24, 32, 40];
  return (
    <svg {...svgProps(size, className)}>
      {positions.map((y) =>
        positions.map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.2} fill={color} />
        ))
      )}
    </svg>
  );
}

export function SquareLeaf({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  className = "",
  strokeWidth = DEFAULT_STROKE,
}: ShapeProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path
        d="M8 8 L 40 8 Q 40 40, 8 40 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleOutline({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  className = "",
  strokeWidth = DEFAULT_STROKE,
}: ShapeProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="24" cy="24" r="18" stroke={color} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
}

export function OpenSquare({
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  className = "",
  strokeWidth = DEFAULT_STROKE,
}: ShapeProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="8" y="8" width="32" height="32" stroke={color} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
}
