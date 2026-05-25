# era92 Group — Website

Next.js 14 (App Router) + TypeScript + Tailwind. This is the **foundation batch**: design system, base components, and the root layout. Pages land in later batches.

## Setup

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm run start  # serve the production build
npm run lint   # eslint
```

Deployment target: Vercel (zero-config — push the repo and import it).

## Project layout

```
app/
  layout.tsx          root layout, fonts, JSON-LD, metadata defaults
  page.tsx            homepage
  globals.css         tailwind directives + base resets
  about/              About page
  contact/            Contact + form
  hire/               Primary conversion page + brief form
  partner/            Partnership inquiries
  portfolio/          Index + dynamic case studies ([slug])
  ventures/           Index + 4 venture sub-pages
  api/
    lead/             POST handler for all three lead forms
    og/               OG image generator (used by every metadata)
    sitemap.xml/      route handler emitting the sitemap
content/
  case-studies/       MDX case studies (see "How to add a case study")
components/
  layout/             Header, Footer, MobileStickyCTA, Container
  ui/                 Button, EyebrowLabel, DisplayHeading,
                      WavyUnderline, PullQuote, StatBlock,
                      LightboxGallery
  decorations/        OutlineShapes (8 named SVGs), ShapeCollage
  sections/           Shared section components (CaseStudyCard,
                      CaseStudyHeader, VenturePageTemplate, etc.)
  forms/              HireForm, ContactForm, PartnerForm
  about/, contact/,
  hire/, partner/     Page-scoped section components
mdx-components.tsx    HTML→era92 mapping for any MDX body
lib/
  lead-schema.ts      Shared Zod schema for all three forms
  case-studies.ts     File reader for /content/case-studies
tailwind.config.ts    brand tokens + font families
```

## Brand color guide

Tokens live in `tailwind.config.ts` under `theme.extend.colors`.

| Token         | Hex       | Use                                         |
| ------------- | --------- | ------------------------------------------- |
| `charcoal`    | `#1F2027` | Primary text, dark sections                 |
| `cream`       | `#FAF6ED` | Page background, light sections             |
| `orange`      | `#FF4E00` | Accent only — see usage rules below         |
| `teal`        | `#0092B4` | Secondary accent, use sparingly             |
| `stone-100`   | `#F5F0E5` | Subtle dividers, card backgrounds           |
| `stone-300`   | `#D6D1C2` | Borders                                     |
| `stone-600`   | `#6B6660` | Muted text, captions                        |

Use: `bg-charcoal`, `text-cream`, `border-stone-300`, etc.

## Orange usage rules (CRITICAL)

Orange is reserved for the following surfaces. **Treat this list as exhaustive — anything else needs a deliberate decision.**

**Allowed:**
- Primary CTA buttons (Hire Us, Partner With Us)
- Section eyebrow labels (uppercase, tracking-widest)
- The wavy underline SVG motif under display headings
- Outline geometric shape decorations (one or two per collage, not all)
- Stat highlight numbers' wavy underline accent
- Small bullet markers and link hover underlines

**Forbidden:**
- Large body headings
- Full section backgrounds
- Big icon fills
- Anywhere it would feel loud

These rules are also called out in component file comments where orange is applied.

## Fonts

Currently using free Google Fonts as fallbacks for the licensed faces:

| Role     | Currently           | Will become      | CSS variable        |
| -------- | ------------------- | ---------------- | ------------------- |
| display  | Fraunces            | PP Hatton        | `--font-fraunces`*  |
| body     | Plus Jakarta Sans   | Proxima Nova     | `--font-jakarta`*   |

*The CSS variable names will stay even after the swap, so `tailwind.config.ts` and component classes (`font-display`, `font-body`) won't need to change.

### Swapping to PP Hatton + Proxima Nova later

1. Drop the licensed font files into `app/fonts/` (or wherever your license permits hosting them).
2. In `app/layout.tsx`, replace the `next/font/google` imports with `next/font/local`:
   ```ts
   import localFont from "next/font/local";
   const display = localFont({
     src: [{ path: "./fonts/PPHatton-Regular.woff2", weight: "400" }],
     variable: "--font-fraunces", // keep this name OR rename and update tailwind.config.ts
   });
   ```
3. Update the `variable` names if you renamed them — they're referenced in `tailwind.config.ts` under `theme.extend.fontFamily`.
4. Remove the Google Font imports.

## Conventions

- Components are colocated by domain (`layout/`, `ui/`, `decorations/`).
- Default exports are avoided — named exports keep refactors honest.
- Client components are marked with `"use client"` only when they need browser APIs or state (Header mobile menu, MobileStickyCTA scroll).
- Imports use the `@/*` alias (configured in `tsconfig.json`).

## How to add a case study

Case studies live as MDX files in `content/case-studies/`. The portfolio index and the `/portfolio/[slug]` detail page both read this folder automatically — adding a new `.mdx` file is the only step required.

### 1. Create the file

```
content/case-studies/<slug>.mdx
```

The `<slug>` you choose becomes the URL: `/portfolio/<slug>`. Use lowercase + dashes (e.g. `northwind-rebrand`).

### 2. Frontmatter (all fields required unless noted)

```mdx
---
title: "Northwind Rebrand"
italicWord: "Rebrand"         # word(s) inside `title` that render italic
client: "Northwind Outfitters"
category: "brand"             # one of: brand | web | video | digital
year: 2025
role: "Brand identity & art direction"
hero: "/images/case-studies/northwind-rebrand/hero.jpg"
brief: "One paragraph. Goes in the metadata description AND the on-page Brief block."
outcome: "One paragraph. Renders in the on-page Outcome block."
gallery:                      # optional; renders the lightbox gallery
  - "/images/case-studies/northwind-rebrand/1.jpg"
  - "/images/case-studies/northwind-rebrand/2.jpg"
---
```

Validation runs at build time — a missing or misspelled field stops the build with a clear error.

### 3. Body

Write the case-study body in MDX below the frontmatter. The era92 design system is wired up via `mdx-components.tsx`, so plain Markdown produces on-brand output:

- `## Heading` → `DisplayHeading` (display serif, italic-friendly)
- `> Quote` → `PullQuote` with the orange left rail
- `- list item` → bulleted list with orange bullets
- `**bold**`, `*italic*`, links — all styled to brand
- HTML/JSX components — drop in `<Container>` or any era92 component directly if you need it

See `content/case-studies/sample-brand.mdx` and `content/case-studies/sample-web.mdx` for working references.

### 4. Images

Put images for the case study at `/public/images/case-studies/<slug>/`. Reference them from frontmatter with `/images/case-studies/<slug>/<file>`. Hero is rendered at 16:9, gallery thumbs at 4:3. SVG placeholders work for development; swap to JPG/WebP for production.

### 5. Ship it

```bash
npm run build    # validates frontmatter, pre-renders the new /portfolio/<slug> page
git add content/case-studies/<slug>.mdx public/images/case-studies/<slug>/
git commit -m "Case study: <Slug Name>"
git push         # Vercel auto-deploys
```

The new study appears on the `/portfolio` index immediately and is added to `/sitemap.xml` automatically.
