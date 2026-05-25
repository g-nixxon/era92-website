import { WavyUnderline } from "./WavyUnderline";

type Tone = "light" | "dark";

type StatBlockProps = {
  value: string;
  label: string;
  tone?: Tone;
  className?: string;
};

// Orange usage: the stat number's underline accent is an approved orange surface.
// Number itself stays neutral (charcoal on light bg, cream on dark bg) — orange
// numerals would be too loud. Pass tone="dark" when the section bg is charcoal.
const TONE_CLASSES: Record<Tone, { value: string; label: string }> = {
  light: { value: "text-charcoal", label: "text-stone-600" },
  dark: { value: "text-cream", label: "text-cream/60" },
};

export function StatBlock({ value, label, tone = "light", className = "" }: StatBlockProps) {
  const t = TONE_CLASSES[tone];
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="relative inline-block">
        <span className={`font-display font-normal text-5xl md:text-6xl leading-none ${t.value}`}>
          {value}
        </span>
        <WavyUnderline className="mt-1 w-full" />
      </div>
      <p className={`font-body text-sm uppercase tracking-widest mt-2 ${t.label}`}>{label}</p>
    </div>
  );
}
