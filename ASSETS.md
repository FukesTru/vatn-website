# Site assets

Every image and font on this site was originally served from the Manus
deployment via proxy rewrites in `vercel.json` — none were committed here. When
that deployment was lost, all 49 of them 404'd.

Everything is now committed to this repository. The site has no external asset
dependency and no backend dependency.

## Fonts

`client/public/fonts/` — Barlow Condensed 400/500/600/700/800 and the Inter
variable face, re-sourced from `@fontsource` (the same upstream the originals
came from). Declared in `client/src/index.css`. The `@fontsource` packages are
not build dependencies; the `.woff2` files are committed directly.

## Images

37 files in `client/public/images/`, restored from the original
`vatn-photos` archive. Every file matches its documented original dimensions
exactly, and the files with transparency (the logo, `np-disc-filter`,
`b100-bio-media-made-in-usa`) keep their real alpha channels.

Encoding: files were converted to WebP only where that saved more than 25%;
everything else was copied byte-for-byte from the original, so already-optimised
assets like the hero background and the logo carry no generation loss. Text-heavy
scans and diagrams were encoded at higher quality, and the two Terms page scans
were left as their original PNGs.

Total: 6.19 MB, down from 25.3 MB of source files.

| File | Pixels | Size |
|---|---|---|
| `b100-bio-media-made-in-usa.webp` | 495x600 | 146 KB |
| `b100-mb3-bio-media.jpg` | 600x600 | 58 KB |
| `barnaby-watten-portrait.webp` | 672x672 | 72 KB |
| `cfd-3d-streamline.webp` | 1490x754 | 242 KB |
| `cfd-contour-velocity.webp` | 692x596 | 30 KB |
| `co2-scrubber-installed.webp` | 650x866 | 58 KB |
| `craig-brook-900gpm-degasser-tanks.webp` | 1448x1086 | 190 KB |
| `custom-solutions-valve.webp` | 1448x1086 | 391 KB |
| `dworshak-portable-sidestream-degasser.webp` | 864x734 | 113 KB |
| `engineering-section-background.webp` | 1920x1080 | 443 KB |
| `hero-background-raceway.webp` | 1920x1080 | 402 KB |
| `leavenworth-nfh-aerial-alt.webp` | 1300x867 | 268 KB |
| `leavenworth-nfh-aerial.webp` | 2160x1440 | 667 KB |
| `leetown-usgs-gas-management-tower.webp` | 876x878 | 86 KB |
| `lho-installed-at-hatchery.webp` | 682x511 | 33 KB |
| `lho-process-diagram.webp` | 640x531 | 40 KB |
| `lho-unit.webp` | 444x333 | 19 KB |
| `mixed-cell-raceway-channel.webp` | 1240x930 | 116 KB |
| `mixed-cell-raceway-flow-diagram.webp` | 1672x941 | 133 KB |
| `narl-vacuum-degassing-tower.webp` | 735x696 | 129 KB |
| `np-co2-degasser-cascade-1200w.webp` | 1200x1372 | 169 KB |
| `np-co2-degasser-cascade-640w.webp` | 640x732 | 72 KB |
| `np-co2-degasser-forced-air-cascade.webp` | 1254x1254 | 73 KB |
| `np-disc-filter.webp` | 600x451 | 112 KB |
| `np-drum-filters.jpg` | 600x292 | 15 KB |
| `oxygen-absorber-co2-stripper-diagram.webp` | 1592x1118 | 159 KB |
| `raceway-drain-cover.webp` | 696x542 | 39 KB |
| `terms-and-conditions-page-1.png` | 1650x2156 | 620 KB |
| `terms-and-conditions-page-2.png` | 1650x2156 | 326 KB |
| `terry-mccarthy-portrait.webp` | 674x678 | 46 KB |
| `ultraaqua-polypropylene-uv-reactor.webp` | 1920x1920 | 35 KB |
| `uv-general-system.webp` | 2048x2048 | 91 KB |
| `uv-incline-channel.webp` | 1080x1080 | 38 KB |
| `uv-open-channel-horizontal.jpg` | 1920x1920 | 61 KB |
| `uv-vertical-channel.webp` | 2560x2560 | 267 KB |
| `vatn-logo-primary.webp` | 1536x1024 | 457 KB |
| `water-jet-exhauster-packed-column.webp` | 691x640 | 122 KB |

### A note on the logo

`vatn-logo-primary.webp` is 1536x1024 and carries deliberate padding around the
mark (34px left, 270px right, 204px top, 317px bottom). That padding is part of
the artwork: the header and footer size the logo by height, so cropping the
padding away makes the mark render roughly twice its intended size. Do not
trim it.

## The one asset still missing

`terms-and-conditions-of-sale.pdf` — the source PDF behind the Terms and
Conditions download. It was not in the image archive and the Manus copy is gone.

Both page scans survived at full resolution, so the terms remain readable on
`/terms-and-conditions`; only the download buttons were removed, replaced with a
link to `/contact`. To restore them, drop the PDF into `client/public/docs/` and
reinstate the two `<a>` buttons in
`client/src/components/TermsAndConditions.tsx`.

## Attribution

The site's own alt text credits third parties for these files. Check licensing
before reusing them outside the site.

- `leavenworth-nfh-aerial.webp`, `leavenworth-nfh-aerial-alt.webp` — USFWS
- `leetown-usgs-gas-management-tower.webp` — USGS
- `oxygen-absorber-co2-stripper-diagram.webp` — USGS
- `lho-process-diagram.webp` — The Conservation Fund Freshwater Institute
- `ultraaqua-polypropylene-uv-reactor.webp` — UltraAqua
