---
name: pre-submission-draft
description: >
  Drafts FDA Pre-Submission (Q-Sub) Meeting Request documents for medical device
  manufacturers. Use this skill whenever a user mentions: Q-Sub, Pre-Sub,
  pre-submission, pre-IDE, FDA meeting request, Q-Submission, Breakthrough Device
  Designation, FDA written feedback request, teleconference request, or asks how
  to get FDA feedback before a submission. Also trigger when a user is preparing
  either 510(k) or De Novo strategy and wants to validate it with FDA first, or when
  they ask what questions to ask FDA about their device. This skill covers the
  full Pre-Submission drafting workflow.
---

# pre-submission-draft

Produces a complete, strategically sound FDA Pre-Submission (Q-Sub) document
tailored to the user's device, pathway, and persona. Covers Pre-Submission
(written feedback and teleconference variants) as the core output, with
Breakthrough Device Designation as an optional branch and Study Risk
Determination flagging when clinical study context is present.

---

## Step 0 — Identify the user who prompts

Ask this first. Output format and conversation style depends on it.

Ask: "Before we start, could you describe your role in the Industry?"

- **A** — RA professional at a medtech company 
- **B** — RA Consultant drafting for a client
- **C** — Startup founder or Engineer

User persona:
- **A**: Formal memo style, full regulatory citations, audit-ready rationale
- **B**: Executive summary + detailed backup sections, plus internal strategy
         note for client communication (separate from Q-Sub document)
- **C**: Plain language throughout, explain regulatory terms on first use,
         include "what this means for your timeline/budget" callouts

---

## Step 1 — Structured Intake

Collect the following via guided conversation — do NOT present all questions
at once. Ask in logical order, branch based on answers.

### 1a. Device basics (always ask)
- What does the device do? (function and mechanism, not marketing language)
- Who uses it? (intended user: surgeon, clinician, patient, lay user, caregiver)
- Where is it used? (OR, hospital, clinic, home, point of care, remote)
- What clinical problem does it solve and for which patient population?
- Is it implantable, temporary, permanent, or externally worn?
- Is any software involved? If yes — is it the primary function or supporting?

### 1b. Clinical and disease context (always ask — especially for De Novo)
- What is the target disease or condition?
- What is the current standard of care for this condition?
- What unmet need does this device address?
- Are there "no-option" patients — those who have exhausted existing therapies?
- What is the clinical consequence of untreated disease? (severity, mortality)
  NOTE: For De Novo Q-Subs, this becomes the Clinical Background section and
  must be substantive. Allocate significant intake time here.

### 1c. Regulatory history (always ask)
- Has this device or a similar one ever been reviewed by FDA before?
- Any prior FDA interactions on this product (previous Q-Subs, IDE, meetings)?
- Any existing clearances, approvals, or CE marking in other markets?
- Has a predicate device search been conducted? What were the results?
  - For 510(k): identify predicate candidates with 510(k) numbers
  - For De Novo: identify devices considered and eliminated as predicates,
    with the specific regulatory basis for elimination (different IFU,
    different technological characteristics, different risk class)

### 1d. Proposed pathway (always ask)
- What regulatory pathway is the manufacturer proposing?
  (510(k) / De Novo / PMA / unsure)
- What is the basis for that choice?
- What is the current development stage?
  (concept / bench testing / preclinical / clinical / pre-submission ready)
- What is the target submission date?
- What is the critical path decision that depends on FDA's response?

### 1e. Testing status (always ask)
- What non-clinical testing is planned or completed?
  (bench/mechanical, biocompatibility, sterility, packaging, software)
- Is a preclinical animal study planned or completed? If yes:
  - What animal model is proposed?
  - What are the primary endpoints?
  - What is the study duration?
- Is a clinical study planned or underway?
  - If yes: has SR/NSR determination been made under IDE rules?

### 1f. Risk profile (always ask for De Novo)
- What are the primary risks associated with the device?
- What mitigations are proposed for each risk?
- Have proposed special controls been identified?
  (For De Novo: special controls are the core of the classification grant)

### 1g. Meeting format preference (always ask)
- Written feedback only (FDA responds in writing, ~60 days)
- Teleconference request (for complex multi-part discussion — 90 min typical)
  - If teleconference: who will attend on behalf of the manufacturer?
  - Preferred meeting dates (provide 3 options)

### 1h. Software-specific (ask only if software is involved)
- Is the software standalone (SaMD) or embedded in a hardware device?
- Does it use machine learning or AI?
  - If yes: is the algorithm locked post-deployment or does it adapt?
- Has an IEC 62304 software safety class (A, B, or C) been determined?
- Is the device connected to a network or other devices?

