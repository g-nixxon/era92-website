import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoGrid } from "@/components/contact/ContactInfoGrid";
import { ContactInquirySection } from "@/components/contact/ContactInquirySection";

const PAGE_TITLE = "Contact era92 Group";
const PAGE_DESCRIPTION =
  "Get in touch with era92 Group. General inquiries, press, and careers.";

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

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoGrid />
      <ContactInquirySection />
    </>
  );
}
