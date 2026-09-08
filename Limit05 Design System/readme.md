# Limit05 Design System

**Limit05** is a Vietnamese direct-to-consumer gear brand. It sells one product: a technical
ripstop sling bag ("túi đeo chéo sling") with a compartmentalised interior. Tagline: **"Không phải giới hạn"**
("Not a limit"). Brand personality: *Tự do — Khác biệt — Bền bỉ* (Free — Different — Durable).

The design register is **brand** — expressive is allowed — but every layout serves one
conversion: the "Mua ngay / Thêm giỏ hàng" button. The creative north star given in the source
spec: *"Trạm dừng chân giữa rừng — ánh sáng tự nhiên, ấm, nhưng gọn gàng như xưởng chế tác gear kỹ thuật."*
(A rest stop in the forest — natural, warm light, but as tidy as a technical-gear workshop.)

Style references: **Patagonia, Peak Design, Bellroy** — minimal gorpcore, practical, unshowy.
Explicit anti-references: ordinary office bags, Shopee/Lazada mass e-commerce, Chanel/LV luxury,
cartoon imagery, smiling/jokey imagery.

## Surfaces represented
One product surface only: a **sales landing page** (desktop-first, Vietnamese). There is no app,
no dashboard, no docs site, and no slide template in the supplied material — so this system
contains one UI kit and no slide set. Target user: office workers and freelancers aged 24–30 in
large Vietnamese cities who commute by motorbike.

## Sources used
All material came from a mounted local folder, `1. Version Claude 1/` (a "Claude Design hand-off bundle"):

| Source file | What it gave |
|---|---|
| `DESIGN.md` | **Primary spec.** Locked colour tokens, SVN-Gilroy type ramp with exact sizes/line-heights, 8pt spacing scale, radius scale, elevation values, motion notes, and component specs for button / card / input / badge. Reproduced faithfully in `tokens/`. |
| `PRODUCT.md` | Strategy: identity, users, purpose, brand personality, anti-references, design principles, accessibility target (WCAG AA). |
| `UPLOAD.md` | Hand-off manifest — told us which assets exist and that SVN-Gilroy is self-hosted, not Google Fonts. |
| `Limit05-DesignBundle.zip` | Contained `logo_edited.svg` (810×810 dragon mark), `design-explore.html` (the **confirmed** visual build with real embedded Gilroy and a passing WCAG AA contrast report), `Color_palette.md` (original token spec), and the full 20-weight SVN-Gilroy set. |
| `SVN-Gilroy *.otf` (5 weights) | The real webfonts, copied to `assets/fonts/`. |
| `product 1.png`, `product 2.png` | Real product photography. |

Kept for cross-reference in `reference/`: `design-explore.html` (the approved build — component
CSS values in `tokens/` were lifted from it verbatim) and `Color_palette.md`.

No Figma file, no GitHub repository, and no production codebase were supplied.

---

## CONTENT FUNDAMENTALS

**Language.** Vietnamese, always. Diacritics complete — this is why SVN-Gilroy (a Vietnamised cut)
is used rather than stock Gilroy. English appears only in technical nouns that Vietnamese buyers
use untranslated: *ripstop*, *sling*, *RFID*, *YKK*, *freelancer*.

**Person.** Second person **"bạn"** — never "quý khách" (too retail-formal), never "mình"
(too chummy). The brand refers to itself by name ("Limit05") or in the first-person plural
("chúng tôi") in support copy only.

**Register.** Serious, factual, quietly confident. The product spec says it plainly:
*giọng điệu nghiêm túc, không đùa giỡn, không cartoon.* Claims are physical and checkable —
grams, denier, number of compartments — not aspirational adjectives.

**Sentence shape.** Short declaratives, often a noun phrase followed by a consequence.
The signature move is a concrete analogy stated once and then dropped:

> "Mỗi món đồ, một ô cố định riêng."
> "Giống như một chiếc khay chia đồ chuyên dụng thu nhỏ luôn sẵn sàng trên lưng xe."
> "Rút ra dùng ngay, không sợ trầy xước hay ướt nước mưa bất chợt."

