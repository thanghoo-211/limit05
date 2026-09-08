<!-- UPLOAD.md — hand-off manifest. Claude Design has TWO stages: (1) create the design system, (2) enter the project to design screens. Put each file at the right stage. Fill buckets; delete rows that don't apply. -->

# Bàn giao cho Claude Design

Sản phẩm: **<Name>**. Claude Design đi theo 2 bước — chuẩn bị đúng thứ cho từng bước.

## Bước 1 — Tạo design system
> Upload TẤT CẢ những thứ dưới đây ngay khi tạo design system.

| File | Vai trò |
|---|---|
| `DESIGN.md` | **CHÍNH** — spec để Claude Design sinh nguyên bộ design system. |
| `<logo.svg/png>` | Logo (nếu có). |
| `<ảnh brand...>` | Ảnh thương hiệu (nếu có). |
| `<font...>` | **Tất cả font** dùng trong DESIGN.md — upload hết, không giữ lại. |
| `<reference-DESIGN.md>` | Nếu có: DESIGN.md tham khảo (dán nhãn "tham khảo/cảm hứng", không phải brand của bạn). |

## Bước 2 — Vào project tạo thiết kế (màn hình)
> Sau khi đã có design system, mới dùng file này.

| File | Vai trò |
|---|---|
| `PRODUCT.md` | Chiến lược (users, brand, anti-references). Đưa vào làm context khi tạo từng màn hình/thiết kế, để thiết kế bám đúng sản phẩm và người dùng. |

## Giữ để đối chiếu (không upload)
- `design-explore.html` — bản dựng 3 style đã chốt bằng mắt.

## Cách dùng
1. Mở Claude Design, tạo project mới, **Bước 1**: upload DESIGN.md + logo + ảnh + tất cả font để sinh design system.
2. Tinh chỉnh design system nếu cần.
3. **Bước 2**: vào tạo thiết kế/màn hình, đưa `PRODUCT.md` vào làm context.
