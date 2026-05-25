import type { Metadata } from "next";
import {
  VenturePageTemplate,
  type VentureSection,
} from "@/components/sections/VenturePageTemplate";
import {
  CircleOutline,
  SparkleShape,
  CubeWireframe,
  AsteriskShape,
  DottedGridSquare,
} from "@/components/decorations/OutlineShapes";

const PAGE_TITLE = "era92 Hub — Physical infrastructure across seven communities";
const PAGE_DESCRIPTION =
  "Co-working, training space, and incubation hubs across urban Kampala, regional Uganda, and two refugee settlements. The ground floor of the era92 model.";

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

// ---------- Section: What happens at a Hub ----------
const ACTIVITIES = [
  {
    shape: SparkleShape,
    name: "Training cohorts",
    body: "Elevate's six-month program runs out of the Hubs. Classrooms, studio space, and the gear graduates need to build a portfolio.",
  },
  {
    shape: CubeWireframe,
    name: "Co-working for graduates",
    body: "Recent graduates use Hub space to take on their first independent work. Stable internet, quiet rooms, and proximity to a peer community.",
  },
  {
    shape: DottedGridSquare,
    name: "Community events",
    body: "Talks, exhibitions, and screenings open to the wider neighborhood. The Hub is a physical anchor in places that don't have one.",
  },
  {
    shape: AsteriskShape,
    name: "Partner residencies",
    body: "Visiting designers, engineers, theologians, and operators stay for a week to a month. Practitioners give their craft; the Hub gives them a seat at the table.",
  },
];

function ActivityGrid() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {ACTIVITIES.map((a) => {
        const Shape = a.shape;
        return (
          <li
            key={a.name}
            className="bg-stone-100 border border-stone-300 rounded-lg p-6 lg:p-7"
          >
            <Shape color="#FF4E00" size={36} />
            <h3 className="mt-5 font-display text-xl lg:text-2xl text-charcoal leading-tight">
              {a.name}
            </h3>
            <p className="mt-3 font-body text-sm text-stone-600 leading-relaxed">
              {a.body}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

// ---------- Section: Where the Hubs are ----------
// [swap] — Trinity to confirm exact infrastructure status per location.
type HubType = "Urban" | "Rural" | "Refugee";
type HubLocation = { name: string; type: HubType; note: string };

const HUBS: HubLocation[] = [
  { name: "Kosovo", type: "Urban", note: "Founding Hub. Training rooms, studio space, and a small event venue inside the Kampala slum settlement." },
  { name: "Katanga", type: "Urban", note: "Co-working and small-business incubation for graduates working with local trade networks." },
  { name: "Jinja", type: "Urban", note: "Regional Hub serving eastern Uganda. Anchors training cohorts pulled from the Lake Victoria belt." },
  { name: "Namayemba", type: "Rural", note: "Rural Hub focused on adult-entrepreneur lending and agricultural-adjacent businesses." },
  { name: "Gulu", type: "Urban", note: "Northern Uganda Hub. Bridges training and microfinance for post-conflict economic recovery." },
  { name: "Bidi Bidi", type: "Refugee", note: "Inside one of the world's largest refugee settlements. Training cohorts serve refugee and host populations together." },
  { name: "Nakivale", type: "Refugee", note: "Long-term refugee settlement in southwest Uganda. Smaller cohorts, deeper community ties." },
];

const TYPE_BADGE: Record<HubType, string> = {
  Urban: "bg-charcoal text-cream",
  Rural: "bg-stone-300 text-charcoal",
  Refugee: "bg-orange text-cream",
};

function HubLocationGrid() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {HUBS.map((h) => (
        <li
          key={h.name}
          className="bg-stone-100 border border-stone-300 rounded-lg p-6 lg:p-7"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl text-charcoal leading-tight">
              {h.name}
            </h3>
            <span
              className={`text-xs font-body font-medium uppercase tracking-widest rounded-full px-2.5 py-1 shrink-0 ${TYPE_BADGE[h.type]}`}
            >
              {h.type}
            </span>
          </div>
          <p className="mt-3 font-body text-sm text-stone-600 leading-relaxed">
            {h.note}
          </p>
        </li>
      ))}
    </ul>
  );
}

// ---------- Section: How it's funded ----------
function FundingExplainer() {
  return (
    <div className="space-y-5 font-body text-lg text-stone-600 leading-relaxed max-w-prose">
      <p>
        Hub buildout &mdash; the physical space itself, the equipment, the broadband &mdash; is
        grant-funded. This is the &ldquo;charity as seed capital&rdquo; pillar at work: a one-time
        donation creates a piece of infrastructure that compounds for decades.
      </p>
      <p>
        Day-to-day operations run on a mix of revenue: training fees paid by corporate partners
        sponsoring cohort seats, residency contributions from visiting practitioners, and a
        revenue share from the local ventures that incubate inside the Hub.
      </p>
      <p>
        Once a Hub is built, it&rsquo;s designed to never need another buildout grant.
      </p>
    </div>
  );
}

const SECTIONS: VentureSection[] = [
  {
    eyebrow: "What happens here",
    headlineRegular: "Four uses,",
    headlineItalic: "one address.",
    body: "Every Hub does the same four jobs, sized to the community it sits in.",
    layout: "centered",
    children: <ActivityGrid />,
  },
  {
    id: "locations",
    eyebrow: "Where the Hubs are",
    headlineRegular: "Seven communities,",
    headlineItalic: "three contexts.",
    body: "Urban slum settlements, regional trading towns, and refugee communities. Different physical needs; the same Hub playbook adapts to each.",
    layout: "centered",
    children: <HubLocationGrid />,
  },
  {
    eyebrow: "How it's funded",
    headlineRegular: "Built with grants.",
    headlineItalic: "Sustained by revenue.",
    layout: "two-col",
    children: <FundingExplainer />,
  },
];

export default function HubPage() {
  return (
    <VenturePageTemplate
      ventureName="Hub"
      role="Infrastructure"
      iconShape={<CircleOutline color="#FF4E00" />}
      heroHeadlineRegular="Physical infrastructure where"
      heroHeadlineItalic="the work actually happens."
      heroSubhead="Co-working, training space, and incubation hubs across seven Ugandan communities. Where every other era92 venture meets the ground."
      primaryCTA={{ label: "Visit a Hub", href: "#locations" }}
      secondaryCTA={{ label: "Partner with us", href: "/partner" }}
      sections={SECTIONS}
      stats={[
        { number: "7", label: "Active Hubs" },
        { number: "2", label: "Refugee settlements" },
        { number: "1,200+", label: "Community members served" },
      ]}
      closingCTA={{
        headline: { regular: "Help us", italic: "open more." },
        subhead:
          "New Hubs require grant funding for buildout and equipment. Partner with us to scale this.",
        buttonLabel: "Partner with era92",
        buttonHref: "/partner",
      }}
    />
  );
}
