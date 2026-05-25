import { Container } from "@/components/layout/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-charcoal text-cream py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <DisplayHeading
            className="text-cream"
            regular="Let's make work"
            italic="that matters."
          />
          <p className="mt-6 font-body text-lg text-cream/80 leading-relaxed">
            Brief us on your next project. We&rsquo;ll respond within one business day.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Hire era92 Creative
            </Button>
          </div>
          <p className="mt-6 font-body text-sm text-cream/60">
            Or email{" "}
            <a href="mailto:trinity@era92.com" className="underline decoration-orange underline-offset-4 decoration-2">
              trinity@era92.com
            </a>{" "}
            directly.
          </p>
        </div>
      </Container>
    </section>
  );
}
