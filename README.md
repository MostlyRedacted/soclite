# SocLite.ai Landing Page

A premium, dark-mode-first landing page for **SocLite.ai**, a lightweight
AI-powered security operations platform for small and mid-sized businesses.

> Turn noisy alerts into clear next steps.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- **Framer Motion** for tasteful, restrained motion

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx              Fonts, metadata, viewport
  page.tsx                Section composition
  globals.css             Design system: tokens, utilities, keyframes
  api/waitlist/route.ts   Waitlist capture endpoint (swappable storage)
components/
  sections/               Page sections (hero, features, cta, footer, …)
  visuals/                In-code product mockups (console, hero panel, …)
  ui/                     Primitives (button, logo, icons, severity tag, …)
  waitlist-form.tsx       Working form: validation + success/error states
lib/
  waitlist.ts             Client submit + validation contract
  motion.ts               Shared animation variants
  cn.ts                   className helper
```

## Design system

Defined once in `app/globals.css` via Tailwind v4 `@theme`:

- **Surfaces** deep near-black (`--color-void`) through elevated glass
- **Accents** electric royal blue and azure (restrained, no rainbow gradients)
- **Severity signals** critical / high / medium / low
- **Type** Inter (sans) + JetBrains Mono (data/terminal feel)
- **Utilities** layered grid, radial glows, glassmorphism, gradient text

## Waitlist

The form is fully functional. Submissions POST to `/api/waitlist`, which
persists to a local JSON file (`data/waitlist.json`) as a zero-config
placeholder so it works end-to-end immediately.

**To connect a real backend (e.g. Supabase):** replace the `saveEntry` /
`hasEntry` adapter functions at the top of `app/api/waitlist/route.ts`. The
request/response contract and the entire UI stay unchanged. See
`.env.example` for the relevant variables.

## Accessibility & responsiveness

- Semantic landmarks, labelled form controls, visible focus rings
- Respects `prefers-reduced-motion`
- Responsive across mobile, tablet, and desktop
