import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function ContactHero() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <EyebrowLabel className="text-center">Get in touch</EyebrowLabel>
          <DisplayHeading
            as="h1"
            className="mt-6"
            regular="We read every"
            italic="message."
          />
          <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed">
            For project inquiries, please use{" "}
            <a href="/hire" className="underline decoration-orange underline-offset-4 decoration-2">
              Hire Us
            </a>
            . For partnerships, please use{" "}
            <a href="/partner" className="underline decoration-orange underline-offset-4 decoration-2">
              Partner With Us
            </a>
            . For everything else &mdash; we&rsquo;re here.
          </p>
        </div>
      </Container>
    </section>
  );
}
