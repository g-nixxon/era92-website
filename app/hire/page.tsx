import type { Metadata } from "next";
import { HireHero } from "@/components/hire/HireHero";
import { CapabilitiesStrip } from "@/components/hire/CapabilitiesStrip";
import { HireProcess } from "@/components/hire/HireProcess";
import { SampleWorkStrip } from "@/components/hire/SampleWorkStrip";
import { PricingTiers } from "@/components/hire/PricingTiers";
import { BriefFormSection } from "@/components/hire/BriefFormSection";
import { FinalReassurance } from "@/components/hire/FinalReassurance";

const PAGE_TITLE = "Hire era92 Creative — Brand, Web, Video & Digital";
const PAGE_DESCRIPTION =
  "World-class creative work from a Uganda-based studio that trains, employs, and finances youth from slums. Brief us on your next project.";

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

export default function HirePage() {
  return (
    <>
      <HireHero />
      <CapabilitiesStrip />
      <HireProcess />
      <SampleWorkStrip />
      <PricingTiers />
      <BriefFormSection />
      <FinalReassurance />
    </>
  );
}