**Casing.** Sentence case everywhere — headings, buttons, labels, badges. No ALL-CAPS headlines.
The only uppercase is in eyebrow labels inside documentation, at 11px with 0.08em tracking.
The brand name is always written **Limit05** — capital L, no space, digits kept.

**Punctuation.** No exclamation marks. Em dashes and the "—" separator are used for asides.
Prices are Vietnamese-formatted with the currency last and a thin no-break space:
**590.000₫**, never "590,000 VND". Discounts read "Sale -20%".

**Emoji.** Never. Not in UI, not in marketing copy, not in badges. Nothing cartoon, nothing
smiling — this is an explicit brand don't.

**Button copy.** Verb-first and specific. "Mua ngay", "Thêm giỏ hàng", "Nhận mã", "Đặt hàng".
Never "Click here", "Submit", "Learn more" as a primary action ("Tìm hiểu thêm" is allowed, but
only on a ghost button).

**Urgency.** Permitted, but factual and bounded — "còn 12 suất", "miễn phí giao hàng cho đơn từ
500.000₫". Never fake countdowns or invented scarcity language.

---

## VISUAL FOUNDATIONS

### Colour
Six locked colours plus one added text-safe neutral. Allocation is governed by a strict
**60-30-10 rule**, and the spec is emphatic: *sức mạnh của accent đến từ sự khan hiếm* — the
accents only work because they are rare.

| Role | Name | Hex | Where |
|---|---|---|---|
| Canvas, 60% | Frost White | `#F4F8FA` | page background, all negative space |
| Card surface | Pure White | `#FFFFFF` | cards, inputs, drawers |
| Soft highlight, 30% | Glacial Ice Blue | `#D7EFFF` | hero block, announcement bar, card hover, icon tiles |
| Structure | Sage Mist | `#AEB8A0` | 1px borders, dividers, chips, inactive icons — **never text** |
| Secondary text | Muted Olive | `#5C6558` | captions, labels, body support |
| Primary action, 10% | Forest Juniper | `#2B4436` | every CTA, footer ground, card titles |
| Text anchor | Dark Pine Slate | `#192420` | all headings, body, prices |
| Accent, <5% | Terracotta Rust | `#D66847` | sale badges, cart count, focus rings |

Muted Olive is an **addition** to the original palette: Sage Mist measures ~2.1:1 on Frost White
and fails AA as text, so Muted Olive (≈5.9:1) takes over every text role. Terracotta Rust is
reversed-out white only at ≥18px or ≥14px bold. There are no gradients in this system — no
mesh, no bluish-purple sweep, no colour-to-transparent overlay except the one protection case below.

### Type
One family, five weights: **SVN-Gilroy** (self-hosted OTF) with VN-safe fallbacks —
`'Be Vietnam Pro'` for display, `'Noto Sans'` for body. Gilroy is geometric sans with slightly
softened terminals: modern and confident without grotesk coldness. Using one family across
display and body, differentiated only by weight, is deliberate.

- H1 — XBold 800, **56px / 1.08 / −0.02em** (hero uses `clamp(2.25rem, 5vw, 3.5rem)`)
- H2 — Bold 700, **36px / 1.15**
- H3 — SemiBold 600, **22px / 1.25**
- Body — Regular 400, **16px / 1.6**, measure capped at ~58ch
- Caption — Medium 500, **14px**, Muted Olive

Numerals in prices, quantities and spec tables run `font-variant-numeric: tabular-nums`.
Headings are Dark Pine Slate; card titles are the one heading exception and sit in Forest Juniper.

### Spacing & layout
Pure 8-point grid: **4 / 8 / 16 / 32 / 64**. Container maxes at **1200px**, centred. Section-to-section
rhythm is `64px`; heading-to-content is `32px`; sibling elements are `16px` apart. Density is
deliberately low — whitespace around product photography beats extra content. Desktop feature blocks
are a 2-column grid (image one side, copy the other, alternating); mobile collapses to one column.

