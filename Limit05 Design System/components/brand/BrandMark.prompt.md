One-line: the brand lockup — dragon mark plus "Limit05" wordmark; use `tone="white"` on Forest Juniper headers and footers.

```jsx
<BrandMark size={40} assetBase="../../assets/" />
<BrandMark tone="white" size={32} assetBase="../../assets/" />
```

- Set `assetBase` to the relative path of `assets/` from your page, otherwise the mark will not resolve.
- The supplied artwork ("original") has a pure-red eye that is outside the palette; `forest` and `white` recolour it to Terracotta Rust.
- Minimum mark height 24px — the tail hairline breaks up below that.
