One-line: the CTA control — use `primary` for the page's single buying action, `ghost` for the secondary read-more, `accent` only for urgency (flash deal, cart).

```jsx
<Button size="lg">Mua ngay</Button>
<Button variant="ghost">Tìm hiểu thêm</Button>
```

- Padding is exactly `14px 28px` at `md` — do not round to an 8pt step.
- Hover = `brightness(1.08)` plus a slightly deeper shadow; there is no colour-swap hover.
- Focus = 3px Terracotta Rust outline, 2px offset (`focusRing` renders it statically).
- Never place two `primary` buttons in the same viewport.
