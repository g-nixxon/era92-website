import { Container } from "@/components/layout/Container";
import { PullQuote } from "@/components/ui/PullQuote";

export function PartnerClosingQuote() {
  return (
    <section className="bg-charcoal text-cream py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <PullQuote className="text-cream inline-block text-left" attribution="era92 Group">
            &ldquo;Make the slum a starting line, not a sentence.&rdquo;
          </PullQuote>
        </div>
      </Container>
    </section>
  );
}
