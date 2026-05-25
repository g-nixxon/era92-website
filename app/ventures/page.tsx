import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { WavyUnderline } from "@/components/ui/WavyUnderline";
import {
  SparkleShape,
  CubeWireframe,
  AsteriskShape,
  CircleOutline,
} from "@/components/decorations/OutlineShapes";

type VentureCard = {
  shape: (props: { color?: string; size?: number; className?: string }) => JSX.Element;
  name: string;
  role: string;
  description: string; // [swap] — Trinity to refine from the era92 messaging doc.
  href: string;
};

const VENTURES: VentureCard[] = [
  {
    shape: SparkleShape,
    name: "era92 Elevate",
    role: "Training",
    description:
      "Free, six-month creative-craft training for young people from slums and refugee settlements. Where the era92 pipeline starts.",
    href: "/ventures/elevate",
  },
  {
    shape: CubeWireframe,
    name: "era92 Creative",
    role: "Employment",
    description:
      "The revenue-generating studio. We employ Elevate graduates as full-time creatives and serve international clients in brand, web, video, and digital.",
    href: "/ventures/creative",
  },
  {
    shape: AsteriskShape,
    name: "era92 Fund",
    role: "Financing",
    description:
      "Licensed microfinance for graduates and entrepreneurs. Patient capital so the people we train can build their own ventures from day one.",
    href: "/ventures/fund",
  },
  {
    shape: CircleOutline,
    name: "era92 Hub",
    role: "Infrastructure",
    description:
      "Co-working, training space, and incubation hubs across seven Ugandan communities. The shared infrastructure the model runs on.",
    href: "/ventures/hub",
  },
];

const PAGE_TITLE = "Ventures — Four ventures, one pipeline";
const PAGE_DESCRIPTION =
  "era92 Elevate trains. era92 Creative employs. era92 Fund finances. era92 Hub anchors. One holding company, one integrated model.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function VenturesIndexPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>Our ventures</EyebrowLabel>
          <div className="mt-6 inline-block">
            <DisplayHeading as="h1" regular="Four ventures." italic="One pipeline." />
            <WavyUnderline className="mt-3 w-40" />
          </div>
          <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed max-w-2xl">
            We built a holding company so each part of the train-employ-finance model could be
            designed, funded, and led on its own terms.
          </p>
        </div>

        <ul className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {VENTURES.map((v) => {
            const Shape = v.shape;
            return (
              <li key={v.name}>
                <Link
                  href={v.href}
                  className="group block bg-stone-100 border border-stone-300 rounded-lg p-8 lg:p-12 h-full transition-transform duration-300 hover:scale-[1.02] hover:border-orange/40"
                >
                  <Shape color="#1F2027" size={48} />
                  <p className="mt-6 text-xs font-body font-medium uppercase tracking-widest text-orange">
                    {v.role}
                  </p>
                  <h2 className="mt-3 font-display text-3xl lg:text-4xl text-charcoal leading-tight">
                    {v.name}
                  </h2>
                  <p className="mt-4 font-body text-base lg:text-lg text-stone-600 leading-relaxed">
                    {v.description}
                  </p>
                  <span className="mt-6 inline-block font-body text-charcoal group-hover:underline decoration-orange underline-offset-4 decoration-2">
                    Learn more →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