Fixed/sticky elements: a translucent header (`rgba(244,248,250,.88)` + `blur(12px)`), a sticky
buy bar that slides up from the bottom after ~620px of scroll, and a right-hand cart drawer.
Nothing else is pinned.

### Backgrounds & imagery
No patterns, no textures, no illustrations, no full-bleed photographic heroes. Backgrounds are flat
colour: Frost White canvas, Glacial Ice Blue blocks at `24px` radius for the hero and callouts,
Forest Juniper for the footer. Photography is **real product photography only** — cool grey-sage
subject in warm neutral surroundings, natural window light, no studio gloss, no grain or film
filter, no lifestyle models mugging at the camera. The weave of the ripstop and the zip pulls must
be legible at 1×; material is the argument. Images sit in `16px`-radius containers with the card
shadow, and are never tinted or duotoned.

### Corners
Nothing is square. `8px` buttons/inputs/chips, `16px` cards and image containers, `24px` hero and
large section blocks, `999px` badges and pills. The reason is material: soft technical fabric, not
machined metal.

### Cards
White on Frost White, `16px` radius, `0 4px 16px rgba(25,36,32,.08)` shadow. A `1px` Sage Mist
hairline is available but is the exception — used only where cards sit edge-to-edge and the shadow
alone can't separate them. No coloured left-border accents. No card ever carries a gradient.

### Elevation & shadow
Soft layering, never flat and never glossy. Every shadow is tinted with the text anchor
(`rgba(25,36,32,…)`) rather than pure black, so shadows stay in the same green-grey family as the ink.
Four levels only: card `0 4px 16px/.08`, button `0 2px 6px/.18`, button-hover `0 4px 10px/.22`,
raised (sticky bar, drawer, modal) `0 8px 28px/.10`. No inner shadows anywhere; inputs are defined
by border, not by inset.

### Transparency & blur
Used in exactly three places, all of them fixed chrome: the header, the sticky buy bar
(`rgba(255,255,255,.94)` + `blur(12px)`), and the modal/drawer scrim (`rgba(25,36,32,.35)` +
`blur(2px)`). Content surfaces are always fully opaque. The system uses **capsules, not protection
gradients** — text over photography sits in a solid card or a pill, never on a fade-to-dark overlay.
The single exception is the logo over photography, which takes a `drop-shadow` rather than a scrim.

### Motion
Choreographed and scroll-driven at the macro scale; instant at the micro scale. Sections fade and
slide in as they enter, product images may take a subtle parallax, and figures (price, badges) may
appear in sequence. Reveals run `.6s` on `cubic-bezier(.16,.84,.44,1)`. Micro-interactions get
`.15s ease` and nothing more — no bounce, no spring, no scale-in on hover. Chrome (drawer, buy bar)
transitions at `.25s`. Never animate anything that delays a purchase decision.

### Hover, focus, press
- **Hover (filled buttons)** — `filter: brightness(1.08)` plus one step deeper shadow. The colour is
  never swapped for a different hex.
- **Hover (ghost buttons, cards)** — background fills with Glacial Ice Blue.
- **Focus** — `outline: 3px solid #D66847` at `2px` offset on buttons; inputs use `2px` outline and
  turn their border Terracotta Rust. Focus is the one place the accent appears on every screen.
- **Press** — settles rather than shrinks: shadow drops back to the rest value and brightness returns
  to 1. No transform, no scale-down.
- **Disabled** — `opacity: .45`, `cursor: not-allowed`, colour unchanged.

### Borders
One width, one colour: `1px solid #AEB8A0`. Dividers inside cards use the same value. Structural
alpha lines on translucent chrome use `rgba(25,36,32,.08)` so they don't read as sage against blur.

---

## ICONOGRAPHY

