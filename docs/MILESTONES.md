# Milestones: Per-project detail pages with diagrams

Goal: every project card links to its own page (`/projects/[slug]`) with a fuller
write-up and at least one diagram, instead of only the card blurb.

## Key decisions (so milestones don't re-litigate them)

- **Routing:** `app/projects/[slug]/page.tsx`, static-generated via `generateStaticParams`
  from `projectsData`. Slug is a new field on each `projectsData` entry (kebab-case).
- **Content format:** plain TSX, not MDX. No `@next/mdx`/remark/rehype dependency —
  this is 13 hand-written pages, not a blog; MDX tooling is unjustified weight on a
  memory-constrained box that's already shown build OOMs this session. Per-project
  long-form body lives in `content/projects/<slug>.tsx`, each exporting a React
  component. Missing content file → page falls back to a generic template built from
  existing `data.ts` fields (title/description/tags/links/image).
- **Diagrams:** inline SVG, hand-authored per project, embedded directly in that
  project's content component. No Mermaid/diagram-library dependency — zero JS cost,
  themeable with `currentColor`/CSS vars for light/dark, consistent with how the rest
  of the site is built (Tailwind + framer-motion, no other viz libs).
- **Depth tiers**, so this ships incrementally instead of as one 13-project mega-task:
  - **Tier 1** (richest source material already pulled from GitHub READMEs this
    session, highest resume relevance): Universal Adaptive Trainer, NAT & NAT-LLM,
    MyThinker, Flowr.
  - **Tier 2** (real published/working systems, lighter write-up): RAFT, ROBB,
    Sharebike, Multimodal KD for VQA, Traffic Anomaly Detection.
  - **Tier 3** (older/smaller projects — ERP, Upay, Bangla Grapheme, Food
    Recommender, RL Trading): generic template only, no bespoke write-up/diagram
    unless requested later.
- **Build hygiene:** `next build` on this machine OOMs if orphaned Next worker
  processes pile up from prior killed builds — kill any `node.exe` with
  `FInalPorofolio\portfolio` in its command line before each build if a previous one
  was interrupted.

---

## m1 — Routing skeleton: every project gets a real page

**Deliverable:** clicking any of the 13 project cards navigates to `/projects/<slug>`
and shows a real page (title, full description, tags, links, image if present) instead
of a 404. No new written content yet — this milestone is the plumbing.

**Acceptance criteria**
- [ ] Every `projectsData` entry has a unique `slug` field.
- [ ] `app/projects/[slug]/page.tsx` exists, uses `generateStaticParams`, renders the
      generic template for any slug in `projectsData`.
- [ ] `generateMetadata` sets a per-project `<title>`/description (cheap SEO win,
      no extra milestone needed for it).
- [ ] Each card in `components/project.tsx` links to its detail page (whole card or an
      explicit "View project" affordance) without breaking the existing external links
      (GitHub/paper/store links must still open externally, not intercept the card
      click).
- [ ] Unknown slug renders Next's `notFound()` (404), not a crash.
- [ ] `next build` succeeds and lists 13 static `/projects/*` routes.

**Validation**
- `npx next build` — confirm 13 `/projects/[slug]` routes in the output route table.
- `npx next start`, click through all 13 cards from `/#projects`, confirm each lands on
  its own page with correct title/description and working external links.
- Visit `/projects/does-not-exist` → 404 page, not an error screen.

**Touches:** `lib/data.ts` (add `slug`), `app/projects/[slug]/page.tsx` (new),
`components/project.tsx` (link wiring).

**Not in this milestone:** any bespoke long-form content, diagrams, or per-project
layout variation — every page looks identical except for its data.

---

## m2 — Tier 1 case studies: content + diagram for the 4 flagship projects

**Deliverable:** Universal Adaptive Trainer, NAT & NAT-LLM, MyThinker, and Flowr each
have a real write-up (pipeline/architecture explanation, not just the card blurb) and
one inline-SVG diagram, visible on their `/projects/<slug>` page.

**Acceptance criteria**
- [ ] `content/projects/{universal-adaptive-trainer,nat-nat-llm,mythinker,flowr}.tsx`
      exist, each exporting a body component consumed by the `[slug]` page.
- [ ] Each has one diagram relevant to that project:
      - UAT: ingestion → retrieval-grounded generation → evaluation → adaptive
        delivery pipeline.
      - NAT & NAT-LLM: the adaptive loop (performance/weakness/cognitive-load →
        activity selection → NAT-LLM feedback).
      - MyThinker: single-agent tool-selection-as-router + precondition gate flow
        (propose → authorize → commit).
      - Flowr: audio pipeline (hotkey → VAD → local ASR → optional local-LLM cleanup →
        insert into focused app).
- [ ] Diagrams render legibly in both light and dark theme (no hardcoded colors that
      vanish against either background — the RAFT card's low-contrast screenshot from
      the last session is the failure mode to avoid).
- [ ] `[slug]` page falls back to the m1 generic template for any project without a
      content file (verifies the fallback still works after this milestone).

**Validation**
- `npx next build`, then visually check all 4 pages in both light and dark mode
  (toggle via the site's existing theme switch).
- Confirm a Tier 2/3 project (e.g. `/projects/sharebike`) still renders the m1 generic
  template unchanged.

**Touches:** `content/projects/*.tsx` (new, 4 files), `app/projects/[slug]/page.tsx`
(wire content lookup + fallback).

**Not in this milestone:** Tier 2 or 3 projects, any shared "diagram component
library" abstraction — four hand-built SVGs, not a framework.

---

## m3 — Tier 2 case studies: content + diagram for 5 more projects

**Deliverable:** RAFT, ROBB, Sharebike, Multimodal KD for VQA, and Traffic Anomaly
Detection get the same treatment as m2 — real write-up + one diagram each.

**Acceptance criteria**
- [ ] `content/projects/{raft,robb,sharebike,multimodal-kd-vqa,traffic-anomaly}.tsx`
      exist with a write-up and one diagram each:
      - RAFT: rule-based difficulty-adjustment loop (precursor to NAT).
      - ROBB: RL agent ↔ blockchain block-formation environment loop.
      - Sharebike: mobile app ↔ Spring Boot fleet backend ↔ Pub/Sub ingestion, showing
        the mobile/backend split the CV describes as two efforts.
      - Multimodal KD for VQA: teacher → {logit, attention, hidden-state, hybrid}
        distillation → student comparison.
      - Traffic Anomaly: sensor data → MLflow/DVC tracked pipeline → FastAPI/Docker
        serving → Prometheus/Grafana monitoring.
- [ ] Same dark/light legibility check as m2.

**Validation:** same as m2, applied to these 5 pages.

**Touches:** `content/projects/*.tsx` (5 new files).

**Not in this milestone:** Tier 3 projects (ERP, Upay, Bangla Grapheme, Food
Recommender, RL Trading) — they stay on the m1 generic template unless you ask for
them later.

---

## Sequence

m1 → m2 → m3, each independently shippable and committable. **m1 is active.**
Run `start m1` to begin.
