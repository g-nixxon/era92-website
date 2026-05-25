import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import {
  SparkleShape,
  AsteriskShape,
  CubeWireframe,
} from "@/components/decorations/OutlineShapes";

type Track = {
  shape: (props: { color?: string; size?: number; className?: string }) => JSX.Element;
  number: string;
  name: string;
  body: string;
};

const TRACKS: Track[] = [
  {
    shape: SparkleShape,
    number: "Track 1",
    name: "Invest",
    body: "Catalytic capital for era92 Creative and era92 Fund. Faith-aligned investors at Praxis, SageView, and similar cohorts. Returns include both financial and redemptive.",
  },
  {
    shape: AsteriskShape,
    number: "Track 2",
    name: "Grant",
    body: "Foundation and donor support for era92 Elevate (training) and era92 Hub (infrastructure). Charity as seed capital for systems that sustain themselves.",
  },
  {
    shape: CubeWireframe,
    number: "Track 3",
    name: "Practitioner",
    body: "Volunteer your craft — design, finance, theology, operations. Short-term residencies and long-term advising.",
  },
];

export function PartnerTracks() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>Ways to partner</EyebrowLabel>
          <DisplayHeading className="mt-6" regular="Three" italic="tracks." />
        </div>

        <ol className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {TRACKS.map((t) => {
            const Shape = t.shape;
            return (
              <li
                key={t.name}
                className="bg-stone-100 border border-stone-300 rounded-lg p-7 lg:p-8 flex flex-col"
              >
                <Shape color="#FF4E00" size={40} />
                <p className="mt-5 font-body text-xs uppercase tracking-widest text-stone-600">
                  {t.number}
                </p>
                <h3 className="mt-2 font-display text-3xl text-charcoal leading-tight">
                  {t.name}
                </h3>
                <p className="mt-4 font-body text-base text-stone-600 leading-relaxed flex-1">
                  {t.body}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
