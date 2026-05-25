import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { PartnerForm } from "@/components/forms/PartnerForm";

export function PartnerInquirySection() {
  return (
    <section id="inquiry" className="py-16 lg:py-24 scroll-mt-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <EyebrowLabel className="text-center">Tell us about you</EyebrowLabel>
            <DisplayHeading
              className="mt-6"
              regular="Start the"
              italic="conversation."
            />
          </div>
          <div className="mt-10 lg:mt-12">
            <PartnerForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
