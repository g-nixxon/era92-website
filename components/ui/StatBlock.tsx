import { WavyUnderline } from "./WavyUnderline";

type StatBlockProps = {
  value: string;
  label: string;
  className?: string;
};

// Orange usage: the stat number's underline accent is an approved orange surface.
// Keep the number itself in charcoal — orange numerals would be too loud.
export function StatBlock({ value, label, className = "" }: StatBlockProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="relative inline-block">
        <span className="font-display font-normal text-5xl md:text-6xl text-charcoal leading-none">
          {value}
        </span>
        <WavyUnderline className="mt-1 w-full" />
      </div>
      <p className="font-body text-sm uppercase tracking-widest text-stone-600 mt-2">
        {label}
      </p>
    </div>
  );
}