---

## Step 2 — Pathway Intelligence

Based on intake, assess the proposed pathway before drafting questions.
Do not skip this step — pathway determines document structure and question set.

### 510(k) assessment
- Is a credible predicate device identifiable from the intake information?
- Are there technological characteristic differences requiring justification?
- Does the intended use differ from the predicate in any material way?
- Flag: If intended use or technological differences are substantial →
  De Novo may be more appropriate. State this clearly to the user.

### De Novo assessment
- Is this genuinely a novel device type with no appropriate predicate?
- Has a thorough predicate search been conducted and documented?
  (FDA expects: database searched, terms used, devices considered, basis
  for elimination of each — not just a conclusion that no predicate exists)
- What device class (II vs III) does the risk profile support?
  - Class II: general + special controls sufficient for safety/effectiveness
  - Class III: insufficient evidence that special controls would suffice
- What special controls would FDA likely consider for this device type?
  (performance testing, labeling, clinical follow-up, physician training)
- Flag: If a predicate likely exists → recommend 510(k) and explain why.

### Pathway unclear
- State explicitly: "The appropriate pathway is unclear based on available
  information. Make pathway determination the primary question for FDA."
- Do NOT structure the rest of the document as if the pathway is settled.

### Pathway disagreement handling
If the evidence suggests a different pathway than the manufacturer proposed:
- State the discrepancy and the regulatory basis for concern.
- Present both options with timeline and cost implications.
- Ask: "Would you like the Q-Sub to seek FDA's view on pathway, or proceed
  with the proposed pathway and focus questions on submission requirements?"

### Breakthrough Device Designation check
Assess eligibility. Flag if all of the following apply:
- Device is intended to treat/diagnose a life-threatening or irreversibly
  debilitating disease or condition
- AND at least one of:
  (a) Represents breakthrough technology
  (b) No approved/cleared alternative exists
  (c) Offers significant advantages over existing alternatives
  (d) Device availability is in the best interest of patients
  (e) The device contributes to the detection/prevention of life-threatening
      or irreversibly debilitating disease

If potentially eligible, ask: "Would you like to include a BDD consideration
section in this Q-Sub to seek FDA's preliminary feedback on eligibility?
Note: A formal BDD request will require a separate, subsequent Q-Sub."

→ If yes: include BDD Consideration as a subsection of Regulatory Pathway
  and add one BDD question in the question set.
→ If filing a formal BDD request: read references/breakthrough-device.md

### Study Risk Determination flag
If a clinical study is planned and SR/NSR has not been determined:
Flag in output: "A Study Risk Determination Q-Sub may be needed before
your clinical study begins. This is a separate Q-Sub type — flag for your
clinical team to address in parallel with this Pre-Submission."
Do NOT draft the Study Risk Determination itself.

---

## Step 3 — Question Generation

The core strategic value of the skill. Generate a prioritised, tactically
sound question set. Hard limit: maximum 6 questions. Ideal: 5.

### The confirmatory question strategy
Real Q-Sub questions are typically confirmatory, not open-ended. The
manufacturer takes a clear position, presents supporting rationale in the
document body, then asks FDA to agree — or to state any concerns.

This is intentional: it forces FDA to engage with a specific position rather
than giving a generic answer. It also demonstrates regulatory competence.

Structure: "Based on [what we've presented in Section X], does FDA agree
that [our position]? If FDA has any concerns, please identify them."

This is more effective than: "What does FDA think about our pathway?"

### Question quality rules
- Every question must unlock a specific decision the manufacturer needs to make
- Questions must reference the relevant Q-Sub section for supporting context
- Never ask a question whose answer is already clearly established in guidance
- Never ask compound questions — one question per numbered item
- Questions that are purely administrative (meeting dates, etc.) do not
  count toward the 6-question limit
- Prioritise: (1) pathway-determining, (2) classification/special controls,
  (3) testing strategy (bench, animal, clinical), (4) IFU/labeling,
  (5) BDD eligibility

### Question output format (for each question)
Present to user in two parts:

**Part A — The Q-Sub question (goes into the document)**
Precisely worded, begins with context reference, uses confirmatory framing,
ends with "If FDA has concerns, please identify them" where appropriate.

**Part B — Strategic metadata (shown to user, NOT in Q-Sub document)**
- Rationale: Why this question matters to the regulatory strategy
- Decision unlocked: What the manufacturer decides once FDA answers
- Risk if vague: What goes wrong if FDA gives a non-committal answer
- Priority rank: 1 (highest) to 6

### Question types by pathway

