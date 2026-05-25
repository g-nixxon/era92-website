import type { Metadata } from "next";
import Image from "next/image";
import {
  VenturePageTemplate,
  type VentureSection,
} from "@/components/sections/VenturePageTemplate";
import {
  SparkleShape,
  AsteriskShape,
  CubeWireframe,
} from "@/components/decorations/OutlineShapes";

const PAGE_TITLE = "era92 Creative — Brand, web, video, and digital studio";
const PAGE_DESCRIPTION =
  "The revenue-generating studio inside era92 Group. We employ Elevate training graduates and deliver work for clients worldwide.";

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

// ---------- Section: What we make ----------
const CAPABILITIES = [
  {
    name: "Brand Identity",
    body: "Logos, identity systems, brand guidelines, naming. Built to scale across every surface your team owns.",
  },
  {
    name: "Web Design & Build",
    body: "Marketing sites, landing pages, design systems. Next.js by default; we hand off code your engineers can extend.",
  },
  {
    name: "Video Production",
    body: "Brand films, product launches, social cuts. Concept-to-delivery, including motion graphics and sound design.",
  },
  {
    name: "Digital Marketing",
    body: "Campaign strategy and content production. Paid social, organic, and the analytics to keep both honest.",
  },
];

function CapabilityGrid() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {CAPABILITIES.map((c) => (
        <li
          key={c.name}
          className="bg-stone-100 border border-stone-300 rounded-lg p-6 lg:p-7"
        >
          <h3 className="font-display text-xl lg:text-2xl text-charcoal leading-tight">
            {c.name}
          </h3>
          <p className="mt-3 font-body text-sm text-stone-600 leading-relaxed">
            {c.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

// ---------- Section: How we're different ----------
const DIFFERENTIATORS = [
  {
    title: "Same quality, different model.",
    body: "World-class creative delivered at competitive rates because we own our own training pipeline.",
  },
  {
    title: "Margins fund a mission.",
    body: "Every project pays a fair wage AND funds the Elevate training program. Nothing leaks to outside shareholders.",
  },
  {
    title: "You get a story to tell.",
    body: "Your CMO can talk about this work in earnings calls. Most agencies can't say that.",
  },
];

function DifferentiatorsList() {
  return (
    <ol className="space-y-8">
      {DIFFERENTIATORS.map((d, i) => (
        <li
          key={d.title}
          className="border-l-2 border-orange/40 pl-6"
        >
          <p className="font-body text-xs uppercase tracking-widest text-stone-600">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-2xl lg:text-3xl text-charcoal leading-tight">
            {d.title}
          </h3>
          <p className="mt-3 font-body text-base text-stone-600 leading-relaxed max-w-prose">
            {d.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

// ---------- Section: How we work (condensed 3-step) ----------
const STEPS = [
  {
    shape: SparkleShape,
    title: "Brief",
    body: "You share what you need; we respond inside one business day with scope and timeline.",
  },
  {
    shape: CubeWireframe,
    title: "Build",
    body: "Shared Figma, weekly check-ins, async-first. You see progress, not just deliverables.",
  },
  {
    shape: AsteriskShape,
    title: "Deliver",
    body: "Final and source files, handoff doc, two revision rounds included. No surprise invoices.",
  },
];

function HowWeWorkSteps() {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left">
      {STEPS.map((s, i) => {
        const Shape = s.shape;
        return (
          <li key={s.title}>
            <Shape color="#FF4E00" size={40} />
            <p className="mt-5 font-body text-xs uppercase tracking-widest text-stone-600">
              Step {i + 1}
            </p>
            <h3 className="mt-2 font-display text-2xl text-charcoal leading-tight">
              {s.title}
            </h3>
            <p className="mt-3 font-body text-base text-stone-600 leading-relaxed">
              {s.body}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

// ---------- Section: The team ----------
// [swap] — Real team members will replace these.
const TEAM = [
  { name: "Team Member One", role: "Creative Director", image: "/images/placeholders/team-1.svg" },
  { name: "Team Member Two", role: "Brand Designer", image: "/images/placeholders/team-2.svg" },
  { name: "Team Member Three", role: "Engineering Lead", image: "/images/placeholders/team-3.svg" },
  { name: "Team Member Four", role: "Video Producer", image: "/images/placeholders/team-4.svg" },
  { name: "Team Member Five", role: "Strategy", image: "/images/placeholders/team-5.svg" },
  { name: "Team Member Six", role: "Studio Producer", image: "/images/placeholders/team-6.svg" },
];

function TeamGrid() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 text-center">
      {TEAM.map((m) => (
        <li key={m.name}>
          <div className="relative aspect-square w-full max-w-[160px] mx-auto rounded-full overflow-hidden bg-stone-100">
            <Image
              src={m.image}
              alt={`Portrait of ${m.name}`}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
          <h3 className="mt-4 font-display text-lg text-charcoal leading-tight">
            {m.name}
          </h3>
          <p className="mt-1 font-body text-xs uppercase tracking-widest text-stone-600">
            {m.role}
          </p>
        </li>
      ))}
    </ul>
  );
}

const SECTIONS: VentureSection[] = [
  {
    eyebrow: "What we make",
    headlineRegular: "Capabilities",
    headlineItalic: "that ship.",
    body: "Four disciplines, one delivery team. You get one studio producer and one invoice no matter how many crafts the project crosses.",
    layout: "centered",
    children: <CapabilityGrid />,
  },
  {
    eyebrow: "How we're different",
    headlineRegular: "Three things you",
    headlineItalic: "won't get elsewhere.",
    body: "Most studios charge for craft. We do that too — and the margin compounds into something more durable than a quarterly bonus.",
    layout: "two-col",
    children: <DifferentiatorsList />,
  },
  {
    eyebrow: "How we work",
    headlineRegular: "Three steps from",
    headlineItalic: "brief to delivery.",
    body: "The same flow we run on every project, big or small.",
    layout: "centered",
    children: <HowWeWorkSteps />,
  },
  {
    eyebrow: "The team",
    headlineRegular: "The people you'll",
    headlineItalic: "actually work with.",
    body: "Every era92 Creative project is staffed by a small senior team — no account executives, no offshore handoffs.",
    layout: "centered",
    children: <TeamGrid />,
  },
];

export default function CreativePage() {
  return (
    <VenturePageTemplate
      ventureName="Creative"
      role="Employment"
      iconShape={<CubeWireframe color="#FF4E00" />}
      heroHeadlineRegular="A creative studio"
      heroHeadlineItalic="with a different origin story."
      heroSubhead="era92 Creative is the revenue engine of era92 Group. We employ our own training graduates and serve international clients in brand, web, video, and digital."
      primaryCTA={{ label: "Hire Us", href: "/hire" }}
      secondaryCTA={{ label: "See our work", href: "/portfolio" }}
      sections={SECTIONS}
      stats={[
        { number: "50+", label: "Active client projects" },
        { number: "12", label: "Countries served" },
        { number: "24hr", label: "Avg. response time" },
        { number: "100%", label: "Graduate employed" },
      ]}
      closingCTA={{
        headline: { regular: "Ready to", italic: "brief us?" },
        subhead:
          "Tell us about your project. We respond within one business day.",
        buttonLabel: "Start a project",
        buttonHref: "/hire",
      }}
    />
  );
}
