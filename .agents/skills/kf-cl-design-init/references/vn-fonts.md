# Vietnamese-safe fonts

Read when: choosing fonts for the specimen or DESIGN.md typography.

**Hard filter:** a font ships only if it has a `vietnamese` subset. Vietnamese diacritics (ậ ằ ễ ợ ữ...) break in fonts without it. Verify against `assets/corpus/google-fonts.csv` — the `Subsets` column must contain `vietnamese`. 505 Google Fonts pass; everything else is dropped.

**Safe default pair:** Be Vietnam Pro (heading) + Noto Sans (body) — both full VN coverage. Use when in doubt or when a chosen font fails the filter.

**Substitution:** if a pairing names a font lacking the VN subset, swap it for the nearest VN-safe font of the same category (serif→serif, mono→mono) from `google-fonts.csv`, or fall back to the default pair. Never ship a non-VN font.

## Fully VN-safe pairings (both heading + body pass)

From `assets/corpus/typography.csv`, cross-checked against the VN-subset list. Pick by mood; open `typography.csv` for full keywords/Best-For.

| # | Pairing | Heading + Body |
|---|---|---|
| 1 | Classic Elegant | Playfair Display + Inter |
| 5 | Minimal Swiss | Inter + Inter |
| 8 | Wellness Calm | Lora + Raleway |
| 9 | Developer Mono | JetBrains Mono + IBM Plex Sans |
| 12 | Luxury Serif | Cormorant + Montserrat |
| 13 | Friendly SaaS | Plus Jakarta Sans + Plus Jakarta Sans |
| 14 | News Editorial | Newsreader + Roboto |
| 16 | Corporate Trust | Lexend + Source Sans 3 |
| 17 | Brutalist Raw | Space Mono + Space Mono |
| 19 | Soft Rounded | Varela Round + Nunito Sans |
| 21 | Vietnamese Friendly | Be Vietnam Pro + Noto Sans |
| 31 | Financial Trust | IBM Plex Sans + IBM Plex Sans |
| 35 | Magazine Style | Libre Bodoni + Public Sans |
| 38 | Indie/Craft | Amatic SC + Cabin |
| 44 | Minimalist Portfolio | Archivo + Space Grotesk |
| 46 | Wedding/Romance | Great Vibes + Cormorant Infant |
| 47 | Science/Tech | Exo + Roboto Mono |
| 49 | Sports/Fitness | Barlow Condensed + Barlow |
| 53 | Neubrutalist Bold | Lexend Mega + Public Sans |
| 54 | Academic/Archival | EB Garamond + Crimson Text |
| 57 | Gen Z Brutal | Anton + Epilogue |
| 58 | Minimalist Editorial | Playfair Display + Source Serif 4 |
| 60 | SaaS Mobile Boutique | Calistoga + Inter |
| 61 | Terminal CLI Monospace | JetBrains Mono + JetBrains Mono |
| 62 | Kinetic Brutalism | Space Grotesk + Space Grotesk |
| 64 | Material You MD3 | Roboto + Roboto |
| 66 | Bold Typography Mobile | Inter + Playfair Display |
| 67 | Academia Mobile | Cormorant Garamond + Crimson Pro |
| 69 | Web3 DeFi | Space Grotesk + Inter |
| 71 | Enterprise SaaS Mobile | Plus Jakarta Sans + Plus Jakarta Sans |

(CJK-specific Noto pairings #22-25 also pass but are for CJK projects.) Full list: 39 pairings — see `typography.csv`.

Load fonts in the specimen via a Google Fonts `<link>` (student is online); "self-contained" means one HTML file, not offline.
