/**
 * VATN Our Team Page
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed display
 * All credentials, dates, institutions, awards, and facts sourced directly from
 * Barnaby J. Watten and Terry McCarthy's submitted resumes. Nothing fabricated.
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Award, FlaskConical, Briefcase, GraduationCap, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; observer.disconnect(); } },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

// ── BARNABY WATTEN DATA ──────────────────────────────────────────────────────
// Source: BarnabyJWattenResume(3).docx — all facts verified from document

const barnabyEducation = [
  { degree: "Ph.D.", field: "Fisheries and Allied Aquacultures", institution: "Auburn University", year: "1989" },
  { degree: "M.S.", field: "Aquaculture / Ion Exchange Research", institution: "University of the Virgin Islands / Penn State", year: "1980" },
  { degree: "B.S.", field: "Aquaculture", institution: "(Undergraduate foundation)", year: "" },
];

const barnabyCareer = [
  {
    role: "Co-Founder & Principal Scientist",
    org: "VATN Science and Technology, LLC",
    period: "2019 – Present",
    desc: "Applied gas-transfer research and product development — oxygenation, degassing, CO₂ stripping, and site-specific system modeling — for federal and state hatchery programs and commercial aquaculture.",
  },
  {
    role: "Deputy Director",
    org: "USGS Leetown Science Center",
    period: "Prior to 2018",
    desc: "Senior leadership position at the USGS Leetown Science Center following a 31-year career with the U.S. Department of the Interior.",
  },
  {
    role: "Laboratory Director",
    org: "Conte Anadromous Fish Research Center, MA (USFWS / USGS)",
    period: "",
    desc: "Directed research operations at the Conte Anadromous Fish Research Center.",
  },
  {
    role: "Branch Chief / Section Leader",
    org: "USFWS Wellsboro Research and Development Laboratory, PA",
    period: "1989 – c. 2000s",
    desc: "Managed bioengineering research focused on RAS components — oxygenation, nitrogen and CO₂ stripping, rearing unit hydraulics, biological filtration, and dissolved gas instrumentation — to reduce labor, energy, and water requirements of the USFWS National Fish Hatchery Program.",
  },
  {
    role: "Aquacultural Engineering Researcher",
    org: "Pennsylvania Power and Light Company — Department of Technology and Energy Assessment",
    period: "1982 – 1987",
    desc: "Led aquacultural engineering research in gas transfer and rearing unit hydraulics at a waste heat recovery and aquaculture project involving the culture of several warm water species.",
  },
  {
    role: "Assistant Aquaculturist",
    org: "University of the Virgin Islands Agricultural Experiment Station",
    period: "c. 1978",
    desc: "Initiated RAS research in aquaponics. Master's research addressed the application of ammonium selective ion exchange in trout RAS.",
  },
];

const barnabyAwards = [
  { award: "Award of Excellence in Technology Transfer", org: "Federal Laboratory Consortium", year: "2023" },
  { award: "Award of Excellence", org: "Aquacultural Engineering Society", year: "2005" },
  { award: "FWS Regional Director's Honor Award", org: "U.S. Fish and Wildlife Service", year: "2011" },
  { award: "Award of Excellence in Technology Transfer", org: "Federal Laboratory Consortium", year: "2001" },
  { award: "Award of Excellence", org: "Association of Conservation Engineers", year: "1998" },
];

const barnabyStats = [
  { val: "10", label: "Patents Awarded", sub: "+ 2 in review" },
  { val: "87", label: "Publications", sub: "63 peer-reviewed" },
  { val: "31", label: "Years at U.S. DOI", sub: "Retired 2018" },
  { val: "14", label: "Graduate Students", sub: "Mentored (PhD & MS)" },
];

const barnabyProfessional = [
  "President, Aquacultural Engineering Society",
  "Editorial Board Member, Aquacultural Engineering Society",
  "President, Bioengineering Section — American Fisheries Society",
  "Affiliate Professor, Auburn University",
  "Affiliate Professor, University of Idaho",
];

const barnabyGradStudents = [
  "Auburn University — 1 PhD",
  "Cornell University — 2 PhD, 2 MS",
  "Virginia Tech — 1 PhD, 3 MS",
  "Penn State University — 1 PhD",
  "West Virginia University — 1 MS",
  "University of Idaho — 3 MS",
];

// ── TERRY McCARTHY DATA ──────────────────────────────────────────────────────
// Source: TerryMcCarthyResume(1).docx — all facts verified from document

const terryEducation = [
  { degree: "MBA", field: "Business Administration", institution: "Tulane University", year: "1989" },
  { degree: "B.S.", field: "Undergraduate", institution: "Tulane University", year: "1980" },
];

const terryCareer = [
  {
    role: "Director of Sales",
    org: "VATN Science and Technology, LLC",
    period: "2024 – Present",
    desc: "Applying 35+ years of aquaculture industry experience to business development, customer relations, and sales for VATN's gas management and water treatment systems.",
  },
  {
    role: "General Manager & VP of Business Development — Land Based Business Unit",
    org: "Innovasea",
    period: "2018 – January 2024",
    desc: "Managed the land-based business unit in Baton Rouge, LA following Innovasea's acquisition of Water Management Technologies. Responsibilities included management of R&D efforts addressing improved methods of gas transfer.",
  },
  {
    role: "Co-Founder & Manager",
    org: "Water Management Technologies (WMT)",
    period: "1994 – 2018",
    desc: "Co-founded WMT, which specialized in the development, marketing, and servicing of equipment widely used in state and federal hatchery programs and private aquaculture. Product lines included turnkey RAS systems, water management towers coupling CO₂ stripping with LHO-based oxygenation, Speece cones, disk and drum microscreens, PSA oxygen generators, automated monitoring and control systems, fish rearing tanks, and UV disinfection equipment. Managed customer relations, P&L, HR, vendors, and manufacturing. WMT was sold to Innovasea in 2018.",
  },
  {
    role: "Sales Manager — Equipment Division",
    org: "Zeigler Brothers Inc.",
    period: "Early career",
    desc: "Worked within a newly developed equipment division focused on intensive fish culture operations. Products included LHO manufacturing, fish pumps and graders, solids removal via microscreens, demand and belt fish feeders, and automated water quality monitoring and control instruments.",
  },
];

const terryExpertise = [
  "Turnkey RAS system design and delivery",
  "CO₂ stripping and LHO-based oxygenation systems",
  "Speece cones and vacuum degassing",
  "Disk and drum microscreen solids removal",
  "PSA oxygen generation systems",
  "Automated water quality monitoring and control",
  "UV disinfection equipment",
  "Federal and state hatchery program procurement",
  "Customer relations, P&L, HR, and vendor management",
  "R&D management for gas transfer improvement",
];

export default function OurTeam() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          paddingTop: "9rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,14,26,0.93) 0%, rgba(10,22,40,0.88) 60%, rgba(10,22,40,0.75) 100%)" }} />
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="container relative z-10">
          <RevealSection>
            <p className="section-label mb-3">VATN Science and Technology</p>
            <span className="teal-rule mb-5" />
            <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
              Our Team
            </h1>
            <p className="font-body text-white/70 max-w-2xl mb-8" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              VATN was founded by two professionals whose careers have been spent developing, testing, and deploying aquaculture water treatment systems in federal hatchery programs and commercial facilities across the United States and internationally.
            </p>
            <a href="#contact" className="btn-primary">
              Contact Our Team <ArrowRight size={15} />
            </a>
          </RevealSection>
        </div>
      </section>

      {/* ── TEAM OVERVIEW STRIP ── */}
      <section style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(14,155,138,0.2)" }}>
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              "80+ Years Combined Industry Experience",
              "10 Patents Awarded (Barnaby Watten)",
              "87 Publications (63 Peer-Reviewed)",
              "Federal & State Hatchery Programs",
              "Founded VATN in 2019",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#0E9B8A" }} />
                <span className="font-body text-white/70" style={{ fontSize: "0.78rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BARNABY J. WATTEN, Ph.D.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">

          {/* Name / Title Block */}
          <RevealSection>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8" style={{ borderBottom: "1px solid #E0E8F0" }}>
              <div>
                <p className="section-label mb-2">Co-Founder &amp; Principal Scientist</p>
                <span className="teal-rule mb-4" />
                <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1C2B3A", lineHeight: 1.0 }}>
                  Barnaby J. Watten, Ph.D.
                </h2>
                <p className="font-body mt-2" style={{ color: "#5A7080", fontSize: "0.92rem" }}>
                  VATN Science and Technology, LLC &mdash; Co-Founder
                </p>
              </div>
              {/* Stat strip */}
              <div className="flex flex-wrap gap-6 shrink-0">
                {barnabyStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold" style={{ fontSize: "2rem", color: "#0E9B8A", lineHeight: 1 }}>{s.val}</div>
                    <div className="font-display" style={{ fontSize: "0.78rem", color: "#1C2B3A", marginTop: "2px" }}>{s.label}</div>
                    <div className="font-body" style={{ fontSize: "0.7rem", color: "#8A9BB0" }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Bio Narrative */}
          <RevealSection delay={60}>
            <div className="max-w-3xl mb-14">
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Dr. Barnaby Watten began his career in aquaculture research in 1978 as an Assistant Aquaculturist at the University of the Virgin Islands Agricultural Experiment Station, where he initiated RAS research in aquaponics. His Master's research addressed the application of ammonium selective ion exchange in trout RAS.
              </p>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                From 1982 to 1987, Dr. Watten led aquacultural engineering research in gas transfer and rearing unit hydraulics at Pennsylvania Power and Light Company's waste heat recovery and aquaculture project. Following completion of his Ph.D. at Auburn University in 1989 — focused on oxygen transfer technologies — he was recruited to manage bioengineering research at the USFWS Wellsboro Research and Development Laboratory in Pennsylvania.
              </p>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Over a 31-year career with the U.S. Department of the Interior, Dr. Watten progressed from Principal Investigator to Section Leader, Branch Chief, Laboratory Director of the Conte Anadromous Fish Research Center (MA), and ultimately Deputy Director of the USGS Leetown Science Center. His research program addressed oxygenation, nitrogen and CO₂ stripping, rearing unit hydraulics, biological filtration, and dissolved gas instrumentation — all aimed at reducing the labor, energy, and water requirements of the USFWS National Fish Hatchery Program.
              </p>
              <p className="font-body" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Dr. Watten's research also produced new methods for invasive species control in hatcheries and the international shipping industry, new approaches to improving fish passage rates around dams, fish-friendly hydropower generation methods, and low-cost treatment of acidic coal mine drainage. He retired from the U.S. DOI research program in 2018 and co-founded VATN Science and Technology, LLC in 2019.
              </p>
            </div>
          </RevealSection>

          {/* Three-column detail grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Education */}
            <RevealSection delay={80}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <GraduationCap size={18} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", letterSpacing: "0.04em", textTransform: "uppercase" }}>Education</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {barnabyEducation.map((e) => (
                    <div key={e.degree + e.institution} className="p-4" style={{ backgroundColor: "#F4F6F8", borderLeft: "2px solid #0E9B8A", borderRadius: "2px" }}>
                      <div className="font-display font-bold" style={{ fontSize: "1rem", color: "#1C2B3A" }}>{e.degree} {e.field && `— ${e.field}`}</div>
                      <div className="font-body mt-1" style={{ fontSize: "0.82rem", color: "#5A7080" }}>{e.institution}{e.year ? `, ${e.year}` : ""}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Awards */}
            <RevealSection delay={120}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <Award size={18} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", letterSpacing: "0.04em", textTransform: "uppercase" }}>Awards &amp; Recognition</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {barnabyAwards.map((a) => (
                    <div key={a.award + a.year} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1 w-5 h-5 flex items-center justify-center" style={{ border: "1px solid rgba(14,155,138,0.5)", borderRadius: "1px" }}>
                        <span className="font-display font-bold" style={{ fontSize: "0.6rem", color: "#0E9B8A" }}>{a.year.slice(-2)}</span>
                      </div>
                      <div>
                        <div className="font-body" style={{ fontSize: "0.84rem", color: "#1C2B3A", lineHeight: "1.4" }}>{a.award}</div>
                        <div className="font-body" style={{ fontSize: "0.75rem", color: "#8A9BB0", marginTop: "2px" }}>{a.org}, {a.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Professional Service & Graduate Students */}
            <RevealSection delay={160}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <Users size={18} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", letterSpacing: "0.04em", textTransform: "uppercase" }}>Professional Service</h3>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  {barnabyProfessional.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: "#0E9B8A" }} />
                      <span className="font-body" style={{ fontSize: "0.83rem", color: "#3A5068", lineHeight: "1.5" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2.5 mb-4">
                  <BookOpen size={18} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", letterSpacing: "0.04em", textTransform: "uppercase" }}>Graduate Students Mentored</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {barnabyGradStudents.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: "#0E9B8A" }} />
                      <span className="font-body" style={{ fontSize: "0.83rem", color: "#3A5068", lineHeight: "1.5" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Career Timeline */}
          <RevealSection delay={100}>
            <div className="mt-14">
              <div className="flex items-center gap-2.5 mb-6">
                <Briefcase size={18} style={{ color: "#0E9B8A" }} />
                <h3 className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", letterSpacing: "0.04em", textTransform: "uppercase" }}>Career History</h3>
              </div>
              <div className="flex flex-col gap-0">
                {barnabyCareer.map((item, i) => (
                  <div key={item.role + item.org} className="grid grid-cols-1 lg:grid-cols-4 gap-0" style={{ borderBottom: i < barnabyCareer.length - 1 ? "1px solid #E8EEF4" : "none" }}>
                    <div className="lg:col-span-1 py-5 pr-6" style={{ borderRight: "1px solid #E8EEF4" }}>
                      <div className="font-body" style={{ fontSize: "0.78rem", color: "#0E9B8A", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.period}</div>
                      <div className="font-display font-bold mt-1" style={{ fontSize: "0.95rem", color: "#1C2B3A", lineHeight: "1.3" }}>{item.role}</div>
                    </div>
                    <div className="lg:col-span-3 py-5 lg:pl-6">
                      <div className="font-body mb-1" style={{ fontSize: "0.82rem", color: "#0E9B8A", fontWeight: 600 }}>{item.org}</div>
                      <div className="font-body" style={{ fontSize: "0.85rem", color: "#5A7080", lineHeight: "1.6" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

        </div>
      </section>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "#D4DDE8" }} />

      {/* ══════════════════════════════════════════════════════════════════════
          TERRY McCARTHY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">

          {/* Name / Title Block */}
          <RevealSection>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8" style={{ borderBottom: "1px solid #D4DDE8" }}>
              <div>
                <p className="section-label mb-2">Director of Sales</p>
                <span className="teal-rule mb-4" />
                <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1C2B3A", lineHeight: 1.0 }}>
                  Terry McCarthy
                </h2>
                <p className="font-body mt-2" style={{ color: "#5A7080", fontSize: "0.92rem" }}>
                  VATN Science and Technology, LLC &mdash; Director of Sales
                </p>
              </div>
              <div className="flex flex-wrap gap-6 shrink-0">
                {[
                  { val: "35+", label: "Years in Aquaculture", sub: "Industry experience" },
                  { val: "1994", label: "Founded WMT", sub: "Sold to Innovasea 2018" },
                  { val: "BS + MBA", label: "Tulane University", sub: "1980 & 1989" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold" style={{ fontSize: "2rem", color: "#0E9B8A", lineHeight: 1 }}>{s.val}</div>
                    <div className="font-display" style={{ fontSize: "0.78rem", color: "#1C2B3A", marginTop: "2px" }}>{s.label}</div>
                    <div className="font-body" style={{ fontSize: "0.7rem", color: "#8A9BB0" }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Bio Narrative */}
          <RevealSection delay={60}>
            <div className="max-w-3xl mb-14">
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Terry McCarthy holds a B.S. (1980) and MBA (1989) from Tulane University. He began his career in aquaculture with Zeigler Brothers Inc. as a Sales Manager within a newly developed equipment division focused on intensive fish culture operations — including LHO manufacturing, fish pumps and graders, solids removal via microscreens, demand and belt fish feeders, and automated water quality monitoring and control instruments.
              </p>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                In 1994, Terry co-founded Water Management Technologies (WMT), which specialized in the development, marketing, and servicing of equipment widely used in state and federal hatchery programs as well as private aquaculture. WMT's product line included turnkey RAS systems, water management towers coupling CO₂ stripping with LHO-based oxygenation, Speece cones, disk and drum microscreens, PSA oxygen generators, automated monitoring and control systems, fish rearing tanks, and UV disinfection equipment.
              </p>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                WMT was sold to Innovasea in 2018. Terry then served as General Manager and VP of Business Development of Innovasea's Land Based Business Unit in Baton Rouge, LA — where his responsibilities included management of R&D efforts addressing improved methods of gas transfer. He retired from Innovasea in January 2024.
              </p>
              <p className="font-body" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Terry joined VATN Science and Technology, LLC as Director of Sales, applying over 35 years of aquaculture industry experience — including deep knowledge of state and federal hatchery procurement processes, equipment manufacturing, and customer relations — to VATN's commercial operations.
              </p>
            </div>
          </RevealSection>

          {/* Two-column detail grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Education */}
            <RevealSection delay={80}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <GraduationCap size={18} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", letterSpacing: "0.04em", textTransform: "uppercase" }}>Education</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {terryEducation.map((e) => (
                    <div key={e.degree + e.institution} className="p-4 bg-white" style={{ borderLeft: "2px solid #0E9B8A", borderRadius: "2px" }}>
                      <div className="font-display font-bold" style={{ fontSize: "1rem", color: "#1C2B3A" }}>{e.degree}{e.field ? ` — ${e.field}` : ""}</div>
                      <div className="font-body mt-1" style={{ fontSize: "0.82rem", color: "#5A7080" }}>{e.institution}, {e.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Areas of Expertise */}
            <RevealSection delay={120}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <FlaskConical size={18} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", letterSpacing: "0.04em", textTransform: "uppercase" }}>Equipment &amp; Industry Expertise</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {terryExpertise.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: "#0E9B8A" }} />
                      <span className="font-body" style={{ fontSize: "0.83rem", color: "#3A5068", lineHeight: "1.5" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Career Timeline */}
          <RevealSection delay={100}>
            <div className="mt-14">
              <div className="flex items-center gap-2.5 mb-6">
                <Briefcase size={18} style={{ color: "#0E9B8A" }} />
                <h3 className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", letterSpacing: "0.04em", textTransform: "uppercase" }}>Career History</h3>
              </div>
              <div className="flex flex-col gap-0 bg-white" style={{ borderRadius: "2px", boxShadow: "0 1px 6px rgba(10,22,40,0.06)" }}>
                {terryCareer.map((item, i) => (
                  <div key={item.role + item.org} className="grid grid-cols-1 lg:grid-cols-4 gap-0" style={{ borderBottom: i < terryCareer.length - 1 ? "1px solid #E8EEF4" : "none" }}>
                    <div className="lg:col-span-1 p-5 pr-6" style={{ borderRight: "1px solid #E8EEF4" }}>
                      <div className="font-body" style={{ fontSize: "0.78rem", color: "#0E9B8A", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.period}</div>
                      <div className="font-display font-bold mt-1" style={{ fontSize: "0.95rem", color: "#1C2B3A", lineHeight: "1.3" }}>{item.role}</div>
                    </div>
                    <div className="lg:col-span-3 p-5 lg:pl-6">
                      <div className="font-body mb-1" style={{ fontSize: "0.82rem", color: "#0E9B8A", fontWeight: 600 }}>{item.org}</div>
                      <div className="font-body" style={{ fontSize: "0.85rem", color: "#5A7080", lineHeight: "1.6" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

        </div>
      </section>

      {/* ── COMBINED EXPERIENCE DARK SECTION ── */}
      <section className="py-20 lg:py-24 relative" style={{ backgroundColor: "#060E1A" }}>
        <div className="absolute inset-0 blueprint-cross" />
        <div className="container relative z-10">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Why It Matters</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", lineHeight: 1.05 }}>
                Research Depth. Commercial Experience. Built Into Every System.
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Dr. Watten brings",
                points: [
                  "31 years of USFWS / USGS research",
                  "10 patents in gas transfer technology",
                  "87 publications, 63 peer-reviewed",
                  "Direct experience with the USFWS National Fish Hatchery Program",
                  "Proprietary modeling software developed through decades of applied research",
                ],
              },
              {
                label: "Terry McCarthy brings",
                points: [
                  "35+ years in aquaculture equipment",
                  "Co-founder of Water Management Technologies (1994–2018)",
                  "Deep knowledge of state and federal hatchery procurement",
                  "Manufacturing, P&L, and vendor management experience",
                  "R&D management at Innovasea following WMT acquisition",
                ],
              },
              {
                label: "Together at VATN",
                points: [
                  "Site-specific modeling against real operating conditions",
                  "Equipment selection based on research, not catalog defaults",
                  "Direct experience with the facilities and programs being served",
                  "No intermediaries — you work directly with the people who built the technology",
                  "Founded 2019 — Winchester, VA",
                ],
              },
            ].map((col, i) => (
              <RevealSection key={col.label} delay={i * 70}>
                <div className="p-6 h-full" style={{ borderLeft: "2px solid rgba(14,155,138,0.4)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <p className="section-label mb-4" style={{ color: "#0E9B8A" }}>{col.label}</p>
                  <div className="flex flex-col gap-2.5">
                    {col.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5">
                        <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: "#0E9B8A" }} />
                        <span className="font-body text-white/65" style={{ fontSize: "0.84rem", lineHeight: "1.55" }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-20 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="max-w-2xl">
            <RevealSection>
              <p className="section-label mb-3">Get in Touch</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-3" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.05 }}>
                Speak Directly With Our Team
              </h2>
              <p className="font-body mb-8" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Describe your facility and the water treatment challenge you're facing. Barnaby and Terry will respond directly.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="p-7" style={{ backgroundColor: "#F4F6F8", borderLeft: "3px solid #0E9B8A", borderRadius: "2px" }}>
                <form className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Your Name" className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    <input type="text" placeholder="Organization / Facility" className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  </div>
                  <input type="email" placeholder="Email Address" className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  <textarea rows={3} placeholder="Describe your facility and the challenge you're working through..." className="font-body px-4 py-3 bg-white outline-none resize-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  <button type="submit" className="btn-primary w-fit">
                    Send Your Inquiry <ArrowRight size={15} />
                  </button>
                </form>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
