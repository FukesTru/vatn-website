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