**For De Novo Q-Subs (5 core questions):**
1. Pathway confirmation — De Novo vs 510(k), Class II vs III agreement
2. Special controls sufficiency — are proposed controls adequate?
3. Non-clinical testing strategy — bench testing plan and acceptance criteria
4. Preclinical animal study — model, endpoints, and duration sufficiency
5. Proposed IFU — does intended use statement align with indication and population?
+  BDD eligibility (optional 6th) — if BDD consideration section is included

**For 510(k) Q-Subs (5 core questions):**
1. Predicate suitability — does FDA agree the identified predicate is appropriate?
2. Substantial equivalence argument — technological characteristic differences
3. Performance testing standards — which standards and acceptance criteria apply?
4. Labeling and IFU — intended use statement and contraindications review
5. Clinical evidence requirement — is bench/preclinical data sufficient or
   is clinical performance data required?
+  Software/cybersecurity (optional 6th) — if software is involved

**Avoid these common question mistakes:**
- Asking FDA to confirm something already settled in guidance
- Asking "what do you recommend" without first presenting your position
- Combining pathway + testing into one question
- Asking about BDD formally within a pathway Q-Sub (flag for separate Q-Sub)

---

## Step 4 — Document Assembly

Assemble the full Q-Sub in the correct structure for the identified pathway.
The structure below reflects real-world De Novo Q-Sub format as filed with FDA.
For 510(k) Q-Subs, the Clinical Background section may be condensed unless
the device addresses a serious or life-threatening condition.

Read references/qsub-format-guide.md before assembling for length, tone,
and formatting rules.

---

### Part A — Cover Letter (separate from main document body)

The cover letter is a formal business letter addressed to the specific FDA
Division Director responsible for the device type — not a generic cover sheet.

**Cover letter must include:**
- Date
- Delivery method: "By Electronic Delivery"
- Full FDA address: Pre-Sub Document Control Center, WO66-G609, CDRH,
  10903 New Hampshire Avenue, Silver Spring, MD 20993-0002
- Attention line: [Division Director Name], [Division Name], [Office]
  NOTE: Research the correct FDA division for the device type. For surgical
  implants → Division of Health Technology. For software → DHTRI. For IVD →
  OHT7. If unsure, flag for user to verify before submission.
- Re: line — "Pre-Submission for a [De Novo/510(k)] Request for [Company]'s
  [Device Name]"
- Opening paragraph: purpose of the Q-Sub, device name, and the specific
  topics on which feedback is sought (1–2 sentences per topic)
- Statement of no prior interactions (if applicable)
- Brief overview of Q-Sub contents (2–3 sentences)
- Teleconference request with 3 preferred date/time options (if applicable)
- List of company attendees for the meeting
- Reference to where the proposed agenda appears in the document
- Reference to where the questions appear in the document
- Contact information for the submitter and primary regulatory contact
- Signature block with name, title, company, phone, email
- cc: line for company executives and regulatory consultants copied

---

### Part B — Main Q-Sub Document Body

**Table of Contents**
- Auto-generate from section headings below
- Include page numbers

**Section 1 — Clinical Background**
Include for: De Novo, novel device types, serious/life-threatening conditions
May condense for: 510(k) with established predicate in a well-understood area

Content:
- Disease or condition overview: definition, pathophysiology, epidemiology
- Current standard of care and its limitations
- Unmet clinical need — especially for "no-option" patient populations
- Clinical consequence of untreated disease (mortality, morbidity, amputation)
- Existing technologies and why they fall short (brief, non-disparaging)
- Scientific/mechanistic rationale for why this device could address the need
- Published literature supporting the clinical rationale (cite key references)

Length guidance: 3–6 pages for a novel De Novo device. 1 paragraph for
a well-understood 510(k) device type.

**Section 2 — Proposed Intended Use / Indications for Use**
- Draft intended use statement (explicitly flag as draft, seeking FDA comment)
- Indications for use statement (patient population, clinical setting,
  intended user, intended duration)
- What the device is NOT intended to do (scope limitations)

**Section 3 — Device Description**
Subsections:
- 3.1 [Device Name]: physical description, dimensions, materials, sizes/variants
- 3.2 [Accessory/Instrument Set] (if applicable): components and their functions
- 3.3 Technological Characteristics: table format, size offerings, materials,
  key design features with clinical rationale for each
- 3.4 Principles of Operation: how the device achieves its clinical effect
  (mechanism-level, not marketing language)
- 3.5 Mechanism of Action (if applicable): molecular or physiological basis
  for the device's therapeutic or diagnostic effect

For software devices: add subsection for software architecture, platform,
connectivity, algorithm description, and IEC 62304 classification.

