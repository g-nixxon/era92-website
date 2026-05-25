import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

type Tier = {
  name: string;
  range: string;
  forText: string;
  examples: string[];
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Sprint",
    range: "$5K — $15K",
    forText:
      "Single deliverable. Landing page, brand refresh, one-off video. 2–4 weeks.",
    examples: [
      "Landing page redesign",
      "Logo + 1-page brand guide",
      "30-second social video",
      "Investor pitch deck",
    ],
  },
  {
    name: "Build",
    range: "$15K — $50K",
    forText:
      "Full project. Brand system + website, multi-asset campaign, video series. 6–12 weeks.",
    examples: [
      "Brand system + website launch",
      "5-asset video campaign",
      "Multi-page marketing site",
      "Product launch campaign",
    ],
    featured: true,
  },
  {
    name: "Partnership",
    range: "Retainer, $10K+/mo",
    forText: "Ongoing creative team for in-house brand and marketing.",
    examples: [
      "Fractional design team",
      "Always-on social content",
      "Ongoing brand evolution",
      "Monthly content production",
    ],
  },
];

export function PricingTiers() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>What it costs</EyebrowLabel>
          <DisplayHeading className="mt-6" regular="Project tiers," italic="no hidden math." />
          <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed">
            Most projects fit one of these three shapes. We&rsquo;ll confirm exact pricing in the
            brief response.
          </p>
        </div>

        <ul className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:items-stretch">
          {TIERS.map((tier) => (
            <li key={tier.name} className={tier.featured ? "lg:-my-4" : ""}>
              <article
                className={
                  tier.featured
                    ? "relative h-full bg-stone-100 border-2 border-orange rounded-lg p-7 lg:p-8 flex flex-col"
                    : "relative h-full bg-stone-100 border border-stone-300 rounded-lg p-7 lg:p-8 flex flex-col"
                }
              >
                {tier.featured && (
                  <span className="absolute -top-3 right-6 inline-flex items-center bg-orange text-cream text-xs font-body font-medium uppercase tracking-widest rounded-full px-3 py-1">
                    Most common
                  </span>
                )}
                <h3 className="font-display text-3xl text-charcoal leading-tight">
                  {tier.name}
                </h3>
                <p className="mt-3 font-display text-xl text-charcoal">{tier.range}</p>
                <p className="mt-4 font-body text-base text-stone-600 leading-relaxed">
                  {tier.forText}
                </p>
                <ul className="mt-6 pt-6 border-t border-stone-300 space-y-2 flex-1">
                  {tier.examples.map((ex) => (
                    <li
                      key={ex}
                      className="font-body text-sm text-charcoal flex items-start gap-2"
                    >
                      <span className="text-orange mt-1.5 shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-body text-sm italic text-stone-600 max-w-3xl">
          Pricing reflects US/UK market rates. Margins above cost fund the Elevate training program.
        </p>
      </Container>
    </section>
  );
}
