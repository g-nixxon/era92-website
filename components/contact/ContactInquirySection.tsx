import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { ContactForm } from "@/components/forms/ContactForm";

// [swap] — Trinity to confirm the Kampala plot number and phone.
const SATELLITE_LOCATIONS = ["Kosovo", "Katanga", "Jinja", "Namayemba", "Gulu"];

export function ContactInquirySection() {
  return (
    <section id="message" className="bg-charcoal text-cream py-16 lg:py-24 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <EyebrowLabel>Send a message</EyebrowLabel>
            <DisplayHeading
              className="mt-6 text-cream"
              regular="A note to"
              italic="the team."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <EyebrowLabel>Our offices</EyebrowLabel>
            <ul className="mt-6 space-y-6">
              <li className="border-l-2 border-orange/40 pl-4">
                <h3 className="font-display text-2xl text-cream leading-tight">Kampala HQ</h3>
                <address className="not-italic mt-2 font-body text-sm text-cream/80 leading-relaxed">
                  Plot [placeholder]
                  <br />
                  Kampala, Uganda
                  <br />
                  +256 [placeholder]
                </address>
              </li>
              <li className="border-l-2 border-orange/40 pl-4">
                <h3 className="font-display text-2xl text-cream leading-tight">
                  Satellite locations
                </h3>
                <p className="mt-2 font-body text-sm text-cream/80 leading-relaxed">
                  {SATELLITE_LOCATIONS.join(", ")}
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
