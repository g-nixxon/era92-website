import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Button } from "@/components/ui/Button";

type Project = {
  name: string;
  client: string;
  category: string;
  outcome: string;
  image: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    name: "Field Notes Redesign",
    client: "Northwind Outfitters",
    category: "Brand Identity",
    outcome: "Lifted retail sell-through 28% in the first quarter.",
    image: "/images/placeholders/work-1.svg",
    href: "/work/northwind",
  },
  {
    name: "Halcyon Brand Film",
    client: "Halcyon",
    category: "Video Production",
    outcome: "3.1M organic views across launch week.",
    image: "/images/placeholders/work-2.svg",
    href: "/work/halcyon",
  },
  {
    name: "Meridian Platform Site",
    client: "Meridian",
    category: "Web Design",
    outcome: "Cut bounce 41%, doubled qualified demo requests.",
    image: "/images/placeholders/work-3.svg",
    href: "/work/meridian",
  },
];

export function SelectedWork() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>Selected work</EyebrowLabel>
          <DisplayHeading className="mt-6" regular="Recent" italic="projects." />
        </div>

        <ul className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <li key={project.name}>
              <Link href={project.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-body font-medium uppercase tracking-widest text-orange">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl lg:text-3xl text-charcoal leading-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-body text-sm text-stone-600">{project.client}</p>
                  <p className="mt-3 font-body text-base text-charcoal leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 lg:mt-14">
          <Button href="/work" variant="text-link">
            View all work →
          </Button>
        </div>
      </Container>
    </section>
  );
}
