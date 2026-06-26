/**
 * VATN Products — UV Disinfection (Ultraqua)
 * Style: Field-Grade Precision
 * Content based on VATN's Ultraqua UV product line. No invented specs.
 */
import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Droplets, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(14,155,138,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,155,138,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
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
            <span style={{ color: "#0E9B8A" }}>for Hatchery Water Treatment</span>
          </h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            Chemical-free pathogen control for fish hatchery and aquaculture water supplies. Ultraqua UV systems inactivate bacteria, viruses, and parasites without altering water chemistry or leaving residuals.
          </p>
          <a href="/our-team#contact" className="btn-primary">
            Discuss UV Disinfection for Your Facility
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="mb-12">
            <p className="section-label mb-3">Ultraqua UV — Key Features</p>
            <span className="teal-rule mb-5" />
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Reliable Pathogen Control for Aquaculture Applications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-white" style={{ border: "1px solid #E8EEF4", borderTop: "2px solid #0E9B8A", borderRadius: "2px" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div style={{ color: "#0E9B8A" }}>{f.icon}</div>
                  <h3 className="font-display" style={{ fontSize: "1.05rem", color: "#1C2B3A", lineHeight: 1.2 }}>{f.title}</h3>
                </div>
                <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{f.body}</p>
              </div>
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
                    <CheckCircle2 size={15} style={{ color: "#0E9B8A", marginTop: "2px", flexShrink: 0 }} />
                    <span className="font-body" style={{ fontSize: "0.88rem", color: "#3A5068", lineHeight: "1.6" }}>{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6" style={{ backgroundColor: "#0A1628", borderRadius: "2px" }}>
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Important Note on Specifications</p>
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

      {/* Ultraqua Partner Link */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F4F6F8", borderTop: "1px solid #E0E8F0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-3">Manufacturer Resource</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Learn More About Ultraqua
            </h2>
            <p className="font-body mb-8" style={{ color: "#5A7080", fontSize: "0.95rem", lineHeight: "1.7" }}>
              For more detailed product information, technical specifications, and the full range of UV and ozone systems, visit Ultraqua's official website.
            </p>
            <a
              href="https://ultraaqua.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Ultraqua's Website
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>
            Discuss UV Disinfection for Your Facility
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            UV system sizing requires site-specific information. Contact VATN to describe your flow rates, water source, and disinfection objectives.
          </p>
          <a href="/our-team#contact" className="btn-primary">
            Contact VATN
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
