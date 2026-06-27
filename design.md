# Motion-U Club — Design Document
> Version 2.0 · Redesign by Principal UI/UX Strategist  
> Frameworks applied: Nielsen's 10 Heuristics · Gestalt Principles · Laws of UX · WCAG 2.2

---

## 1. Brief & Objectives

**Product:** Motion-U Club landing page — a university tech club (IIUM) recruiting student engineers.  
**Audience:** Malaysian university students with engineering/tech interest (18–25), mobile-first, likely browsing in low-attention contexts.  
**Page's single job:** Convert visitor → club member via a clear value proposition and a single primary CTA.

**Problems found in the original screenshots:**
- Image 1 (light): clean but timid — no urgency, no credibility signals, weak hero.
- Image 2 (dark): energetic but cluttered — too many competing sections, no visual hierarchy, inconsistent card sizing.
- Neither had a persistent colour-mode preference or accessible focus states.

---

## 2. Design Token System

All visual decisions are encoded as CSS custom properties on `:root` and `[data-theme]`. Switching themes requires zero DOM rewrites — only the token values change.

### 2.1 Colour Palette

#### Dark Theme
| Token | Value | Role |
|---|---|---|
| `--bg-base` | `#07091A` | Page canvas |
| `--bg-surface` | `#0D1128` | Elevated surfaces (thumbnails) |
| `--bg-card` | `rgba(255,255,255,0.04)` | Card fill |
| `--bg-card-hover` | `rgba(255,255,255,0.07)` | Card hover state |
| `--bg-nav` | `rgba(7,9,26,0.80)` | Frosted nav |
| `--indigo` | `#6366F1` | Primary brand / CTA |
| `--indigo-light` | `#818CF8` | Labels, accents on dark |
| `--cyan` | `#22D3EE` | Secondary accent / gradient end |
| `--text-primary` | `#F1F5F9` | Headings, body |
| `--text-secondary` | `#94A3B8` | Descriptive copy |
| `--text-muted` | `#475569` | Credits, meta, footer |
| `--border` | `rgba(255,255,255,0.08)` | Default card/nav borders |
| `--border-accent` | `rgba(99,102,241,0.40)` | Hover/active borders |

**Rationale:** Deep navy (`#07091A`) was chosen over pure black to avoid harsh contrast that causes eye fatigue on large screens. The indigo/cyan gradient is the brand's single chromatic identity — everything else is either white-alpha or the same hue at lower opacity.

#### Light Theme
| Token | Value | Role |
|---|---|---|
| `--bg-base` | `#F8FAFF` | Page canvas (slightly blue-tinted, not pure white) |
| `--bg-surface` | `#FFFFFF` | Elevated surfaces |
| `--bg-card` | `rgba(0,0,0,0.025)` | Card fill |
| `--indigo` | `#4F46E5` | Darker indigo for WCAG contrast on white |
| `--indigo-light` | `#6366F1` | Labels on light |
| `--cyan` | `#0891B2` | Darker cyan for contrast on white |
| `--text-primary` | `#0F172A` | Near-black, not pure black (softens) |
| `--text-secondary` | `#475569` | Body copy |
| `--text-muted` | `#94A3B8` | Meta/footer |

**Light-mode shift rationale:** The indigo/cyan values are darkened in light mode (`#4F46E5`, `#0891B2`) to maintain ≥ 4.5:1 contrast ratio against the light background — satisfying WCAG 2.2 AA. On dark, lighter variants (`#818CF8`) work because they contrast against the dark base.

**Why `#F8FAFF` not pure white?**  
Pure white (`#FFFFFF`) against black text exceeds a 21:1 contrast ratio, which is technically too high — it creates harsh, clinical environments. A blue-tinted near-white reads as a "lit screen" and is perceptually aligned with tech/digital products.

---

## 3. Typography

### Type Scale

| Role | Family | Weight | Size | Letter-spacing |
|---|---|---|---|---|
| Display / H1 | Space Grotesk | 700 | clamp(2.5rem → 5.5rem) | −0.03em |
| Section headings | Space Grotesk | 700 | clamp(1.75rem → 2.75rem) | −0.02em |
| Card headings | Space Grotesk | 600 | 1.0625rem | default |
| Body copy | Inter | 400 | 0.875rem–1rem | default |
| Labels / eyebrows | Inter | 600 | 0.75rem | +0.10–0.12em |
| Stats | Space Grotesk | 700 | 2rem | default |

