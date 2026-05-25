import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { StatBlock } from "@/components/ui/StatBlock";

const STATS = [
  { value: "500+", label: "Youth trained" },
  { value: "50+", label: "Graduates employed" },
  { value: "12", label: "Countries served" },
  { value: "$1M+", label: "Earned for youth" },
];

export function ImpactBar() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <EyebrowLabel>By the numbers</EyebrowLabel>
        <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <StatBlock value={stat.value} label={stat.label} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
