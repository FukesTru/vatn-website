/**
 * VATN Products — UV Disinfection (Ultraqua)
 * Style: Field-Grade Precision
 * Content based on VATN's Ultraqua UV product line. No invented specs.
 */
import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Droplets, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

const HERO_BG = "/images/hero-background-raceway.webp";

const features = [
  {
    icon: <Shield size={22} />,
    title: "Pathogen Control Without Chemicals",
    body: "UV disinfection inactivates bacteria, viruses, and parasites by disrupting their DNA. It leaves no chemical residuals in the water and does not alter water chemistry.",
  },
  {
    icon: <Droplets size={22} />,
    title: "Designed for Hatchery Water Supplies",
    body: "Ultraqua UV systems are sized for the flow rates and water quality conditions typical of fish hatchery and aquaculture applications. Units are available in a range of configurations to match your system.",
  },
  {
    icon: <Zap size={22} />,
    title: "Low Maintenance Operation",
    body: "UV systems require periodic lamp replacement and sleeve cleaning. Ultraqua units are designed for straightforward maintenance by hatchery staff without specialized technical support.",
  },
];

const applications = [
  "Incoming source water disinfection at fish hatcheries",
  "Recirculating aquaculture system (RAS) water treatment",
  "Egg disinfection and incubation water treatment",
  "Broodstock and quarantine system water supply",
  "Pathogen control in flow-through raceway systems",
  "Effluent disinfection prior to discharge",
];

export default function UVDisinfection() {
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
          <p className="section-label mb-3">UV Disinfection</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Ultraqua UV Systems<br />
            <span style={{ color: "#3A8C3F" }}>for Hatchery Water Treatment</span>
          </h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            Chemical-free pathogen control for fish hatchery and aquaculture water supplies. Ultraqua UV systems inactivate bacteria, viruses, and parasites without altering water chemistry or leaving residuals.
          </p>
          <a href="/contact" className="btn-primary">
            Discuss UV Disinfection for Your Facility
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection className="mb-12">
            <p className="section-label mb-3">Ultraqua UV — Key Features</p>
            <span className="teal-rule mb-5" />
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Reliable Pathogen Control for Aquaculture Applications
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((f, i) => (
              <RevealSection key={f.title} delay={i * 70}>
                <div className="p-6 bg-white" style={{ border: "1px solid #E8EEF4", borderTop: "2px solid #3A8C3F", borderRadius: "2px" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: "#3A8C3F" }}>{f.icon}</div>
                    <h3 className="font-display" style={{ fontSize: "1.05rem", color: "#1C2B3A", lineHeight: 1.2 }}>{f.title}</h3>
                  </div>
                  <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{f.body}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="section-label mb-3">Applications</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Where UV Disinfection Is Applied
              </h2>
              <div className="flex flex-col gap-3">
                {applications.map((app) => (
                  <div key={app} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: "#3A8C3F", marginTop: "2px", flexShrink: 0 }} />
                    <span className="font-body" style={{ fontSize: "0.88rem", color: "#3A5068", lineHeight: "1.6" }}>{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6" style={{ backgroundColor: "#0A1628", borderRadius: "2px" }}>
              <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Important Note on Specifications</p>
              <p className="font-body text-white/65 mb-4" style={{ fontSize: "0.88rem", lineHeight: "1.7" }}>
                UV system sizing depends on your specific flow rate, water quality (UV transmittance), target log reduction, and the organisms of concern. VATN evaluates these parameters for each application before recommending a system configuration.
              </p>
              <p className="font-body text-white/50" style={{ fontSize: "0.9rem", lineHeight: "1.65" }}>
                Contact VATN to discuss your facility's water source, flow requirements, and disinfection objectives. We will provide an honest assessment of what UV can and cannot accomplish for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UV Product Photos Gallery */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#0A1628" }}>
        <div className="container">
          <div className="mb-10 text-center">
            <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Ultraqua UV Product Line</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <h2 className="font-display text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.1 }}>
              UV System Configurations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vertical Channel UV */}
            <div style={{ backgroundColor: "#0F1E35", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "220px", overflow: "hidden" }}>
                <img
                  src="/images/uv-vertical-channel.webp"
                  alt="Vertical Channel UV Disinfection System"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                <p className="font-display text-white" style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>Vertical Channel UV</p>
                <p className="font-body text-white/50" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>Open channel UV system for vertical installation. Suitable for high-flow hatchery and aquaculture applications.</p>
              </div>
            </div>
            {/* Incline Channel UV */}
            <div style={{ backgroundColor: "#0F1E35", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "220px", overflow: "hidden" }}>
                <img
                  src="/images/uv-incline-channel.webp"
                  alt="Incline Channel UV Disinfection System"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                <p className="font-display text-white" style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>Incline Channel UV</p>
                <p className="font-body text-white/50" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>45-degree inclined open channel UV contactor. Designed for space-efficient installation in hatchery water supply lines.</p>
              </div>
            </div>
            {/* Closed UV Reactors */}
            <div style={{ backgroundColor: "#0F1E35", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "220px", overflow: "hidden", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/images/uv-general-system.webp"
                  alt="Closed UV Reactor — ULTRAQUA Stainless Steel"
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: "0.5rem" }}
                />
              </div>
              <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                <p className="font-display text-white" style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>Closed UV Reactors</p>
                <p className="font-body text-white/50" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>Closed vessel UV contactors in stainless steel and polypropylene. Available in low-pressure and medium-pressure lamp configurations.</p>
              </div>
            </div>
            {/* Polypropylene Closed UV Reactor */}
            <div style={{ backgroundColor: "#0F1E35", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "220px", overflow: "hidden", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/images/ultraaqua-polypropylene-uv-reactor.webp"
                  alt="Ultraqua polypropylene closed UV reactor — non-corrosive construction"
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: "0.5rem" }}
                />
              </div>
              <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                <p className="font-display text-white" style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>Polypropylene Closed UV Reactor</p>
                <p className="font-body text-white/50" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>Non-corrosive polypropylene closed vessel UV reactor. Suitable for applications where stainless steel is not required or where corrosion resistance is a priority.</p>
              </div>
            </div>
            {/* General UV Disinfection System — full width on last row */}
            <div className="md:col-span-2 lg:col-span-3" style={{ backgroundColor: "#0F1E35", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px", overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "stretch" }}>
              <div style={{ width: "340px", flexShrink: 0, backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/images/uv-open-channel-horizontal.webp"
                  alt="Open Channel UV Disinfection System — Horizontal"
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: "1rem" }}
                />
              </div>
              <div style={{ padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="font-display text-white" style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Open Channel UV — Horizontal</p>
                <p className="font-body text-white/50" style={{ fontSize: "0.85rem", lineHeight: "1.7" }}>Horizontal open channel UV system for large-scale flow-through applications. Ultraqua's open channel series covers a wide range of flow rates and UV transmittance conditions. Terry McCarthy has worked with Ultraqua UV systems since 2008 across aquaculture, potable water, and recreational water applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Ultraqua Link Section */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <RevealSection>
          <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>UV Equipment Partner</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>
            Ultraqua UV Systems
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            VATN works with Ultraqua UV systems for aquaculture disinfection applications. Visit the Ultraqua website to learn more about their UV technology and product range.
          </p>
          <a href="https://www.ultraaqua.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Ultraqua Website
            <ArrowRight size={15} />
          </a>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
