import { Container } from "@/components/layout/Container";

const CAPABILITIES = ["Brand", "Web", "Video", "Digital"];

export function CapabilitiesStrip() {
  return (
    <section className="bg-charcoal text-cream py-16">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-3 font-display text-2xl sm:text-3xl lg:text-4xl">
          {CAPABILITIES.map((cap, i) => (
            <li key={cap} className="flex items-center gap-3 sm:gap-6">
              <span>{cap}</span>
              {i < CAPABILITIES.length - 1 && (
                <span className="text-orange" aria-hidden="true">
                  &middot;
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center font-body text-sm sm:text-base text-cream/60 max-w-2xl mx-auto leading-relaxed">
          Full-service creative studio. One team, one timezone-friendly workflow, one invoice.
        </p>
      </Container>
    </section>
  );
}
