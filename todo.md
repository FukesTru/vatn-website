# VATN Website TODO

## Completed Items

- [x] Homepage: hero copy, VATN valve photo, stats, bio paragraph
- [x] Our Team: Barnaby sole founder, 87 publications (63 peer-reviewed), 15 patents, career history, Lab Directorship 2010-2016, Acting Assistant 2016-2018, B.S. 1976 Bemidji State, Graduate Students heading, career start 1977
- [x] Our Team: Terry 36+ years experience, WMT acquired by Innovasea February 2019, B.S. 1981, PSA+VSA oxygen systems added
- [x] Our Team: Contact form has Name/Organization/Phone/Email fields
- [x] Our Team: Contact form now submits via tRPC and sends owner notification
- [x] Bio Media: Both photos same size, caption updated to exact client text
- [x] Engineering Partners: Replaced image with Leavenworth NFH aerial (USFWS credit)
- [x] HatcherySolutions: Replaced hero with Leavenworth NFH aerial, replaced sight glass with derusted exhauster image
- [x] Footer + Home solutions cards: Solids/Biofiltration/UV now each link to their own dedicated pages
- [x] All patent counts updated to 15 across all pages
- [x] Terry years of experience: ALL instances now 36+ (fixed inconsistency)
- [x] News: Added 2025 CO2 field trials article with exact client text
- [x] News: Fixed typo "odin" -> "in"
- [x] Gas Management page (/products/gas-management): Added vacuum degassing tower section with client paragraph and two extracted NARL report images
- [x] Vacuum Degassing section title: removed "exhauster"
- [x] Removed duplicate Deputy Director entry from Barnaby's career array
- [x] Home.tsx bio paragraph: Terry shown as Director of Sales (not co-founder)
- [x] Standalone /contact page created (client/src/pages/Contact.tsx) — clean form, no team bios
- [x] All product CTA buttons updated to link to /contact instead of /our-team#contact
- [x] Navigation and Footer "Contact" buttons updated to /contact
- [x] Contact form wired to tRPC backend (contact.submit procedure) — sends owner notification on submission
- [x] Both contact forms (standalone /contact page AND Our Team page) now functional

## Pending Items

- [ ] Dr. Watten's description text for the vacuum degassing tower section on the Gas Management page — waiting for client to provide actual copy (currently uses client-provided paragraph from previous session)

## Website Edits — WebsiteEdits.docx

- [x] Edit 1: Replace hatchery photo in "People Behind VATN" section on Homepage with the NP CO2-degasser cascade-type image from the docx
- [x] Edit 2: Move the old hatchery photo (removed from homepage) to Gas Management page — replace the water jet exhauster photo with it
- [x] Edit 3: On Gas Management page under "Patented Technology", replace the LHO photo with the new LHO diagram (with Conservation Fund citation)
- [x] Edit 4: Replace all "87+/90+ peer-reviewed publications" text site-wide with "90+ Publications"
- [x] Edit 5: Replace the website logo with the new VATN Science and Technology logo from the docx
- [x] Edit 6a: Make the Navigation bar bigger overall including all tab text
- [x] Edit 6b: Add a "Partnerships" tab to the navigation bar linking to the Engineering Partners page
- [x] Edit 7: Copy all content from /hatchery-solutions page and place it on the Other / Custom Solutions page
- [x] Edit 8: Change all mentions of Dr. Barnaby's experience to "49+ years industry experience" site-wide
- [x] Edit 9: Center the product overview page content on the Products & Solutions overview page
- [x] Edit 10: Remove the "Learn More About Ultraqua / Manufacturer Resource" section from the UV Disinfection page

## Scroll-Reveal Animations

