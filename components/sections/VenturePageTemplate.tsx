import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { WavyUnderline } from "@/components/ui/WavyUnderline";
import { StatBlock } from "@/components/ui/StatBlock";
import { ShapeCollage } from "@/components/decorations/ShapeCollage";

// Single template that every /ventures/<slug> page consumes. Adding new
// sections via the `sections` prop keeps the page files thin; the per-section
// `children` slot covers any bespoke widgets (timelines, card grids, etc.).
//
// Beyond the spec's required fields, VentureSection adds:
//   - `id`        for in-page anchor scrolling (e.g. #apply, #loans)
//   - `background` so individual mid-page sections can switch to charcoal
//                  without breaking the rest of the page rhythm
// Both are optional; pages that don't need them just omit them.

type CTA = { label: string; href: string };

type SectionLayout = "centered" | "two-col";
type SectionBackground = "cream" | "charcoal";

export type VentureSection = {
  eyebrow: string;
  headlineRegular: string;
  headlineItalic: string;
  body?: string;
  layout: SectionLayout;
  children?: ReactNode;
  id?: string;
  background?: SectionBackground;
};

export type VentureStat = { number: string; label: string };

export type VenturePageProps = {
  ventureName: string;
  role: string;
  iconShape: ReactNode;
  heroHeadlineRegular: string;
  heroHeadlineItalic: string;
  heroSubhead: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  sections: VentureSection[];
  stats?: VentureStat[];
  closingCTA: {
    headline: { regular: string; italic: string };
    subhead: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

// The icon prop comes pre-instantiated (e.g. <SparkleShape color="orange" />).
// Default OutlineShape size is 48px — too small for a hero focal point — so we
// cloneElement to nudge it up to 160px without making callers manage sizing.
function enlargeIcon(iconShape: ReactNode): ReactNode {
  if (!isValidElement(iconShape)) return iconShape;
  return cloneElement(iconShape as ReactElement<{ size?: number }>, {
    size: 160,
  });
}

// Stats columns scale with how many were provided (handles /hub's 3-stat case
// gracefully). Tailwind needs static class names for JIT, so map explicitly.
const STATS_COLS: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

function VentureHero({
  role,
  iconShape,
  heroHeadlineRegular,
  heroHeadlineItalic,
  heroSubhead,
  primaryCTA,
  secondaryCTA,
}: Pick<
  VenturePageProps,
  | "role"
  | "iconShape"
  | "heroHeadlineRegular"
  | "heroHeadlineItalic"
  | "heroSubhead"
  | "primaryCTA"
  | "secondaryCTA"
>) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <EyebrowLabel>{role}</EyebrowLabel>
            <div className="mt-6 inline-block">
              <DisplayHeading
                as="h1"
                size="lg"
                regular={heroHeadlineRegular}
                italic={heroHeadlineItalic}
              />
              <WavyUnderline className="mt-3 w-40" />
            </div>
            <p className="mt-8 font-body text-lg text-stone-600 leading-relaxed max-w-2xl">
              {heroSubhead}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Button href={primaryCTA.href} variant="primary" size="lg">
                {primaryCTA.label}
              </Button>
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="text-link">
                  {secondaryCTA.label} →
                </Button>
              )}
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ShapeCollage layout="side">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-stone-100 rounded-lg flex items-center justify-center">
                {enlargeIcon(iconShape)}
              </div>
            </ShapeCollage>
          </div>
        </div>
      </Container>
    </section>
  );
}

function VentureSectionRenderer({ section }: { section: VentureSection }) {
  const isDark = section.background === "charcoal";
  const bgClass = isDark ? "bg-charcoal text-cream" : "";
  const bodyClass = isDark ? "text-cream/80" : "text-stone-600";
  const headingClass = isDark ? "text-cream" : "";

  const headingBlock = (
    <>
      <EyebrowLabel>{section.eyebrow}</EyebrowLabel>
      <DisplayHeading
        className={`mt-6 ${headingClass}`.trim()}
        regular={section.headlineRegular}
        italic={section.headlineItalic}
      />
      {section.body && (
        <p
          className={`mt-6 font-body text-lg leading-relaxed max-w-prose ${bodyClass}`}
        >
          {section.body}
        </p>
      )}
    </>
  );

  return (
    <section
      id={section.id}
      className={`py-16 lg:py-24 scroll-mt-24 ${bgClass}`.trim()}
    >
      <Container>
        {section.layout === "centered" ? (
          <>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center">{headingBlock}</div>
            </div>
            {section.children && (
              <div className="mt-12 lg:mt-16">{section.children}</div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">{headingBlock}</div>
            <div className="lg:col-span-7">{section.children}</div>
          </div>
        )}
      </Container>
    </section>
  );
}

function StatsBar({ stats }: { stats: VentureStat[] }) {
  const cols = STATS_COLS[stats.length] ?? "lg:grid-cols-4";
  return (
    <section className="bg-charcoal text-cream py-16 lg:py-24">
      <Container>
        <ul className={`grid grid-cols-2 ${cols} gap-10 lg:gap-12`}>
          {stats.map((s) => (
            <li key={s.label}>
              <StatBlock value={s.number} label={s.label} tone="dark" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ClosingCTA({ closingCTA }: { closingCTA: VenturePageProps["closingCTA"] }) {
  return (
    <section className="bg-charcoal text-cream py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <DisplayHeading
            className="text-cream"
            regular={closingCTA.headline.regular}
            italic={closingCTA.headline.italic}
          />
          <p className="mt-6 font-body text-lg text-cream/80 leading-relaxed">
            {closingCTA.subhead}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={closingCTA.buttonHref} variant="primary" size="lg">
              {closingCTA.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function VenturePageTemplate(props: VenturePageProps) {
  return (
    <>
      <VentureHero
        role={props.role}
        iconShape={props.iconShape}
        heroHeadlineRegular={props.heroHeadlineRegular}
        heroHeadlineItalic={props.heroHeadlineItalic}
        heroSubhead={props.heroSubhead}
        primaryCTA={props.primaryCTA}
        secondaryCTA={props.secondaryCTA}
      />
      {props.sections.map((section, i) => (
        <VentureSectionRenderer
          key={`${section.eyebrow}-${i}`}
          section={section}
        />
      ))}
      {props.stats && props.stats.length > 0 && <StatsBar stats={props.stats} />}
      <ClosingCTA closingCTA={props.closingCTA} />
    </>
  );
}
