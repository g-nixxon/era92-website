import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PullQuote } from "@/components/ui/PullQuote";

export function FounderNote() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[5/6] w-full max-w-md mx-auto lg:mx-0 overflow-hidden bg-stone-100">
              <Image
                src="/images/placeholders/founder-portrait.svg"
                alt="Portrait of Emmanuel Mugisha, Founder & CEO of era92 Group"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <PullQuote attribution="Emmanuel Mugisha, Founder & CEO">
              &ldquo;When we see a young person in Kosovo or Bidi Bidi, we don&rsquo;t see a problem to solve.
              We see a creative director, an engineer, a founder. Our job is to remove what&rsquo;s in the way.&rdquo;
            </PullQuote>
            <div className="mt-8">
              <Link
                href="/about/founder"
                className="font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
              >
                Read his story →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
