import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import "./globals.css";

// Free Google Fonts standing in for the licensed PP Hatton (display) and
// Proxima Nova (body). Swap by replacing these imports — keep the CSS variable
// names so Tailwind's fontFamily tokens don't need to change. See README.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const SITE_URL = "https://era92.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "era92 Group — Creative studio + holding company",
    template: "%s — era92 Group",
  },
  description:
    "era92 Group is a creative studio and holding company building brands, products, and ventures worth keeping.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "era92 Group",
    title: "era92 Group — Creative studio + holding company",
    description:
      "era92 Group is a creative studio and holding company building brands, products, and ventures worth keeping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "era92 Group",
    description:
      "era92 Group is a creative studio and holding company building brands, products, and ventures worth keeping.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "era92 Group",
  url: SITE_URL,
  email: "trinity@era92.com",
  sameAs: [] as string[],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "era92 Group",
  url: SITE_URL,
  email: "trinity@era92.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-cream text-charcoal font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
