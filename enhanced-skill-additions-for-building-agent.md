# Enhanced Q-Sub Agent — What to Add and Where
## Plain English Guide for Non-Technical Builders

Your existing SKILL.md is already 80% of a full agent.
You need exactly three additions. Here's each one — what it is,
why it matters, and the exact text to paste in.

---

## ADDITION 1 — Live FDA Guidance Retrieval
**What it does:** Before drafting anything, Claude searches the web
for the most current FDA guidance documents relevant to your device
and pathway. This means your output is never based on stale guidance.

**Why it matters:** FDA guidance updates constantly. Your reference
files (qsub-format-guide.md, fda-qsub-guidance-jan2023.md, etc.)
will go out of date. This addition makes the skill self-updating.

**Where to add it:** Paste this as a new section BETWEEN
Step 1 (Structured Intake) and Step 2 (Pathway Intelligence).
Call it Step 1.5.

---

### PASTE THIS INTO YOUR SKILL.md AS STEP 1.5:

```
## Step 1.5 — Live Guidance Retrieval

Before proceeding to pathway analysis, search for current FDA
guidance using the web search tool. This step is mandatory and
must not be skipped.

Search for the following based on intake answers:

ALWAYS search:
- "FDA Q-Submission program guidance [current year]"
- "FDA Pre-Submission meeting request guidance medical device
  [current year]"

IF pathway is 510(k), also search:
- "FDA 510(k) program guidance [current year]"
- "FDA substantial equivalence guidance [current year]"

IF pathway is De Novo, also search:
- "FDA De Novo classification request guidance [current year]"
- "FDA special controls De Novo [current year]"

IF software is involved, also search:
- "FDA Software as Medical Device SaMD guidance [current year]"
- "FDA AI ML medical device guidance [current year]"

IF cybersecurity is relevant, also search:
- "FDA cybersecurity medical device guidance [current year]"

AFTER searching:
1. Note the title and publication date of each guidance found
2. Check if it is newer than the reference files listed in the
   Reference Files section of this skill
3. If a newer version exists — use the newer version and flag
   this in the Step 6 metadata output as:
   [GUIDANCE UPDATE DETECTED: newer version found via search,
   reference file may be outdated]
4. If search returns no newer version — proceed using reference
   files as normal

Do NOT skip this step to save time. Regulatory guidance currency
is non-negotiable in this workflow.
```

---

## ADDITION 2 — Explicit Human Review Gate
**What it does:** Adds a mandatory, non-optional instruction that
forces Claude to tell the user — clearly and prominently — that
the output MUST be reviewed by a qualified RA professional before
anything goes to FDA. It also tells Claude to stop the workflow
if the user signals they plan to submit without review.

**Why it matters:** Your Step 6 already has a limitation statement.
But it's buried in the metadata footer. This addition makes it
impossible to miss — it appears before the document is delivered,
not after. This is the E in your SAFE Framework (Expert-gated).

**Where to add it:** Paste this as a new section AFTER Step 5
(Anticipation Layer) and BEFORE Step 6 (Confidence Output).
Call it Step 5.5.

---

### PASTE THIS INTO YOUR SKILL.md AS STEP 5.5:

```
## Step 5.5 — Human Review Gate

Before delivering the final output, display this block clearly
and prominently. Do not bury it in the document. Display it
as a standalone section with visible formatting.

---
⚠️ MANDATORY HUMAN REVIEW REQUIRED

This document was generated with AI assistance and must be
reviewed and approved by a qualified Regulatory Affairs
professional before submission to FDA.

Specifically, a qualified RA reviewer must confirm:
□ Device description accurately reflects the actual device
□ Proposed regulatory pathway is appropriate
□ Questions are correctly framed and strategically sound
□ All FDA guidance citations are current and applicable
□ Clinical and technical claims are accurate and supportable
□ Nothing in this document contradicts prior FDA feedback

This output does not constitute regulatory or legal advice.
Submission of an AI-generated document to FDA without qualified
RA review is the responsibility of the submitting organization.
---

After displaying this block, ask the user:
"Has this output been reviewed by or will it be reviewed by
a qualified Regulatory Affairs professional before submission?"

IF the user confirms review — proceed to Step 6 and deliver
the final output.

IF the user says no or indicates they plan to submit directly —
respond: "I'd strongly recommend having this reviewed by a
qualified RA professional before submission. FDA Q-Sub
documents carry regulatory weight and errors can affect your
submission timeline and FDA relationship. Would you like
guidance on finding RA review support?"

Do NOT withhold the output — but do NOT proceed silently
without surfacing this gate.
```

