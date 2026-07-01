# Contributing to Motion-U Club Official Website

Thanks for your interest in contributing to Motion-U's website! This document covers everything you need to get started — from local setup to submitting a pull request.

## Table of Contents

- [Quick Start](#quick-start)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Coding Conventions](#coding-conventions)
- [CSS Gotchas](#css-gotchas)
- [Git Workflow](#git-workflow)
- [Pull Request Process](#pull-request-process)
- [Managing News via Keystatic](#managing-news-via-keystatic)
- [Working with Data](#working-with-data)
- [Build Verification](#build-verification)
- [Reporting Issues](#reporting-issues)

## Quick Start

```bash
# Clone the repo
git clone https://github.com/Motion-U/motionu-official-website.git
cd motionu-official-website

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build
npm run build

# Type-check
npx tsc --noEmit

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Windows users:** Bun may not be in PATH. npm is the recommended package manager.

## Architecture Overview

This is a **Next.js 14 App Router** project — a university tech club landing page for IIUM's Motion-U Club.

- **Server components by default** — pages and most sections are server-rendered. Only interactive pieces (Header, ThemeToggle, AthenaChatbot, ScrollReveal) use `"use client"`.
- **Data comes from two sources:**
  - **Static JSON files** in `data/` — site config, activities, projects, collaborators, perks, navigation. Imported directly into server components.
  - **Keystatic CMS** for news articles — stored as MDX files in `content/news/`, managed through the `/keystatic` dashboard.
- **Theming** uses CSS custom properties in `app/design-tokens.css`. Tailwind utility classes reference these variables. Theme state is managed by `ThemeProvider` (React context) and persisted to `localStorage`. No CSS is duplicated between themes — only token values change.

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout — ThemeProvider, Analytics, ShellWrapper
│   ├── page.tsx                # Home page — hero, activities, projects, perks, CTA, collaborators
│   ├── design-tokens.css       # CSS custom properties for dark/light themes
│   ├── globals.css             # Tailwind directives + base element styles
│   ├── about/page.tsx          # About page with org chart
│   ├── contact/page.tsx        # Contact info from site-config
│   ├── news/
│   │   ├── page.tsx            # News listing (from Keystatic)
│   │   └── [slug]/page.tsx     # News detail with MDX rendering
│   ├── projects/page.tsx       # All projects listing
│   ├── api/ask/athena/         # Athena chatbot API route
│   ├── keystatic/              # Keystatic CMS admin dashboard
│   └── components/
│       ├── Header.tsx           # Sticky nav with mobile menu + ThemeToggle
│       ├── ShellWrapper.tsx     # Conditionally renders shell (excludes for /keystatic)
│       ├── footer-new.tsx       # Footer with social links
│       ├── HeroText.tsx         # Hero section (static, uses site-config)
│       ├── ActivityCard.tsx     # Activity grid card
│       ├── ProjectPostCard.tsx  # Project card with thumbnail + link
│       ├── BlogPostCard.tsx     # News article card
│       ├── MembershipPerkCard.tsx
│       ├── CollaboratorLogo.tsx # Collaborator image with grayscale hover
│       ├── CtaBanner.tsx        # Call-to-action banner
│       ├── ScrollReveal.tsx     # IntersectionObserver-based scroll animation
│       ├── ThemeProvider.tsx    # Dark/light theme context
│       ├── ThemeToggle.tsx      # Theme toggle button
│       └── AthenaChatbot.tsx    # AI assistant chatbot
├── content/news/                # MDX news articles (Keystatic-managed)
├── data/                        # Static JSON data files
│   ├── site-config.json         # Club info, social links, hero content
│   ├── navigation.json          # Nav links
│   ├── activities.json          # Core activities
│   ├── projects.json            # Member-built projects
│   ├── perks.json               # Membership perks
│   ├── collaborators.json       # Collaborator logos
│   ├── about.json               # About page content
│   └── news.json                # News article metadata
├── external/                    # Legacy Contentful client (unused by current pages)
├── public/images/               # Static images (logos, project thumbnails, org chart)
└── docs/                        # Design docs and specifications
```

## Coding Conventions

### Client vs Server Components

We follow Next.js App Router conventions:

| Type | Components |
|---|---|
| **Server components** (default) | Pages, `HeroText`, `CtaBanner`, `ActivityCard`, `BlogPostCard`, `ProjectPostCard`, `MembershipPerkCard`, `CollaboratorLogo` |
| **Client components** (`"use client"`) | `Header`, `ThemeProvider`, `ThemeToggle`, `ScrollReveal`, `ShellWrapper`, `AthenaChatbot` |

**Rule of thumb:** If it needs `useState`, `useEffect`, `usePathname`, or event handlers — it's a client component. Everything else stays server-rendered.

### Props

Components define their props inline using `interface Props {}` at the top of the file:

```tsx
// Good — inline interface
interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ActivityCard({ title, description, icon }: Props) {
  // ...
}
```

Do **not** import prop types from `data/types.ts` — that file is out of sync and should not be used for component props.

### Styling

- **Layout/spacing/typography** → Tailwind classes (`gap-4`, `text-lg`, `font-display`, `px-[max(24px,8vw)]`)
- **Dynamic token-based values** → inline `style={{}}` referencing CSS variables (`style={{ background: "var(--icon-blue)" }}`)
- **Icons** → `react-icons/fa` (Font Awesome 5) and `react-icons/fa6` for `FaPeopleGroup`
- **Images** → `next/image` for optimized images

### File Naming

- React components: PascalCase (`Header.tsx`, `BlogPostCard.tsx`)
- Data files: kebab-case (`site-config.json`)
- Keep files focused — one component per file

## CSS Gotchas

### Critical: Import Order in `layout.tsx`

The project uses **Tailwind CSS v4's PostCSS plugin** with **no `postcss-import`**. The `@import` directive in CSS files is NOT inlined by PostCSS — it's left as-is in the output. CSS spec requires `@import` before all other rules.

**Always import `design-tokens.css` before `globals.css`:**

```tsx
// app/layout.tsx
import "./design-tokens.css";   // MUST come first — defines CSS variables
import "./globals.css";          // comes second — uses those variables
```

If these are swapped, all CSS variables will be undefined at runtime and the page renders as invisible text on a white background.

### Theme System

- CSS variables are defined in `app/design-tokens.css` using `:root` / `[data-theme="dark"]` / `[data-theme="light"]` selectors
- The `data-theme` attribute lives on the `<html>` element (set in `layout.tsx` + updated by `ThemeProvider`)
- Tailwind classes like `bg-surface-card`, `text-content-primary` resolve to these variables via the `@theme` block in `globals.css`

## Git Workflow

### Branches

- **`main`** — production branch. Deployed to Vercel.
- **Feature branches** — create from `main`, named descriptively (`fix/header-mobile`, `add/events-page`)

### Commit Style

Use lowercase, imperative commit messages:

```bash
# Good
git commit -m "fix: mobile nav z-index overlap"
git commit -m "add: news article for MFSH recap"
git commit -m "update: hero stats with 2026 numbers"

# Avoid
git commit -m "Fixed the bug"
git commit -m "Update"
```

### Before You Push

1. Run `npm run build` — confirm no build errors
2. Run `npx tsc --noEmit` — confirm no type errors
3. Run `npm run lint` — confirm no lint warnings
4. Review your changes with `git diff --stat`

## Pull Request Process

1. Open a PR from your feature branch to `main`
2. Add a clear title and description explaining **what** and **why**
3. If the PR includes visual changes, include a screenshot or screen recording
4. Ensure all CI checks pass (lint, type-check, build)
5. Request review from at least one core team member
6. Respond to review feedback — address each comment or explain your reasoning
7. Once approved, squash-merge into `main`

### PR Checklist

Before marking a PR as ready for review:

- [ ] Type-check passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors in dev server
- [ ] Tested on mobile viewport
- [ ] New components use inline `interface Props {}`
- [ ] Design tokens used instead of hardcoded colors
- [ ] No dead code or commented-out code left behind

## Managing News via Keystatic

News articles can be managed entirely through the **Keystatic admin dashboard** at `/keystatic`.

### Via the Dashboard

1. Navigate to `https://www.motionu.club/keystatic` (or `http://localhost:3000/keystatic` locally)
2. Click **"News"** → **"Create"**
3. Fill in: title, date, description, category, image, and rich content
4. Save — Keystatic commits the changes to GitHub automatically

### Via Direct File Edit

Articles live as MDX files in `content/news/`:

```
content/news/
├── 01-codedojo-2026-level-up-your-coding-skills.mdx
├── 02-athena-just-got-smarter-new-features-drop.mdx
├── 03-mfsh-2026-a-weekend-of-full-stack-building.mdx
├── 04-motion-u-membership-drive.mdx
└── 05-cfs-in-touch-back-to-basic.mdx
```

Each file has frontmatter for metadata:

```mdx
---
title: "Article Title"
date: 14 June 2026
description: >
  A short description shown on the news listing page.
category: Event
image: /images/news/your-image.png
---

Your article content here in Markdown...
```

> **Note:** When adding images through Keystatic, they're stored in `public/images/news/`. The dashboard handles the path automatically — you don't need to worry about the directory structure.

## Working with Data

Static content lives as JSON files in `data/`. To update content without touching code:

| File | What it controls |
|---|---|
| `site-config.json` | Club name, tagline, hero subtitle, stats, CTA link, email, social links |
| `navigation.json` | Navigation menu links |
| `activities.json` | Activity cards on the home page |
| `projects.json` | Project cards on home + projects page |
| `perks.json` | Membership perk cards |
| `collaborators.json` | Collaborator logos in the footer section |
| `about.json` | About page sections (background, mission, vision) |

Edit these files directly to update the corresponding sections. No build step needed — changes are reflected on rebuild.

### Adding a New Collaborator

```json
{
  "name": "Organization Name",
  "logo": "/images/partner-logo.png",
  "link": "https://partner-website.com"
}
```

Drop the logo image in `public/images/` and add the entry to `collaborators.json`.

## Build Verification

Always verify locally before pushing:

```bash
# Full verification suite
npm run build
npx tsc --noEmit
npm run lint

# Dev server smoke test
npm run dev
# Navigate to: /, /about, /contact, /news, /projects, /keystatic
# Check: dark/light theme toggle still works
# Check: mobile menu opens and closes
```

### Common build failures

| Symptom | Likely cause |
|---|---|
| White screen, no content | CSS variables undefined — check import order in `layout.tsx` |
| Build succeeds, 500 error at runtime | Server component error — check `npm run dev` terminal for the actual stack trace |
| Type errors on `@/` imports | Path alias misconfiguration — check `tsconfig.json` has `"paths": { "@/*": ["./*"] }` |

## Reporting Issues

When reporting a bug or suggesting a feature, please:

1. **Check existing issues** — someone may already be working on it
2. **Use a clear title** — "Mobile nav closes unexpectedly on Safari" rather than "Bug"
3. **Include reproduction steps** — what you did, what happened, what you expected
4. **Include screenshots** if relevant
5. **Tag the issue** with the appropriate label (bug, enhancement, question)

---

Questions? Reach out to us at **motionu.kict@gmail.com** or open a discussion on GitHub.
