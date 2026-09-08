# Phase 1 — Interview → PRODUCT.md

Read when: running `both` or `product`. Produces `PRODUCT.md` (strategy, no visuals).

Fill `assets/templates/PRODUCT.md`. Interview in Vietnamese. Reason in English.

## Interview rules (apply every question)
- **One cluster at a time.** Present a cluster's questions together; wait for answers before the next cluster. Never dump all clusters; never drip one bare question.
- **Every question carries a recommended answer + why** (an A/B/C when the space is small). A wrong guess is faster to correct than a blank to fill.
- **Never silently fill.** If a section stays thin, ask: "đủ chưa hay đào tiếp?"
- **Quote the student verbatim** where the phrasing matters (put in "quotes").
- **No visuals here** — no colors, fonts, radii. That is Phase 2.
- ≥1 real student answer before writing PRODUCT.md. Never synthesize from the task prompt alone.

## Cluster 1 — Identity & Register
1. Tên sản phẩm/dự án là gì? (nếu chưa có: gợi ý 2-3 tên, chọn tạm để làm việc)
2. Một câu tagline ngắn — sản phẩm là gì / cho ai?
3. Nói 1-2 câu: sản phẩm làm gì, giải quyết chuyện gì?
4. **Register** — cái nào đúng hơn?
   - `brand` = thiết kế CHÍNH LÀ sản phẩm (landing, marketing, portfolio, campaign) → cho phép biểu cảm, mạnh, kịch tính.
   - `product` = thiết kế PHỤC VỤ sản phẩm (dashboard, app, tool) → ưu tiên rõ ràng, hiệu quả, nhất quán.
   - Recommend theo mô tả ở câu 3; nói rõ vì sao.

Register is a bare value (`brand` or `product`), no prose. It also picks the specimen surface set in Phase 2.

## Cluster 2 — Users & Purpose
1. Ai dùng? Mô tả 1 người thật (vai trò, ngữ cảnh), đừng nói chung chung "người dùng".
2. Họ cần LÀM ĐƯỢC gì khi mở sản phẩm? (công việc cần hoàn thành)
3. Thành công trông như thế nào? (1 dấu hiệu cụ thể, không phải "hài lòng")

Recommend a plausible answer from Cluster 1 as a hypothesis, let the student correct.

## Cluster 3 — Personality & Boundaries
1. **3 từ** mô tả tính cách brand? (tránh "đẹp/chuyên nghiệp" — quá chung; ép ra từ riêng)
2. Kể tên 2-3 sản phẩm/site bạn muốn CẢM GIÁC giống — và **vì sao từng cái**? (references)
3. Tuyệt đối KHÔNG được trông/cảm giác giống gì? (anti-references — tên cụ thể)
4. Yêu cầu tiếp cận đặc biệt? (WCAG AA mặc định; người lớn tuổi, cần chữ to, mù màu, reduced motion...)

Anti-references are load-bearing: they reappear verbatim in DESIGN.md Don'ts.

## Synthesize Design Principles
Do NOT ask directly. Derive 3-5 STRATEGIC principles from the answers (e.g. "Tốc độ đọc quan trọng hơn hiệu ứng" for a busy-professional product). These are strategy, NOT visual rules (no hex/font). State them, let the student confirm.

## Sufficiency gate → write
Before writing: every template section filled or `N/A — <reason>`. Any gap → return to that cluster, ask, never invent. Then write `PRODUCT.md` at project root from the template. Confirm the draft with the student (label `[DRAFT]` until they confirm).

## Failure paths
- Student gives only adjectives on personality → one rescue: "nếu brand là một người bạn gặp, họ nói năng, ăn mặc thế nào?" then `[cần bổ sung]` and move on.
- No anti-reference → push once ("kiểu thiết kế nào làm bạn thấy sai với brand này?"); if still none, write `N/A` and note Don'ts will be derived from principles.
- File exists → ask which to refresh; never overwrite silently.
