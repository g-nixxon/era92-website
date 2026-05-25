import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { PullQuote } from "@/components/ui/PullQuote";
import { ShapeCollage } from "@/components/decorations/ShapeCollage";

export function FounderSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <ShapeCollage layout="side">
              <div className="relative aspect-[5/6] w-72 sm:w-80 lg:w-96 overflow-hidden bg-stone-100">
                <Image
                  src="/images/placeholders/founder-portrait.svg"
                  alt="Portrait of Emmanuel Mugisha, Founder & CEO of era92 Group"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ShapeCollage>
          </div>
          <div className="lg:col-span-7">
            <EyebrowLabel>Founder</EyebrowLabel>
            <DisplayHeading className="mt-6" regular="Emmanuel" italic="Mugisha." />
            {/* [swap] — Trinity will provide canonical bio + hometown. */}
            <p className="mt-6 font-body text-lg text-stone-600 leading-relaxed max-w-prose">
              Emmanuel founded era92 to do what charities couldn&rsquo;t: build economic
              infrastructure that pays for itself. He grew up in [placeholder], and now leads
              era92 Group across Uganda and into the broader region.
            </p>
            <div className="mt-8 max-w-prose">
              <PullQuote>
                &ldquo;Make the slum a starting line, not a sentence.&rdquo;
              </PullQuote>
            </div>
            <div className="mt-8">
              <Link
                href="/insights/founder-story"
                className="font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
              >
                Read his full story on Insights →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
