import { Container } from "@/components/layout/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Button } from "@/components/ui/Button";

export function AboutClosingCTA() {
  return (
    <section className="bg-charcoal text-cream py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <DisplayHeading
            className="text-cream"
            regular="There's a place"
            italic="for you in this."
          />
          <p className="mt-6 font-body text-lg text-cream/80 leading-relaxed">
            Whether you hire us, partner with us, or share our story &mdash; we&rsquo;d love to
            meet you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button href="/hire" variant="primary" size="lg">
              Hire era92 Creative
            </Button>
            <Button href="/partner" variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
              Partner With Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
