import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { ShapeCollage } from "@/components/decorations/ShapeCollage";

export function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <EyebrowLabel>Creative Studio</EyebrowLabel>
            <DisplayHeading
              as="h1"
              size="lg"
              className="mt-6"
              regular="Changing stories for youth in slums, because we see them differently — not as a charity, but as a"
              italic="worthy investment."
            />
            <p className="mt-8 font-body text-lg text-stone-600 max-w-2xl leading-relaxed">
              World-class creative work, made by talented young people we trained, employ, and finance.
              Brand, web, video, digital — delivered from Uganda for clients worldwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Button href="/contact" variant="primary" size="lg">
                Hire era92 Creative
              </Button>
              <Button href="/annual-report-2024" variant="text-link">
                2024 Annual Report →
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ShapeCollage layout="hero" className="mt-4 lg:mt-0">
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]">
                <div className="absolute inset-0 rounded-full overflow-hidden bg-stone-100">
                  <Image
                    src="/images/placeholders/hero-portrait-1.svg"
                    alt="Portrait of an era92 creative team member"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 360px, 420px"
                  />
                </div>
                <div className="hidden md:block absolute -top-6 -right-10 w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-stone-100 ring-4 ring-cream">
                  <Image
                    src="/images/placeholders/hero-portrait-2.svg"
                    alt="Portrait of an era92 creative team member"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="hidden md:block absolute -bottom-8 -left-10 w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-stone-100 ring-4 ring-cream">
                  <Image
                    src="/images/placeholders/hero-portrait-3.svg"
                    alt="Portrait of an era92 creative team member"
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
              </div>
            </ShapeCollage>
          </div>
        </div>
      </Container>
    </section>
  );
}
