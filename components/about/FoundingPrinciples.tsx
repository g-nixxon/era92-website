import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

type Pillar = {
  number: string;
  name: string;
  // [swap] — Trinity will refine these one-liners from the era92 messaging doc.
  description: string;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    name: "Youth Are Assets",
    description:
      "We start from the conviction that the young people we serve are creative directors and founders, not problems to solve.",
  },
  {
    number: "02",
    name: "Employment Is Dignity",
    description:
      "A job is the most reliable engine of human flourishing. We build companies that hire people, not programs that count them.",
  },
  {
    number: "03",
    name: "Charity as Seed Capital",
    description:
      "Donations and grants fund the training infrastructure. Revenue from real client work sustains the model from year two on.",
  },
  {
    number: "04",
    name: "Subsidiarity",
    description:
      "Decisions are made closest to the work. Local teams run local programs; the holding company sets direction, not tactics.",
  },
  {
    number: "05",
    name: "Build Systems, Not Campaigns",
    description:
      "A campaign ends. A system compounds. We invest in pipelines and infrastructure that outlast any single project or season.",
  },
];

export function FoundingPrinciples() {
  return (
    <section className="bg-charcoal text-cream py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>What we believe</EyebrowLabel>
          <DisplayHeading className="mt-6 text-cream" regular="Five" italic="pillars." />
        </div>

        <ol className="mt-12 lg:mt-16 divide-y divide-cream/15 border-t border-b border-cream/15">
          {PILLARS.map((p) => (
            <li key={p.number} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-8 lg:py-10 items-start">
              <span className="md:col-span-2 font-display text-4xl md:text-5xl text-orange leading-none">
                {p.number}
              </span>
              <div className="md:col-span-10">
                <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight">
                  {p.name}
                </h3>
                <p className="mt-3 font-body text-base lg:text-lg text-cream/80 leading-relaxed max-w-3xl">
                  {p.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
