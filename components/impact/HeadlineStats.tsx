import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { StatBlock } from "@/components/ui/StatBlock";

// [swap] — confirm exact numbers with Trinity quarterly.
const STATS = [
  { value: "500+", label: "Youth trained" },
  { value: "50+", label: "Graduates employed" },
  { value: "12", label: "Countries served" },
  { value: "$1M+", label: "Earned for youth" },
  { value: "25,000+", label: "Hours of training delivered" },
  { value: "7", label: "Hub locations" },
];

export function HeadlineStats() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <EyebrowLabel>By the numbers</EyebrowLabel>
        <ul className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {STATS.map((s) => (
            <li key={s.label}>
              <StatBlock value={s.value} label={s.label} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
