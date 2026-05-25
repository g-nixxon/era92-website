import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { AnnualReportForm } from "@/components/forms/AnnualReportForm";

export function AnnualReportGate() {
  return (
    <section
      id="annual-report"
      className="bg-charcoal text-cream py-16 lg:py-20 scroll-mt-24"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <EyebrowLabel>2024 Annual Report</EyebrowLabel>
            <DisplayHeading
              className="mt-6 text-cream"
              regular="A year of"
              italic="building."
            />
            <p className="mt-6 font-body text-lg text-cream/80 leading-relaxed max-w-prose">
              The 2024 report covers the year we crossed two thresholds: era92 Creative
              reached the revenue level needed to fund a full Elevate cohort from operations,
              and the Fund passed the five-year mark with a 94% repayment rate. Inside:
              audited financials, the model in plain language, and the stories of the
              graduates whose work pushed both numbers across the line.
            </p>
          </div>
          <div className="lg:col-span-6">
            <AnnualReportForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
