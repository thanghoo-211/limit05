---
version: alpha
name: <Project Name>
description: <one-line tagline>
colors:
  primary: "#______"
  secondary: "#______"
  accent: "#______"
  background: "#______"
  foreground: "#______"
  # add roles as needed: card, muted, border, ring, destructive...
typography:
  h1:
    fontFamily: "<VN-safe font>"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "<VN-safe font>"
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
    backgroundColor: "{colors.primary}"
    textColor: "#______"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
---

# Design System: <Project Name>

## Overview
**Creative North Star: "<Metaphor>"**

<!-- 2-3 câu: personality, density, triết lý thẩm mỹ. Fold in register + anti-references from PRODUCT.md. -->

**Key Characteristics:**
- 

## Colors
<!-- 1 câu tả palette, rồi từng role: **Tên màu** (#HEX): dùng ở đâu, vì sao. -->

## Typography
**Display Font:** <Family> (fallback)
**Body Font:** <Family> (fallback)
**Character:** <1-2 câu về personality của cặp font.>

### Hierarchy
- **Display** (weight, size, line-height): mục đích.
- **Body** (weight, size, line-height): mục đích.

## Layout
<!-- Grid/columns, container width, mật độ, breakpoints. Nhịp không gian theo spacing scale. -->

## Elevation & Depth
<!-- Shadow hay tonal layering? Nếu flat, nói rõ. -->

## Shapes
<!-- Ngôn ngữ góc (theo rounded), kiểu border, motif hình học (pill/sharp/organic). -->

## Motion
<!-- NON-SPEC EXTENSION: not in the Stitch spec. -->
<!-- Motion energy: restrained / responsive / choreographed + tương tác nào có animation. Ngắn gọn. -->

## Components
### Buttons
- **Shape:** <radius>
- **Primary:** <color + padding>
- **Hover / Focus:** <transitions>

### Cards / Containers
- **Corner:** <radius>
- **Background:** <colors>
- **Border:** <nếu có>

### Inputs / Fields
- **Style:** <stroke, background, radius>
- **Focus:** <treatment>

## Do's and Don'ts
### Do:
- **Do** <prescription cụ thể, kèm exact value>.

### Don't:
- **Don't** <prohibition cụ thể; mỗi anti-reference từ PRODUCT.md xuất hiện nguyên văn ở đây>.