- [x] Created shared RevealSection component (client/src/components/RevealSection.tsx) — IntersectionObserver fade-in + slide-up, accepts delay prop for staggering
- [x] Added RevealSection import to all 14 pages
- [x] OurTeam: 17 RevealSection wrappers — fully animated
- [x] HatcherySolutions: 13 RevealSection wrappers — fully animated
- [x] EngineeringPartners: 13 RevealSection wrappers — fully animated
- [x] CustomSolutions: 10 RevealSection wrappers — fully animated
- [x] News: 4 RevealSection wrappers — fully animated
- [x] Publications: 4 RevealSection wrappers — fully animated
- [x] Contact: 2 RevealSection wrappers — fully animated
- [x] GasManagementProduct: 7+ RevealSection wrappers including staggered card grids — fully animated
- [x] SolidsManagement: heading + staggered filterTypes card grid — fully animated
- [x] UVDisinfection: heading + staggered features card grid — fully animated
- [x] AlkalinityEnhancement: heading + staggered technologies card grid — fully animated
- [x] FishRearingTankDesign: heading + staggered designPrinciples card grid — fully animated
- [x] ProductOverview: staggered products card grid — fully animated
- [x] BioMedia: CTA section wrapped (features are checklist items, not cards — no stagger needed)

## Website Edits — WebsiteEdits(1).docx

- [x] Our Team page: change "researcher" to "scientist" in first paragraph
- [x] Our Team page: 49+ years of industry experience already present — confirmed
- [x] Publications page: change "45+ Years of Research" to "Years of Industry Experience"
- [x] Gas Management product page: replace right valve photo with portable sidestream vacuum degasser (Dworshak NFH)
- [x] Hatcheries page: replace old degasser photo with new portable sidestream vacuum degasser photo
- [x] Navigation: add "Hatcheries" link pointing to /hatchery-solutions

## Website Edits — VATNwebsiteEdits.pdf

- [x] Edit 1: Remove Terry stat block from the Our Team stats row (keep other three stats)
- [x] Edit 2: Add "low profile oxygenator" to oxygenation/degassing product lists
- [x] Edit 3: Reinsert the two clearer product photos on the Bio Media page
- [x] Edit 4: Change Bio Media "Structured Plastic" to "HDPE High density Polyethylene"
- [x] Edit 5: Replace the UV CTA section with Ultraqua website link section
- [x] Edit 6: Remove the small dark section from Gas Management page
- [x] Edit 7: Remove the shown homepage sections
- [x] Edit 8: Change Barnaby degree to "M.Ag Agricultural Engineering"
- [x] Edit 9: Move Our Team direct contact cards next to the form
- [x] Edit 10: Remove Portable Sidestream Vacuum Degasser block from Gas Management product page
- [x] Edit 11: Add Craig Brook 900 GPM vacuum degasser photo and description
- [x] Edit 12: Add Leetown tower photo beside Water Jet Exhauster with caption
- [x] Edit 13: Add three Mixed-Cell Raceway illustrations in order under Fish Rearing Tank Design
- [x] Edit 14: Remove dark credibility/stat section from Hatchery Solutions
- [x] Edit 15: Replace Hatchery Applications photo with aerial hatchery photo
- [x] Edit 16: Add two small LHO photos under description column on Gas Management product page

- [x] Edit 1: Remove Terry's stat (36+ Yrs Hatchery Industry) from Homepage credibility stats, change to 3-col grid
- [x] Edit 2: Add "Low profile oxygenator" to Oxygenation & Degassing Equipment specs in GasManagement.tsx and GasManagementProduct.tsx
- [x] Edit 3: Make BioMedia photos display larger and clearer (320px height, padding, better shadow)
- [x] Edit 4: Change Media Type from "Structured Plastic" to "HDPE High density Polyethylene" in BioMedia.tsx
- [x] Edit 5: Replace UV Disinfection CTA section with Ultraqua website link section
- [x] Edit 6: Remove dark EXPERT CREDIBILITY INTRO section from GasManagement.tsx
- [x] Edit 7: Remove PUBLICATIONS CREDIBILITY SECTION and WHO WE SERVE section from Home.tsx
- [x] Edit 8: Change M.S. Aquaculture/Ion Exchange to M.Ag Agricultural Engineering in OurTeam.tsx
- [x] Edit 9: Restructure OurTeam contact section - form + contact cards side by side (3-col grid)
- [x] Edit 10: Remove Portable Sidestream Vacuum Degasser photo from GasManagementProduct.tsx
- [x] Edit 12: Add Leetown USGS Gas Management Tower photo next to Water Jet Exhauster in GasManagementProduct.tsx
- [x] Edit 13: Replace FishRearingTankDesign placeholder with 3 Mixed-Cell Raceway illustration photos
- [x] Edit 14: Remove EXPERT CREDIBILITY INTRO section from HatcherySolutions.tsx
- [x] Edit 15: Replace EQUIPMENT_IMG with aerial hatchery photo in HatcherySolutions.tsx
- [x] Edit 16: Add two small LHO photos below tags row in LHO section of GasManagementProduct.tsx

