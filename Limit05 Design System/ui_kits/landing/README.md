# UI kit — Limit05 landing page

The single surface the brand ships: a Vietnamese-language product landing page for the
Limit05 sling bag, driving one conversion ("Mua ngay / Thêm giỏ hàng").

Open `index.html`.

## What is interactive
- Announcement bar (dismissable)
- Sticky header with cart count
- Hero → "Thêm giỏ hàng" opens the cart drawer; "Mua ngay" opens checkout
- Cart drawer with quantity stepper and live total
- Checkout form → order-received confirmation
- Sticky buy bar appears after ~620px of scroll
- Newsletter capture with a sent state

## Files
| File | Contains |
|---|---|
| `index.html` | Shell, app state, newsletter section |
| `header.jsx` | `Announcement`, `Header` |
| `hero.jsx` | `Hero` |
| `features.jsx` | `Features`, `Material`, `Specs` |
| `commerce.jsx` | `CartDrawer`, `Checkout`, `BuyBar`, `Footer` |

## Notes
- Every control comes from the system bundle (`Button`, `Badge`, `Chip`, `Card`, `Field`, `BrandMark`); the kit adds layout only.
- Copy is illustrative but written to the brand's voice rules. Product specs (210D, 420g, 28×16×9cm, prices) are **placeholders** — no real spec sheet was supplied.
- Icons are Lucide via CDN (substitution — the source bundle ships no icon set). See readme.md → ICONOGRAPHY.
