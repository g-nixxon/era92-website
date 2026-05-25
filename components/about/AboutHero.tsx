import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { WavyUnderline } from "@/components/ui/WavyUnderline";

export function AboutHero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <EyebrowLabel className="text-center">Who we are</EyebrowLabel>
          <div className="mt-6 inline-block">
            <DisplayHeading
              as="h1"
              size="lg"
              regular="A holding company with a set of ventures"
              italic="that create pathways from slums to enterprise."
            />
            <div className="flex justify-center">
              <WavyUnderline className="mt-3 w-40" />
            </div>
          </div>
          <p className="mt-8 font-body text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
            We built era92 Group around a simple conviction: Africa&rsquo;s youth are not a
            crisis to manage. They are the greatest economic opportunity of our generation.
          </p>
        </div>
      </Container>
    </section>
  );
}
