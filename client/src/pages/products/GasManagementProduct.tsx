/**
 * VATN Products — Gas Management
 * Style: Field-Grade Precision
 */
import { Link } from "wouter";
import { ArrowRight, Droplets, Wind, FlaskConical, Layers, Zap, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

const technologies = [
  {
    icon: <Droplets size={22} />,
    title: "Oxygenation & Degassing Equipment",
    body: "Reactor performance is modeled against your site's actual DO, N₂, temperature, barometric pressure, alpha factor, and hydraulic conditions. VATN's proprietary software identifies operating conditions that minimize capital and variable costs while hitting target dissolved gas levels.",
    specs: ["Spray towers", "Hooded surface agitators", "Packed columns", "U-tubes", "Vacuum degassers"],
  },
  {
    icon: <Layers size={22} />,
    title: "Low Head Oxygenators (LHO)",
    body: "Developed and patented in 1989. No moving parts. Operates on hydraulic gradients as low as 9 inches. Widely applied at RAS and raceway facilities across the United States.",
    specs: ["No moving parts", "Operates on 9\" hydraulic gradient", "Multi-stage configuration", "Patented 1989", "RAS and raceway compatible"],
  },
  {
    icon: <Wind size={22} />,
    title: "CO₂ Control Methods",
    body: "Forced air packed beds, spray nozzle reactors, surface agitators, and hydroxide base scrubbing — each evaluated against your site conditions. Scrubber use also reduces dissolved N₂, lowering oxygenation costs.",
    specs: ["Forced air packed beds", "Spray nozzle reactors", "Surface agitators", "Hydroxide base scrubbing", "Concurrent N₂ reduction"],
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Vacuum Degassing",
    body: "Computer-modeled for each site. Eductor-based off-gas removal eliminates mechanical vacuum pumps. Portable and fixed configurations. Side-stream blending reduces equipment scale by approximately 70–75%.",
    specs: ["Eductor-based off-gas removal", "3–5 ft. standard vacuum operation", "13–15 ft. side-stream configurations", "Portable designs available", "Automated performance control"],
  },
  {
    icon: <Zap size={22} />,
    title: "Side-Stream Treatment",
    body: "Treat 25–30% of bulk flow at high intensity. Blend back with untreated flow to hit targets. Reduces required equipment scale by ~70%. New low-profile reactor reduces volume requirements by an additional 50%.",
    specs: ["25–30% of bulk flow treated", "~70% reduction in equipment scale", "Packing-free operation", "O₂, O₃, CO₂, and N₂ capable", "New low-profile reactor design"],
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Computer Modeling & System Design",
    body: "VATN uses proprietary software to model gas transfer performance before equipment is specified. This eliminates guesswork, reduces capital cost, and ensures the selected equipment will perform under your actual operating conditions.",
    specs: ["Site-specific modeling", "Multi-gas simulation", "Seasonal performance analysis", "Capital cost optimization", "Performance documentation"],
  },
];

export default function GasManagementProduct() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      {/* Hero */}
      <section
        className="relative"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "9rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,14,26,0.96) 0%, rgba(10,22,40,0.90) 55%, rgba(10,22,40,0.60) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(58,140,63,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(58,140,63,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container relative z-10 text-center">
          <Link href="/products">
            <span className="flex items-center justify-center gap-1 font-body text-white/40 hover:text-white/70 transition-colors mb-4" style={{ fontSize: "0.78rem" }}>
              ← Products &amp; Solutions
            </span>
          </Link>
          <p className="section-label mb-3">Aquaculture Gas Management</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Gas Management<br />
            <span style={{ color: "#3A8C3F" }}>for Hatchery &amp; RAS Systems</span>
          </h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            Oxygenation, degassing, CO₂ control, and total dissolved gas pressure management — modeled and sized for your site's actual water chemistry, hydraulic constraints, and production objectives.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="btn-primary">
              Discuss Your Gas Management Challenge
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Problems addressed */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(58,140,63,0.2)" }}>
        <div className="container">
          <RevealSection>
            <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Common Gas Management Problems</p>
            <span className="teal-rule mb-8" />
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { problem: "Low Dissolved Oxygen", impact: "Stress, reduced growth, and mortality in fish populations. Limits production density in RAS and raceway systems." },
              { problem: "Elevated CO₂", impact: "Respiratory acidosis, reduced feed conversion, and chronic fish health issues. Often underestimated in high-density RAS." },
              { problem: "Excess Nitrogen / High TGP", impact: "Gas bubble trauma in fish. Total dissolved gas pressure must be managed carefully relative to ambient barometric pressure." },
              { problem: "Hydraulic Constraints", impact: "Limited available head restricts equipment options. Many sites cannot support conventional treatment approaches." },
              { problem: "Limited Footprint", impact: "Existing infrastructure leaves minimal space for new treatment equipment. Compact solutions are required." },
              { problem: "High Oxygen or Energy Costs", impact: "Inefficient oxygenation systems consume excess oxygen and energy. Proper modeling reduces both." },
            ].map((item, i) => (
              <RevealSection key={item.problem} delay={i * 60}>
              <div className="p-5" style={{ backgroundColor: "rgba(255,255,255,0.04)", borderLeft: "2px solid rgba(58,140,63,0.4)", borderRadius: "2px" }}>
                <h3 className="font-display text-white mb-2" style={{ fontSize: "1rem" }}>{item.problem}</h3>
                <p className="font-body text-white/55" style={{ fontSize: "0.83rem", lineHeight: "1.6" }}>{item.impact}</p>
              </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection className="mb-12">
            <p className="section-label mb-3">Technologies &amp; Equipment</p>
            <span className="teal-rule mb-5" />
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Site-Specific Gas Management Solutions
            </h2>
            <p className="font-body mt-4 max-w-2xl" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
              VATN does not recommend equipment from a catalog. Each solution is modeled against your actual site conditions — water chemistry, flow rates, temperature, available head, and production targets — before equipment is specified.
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, i) => (
              <RevealSection key={tech.title} delay={i * 70}>
              <div className="p-6 bg-white" style={{ border: "1px solid #E8EEF4", borderTop: "2px solid #3A8C3F", borderRadius: "2px" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div style={{ color: "#3A8C3F" }}>{tech.icon}</div>
                  <h3 className="font-display" style={{ fontSize: "1.1rem", color: "#1C2B3A", lineHeight: 1.2 }}>{tech.title}</h3>
                </div>
                <p className="font-body mb-4" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{tech.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tech.specs.map((s) => (
                    <span key={s} className="font-body" style={{ fontSize: "0.78rem", color: "#3A8C3F", backgroundColor: "rgba(58,140,63,0.08)", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px", padding: "2px 8px" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* LHO Illustration */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#0A1628" }}>
        <div className="container">
          <RevealSection className="mb-8 text-center">
            <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Patented Technology</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <h2 className="font-display text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.1 }}>
              Low Head Oxygenator (LHO)
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div style={{ backgroundColor: "#fff", borderRadius: "2px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
              <img
                src="/manus-storage/lho-diagram-conservation-fund_2b149543.jpg"
                alt="Low Head Oxygenator (LHO) diagram — Courtesy of The Conservation Fund Freshwater Institute"
                style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
            <div>
              <p className="font-body text-white/65 mb-5" style={{ fontSize: "0.92rem", lineHeight: "1.75" }}>
                The Low Head Oxygenator was developed and patented by Dr. Barnaby Watten in 1989. It operates on hydraulic gradients as low as 9 inches — making it applicable at sites where conventional oxygenation equipment cannot be used due to limited available head.
              </p>
              <p className="font-body text-white/65 mb-5" style={{ fontSize: "0.92rem", lineHeight: "1.75" }}>
                The LHO has no moving parts, requires minimal maintenance, and has been widely applied at federal, state, and private hatcheries across the United States. Multi-stage configurations allow oxygen transfer to be scaled to match production requirements.
              </p>
              <div className="flex flex-wrap gap-2">
                {["No moving parts", "9\" minimum head", "Multi-stage", "Patented 1989", "RAS & raceway"].map((tag) => (
                  <span key={tag} className="font-body" style={{ fontSize: "0.78rem", color: "#3A8C3F", backgroundColor: "rgba(58,140,63,0.08)", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px", padding: "2px 8px" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-white/40 mt-4" style={{ fontSize: "0.75rem" }}>Courtesy of The Conservation Fund Freshwater Institute</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacuum Degassing Tower & Water Jet Exhauster */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection className="mb-12 text-center">
            <p className="section-label mb-3">Signature Product</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Vacuum Degassing Tower
            </h2>
            <p className="font-body mt-4 max-w-3xl mx-auto" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
              In the early 90's Watten developed a vacuum degasser design for removal of gas supersaturation common in well water and spring water hatchery supplies. Design conditions including packing depth and gas (oxygen) feed rate are based on reactor theory with vacuum levels identified that result in product water TGP levels that circumvent gas bubble disease. Oxygen feed rates allow for DO levels above saturation while concurrently reducing dissolved nitrogen (N2) well below saturation. The design employs a unique method for control of column vacuum level regardless of changes in water fed rates. This method is based on a sidewall application of water jet exhausters that use a very small sidestream flow of raw water, under pressure, to remove nitrogen rich column off-gas from the operating degasser. The design has provided years of trouble free service at numerous state, federal and commercial sites.
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 2px 16px rgba(10,22,40,0.09)", border: "1px solid rgba(58,140,63,0.12)" }}>
              <img
                src="/manus-storage/portable-sidestream-vacuum-degasser-dworshak_23d446f1.png"
                alt="Portable sidestream vacuum degasser tested at Dworshak National Fish Hatchery"
                style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <RevealSection>
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>
            Ready to Evaluate Your Gas Management System?
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            Contact VATN to describe your facility, your current water quality conditions, and the challenge you are trying to solve. We will evaluate what is feasible for your site.
          </p>
          <a href="/contact" className="btn-primary">
            Contact VATN
            <ArrowRight size={15} />
          </a>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
