# AGENTS.md — Motion-U Club Official Website

## Build / Test / Lint

```bash
npm install          # install dependencies
npm run dev          # start dev server (default port 3000)
npm run build        # production build
npm run start        # start production server
npm run lint         # ESLint
npx tsc --noEmit     # TypeScript type-check
```

Bun is also supported (`bun install` / `bun run dev`) but may not be in PATH on Windows.

---

## Architecture

**Next.js 14 App Router** — a university tech club landing page (IIUM, Malaysia) with CMS-backed news.

```
app/
├── layout.tsx              # Root layout: ThemeProvider, Header, Footer, mesh-bg
├── page.tsx                # Home: Hero, Activities, Projects, Perks, CTA, Collaborators
├── globals.css             # Tailwind directives + base element styles
├── design-tokens.css       # CSS custom properties for dark/light themes (imported in layout.tsx)
├── about/page.tsx          # Static about page with org chart
├── contact/page.tsx        # Contact info from site-config
├── news/
│   ├── page.tsx            # News listing (fetches from Contentful CMS)
│   └── [slug]/page.tsx     # News detail (Contentful rich-text rendering)
└── components/
    ├── Header.tsx           # Sticky nav with mobile menu + ThemeToggle
    ├── HeroText.tsx         # Hero section (static, uses site-config)
    ├── ActivityCard.tsx     # Activity grid card
    ├── ProjectPostCard.tsx  # Project card with thumbnail + link
    ├── MembershipPerkCard.tsx
    ├── BlogPostCard.tsx     # News article card
    ├── CollaboratorLogo.tsx # Collaborator image with grayscale hover
    ├── CtaBanner.tsx        # Call-to-action banner
    ├── footer-new.tsx       # Footer with social links
    ├── ScrollReveal.tsx     # IntersectionObserver-based scroll animation wrapper
    ├── ThemeProvider.tsx    # Dark/light theme context + localStorage persistence
    ├── ThemeToggle.tsx      # Theme toggle button (emojis)
    └── material.tsx         # DEAD CODE — re-exports Dialog from @material-tailwind, unused
```

### Data flow

- **Static data** lives in `data/` (`activities.ts`, `perks.ts`, `collaborators.ts`, `site-config.ts`) — imported with `@/data/` alias.
- **CMS data** (Contentful) is fetched server-side in news pages. Each page has its own inline `getClient()` function — `external/contentful.ts` exists but is NOT imported by the current pages.
- **Theming** flows: `design-tokens.css` → CSS variables → Tailwind `theme.extend.colors` → utility classes. Theme state is managed by `ThemeProvider` (React context) and persisted to `localStorage`.

---

## Key Files & Directories

| Path | Purpose |
|---|---|
| `tailwind.config.js` | Custom colors (`brand`, `surface`, `content`, `outline`), fonts, radii, shadows — all mapped to CSS variables |
| `postcss.config.js` | Tailwind + Autoprefixer only — **no `postcss-import`** |
| `tsconfig.json` | Strict mode, `@/*` path alias, Next.js plugin |
| `next.config.mjs` | Remote image patterns for `images.ctfassets.net`, 1s static page timeout |
| `app/design-tokens.css` | All CSS custom properties for dark + light themes, mesh background, animations, scroll reveal |
| `app/globals.css` | Tailwind directives + body/link/scrollbar base styles |
| `data/` | Typed static data (activities, perks, collaborators, site config, shared types) |
| `external/contentful.ts` | Contentful client factory + `fetchProjects()` — **not currently imported by pages** |
| `public/images/` | All static images (logos, project thumbnails, org chart) |
| `design.md` | Full design specification document (v2 redesign) |
| `motion-u-redesign.html` | Pure HTML mockup of the redesign (1132 lines) — design reference only |

---

## Coding Conventions

- **"use client"** boundaries: `Header`, `ThemeProvider`, `ThemeToggle`, `ScrollReveal`, `material` are client components. Pages and `CtaBanner`, `HeroText` are server components.
- **Props**: Components define inline `interface Props {}` rather than importing from `data/types.ts`.
- **Styling**: Inline `style={{}}` for dynamic token-backed values (gradients, shadows). Tailwind classes for layout, spacing, typography.
- **Icons**: `react-icons/fa` (Font Awesome 5) and `react-icons/fa6` for `FaPeopleGroup`.
- **Images**: `next/image` for optimized images. Contentful images use `https:` prefix prepended in the component.

---

## Git Workflow

- **Branch**: `new-landing-page` (active redesign branch — diverged from main)
- **Remote**: `https://github.com/Motion-U/motionu-official-website.git`
- **Commit style**: lowercase, imperative ("remove alert", "update: year", "add: simplified imaalum")
- **Current state**: All JSX→TSX migration changes are unstaged working-directory changes. Old `.jsx` files deleted from disk but not staged. New `.tsx` files untracked. Config files modified.

---

## Tips for AI Agents

### Critical CSS gotcha
`postcss.config.js` has **no `postcss-import` plugin**. The `@import` directive in CSS files is NOT inlined by PostCSS — it's left as-is in output. CSS spec requires `@import` before all other rules, so placing it after `@tailwind` directives means browsers silently ignore it. **Always import `design-tokens.css` directly in `layout.tsx`**, before `globals.css`:

```tsx
import "./design-tokens.css";   // MUST come first
import "./globals.css";
```

### Theme system
- CSS variables defined in `design-tokens.css` use `:root` / `[data-theme="dark"]` / `[data-theme="light"]` selectors.
- The `data-theme` attribute lives on the `<html>` element (set in `layout.tsx` + updated by `ThemeProvider`).
- Tailwind classes like `bg-surface-card`, `text-content-primary` resolve to these variables. If tokens are missing, everything renders invisible (white screen).

### Dead code
- `app/components/material.tsx` is orphaned — not imported anywhere. Can be safely deleted.
- `data/types.ts` interfaces don't match actual component props (components define their own inline interfaces). Sync or remove.

### Contentful CMS
- News pages handle missing env vars (`SPACE`, `ACCESS_TOKEN`) gracefully — return empty arrays / null documents.
- No `.env` file committed (gitignored). Add `.env.local` with `SPACE=` and `ACCESS_TOKEN=` for local CMS integration.

### Build vs runtime
- `tsc --noEmit` and `next build` may both pass while the site returns 500 at runtime. The most common cause is missing CSS variables (see above) or a server component rendering error. Check the terminal running `next dev` for the actual error stack trace.
