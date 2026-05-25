import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

type Story = {
  name: string;
  location: string;
  // [swap] — Trinity will provide real graduate stories with their consent.
  body: string[];
  href: string;
  image: string;
};

const STORIES: Story[] = [
  {
    name: "Story One — Placeholder",
    location: "Kosovo settlement, Kampala",
    body: [
      "Two-three paragraphs covering this graduate's path through Elevate, the work they're doing now, and what changed for their family. Written in the graduate's own voice where possible.",
      "A second paragraph adds specifics that anchor the story in place and time. Real names, real locations, real numbers when the graduate gives consent to share them.",
    ],
    href: "/insights/why-we-started",
    image: "/images/placeholders/graduate-1.svg",
  },
  {
    name: "Story Two — Placeholder",
    location: "Bidi Bidi refugee settlement",
    body: [
      "Story from the Bidi Bidi cohort — the second-largest refugee settlement in the world and one of the harder places to run a Hub. The graduate's path through the program and into placement.",
      "What changed in their household, in their day-to-day, and what they would tell a younger version of themselves at the start of the program.",
    ],
    href: "/insights/field-notes-bidi-bidi",
    image: "/images/placeholders/graduate-2.svg",
  },
  {
    name: "Story Three — Placeholder",
    location: "Gulu, Northern Uganda",
    body: [
      "An adult-entrepreneur story from era92 Fund — a borrower who used microfinance to expand a small business that now employs three other people in their community.",
      "The repayment record, the second loan, and the network effect of one functioning business in a town that didn't previously have one in this category.",
    ],
    href: "/insights/q1-2026-update",
    image: "/images/placeholders/graduate-3.svg",
  },
];

export function BeneficiaryStories() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>Stories</EyebrowLabel>
          <DisplayHeading
            className="mt-6"
            regular="The faces behind"
            italic="the metrics."
          />
        </div>

        <ul className="mt-12 lg:mt-16 space-y-16 lg:space-y-20">
          {STORIES.map((story, i) => {
            const imageOnRight = i % 2 === 1;
            return (
              <li
                key={story.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div
                  className={`lg:col-span-5 ${imageOnRight ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-full bg-stone-100">
                    <Image
                      src={story.image}
                      alt={`Portrait of ${story.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${imageOnRight ? "lg:order-1" : ""}`}>
                  <h3 className="font-display text-3xl lg:text-4xl text-charcoal leading-tight">
                    {story.name}
                  </h3>
                  <p className="mt-2 font-body text-sm uppercase tracking-widest text-stone-600">
                    {story.location}
                  </p>
                  <div className="mt-6 space-y-4 font-body text-base lg:text-lg text-stone-600 leading-relaxed">
                    {story.body.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  <Link
                    href={story.href}
                    className="mt-6 inline-block font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
                  >
                    Read more →
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
