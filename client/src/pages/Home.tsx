/**
 * VATN Homepage
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed display
 * Copy direction: Command-action, less wordy, modular sections easy to update
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Droplets, Wind, FlaskConical, Layers, Zap, Filter, CheckCircle2, Building2, Microscope, Wrench, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";
const HATCHERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hatchery-systems-X4SD42svGcW9x6EL3d4G2s.webp";

const solutions = [
  { icon: <Droplets size={22} />, label: "Core Technology", title: "Oxygenation & Degassing", desc: "LHOs, spray towers, packed columns, and U-tubes — sized to your site.", href: "/gas-management" },
  { icon: <Wind size={22} />, label: "Gas Removal", title: "CO₂ Stripping & Scrubbing", desc: "Forced-air packed beds and hydroxide scrubbing to reduce CO₂ and linked N₂.", href: "/gas-management" },
  { icon: <FlaskConical size={22} />, label: "Pressure Control", title: "Vacuum Degassing", desc: "Computer-modeled vacuum degassers. Portable or fixed. Eductor-based off-gas removal.", href: "/gas-management" },
  { icon: <Layers size={22} />, label: "Proven Design", title: "Low Head Oxygenators", desc: "Patented 1989. No moving parts. Operates on as little as 9 inches of head.", href: "/gas-management" },
  { icon: <Zap size={22} />, label: "Efficiency", title: "Side-Stream Treatment", desc: "Treat 20–30% of flow at high intensity. Reduce equipment scale by ~70%.", href: "/gas-management" },
  { icon: <Filter size={22} />, label: "Full Program", title: "Solids, Biofiltration & UV", desc: "Microscreens, biofilters, and UV disinfection to complete your water quality program.", href: "/gas-management" },
];

const whyVATN = [
  { num: "01", title: "Site-Specific Modeling", desc: "Every system is modeled against your actual DO, N₂, temperature, pressure, and hydraulic conditions." },
  { num: "02", title: "80+ Years Combined Experience", desc: "Direct experience with USFWS National Fish Hatchery programs and hundreds of commercial sites." },
  { num: "03", title: "Lower Operating Costs", desc: "Equipment is selected to minimize oxygen use, energy, footprint, and maintenance — not just meet targets." },
  { num: "04", title: "Field-Tested at Scale", desc: "Applied at hundreds of RAS and raceway facilities across the United States and internationally." },
  { num: "05", title: "Active R&D Program", desc: "In-house development of next-generation CO₂ stripping and side-stream reactors." },
  { num: "06", title: "Engineering Partner Support", desc: "Technical input, sizing, and modeling support for engineering firms from concept through procurement." },
];

const audiences = [
  { icon: <Building2 size={20} />, title: "Federal Fish Hatcheries", desc: "USFWS and federal agency programs requiring reliable, field-maintainable systems." },
  { icon: <Building2 size={20} />, title: "State Fish Hatcheries", desc: "State fisheries agencies managing coldwater and warmwater production across diverse facility types." },
  { icon: <Microscope size={20} />, title: "Fisheries Biologists & Managers", desc: "Technical staff who need equipment that performs reliably without constant intervention." },
  { icon: <Wrench size={20} />, title: "Aquaculture Engineering Firms", desc: "Design firms who need a technical gas-transfer partner for equipment selection and modeling." },
  { icon: <Droplets size={20} />, title: "RAS & Raceway Operators", desc: "Facilities where dissolved gas control is critical to fish health and production efficiency." },
  { icon: <Users size={20} />, title: "Conservation & Restoration Programs", desc: "Native species and broodstock programs with specific water quality requirements." },
];

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
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(6,14,26,0.94) 0%, rgba(10,22,40,0.80) 55%, rgba(10,22,40,0.40) 100%)" }} />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <RevealSection delay={0}>
              <p className="section-label mb-4">Aquaculture Gas Management &amp; Water Treatment</p>
              <span className="teal-rule mb-6" />
            </RevealSection>
            <RevealSection delay={80}>
              <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.0 }}>
                Engineered for Hatcheries<br />
                <span style={{ color: "#0E9B8A" }}>That Cannot Afford Failure</span>
              </h1>
            </RevealSection>
            <RevealSection delay={160}>
              <p className="font-body text-white/75 mb-8 max-w-xl" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                Site-specific oxygenation, degassing, and CO₂ control for federal and state fish hatcheries — designed around your actual operating conditions.
              </p>
            </RevealSection>
            <RevealSection delay={220}>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Discuss Your Site Requirements <ArrowRight size={16} />
                </a>
                <Link href="/gas-management">
                  <span className="btn-outline">View Solutions</span>
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
              "80+ Years Combined Experience",
              "Federal & State Hatchery Programs",
              "Site-Specific Modeling",
              "Hundreds of RAS & Raceway Sites",
              "Active In-House R&D",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} style={{ color: "#0E9B8A", flexShrink: 0 }} />
                <span className="font-body text-white/70" style={{ fontSize: "0.78rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <p className="section-label mb-3">The VATN Approach</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Built for the Constraints of Real Hatchery Systems
              </h2>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                Standard water treatment equipment is not designed for fish hatcheries. Species-specific gas pressure limits, seasonal source-water swings, limited hydraulic head, aging infrastructure, and remote sites demand a different approach.
              </p>
              <p className="font-body" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                VATN starts with your site conditions — not a product catalog. Every system is modeled against your actual inlet parameters before any equipment recommendation is made.
              </p>
            </RevealSection>
            <RevealSection delay={100}>
              <div className="relative">
                <img src={HATCHERY_IMG} alt="Aquaculture oxygenation equipment" className="w-full object-cover" style={{ borderRadius: "2px", aspectRatio: "4/3" }} />
                <div className="absolute -bottom-4 -left-4 p-5" style={{ backgroundColor: "#0A1628", borderLeft: "3px solid #0E9B8A", maxWidth: "260px" }}>
                  <p className="font-display text-white font-bold" style={{ fontSize: "1.5rem" }}>LHO Technology</p>
                  <p className="font-body text-white/60 mt-1" style={{ fontSize: "0.78rem", lineHeight: "1.5" }}>Patented 1989. No moving parts. Applied at hundreds of sites.</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-xl mb-12">
              <p className="section-label mb-3">Core Solution Areas</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Gas Management &amp; Water Treatment Solutions
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol, i) => (
              <RevealSection key={sol.title} delay={i * 60}>
                <Link href={sol.href}>
                  <div
                    className="group h-full p-6 bg-white cursor-pointer transition-all duration-200"
                    style={{ borderTop: "2px solid #0E9B8A", borderRadius: "2px", boxShadow: "0 1px 4px rgba(10,22,40,0.06)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(10,22,40,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(10,22,40,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-2.5 rounded-sm" style={{ backgroundColor: "rgba(14,155,138,0.1)", color: "#0E9B8A" }}>{sol.icon}</div>
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
                <span className="btn-navy">View All Gas Management Solutions <ArrowRight size={15} /></span>
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
              <div className="max-w-xl">
                <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Technical Differentiation</p>
                <span className="teal-rule mb-5" />
                <h2 className="font-display text-white" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", lineHeight: 1.05 }}>
                  Engineered Solutions.<br />Not Off-the-Shelf Equipment.
                </h2>
              </div>
              <div className="shrink-0 p-4 coord-corner" style={{ border: "1px solid rgba(14,155,138,0.2)", minWidth: "200px" }}>
                <p className="data-label">Firm Profile</p>
                <div className="spec-row"><span className="spec-key">Location</span><span className="spec-val">Winchester, VA</span></div>
                <div className="spec-row"><span className="spec-key">Experience</span><span className="spec-val">80+ combined years</span></div>
                <div className="spec-row"><span className="spec-key">Applications</span><span className="spec-val">Hundreds of sites</span></div>
                <div className="spec-row"><span className="spec-key">R&amp;D</span><span className="spec-val">Active in-house program</span></div>
              </div>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyVATN.map((item, i) => (
              <RevealSection key={item.title} delay={i * 60}>
                <div className="p-6 h-full" style={{ borderLeft: "2px solid rgba(14,155,138,0.35)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(14,155,138,0.5)", borderRadius: "1px" }}>
                      <span className="font-display font-bold" style={{ fontSize: "0.65rem", color: "#0E9B8A" }}>{item.num}</span>
                    </div>
                    <h3 className="font-display text-white" style={{ fontSize: "1.05rem", lineHeight: 1.2 }}>{item.title}</h3>
                  </div>
                  <p className="font-body text-white/55" style={{ fontSize: "0.83rem", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-xl mb-12">
              <p className="section-label mb-3">Who We Serve</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Built for the Teams Running Aquatic Systems
              </h2>
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
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Get in Touch</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
                Bring VATN Your Water Treatment Challenge
              </h2>
              <p className="font-body text-white/65 mb-8" style={{ fontSize: "0.92rem", lineHeight: "1.6" }}>
                Describe your facility and the gas challenge you're facing. VATN will respond with a technical assessment of the options available for your site.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="p-7" style={{ backgroundColor: "rgba(10,22,40,0.7)", borderLeft: "3px solid #0E9B8A", backdropFilter: "blur(8px)" }}>
                <h3 className="font-display text-white mb-4" style={{ fontSize: "1.3rem" }}>Request a Technical Consultation</h3>
                <form className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Your Name" className="font-body px-4 py-3 text-white placeholder-white/40 outline-none" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }} />
                    <input type="text" placeholder="Organization / Facility" className="font-body px-4 py-3 text-white placeholder-white/40 outline-none" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }} />
                  </div>
                  <input type="email" placeholder="Email Address" className="font-body px-4 py-3 text-white placeholder-white/40 outline-none" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", fontSize: "0.88rem" }} />
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
