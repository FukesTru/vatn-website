/**
 * VATN Gas Management Solutions Page
 * Style: Field-Grade Precision
 * Replaces the existing vatnusa.com/gas-management-1 with a modern, structured technical page
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, AlertTriangle, CheckCircle2, Droplets, Wind, FlaskConical, Layers, Zap, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GHLForm from "@/components/GHLForm";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";
const EQUIPMENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hatchery-systems-X4SD42svGcW9x6EL3d4G2s.webp";

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition = `opacity 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}ms`;
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

const problems = [
  { problem: "Low Dissolved Oxygen", impact: "Stress, reduced growth, and mortality in fish populations. Limits production density in RAS and raceway systems." },
  { problem: "Elevated CO₂", impact: "Respiratory acidosis, reduced feed conversion, and chronic fish health issues. Often underestimated in high-density RAS." },
  { problem: "Excess Nitrogen / High TGP", impact: "Gas bubble trauma in fish. Total dissolved gas pressure must be managed carefully relative to ambient barometric pressure." },
  { problem: "Hydraulic Constraints", impact: "Limited available head restricts equipment options. Many sites cannot support conventional treatment approaches." },
  { problem: "Limited Footprint", impact: "Existing infrastructure leaves minimal space for new treatment equipment. Compact solutions are required." },
  { problem: "High Oxygen or Energy Costs", impact: "Inefficient oxygenation systems consume excess oxygen and energy. Proper modeling reduces both." },
];

const technologies = [
  {
    icon: <Droplets size={24} />,
    title: "Oxygenation & Degassing Equipment",
    body: "Reactor performance is modeled against your site's actual DO, N₂, temperature, barometric pressure, alpha factor, and hydraulic conditions. VATN's proprietary software identifies operating conditions that minimize capital and variable costs while hitting target dissolved gas levels.",
    specs: ["Spray towers", "Hooded surface agitators", "Packed columns", "U-tubes", "Vacuum degassers", "Low profile oxygenator"],
  },
  {
    icon: <Layers size={24} />,
    title: "Low Head Oxygenators (LHO)",
    body: "Developed and patented in 1989. No moving parts. Operates on hydraulic gradients as low as 9 inches. Widely applied at RAS and raceway facilities across the United States.",
    specs: ["No moving parts", "Operates on 9\" hydraulic gradient", "Multi-stage configuration", "Patented 1989", "RAS and raceway compatible"],
  },
  {
    icon: <Wind size={24} />,
    title: "CO₂ Control Methods",
    body: "Forced air packed beds, spray nozzle reactors, surface agitators, and hydroxide base scrubbing — each evaluated against your site conditions. Scrubber use also reduces dissolved N₂, lowering oxygenation costs.",
    specs: ["Forced air packed beds", "Spray nozzle reactors", "Surface agitators", "Hydroxide base scrubbing", "Concurrent N₂ reduction"],
  },
  {
    icon: <FlaskConical size={24} />,
    title: "Vacuum Degassing",
    body: "Computer-modeled for each site. Eductor-based off-gas removal eliminates mechanical vacuum pumps. Portable and fixed configurations. Side-stream blending reduces equipment scale by approximately 70–75%.",
    specs: ["Eductor-based off-gas removal", "3–5 ft. standard vacuum operation", "13–15 ft. side-stream configurations", "Portable designs available", "Automated performance control"],
  },
  {
    icon: <Zap size={24} />,
    title: "Side-Stream Treatment",
    body: "Treat 25–30% of bulk flow at high intensity. Blend back with untreated flow to hit targets. Reduces required equipment scale by ~70%. New low-profile reactor reduces volume requirements by an additional 50%.",
    specs: ["25–30% of bulk flow treated", "~70% reduction in equipment scale", "Packing-free operation", "O₂, O₃, CO₂, and N₂ capable", "New low-profile reactor design"],
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Packed Columns",
    body: "Packing type, column dimensions, and operating parameters are selected against your site conditions. New designs in development eliminate plastic packing, operate at 1/3 the footprint, and induce air flow without blower assist.",
    specs: ["Site-specific sizing", "Multiple packing options", "New packing-free designs in development", "Reduced footprint configurations", "Low blower back-pressure requirements"],
  },
];

const modelingParams = [
  "Inlet dissolved oxygen concentration",
  "Inlet nitrogen concentration",
  "Water temperature",
  "Local barometric pressure",
  "Alpha factor (water quality)",
  "Operating pressures",
  "Gas feed rates and composition",
  "Gas-liquid interfacial area",
  "Mass transfer coefficients",
  "Hydraulic gradient available",
];

export default function GasManagement() {
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,14,26,0.92) 0%, rgba(10,22,40,0.88) 60%, rgba(10,22,40,0.75) 100%)" }} />
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="container relative z-10">
          <RevealSection>
            <p className="section-label mb-3">Solution Area</p>
            <span className="teal-rule mb-5" />
            <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
              Gas Management Solutions<br />
              <span style={{ color: "#3A8C3F" }}>for Hatcheries, RAS &amp; Raceway Systems</span>
            </h1>
            <p className="font-body text-white/70 max-w-2xl mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
              Oxygenation, degassing, CO₂ removal, total gas pressure control, and ozone transfer — engineered around your site's specific water chemistry, hydraulic conditions, and treatment objectives.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Send Us Your Water Treatment Challenge
                <ArrowRight size={15} />
              </a>
              <Link href="/hatchery-solutions">
                <span className="btn-outline">Hatchery Solutions</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3">Common Challenges</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                The Water Quality Problems VATN Is Built to Solve
              </h2>
              <p className="font-body mt-4" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                These are the dissolved gas challenges VATN is built to solve — through site-specific equipment design and modeling.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((item, i) => (
              <RevealSection key={item.problem} delay={i * 55}>
                <div className="p-5 h-full" style={{ backgroundColor: "#F4F6F8", borderLeft: "2px solid #3A8C3F", borderRadius: "2px" }}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <AlertTriangle size={15} style={{ color: "#3A8C3F", flexShrink: 0 }} />
                    <h3 className="font-display" style={{ fontSize: "1.05rem", color: "#1C2B3A" }}>{item.problem}</h3>
                  </div>
                  <p className="font-body" style={{ color: "#5A7080", fontSize: "0.83rem", lineHeight: "1.6" }}>{item.impact}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3">Technology & Equipment</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Equipment &amp; Technology Areas
              </h2>
            </div>
          </RevealSection>
          <div className="flex flex-col gap-8">
            {technologies.map((tech, i) => (
              <RevealSection key={tech.title} delay={60}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white" style={{ borderRadius: "2px", boxShadow: "0 1px 6px rgba(10,22,40,0.07)", overflow: "hidden" }}>
                  <div className="lg:col-span-2 p-7 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "#E8EEF4" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5" style={{ backgroundColor: "rgba(58,140,63,0.1)", color: "#3A8C3F", borderRadius: "2px" }}>
                        {tech.icon}
                      </div>
                      <h3 className="font-display" style={{ fontSize: "1.3rem", color: "#1C2B3A" }}>{tech.title}</h3>
                    </div>
                    <p className="font-body" style={{ color: "#3A5068", fontSize: "0.88rem", lineHeight: "1.7" }}>{tech.body}</p>
                  </div>
                  <div className="p-7" style={{ backgroundColor: "#F8FAFB" }}>
                    <p className="section-label mb-3" style={{ color: "#8A9BB0" }}>Configurations / Features</p>
                    <ul className="flex flex-col gap-2">
                      {tech.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2">
                          <CheckCircle2 size={13} style={{ color: "#3A8C3F", marginTop: "3px", flexShrink: 0 }} />
                          <span className="font-body" style={{ color: "#3A5068", fontSize: "0.82rem", lineHeight: "1.5" }}>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VACUUM DEGASSING TOWER & WATER JET EXHAUSTER ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3">Signature Product</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Vacuum Degassing Tower &amp; Water Jet Exhauster
              </h2>
              <p className="font-body mt-4" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                VATN's vacuum degassing tower, paired with a water jet exhauster, is a proven system for removing dissolved gases from hatchery water supplies. The water jet exhauster maintains vacuum within the packed column, eliminating the need for mechanical vacuum pumps and reducing maintenance requirements. This system has been in continuous operation at federal and state hatchery facilities for decades.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealSection delay={60}>
              <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 2px 16px rgba(10,22,40,0.09)", border: "1px solid rgba(58,140,63,0.12)" }}>
                <img
                  src="/manus-storage/vatn-vacuum-degassing-tower_04866f24.jpg"
                  alt="Vacuum degassing tower at NARL"
                  style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/3" }}
                />
                <div style={{ padding: "16px 20px", backgroundColor: "#F8FAFB", borderTop: "2px solid #3A8C3F" }}>
                  <p className="font-display font-bold" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>Vacuum Degassing Tower</p>
                  <p className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080", marginTop: "4px", lineHeight: "1.5" }}>Vacuum degasser at NARL following modifications for enhanced radon removal.</p>
                </div>
              </div>
            </RevealSection>
            <RevealSection delay={120}>
              <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 2px 16px rgba(10,22,40,0.09)", border: "1px solid rgba(58,140,63,0.12)" }}>
                <img
                  src="/manus-storage/vatn-water-jet-exhauster_c67582b9.jpg"
                  alt="Water jet exhauster on vacuum degasser packed column"
                  style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/3" }}
                />
                <div style={{ padding: "16px 20px", backgroundColor: "#F8FAFB", borderTop: "2px solid #3A8C3F" }}>
                  <p className="font-display font-bold" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>Water Jet Exhauster</p>
                  <p className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080", marginTop: "4px", lineHeight: "1.5" }}>Water jet exhauster at an elevated position on the vacuum degasser's packed column.</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── MODELING SECTION ── */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: "#060E1A" }}>
        <div className="absolute inset-0 blueprint-cross" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>The VATN Approach</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", lineHeight: 1.1 }}>
                Modeled for Your Site,<br />Not Guessed
              </h2>
              <p className="font-body text-white/65 mb-6" style={{ fontSize: "0.92rem", lineHeight: "1.7" }}>
                Equipment is not selected from a catalog. Every system is sized and configured against the specific conditions of your site — ensuring treatment systems are neither undersized nor overbuilt, and that oxygen use, energy, and maintenance burden are minimized from day one.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="p-6 coord-corner" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px" }}>
                <p className="data-label mb-4">Site Parameters Evaluated in Modeling</p>
                <div className="flex flex-col">
                  {[
                    ["DO Inlet", "Dissolved oxygen concentration"],
                    ["N₂ Inlet", "Nitrogen concentration"],
                    ["Temperature", "Water temperature (seasonal range)"],
                    ["Barometric P.", "Local barometric pressure"],
                    ["Alpha Factor", "Water quality correction factor"],
                    ["Operating P.", "System operating pressures"],
                    ["Gas Feed Rate", "Rate and composition"],
                    ["G-L Interface", "Gas-liquid interfacial area"],
                    ["KLa", "Mass transfer coefficients"],
                    ["Hyd. Gradient", "Available hydraulic head"],
                  ].map(([key, val]) => (
                    <div key={key} className="spec-row">
                      <span className="spec-key">{key}</span>
                      <span className="spec-val">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING FIRMS CALLOUT ── */}
      <section className="py-16" style={{ backgroundColor: "#1E4D7B" }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="section-label mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>For Engineering Firms</p>
              <h3 className="font-display text-white mb-2" style={{ fontSize: "1.7rem" }}>
                Supporting Design Teams with Technical Gas-Transfer Expertise
              </h3>
              <p className="font-body text-white/65" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
                Technical input on gas-transfer requirements, equipment selection, oxygenation and degassing modeling, and CO₂ stripping evaluations — from concept through procurement.
              </p>
            </div>
            <Link href="/engineering-partners">
              <span className="btn-primary shrink-0">
                Engineering Partner Information
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <RevealSection>
              <p className="section-label mb-3">Get in Touch</p>
              <span className="teal-rule mb-5 mx-auto" />
              <h2 className="font-display mb-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Send Us Your Water Treatment Challenge
              </h2>
              <p className="font-body mb-8" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                Describe your facility and the challenge you're facing. VATN will respond with a technical assessment of the options for your site.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <GHLForm />
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
