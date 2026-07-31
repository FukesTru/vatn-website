# VATNwebsiteEdits.pdf — parsed instructions

Source: `/home/ubuntu/upload/VATNwebsiteEdits.pdf`

## Requested edits captured from PDF text and page images

1. Remove Terry's stat on the left-hand side and leave the other three.
2. Under any section regarding oxygenation & degassing, add **"low profile oxygenator"** to the product list.
3. Reinsert the two product photos more clearly on the website.
4. On the Bio Media page, under **Media Type**, change **"Structured Plastic"** to **"HDPE High density Polyethylene"**.
5. On the UV page, put the **Ultraqua website link** in the shown CTA section and replace that section entirely as directed.
6. On the Gas Management page, remove the small dark section shown so the page starts with the next white section.
7. Remove all homepage sections shown in the PDF screenshots below the referenced area.
8. On the Our Team page, for Barnaby, replace **"M.S. — Aquaculture / Ion Exchange"** with **"M.Ag Agricultural Engineering"**.
9. Raise the two small contact boxes and put them next to the form on the Our Team section.
10. Remove the **Portable Sidestream Vacuum Degasser** photo and its description completely from the Gas Management page.
11. In its place, use the **900 GPM Vacuum Degasser — Craig Brook National Fish Hatchery** photo and description:
   - Title: **900 GPM Vacuum Degasser — Craig Brook National Fish Hatchery**
   - Description: **Two 900 GPM vacuum degasser tanks installed at Craig Brook National Fish Hatchery, Maine. This installation is part of the same research program documented in Dr. Watten's published work on vacuum degassing for hatchery water supplies.**
12. On the Gas Management section, place the attached tower photo next to the Water jet exhauster photo. Its description should read: **Leetown USGS Gas management Tower CO2 Strippers \ Vacuum Degassers**.
13. Under the Mixed Cell Raceway section on the Fish Rearing Tank Design page (Illustrations area), place the three photos in the exact top-to-bottom order shown:
   - Mixed-Cell Raceway Water Flow diagram
   - CFD contour image labeled **Application of Computational Fluid Dynamics**
   - CFD 3D streamline image
14. Under Hatcheries, completely remove the dark credibility/stat section shown in the PDF screenshot.
15. Replace the photo under Fish Hatcheries / Hatchery Applications with the attached aerial hatchery photo.
16. Under the shown Gas Management section, add two small photos under the description area, sized so their combined height aligns with the neighboring photo column; the visible small photos shown are a raceway scene and a circular diffuser/plate image.

## Visual mapping from PDF pages viewed

- Page 1 shows the Terry stat removal request, low profile oxygenator wording request, two clearer product photos, and the Bio Media Media Type replacement.
- Page 2 shows the exact Bio Media table row and the UV page CTA area where the Ultraqua link should be placed; it also shows the dark mini-section on Gas Management to remove.
- Pages 3–4 show the homepage sections to remove, Barnaby degree text replacement, and the Our Team contact cards that need to sit next to the form.
- Page 5 shows removal of the Portable Sidestream Vacuum Degasser and replacement with the Craig Brook vacuum degasser photo/description; it also shows the Leetown tower image for placement beside the Water jet exhauster.
- Pages 6–7 show the three Fish Rearing Tank Design illustrations and the exact order, with the CFD contour image specifically labeled **Application of Computational Fluid Dynamics**.
- Page 8 shows two small Gas Management photos (raceway scene and circular diffuser/plate image) and references removing the dark Hatcheries credibility section.
- Page 9 shows the replacement aerial hatchery photo for the Hatchery Applications area.

## Notes

- The user explicitly wants only the requested corrections, with no redesigns or unrelated changes.
- Need to inspect current site state first because some of these items may already be present or partially changed after previous edits/rollbacks.
- Still need to view the final PDF page if available to confirm item 16 context and any additional caption details.

## References

- Source PDF: `/home/ubuntu/upload/VATNwebsiteEdits.pdf`
- View sessions used: pages 1–4 and pages 5–9 from the same PDF
## Embedded image details confirmed from extraction

| File | Content | Edit |
|---|---|---|
| `/tmp/pdf_vatn/vatn-001.png` | Two bio media product photos displayed side by side | 3 |
| `/tmp/pdf_vatn/vatn-012.png` | Leetown USGS tower / CO2 strippers / vacuum degassers photo | 12 |
| `/tmp/pdf_vatn/vatn-013.png` | Mixed-Cell Raceway Water Flow diagram | 13 |
| `/tmp/pdf_vatn/vatn-014.png` | CFD contour image for Fish Rearing Tank Design, to be labeled "Application of Computational Fluid Dynamics" | 13 |
| `/tmp/pdf_vatn/vatn-015.png` | CFD 3D streamline image | 13 |
| `/tmp/pdf_vatn/vatn-020.png` | Aerial hatchery replacement photo | 15 |
| `/tmp/pdf_vatn/vatn-023.png` | Small LHO equipment photo 1 | 16 |
| `/tmp/pdf_vatn/vatn-024.png` | Small LHO equipment photo 2 | 16 |

