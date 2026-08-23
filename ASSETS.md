# Site assets

## Background

Every image and font on this site was originally served from the Manus
deployment via proxy rewrites in `vercel.json` — none were committed here. When
that deployment was lost, all 49 of them 404'd: the logo, both font families,
all photography and diagrams, the hero backgrounds, and the Terms PDF.

Everything is now committed to this repository. The site has no external asset
dependency and no backend dependency.

## Fonts — fully restored

`client/public/fonts/` — Barlow Condensed 400/500/600/700/800 and the Inter
variable face, re-sourced from `@fontsource` (the same upstream files the
originals came from). Declared in `client/src/index.css`.

## Images — restored from the VATN image library

37 files in `client/public/images/`, recovered from the
`VATNimagelibrary.pdf` export and re-encoded (photos as WebP q88, the two
assets with transparency as PNG).

**Resolution caveat:** the PDF embeds display copies, not the originals — most
are capped near 560 px on the long edge, where several originals were
1200–2560 px. They are sharp at the sizes the site actually renders them, but
if the full-resolution originals ever surface they are worth dropping in.
Filenames here are stable, so replacing a file needs no code change.

The logo and `np-disc-filter` had their transparency flattened onto white by
the PDF export. It was restored by flood-filling the background inward from the
image borders, which keeps interior white (the white "Science and Technology"
type) intact where a plain white-key would have erased it.

| File | Pixels | Size |
|---|---|---|
| `b100-bio-media-made-in-usa.webp` | 462x560 | 23 KB |
| `b100-mb3-bio-media.webp` | 560x560 | 48 KB |
| `barnaby-watten-portrait.webp` | 560x560 | 51 KB |
| `cfd-3d-streamline.webp` | 560x283 | 36 KB |
| `cfd-contour-velocity.webp` | 560x482 | 16 KB |
| `co2-scrubber-installed.webp` | 420x560 | 31 KB |
| `craig-brook-900gpm-degasser-tanks.webp` | 560x420 | 43 KB |
| `custom-solutions-valve.webp` | 560x420 | 61 KB |
| `dworshak-portable-sidestream-degasser.webp` | 560x476 | 51 KB |
| `engineering-section-background.webp` | 560x315 | 64 KB |
| `hero-background-raceway.webp` | 560x315 | 54 KB |
| `leavenworth-nfh-aerial-alt.webp` | 560x373 | 58 KB |
| `leavenworth-nfh-aerial.webp` | 560x373 | 60 KB |
| `leetown-usgs-gas-management-tower.webp` | 559x560 | 46 KB |
| `lho-installed-at-hatchery.webp` | 560x420 | 23 KB |
| `lho-process-diagram.webp` | 560x465 | 23 KB |
| `lho-unit.webp` | 444x333 | 16 KB |
| `mixed-cell-raceway-channel.webp` | 560x420 | 29 KB |
| `mixed-cell-raceway-flow-diagram.webp` | 560x315 | 23 KB |
| `narl-vacuum-degassing-tower.webp` | 560x530 | 66 KB |
| `np-co2-degasser-cascade-1200w.webp` | 490x560 | 43 KB |
| `np-co2-degasser-cascade-640w.webp` | 490x560 | 42 KB |
| `np-co2-degasser-forced-air-cascade.webp` | 560x560 | 22 KB |
| `np-disc-filter.png` | 400x299 | 97 KB |
| `np-drum-filters.webp` | 560x273 | 10 KB |
| `oxygen-absorber-co2-stripper-diagram.webp` | 560x393 | 25 KB |
| `raceway-drain-cover.webp` | 560x436 | 28 KB |
| `terms-and-conditions-page-1.webp` | 429x560 | 56 KB |
| `terms-and-conditions-page-2.webp` | 429x560 | 29 KB |
| `terry-mccarthy-portrait.webp` | 557x560 | 33 KB |
| `ultraaqua-polypropylene-uv-reactor.webp` | 560x560 | 8 KB |
| `uv-general-system.webp` | 560x560 | 16 KB |
| `uv-incline-channel.webp` | 560x560 | 17 KB |
| `uv-open-channel-horizontal.webp` | 560x560 | 20 KB |
| `uv-vertical-channel.webp` | 560x560 | 40 KB |
| `vatn-logo.png` | 450x184 | 121 KB |
| `water-jet-exhauster-packed-column.webp` | 560x519 | 74 KB |

Total: 1.47 MB.

## The one asset still missing

`terms-and-conditions-of-sale.pdf` — the source PDF behind the Terms and
Conditions download. It is listed in the image library but the library does not
carry the file itself, and the Manus copy is gone.

Both page scans survived, so the terms are still readable on
`/terms-and-conditions`; only the download buttons were removed, replaced with
a link to `/contact`. To restore them, drop the PDF into `client/public/docs/`
and reinstate the two `<a>` buttons in
`client/src/components/TermsAndConditions.tsx`.

## Attribution

The site's own alt text credits third parties for these files. Check licensing
before reusing them outside the site.

- `leavenworth-nfh-aerial.webp`, `leavenworth-nfh-aerial-alt.webp` — USFWS
- `leetown-usgs-gas-management-tower.webp` — USGS
- `oxygen-absorber-co2-stripper-diagram.webp` — USGS
- `lho-process-diagram.webp` — The Conservation Fund Freshwater Institute
- `ultraaqua-polypropylene-uv-reactor.webp` — UltraAqua
