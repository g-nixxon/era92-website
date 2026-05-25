import type { Metadata } from "next";
import { ImpactHero } from "@/components/impact/ImpactHero";
import { AnnualReportGate } from "@/components/impact/AnnualReportGate";
import { HeadlineStats } from "@/components/impact/HeadlineStats";
import { TheoryOfChange } from "@/components/impact/TheoryOfChange";
import { BeneficiaryStories } from "@/components/impact/BeneficiaryStories";
import { ImpactClosingCTA } from "@/components/impact/ImpactClosingCTA";

const PAGE_TITLE = "Impact — Measured in changed stories";
const PAGE_DESCRIPTION =
  "Every metric a foundation asks for. Every story a person trusts. The era92 Group annual report and the model behind the numbers.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <AnnualReportGate />
      <HeadlineStats />
      <TheoryOfChange />
      <BeneficiaryStories />
      <ImpactClosingCTA />
    </>
  );
}