## Final page clarification for edit 16

The last PDF page shows that the two small photos for the Low Head Oxygenator section should be placed **under the description column**, not under the main left photo. The instruction says to make them small enough so the top of the description block aligns with the top of the left image, and the bottom of the stacked photos under the description aligns roughly with the bottom of the left image.

This means the intended layout is:
- left column: main LHO image
- right column top: existing text/description
- right column bottom: two small equipment photos arranged beneath the text

## Additional page-level confirmations

- The homepage sections to remove are the dark **"Built for the Teams Running Aquatic Systems"** section, the white **"The Research Behind the Results"** section, and the dark **"The Tools VATN Uses to Solve Your Problem"** section shown on PDF pages 3–4.
- The UV Disinfection section to replace is the dark CTA block headed **"Discuss UV Disinfection for Your Facility"**.
- The contact card adjustment on the Our Team page should place the two direct-contact cards in the same horizontal row area as the form on large screens, not below it.
- The screenshot for edit 1 shows a four-item metric strip where the user wants the Terry-specific **36+ Yrs Hatchery Industry** item removed while the other three stats remain.

## Implementation notes from reading source files

### OurTeam.tsx key findings

The four-stat grid in Barnaby's card is at lines 235–245. The `barnabyStats` array at lines 65–70 has four items:
- `{ val: 15, suffix: "", label: "Patents and Provisional Patents", sub: "Gas management & water treatment" }`
- `{ val: 80, suffix: "+", label: "Publications", sub: "Gas management & water treatment" }`
- `{ val: 49, suffix: "+", label: "Years Industry Experience", sub: "Aquaculture water treatment" }`
- `{ val: 14, suffix: "", label: "Graduate Students", sub: "Mentored" }`

