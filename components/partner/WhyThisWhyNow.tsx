import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { ShapeCollage } from "@/components/decorations/ShapeCollage";

export function WhyThisWhyNow() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <EyebrowLabel>The case</EyebrowLabel>
            <DisplayHeading
              className="mt-6"
              regular="The slum as"
              italic="a starting line."
            />
            <div className="mt-8 space-y-5 font-body text-lg text-stone-600 leading-relaxed max-w-prose">
              <p>
                Africa&rsquo;s population is the youngest in the world. By 2050, one in four
                humans will be African. The dominant frame treats this as a crisis. We disagree.
              </p>
              <p>
                era92 is built on five convictions: youth are assets; employment is dignity;
                charity is seed capital; poverty is solved locally first; we build systems, not
                campaigns.
              </p>
              <p>
                If you share those convictions &mdash; or want to &mdash; there&rsquo;s a place
                for you in this.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ShapeCollage layout="side">
              <div className="relative aspect-[5/6] w-72 sm:w-80 lg:w-96 overflow-hidden bg-stone-100">
                <Image
                  src="/images/placeholders/beneficiary-collage.svg"
                  alt="Portraits of era92 beneficiaries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ShapeCollage>
          </div>
        </div>
      </Container>
    </section>
  );
}
