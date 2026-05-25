import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LogoTrustBar } from "@/components/sections/LogoTrustBar";
import { Capabilities } from "@/components/sections/Capabilities";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TheModel } from "@/components/sections/TheModel";
import { ImpactBar } from "@/components/sections/ImpactBar";
import { FounderNote } from "@/components/sections/FounderNote";
import { FinalCTA } from "@/components/sections/FinalCTA";

const PAGE_TITLE = "era92 Creative — World-class creative work, made differently";
const PAGE_DESCRIPTION =
  "Brand, web, video, and digital from a Uganda-based creative studio that trains, employs, and finances youth from slums.";

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

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoTrustBar />
      <Capabilities />
      <SelectedWork />
      <TheModel />
      <ImpactBar />
      <FounderNote />
      <FinalCTA />
    </>
  );
}
