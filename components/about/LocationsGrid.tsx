import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

type Location = {
  name: string;
  context: string; // [swap] — verify with Trinity; written from public-domain knowledge.
};

const LOCATIONS: Location[] = [
  { name: "Kosovo", context: "Slum settlement, Kampala" },
  { name: "Katanga", context: "Slum settlement, Kampala" },
  { name: "Jinja", context: "Eastern Uganda, on Lake Victoria" },
  { name: "Namayemba", context: "Trading town, eastern Uganda" },
  { name: "Gulu", context: "Northern Uganda" },
  { name: "Bidi Bidi", context: "Refugee settlement, northwest Uganda" },
  { name: "Nakivale", context: "Refugee settlement, southwest Uganda" },
];

export function LocationsGrid() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <EyebrowLabel>Where we work</EyebrowLabel>
          <DisplayHeading
            className="mt-6"
            regular="On the ground in"
            italic="seven communities."
          />
        </div>

        <ul className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {LOCATIONS.map((loc) => (
            <li
              key={loc.name}
              className="bg-stone-100 border border-stone-300 rounded-lg p-6 lg:p-7"
            >
              <h3 className="font-display text-2xl text-charcoal leading-tight">{loc.name}</h3>
              <p className="mt-2 font-body text-sm text-stone-600 leading-relaxed">
                {loc.context}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