**The supplied sources contain no icon set** — no icon font, no SVG sprite, no PNG icons. `DESIGN.md`
and the confirmed `design-explore.html` build define type, colour, spacing and four components, and
nothing else. The brand does not use emoji (explicit don't) and does not use Unicode characters as
icons.

**Substitution — please confirm or replace.** Where the UI kit needs glyphs (cart, close, check,
quantity stepper, feature tiles) it loads **Lucide 0.469.0 from CDN**
(`https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js`, used as `<i data-lucide="shopping-bag">`).
Lucide was chosen because its 2px round-cap open-stroke drawing matches the technical-outdoor,
unornamented register of the brand and sits correctly next to Gilroy's softened terminals. Rules
applied: 24px nominal size (18–22px inline), `currentColor`, Forest Juniper on light grounds,
Sage Mist for inactive states, never Terracotta except inside a badge. Icons are never used
decoratively at large sizes and never carry meaning alone — always paired with a label.

**Brand mark.** The one real graphic asset is the Limit05 **dragon mark**, supplied as
`logo_edited.svg` (810×810; internally four base64 PNG layers combined through SVG filters, so it is
raster, not vector). Because that SVG is ~1MB and does not decode in most raster pipelines, it was
flattened into transparent PNGs — see the asset table below. The supplied artwork has a
**pure-red (#FF0000) eye**, which is outside the locked palette; the `forest` and `white` variants
recolour it to Terracotta Rust. Minimum mark height is 24px, below which the tail hairline breaks up.

---

## Components

The inventory is exactly what the sources define — `DESIGN.md` specs buttons, cards/containers,
inputs/fields and an accent badge; `design-explore.html` adds the ghost button and the outline chip.
Nothing else was invented.

| Component | Directory | Notes |
|---|---|---|
| `Button` | `components/core/` | primary / ghost / accent; sm-md-lg; disabled; static focus ring |
| `Badge` | `components/core/` | accent / primary / tint pill |
| `Chip` | `components/core/` | Sage Mist outline feature pill, active state |
| `Card` | `components/core/` | white or tint, optional hairline, optional Forest Juniper title |
| `Field` | `components/core/` | label-above input with Terracotta focus |
| `BrandMark` | `components/brand/` | **Intentional addition** — the mark ships as an image, not a component; every surface needs a lockup, so it is wrapped here with tone/size/wordmark props. |

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills front matter for use in Claude Code.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` (5 `@font-face` rules), `colors.css`, `typography.css`, `spacing.css`,
`radius.css`, `elevation.css`, `motion.css`, `semantic.css` (author against the semantic aliases).

**`components/`** — `core/` (Button, Badge, Chip, Card, Field + `core.card.html`),
`brand/` (BrandMark + `brand.card.html`). Each component has `.jsx`, `.d.ts` and `.prompt.md`.

**`ui_kits/landing/`** — the interactive landing-page recreation. See its own `README.md`.
Entry: `index.html`.

**`guidelines/`** — 19 specimen cards rendered in the Design System tab, grouped Colors / Type /
Spacing / Brand.

**`assets/`**
| File | What |
|---|---|
| `logo.svg` | The original supplied mark, unmodified (1MB, raster-in-SVG; slow to render) |
| `logo-mark.png` | Flattened, transparent, supplied colours (white body, red eye) |
| `logo-mark-forest.png` | Forest Juniper body, Terracotta eye — for light grounds |
| `logo-mark-white.png` | White body, Terracotta eye — for Forest Juniper grounds |
| `product-1.png`, `product-2.png` | Real product photography |
| `fonts/SVN-Gilroy-{Regular,Medium,SemiBold,Bold,XBold}.otf` | The five shipped weights |

**`reference/`** — `design-explore.html` (the approved build, with embedded fonts and a passing
WCAG AA report) and `Color_palette.md` (original token spec). Not shipped to consumers.

## Intentional additions
- **`BrandMark`** — the logo arrives as an image asset with no component definition; a lockup wrapper
  is needed by every surface.
- **`--muted-olive` / `--text-muted`** — already flagged in the source `DESIGN.md`: added because
  Sage Mist fails WCAG AA as text.
- **Lucide icons** — substitution, not a brand decision. See ICONOGRAPHY.
- **Landing-page copy and specs** (210D, 420g, 28×16×9 cm, 590.000₫) — illustrative placeholders;
  no real spec sheet or price list was supplied.
