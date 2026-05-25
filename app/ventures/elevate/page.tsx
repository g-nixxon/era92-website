import type { Metadata } from "next";
import Image from "next/image";
import {
  VenturePageTemplate,
  type VentureSection,
} from "@/components/sections/VenturePageTemplate";
import { Button } from "@/components/ui/Button";
import {
  SparkleShape,
  CubeWireframe,
  DottedGridSquare,
  SquareLeaf,
} from "@/components/decorations/OutlineShapes";

const PAGE_TITLE = "era92 Elevate — Free creative-craft training in Uganda";
const PAGE_DESCRIPTION =
  "A six-month program in brand design, web development, video production, and digital marketing. Tuition, equipment, and mentorship covered.";

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

// ---------- Section: What you'll learn (curriculum list) ----------
const CURRICULUM = [
  {
    shape: SquareLeaf,
    name: "Brand design",
    body: "Logos, identity systems, typography, brand guidelines.",
  },
  {
    shape: CubeWireframe,
    name: "Web development",
    body: "HTML, CSS, JavaScript, modern frameworks, deploying to the open web.",
  },
  {
    shape: DottedGridSquare,
    name: "Video production",
    body: "Cinematography, editing, motion graphics, social-first cuts.",
  },
  {
    shape: SparkleShape,
    name: "Digital marketing",
    body: "Campaign strategy, content, paid social, analytics.",
  },
];