**Section 4 — Overview of Non-clinical and Clinical Testing Plan**
Subsections:
- 4.1 Bench Testing: list of proposed tests by category
  (functional/mechanical, sterility/packaging, biocompatibility, usability)
  Include draft acceptance criteria where available. Note which tests are
  planned vs complete.
- 4.2 Preclinical Animal Testing (if applicable): study objective, animal
  model and rationale, study design (groups, n, duration), surgical procedures,
  assessments and timepoints, primary and secondary endpoints, statistical plan,
  rationale for model relevance to intended clinical population
- 4.3 Proposed Clinical Study (if applicable): brief overview of planned study
  design, endpoints, and patient population. Note if full protocol will be
  provided in a future Q-Sub.

**Section 5 — Regulatory Pathway**
Subsections:
- 5.1 Classification Summary: proposed classification (Class I/II/III),
  proposed submission type (510(k)/De Novo/PMA), rationale
- 5.2 Predicate Evaluation (required for both 510(k) and De Novo):
  - Databases searched and search terms used
  - Devices identified and considered
  - For 510(k): basis for substantial equivalence claim
  - For De Novo: systematic elimination of each potential predicate with
    specific regulatory basis (different IFU, different tech characteristics,
    different risk class) — reference actual 510(k)/PMA/De Novo numbers
- 5.3 Breakthrough Device Designation Consideration (if applicable):
  - Disease severity and unmet need argument
  - Which of the four statutory criteria the device satisfies
  - Comparison to existing BDD precedents in the disease area
  - Note that formal BDD request will be filed in a subsequent Q-Sub

**Section 6 — Risk and Mitigation Measures / Proposed Special Controls**
Required for De Novo. Include for 510(k) when novel risks are present.

Format: table with three columns:
| Identified Risk | Recommended Mitigation Measures | Testing Details/Rationale |

Risks to address: device failure modes, tissue reaction, infection, mechanical
failure, adverse clinical outcomes, user error, labeling risks.

For De Novo: frame mitigations as proposed special controls that would form
part of the classification regulation if De Novo is granted.

**Section 7 — Regulatory History**
If no prior interactions: "There have been no prior discussions or submissions
regarding this device."
If prior interactions: list each with date, submission number, and outcome.

**Section 8 — Meeting Format**
- 8.1 Mechanism for Feedback: state whether written feedback or teleconference
  is requested. If teleconference: list 3 preferred dates and time windows
  with timezone.
- 8.2 Company Attendees: list name and title of each attendee
- 8.3 Proposed Agenda:
  I. Introduction
  II. Device Description
  III. Discussion regarding FDA feedback to the questions posed
  Note: "Please note this agenda will be finalised based on the content
  of the FDA written feedback."

**Section 9 — Questions for FDA**
- Numbered sequentially, 1 through N (maximum 6)
- Each question preceded by 2–3 sentences providing context and referencing
  the relevant section of the Q-Sub
- Use confirmatory framing (see Step 3 — Question Generation)
- Questions in priority order
- For teleconference: add estimated discussion time per question

**Appendices** (as needed)
- Appendix A: Preclinical animal study outline/protocol
- Appendix B: Draft labeling or IFU excerpts
- Appendix C: Preliminary bench or clinical data summaries
- Appendix D: Key published literature (if not cited inline)
- Appendix E: Proposed special controls detail (if too long for Section 6)

---

### Persona-specific assembly rules
- **Persona A**: Full regulatory citations in Section 5. Formal language
  throughout. Reference FDA Q-Sub guidance (January 2023) explicitly in
  cover letter.
- **Persona B**: After final Q-Sub document, produce a separate internal
  strategy note summarising: the rationale behind each question, anticipated
  FDA responses (best case / likely / worst case), and recommended client
  preparation for the teleconference.
- **Persona C**: After each section, add a plain-language sidebar explaining
  what the section does and why FDA needs it. In Section 9, add a note after
  each question explaining what a specific vs vague FDA answer means for
  next steps.

---

## Step 5 — Anticipation Layer

After assembling the document, run an FDA perspective check.
Present as a separate block labeled: **"FDA Anticipation Analysis — For
Internal Use Only. Do not include in Q-Sub submission."**

### What to surface

**Likely FDA questions back to you**
Based on the device and pathway, what will FDA probe in their written response
or on the teleconference call? The manufacturer should have answers ready for:
- Evidence basis for the proposed special controls
- How the clinical study endpoints relate to the intended use claim
- Patient selection criteria and how "no-option" is defined and documented
- Device removal procedure and associated risks (for temporary implants)
- Comparability to existing cleared devices even if not claimed as predicate

