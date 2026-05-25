import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { WavyUnderline } from "@/components/ui/WavyUnderline";

type Capability = {
  name: string;
  description: string;
  image: string;
  href: string;
};

const CAPABILITIES: Capability[] = [
  {
    name: "Brand Identity",
    description: "Logos, systems, guidelines.",
    image: "/images/placeholders/capability-brand.svg",
    href: "/services/brand",
  },
  {
    name: "Web Design",
    description: "Sites, landing pages, design systems.",
    image: "/images/placeholders/capability-web.svg",
    href: "/services/web",
  },
  {
    name: "Video Production",
    description: "Brand films, social cuts, motion.",
    image: "/images/placeholders/capability-video.svg",
    href: "/services/video",
  },
  {
    name: "Digital Marketing",
    description: "Campaigns, content, paid social.",
    image: "/images/placeholders/capability-digital.svg",
    href: "/services/digital",
  },
];

export function Capabilities() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>What we make</EyebrowLabel>
          <div className="mt-6 inline-block">
            <DisplayHeading regular="Capabilities that" italic="ship." />
            <WavyUnderline className="mt-2 w-40" />
          </div>
        </div>

        <ul className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap) => (
            <li key={cap.name}>
              <Link
                href={cap.href}
                className="group block bg-stone-100 border-b-2 border-transparent hover:border-orange transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-stone-100">
                  <Image
                    src={cap.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="font-display text-xl lg:text-2xl text-charcoal leading-tight">
                    {cap.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-stone-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
