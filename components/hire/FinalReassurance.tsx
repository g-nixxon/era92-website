import { Container } from "@/components/layout/Container";
import { PullQuote } from "@/components/ui/PullQuote";

export function FinalReassurance() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <PullQuote attribution="Emmanuel Mugisha, Founder & CEO">
            &ldquo;Hiring era92 means hiring people who were told their neighborhood was the end
            of their story. We disagree. Let&rsquo;s make something good together.&rdquo;
          </PullQuote>
        </div>
      </Container>
    </section>
  );
}