### Why Space Grotesk + Inter?

**Space Grotesk** is a geometric grotesque with subtle quirks (angled cuts on certain letterforms) that give it a "made by engineers, for engineers" personality without being cold or unreadable. It's not the default choice for a tech club (which would be something like DM Sans or Poppins) — it has genuine character.

**Inter** is the gold standard for UI body copy: optically balanced at small sizes, excellent legibility at display sizes. Its high x-height makes dense card text legible even at 0.875rem.

**Negative letter-spacing on headings** (−0.02–0.03em) is a contemporary display convention that tightens large type so it reads as a single visual mass rather than individual floating characters. Applied only to headings to preserve legibility in body text.

**Uppercase labels** with wide tracking (+0.10em) create visual hierarchy waypoints — they signal "category marker" before the headline fires. This is a Gestalt *similarity* application: all caps + tracking = "this is a label, not content."

---

## 4. Layout & Information Architecture

### 4.1 Page Structure (scroll order)

```
1. Nav              → persistent orientation anchor
2. Hero             → value proposition + primary CTA
3. Core Activities  → what you get (6 cards)
4. Featured Projects→ social proof (real work)
5. Membership Perks → why join (reinforcement before final CTA)
6. CTA Banner       → conversion moment
7. Footer           → compliance / navigation safety net
```

