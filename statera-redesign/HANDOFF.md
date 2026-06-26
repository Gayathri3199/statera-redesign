# Statera Regulatory Consulting — Redesign Handoff

**Deliverable:** `index.html` — a self-contained, responsive prototype of the redesigned single-page site. Open it in any browser. All styling lives in the `<style>` block so it can be lifted into Squarespace.

---

## 1. What changed (against the audit)

| Original problem | Fix in this build |
|---|---|
| No navigation | Sticky top nav with anchored links + persistent CTA; collapses to a menu on mobile |
| Services = flat text | Regrouped into 3 client-stage clusters, each card has a 1-sentence plain-English description |
| FDA credibility buried in bio | Surfaced in hero sub-headline **and** a dedicated navy credibility bar directly below the hero (tenure + the 4 specific roles) |
| Generic "we"/"trusted partner" copy | Rewritten outcome-first, first-person ("I", "Talk to Melissa") |
| mailto CTAs | Replaced with a real consultation form + a Calendly hook (`[data-calendly]`) |
| Cold/corporate feel | Blush surface token on alternating sections; Lora serif for headlines |

---

## 2. Token reference (in code at `:root`)

**Color** — `--color-bg #FDFAF9` · `--color-surface #F2E0DA` · `--color-primary #0E2841` · `--color-accent #E97132` · `--color-teal #156082` · `--color-text-primary #2C2C2C` · `--color-text-secondary #6B6B6B` · `--color-white #FFFFFF`

**Accent rule honored:** `#E97132` appears ONLY on decorative elements — logo S-mark glyph, card/icon fills, bokeh gradient, role bullet dots, the "Let's talk" eyebrow on the dark section. It is never used for body text, small labels, or as a button background with white text. Interactive elements use navy (`#0E2841`) or teal (`#156082`).

**Type** — Display: Lora (serif, authority). Body/UI: Inter. Scale strictly 12/14/16/20/24/32/48px via `--fs-*` tokens.

**Spacing** — 8/16/24/40/64/96 via `--sp-*` tokens. **Layout** — 1200px max, 24px gutter, 12-col mental model; breakpoints at 980 / 680px cover the 1280 / 768 / 375 test sizes.

---

## 3. Squarespace section map

Rebuild as stacked Sections in this order (anchor IDs in parens):

1. **Header / Nav** — Squarespace native header. Add menu links (Services, How it works, About) + a Button styled navy = "Book a free consultation" → `#book`.
2. **Hero** (`#top`) — Code/Markdown block or two-column section: H1 + sub + two buttons; right card is the Melissa pull-quote.
3. **Credibility bar** (navy) — 4-stat row + roles strip.
4. **Services** (`#services`) — 3 clusters × cards. Each cluster = a sub-section header + a 3-up card row.
5. **How it works** (`#process`, blush) — 3 numbered steps.
6. **About Melissa** (`#about`) — image block + condensed bio + CTA.
7. **Footer CTA** (`#book`, navy) — copy + **Form Block** (Name, Email, Stage dropdown, Message). For scheduling, embed Calendly via a Code Block and point `[data-calendly]` / the buttons at it.
8. **Footer** — © + tagline + book link.

> Easiest path: paste the whole file into a single full-width **Code Block** for a faithful match, then progressively migrate sections to native blocks so Melissa can edit copy without touching code.

---

## 4. Action items before launch (assets I couldn't include)

- [ ] **Logo** — swap the CSS-recreated `.logo` block for the original logo asset (blush bg, coral S, charcoal wordmark). Do **not** recolor. It's marked with a `TODO` comment in the HTML.
- [ ] **Melissa's headshot** — replace the `.about__photo` placeholder and the hero "MH" avatar.
- [ ] **Scheduler** — connect a real Calendly/Acuity link to the buttons and `[data-calendly]` anchor, or wire the Squarespace Form Block to Melissa's inbox/CRM.
- [ ] **Testimonials** — SKILL.md flags a proof section to add "when available"; reserve a slot after About.

---

## 5. Non-obvious decisions

- **Bokeh gradient is pure CSS** (fixed `.bokeh` layer with layered radial gradients), not the source image — keeps LCP fast (no image download) and each blob is capped via low-alpha rgba so it reads as atmosphere ≤20%, per the constraint. If you prefer the original image, compress it and set it on `.bokeh` instead.
- **Hero is two-column on desktop, stacks on mobile.** The pull-quote card does double duty: it humanizes Melissa and reinforces the FDA-insider angle above the fold.
- **Primary CTA appears 5×** (nav, hero, about, footer section, footer link) and is above the fold on both desktop and mobile.
- **Reduced-motion** users get no transitions/smooth-scroll; all interactive states (hover/focus/active/disabled) are defined on buttons, cards, and form fields.

---

## 6. Pre-launch checklist (SKILL.md Phase 5) — status

- [x] Hero communicates what + who within 5s
- [x] FDA tenure + specific roles above the fold / first scroll
- [x] Services grouped with plain-English descriptions
- [x] Primary CTA → form/scheduler, not mailto
- [~] Logo unchanged — **placeholder in place; drop in real asset**
- [x] Floating gradient present, low-opacity, readable
- [x] All interactive states implemented
- [x] No hard-coded color/spacing values (all tokens)
- [x] WCAG AA contrast (navy/teal on light, white on navy; coral decorative-only)
- [x] Layout holds at 375 / 768 / 1280
- [x] Primary CTA above the fold, desktop + mobile
