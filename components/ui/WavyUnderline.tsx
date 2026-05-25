type WavyUnderlineProps = {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number;
};

// Orange usage: the wavy underline motif under display headings is an
// approved orange surface — keep stroke around 2-3px so it reads as an accent.
export function WavyUnderline({
  className = "",
  color = "#FF4E00",
  width = "100%",
  height = 8,
}: WavyUnderlineProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={width}
      height={height}
      viewBox="0 0 240 8"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M0 4 C 15 0, 25 8, 40 4 S 65 0, 80 4 S 105 8, 120 4 S 145 0, 160 4 S 185 8, 200 4 S 225 0, 240 4"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
