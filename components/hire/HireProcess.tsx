import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import {
  SparkleShape,
  CubeWireframe,
  AsteriskShape,
} from "@/components/decorations/OutlineShapes";

type Step = {
  shape: (props: { color?: string; size?: number; className?: string }) => JSX.Element;
  number: string;
  title: string;
  duration: string;
  body: string;
};

// Orange usage: process shape icons are an approved orange surface
// ("outline geometric shape decorations"). Step numbers stay charcoal.
const STEPS: Step[] = [
  {
    shape: SparkleShape,
    number: "Step 1",
    title: "Brief",
    duration: "2–3 days",
    body: "You share what you need. We respond within one business day with questions, a scope, and a timeline.",
  },
  {
    shape: CubeWireframe,
    number: "Step 2",
    title: "Build",
    duration: "varies by project",
    body: "Our team builds in the open. Shared Figma, weekly check-ins, async-first communication. You see progress, not just deliverables.",
  },
  {
    shape: AsteriskShape,
    number: "Step 3",
    title: "Deliver",
    duration: "with revision rounds",
    body: "Final files, source files, and a handoff doc. Two revision rounds included on every project. No surprise invoices.",
  },
];

export function HireProcess() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>How we work</EyebrowLabel>
          <DisplayHeading
            className="mt-6"
            regular="Three steps from"
            italic="brief to delivery."
          />
        </div>

        <ol className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {STEPS.map((step) => {
            const Shape = step.shape;
            return (
              <li key={step.title} className="flex flex-col">
                <Shape color="#FF4E00" size={44} />
                <p className="mt-6 font-body text-xs uppercase tracking-widest text-stone-600">
                  {step.number} &middot; <span className="text-stone-600/80">{step.duration}</span>
                </p>
                <h3 className="mt-2 font-display text-3xl text-charcoal leading-tight">
                  {step.title}
                </h3>
                <p className="mt-4 font-body text-base text-stone-600 leading-relaxed">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
