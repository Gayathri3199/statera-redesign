# Statera Regulatory Consulting — Reference

## About the client

**Statera Regulatory Consulting, LLC** is a solo regulatory affairs consultancy run by Melissa Hall, a former FDA official with 10 years at the agency. She held roles as lead reviewer (orthopedic devices), assistant director (Spine Division, Office for Orthopedic Devices), industry education lead, and premarket policy analyst. Her core value proposition: she knows how the FDA thinks from the inside.

**Primary audience:** Small medical device companies — startup founders, engineers, procurement leads, and regulatory teams. Many are first-timers who find FDA compliance overwhelming. Design and copy should reduce anxiety and build trust, not showcase complexity.

**Current site:** Single-page Squarespace site. All CTAs are raw mailto links. No scheduling, no form, no navigation.

---

## Brand tokens

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#FDFAF9` | Page background (warm off-white) |
| `--color-surface` | `#F2E0DA` | Cards, callout sections (blush from logo) |
| `--color-primary` | `#0E2841` | Nav, headings, footer (deep navy) |
| `--color-accent` | `#E97132` | Primary CTA button (glossy coral, white text), decorative elements, animated hero gradient, hover accents — NOT body text |
| `--color-teal` | `#156082` | Secondary links, hover states, section dividers |
| `--color-text-primary` | `#2C2C2C` | All body text |
| `--color-text-secondary` | `#6B6B6B` | Captions, labels, metadata |
| `--color-white` | `#FFFFFF` | Button text, inverse sections |

**Coral usage (updated):** `#E97132` does not meet WCAG AA contrast as white text on a coral fill. This is an accepted brand decision for the **primary CTA button only**, which uses the glossy coral treatment with white text (matched to wearclair.com). Everywhere else, keep the original rule: never use coral for body text or small labels — use `#0E2841` (navy) or `#156082` (teal) for those. For maximum accessibility, the coral button text may be switched to navy without losing the glossy look.

**Logo:** Preserve exactly as-is — blush pink background, coral S-mark, charcoal wordmark. Do not recolor, crop, or reframe.

**Hero background (updated):** The hero uses an animated coral→mauve→teal→navy gradient. The base gradient pans with scroll position (driven by `--scrollPos`, 0→100 across the first viewport); when idle, soft blurred color blobs drift very subtly on slow loops. Respect `prefers-reduced-motion` (disable idle drift). Keep the dark readability veil over the gradient so headline/CTA contrast holds.

---

## Typography guidance

| Role | Typeface | Notes |
|---|---|---|
| Display / Hero / Headings | **EB Garamond** (serif), weight 500, letter-spacing ≈ -0.02em | Authoritative, refined serif — matched to wearclair.com; signals credibility for the regulatory context |
| Body / UI / Labels | **Geist** (sans-serif), weights 300–600 | Clean, modern, highly readable at small sizes and on mobile |

Both loaded via Google Fonts. Avoid a third typeface. Type scale (minimum): 12 / 14 / 16 / 20 / 24 / 32 / 48px. Use nothing outside the scale.

**Buttons (matched to wearclair.com):** Glossy "raised" treatment — a subtle top-sheen gradient over the fill plus layered inset shadows, 12px radius (8px for small), Geist medium weight, springy press (`scale .98`) and opacity hover. Primary = coral `#E97132` with white text; the dark-section variant is the same treatment in white with navy text.

---

## Copy principles for Statera

**Lead with outcomes, not services.** Visitors don't care about "submission preparation" — they care about getting their device approved without delays or rejections. Name the outcome first.

**Surface the FDA insider angle early.** "10 years at the FDA" is the single strongest trust signal on the site. It should appear in the hero or the first scroll — not buried in a bio halfway down the page.

**Write for the anxious first-timer.** Many visitors are startup founders who have never navigated FDA before. Avoid acronyms without explanation (510(k), PMA, De Novo). Use plain language: "510(k) clearance — the most common path to market for medical devices."

**One voice, one person.** Melissa is the practice. Write in first person or with clear attribution ("Melissa brings...") — not the royal "we" of a large firm. This is a feature, not a limitation: clients are hiring her judgment and relationships, not a team.

**CTA copy.** Avoid "Contact us" — it implies effort and uncertainty. Use "Book a free consultation" or "Talk to Melissa" — specific, low-stakes, human.

---

## Services — grouping and plain-English descriptions

Group the 8 services by client stage rather than listing them alphabetically:

**Getting to market**
- *Regulatory Strategy Development* — Map the fastest, lowest-risk path to FDA clearance for your device
- *Submission Preparation and Filing* — Prepare and submit your 510(k), De Novo, or PMA application correctly the first time
- *Regulatory Gap Assessments* — Identify compliance gaps before the FDA does

**Staying compliant**
- *Post-Market Support* — Navigate post-approval requirements, MDRs, and field corrections
- *Labeling Development and Review* — Ensure your labeling meets FDA requirements and doesn't create liability
- *U.S. Agent for Foreign Establishments* — Required FDA representation for non-U.S. device manufacturers

**Building capability**
- *Submission Documentation Support* — Strengthen your internal documentation for audits and submissions
- *Training and Education* — Equip your team to understand and manage FDA requirements independently

---

## Common failure modes (Statera-specific)

| Symptom | Root cause | Fix |
|---|---|---|
| Site looks refreshed but still gets no bookings | CTA is still a mailto link | Replace with embedded scheduler or form |
| Visitors bounce from the hero | Headline is about services, not outcomes | Rewrite hero to lead with the result clients want |
| Melissa's credibility doesn't land | FDA background is buried in the bio | Move the tenure and key roles to the hero sub-headline or a credibility bar |
| Services feel undifferentiated | Listed as plain text, no descriptions | Group by client stage; add one-sentence plain-English description to each |
| Site feels corporate and cold | Navy + generic sans-serif with no warmth | Apply blush surface token to alternating sections; use the EB Garamond display face for headlines |
| Coral used for low-contrast text | `#E97132` on white is low contrast | Coral as white-on-coral is reserved for the primary CTA button only (accepted); never use coral for body text or small labels — use `#0E2841` or `#156082` there |
