import type { Metadata } from "next";
import { PartnerHero } from "@/components/partner/PartnerHero";
import { PartnerTracks } from "@/components/partner/PartnerTracks";
import { WhyThisWhyNow } from "@/components/partner/WhyThisWhyNow";
import { PartnerStats } from "@/components/partner/PartnerStats";
import { PartnerInquirySection } from "@/components/partner/PartnerInquirySection";
import { PartnerClosingQuote } from "@/components/partner/PartnerClosingQuote";

const PAGE_TITLE =
  "Partner with era92 — Redeeming the economic future of Africa's overlooked youth";
const PAGE_DESCRIPTION =
  "Invest, grant, or practice your craft alongside era92 Group. Faith-aligned partnerships in Uganda.";

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

export default function PartnerPage() {
  return (
    <>
      <PartnerHero />
      <PartnerTracks />
      <WhyThisWhyNow />
      <PartnerStats />
      <PartnerInquirySection />
      <PartnerClosingQuote />
    </>
  );
}
