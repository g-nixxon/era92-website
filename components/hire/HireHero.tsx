import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { WavyUnderline } from "@/components/ui/WavyUnderline";
import { Button } from "@/components/ui/Button";

export function HireHero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <EyebrowLabel className="text-center">Hire era92 Creative</EyebrowLabel>
          <div className="mt-6 inline-block">
            <DisplayHeading
              as="h1"
              size="lg"
              regular="World-class creative work with a"
              italic="story your team will want to tell."
            />
            <div className="flex justify-center">
              <WavyUnderline className="mt-3 w-40" />
            </div>
          </div>
          <p className="mt-8 font-body text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Brand, web, video, and digital &mdash; delivered by talented young people we trained,
            employ, and finance. Same quality you&rsquo;d expect from a top-tier studio. Different
            impact.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-6">
            <Button href="#brief" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button href="/portfolio" variant="text-link">
              See our work →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
