import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function ImpactHero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <EyebrowLabel className="text-center">Our impact</EyebrowLabel>
          <DisplayHeading
            as="h1"
            size="lg"
            className="mt-6"
            regular="Measured in"
            italic="changed stories."
          />
          <p className="mt-8 font-body text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            We track every metric a foundation asks for. We tell every story a person trusts.
            Here&rsquo;s what that looks like in numbers and faces.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="#annual-report" variant="primary" size="lg">
              Download the 2024 Annual Report
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
