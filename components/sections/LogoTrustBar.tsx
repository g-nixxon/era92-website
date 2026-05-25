import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const CLIENTS = [
  "Northwind",
  "Halcyon",
  "Meridian",
  "Stillwater",
  "Vantage Co.",
  "Foundry42",
];

export function LogoTrustBar() {
  return (
    <section className="border-y border-stone-300 py-10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <EyebrowLabel className="shrink-0">Trusted by</EyebrowLabel>
          <ul className="flex-1 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            {CLIENTS.map((name) => (
              <li
                key={name}
                className="font-display text-xl text-charcoal opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
