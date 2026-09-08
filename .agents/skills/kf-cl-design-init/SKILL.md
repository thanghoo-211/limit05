---
name: kf-cl-design-init
description: "Interview a student to produce the Claude Design hand-off bundle: DESIGN.md (the file Claude Design actually consumes, 9-section Stitch format with locked tokens), PRODUCT.md (upstream strategy context), and an UPLOAD manifest. Use when the user wants to set up design context for Claude Design, create or refresh DESIGN.md / PRODUCT.md, or prepare visual input for a new product from an idea, optionally warm-starting from an existing site via context.dev. Triggers: 'kf-cl-design-init', 'khởi tạo context cho Claude Design', 'chuẩn bị input cho Claude Design', 'tạo DESIGN.md và PRODUCT.md', 'làm brief thiết kế để đưa lên Claude Design'. Not for: generating the design system itself (Claude Design does that downstream), coding or reviewing UI, product brainstorming, or full brand guidelines."
argument-hint: "[both|product|design|refresh]"
license: Apache-2.0
metadata:
  version: "1.0.0"
  author: "kf-create-skill by Hưng Kescy - hungkescy.com"
---
<!-- Changelog:
1.0.0 (2026-07-23) — versioning baseline (lazy migration): version/author/changelog frontmatter added; no content change. -->

Interview a student (starting from an idea, or with an existing site/brand) and produce a **Claude Design hand-off bundle**. Teaching skill for the "Teamwork với AI" class. Interview in Vietnamese; reason in English.

**Claude Design has two stages, and the bundle splits across them:** (1) **create the design system** — upload **DESIGN.md** + logo + brand images + all fonts; Claude Design scaffolds the whole system in one shot. (2) **design screens in the project** — this is where **PRODUCT.md** (strategy) goes, as context so the screens fit the product and its users. DESIGN.md is the primary artifact; PRODUCT.md is NOT part of design-system creation.

Method — the invariant: **direction in words first, numbers by eye second.** Never ask a student for raw hex/font/radius; capture feeling, build specimens, lock tokens from the chosen build. Readability is non-negotiable; the palette vibe is the student's call.

## Inputs
- Argument (default `both`).
- A student to interview. Optionally: an existing/admired site URL, a logo, font files.

## Outputs (bundle, at project root)
1. `PRODUCT.md` — strategy.
2. `DESIGN.md` — 9-section Stitch format, tokens locked. The consumed artifact.
3. `design-explore.html` — one file, 3 style-family tabs, by-eye lock.
4. `UPLOAD.md` — what to upload to Claude Design vs keep.

## Startup — route by argument + existing files
Check project root for `PRODUCT.md` / `DESIGN.md` (files always live at project root — no configurable location). Then:

| Argument / state | Action |
|---|---|
| `both` (default), no files | Phase 1 → Phase 2 → handoff |
| `product` | Phase 1 only; then offer Phase 2 |
| `design` | Phase 2 only; requires PRODUCT.md (else run Phase 1 first) |
| `refresh` or a target file exists | Ask which to redo; **never overwrite without asking** |

If the student mentions an existing or admired site, a logo, or brand assets → read `references/reference-warmstart.md` before Phase 2 (it may inherit some knobs and shorten the visual interview).

## Read-when table
| File | Read when |
|---|---|
| `references/phase1-product.md` | Running `both`/`product` — the PRODUCT.md interview |
| `references/phase2-design.md` | Running `both`/`design` — visual interview, specimen, DESIGN.md |
| `references/reference-warmstart.md` | Student has/admires a site, logo, or brand assets |
| `references/design-md-format.md` | Writing or validating DESIGN.md |
| `references/vn-fonts.md` | Choosing fonts (Vietnamese-subset filter) |
| `assets/corpus/*.csv` | Grounding palettes / font pairs / styles |
| `assets/templates/*` | Filling each artifact (never improvise structure) |

## Steps
1. **Phase 1 → PRODUCT.md.** Follow `references/phase1-product.md`; fill `assets/templates/PRODUCT.md`. Done when every section is filled or `N/A — <reason>`, ≥1 real student answer captured, and the student confirms the `[DRAFT]`.
2. **Phase 2 → specimen → DESIGN.md.** Follow `references/phase2-design.md`; fill `assets/templates/specimen.html` → `design-explore.html`, then `assets/templates/DESIGN.md` → `DESIGN.md`. Done when all specimen contrast pairs PASS before the student sees them, the student picks by eye, and DESIGN.md is locked from the chosen build per `references/design-md-format.md`.
3. **Handoff.** Fill `assets/templates/UPLOAD.md` → `UPLOAD.md`, listing every produced/gathered file in the right bucket. Tell the student, in one message, what to upload to Claude Design and what to keep. Remind them they can re-run this skill anytime to refresh either file.

## Quality gate
Before handoff, spawn an independent subagent to check the bundle against the DoD below (fresh read, no access to the interview). Fix every finding or justify it.

## Done when
`PRODUCT.md` (all sections or justified N/A, Register a bare value) · `DESIGN.md` (frontmatter `version` + locked hex sRGB + VN-safe font + rounded + spacing + ≥1 component; 9 body sections in order; every PRODUCT.md anti-reference verbatim in Don'ts; Motion marked non-spec) · `design-explore.html` (3 distinct families, all contrast PASS) · `UPLOAD.md` (DESIGN.md flagged primary) · nothing overwritten without asking.

## Invariants
- PRODUCT.md = strategy only; DESIGN.md = visual only.
- One cluster at a time; each question carries a recommended answer + why; never silently fill a gap.
- DESIGN.md targets the current open-source Stitch spec; Motion is the only sanctioned extension, labeled as such. If the live Stitch spec or context.dev drifts, trust the live source and tell the student.