function CurriculumList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {CURRICULUM.map((c) => {
        const Shape = c.shape;
        return (
          <li
            key={c.name}
            className="bg-stone-100 border border-stone-300 rounded-lg p-6"
          >
            <Shape color="#FF4E00" size={36} />
            <h3 className="mt-4 font-display text-xl text-charcoal leading-tight">
              {c.name}
            </h3>
            <p className="mt-2 font-body text-sm text-stone-600 leading-relaxed">
              {c.body}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

// ---------- Section: Who this is for (eligibility) ----------
// [swap] — Trinity will confirm exact age range and commitment hours.
const ELIGIBILITY = [
  "Age 18–25, with priority for first-generation creative-industry candidates.",
  "Living in (or able to relocate to) one of our seven hub communities.",
  "Available full-time for the duration of the program — six months, weekdays.",
  "Committed to completing the program and engaging with the alumni network.",
];

function EligibilityList() {
  return (
    <div className="max-w-3xl mx-auto">
      <ul className="space-y-3 text-left">
        {ELIGIBILITY.map((line) => (
          <li
            key={line}
            className="flex items-start gap-3 font-body text-base lg:text-lg text-charcoal leading-relaxed"
          >
            <span className="text-orange mt-2 shrink-0" aria-hidden="true">
              •
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 font-body text-base lg:text-lg text-stone-600 leading-relaxed text-center">
        No prior experience required. We&rsquo;ve trained graduates with no laptop and no English.
        What we look for is curiosity and discipline.
      </p>
    </div>
  );
}

// ---------- Section: How the program runs (timeline) ----------
const PHASES = [
  {
    label: "Months 1–2",
    name: "Foundation",
    body: "Craft fundamentals across all four disciplines. Daily critique, weekly portfolio reviews, real briefs.",
  },
  {
    label: "Months 3–4",
    name: "Apprenticeship",
    body: "Each trainee specializes and works alongside era92 Creative staff on live client projects.",
  },
  {
    label: "Months 5–6",
    name: "Placement",
    body: "Graduates either join era92 Creative full-time or launch into the broader market with our network behind them.",
  },
];

function PhaseTimeline() {
  return (
    <ol className="relative border-l-2 border-orange/40 pl-8 space-y-10">
      {PHASES.map((p) => (
        <li key={p.name} className="relative">
          <span
            className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-orange ring-4 ring-cream"
            aria-hidden="true"
          />
          <p className="font-body text-xs uppercase tracking-widest text-stone-600">
            {p.label}
          </p>
          <h3 className="mt-1 font-display text-2xl text-charcoal leading-tight">
            {p.name}
          </h3>
          <p className="mt-3 font-body text-base text-stone-600 leading-relaxed max-w-prose">
            {p.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

// ---------- Section: Graduate outcomes ----------
// [swap] — Real graduate names + current roles will replace these.
const GRADUATES = [
  {
    image: "/images/placeholders/graduate-1.svg",
    name: "Graduate One",
    role: "Brand Designer, era92 Creative",
  },
  {
    image: "/images/placeholders/graduate-2.svg",
    name: "Graduate Two",
    role: "Independent video producer, Kampala",
  },
  {
    image: "/images/placeholders/graduate-3.svg",
    name: "Graduate Three",
    role: "Front-end engineer, regional fintech",
  },
];

function GraduateStories() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
      {GRADUATES.map((g) => (
        <li key={g.name} className="text-center">
          <div className="relative aspect-square w-48 mx-auto rounded-full overflow-hidden bg-stone-100">
            <Image
              src={g.image}
              alt={`Portrait of ${g.name}`}
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <h3 className="mt-5 font-display text-2xl text-charcoal leading-tight">
            {g.name}
          </h3>
          <p className="mt-2 font-body text-sm text-stone-600 leading-relaxed">
            {g.role}
          </p>
        </li>
      ))}
    </ul>
  );
}

// ---------- Section: Apply (charcoal mid-page) ----------
function ApplyCTAs() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
      <Button href="https://example.com/apply" variant="primary" size="lg">
        Start Application
      </Button>
      <a
        href="mailto:careers@era92.com"
        className="font-body text-cream hover:underline decoration-orange underline-offset-4 decoration-2"
      >
        Email us first →
      </a>
    </div>
  );
}

const SECTIONS: VentureSection[] = [
  {
    eyebrow: "What you'll learn",
    headlineRegular: "Four crafts.",
    headlineItalic: "One studio standard.",
    body: "Every trainee builds working fluency across all four disciplines before specializing in the second half of the program.",
    layout: "two-col",
    children: <CurriculumList />,
  },
  {
    eyebrow: "Who this is for",
    headlineRegular: "Who we're",
    headlineItalic: "looking for.",
    layout: "centered",
    children: <EligibilityList />,
  },
  {
    eyebrow: "How the program runs",
    headlineRegular: "Six months,",
    headlineItalic: "three phases.",
    body: "A clear arc from craft fundamentals to live client work to either full-time employment or your own studio.",
    layout: "two-col",
    children: <PhaseTimeline />,
  },
  {
    id: "outcomes",
    eyebrow: "Graduate outcomes",
    headlineRegular: "Where graduates",
    headlineItalic: "land.",
    body: "85% of Elevate graduates are placed in paid creative work within ninety days of completing the program.",
    layout: "centered",
    children: <GraduateStories />,
  },
  {
    id: "apply",
    background: "charcoal",
    eyebrow: "Apply",
    headlineRegular: "Start your",
    headlineItalic: "application.",
    body: "New cohorts open every quarter. Rolling review — apply when you're ready and we'll respond within one business day.",
    layout: "centered",
    children: <ApplyCTAs />,
  },
];

export default function ElevatePage() {
  return (
    <VenturePageTemplate
      ventureName="Elevate"
      role="Training"
      iconShape={<SparkleShape color="#FF4E00" />}
      heroHeadlineRegular="Free skills training for"
      heroHeadlineItalic="young people ready to build something."
      heroSubhead="A six-month program in design, coding, video, and digital marketing. We cover everything — tuition, equipment, mentorship. You bring the hunger."
      primaryCTA={{ label: "Apply Now", href: "#apply" }}
      secondaryCTA={{ label: "See the curriculum", href: "#curriculum" }}
      sections={SECTIONS}
      stats={[
        { number: "500+", label: "Graduates" },
        { number: "85%", label: "Job placement rate" },
        { number: "6mo", label: "Program length" },
        { number: "100%", label: "Free to attendees" },
      ]}
      closingCTA={{
        headline: { regular: "Apply by the", italic: "next cohort." },
        subhead:
          "New cohort every quarter. We review applications on a rolling basis.",
        buttonLabel: "Start your application",
        buttonHref: "#apply",
      }}
    />
  );
}
