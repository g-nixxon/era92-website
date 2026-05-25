import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function ImpactClosingCTA() {
  return (
    <section className="bg-charcoal text-cream py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <DisplayHeading
            className="text-cream"
            regular="Help us make"
            italic="more of this."
          />
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button href="/partner" variant="primary" size="lg">
              Partner with era92
            </Button>
            <Button
              href="/hire"
              variant="secondary"
              size="lg"
              className="border-cream text-cream hover:bg-cream hover:text-charcoal"
            >
              Hire era92 Creative
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
