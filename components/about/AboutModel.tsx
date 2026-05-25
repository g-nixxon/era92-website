import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import {
  SparkleShape,
  AsteriskShape,
  CubeWireframe,
  CircleOutline,
} from "@/components/decorations/OutlineShapes";

type Venture = {
  shape: (props: { color?: string; size?: number; className?: string }) => JSX.Element;
  name: string;
  role: string;
  description: string; // [swap] — written from role label; Trinity will supply the
  // canonical copy in the era92 messaging doc.
  href: string;
};

const VENTURES: Venture[] = [
  {
    shape: SparkleShape,
    name: "era92 Elevate",
    role: "Training",
    description:
      "Free, intensive creative-craft training for youth from slums and refugee settlements. Where the pipeline starts.",
    href: "/ventures/elevate",
  },
  {
    shape: AsteriskShape,
    name: "era92 Creative",
    role: "Employment",
    description:
      "The revenue-generating studio. Elevate graduates become full-time employees delivering work for clients worldwide.",
    href: "/ventures/creative",
  },
  {
    shape: CubeWireframe,
    name: "era92 Fund",
    role: "Financing",
    description:
      "Microfinance and patient capital so graduates can launch their own ventures instead of waiting for outside funding.",
    href: "/ventures/fund",
  },
  {
    shape: CircleOutline,
    name: "era92 Hub",
    role: "Infrastructure",
    description:
      "Physical studios, workspace, and broadband in the communities we serve. The shared infrastructure the model runs on.",
    href: "/ventures/hub",
  },
];

export function AboutModel() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>The model</EyebrowLabel>
          <DisplayHeading className="mt-6" regular="Four ventures." italic="One pipeline." />
          <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed">
            We built a holding company and launched different ventures for each part of our model.
          </p>
        </div>

        <ul className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {VENTURES.map((v) => {
            const Shape = v.shape;
            return (
              <li key={v.name} className="flex flex-col">
                <Shape color="#1F2027" size={40} />
                <h3 className="mt-5 font-display text-2xl lg:text-3xl text-charcoal leading-tight">
                  {v.name}
                </h3>
                <p className="mt-2 font-body text-xs uppercase tracking-widest text-orange">
                  {v.role}
                </p>
                <p className="mt-4 font-body text-base text-stone-600 leading-relaxed flex-1">
                  {v.description}
                </p>
                <Link
                  href={v.href}
                  className="mt-4 font-body text-sm text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
                >
                  Learn more →
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
