/**
 * VATN Products — Bio Media (B100)
 * Style: Field-Grade Precision
 * Content based on VATN's B100 Bio Media product. No invented specs.
 */
import { Link } from "wouter";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

const features = [
  "Structured media design provides high specific surface area for biofilm attachment",
  "Supports stable nitrification in recirculating aquaculture system (RAS) biofilters",
  "Durable construction suited for continuous submerged operation",
  "Compatible with moving bed biofilm reactor (MBBR) and fixed bed filter configurations",
  "Designed for long service life with minimal maintenance requirements",
];

export default function BioMedia() {
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
        <div className="container relative z-10">
          <Link href="/products">
            <span className="flex items-center gap-1 font-body text-white/40 hover:text-white/70 transition-colors mb-4" style={{ fontSize: "0.78rem" }}>
              ← Products &amp; Solutions
            </span>
          </Link>
          <p className="section-label mb-3">Biological Filtration</p>
          <span className="teal-rule mb-5" />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
            B100 Bio Media<br />
            <span style={{ color: "#0E9B8A" }}>for RAS Biofiltration</span>
          </h1>
          <p className="font-body text-white/70 max-w-xl mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            Structured bio media designed for biological filtration in recirculating aquaculture systems. High specific surface area supports stable nitrification and consistent water quality in RAS applications.
          </p>
          <a href="/our-team#contact" className="btn-primary">
            Discuss Bio Media for Your System
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-3">B100 Bio Media</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Structured Media for Stable Biological Filtration
              </h2>
              <p className="font-body mb-6" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.7" }}>
                Biological filtration is a critical component of any recirculating aquaculture system. The biofilter must maintain stable nitrification — converting ammonia to nitrite and nitrite to nitrate — across variable loading conditions and seasonal temperature changes. Media selection directly affects biofilter performance, stability, and long-term maintenance requirements.
              </p>
              <p className="font-body mb-8" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.7" }}>
                B100 structured bio media provides a high specific surface area for biofilm attachment, supporting consistent nitrification in both moving bed and fixed bed biofilter configurations. The structured geometry promotes even flow distribution and biofilm development across the media surface.
              </p>
              <div className="flex flex-col gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: "#0E9B8A", marginTop: "2px", flexShrink: 0 }} />
                    <span className="font-body" style={{ fontSize: "0.88rem", color: "#3A5068", lineHeight: "1.6" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="p-6" style={{ backgroundColor: "#0A1628", borderRadius: "2px" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Layers size={20} style={{ color: "#0E9B8A" }} />
                  <h3 className="font-display text-white" style={{ fontSize: "1.05rem" }}>Biofilter Configuration</h3>
                </div>
                <p className="font-body text-white/60" style={{ fontSize: "0.85rem", lineHeight: "1.65" }}>
                  B100 media is compatible with moving bed biofilm reactor (MBBR) and fixed bed filter configurations. The appropriate configuration depends on your system's hydraulic design, loading rates, and available footprint. VATN evaluates these parameters to recommend the right approach for your RAS.
                </p>
              </div>
              <div className="p-6" style={{ backgroundColor: "#F4F6F8", border: "1px solid #E8EEF4", borderLeft: "2px solid #0E9B8A", borderRadius: "2px" }}>
                <p className="section-label mb-2" style={{ color: "#0E9B8A" }}>Note on Specifications</p>
                <p className="font-body" style={{ fontSize: "0.85rem", color: "#5A7080", lineHeight: "1.65" }}>
                  Biofilter sizing depends on your system's ammonia loading, target effluent quality, temperature, and hydraulic conditions. Contact VATN to discuss your RAS design and we will provide an honest assessment of media requirements for your specific application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>
            Discuss Bio Media for Your RAS
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            Biofilter design requires site-specific information. Contact VATN to describe your system and we will evaluate the right approach for your application.
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