---

## ADDITION 3 — Guidance Currency Check in Step 6
**What it does:** Updates your existing Step 6 metadata footer
to include a new field that explicitly records whether the
guidance used was current or outdated, based on what the
web search in Step 1.5 found.

**Why it matters:** This creates an auditable record of whether
the output was based on current or potentially stale guidance.
This is the A in your SAFE Framework (Auditable).

**Where to add it:** Find your existing Step 6 footer block and
REPLACE the existing confidence/citation section with this
expanded version.

---

### REPLACE YOUR EXISTING STEP 6 FOOTER WITH THIS:

```
## Step 6 — Confidence and Citation Output

Every Q-Sub output must end with this footer block:

SKILL OUTPUT METADATA
─────────────────────────────────────────────
Generated: [date]

Guidance retrieved via live web search:
  [List each guidance document found in Step 1.5
   with title, publication date, and source URL]

Reference files used:
  - FDA Guidance: Requests for Feedback and Meetings for
    Medical Device Submissions (Q-Submission Program),
    January 2023
  - [additional reference files used]

Guidance currency status:
  [CURRENT] — live search confirmed no newer versions found
  [UPDATED] — live search found newer version; updated
              guidance used. Reference file may be outdated.
  [SEARCH UNAVAILABLE] — web search unavailable; output
              based on reference files only. Verify guidance
              currency before submission.

Confidence: [High / Medium / Low]
  → High: sufficient device, pathway, and clinical context
          provided; current guidance confirmed
  → Medium: one or more intake fields incomplete — see flags;
            or guidance currency unconfirmed
  → Low: insufficient information to produce reliable draft;
         or guidance search returned no results

Incomplete fields requiring human completion:
  [List every field marked [HUMAN REVIEW REQUIRED] in the
   document above, with the specific reason for each flag]

Limitation: This output is AI-assisted regulatory drafting
for informational purposes only. It does not constitute
legal or regulatory advice. All outputs must be reviewed
by a qualified Regulatory Affairs professional before
submission to FDA. See Step 5.5 Human Review Gate above.
─────────────────────────────────────────────
```

---

## SUMMARY — What Changes, What Stays

| Section | Action |
|---|---|
| Step 0 — Persona | Keep exactly as is |
| Step 1 — Intake | Keep exactly as is |
| Step 1.5 — Live Guidance Retrieval | ADD THIS (new) |
| Step 2 — Pathway Intelligence | Keep exactly as is |
| Step 3 — Question Generation | Keep exactly as is |
| Step 4 — Document Assembly | Keep exactly as is |
| Step 5 — Anticipation Layer | Keep exactly as is |
| Step 5.5 — Human Review Gate | ADD THIS (new) |
| Step 6 — Confidence Output | REPLACE with expanded version |
| Reference Files table | Keep — now serves as backup to live search |
| Edge Case Handling | Keep exactly as is |

---

## What This Turns Your Skill Into

Before these additions:
A sophisticated document drafter that follows your
regulatory knowledge faithfully.

After these additions:
A governed agentic workflow that:
✓ Retrieves live FDA guidance before every draft
✓ Detects and flags outdated reference files automatically
✓ Enforces a human review gate before delivery
✓ Produces an auditable metadata record of every output
✓ Implements all four SAFE Framework properties

This is the difference between a Skill and an Agent —
and you built 80% of it already.

---

## How to Update Your SKILL.md

1. Open your existing SKILL.md file
2. Add Step 1.5 between Step 1 and Step 2
3. Add Step 5.5 between Step 5 and Step 6
4. Replace the Step 6 footer block with the expanded version
5. Save as a new version (keep the original as v1)
6. Repackage as a ZIP and upload to Claude.ai
   (Settings > Capabilities > Skills > + Create Skill)
7. Test with one complete device scenario end to end
8. Check that:
   - Claude searches for guidance before drafting
   - Human review gate appears before output delivery
   - Metadata footer includes guidance currency status

---

*Document prepared June 2026*