The PDF screenshot shows the **combined strip** at the top of the Our Team page (lines 189–201) with four stats: 80+ Publications, 15 Patents, 85+ Yrs Combined Experience, and **36+ Yrs Hatchery Industry** (Terry's stat). Edit 1 removes the Terry stat (36+ Yrs Hatchery Industry) from that strip and changes the grid from 4-col to 3-col.

The Barnaby degree at line 310 reads: `{ d: "M.S.", f: "Aquaculture / Ion Exchange", i: "Oregon State U. / U. Virgin Islands", y: "1980" }`. Edit 8 changes `f` to `"Agricultural Engineering"` and `d` to `"M.Ag"`.

The contact section layout at lines 546–608 has a 2-column grid: left column has the heading and the form, right column has the direct-contact cards. Edit 9 wants the contact cards to be in the same row as the form (next to the form). The current layout already puts them in the same grid row but the cards are in a separate RevealSection below the form. The fix is to put the cards in the same grid column as the form, or restructure to a 3-column layout where col 1 = heading, col 2 = form, col 3 = cards.

### Home.tsx key findings

The sections to remove per Edit 7 are:
- Lines 335–379: The "Built for the Teams Running Aquatic Systems" dark section (WHO WE SERVE)
- Lines 285–333: The "The Research Behind the Results" white section (PUBLICATIONS CREDIBILITY)

The "The Tools VATN Uses to Solve Your Problem" section at lines 229–283 is the Solutions section and the user showed it in the PDF as one of the sections to remove.

The sections to keep are: Hero, Trust Strip, People First (Who is VATN), Credibility Stats, How VATN Works, and the Contact/CTA section.

### Uploaded image paths

- `/manus-storage/leetown-tower_5ea9bcac.png` — Leetown USGS tower photo (Edit 12)
- `/manus-storage/mixed-cell-raceway-diagram_dba7afa0.png` — Mixed-Cell Raceway diagram (Edit 13)
- `/manus-storage/cfd-contour-velocity_5ce387e8.png` — CFD contour velocity (Edit 13)
- `/manus-storage/cfd-3d-streamline_64772414.png` — CFD 3D streamline (Edit 13)
- `/manus-storage/aerial-hatchery_38a4344c.png` — Aerial hatchery photo (Edit 15)
- `/manus-storage/lho-small-1_a2157198.png` — Small LHO photo 1 (Edit 16)
- `/manus-storage/lho-small-2_87b625fd.png` — Small LHO photo 2 (Edit 16)

## GasManagement.tsx (Edit 6) — the dark section to remove

The dark section to remove is the "EXPERT CREDIBILITY INTRO" at lines 142–168 in GasManagement.tsx. It starts with:
`<section className="py-14 lg:py-18" style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(58,140,63,0.2)" }}>`
and ends before the `{/* ── PROBLEM / SOLUTION ── */}` comment at line 170. The page should start with the white "PROBLEM / SOLUTION" section after the hero.

## GasManagementProduct.tsx — current state

The Portable Sidestream Vacuum Degasser block is at lines 277–287 (the second photo card in the 2-column grid). Edit 10 removes this block. Edit 11 adds the Craig Brook 900 GPM photo (already present at lines 290–303 as the third photo). Edit 12 adds the Leetown tower photo next to the Water Jet Exhauster. The Water Jet Exhauster is currently at lines 305–318 as a centered single photo.

For Edit 12: the Leetown photo should be placed in a 2-column grid alongside the Water Jet Exhauster photo, with caption "Leetown USGS Gas management Tower CO2 Strippers \ Vacuum Degassers". The Leetown image path is `/manus-storage/leetown-tower_5ea9bcac.png`.

For Edit 16: the two small LHO photos should be added under the description column in the LHO section (lines 157–193). The description column is the right column (lines 175–191). The two photos should appear below the tags row at line 182. Image paths: `/manus-storage/lho-small-1_a2157198.png` and `/manus-storage/lho-small-2_87b625fd.png`.

## BioMedia.tsx (Edits 3 and 4)

Photo cards are at lines 65–90. The spec table Media Type row is at lines 128–131 with value "Structured Plastic". Edit 4 changes this to "HDPE High density Polyethylene". Edit 3 replaces the two current photos with clearer versions — but the PDF shows the same photos from the old website, so the instruction is to make them clearer. The current photos are `/manus-storage/vatn-bio-media-photo_415f2c30.jpg` and `/manus-storage/vatn-bio-media-usa_929c566e.png`. These are the same photos that were already on the website — no new photos were provided. The fix is to improve how they display (larger, better aspect ratio, clearer).

## FishRearingTankDesign.tsx (Edit 13)

The placeholder block is at lines 143–153. Replace it with the three Mixed-Cell Raceway illustrations in order:
1. `/manus-storage/mixed-cell-raceway-diagram_dba7afa0.png` — Mixed-Cell Raceway Water Flow diagram (no special label)
2. `/manus-storage/cfd-contour-velocity_5ce387e8.png` — labeled "Application of Computational Fluid Dynamics"
3. `/manus-storage/cfd-3d-streamline_64772414.png` — CFD 3D streamline (no special label)

## HatcherySolutions.tsx (Edits 14 and 15)

Edit 14: Remove the dark EXPERT CREDIBILITY INTRO section at lines 152–184.
Edit 15: Replace `EQUIPMENT_IMG` (line 13) with the aerial hatchery photo. The current value is `/manus-storage/portable-sidestream-vacuum-degasser-dworshak_23d446f1.png`. Change to `/manus-storage/aerial-hatchery_38a4344c.png`.

## OurTeam.tsx (Edits 1, 8, 9)

Edit 1: Remove the "36+ Yrs Hatchery Industry / Terry McCarthy, WMT & VATN" stat from the combined strip at lines 189–201. The strip currently has 5 items; remove the last one and change the grid from 4-col to 3-col. Actually looking at the code again, the strip at lines 191–199 is a flex row, not a grid, so just remove the "36+ Yrs Hatchery Industry" item from the array.

Wait — re-reading the PDF: the stat strip shown is the **combined credibility stats section on the homepage** (lines 156–176 in Home.tsx), not the Our Team page strip. The PDF says "Remove Terry's stat on the left hand side and leave the other 3". The screenshot shows: 80+ Publications, 15 Patents, 85+ Yrs Combined Experience, 36+ Yrs Hatchery Industry. So Edit 1 removes the "36+ Yrs Hatchery Industry" stat from the **Homepage** credibility stats section (Home.tsx lines 156–176), changing the 4-col grid to 3-col.

Edit 8: In OurTeam.tsx at line 310, change `{ d: "M.S.", f: "Aquaculture / Ion Exchange", i: "Oregon State U. / U. Virgin Islands", y: "1980" }` to `{ d: "M.Ag", f: "Agricultural Engineering", i: "Oregon State U. / U. Virgin Islands", y: "1980" }`.

Edit 9: The contact section at lines 546–608 currently has a 2-column grid where col 1 = heading + form, col 2 = direct contact cards. The heading is in a separate RevealSection (lines 549–558) above the form. The contact cards are in a third RevealSection (lines 582–605) that falls below the form in the grid. The fix is to restructure so the cards appear in the same row as the form (side by side on desktop). Change the grid to 3 columns: col 1 = heading, col 2 = form, col 3 = cards.

## UVDisinfection.tsx (Edit 5)

The CTA block to replace is at lines 207–223. Replace the dark "Discuss UV Disinfection for Your Facility" CTA section with a section that links to the Ultraqua website. The Ultraqua website is https://www.ultraaqua.com. The replacement should say something like "Ultraqua UV Systems" with a link to their website.