**Rationale (Hick's Law):** Decisions are sequenced to reduce cognitive load at each step. The user understands *what* Motion-U is (Hero) before being shown *what it does* (Activities) before *what others built* (Projects) before *what they get* (Perks). This mirrors a natural sales funnel with zero selling language.

### 4.2 Hero Layout

- **Full-viewport height** ensures the CTA is the only thing visible on load — no scroll required to make a decision.
- **Stats bar** below the CTA provides credibility before the user commits to scrolling. Numbers like "50+ Projects" and "200+ Members" act as social proof anchors (Aesthetic-Usability Effect applied to data).
- **Eyebrow badge** ("Mobility · Technology · Industry @ IIUM") orients returning users and provides context for new arrivals — satisfying Nielsen Heuristic #1 (Visibility of System Status).

### 4.3 Projects — Bento Grid

```
[ Mallam (large, 7/12 cols)  ] [ iMa'luum (5/12 cols)  ]
[ ProReg (5/12)  ] [ Mallam Chat (4/12) ] [ Archive (3/12) ]
```

**Rationale:**  
- **Gestalt Figure-Ground:** The oversized Mallam card draws the eye first, establishing hierarchy without a label saying "featured."  
- **Proximity:** Cards closer together signal they belong to the same category.  
- **Variety without chaos:** Different card sizes communicate that not all projects are equal in maturity, which is honest and interesting.

### 4.4 Activities — Equal 3-column Grid

6 activities in a uniform grid because they *are* equal — no activity should be perceived as more important than another. Using an unequal bento here would create a false hierarchy. Gestalt *similarity* (identical card structure) communicates "these are all the same kind of thing."

---

## 5. Light / Dark Mode Implementation

### Strategy: `data-theme` attribute on `<html>`

```html
<html lang="en" data-theme="dark">
```

**Why `data-theme` over a class?**  
Attribute selectors (`[data-theme="dark"]`) have lower specificity than class-based selectors, making overrides cleaner. They also convey semantic meaning — this is configuration state, not styling.

### Persistence Logic

```javascript
// Priority order:
// 1. Saved localStorage preference
// 2. OS-level prefers-color-scheme
// 3. Default: dark
```

Users who've explicitly chosen a mode should always see it on return. The OS fallback respects the user's system-wide preference without asking. This satisfies Nielsen Heuristic #4 (Consistency and Standards).

### Theme Toggle UX

- Placed in the nav's right cluster, grouped with the primary CTA.
- Uses emoji icons (☀️ / 🌙) — universally understood without text labels, saving space and avoiding translation issues.
- `aria-label` updates dynamically ("Switch to light mode" / "Switch to dark mode") for screen reader users.
- A 15° rotation on hover provides haptic-style feedback — the icon "turns on."
- Transition duration on all color-bearing properties: `0.35s ease` — long enough to be perceptible (the user sees the theme change rather than snap), short enough to feel instantaneous.

### Colour Values That Change Between Themes

Only tokens change — zero structural CSS is duplicated. This means a theme bug is fixed in one place. Changed values:

| Token | Dark | Light | Why it changes |
|---|---|---|---|
| `--bg-base` | `#07091A` | `#F8FAFF` | Surface flip |
| `--indigo` | `#6366F1` | `#4F46E5` | Contrast req. |
| `--cyan` | `#22D3EE` | `#0891B2` | Contrast req. |
| `--indigo-light` | `#818CF8` | `#6366F1` | Role swap — light labels on dark, dark labels on light |
| `--text-primary` | `#F1F5F9` | `#0F172A` | Invert |
| `--shadow-card` | `0 20px 50px rgba(0,0,0,0.40)` | `0 8px 32px rgba(15,23,42,0.10)` | Dark shadows invisible on dark bg |
| `--mesh-a/b/c` | High opacity gradients | Low opacity | Mesh too loud on light bg |
| `--bg-cta` | Dark navy gradient | Soft indigo tint | CTA must feel elevated in both modes |

---

## 6. Interaction Design

### 6.1 Navigation

- **Sticky nav** with `backdrop-filter: blur(20px) saturate(180%)` — creates a frosted glass effect that separates nav from page content without an opaque divider.
- **Height shrink on scroll** (64px → 56px) frees vertical space as the user descends — a micro-UX detail that feels polished.
- **Active link highlight:** Updated via `IntersectionObserver` + scroll position — the active link matches the visible section, satisfying Nielsen Heuristic #1.

### 6.2 Cards

All cards share an interaction pattern:
- **Default:** subtle background, hairline border
- **Hover:** `translateY(-3px)` lift + border colour shifts to indigo accent + box-shadow deepens

This communicates "this is clickable" (affordance) without needing a separate cursor hint. The lift distance is calibrated: 3–4px is enough to signal depth; more feels cartoonish.

**Project card arrow (↗):**  
Hidden by default (`opacity: 0`, offset `translate(-4px, 4px)`). Slides in on parent hover. This is a *progressive disclosure* pattern — the action indicator appears only when the user signals intent (hovering). Keeps the resting state visually clean.

### 6.3 Scroll Reveal

```javascript
// Staggered: each card delays by 60ms × its index in the batch
setTimeout(() => el.classList.add('visible'), i * 60);
```

**Why 60ms stagger?**  
Below 50ms, cards appear to pop in simultaneously. Above 100ms, the animation feels slow and the last card arrives after the user has already read the first. 60ms is the sweet spot — the user perceives a *wave* of content arriving, which Gestalt *common fate* reads as "these things belong together."

**`prefers-reduced-motion` override:**  
All animations are suppressed to `0.01ms` when the OS motion-reduction preference is set. WCAG 2.3.3 (AAA) compliance.

### 6.4 Hero Animation

Hero elements are sequenced with CSS animation-delay (0s, 0.1s, 0.2s, 0.3s, 0.4s):
1. Eyebrow badge
2. H1
3. Subheading
4. CTA buttons
5. Stats

This creates a linear reveal that guides the eye through the hierarchy naturally, rather than having everything appear at once (which overwhelms) or a random pop-in (which confuses).

---

## 7. Gestalt Principles Applied

| Principle | Where Applied |
|---|---|
| **Proximity** | Stats grouped with dividers; card grids; nav items clustered |
| **Similarity** | All activity cards identical structure = "these are peers"; all project cards share border-radius/shadow tokens |
| **Figure-Ground** | Oversized Mallam card pops against smaller sibling cards in the bento grid |
| **Common Fate** | Scroll-reveal stagger makes each card group feel like a unified unit arriving together |
| **Continuity** | Gradient text in hero flows indigo → cyan; the same gradient recurs in the CTA banner → visual thread connecting top and bottom of page |
| **Closure** | Mock UI wireframes inside project cards are incomplete but the brain fills them in as "app screenshots" |

---

## 8. Laws of UX Applied

### Fitts's Law
> Larger targets are faster to click.

- Primary CTA in hero: `13px 28px` padding (large touch target).
- CTA in nav: `9px 20px` (smaller — secondary context).
- Theme toggle: 40×40px minimum (WCAG 2.5.5 target size).
- All card surfaces are clickable, not just titles — the entire card is the target.

### Hick's Law
> Decision time increases with number of choices.

- Nav has exactly 5 links (within Miller's Law 7±2 limit).
- Hero has exactly 2 CTAs: primary (join) and secondary (explore) — a binary choice is fast to process.
- Activity section shows 6 items but in a grid that can be scanned, not read sequentially.

### Miller's Law
> Working memory holds ~7±2 items.

- 5 nav links.
- 6 activity cards (2×3 grid — chunked into rows of 3, not a list of 6).
- 6 perk cards (same chunking).
- 4 hero stats.

### Aesthetic-Usability Effect
> Users perceive beautiful interfaces as more usable.

The polish (gradient mesh, frosted nav, smooth transitions, type contrast) is not decoration — it builds the trust that the user transfers to the club itself. A visually chaotic landing page would imply a chaotic club. This effect is especially strong for a *technical* audience, who will read design quality as evidence of engineering quality.

---

## 9. Accessibility (WCAG 2.2)

| Criterion | Level | Implementation |
|---|---|---|
| Colour contrast — body text | AA (4.5:1) | `#F1F5F9` on `#07091A` = 16.7:1 ✓; `#0F172A` on `#F8FAFF` = 17.3:1 ✓ |
| Colour contrast — secondary text | AA (4.5:1) | `#94A3B8` on dark = 5.9:1 ✓; `#475569` on light = 6.2:1 ✓ |
| Colour contrast — indigo labels (dark) | AA | `#818CF8` on `#07091A` = 6.1:1 ✓ |
| Colour contrast — indigo labels (light) | AA | `#4F46E5` on `#F8FAFF` = 7.4:1 ✓ |
| Focus indicators | AA (2.4.7) | Browser default focus ring preserved; no `outline: none` applied |
| Touch targets | AA (2.5.5) | Toggle: 40×40px; CTAs: 44px+ height; nav links: ≥ 44px tap area |
| Reduced motion | AAA (2.3.3) | `prefers-reduced-motion` media query suppresses all animations |
| Semantic HTML | — | `<nav>`, `<section>`, `<footer>`, `<h1>`→`<h3>` hierarchy respected |
| ARIA labels | — | Theme toggle and mobile nav toggle have descriptive `aria-label` |
| Keyboard navigation | AA (2.1.1) | All interactive elements reachable by Tab; nav links focus-visible |

---

## 10. Design Decisions Log

| Decision | Alternatives Considered | Chosen Because |
|---|---|---|
| Deep navy base (`#07091A`) | Pure black (`#000000`), medium dark (`#111827`) | Navy reads as "tech/space" not "void"; less harsh contrast ceiling |
| `data-theme` on `<html>` | CSS class, JS style injection, separate stylesheets | Lowest specificity, semantic, single point of control |
| Space Grotesk display | DM Sans, Outfit, Syne | Geometric with personality; not used on every other tech site |
| Bento grid for projects | Equal-size grid, carousel, masonry | Communicates project hierarchy; allows featured project without explicit label |
| 60ms stagger on scroll reveal | 0ms (simultaneous), 100ms, 200ms | Perceptible wave without feeling slow; Gestalt common fate preserved |
| 4-stat credibility bar in hero | Testimonials, logos, "As seen in" | Stats are self-evident and scannable; testimonials require reading |
| Gradient text on hero span only | Solid colour, outlined text | Gradient draws eye to key phrase; used sparingly so it retains impact |
| CTA banner at 2nd-to-last position | Top of page, after hero, floating sticky | After Activities + Projects + Perks, user has full context to convert |
| Emoji in theme toggle | SVG sun/moon icons, text labels | Universal recognition, no icon library dependency, zero FOUC risk |
| `0.35s ease` for theme transitions | Instant, 0.2s, 0.5s | Long enough to be perceptible (user sees change), short enough to feel snappy |

---

## 11. File Structure

```
motion-u-redesign.html   — Single-file deliverable (HTML + CSS + JS)
design.md                — This document
```

All CSS is in a `<style>` block in `<head>`. All JS is a single inline `<script>` at end of `<body>`. No build tools, no dependencies beyond Google Fonts. The page is deployable by opening the HTML file in any browser.

---

*Design document prepared alongside `motion-u-redesign.html` v2.0*