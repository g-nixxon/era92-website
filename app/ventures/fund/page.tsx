import type { Metadata } from "next";
import Link from "next/link";
import {
  VenturePageTemplate,
  type VentureSection,
} from "@/components/sections/VenturePageTemplate";
import { AsteriskShape } from "@/components/decorations/OutlineShapes";

const PAGE_TITLE = "era92 Fund — Licensed microfinance for graduates and entrepreneurs";
const PAGE_DESCRIPTION =
  "Patient capital for Elevate graduates and adult entrepreneurs with a strong repayment record. Open to faith-aligned investors and foundations.";

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

// ---------- Section: Who we lend to (2 borrower profiles) ----------
const BORROWERS = [
  {
    label: "Profile A",
    name: "Recent Elevate graduates",
    body: "Newly placed graduates launching their first ventures — agency contracts, small studios, freelance practices. Small first loans, often paired with mentorship from era92 Creative staff.",
  },
  {
    label: "Profile B",
    name: "Adult entrepreneurs, age 30–50",
    body: "Established small-business operators with a track record but limited access to mainstream banking. Larger working-capital loans for inventory, equipment, or hiring.",
  },
];

function BorrowerProfiles() {
  return (
    <ul className="space-y-6">
      {BORROWERS.map((b) => (
        <li key={b.name} className="bg-stone-100 border border-stone-300 rounded-lg p-6 lg:p-7">
          <p className="font-body text-xs uppercase tracking-widest text-orange">
            {b.label}
          </p>
          <h3 className="mt-2 font-display text-2xl text-charcoal leading-tight">
            {b.name}
          </h3>
          <p className="mt-3 font-body text-base text-stone-600 leading-relaxed">
            {b.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

// ---------- Section: How loans work ----------
// [swap] — Trinity / Fund team to confirm exact ranges, terms, and rates.
const LOAN_FACTS = [
  { label: "Loan range", value: "$300 – $5,000" },
  { label: "Term length", value: "6 – 24 months" },
  { label: "Interest structure", value: "Flat, disclosed upfront" },
  { label: "Collateral", value: "Group guarantee, no land deeds" },
];

function LoanFacts() {
  return (
    <div className="max-w-3xl mx-auto">
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {LOAN_FACTS.map((f) => (
          <div
            key={f.label}
            className="bg-stone-100 border border-stone-300 rounded-lg p-6"
          >
            <dt className="font-body text-xs uppercase tracking-widest text-orange">
              {f.label}
            </dt>
            <dd className="mt-2 font-display text-2xl text-charcoal leading-tight">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 font-body text-base text-stone-600 leading-relaxed text-center">
        era92 Fund is licensed microfinance under Ugandan regulation &mdash; not informal lending.
        Every loan agreement is signed, recorded, and reported.
      </p>
    </div>
  );
}

// ---------- Section: Repayment record (charcoal mid-page) ----------
function RepaymentHeadline() {
  return (
    <div className="text-center">
      <p className="font-display text-6xl md:text-7xl lg:text-8xl text-cream leading-none">
        94%
      </p>
      <p className="mt-4 font-body text-sm uppercase tracking-widest text-cream/60">
        Repayment rate, last 12 months
      </p>
      <p className="mt-8 font-body text-base lg:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto">
        Three things keep this rate high: every borrower comes through Elevate or a vetted
        community referral; loans are structured around the borrower&rsquo;s actual cash cycle;
        and community accountability does most of the underwriting we used to rely on credit
        scores for.
      </p>
    </div>
  );
}

// ---------- Section: Faith-aligned investor case ----------
function InvestorCaseCallout() {
  return (
    <div className="space-y-5 font-body text-lg text-stone-600 leading-relaxed max-w-prose">
      <p>
        We talk to investors at Praxis, SageView, and adjacent cohorts who frame this work as
        catalytic capital &mdash; capital that earns a return and changes a community at the
        same time.
      </p>
      <p>
        era92 Fund is set up to take outside investment, deploy it through the microfinance
        operation, and report results in the same language portfolio committees already use.
      </p>
      <Link
        href="/partner"
        className="inline-block mt-2 font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
      >
        Start a partnership conversation →
      </Link>
    </div>
  );
}

const SECTIONS: VentureSection[] = [
  {
    eyebrow: "Who we lend to",
    headlineRegular: "Two borrower",
    headlineItalic: "profiles.",
    body: "The Fund serves two distinct kinds of borrower. Both are underwriting the same conviction: that local entrepreneurs are the most efficient delivery mechanism for economic dignity.",
    layout: "two-col",
    children: <BorrowerProfiles />,
  },
  {
    id: "loans",
    eyebrow: "How loans work",
    headlineRegular: "Transparent",
    headlineItalic: "by design.",
    body: "We publish the structure plainly so borrowers, partners, and investors all see the same numbers.",
    layout: "centered",
    children: <LoanFacts />,
  },
  {
    background: "charcoal",
    eyebrow: "Repayment record",
    headlineRegular: "The number that",
    headlineItalic: "underwrites everything.",
    layout: "centered",
    children: <RepaymentHeadline />,
  },
  {
    eyebrow: "The investor case",
    headlineRegular: "Catalytic capital,",
    headlineItalic: "redemptive returns.",
    layout: "two-col",
    children: <InvestorCaseCallout />,
  },
];

export default function FundPage() {
  return (
    <VenturePageTemplate
      ventureName="Fund"
      role="Financing"
      iconShape={<AsteriskShape color="#FF4E00" />}
      heroHeadlineRegular="Microfinance designed for"
      heroHeadlineItalic="graduates and entrepreneurs."
      heroSubhead="era92 Fund is a licensed microfinance operation serving Elevate graduates and adult entrepreneurs (age 30–50) with a strong repayment record."
      primaryCTA={{ label: "Partner with the Fund", href: "/partner" }}
      secondaryCTA={{ label: "How loans work", href: "#loans" }}
      sections={SECTIONS}
      stats={[
        { number: "94%", label: "Repayment rate" },
        { number: "$X", label: "Capital deployed" },
        { number: "120+", label: "Active borrowers" },
        { number: "5yrs", label: "Operating history" },
      ]}
      closingCTA={{
        headline: { regular: "Invest in the", italic: "next chapter." },
        subhead:
          "era92 Fund is open to faith-aligned investors and foundations.",
        buttonLabel: "Start a conversation",
        buttonHref: "/partner",
      }}
    />
  );
}
