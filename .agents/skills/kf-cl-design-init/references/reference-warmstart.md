# Reference warm-start (context.dev)

Read when: the student has a website/brand already, OR admires an existing site, OR has a logo/brand assets. Runs before/within Phase 2 Step 1.

Goal: warm-start the visual direction from a real site instead of a blank interview — without lifting a design wholesale or shipping an unreadable/off-brand result.

## Ask first
"Có website hay trang nào bạn muốn theo hoặc học hỏi thiết kế không?" Then classify:
- **Own brand** — the student owns the site/logo/brand. Their identity to preserve.
- **Admired reference** — someone else's site, for direction only. NOT the student's brand.
- **None** — skip this file; run the full Phase 2 direction interview.

## Extract with context.dev
For ANY URL (own or admired), send it to the **context.dev design-md-generator**:
`https://www.context.dev/free-tools/design-md-generator`
It returns a DESIGN.md for that page. Use it — no need to save HTML or screenshot the site. If the tool/URL has changed, trust the live tool and tell the student.

The extract is a REFERENCE, never the final file. Its sections/frontmatter may differ from our 9-section Stitch shape (`design-md-format.md`). Normalize: pull its hex / font families / radius / spacing → seed our DESIGN.md frontmatter DRAFT → flag anything missing or renamed. It still passes through Phase 2's by-eye confirm + contrast gate before we write our DESIGN.md.

## Degree of follow (4 knobs)
Ask how much to inherit vs re-explore. Each knob maps to DESIGN.md sections:
| Knob | Inherits |
|---|---|
| `color` | Colors + color-bearing component tokens |
| `type` | Typography |
| `spacing` | spacing tokens + Layout density |
| `style` | Layout + Elevation & Depth + Shapes + Components + Motion |

Inherited knobs are held FIXED; re-explored knobs go through the Phase 2 specimen (which varies only those). Follow-all (nothing re-explored) → no 3-family build; confirm the extract by eye, contrast-check, lock.

## Own brand vs admired — different asset handling
- **Own brand:** gather the student's real logo + font files. VN-safe font check still applies. These assets go into UPLOAD.md Stage 1 (logo, brand images, and all fonts are uploaded when creating the design system).
- **Admired reference:** do NOT copy their logo or fonts wholesale — IP, and it is not the student's brand. Inherit vibe/structure only. The student still needs their OWN identity; if they have no logo, note it in UPLOAD.md. The extract is carried only as clearly-labeled inspiration, never as the student's asset.

## Contrast still gates
Inherited colors are not exempt. Run the contrast pre-gate (Phase 2 Step 4) on the inherited palette too; fix or swap on FAIL before showing.
