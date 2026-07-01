# Motion-U Club Official Website

![Motion-U Club](public/images/motionu.png)

The official landing page for **Motion-U Club** — a Special Interest Group (SIG) based in Kulliyyah of Information and Communication Technology (KICT) at the International Islamic University Malaysia (IIUM).

We bring together technology enthusiasts to build real products, run workshops, and foster a community of builders. This site serves as our public face: showcasing projects, sharing news, and inviting new members to join.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4 + CSS custom properties (design token system) |
| **CMS** | Keystatic (GitHub-backed, MDX content) |
| **Fonts** | Inter (body), Space Grotesk (display) |
| **Icons** | react-icons (Font Awesome 5 & 6) |
| **Deployment** | Vercel |
| **Analytics** | @vercel/analytics |

## Features

- **Dark/Light theme** — persistent preference via `localStorage`, CSS variable-driven, smooth transitions
- **CMS-backed news** — manage articles through the Keystatic dashboard at `/keystatic`
- **Projects showcase** — member-built products like Athena, CodeDojo, Certify, and more
- **Scroll-reveal animations** — staggered entry with `IntersectionObserver`
- **Responsive design** — mobile-first grid layouts across all sections
- **Athena chatbot** — AI assistant embedded site-wide
- **Static content** — activities, perks, collaborators, and site config managed via JSON data files

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type-check
npx tsc --noEmit

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### With Bun

```bash
bun install
bun run dev
```

> **Note:** Bun may not be in PATH on Windows. npm is the recommended package manager for this project.

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout — ThemeProvider, optional shell
│   ├── page.tsx             # Home page — hero, activities, projects, perks, CTA
│   ├── globals.css          # Tailwind directives + base element styles
│   ├── design-tokens.css    # CSS custom properties for dark/light themes
│   ├── about/page.tsx       # About page with org chart
│   ├── contact/page.tsx     # Contact information
│   ├── news/
│   │   ├── page.tsx         # News listing
│   │   └── [slug]/page.tsx  # News detail
│   ├── projects/page.tsx    # All projects listing
│   ├── api/ask/athena/      # Athena chatbot API route
│   ├── keystatic/           # Keystatic CMS admin dashboard
│   └── components/
│       ├── Header.tsx        # Sticky nav with mobile menu + ThemeToggle
│       ├── ShellWrapper.tsx  # Conditionally renders shell around pages
│       ├── footer-new.tsx    # Footer with social links
│       ├── HeroText.tsx      # Hero section
│       ├── ActivityCard.tsx  # Activity grid card
│       ├── ProjectPostCard.tsx
│       ├── BlogPostCard.tsx
│       ├── MembershipPerkCard.tsx
│       ├── CollaboratorLogo.tsx
│       ├── CtaBanner.tsx
│       ├── ScrollReveal.tsx
│       ├── ThemeProvider.tsx
│       ├── ThemeToggle.tsx
│       └── AthenaChatbot.tsx
├── content/news/             # MDX news articles (Keystatic-managed)
├── data/                     # Static JSON data files (activities, projects, etc.)
├── external/                 # External API clients (Contentful — legacy)
├── public/images/            # Static images
└── docs/                     # Design docs and specifications
```

## CMS (Keystatic)

News articles are managed through [Keystatic](https://keystatic.com/), a GitHub-backed CMS. Access the admin dashboard at `/keystatic` on the live site.

- Articles are stored as MDX files in `content/news/`
- Each article supports: title, date, description, category, image, and rich content
- Changes are committed directly to the repository via GitHub

## Projects Built by Members

| Project | Description |
|---|---|
| **Athena** | Motion-U's AI assistant — ask anything about the club ecosystem |
| **Motion-U API** | Centralized API service for Motion-U systems |
| **Certify** | Bulk certificate generator |
| **CodeDojo** | Hands-on coding programme for members |
| **MFSH** | Modern Full-Stack Hero workshop |
| **Neurena** | Philosophy-meets-tech web game |
| **Neuradmin** | Knowledge management for Athena and Neura |
| **CFS in Touch** | Foundation-level software engineering prep |

## Theme System

The site uses a CSS custom property-based token system. All visual properties are encoded in `app/design-tokens.css` and referenced by Tailwind utility classes.

- **Dark theme** — default, deep navy base (`#07091A`)
- **Light theme** — blue-tinted near-white (`#F8FAFF`)
- Tokens change value per theme; no CSS is duplicated
- Theme preference persisted in `localStorage`, falls back to OS `prefers-color-scheme`

## Design

A full design specification is available at [`docs/superpowers/specs/`](docs/superpowers/specs/) and the original design document at [`design.md`](design.md).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup instructions, coding conventions, and pull request guidelines.

## Contact

- **Email:** motionu.kict@gmail.com
- **Instagram:** [@motionu.kict](https://www.instagram.com/motionu.kict/)
- **LinkedIn:** [Motion-U KICT](https://www.linkedin.com/company/motionukict/)
- **TikTok:** [@motionu.kict](https://www.tiktok.com/@motionu.kict)
- **Twitter/X:** [@MotionUkict](https://twitter.com/MotionUkict)

---

Built by members of Motion-U Club, KICT, IIUM.
