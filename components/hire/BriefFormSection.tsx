import { Clock, ShieldCheck, Globe, Award, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { HireForm } from "@/components/forms/HireForm";

type TrustSignal = {
  icon: LucideIcon;
  text: string;
};

const TRUST_SIGNALS: TrustSignal[] = [
  { icon: Clock, text: "Average response time: under 1 business day" },
  { icon: ShieldCheck, text: "NDA available on request" },
  { icon: Globe, text: "Work delivered in English. Team based in Kampala, Uganda." },
  {
    icon: Award,
    text: "Recent clients include Northwind, Halcyon, Meridian, and Stillwater",
  },
];

export function BriefFormSection() {
  return (
    <section
      id="brief"
      className="bg-charcoal text-cream py-16 lg:py-24 scroll-mt-24"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <EyebrowLabel>Brief us</EyebrowLabel>
            <DisplayHeading
              className="mt-6 text-cream"
              regular="Tell us about"
              italic="your project."
            />
            <div className="mt-10">
              <HireForm />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <ul className="space-y-6 lg:sticky lg:top-28">
              {TRUST_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <li
                    key={signal.text}
                    className="flex items-start gap-4 border-l-2 border-orange/40 pl-4"
                  >
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange/10 text-orange shrink-0"
                      aria-hidden="true"
                    >
                      <Icon size={18} />
                    </span>
                    <p className="font-body text-cream/90 text-sm leading-relaxed pt-1">
                      {signal.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
