/**
 * VATN Homepage — People-First Rewrite
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed display
 * Story arc: (1) Led by experts → (2) Deep research & field experience → (3) Solve real challenges
 *            → (4) Products are tools → (5) Contact them for your project
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight, ChevronDown, Droplets, Wind, FlaskConical, Layers,
  Zap, Filter, CheckCircle2, BookOpen, Award, Microscope, Users, Wrench
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";
const HATCHERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hatchery-systems-X4SD42svGcW9x6EL3d4G2s.webp";
const BARNABY_IMG = "/manus-storage/barnaby-headshot_5b2b5b7b.jpg";
const TERRY_IMG = "/manus-storage/terry-headshot_a3c4d5e6.jpg";

const solutions = [
  { icon: <Droplets size={22} />, label: "Core Technology", title: "Oxygenation & Degassing", desc: "LHOs, spray towers, packed columns, and U-tubes — sized to your site.", href: "/gas-management" },
  { icon: <Wind size={22} />, label: "Gas Removal", title: "CO₂ Stripping & Scrubbing", desc: "Forced-air packed beds and hydroxide scrubbing to reduce CO₂ and linked N₂.", href: "/gas-management" },
  { icon: <FlaskConical size={22} />, label: "Pressure Control", title: "Vacuum Degassing", desc: "Computer-modeled vacuum degassers. Portable or fixed. Eductor-based off-gas removal.", href: "/gas-management" },
  { icon: <Layers size={22} />, label: "Proven Design", title: "Low Head Oxygenators", desc: "Patented 1989. No moving parts. Operates on as little as 9 inches of head.", href: "/gas-management" },
  { icon: <Zap size={22} />, label: "Efficiency", title: "Side-Stream Treatment", desc: "Treat 20–30% of flow at high intensity. Reduce equipment scale by ~70%.", href: "/gas-management" },
  { icon: <Filter size={22} />, label: "Full Program", title: "Solids, Biofiltration & UV", desc: "Microscreens, biofilters, and UV disinfection to complete your water quality program.", href: "/our-team#contact" },
];

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; observer.disconnect(); } },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(6,14,26,0.95) 0%, rgba(10,22,40,0.82) 55%, rgba(10,22,40,0.45) 100%)" }} />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="container relative z-10 pt-24 pb-16">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <RevealSection delay={0}>
              <p className="section-label mb-4">Aquaculture Gas Management &amp; Water Treatment</p>
              <span className="teal-rule mb-6" style={{ margin: "0 auto 1.5rem" }} />
            </RevealSection>
            <RevealSection delay={80}>
              <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(3.2rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.0 }}>
                Science-Driven Experts.<br />
                <span style={{ color: "#0E9B8A" }}>Real Hatchery Solutions.</span>
              </h1>
            </RevealSection>
            <RevealSection delay={160}>
              <p className="font-body text-white/75 mb-8" style={{ fontSize: "1.15rem", lineHeight: "1.7", maxWidth: "680px", margin: "0 auto 2rem" }}>
                VATN is led by one of the most published researchers in aquaculture water treatment. With 90+ peer-reviewed publications, 10 patents, and over half a century of hands-on hatchery work, VATN's team brings a depth of expertise that no equipment catalog can replicate.
              </p>
            </RevealSection>
            <RevealSection delay={220}>
              <div className="flex flex-wrap gap-3" style={{ justifyContent: "center" }}>
                <a href="#contact" className="btn-primary">
                  Discuss Your Project <ArrowRight size={16} />
                </a>
                <Link href="/our-team">
                  <span className="btn-outline">Meet the Team</span>
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
          <span className="font-body" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(14,155,138,0.2)" }}>
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              "90+ Peer-Reviewed Publications",
              "10 Patents",
              "65+ Yrs Industry Experience",
              "Federal & State Hatchery Programs",
              "Site-Specific Engineering",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} style={{ color: "#0E9B8A", flexShrink: 0 }} />
                <span className="font-body text-white/70" style={{ fontSize: "0.78rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PEOPLE FIRST — WHO IS VATN ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <p className="section-label mb-3">The People Behind VATN</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Decades of Research. Applied in the Field.
              </h2>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                VATN was founded in 2019 by Dr. Barnaby J. Watten and Terry McCarthy — two professionals who have spent their careers solving the water quality and gas management problems that hatcheries actually face. Their work is not theoretical. It is built from decades of field research, equipment design, and direct collaboration with federal and state fish hatchery programs.
              </p>
              <p className="font-body mb-6" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                Dr. Watten spent 31 years as a research engineer with the U.S. Fish and Wildlife Service, authoring more than 87 peer-reviewed publications and holding 10 patents. Terry McCarthy co-founded WMT, Inc. in 1994 — a specialized aquaculture equipment firm that served state and federal hatcheries for over two decades before being acquired by Innovasea in 2018. Together, they bring a combination of scientific depth and practical hatchery experience that is rare in this industry.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/our-team">
                  <span className="btn-navy">Meet Dr. Watten &amp; Terry <ArrowRight size={15} /></span>
                </Link>
                <Link href="/publications">
                  <span className="btn-outline" style={{ color: "#1C2B3A", borderColor: "#1C2B3A" }}>View Publications <ArrowRight size={15} /></span>
                </Link>
              </div>
            </RevealSection>
            <RevealSection delay={100}>
              <div className="relative">
                <img src={HATCHERY_IMG} alt="Aquaculture hatchery systems" className="w-full object-cover" style={{ borderRadius: "2px", aspectRatio: "4/3" }} />
                {/* Credential callout */}
                <div className="absolute -bottom-4 -left-4 p-5" style={{ backgroundColor: "#0A1628", borderLeft: "3px solid #0E9B8A", maxWidth: "280px" }}>
                  <p className="font-display text-white font-bold" style={{ fontSize: "1.4rem", lineHeight: 1.1 }}>90+ Publications</p>
                  <p className="font-body text-white/60 mt-1" style={{ fontSize: "0.78rem", lineHeight: "1.5" }}>Peer-reviewed research spanning oxygenation, CO₂ control, nitrogen supersaturation, and RAS design.</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY STATS ── */}
      <section className="py-16" style={{ backgroundColor: "#0A1628" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "90+", label: "Peer-Reviewed Publications", sub: "Dr. Barnaby J. Watten" },
              { num: "10", label: "U.S. Patents Held", sub: "Gas management & water treatment" },
              { num: "31", label: "Years USFWS Research", sub: "National fish hatchery programs" },
              { num: "32+", label: "Years Hatchery Industry", sub: "Terry McCarthy, WMT & VATN" },
            ].map((stat, i) => (
              <RevealSection key={stat.num} delay={i * 70}>
                <div className="text-center p-5" style={{ borderTop: "2px solid rgba(14,155,138,0.4)" }}>
                  <p className="font-display font-bold" style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#0E9B8A", lineHeight: 1 }}>{stat.num}</p>
                  <p className="font-display text-white mt-1" style={{ fontSize: "0.9rem", lineHeight: 1.3 }}>{stat.label}</p>
                  <p className="font-body text-white/45 mt-1" style={{ fontSize: "0.72rem" }}>{stat.sub}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW VATN WORKS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-xl mb-12">
              <p className="section-label mb-3">How VATN Works</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Problems First. Equipment Second.
              </h2>
              <p className="font-body mt-4" style={{ color: "#3A5068", fontSize: "0.93rem", lineHeight: "1.7" }}>
                VATN does not start with a product catalog. They start with your site — your water source, your species, your infrastructure, your constraints. The equipment recommendation comes after the problem is understood.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Understand Your Site",
                desc: "Every project begins with a detailed assessment of your inlet water quality, dissolved gas levels, temperature, hydraulic head, species requirements, and facility layout. No assumptions.",
                icon: <Microscope size={20} />,
              },
              {
                step: "02",
                title: "Model the Solution",
                desc: "VATN uses computer modeling to evaluate which gas transfer technologies will perform at your site conditions. Sizing is based on your actual data, not industry averages.",
                icon: <BookOpen size={20} />,
              },
              {
                step: "03",
                title: "Apply the Right Tools",
                desc: "Equipment is selected, configured, and specified to solve the identified problem — whether that is oxygenation, CO₂ removal, nitrogen supersaturation, or a combination of challenges.",
                icon: <Wrench size={20} />,
              },
            ].map((item, i) => (
              <RevealSection key={item.step} delay={i * 80}>
                <div className="p-7 h-full bg-white" style={{ borderTop: "2px solid #0E9B8A", borderRadius: "2px", boxShadow: "0 1px 4px rgba(10,22,40,0.06)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-sm" style={{ backgroundColor: "rgba(14,155,138,0.1)", color: "#0E9B8A" }}>{item.icon}</div>
                    <span className="font-display font-bold" style={{ fontSize: "1.8rem", color: "rgba(14,155,138,0.25)", lineHeight: 1 }}>{item.step}</span>
                  </div>
                  <h3 className="font-display mb-2" style={{ fontSize: "1.2rem", color: "#1C2B3A", lineHeight: 1.2 }}>{item.title}</h3>
                  <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#060E1A" }}>
        <div className="absolute inset-0 blueprint-cross pointer-events-none" style={{ position: "relative" }} />
        <div className="container">
          <RevealSection>
            <div className="max-w-xl mb-12">
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Solution Areas</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", lineHeight: 1.1 }}>
                The Tools VATN Uses to Solve Your Problem
              </h2>
              <p className="font-body text-white/55 mt-4" style={{ fontSize: "0.92rem", lineHeight: "1.65" }}>
                These are not off-the-shelf products. They are engineered systems that VATN selects, sizes, and configures based on your specific water quality challenge.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol, i) => (
              <RevealSection key={sol.title} delay={i * 60}>
                <Link href={sol.href}>
                  <div
                    className="group h-full p-6 cursor-pointer transition-all duration-200"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(14,155,138,0.15)", borderRadius: "2px" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(14,155,138,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(14,155,138,0.4)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(14,155,138,0.15)"; }}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-2.5 rounded-sm" style={{ backgroundColor: "rgba(14,155,138,0.12)", color: "#0E9B8A" }}>{sol.icon}</div>
                      <div>
                        <p className="section-label" style={{ color: "#4A7A70", fontSize: "0.65rem" }}>{sol.label}</p>
                        <h3 className="font-display text-white" style={{ fontSize: "1.15rem", lineHeight: 1.2, marginTop: "2px" }}>{sol.title}</h3>
                      </div>
                    </div>
                    <p className="font-body text-white/50" style={{ fontSize: "0.84rem", lineHeight: "1.6" }}>{sol.desc}</p>
                    <div className="mt-4 flex items-center gap-1.5" style={{ color: "#0E9B8A" }}>
                      <span className="font-display font-semibold" style={{ fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>Learn More</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
          <RevealSection delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/gas-management">
                <span className="btn-primary">Gas Management Solutions <ArrowRight size={15} /></span>
              </Link>
              <Link href="/our-team#contact">
                <span className="btn-outline">Discuss Your Requirements <ArrowRight size={15} /></span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── PUBLICATIONS CREDIBILITY SECTION ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection delay={100}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <BookOpen size={18} />, label: "Publications", value: "87+ peer-reviewed papers", desc: "Covering oxygenation, CO₂ stripping, nitrogen supersaturation, RAS design, fish physiology, and more." },
                  { icon: <Award size={18} />, label: "Patents", value: "10 U.S. Patents", desc: "Including the patented Low Head Oxygenator (1989) and multiple gas management innovations." },
                  { icon: <Microscope size={18} />, label: "Research Background", value: "Auburn Ph.D. (1989)", desc: "Dr. Watten's doctoral research at Auburn University laid the foundation for modern aquaculture gas management." },
                  { icon: <Users size={18} />, label: "Industry Experience", value: "32+ years, Terry McCarthy", desc: "Co-founded WMT, Inc. in 1994. Served state and federal hatchery programs for over two decades." },
                ].map((item, i) => (
                  <RevealSection key={item.label} delay={i * 60}>
                    <div className="flex gap-4 p-5" style={{ backgroundColor: "#F4F6F8", borderLeft: "3px solid #0E9B8A", borderRadius: "0 2px 2px 0" }}>
                      <div className="shrink-0 mt-0.5" style={{ color: "#0E9B8A" }}>{item.icon}</div>
                      <div>
                        <p className="section-label mb-0.5" style={{ fontSize: "0.65rem" }}>{item.label}</p>
                        <p className="font-display" style={{ fontSize: "1rem", color: "#1C2B3A", lineHeight: 1.2 }}>{item.value}</p>
                        <p className="font-body mt-1" style={{ color: "#5A7080", fontSize: "0.82rem", lineHeight: "1.55" }}>{item.desc}</p>
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </RevealSection>
            <RevealSection>
              <p className="section-label mb-3">Scientific Credibility</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                The Research Behind the Results
              </h2>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                The science behind VATN's approach is not borrowed from other industries. It was developed specifically for aquaculture — through decades of field research, controlled experiments, and direct collaboration with the hatchery programs that depend on it.
              </p>
              <p className="font-body mb-6" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                Dr. Watten's 87+ peer-reviewed publications represent one of the most comprehensive bodies of work in aquaculture water treatment. When VATN recommends a system configuration, it is backed by research — not a sales pitch.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/publications">
                  <span className="btn-navy">Browse Publications <ArrowRight size={15} /></span>
                </Link>
                <Link href="/our-team">
                  <span className="btn-outline" style={{ color: "#1C2B3A", borderColor: "#1C2B3A" }}>Meet the Team <ArrowRight size={15} /></span>
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: "#060E1A" }}>
        <div className="absolute inset-0 blueprint-cross pointer-events-none" />
        <div className="container relative z-10">
          <RevealSection>
            <div className="max-w-xl mb-12">
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Who VATN Works With</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", lineHeight: 1.1 }}>
                Built for the Teams Running Aquatic Systems
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <CheckCircle2 size={18} />, title: "Federal Fish Hatcheries", desc: "USFWS and federal agency programs requiring reliable, field-maintainable systems with full technical support." },
              { icon: <CheckCircle2 size={18} />, title: "State Fish Hatcheries", desc: "State fisheries agencies managing coldwater and warmwater production across diverse facility types and water sources." },
              { icon: <CheckCircle2 size={18} />, title: "Aquaculture Engineering Firms", desc: "Design firms who need a technical gas-transfer partner for equipment selection, sizing, and modeling support." },
              { icon: <CheckCircle2 size={18} />, title: "RAS & Raceway Operators", desc: "Facilities where dissolved gas control is critical to fish health, survival, and production efficiency." },
              { icon: <CheckCircle2 size={18} />, title: "Fisheries Biologists & Managers", desc: "Technical staff who need equipment that performs reliably without constant intervention or specialized maintenance." },
              { icon: <CheckCircle2 size={18} />, title: "Conservation & Restoration Programs", desc: "Native species and broodstock programs with specific water quality requirements and limited infrastructure." },
            ].map((aud, i) => (
              <RevealSection key={aud.title} delay={i * 55}>
                <div className="p-6 h-full" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(14,155,138,0.12)", borderRadius: "2px" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: "#0E9B8A" }}>{aud.icon}</div>
                    <h3 className="font-display text-white" style={{ fontSize: "1.05rem", lineHeight: 1.2 }}>{aud.title}</h3>
                  </div>
                  <p className="font-body text-white/50" style={{ fontSize: "0.83rem", lineHeight: "1.6" }}>{aud.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
          <RevealSection delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/hatchery-solutions">
                <span className="btn-primary">Hatchery Solutions <ArrowRight size={15} /></span>
              </Link>
              <Link href="/engineering-partners">
                <span className="btn-outline">Engineering Partners <ArrowRight size={15} /></span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section
        id="contact"
        className="py-20 lg:py-28 relative"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-engineering-bg-axr5FwHvEAGP2vXDckcJTG.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,14,26,0.97) 0%, rgba(10,22,40,0.88) 60%, rgba(10,22,40,0.65) 100%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <RevealSection>
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Start a Conversation</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
                Bring VATN Your Water Treatment Challenge
              </h2>
              <p className="font-body text-white/65 mb-8" style={{ fontSize: "0.92rem", lineHeight: "1.65" }}>
                Describe your facility and the challenge you are facing. Dr. Watten and Terry will respond with a technical assessment of the options available for your specific site conditions.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="p-7" style={{ backgroundColor: "rgba(10,22,40,0.75)", borderLeft: "3px solid #0E9B8A", backdropFilter: "blur(8px)" }}>
                <h3 className="font-display text-white mb-4" style={{ fontSize: "1.3rem" }}>Request a Technical Consultation</h3>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Your Name" className="font-body px-4 py-3 text-white placeholder-white/40 outline-none" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }} />
                    <input type="text" placeholder="Organization / Facility" className="font-body px-4 py-3 text-white placeholder-white/40 outline-none" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }} />
                  </div>
                  <input type="email" placeholder="Email Address" className="font-body px-4 py-3 text-white placeholder-white/40 outline-none" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }} />
                  <input type="tel" placeholder="Phone Number (optional)" className="font-body px-4 py-3 text-white placeholder-white/40 outline-none" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }} />
                  <textarea rows={3} placeholder="Describe your water treatment challenge or project..." className="font-body px-4 py-3 text-white placeholder-white/40 outline-none resize-none" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }} />
                  <button type="submit" className="btn-primary w-fit mt-1">
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
