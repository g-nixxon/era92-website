import { Container } from "@/components/layout/Container";
import { StatBlock } from "@/components/ui/StatBlock";

const STATS = [
  { value: "500+", label: "Youth trained" },
  { value: "50+", label: "Graduates employed" },
  { value: "12", label: "Countries served" },
  { value: "$1M+", label: "Earned for youth" },
];

export function PartnerStats() {
  return (
    <section className="bg-charcoal text-cream py-16 lg:py-24">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <StatBlock value={stat.value} label={stat.label} tone="dark" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
