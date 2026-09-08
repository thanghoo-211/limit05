# DESIGN.md format — Stitch spec (9 sections)

Read when: writing or validating DESIGN.md.

Source of truth: the open-source Stitch spec `google-labs-code/design.md` → `docs/spec.md` (8 sections + `version` frontmatter). We add ONE sanctioned extension — a `Motion` section — labeled as non-spec. Total 9 body sections. If the live spec drifts, trust it and update this file.

DESIGN.md is the artifact Claude Design consumes. Frontmatter is normative (machine-read tokens); the body is human rationale. Never redefine a token value in prose that contradicts frontmatter.

## Frontmatter (YAML)

```yaml
---
version: alpha              # required; spec opens with this
name: <Project Name>
description: <one-line tagline>
colors:
  primary: "#1A1C1E"        # hex sRGB: #RGB / #RGBA / #RRGGBB / #RRGGBBAA
  secondary: "#6C7278"
  accent: "#B8422E"
  background: "#FFFFFF"
  foreground: "#1A1C1E"
  # add roles as needed (card, muted, border, ring, destructive...)
typography:
  h1:
    fontFamily: "Public Sans"
    fontSize: "48px"        # Dimension: px / em / rem
    fontWeight: 600
    lineHeight: 1.1         # Dimension or unitless number
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"   # token ref = {path.to.token}
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
---
```

Rules:
- `version` is required. Locked hex in sRGB (Stitch validates). Token refs use `{path.to.token}`.
- **Color role keys:** lowercase for core roles (`primary`, `secondary`, `accent`, `background`, `foreground`, `card`, `muted`, `border`, `ring`, `destructive`). For a text-on-surface color use the `onX` form (`onPrimary`, `onAccent`) or a `xForeground` pair (`mutedForeground`). Be consistent within the file.
- Component sub-tokens stay within: `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`.
- Font families MUST be Vietnamese-subset safe (see `vn-fonts.md`).

## Body — 9 sections, exact names, exact order

1. `## Overview` — Creative North Star (one metaphor) + 2-3 sentences on personality/density/aesthetic philosophy. End with **Key Characteristics:** bullets. Fold the PRODUCT.md register + anti-references in.
2. `## Colors` — one-sentence palette description, then per role: **Named color** (#HEX): where/why used. Optional **Named Rules** (`**The <Name> Rule.** <doctrine>`).
3. `## Typography` — Display font + Body font (with fallback), 1-2 sentences on the pairing's character, then hierarchy: **Level** (weight, size, line-height): purpose.
4. `## Layout` — grid/columns, container widths, density, breakpoints if any. Spatial rhythm from the spacing scale.
5. `## Elevation & Depth` — shadows vs tonal layering; if flat, say so explicitly.
6. `## Shapes` — corner language (from `rounded`), border style, geometric motifs (pill/sharp/organic).
7. `## Motion` — **`<!-- NON-SPEC EXTENSION: not in the Stitch spec -->`** — motion energy (restrained / responsive / choreographed) + which interactions animate. Keep short; a strict DESIGN.md linter ignores/rejects this section, which is fine.
8. `## Components` — Buttons (shape, primary, hover/focus), Cards/Containers (corner, background, border), Inputs/Fields (stroke, background, focus). Only components that exist.
9. `## Do's and Don'ts` — **Do:** specific prescriptions with exact values. **Don't:** specific prohibitions; every PRODUCT.md anti-reference appears here verbatim.

## Writing rules
- Voice is forceful: "prohibited", "never", "always" — not "consider", "might".
- Descriptive > technical: "Gently curved edges (8px radius)" > "rounded-lg".
- No section beyond these 9. No renaming. No inventing components that don't exist.
- Every anti-reference from PRODUCT.md is present, verbatim, in Don'ts.
