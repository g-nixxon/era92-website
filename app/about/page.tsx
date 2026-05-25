import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutModel } from "@/components/about/AboutModel";
import { FoundingPrinciples } from "@/components/about/FoundingPrinciples";
import { FounderSection } from "@/components/about/FounderSection";
import { LocationsGrid } from "@/components/about/LocationsGrid";
import { AboutClosingCTA } from "@/components/about/AboutClosingCTA";

const PAGE_TITLE = "About era92 Group — A holding company changing stories";
const PAGE_DESCRIPTION =
  "Four ventures, one model: train, employ, finance. Meet the team and the founding principles behind era92.";

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

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutModel />
      <FoundingPrinciples />
      <FounderSection />
      <LocationsGrid />
      <AboutClosingCTA />
    </>
  );
}
