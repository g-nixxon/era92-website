import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function PartnerHero() {
  return (
    <section className="bg-charcoal text-cream py-20 lg:py-28">
      <Container>
        <div className="max-w-4xl">
          <EyebrowLabel>Partner with us</EyebrowLabel>
          <DisplayHeading
            as="h1"
            size="lg"
            className="mt-6 text-cream"
            regular="Redeeming the economic future of"
            italic="Africa's overlooked youth."
          />
          <p className="mt-8 font-body text-lg text-cream/80 leading-relaxed max-w-3xl">
            Through an integrated train-employ-finance model. We&rsquo;re building this with
            faith-aligned investors, foundations, and practitioners who believe the gospel and
            the economy belong in the same sentence.
          </p>
        </div>
      </Container>
    </section>
  );
}
