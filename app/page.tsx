import { Container } from "@/components/layout/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export default function HomePage() {
  return (
    <Container className="py-24">
      <DisplayHeading as="h1" regular="Foundation" italic="ready." />
      <p className="mt-6 font-body text-lg text-stone-600 max-w-prose">
        Homepage coming in batch 1.
      </p>
    </Container>
  );
}