## VATNwebsiteEditsUPDATED.pdf — Follow-up Corrections

- [x] Remove homepage dark "The Tools VATN Uses to Solve Your Problem" solutions grid section
- [x] BioMedia photos: clean 2-up side-by-side layout (not stacked/jumbled)
- [x] Replace removed Portable Sidestream section with Craig Brook 900 GPM Vacuum Degasser photo + description
- [x] Mixed-Cell Raceway: ensure all 3 illustrations are present in correct order
- [x] LHO small photos: reposition as clean side-by-side pair aligned with description area

## VATN Final Edits (VATNFINALEDITS.pdf)
- [x] Edit 1: Remove all phone numbers from every page except the top-right nav header; remove "Talk With a VATN Specialist" section from bottom of every page
- [x] Edit 2: Remove entire homepage trust/credibility strip (80+ Publications, 15 Patents, 85+ Yrs Combined, Federal & State Hatchery Programs, Site-Specific Engineering)
- [x] Edit 3: Remove black stats box under NP CO2 Degasser illustration on Gas Management page
- [x] Edit 4: Remove stats block under NP Degasser illustration on Gas Management Product page
- [x] Edit 5: Reduce Our Team page photos approximately 50% in size
- [x] Edit 5b: Our Team Barnaby education fixes (M.Ag Oregon State 1980, delete Virgin Islands, add University to Virginia Tech, delete Undergraduate from B.S.)
- [x] Edit 6: Delete "Common Gas Management Problems" section from Gas Management page
- [x] Edit 7: Gas Management Vacuum Degassing - replace Craig Brook photo with AI-cleaned version; caption: "3, 900 gpm vacuum degassers installed at Craig Brook National Fish Hatchery"
- [x] Edit 8: Change Leetown caption to "Leetown Gas Management Towers. Co2 Strippers & Vacuum Degassers"
- [x] Edit 9: Remove Water Jet Exhauster photo; insert portable Vacuum degasser photo in its place
- [x] Edit 10: Add "Winchester, VA 22602 USA" to absolute bottom right of every page
- [x] Edit 11: Update footer bottom-left text (remove names/phone numbers, add VATN Science and Technology LLC address block)
- [x] Edit 12: Remove "Who you are working with" section from Partnerships page
- [x] Edit 13: Replace sentence in Partnerships "Why Engineering Firms work with VATN" section
- [x] Edit 14: Add photo credit under hatchery photo on Hatcheries page
- [x] Edit 15: Other & Custom Solutions - change heading, delete Federal & State Hatchery Programs black section, swap exhauster photo
- [x] Edit 16: UV Disinfection - add polypropylene closed reactor photo
- [x] Edit 17: Gas Management CO2 Scrubbing - add CO2 Scrubbing benefits text (slide images pending user upload of PowerPoint)
- [x] Edit 18: Solids Management - amend System Sizing Note black box text

## VATNFINALEDITS(1).pdf — Applied Aug 8 2026
- [x] Replace Craig Brook photo in Gas Management Vacuum Degassing section with new clearer photo
- [x] Replace Custom Solutions equipment photo with new brass valve/fitting photo
- [x] Add CO2 Scrubbing diagram (Concurrent Carbon Dioxide Stripper Process) to Gas Management CO2 section
- [x] Add CO2 Scrubber photo to Gas Management CO2 section

## Gas Management Card Links & New Sections
- [x] Add section IDs to LHO, CO2 Stripping, and Vacuum Degassing sections in GasManagementProduct.tsx
- [x] Update all 6 technology card headings to anchor/page links
- [x] Create new /products/oxygenation-degassing Under Construction page
- [x] Register new route in App.tsx
- [x] Add blurred New Products Coming section to Side-Stream Treatment card
- [x] Add blurred New Products Coming section to Computer Modeling & System Design card
