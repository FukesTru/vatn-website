# VATN PageSpeed Audit Notes

Source report: `https://pagespeed.web.dev/analysis/https-vatntech-rcq5n2zm-manus-space/lusmmk74jb?form_factor=desktop`

## Report context

The supplied PageSpeed report was captured on August 18, 2026. Although the provided URL includes `form_factor=desktop`, its rendered report identifies an emulated Moto G Power on Slow 4G. The report score itself was not exposed in the textual extraction, so the metric values below are the reliable available record.

## Reported lab metrics

| Metric | Reported value |
| --- | ---: |
| First Contentful Paint | 7.2 s |
| Largest Contentful Paint | 22.7 s |
| Total Blocking Time | 460 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 12.8 s |

## Highest-impact findings

1. Image delivery: estimated savings of 3,847 KiB, primarily the 2.16 MiB navigation logo and 1.57 MiB homepage product image.
2. Total network payload: 7,011 KiB, including 4.58 MiB from image assets.
3. Third-party work: LeadConnector, Facebook, and Cloudflare materially contribute to network bytes and main-thread work.
4. Render blocking: estimated savings of 760 ms from global font and form-embed requests.
5. Unused JavaScript: estimated savings of 565 KiB; the production bundle is currently 1.16 MiB minified / 267 KiB gzip.
6. Caching: CloudFront background assets were reported without a cache TTL.
7. Small layout-stability opportunities: the footer logo and homepage product image lack explicit intrinsic dimensions.

## Constraints

No website copy, visual design, layout, or imagery has been changed during this audit. Any implementation requires user approval first.
