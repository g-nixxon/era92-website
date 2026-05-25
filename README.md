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
  page.tsx            placeholder home — replaced in batch 1
  globals.css         tailwind directives + base resets
components/
  layout/             Header, Footer, MobileStickyCTA, Container
  ui/                 Button, EyebrowLabel, DisplayHeading,
                      WavyUnderline, PullQuote, StatBlock
  decorations/        OutlineShapes (8 named SVGs), ShapeCollage
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
