import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import {
  SparkleShape,
  AsteriskShape,
  CubeWireframe,
  CircleOutline,
} from "@/components/decorations/OutlineShapes";

type ModelStep = {
  shape: (props: { color?: string; size?: number; className?: string }) => JSX.Element;
  name: string;
  role: string;
  href: string;
};

const STEPS: ModelStep[] = [
  {
    shape: SparkleShape,
    name: "era92 Elevate",
    role: "Training",
    href: "/ventures/elevate",
  },
  {
    shape: AsteriskShape,
    name: "era92 Creative",
    role: "Employment",
    href: "/ventures/creative",
  },
  {
    shape: CubeWireframe,
    name: "era92 Fund",
    role: "Financing",
    href: "/ventures/fund",
  },
  {
    shape: CircleOutline,
    name: "era92 Hub",
    role: "Infrastructure",
    href: "/ventures/hub",
  },
];

export function TheModel() {
  return (
    <section className="bg-charcoal text-cream py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>How this works</EyebrowLabel>
          <DisplayHeading
            className="mt-6 text-cream"
            regular="An integrated"
            italic="pipeline."
          />
          <p className="mt-6 font-body text-lg text-cream/80 leading-relaxed max-w-2xl">
            We built a holding company and launched ventures for each part of our model.
            Together, they create pathways from slums to enterprise.
          </p>
        </div>

        <ol className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-8 lg:gap-x-4 items-start">
          {STEPS.map((step, i) => {
            const Shape = step.shape;
            const isLast = i === STEPS.length - 1;
            return (
              <li key={step.name} className="contents">
                <div className="flex flex-col items-start">
                  <Shape color="#FAF6ED" size={40} />
                  <h3 className="mt-5 font-display text-2xl lg:text-3xl text-cream leading-tight">
                    {step.name}
                  </h3>
                  <p className="mt-2 font-body text-sm uppercase tracking-widest text-cream/60">
                    {step.role}
                  </p>
                  <Link
                    href={step.href}
                    className="mt-4 font-body text-sm text-cream hover:underline decoration-orange underline-offset-4 decoration-2"
                  >
                    Learn more →
                  </Link>
                </div>
                {!isLast && (
                  <div className="flex lg:justify-center justify-start lg:pt-2" aria-hidden="true">
                    <ArrowRight size={28} strokeWidth={1.5} className="hidden lg:block text-orange" />
                    <ArrowDown size={28} strokeWidth={1.5} className="lg:hidden text-orange" />
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
