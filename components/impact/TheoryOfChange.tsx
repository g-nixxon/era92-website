import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import {
  ArcRadial,
  SparkleShape,
  CubeWireframe,
  AsteriskShape,
  CircleOutline,
} from "@/components/decorations/OutlineShapes";

type Step = {
  shape: (props: { color?: string; size?: number; className?: string }) => JSX.Element;
  name: string;
  body: string;
};

// Five steps instead of the homepage's four — the "Compound" step is where the
// model becomes a loop instead of a line. Visual rhythm matches TheModel
// section on the homepage so /impact reads as a related view, not a new system.
const STEPS: Step[] = [
  {
    shape: ArcRadial,
    name: "Identify",
    body: "Settlements and slums where the talent already lives.",
  },
  {
    shape: SparkleShape,
    name: "Train",
    body: "Six-month Elevate cohorts cover tuition, equipment, and mentorship.",
  },
  {
    shape: CubeWireframe,
    name: "Employ",
    body: "era92 Creative hires the graduates into real client work.",
  },
  {
    shape: AsteriskShape,
    name: "Finance",
    body: "era92 Fund lends to graduates building their own ventures.",
  },
  {
    shape: CircleOutline,
    name: "Compound",
    body: "Graduates train the next cohort. The model becomes a loop.",
  },
];

export function TheoryOfChange() {
  return (
    <section className="bg-charcoal text-cream py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>The model</EyebrowLabel>
          <DisplayHeading
            className="mt-6 text-cream"
            regular="How we make"
            italic="change happen."
          />
        </div>

        <ol className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-8 lg:gap-x-4 items-start">
          {STEPS.map((step, i) => {
            const Shape = step.shape;
            const isLast = i === STEPS.length - 1;
            return (
              <li key={step.name} className="contents">
                <div className="flex flex-col items-start">
                  <Shape color="#FF4E00" size={40} />
                  <h3 className="mt-5 font-display text-xl lg:text-2xl text-cream leading-tight">
                    {step.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-cream/70 leading-relaxed">
                    {step.body}
                  </p>
                </div>
                {!isLast && (
                  <div
                    className="flex lg:justify-center justify-start lg:pt-2"
                    aria-hidden="true"
                  >
                    <ArrowRight
                      size={24}
                      strokeWidth={1.5}
                      className="hidden lg:block text-orange"
                    />
                    <ArrowDown
                      size={24}
                      strokeWidth={1.5}
                      className="lg:hidden text-orange"
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