**Likely areas of FDA pushback**
Common FDA challenges for this device type or pathway:
- IFU too broad — FDA frequently narrows intended use at the submission stage
- Special controls not sufficiently specific — "clinical performance testing"
  alone is insufficient; FDA expects acceptance criteria and study parameters
- Animal model relevance questioned — FDA may not accept a model that doesn't
  reflect the intended clinical population
- Confirmatory questions that are too broad — FDA may respond "we would need
  to review the full submission to comment"

**Missing context flags**
Flag if the assembled Q-Sub is missing any of:
- Predicate search methodology (not just conclusion — FDA expects the search)
- Acceptance criteria for proposed bench tests (ranges, standards, pass/fail)
- Clinical study endpoints tied to the IFU claim
- Physician training or use-related risk addressed in special controls
- Biocompatibility rationale (contact type, duration, ISO 10993 tests)
- Cybersecurity posture (for connected devices)
- Software documentation framework (for software devices)

**Question framing flags**
Review each question and flag if:
- The question is open-ended when a confirmatory structure would be stronger
- The question can be answered by citing existing FDA guidance — remove it
- Two questions could be combined without losing specificity — flag the option
- A question asks about BDD formally in a pathway Q-Sub — flag for separate
  Q-Sub, but note that preliminary BDD feedback within the Q-Sub is acceptable

**Timing flags**
- Are key design decisions already locked that FDA feedback could have changed?
- Does the target submission date allow sufficient time to incorporate FDA's
  written response (typically 60 days for written feedback)?
- Is a teleconference appropriate, or would written feedback suffice?

---

## Step 6 — Confidence and Citation Output

Every Q-Sub output must end with this footer block:

```
SKILL OUTPUT METADATA
Generated: [date]
Reference documents used:
  - FDA Guidance: Requests for Feedback and Meetings for Medical Device
    Submissions (Q-Submission Program), January 2023
  - [additional documents with publication dates]
Confidence: [High / Medium / Low]
  → High: sufficient device, pathway, and clinical context provided
  → Medium: one or more intake fields were incomplete — see flags above
  → Low: insufficient information to produce a reliable Q-Sub draft
Limitation: This output is AI-assisted regulatory drafting for informational
purposes. It does not constitute legal or regulatory advice. All outputs
must be reviewed by a qualified Regulatory Affairs professional before
submission to FDA.
```

---

## Reference Files

| File | When to read |
|------|-------------|
| references/qsub-format-guide.md | Before Step 4 — for length, tone, and formatting |
| references/fda-qsub-guidance-jan2023.md | For process, timelines, and FDA commitments |
| references/510k-program-guidance-2019.md | When pathway is 510(k) |
| references/de-novo-guidance-2021.md | When pathway is De Novo |
| references/breakthrough-device.md | When BDD formal request branch is triggered |
| references/device-software-functions-2023.md | When software is a primary function |
| references/cybersecurity-guidance-2023.md | When device has network connectivity |
| references/iso-10993-biocompatibility.md | When biocompatibility testing questions arise |

---

## Edge Case Handling

| Situation | Skill behaviour |
|-----------|----------------|
| Vague device description | Ask 3 targeted clarifying questions. Do not draft until device function and clinical context are clear. |
| Manufacturer proposes wrong pathway | State discrepancy with regulatory basis, present both options with implications, ask for direction before proceeding. |
| Too many questions identified | Generate all candidates with priority scores, trim to 6 by priority rank, show user the cut questions with explanation. |
| Q-Sub timing too late for a question | Flag the locked decision. Recommend replacing the question with one that addresses something still actionable. |
| Combination product elements detected | Flag: "Recommend separate OCP consultation before or alongside this Q-Sub. Note combination product status in cover letter." |
| Software with adaptive AI | Flag PCCP requirement. Add PCCP scope question to the question set if not already present. |
| Cybersecurity not addressed | Flag in Anticipation Layer. Add brief cybersecurity posture statement to Section 3 device description. |
| BDD consideration requested within pathway Q-Sub | Include BDD Consideration subsection in Section 5. Add one BDD question in Section 9. Note formal BDD request will follow in separate Q-Sub. |
| No prior predicate search conducted | Flag: Q-Sub cannot be completed without a predicate search. Provide search methodology guidance and defer drafting until search is complete. |
| Preclinical study not yet designed | Note in Section 4 that the study protocol will be provided in a future Q-Sub. Ask one question in Section 9 about FDA's expectations for the animal model. |
| Clinical study SR/NSR undetermined | Flag Study Risk Determination Q-Sub needed. Add to anticipation layer. Do not draft SR/NSR determination. |
