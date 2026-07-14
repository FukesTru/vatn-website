/**
 * VATN Products — Solids Management (NP Drum & Disc Filters)
 * Style: Field-Grade Precision
 * Conservative content — only what is known about NP microscreen filters.
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

const filterTypes = [
  {
    title: "NP Drum Filters",
    body: "Rotating drum microscreen filters for continuous fine solids removal from RAS and flow-through system effluent. Drum filters are well-suited for high-flow applications where continuous operation and automated backwash are priorities.",
  },
  {
    title: "NP Disc Filters",
    body: "Disc-style microscreen filters provide a compact footprint for fine solids removal. Multiple disc configurations allow capacity scaling within a smaller installation area. Suited for RAS applications with space constraints.",
  },
];

const benefits = [
  "Fine solids removal reduces biological oxygen demand in the system",
  "Automated backwash minimizes operator intervention",
  "Compact designs suited for existing hatchery infrastructure",
  "Reduces solids accumulation in rearing units and biofilters",
  "Compatible with RAS and flow-through system configurations",
  "Low-maintenance operation appropriate for hatchery staffing levels",
];

export default function SolidsManagement() {
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
          <p className="section-label mb-3">Solids Management</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
            NP Drum &amp; Disc Filters<br />
            <span style={{ color: "#0E9B8A" }}>Microscreen Solids Removal</span>
          </h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            Compact, low-maintenance microscreen filters for fine solids removal in RAS and flow-through aquaculture systems. Drum and disc configurations available to match your facility's flow requirements and footprint constraints.
          </p>
          <a href="/our-team#contact" className="btn-primary">
            Discuss Solids Management for Your System
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="mb-12">
            <p className="section-label mb-3">Why Solids Management Matters</p>
            <span className="teal-rule mb-5" />
            <h2 className="font-display mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Fine Solids Control in Aquaculture Systems
            </h2>
            <p className="font-body max-w-2xl" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.7" }}>
              Suspended solids accumulation in recirculating aquaculture systems increases biological oxygen demand, degrades water quality, and can impair gill function in fish. Effective solids removal is a foundational component of RAS design and is also important in flow-through systems where effluent quality must be managed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {filterTypes.map((f) => (
              <div key={f.title} className="p-6 bg-white" style={{ border: "1px solid #E8EEF4", borderTop: "2px solid #0E9B8A", borderRadius: "2px" }}>
                <h3 className="font-display mb-3" style={{ fontSize: "1.1rem", color: "#1C2B3A", lineHeight: 1.2 }}>{f.title}</h3>
                <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{f.body}</p>
              </div>
            ))}
          </div>

          {/* NP Product Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div style={{ border: "1px solid #E8EEF4", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "260px", overflow: "hidden", backgroundColor: "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/manus-storage/vatn-np-drum-filter_b6b686dd.jpg"
                  alt="NP Drum Filters — Family Photo"
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: "1rem" }}
                />
              </div>
              <div style={{ padding: "0.75rem 1rem" }}>
                <p className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080" }}>NP Drum Filters — available in multiple sizes for varying flow rates and solids loading conditions</p>
              </div>
            </div>
            <div style={{ border: "1px solid #E8EEF4", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "260px", overflow: "hidden", backgroundColor: "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/manus-storage/vatn-np-disc-filter_90ee3fe1.png"
                  alt="NP Disc Filter"
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: "1rem" }}
                />
              </div>
              <div style={{ padding: "0.75rem 1rem" }}>
                <p className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080" }}>NP Disc Filter — compact modular design for space-constrained RAS installations</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="section-label mb-3">Key Benefits</p>
              <span className="teal-rule mb-5" />
              <div className="flex flex-col gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: "#0E9B8A", marginTop: "2px", flexShrink: 0 }} />
                    <span className="font-body" style={{ fontSize: "0.88rem", color: "#3A5068", lineHeight: "1.6" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6" style={{ backgroundColor: "#0A1628", borderRadius: "2px" }}>
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>System Sizing Note</p>
              <p className="font-body text-white/65 mb-4" style={{ fontSize: "0.88rem", lineHeight: "1.7" }}>
                Microscreen filter sizing depends on your system's flow rate, solids loading, and target effluent quality. Drum and disc filter configurations are available in a range of sizes. VATN evaluates your system requirements to recommend the appropriate filter type and capacity.
              </p>
              <p className="font-body text-white/50" style={{ fontSize: "0.9rem", lineHeight: "1.65" }}>
                Contact VATN to describe your facility, flow rates, and solids management objectives. We will provide an honest assessment of what is appropriate for your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NP Innovation Partner Link */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F4F6F8", borderTop: "1px solid #E0E8F0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-3">Manufacturer Resource</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Learn More About NP Innovation
            </h2>
            <p className="font-body mb-8" style={{ color: "#5A7080", fontSize: "0.95rem", lineHeight: "1.7" }}>
              For more detailed product information, technical specifications, and the full range of drum and disc filter configurations, visit NP Innovation's official website.
            </p>
            <a
              href="https://www.npinnovation.se"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit NP Innovation's Website
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>
            Discuss Solids Management for Your System
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            Filter sizing requires site-specific information. Contact VATN to describe your system and we will evaluate the right approach for your application.
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
