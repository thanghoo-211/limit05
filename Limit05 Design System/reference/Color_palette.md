# Design System Color Token Specification: Modern Earthy & Alpine

> **Target Implementation:** High-Conversion E-Commerce Landing Page (Outdoor & Athletic Performance Footwear/Apparel)  
> **Aesthetic Profile:** Gorpcore, Minimalist Athletic, Modern Outdoor, Technical Alpine  
> **Version:** 1.0.0  
> **Format:** Standard Markdown Token Spec (Optimized for LLMs, UI Code Generators, Tailwind CSS, and Figma Variables)

---

## 1. Palette Overview & Semantic Roles

| Token Key | Color Name | Hex Code | RGB | HSL | Semantic Role / UI Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `color-base-surface` | Frost White | `#F4F8FA` | `rgb(244, 248, 250)` | `hsl(200, 27%, 97%)` | **Canvas Base (60%)**: Background cho toàn trang, viewport background, khoảng trống thở (negative space). |
| `color-surface-tint` | Glacial Ice Blue | `#D7EFFF` | `rgb(215, 239, 255)` | `hsl(204, 100%, 92%)` | **Soft Highlight (30%)**: Khối Hero Banner, Featured Callout, banner phụ, thanh Announcement, trạng thái hover nền thẻ. |
| `color-border-subtle` | Sage Mist | `#AEB8A0` | `rgb(174, 184, 160)` | `hsl(85, 15%, 67%)` | **Muted Earth Midtone**: Viền card (card borders), divider lines, tag lọc thể loại (category chips), trạng thái inactive/subtle icon. |
| `color-brand-primary` | Forest Juniper | `#2B4436` | `rgb(43, 68, 54)` | `hsl(146, 23%, 22%)` | **Primary Action / CTA (10%)**: Nút mua sắm chính ("Add to Cart", "Shop Now"), primary navigation bar, brand badges. |
| `color-text-anchor` | Dark Pine Slate | `#192420` | `rgb(25, 36, 32)` | `hsl(158, 18%, 12%)` | **Deep Text & Contrast Anchor**: Tiêu đề chính (H1, H2, H3), giá tiền sản phẩm, typography thân bài, bảo đảm chuẩn WCAG AAA. |
| `color-accent-pop` | Terracotta Rust | `#D66847` | `rgb(214, 104, 71)` | `hsl(14, 64%, 56%)` | **High-Contrast Accent (<5%)**: Nhãn sale ("Sale -20%", "Limited"), thanh thông báo giỏ hàng, flash deal timer, hot status badges. |

---

## 2. 60-30-10 Distribution Rule for Landing Pages

- **60% Dominant Base (`#F4F8FA`, `#FFFFFF`)**:
  - Main body background container.
  - Product presentation cards background to isolate footwear/apparel imagery clearly.
- **30% Secondary & Structure (`#D7EFFF`, `#AEB8A0`)**:
  - `#D7EFFF`: Hero section background block, promo announcement container, subtle floating badges.
  - `#AEB8A0`: Structural outlines (`1px solid #AEB8A0`), secondary buttons outline, filter pills, feature checklist icons.
- **10% High-Intent Accents (`#2B4436`, `#192420`, `#D66847`)**:
  - `#2B4436`: High-conversion CTA buttons (`Add to Bag`, `Pre-order`).
  - `#192420`: High-readability headings and typography.
  - `#D66847`: Discount tags, urgency banners, active cart badges.

---

