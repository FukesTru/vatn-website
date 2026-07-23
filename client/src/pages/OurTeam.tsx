/**
 * VATN Our Team Page
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed display
 * All credentials, dates, institutions, awards, and facts sourced directly from
 * Barnaby J. Watten and Terry McCarthy's submitted resumes. Nothing fabricated.
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Award, FlaskConical, Briefcase, GraduationCap, Users, ChevronDown, Phone, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";
const BARNABY_PHOTO = "/manus-storage/barnaby-watten_38b4a593.png";
const TERRY_PHOTO = "/manus-storage/terry-mccarthy_61855d64.png";

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

function CountUp({ target, suffix = "", duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── BARNABY DATA ─────────────────────────────────────────────────────────────
const barnabyStats = [
  { val: 15, suffix: "", label: "Patents and Provisional Patents", sub: "Gas management & water treatment" },
  { val: 87, suffix: "", label: "Publications", sub: "63 peer-reviewed" },
  { val: 31, suffix: "", label: "Years at U.S. DOI", sub: "Retired 2018" },
  { val: 14, suffix: "", label: "Graduate Students", sub: "Mentored" },
];

const barnabyAwards = [
  { award: "Award of Excellence in Technology Transfer", org: "Federal Laboratory Consortium", year: "2023" },
  { award: "FWS Regional Director's Honor Award", org: "U.S. Fish and Wildlife Service", year: "2011" },
  { award: "Award of Excellence", org: "Aquacultural Engineering Society", year: "2005" },
  { award: "Award of Excellence in Technology Transfer", org: "Federal Laboratory Consortium", year: "2001" },
  { award: "Award of Excellence", org: "Association of Conservation Engineers", year: "1998" },
];

const barnabyCareer = [
  { role: "Founder & Principal Scientist", org: "VATN Science and Technology, LLC", period: "2019 – Present", desc: "Applied gas-transfer research and site-specific system modeling for federal and state hatchery programs and commercial aquaculture." },
  { role: "Laboratory Director", org: "Conte Anadromous Fish Research Center, MA", period: "2010 – 2016", desc: "Directed research operations at the Conte Anadromous Fish Research Center (USFWS / USGS)." },
  { role: "Acting Assistant Center Director", org: "USGS Leetown Science Center", period: "2016 – 2018", desc: "Served as Acting Assistant Center Director at the USGS Leetown Science Center prior to retirement in 2018." },
  { role: "Branch Chief / Section Leader", org: "USFWS Wellsboro R&D Laboratory, PA", period: "1989 – c. 2000s", desc: "Managed bioengineering research on RAS components to reduce labor, energy, and water requirements of the USFWS National Fish Hatchery Program." },
  { role: "Aquacultural Engineering Researcher", org: "Pennsylvania Power and Light Company", period: "1982 – 1987", desc: "Led gas transfer and rearing unit hydraulics research at a waste heat recovery and aquaculture project." },
  { role: "Assistant Aquaculturist", org: "University of the Virgin Islands Agricultural Experiment Station", period: "1977 – 1979", desc: "Initiated RAS research in aquaponics. Master's research addressed ammonium selective ion exchange in trout RAS." },
];

const barnabyProfessional = [
  "President, Aquacultural Engineering Society",
  "Editorial Board Member, Aquacultural Engineering Society",
  "President, Bioengineering Section — American Fisheries Society",
  "Affiliate Professor, Auburn University",
  "Affiliate Professor, University of Idaho",
];

// ── TERRY DATA ───────────────────────────────────────────────────────────────
const terryCareer = [
  { role: "Director of Sales", org: "VATN Science and Technology, LLC", period: "2024 – Present", desc: "Applying 36+ years of aquaculture industry experience to business development, customer relations, and sales for VATN's gas management and water treatment systems." },
  { role: "General Manager & VP of Business Development", org: "Innovasea — Land Based Business Unit, Baton Rouge, LA", period: "2018 – Jan 2024", desc: "Managed the land-based business unit following Innovasea's acquisition of WMT. Responsibilities included R&D management for improved gas transfer methods." },
  { role: "Co-Founder & Manager", org: "Water Management Technologies (WMT)", period: "1994 – 2019", desc: "Co-founded WMT in 1994, specializing in equipment for state and federal hatchery programs. Products included turnkey RAS systems, CO₂ stripping towers, LHO oxygenation, Speece cones, microscreens, PSA and VSA oxygen generators, UV disinfection, and automated monitoring systems. WMT was acquired by Innovasea in February 2019." },
  { role: "Sales Manager — Equipment Division", org: "Zeigler Brothers Inc.", period: "Early career", desc: "Worked within a newly developed equipment division focused on intensive fish culture — LHO manufacturing, fish pumps and graders, microscreens, feeders, and automated water quality monitoring." },
];

const terryExpertise = [
  "Turnkey RAS system design & delivery",
  "CO₂ stripping and LHO-based oxygenation",
  "Speece cones and vacuum degassing",
  "Disk and drum microscreen solids removal",
  "PSA oxygen generation systems",
  "VSA oxygen generation systems",
  "Automated water quality monitoring & control",
  "UV disinfection equipment",
  "Federal and state hatchery procurement",
  "Manufacturing, P&L, HR, and vendor management",
  "R&D management for gas transfer improvement",
];

export default function OurTeam() {
  const [contactForm, setContactForm] = useState({ name: "", organization: "", email: "", phone: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState("");

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setContactSubmitted(true);
      setContactForm({ name: "", organization: "", email: "", phone: "", message: "" });
    },
    onError: () => {
      setContactError("There was a problem sending your inquiry. Please try again or call us directly.");
    },
  });

  function handleContactChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setContactError("");
  }

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim()) {
      setContactError("Please provide your name and email address.");
      return;
    }
    submitContact.mutate({
      name: contactForm.name.trim(),
      organization: contactForm.organization.trim(),
      email: contactForm.email.trim(),
      phone: contactForm.phone.trim(),
      message: contactForm.message.trim(),
    });
  }

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
        <div className="container relative z-10 text-center">
          <RevealSection>
            <p className="section-label mb-3">VATN Science and Technology</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <h1 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
              Our Team
            </h1>
            <p className="font-body text-white/70 max-w-2xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
VATN was founded by Dr. Barnaby J. Watten, a researcher whose career has been spent developing, testing, and deploying aquaculture water treatment systems in federal hatchery programs and commercial facilities across the United States.
            </p>
            <a href="#contact" className="btn-primary">
              Contact Our Team <ArrowRight size={15} />
            </a>
          </RevealSection>
        </div>
      </section>

      {/* ── COMBINED CREDENTIALS STRIP ── */}
      <section style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(14,155,138,0.2)" }}>
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {["80+ Years Combined Industry Experience", "15 Patents and Provisional Patents", "87 Publications (63 Peer-Reviewed)", "Federal & State Hatchery Programs", "VATN Founded 2019 by Dr. Watten"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#0E9B8A" }} />
                <span className="font-body text-white/65" style={{ fontSize: "0.82rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BARNABY J. WATTEN, Ph.D. — FULL PROFILE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">

          {/* ── PHOTO + NAME HERO BLOCK ── */}
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 mb-16 overflow-hidden" style={{ borderRadius: "3px", boxShadow: "0 4px 32px rgba(10,22,40,0.12)" }}>
              {/* Photo column */}
              <div className="lg:col-span-2 relative min-h-72 lg:min-h-0" style={{ backgroundColor: "#0A1628" }}>
                <img
                  src={BARNABY_PHOTO}
                  alt="Dr. Barnaby J. Watten"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "320px", maxHeight: "480px", display: "block" }}
                />
                {/* Gradient overlay on photo */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(10,22,40,0.4) 100%)" }} />
              </div>
              {/* Info column */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center" style={{ backgroundColor: "#060E1A" }}>
                <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Founder &amp; Principal Scientist</p>
                <span className="teal-rule mb-5" />
                <h2 className="font-display text-white mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.0 }}>
                  Barnaby J. Watten, Ph.D.
                </h2>
                <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>
                  Ph.D. Fisheries &amp; Allied Aquacultures — Auburn University, 1989
                </p>
                {/* Animated stat row */}
                <p className="font-display mb-4" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Career Highlights</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {barnabyStats.map((s, i) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold" style={{ fontSize: "2.2rem", color: "#0E9B8A", lineHeight: 1 }}>
                        <CountUp target={s.val} suffix={s.suffix} duration={1600 + i * 200} />
                      </div>
                      <div className="font-display text-white" style={{ fontSize: "0.8rem", marginTop: "3px", letterSpacing: "0.04em" }}>{s.label}</div>
                      <div className="font-body" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>

          {/* ── BIO ── */}
          <RevealSection delay={60}>
            <div className="max-w-3xl mb-14">
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Dr. Barnaby Watten began his career in aquaculture research in 1977 as an Assistant Aquaculturist at the University of the Virgin Islands Agricultural Experiment Station, where he initiated RAS research in aquaponics. His Master's research addressed the application of ammonium selective ion exchange in trout RAS.
              </p>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                From 1982 to 1987, Dr. Watten led aquacultural engineering research in gas transfer and rearing unit hydraulics at Pennsylvania Power and Light Company's waste heat recovery and aquaculture project. Following completion of his Ph.D. at Auburn University in 1989 — focused on oxygen transfer technologies — he was recruited to manage bioengineering research at the USFWS Wellsboro Research and Development Laboratory in Pennsylvania.
              </p>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Over a 31-year career with the U.S. Department of the Interior, Dr. Watten progressed from Principal Investigator to Section Leader, Branch Chief, Laboratory Director of the Conte Anadromous Fish Research Center (MA), and ultimately Deputy Director of the USGS Leetown Science Center. His research program addressed oxygenation, nitrogen and CO₂ stripping, rearing unit hydraulics, biological filtration, and dissolved gas instrumentation — all aimed at reducing the labor, energy, and water requirements of the USFWS National Fish Hatchery Program.
              </p>
              <p className="font-body" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Dr. Watten's research also produced new methods for invasive species control in hatcheries and the international shipping industry, new approaches to improving fish passage rates around dams, fish-friendly hydropower generation methods, and low-cost treatment of acidic coal mine drainage. He retired from the U.S. DOI research program in 2018 and founded VATN Science and Technology, LLC in 2019.
              </p>
            </div>
          </RevealSection>

          {/* ── AWARDS + PROFESSIONAL SERVICE + GRAD STUDENTS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
            <RevealSection delay={80}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <Award size={17} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "0.9rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Awards &amp; Recognition</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {barnabyAwards.map((a) => (
                    <div key={a.award + a.year} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center font-display font-bold text-white" style={{ backgroundColor: "#0E9B8A", borderRadius: "2px", fontSize: "0.82rem" }}>{a.year}</div>
                      <div>
                        <div className="font-body" style={{ fontSize: "0.84rem", color: "#1C2B3A", lineHeight: "1.4" }}>{a.award}</div>
                        <div className="font-body" style={{ fontSize: "0.82rem", color: "#8A9BB0", marginTop: "2px" }}>{a.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={120}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <Users size={17} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "0.9rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Professional Service</h3>
                </div>
                <div className="flex flex-col gap-2.5 mb-8">
                  {barnabyProfessional.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: "#0E9B8A" }} />
                      <span className="font-body" style={{ fontSize: "0.84rem", color: "#3A5068", lineHeight: "1.5" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2.5 mb-4">
                  <GraduationCap size={17} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "0.9rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Education</h3>
                </div>
                {[
                  { d: "Ph.D.", f: "Fisheries & Allied Aquacultures", i: "Auburn University", y: "1989" },
                  { d: "M.S.", f: "Aquaculture / Ion Exchange", i: "Penn State / U. Virgin Islands", y: "1980" },
                  { d: "B.S.", f: "Aquatic Biology / Chemistry", i: "Bemidji State University", y: "1976" },
                ].map((e) => (
                  <div key={e.d} className="p-3 mb-2" style={{ backgroundColor: "#F4F6F8", borderLeft: "2px solid #0E9B8A", borderRadius: "2px" }}>
                    <div className="font-display font-bold" style={{ fontSize: "0.92rem", color: "#1C2B3A" }}>{e.d} — {e.f}</div>
                    <div className="font-body" style={{ fontSize: "0.78rem", color: "#5A7080", marginTop: "2px" }}>{e.i}, {e.y}</div>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection delay={160}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <BookOpen size={17} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "0.9rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Graduate Students Mentored (Engineering and Fisheries programs)</h3>
                </div>
                <p className="font-body mb-4" style={{ fontSize: "0.82rem", color: "#5A7080", lineHeight: "1.5" }}>14 graduate students across 6 universities (PhD and MS programs):</p>
                <div className="flex flex-col gap-2">
                  {["Auburn University — 1 PhD", "Cornell University — 2 PhD, 2 MS", "Virginia Tech — 1 PhD, 3 MS", "Penn State University — 1 PhD", "West Virginia University — 1 MS", "University of Idaho — 3 MS"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: "#0E9B8A" }} />
                      <span className="font-body" style={{ fontSize: "0.83rem", color: "#3A5068", lineHeight: "1.5" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>

          {/* ── BARNABY CAREER TIMELINE ── */}
          <RevealSection delay={100}>
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Briefcase size={17} style={{ color: "#0E9B8A" }} />
                <h3 className="font-display" style={{ fontSize: "0.9rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Career History</h3>
              </div>
              <div className="flex flex-col">
                {barnabyCareer.map((item, i) => (
                  <div key={item.role + item.org} className="grid grid-cols-1 lg:grid-cols-4" style={{ borderBottom: i < barnabyCareer.length - 1 ? "1px solid #E8EEF4" : "none" }}>
                    <div className="lg:col-span-1 py-5 pr-6" style={{ borderRight: "1px solid #E8EEF4" }}>
                      <div className="font-body" style={{ fontSize: "0.8rem", color: "#0E9B8A", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.period}</div>
                      <div className="font-display font-bold mt-1" style={{ fontSize: "0.92rem", color: "#1C2B3A", lineHeight: "1.3" }}>{item.role}</div>
                    </div>
                    <div className="lg:col-span-3 py-5 lg:pl-6">
                      <div className="font-body mb-1" style={{ fontSize: "0.8rem", color: "#0E9B8A", fontWeight: 600 }}>{item.org}</div>
                      <div className="font-body" style={{ fontSize: "0.84rem", color: "#5A7080", lineHeight: "1.6" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "6px", background: "linear-gradient(to right, #060E1A, #0E9B8A, #060E1A)" }} />

      {/* ══════════════════════════════════════════════════════════════════════
          TERRY McCARTHY — FULL PROFILE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">

          {/* ── PHOTO + NAME HERO BLOCK ── */}
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 mb-16 overflow-hidden" style={{ borderRadius: "3px", boxShadow: "0 4px 32px rgba(10,22,40,0.12)" }}>
              {/* Info column — left this time for visual variety */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1" style={{ backgroundColor: "#1E4D7B" }}>
                <p className="section-label mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>Director of Sales</p>
                <span className="teal-rule mb-5" />
                <h2 className="font-display text-white mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.0 }}>
                  Terry McCarthy
                </h2>
                <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>
                  B.S. &amp; MBA — Tulane University (1981, 1989)
                </p>
                <p className="font-display mb-4" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Career Highlights</p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { val: 36, suffix: "+", label: "Years of Experience", sub: "Hatchery Industry" },
                    { val: 1994, suffix: "", label: "Co-Founded WMT", sub: "Sold to Innovasea 2019" },
                    { val: 24, suffix: "+", label: "Years Running WMT", sub: "State & federal hatcheries" },
                  ].map((s, i) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold" style={{ fontSize: "2.2rem", color: "#0E9B8A", lineHeight: 1 }}>
                        <CountUp target={s.val} suffix={s.suffix} duration={1600 + i * 200} />
                      </div>
                      <div className="font-display text-white" style={{ fontSize: "0.8rem", marginTop: "3px", letterSpacing: "0.04em" }}>{s.label}</div>
                      <div className="font-body" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Photo column */}
              <div className="lg:col-span-2 relative min-h-72 lg:min-h-0 order-1 lg:order-2" style={{ backgroundColor: "#0A1628" }}>
                <img
                  src={TERRY_PHOTO}
                  alt="Terry McCarthy"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "320px", maxHeight: "480px", display: "block" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 60%, rgba(30,77,123,0.3) 100%)" }} />
              </div>
            </div>
          </RevealSection>

          {/* ── BIO ── */}
          <RevealSection delay={60}>
            <div className="max-w-3xl mb-14">
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Terry McCarthy holds a B.S. (1981) and MBA (1989) from Tulane University. He began his career in aquaculture with Zeigler Brothers Inc. as a Sales Manager within a newly developed equipment division focused on intensive fish culture operations — including LHO manufacturing, fish pumps and graders, solids removal via microscreens, demand and belt fish feeders, and automated water quality monitoring and control instruments.
              </p>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                In 1994, Terry co-founded Water Management Technologies (WMT), which specialized in the development, marketing, and servicing of equipment widely used in state and federal hatchery programs as well as private aquaculture. WMT's product line included turnkey RAS systems, water management towers coupling CO₂ stripping with LHO-based oxygenation, Speece cones, disk and drum microscreens, PSA and VSA oxygen generators, automated monitoring and control systems, fish rearing tanks, and UV disinfection equipment. WMT was acquired by Innovasea in February 2019.
              </p>
              <p className="font-body" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                Terry then served as General Manager and VP of Business Development of Innovasea's Land Based Business Unit in Baton Rouge, LA, retiring in January 2024. He joined VATN Science and Technology, LLC as Director of Sales, bringing 36+ years of aquaculture industry experience — including deep knowledge of state and federal hatchery procurement — to VATN's commercial operations.
              </p>
            </div>
          </RevealSection>

          {/* ── EXPERTISE + EDUCATION ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            <RevealSection delay={80}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <FlaskConical size={17} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "0.9rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Equipment &amp; Industry Expertise</h3>
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
            <RevealSection delay={120}>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <GraduationCap size={17} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display" style={{ fontSize: "0.9rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Education</h3>
                </div>
                {[
                  { d: "MBA", f: "Business Administration", i: "Tulane University", y: "1989" },
                  { d: "B.S.", f: "Undergraduate", i: "Tulane University", y: "1981" },
                ].map((e) => (
                  <div key={e.d} className="p-4 mb-3 bg-white" style={{ borderLeft: "2px solid #0E9B8A", borderRadius: "2px" }}>
                    <div className="font-display font-bold" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>{e.d} — {e.f}</div>
                    <div className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080", marginTop: "2px" }}>{e.i}, {e.y}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* ── TERRY CAREER TIMELINE ── */}
          <RevealSection delay={100}>
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Briefcase size={17} style={{ color: "#0E9B8A" }} />
                <h3 className="font-display" style={{ fontSize: "0.9rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Career History</h3>
              </div>
              <div className="flex flex-col bg-white" style={{ borderRadius: "2px", boxShadow: "0 1px 8px rgba(10,22,40,0.06)" }}>
                {terryCareer.map((item, i) => (
                  <div key={item.role + item.org} className="grid grid-cols-1 lg:grid-cols-4" style={{ borderBottom: i < terryCareer.length - 1 ? "1px solid #E8EEF4" : "none" }}>
                    <div className="lg:col-span-1 p-5 pr-6" style={{ borderRight: "1px solid #E8EEF4" }}>
                      <div className="font-body" style={{ fontSize: "0.8rem", color: "#0E9B8A", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.period}</div>
                      <div className="font-display font-bold mt-1" style={{ fontSize: "0.92rem", color: "#1C2B3A", lineHeight: "1.3" }}>{item.role}</div>
                    </div>
                    <div className="lg:col-span-3 p-5 lg:pl-6">
                      <div className="font-body mb-1" style={{ fontSize: "0.8rem", color: "#0E9B8A", fontWeight: 600 }}>{item.org}</div>
                      <div className="font-body" style={{ fontSize: "0.84rem", color: "#5A7080", lineHeight: "1.6" }}>{item.desc}</div>
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
                points: ["31 years of USFWS / USGS research", "15 patents and provisional patents in gas transfer technology", "87 publications, 63 peer-reviewed", "Direct experience with the USFWS National Fish Hatchery Program", "Proprietary modeling software developed through decades of applied research"],
              },
              {
                label: "Terry McCarthy brings",
                points: ["36+ years of aquaculture industry experience", "Co-founder of Water Management Technologies (1994–2019)", "Deep knowledge of state and federal hatchery procurement", "Manufacturing, P&L, and vendor management experience", "R&D management at Innovasea following WMT acquisition"],
              },
              {
                label: "Together at VATN",
                points: ["Site-specific modeling against real operating conditions", "Equipment selection based on research, not catalog defaults", "Direct experience with the facilities and programs being served", "No intermediaries — you work directly with the people who built the technology", "Founded 2019 — Winchester, VA"],
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
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
                {contactSubmitted ? (
                  <div className="flex flex-col items-start gap-3">
                    <CheckCircle2 size={26} style={{ color: "#0E9B8A" }} />
                    <p className="font-display font-bold" style={{ fontSize: "1.1rem", color: "#1C2B3A" }}>Inquiry Received</p>
                    <p className="font-body" style={{ color: "#3A5068", fontSize: "0.88rem", lineHeight: "1.6" }}>Thank you for reaching out. Barnaby or Terry will be in contact with you shortly.</p>
                  </div>
                ) : (
                  <form className="flex flex-col gap-3" onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} placeholder="Your Name *" required className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                      <input type="text" name="organization" value={contactForm.organization} onChange={handleContactChange} placeholder="Organization / Facility" className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} placeholder="Email Address *" required className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                      <input type="tel" name="phone" value={contactForm.phone} onChange={handleContactChange} placeholder="Phone Number" className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    </div>
                    <textarea name="message" value={contactForm.message} onChange={handleContactChange} rows={3} placeholder="Describe your facility and the challenge you're working through..." className="font-body px-4 py-3 bg-white outline-none resize-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    {contactError && <p className="font-body" style={{ color: "#C0392B", fontSize: "0.84rem" }}>{contactError}</p>}
                    <button type="submit" className="btn-primary w-fit" disabled={submitContact.isPending} style={{ opacity: submitContact.isPending ? 0.7 : 1 }}>
                      {submitContact.isPending ? "Sending..." : (<>Send Your Inquiry <ArrowRight size={15} /></>)}
                    </button>
                  </form>
                )}
              </div>
            </RevealSection>

            {/* Direct Contact Cards */}
            <RevealSection delay={120}>
              <div className="flex flex-col gap-5">
                <p className="section-label" style={{ color: "#0E9B8A" }}>Direct Contact</p>
                <span className="teal-rule" />
                {/* Terry */}
                <div className="p-6" style={{ backgroundColor: "#0A1628", borderRadius: "2px", borderLeft: "3px solid #0E9B8A" }}>
                  <p className="font-display text-white font-bold mb-0.5" style={{ fontSize: "1.1rem" }}>Terry McCarthy</p>
                  <p className="font-body mb-4" style={{ color: "#0E9B8A", fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Director of Sales</p>
                  <a href="tel:2252294711" className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors" style={{ fontSize: "0.88rem" }}>
                    <Phone size={14} style={{ color: "#0E9B8A", flexShrink: 0 }} />
                    (225) 229-4711
                  </a>
                </div>
                {/* Barnaby */}
                <div className="p-6" style={{ backgroundColor: "#0A1628", borderRadius: "2px", borderLeft: "3px solid #0E9B8A" }}>
                  <p className="font-display text-white font-bold mb-0.5" style={{ fontSize: "1.1rem" }}>Dr. Barnaby J. Watten</p>
                  <p className="font-body mb-4" style={{ color: "#0E9B8A", fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Founder &amp; Principal Scientist</p>
                  <a href="tel:5403336859" className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors" style={{ fontSize: "0.88rem" }}>
                    <Phone size={14} style={{ color: "#0E9B8A", flexShrink: 0 }} />
                    (540) 333-6859
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
