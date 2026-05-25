import { Container } from "@/components/layout/Container";
import {
  SparkleShape,
  CubeWireframe,
  AsteriskShape,
} from "@/components/decorations/OutlineShapes";

type Channel = {
  shape: (props: { color?: string; size?: number; className?: string }) => JSX.Element;
  heading: string;
  blurb: string;
  email: string;
};

// [swap] — Trinity will confirm canonical email addresses for press/careers.
const CHANNELS: Channel[] = [
  {
    shape: SparkleShape,
    heading: "General",
    blurb: "Anything that doesn't fit a project or partnership inquiry.",
    email: "trinity@era92.com",
  },
  {
    shape: CubeWireframe,
    heading: "Press",
    blurb: "Interview requests, story pitches, and review copy.",
    email: "press@era92.com",
  },
  {
    shape: AsteriskShape,
    heading: "Careers",
    blurb: "Studio openings, residencies, and volunteer practitioner inquiries.",
    email: "careers@era92.com",
  },
];

export function ContactInfoGrid() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CHANNELS.map((c) => {
            const Shape = c.shape;
            return (
              <li
                key={c.heading}
                className="bg-stone-100 border border-stone-300 rounded-lg p-7 lg:p-8 flex flex-col"
              >
                <Shape color="#1F2027" size={40} />
                <h3 className="mt-5 font-display text-3xl text-charcoal leading-tight">
                  {c.heading}
                </h3>
                <p className="mt-3 font-body text-base text-stone-600 leading-relaxed flex-1">
                  {c.blurb}
                </p>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-5 font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
                >
                  {c.email}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
