import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Button } from "@/components/ui/Button";

type Sample = {
  name: string;
  category: string;
  image: string;
};

const SAMPLES: Sample[] = [
  { name: "Northwind Identity", category: "Brand System", image: "/images/placeholders/sample-brand-1.svg" },
  { name: "Halcyon Wordmark", category: "Brand Identity", image: "/images/placeholders/sample-brand-2.svg" },
  { name: "Meridian Platform", category: "Website", image: "/images/placeholders/sample-web-1.svg" },
  { name: "Stillwater Brand Film", category: "Video", image: "/images/placeholders/sample-video-1.svg" },
  { name: "Foundry42 Series", category: "Video", image: "/images/placeholders/sample-video-2.svg" },
  { name: "Vantage Co. Campaign", category: "Social", image: "/images/placeholders/sample-social-1.svg" },
];

export function SampleWorkStrip() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>Recent deliverables</EyebrowLabel>
          <DisplayHeading className="mt-6" regular="Work that" italic="ships." />
        </div>
      </Container>

      {/* Horizontal scroll lives outside the Container so cards can scroll edge-to-edge */}
      <div className="mt-10 lg:mt-12 overflow-x-auto scrollbar-thin">
        <ul className="flex gap-5 lg:gap-6 px-6 lg:px-8 pb-2">
          {SAMPLES.map((sample) => (
            <li key={sample.name} className="shrink-0 w-72 sm:w-80 lg:w-96">
              <div className="relative aspect-[3/2] overflow-hidden bg-stone-100">
                <Image
                  src={sample.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs font-body font-medium uppercase tracking-widest text-orange">
                  {sample.category}
                </p>
                <h3 className="mt-2 font-display text-xl text-charcoal leading-tight">
                  {sample.name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Container>
        <div className="mt-10">
          <Button href="/portfolio" variant="text-link">
            See full portfolio →
          </Button>
        </div>
      </Container>
    </section>
  );
}
