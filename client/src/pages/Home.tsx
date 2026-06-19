/**
 * VATN Homepage
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed display
 * Sections: Hero, Trust Strip, Intro, Solution Cards, Why VATN, Audience, CTA
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Droplets, Wind, FlaskConical, Layers, Zap, Filter, CheckCircle2, Users, Building2, Microscope, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";
const HATCHERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hatchery-systems-X4SD42svGcW9x6EL3d4G2s.webp";

const solutions = [
  {
    icon: <Droplets size={22} />,
    label: "Core Technology",
    title: "Oxygenation & Degassing",
    desc: "Site-specific reactor design for dissolved oxygen management, including Low Head Oxygenators, spray towers, packed columns, and U-tubes.",
    href: "/gas-management",
  },
  {
    icon: <Wind size={22} />,
    label: "Gas Removal",
    title: "CO₂ Stripping & Scrubbing",
    desc: "Forced air packed beds, spray nozzle reactors, and hydroxide base scrubbing systems engineered to reduce CO₂ and linked N₂ concentrations.",
    href: "/gas-management",
  },
  {
    icon: <FlaskConical size={22} />,
    label: "Pressure Control",
    title: "Vacuum Degassing",
    desc: "Computer-modeled vacuum degassers with eductor-based off-gas removal. Portable and fixed configurations for varying seasonal conditions.",
    href: "/gas-management",
  },
  {
    icon: <Layers size={22} />,
    label: "Proven Design",
    title: "Low Head Oxygenators",
    desc: "Multi-stage LHO technology patented in 1989 and applied at hundreds of RAS and raceway sites. No moving parts. Operates on hydraulic gradients as low as 9 inches.",
    href: "/gas-management",
  },
  {
    icon: <Zap size={22} />,
    label: "Efficiency",
    title: "Side-Stream Treatment",
    desc: "Side-stream designs operating at elevated vacuum or pressure levels. Over-treated product blends with bulk flow to reduce equipment scale by approximately 70%.",
    href: "/gas-management",
  },
  {
    icon: <Filter size={22} />,
    label: "Full Program Support",
    title: "Solids, Biofiltration & UV",
    desc: "Complementary treatment equipment including NP Innovation microscreens, biofiltration systems, and Ultraqua UV light disinfection for comprehensive water quality programs.",
    href: "/gas-management",
  },
];

const whyVATN = [
  {
    title: "Site-Specific Modeling",
    desc: "Reactor performance is evaluated against your actual inlet dissolved oxygen, nitrogen concentrations, temperature, barometric pressure, operating pressures, and gas feed rates — not generic specifications.",
  },
  {
    title: "80+ Years of Combined Experience",
    desc: "VATN's principals bring decades of applied aquaculture and wastewater treatment experience, including direct work with the USFWS National Fish Hatchery program.",
  },
  {
    title: "Minimized Operating Costs",
    desc: "Equipment is selected and designed to minimize capital costs, oxygen consumption, energy use, footprint, and maintenance burden — not just to meet minimum treatment targets.",
  },
  {
    title: "Field-Tested Across Hundreds of Sites",
    desc: "VATN's LHO technology and vacuum degassing systems have been applied successfully at hatchery and aquaculture facilities across the United States and internationally.",
  },
  {
    title: "Active R&D Program",
    desc: "VATN maintains an in-house research program developing next-generation CO₂ stripping and side-stream treatment reactors with significantly reduced footprint and improved efficiency.",
  },
  {
    title: "Engineering Partner Support",
    desc: "VATN works directly with engineering firms and agency teams to provide technical input, equipment sizing, modeling, and solution development from concept through application.",
  },
];

const audiences = [
  { icon: <Building2 size={20} />, title: "Federal Fish Hatcheries", desc: "USFWS and federal agency hatchery programs requiring reliable, maintainable gas management and water treatment systems." },
  { icon: <Building2 size={20} />, title: "State Fish Hatcheries", desc: "State fisheries agencies managing coldwater and warmwater species production across diverse facility types and source-water conditions." },
  { icon: <Microscope size={20} />, title: "Fisheries Biologists & Managers", desc: "Technical staff responsible for water quality, fish health, and production outcomes who need equipment that performs reliably in the field." },
  { icon: <Wrench size={20} />, title: "Aquaculture Engineering Firms", desc: "Design and consulting firms supporting hatchery infrastructure projects who need a technical gas-transfer partner for equipment selection and modeling." },
  { icon: <Droplets size={20} />, title: "RAS & Raceway Operators", desc: "Recirculating aquaculture system and raceway facilities where dissolved gas control is critical to fish health and production efficiency." },
  { icon: <Users size={20} />, title: "Conservation & Restoration Programs", desc: "Programs focused on native species restoration, broodstock management, and conservation hatchery operations with specific water quality requirements." },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
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
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(6,14,26,0.92) 0%, rgba(10,22,40,0.78) 50%, rgba(10,22,40,0.45) 100%)" }} />
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <RevealSection delay={0}>
              <p className="section-label mb-4">Aquaculture Gas Management &amp; Water Treatment</p>
              <span className="teal-rule mb-6" />
            </RevealSection>
            <RevealSection delay={80}>
              <h1
                className="font-display text-white leading-none mb-6"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.0 }}
              >
                Engineered Gas Management<br />
                <span style={{ color: "#0E9B8A" }}>for Aquatic Systems</span><br />
                That Cannot Afford Failure
              </h1>
            </RevealSection>
            <RevealSection delay={160}>
              <p className="font-body text-white/75 mb-8 max-w-2xl" style={{ fontSize: "1.05rem", lineHeight: "1.65" }}>
                VATN Science and Technology helps federal and state fish hatcheries, aquaculture facilities, and engineering firms solve site-specific oxygenation, degassing, CO₂ control, and water treatment challenges — with equipment designed around your actual operating conditions, not generic specifications.
              </p>
            </RevealSection>
            <RevealSection delay={220}>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Discuss Your Site Requirements
                  <ArrowRight size={16} />
                </a>
                <Link href="/gas-management">
                  <span className="btn-outline">View Gas Management Solutions</span>
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>

        {/* Scroll indicator */}
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
              "80+ Years Combined Aquaculture Experience",
              "Federal & State Hatchery Expertise",
              "Site-Specific Modeling & Equipment Design",
              "Hundreds of RAS & Raceway Applications",
              "Active In-House R&D Program",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} style={{ color: "#0E9B8A", flexShrink: 0 }} />
                <span className="font-body text-white/70" style={{ fontSize: "0.78rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO: BUILT FOR COMPLEX AQUATIC SYSTEMS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <p className="section-label mb-3">Why Aquatic Systems Are Different</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-charcoal mb-5" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Built for the Complexity of Real Hatchery &amp; Aquaculture Systems
              </h2>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                Fish hatcheries and aquaculture facilities operate under constraints that standard water treatment equipment is not designed to address. Dissolved gas management in these environments requires accounting for species-specific total gas pressure limits, variable source-water chemistry, seasonal temperature swings, limited hydraulic head, aging infrastructure, and the practical realities of remote sites with minimal maintenance resources.
              </p>
              <p className="font-body" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                VATN's approach begins with your site conditions — not a product catalog. Reactor performance is modeled against your actual inlet dissolved oxygen and nitrogen concentrations, temperature, barometric pressure, operating pressures, gas feed rates, gas composition, and mass-transfer parameters before any equipment recommendation is made.
              </p>
            </RevealSection>
            <RevealSection delay={100}>
              <div className="relative">
                <img
                  src={HATCHERY_IMG}
                  alt="Aquaculture oxygenation equipment in a fish hatchery"
                  className="w-full object-cover"
                  style={{ borderRadius: "2px", aspectRatio: "4/3" }}
                />
                <div
                  className="absolute -bottom-4 -left-4 p-5"
                  style={{ backgroundColor: "#0A1628", borderLeft: "3px solid #0E9B8A", maxWidth: "260px" }}
                >
                  <p className="font-display text-white font-bold" style={{ fontSize: "1.5rem" }}>LHO Technology</p>
                  <p className="font-body text-white/60 mt-1" style={{ fontSize: "0.78rem", lineHeight: "1.5" }}>
                    Patented 1989. Applied at hundreds of RAS and raceway sites. No moving parts.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── SOLUTION AREAS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3">Core Solution Areas</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Gas Management &amp; Water Treatment Solutions
              </h2>
              <p className="font-body mt-4" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                VATN's product and service set covers the full range of dissolved gas management needs in aquaculture and hatchery environments, from oxygenation and degassing to CO₂ control, solids management, and UV disinfection.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol, i) => (
              <RevealSection key={sol.title} delay={i * 60}>
                <Link href={sol.href}>
                  <div
                    className="group h-full p-6 bg-white cursor-pointer transition-all duration-200"
                    style={{
                      borderTop: "2px solid #0E9B8A",
                      borderRadius: "2px",
                      boxShadow: "0 1px 4px rgba(10,22,40,0.06)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(10,22,40,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(10,22,40,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-2.5 rounded-sm" style={{ backgroundColor: "rgba(14,155,138,0.1)", color: "#0E9B8A" }}>
                        {sol.icon}
                      </div>
                      <div>
                        <p className="section-label" style={{ color: "#8A9BB0", fontSize: "0.65rem" }}>{sol.label}</p>
                        <h3 className="font-display" style={{ fontSize: "1.2rem", color: "#1C2B3A", lineHeight: 1.2, marginTop: "2px" }}>{sol.title}</h3>
                      </div>
                    </div>
                    <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.6" }}>{sol.desc}</p>
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
            <div className="mt-10 text-center">
              <Link href="/gas-management">
                <span className="btn-navy">
                  View All Gas Management Solutions
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── WHY VATN ── */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: "#060E1A" }}>
        <div className="absolute inset-0 blueprint-cross" />
        <div className="container relative z-10">
          <RevealSection>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Technical Differentiation</p>
                <span className="teal-rule mb-5" />
                <h2 className="font-display text-white" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", lineHeight: 1.05 }}>
                  The Difference Between Generic Equipment<br />and an Engineered Solution
                </h2>
              </div>
              <div className="shrink-0 p-4 coord-corner" style={{ border: "1px solid rgba(14,155,138,0.2)", minWidth: "200px" }}>
                <p className="data-label">Firm Profile</p>
                <div className="spec-row"><span className="spec-key">Founded</span><span className="spec-val">Winchester, VA</span></div>
                <div className="spec-row"><span className="spec-key">Experience</span><span className="spec-val">80+ combined years</span></div>
                <div className="spec-row"><span className="spec-key">Applications</span><span className="spec-val">Hundreds of sites</span></div>
                <div className="spec-row"><span className="spec-key">R&amp;D Status</span><span className="spec-val">Active in-house program</span></div>
              </div>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyVATN.map((item, i) => (
              <RevealSection key={item.title} delay={i * 60}>
                <div className="p-6 h-full" style={{ borderLeft: "2px solid rgba(14,155,138,0.35)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(14,155,138,0.5)", borderRadius: "1px" }}>
                      <span className="font-display font-bold" style={{ fontSize: "0.65rem", color: "#0E9B8A" }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-white" style={{ fontSize: "1.05rem", lineHeight: 1.2 }}>{item.title}</h3>
                  </div>
                  <p className="font-body text-white/55" style={{ fontSize: "0.83rem", lineHeight: "1.65" }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3">Who We Serve</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Serving the Teams Responsible<br />for Aquatic System Performance
              </h2>
              <p className="font-body mt-4" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                VATN works with the full range of professionals involved in aquaculture and hatchery water treatment — from hatchery managers and fisheries biologists to agency procurement teams and outside engineering consultants.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((aud, i) => (
              <RevealSection key={aud.title} delay={i * 55}>
                <div className="p-6 h-full" style={{ backgroundColor: "#F4F6F8", borderRadius: "2px" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: "#0E9B8A" }}>{aud.icon}</div>
                    <h3 className="font-display" style={{ fontSize: "1.1rem", color: "#1C2B3A", lineHeight: 1.2 }}>{aud.title}</h3>
                  </div>
                  <p className="font-body" style={{ color: "#5A7080", fontSize: "0.84rem", lineHeight: "1.6" }}>{aud.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
          <RevealSection delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/hatchery-solutions">
                <span className="btn-navy">Federal &amp; State Hatchery Solutions <ArrowRight size={15} /></span>
              </Link>
              <Link href="/engineering-partners">
                <span className="btn-outline" style={{ color: "#1C2B3A", borderColor: "#1C2B3A" }}>Engineering Partners <ArrowRight size={15} /></span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section
        id="contact"
        className="py-20 lg:py-28 relative"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-engineering-bg-axr5FwHvEAGP2vXDckcJTG.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,14,26,0.95) 0%, rgba(10,22,40,0.85) 60%, rgba(10,22,40,0.6) 100%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <RevealSection>
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Start a Conversation</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
                Bring VATN Your Water Treatment Challenge
              </h2>
              <p className="font-body text-white/70 mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.65" }}>
                Whether you are evaluating oxygenation options for a new hatchery, troubleshooting dissolved gas issues in an existing facility, or working through a design challenge with an engineering team, VATN can help you identify the right approach for your specific site conditions.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="p-7" style={{ backgroundColor: "rgba(10,22,40,0.7)", borderLeft: "3px solid #0E9B8A", backdropFilter: "blur(8px)" }}>
                <h3 className="font-display text-white mb-4" style={{ fontSize: "1.3rem" }}>Request a Technical Consultation</h3>
                <form className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="font-body px-4 py-3 text-white placeholder-white/40 outline-none focus:border-teal-400"
                      style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }}
                    />
                    <input
                      type="text"
                      placeholder="Organization / Facility"
                      className="font-body px-4 py-3 text-white placeholder-white/40 outline-none"
                      style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="font-body px-4 py-3 text-white placeholder-white/40 outline-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }}
                  />
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your water treatment challenge or project..."
                    className="font-body px-4 py-3 text-white placeholder-white/40 outline-none resize-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }}
                  />
                  <button type="submit" className="btn-primary w-fit mt-1">
                    Send Your Inquiry
                    <ArrowRight size={15} />
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
