# Phase 2 — Interview → specimen → DESIGN.md

Read when: running `both` or `design`. Requires PRODUCT.md to exist. Produces `design-explore.html` + `DESIGN.md`.

Method: **direction in words first, numbers by eye second.** Never ask a student for raw hex/font/radius. Capture feeling, then build specimens, then lock from the chosen build. Format: `design-md-format.md`. Fonts: `vn-fonts.md`. Palettes/styles: `assets/corpus/`.

If a reference site is in play (own or admired), read `reference-warmstart.md` FIRST — it may inherit some knobs and skip parts of the direction interview.

## Step 1 — Direction interview (words, not numbers)
One cluster, Vietnamese, recommend an answer each.
1. **North-star feeling** — "3 giây đầu, người lạ phải CẢM thấy gì? Cho 3 từ cảm giác, càng riêng càng tốt (tránh 'đẹp/chuyên nghiệp')."
2. **Metaphor** — "Nếu brand là MỘT căn phòng bạn bước vào, đó là phòng gì? Ánh sáng, không khí, chất liệu?"
3. **Color character** — pick usage level + describe by character, NOT hex: (a) neutral + 1 accent ≤10% · (b) một màu chủ đạo 30-60% · (c) bảng 3-4 màu · (d) drenched (bề mặt LÀ màu). Then: "gam nào? tả bằng chữ, vd 'xanh rêu trầm như rừng già'."
4. **Type feeling** — (a) serif sang + sans thân · (b) một sans gọn · (c) display mạnh + mono · (d) editorial. Recommend from mood.
5. **Motion energy** — (a) restrained (chỉ đổi trạng thái) · (b) responsive (feedback + transition) · (c) choreographed (dàn dựng, scroll-driven).
6. **Elevation** — độ nổi khối: (a) phẳng (flat) · (b) phân lớp nhẹ · (c) nổi rõ (shadow). Recommend from register: product → phẳng/phân lớp; brand → tự do. Gives the DESIGN.md "Elevation & Depth" section an explicit source.
7. **Anti-reference** (carry from PRODUCT.md) — confirm "tuyệt đối không giống gì".

Map feeling → corpus keywords to search: read `assets/corpus/styles.csv` (Keywords, Best For, Do Not Use For, Design System Variables), `colors.csv` (by Product Type + mood), `typography.csv` (mood). Vietnamese→English hints: sang trọng→luxury/elegant; ấm áp→warm/humanist; gọn/hiện đại→minimal/modern; mạnh/gắt→bold/brutalist; vui→playful/rounded.

## Step 2 — Assemble 3 style families
Three GENUINELY different families, not palette-swaps of one design. Each = a different drawing language (container idiom, radius/elevation/density, decoration, layout school), built end-to-end.
- **A — literal:** most faithful to the student's words.
- **B — push:** the personality dialed up.
- **C — safe/bright:** clean, high-legibility (also a probe — if the student picks C, A/B overreached).
At least one family breaks from the obvious default. Ground each in `styles.csv` + `colors.csv` (role-complete palette) + a VN-safe pair from `typography.csv`.

**Register picks surfaces** (from PRODUCT.md):
- `brand` → hero + CTA(3 states) + proof card + short form.
- `product` → app-shell (top/side nav) + data-table row + card + form + button(3 states).

**Partial inherit** (reference branch): hold inherited knobs FIXED across all 3, vary only re-explored knobs. If nothing is re-explored → skip the 3 families, confirm the reference by eye, contrast-check, lock.

## Step 3 — Build the specimen (one file)
Fill `assets/templates/specimen.html` → write `design-explore.html` at project root. One file, 3 tabs (A/B/C). Each tab renders:
- Real brand text: name + tagline + 2-3 verbatim lines from PRODUCT.md — **no lorem**.
- A Vietnamese diacritic stress line: "Vẽ đường quanh co, gập ghềnh sỏi đá — chữ Việt đủ dấu nặng ngã hỏi."
- The register-keyed surfaces.
- CTA / primary button in 3 states.
- The embedded JS WCAG readout (already in the template): shows PASS/FAIL per text×surface pair.

## Step 4 — Contrast pre-gate (before the student looks)
Open `design-explore.html`; read the JS readout. **Every pair must PASS WCAG AA.** On FAIL: adjust the offending token (darken/lighten text or surface) within the family's character → re-check. Still failing → swap that palette for the nearest role-complete one in `colors.csv` → re-check. Loop until all PASS. The student never sees a failing option. Readability is non-negotiable; the palette vibe is the student's call.

## Step 5 — Confirm by eye
Show the 3 tabs. Ask by feeling, not by hex: "Cái nào nhìn GIỐNG bạn nhất?" Student may MIX ("màu của A nhưng chữ của B") — apply the edit live in the HTML's CSS variables, re-run contrast, remind Ctrl+F5. Record every tweak. Confirm back in plain words (including the style family as a plain description, e.g. "mềm, ấm, bo tròn").

## Step 6 — Lock DESIGN.md from the chosen build
Read the confirmed build's CSS values one by one — NOT from memory. A value in the build that never lands in DESIGN.md is lost downstream (Claude Design reads DESIGN.md, not the specimen). Write `DESIGN.md` at project root per `design-md-format.md`: frontmatter tokens (version, name, description, colors, typography, rounded, spacing, components) + 9 body sections. Every PRODUCT.md anti-reference goes verbatim into Don'ts. Motion section carries the `<!-- NON-SPEC EXTENSION -->` marker.

## Failure paths
- Student can't pick / all feel wrong → ask what's off in words, adjust the closest family, re-show. Don't invent a 4th blind.
- Chosen font fails VN filter → substitute per `vn-fonts.md`, keep character.
- `design` mode but no PRODUCT.md → stop, run Phase 1 first (register + anti-references are required inputs).
