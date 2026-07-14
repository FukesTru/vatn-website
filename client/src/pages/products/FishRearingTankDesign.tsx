/**
 * VATN Products — Fish Rearing Tank Design
 * Style: Field-Grade Precision
 * Content based on VATN's mixed-cell raceway and rearing unit hydraulics research.
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hatchery-systems-X4SD42svGcW9x6EL3d4G2s.webp";

const designPrinciples = [
  {
    title: "Uniform Water Quality Distribution",
    body: "Mixed-cell raceway design promotes consistent water quality across the full rearing unit. Fish in all areas of the tank experience similar dissolved oxygen, CO₂, and temperature conditions, reducing stress and improving production uniformity.",
  },
  {
    title: "Effective Solids Removal",
    body: "Hydraulic design that promotes self-cleaning and concentrates settleable solids for efficient removal. Reducing solids accumulation in the rearing unit improves water quality and reduces the oxygen demand on the system.",
  },
  {
    title: "Practical Hatchery Operation",
    body: "Tank designs are evaluated for ease of feeding, fish handling, grading, and routine maintenance. Systems that are difficult to operate create labor inefficiencies and increase the risk of fish handling stress.",
  },
  {
    title: "Hydraulic Modeling",
    body: "VATN's rearing unit design work is grounded in decades of hydraulic research, including published studies on cross-flow rearing units, mixed-cell raceways, and the relationship between tank hydraulics, fish behavior, and production performance.",
  },
];

const applications = [
  "Rectangular cross-flow rearing units for salmonid production",
  "Mixed-cell raceway design for improved water quality distribution",
  "Circular tank hydraulics for RAS applications",
  "Retrofit evaluations for existing rearing infrastructure",
  "Hydraulic gradient analysis for gravity-fed systems",
  "Solids management integration with rearing unit design",
];

export default function FishRearingTankDesign() {
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
          <p className="section-label mb-3">Rearing Unit Design</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Fish Rearing Tank Design<br />
            <span style={{ color: "#0E9B8A" }}>Hydraulics &amp; Water Quality</span>
          </h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            Mixed-cell raceway and rearing unit design based on decades of hydraulic research. Uniform water quality distribution, effective solids removal, and practical hatchery operation.
          </p>
          <a href="/our-team#contact" className="btn-primary">
            Discuss Your Rearing Unit Design
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Design principles */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="mb-12">
            <p className="section-label mb-3">Design Principles</p>
            <span className="teal-rule mb-5" />
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              What Drives Good Rearing Unit Design
            </h2>
            <p className="font-body mt-4 max-w-2xl" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
              Rearing unit hydraulics directly affect water quality distribution, solids management, fish behavior, and production performance. VATN's approach to tank design is grounded in published hydraulic research and field experience at federal and state hatcheries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {designPrinciples.map((p) => (
              <div key={p.title} className="p-6 bg-white" style={{ border: "1px solid #E8EEF4", borderTop: "2px solid #0E9B8A", borderRadius: "2px" }}>
                <h3 className="font-display mb-3" style={{ fontSize: "1.1rem", color: "#1C2B3A", lineHeight: 1.2 }}>{p.title}</h3>
                <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{p.body}</p>
              </div>
            ))}
          </div>

          {/* Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="section-label mb-3">Applications</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Rearing Unit Design Applications
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
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Research Background</p>
              <p className="font-body text-white/65 mb-4" style={{ fontSize: "0.88rem", lineHeight: "1.7" }}>
                Dr. Barnaby Watten's published research on rearing unit hydraulics includes peer-reviewed studies on rectangular cross-flow rearing units, mixed-cell raceway design, and the relationship between tank hydraulics, fish behavior, growth, and metabolism. This research forms the technical foundation for VATN's rearing unit design work.
              </p>
              <p className="font-body text-white/50" style={{ fontSize: "0.9rem", lineHeight: "1.65" }}>
                Selected publications are available on the Publications page. Contact VATN to discuss how this research applies to your specific facility and production objectives.
              </p>
              <div className="mt-4">
                <Link href="/publications">
                  <span className="flex items-center gap-1 font-display font-semibold" style={{ fontSize: "0.78rem", color: "#0E9B8A", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    View Publications <ArrowRight size={12} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder note */}
      <section className="py-12 lg:py-14" style={{ backgroundColor: "#F4F6F8", borderTop: "1px solid #E0E8F0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto p-6" style={{ backgroundColor: "#fff", border: "1px solid #E0E8F0", borderLeft: "4px solid #0E9B8A", borderRadius: "2px" }}>
            <p className="font-display mb-2" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>Illustrations Coming Soon</p>
            <p className="font-body" style={{ fontSize: "0.85rem", color: "#5A7080", lineHeight: "1.7" }}>
              Diagrams and illustrations of mixed-cell raceway design and rearing unit hydraulics are being prepared for this page. Contact VATN directly to discuss your facility's rearing unit configuration and hydraulic requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>
            Discuss Your Rearing Unit Design
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            Contact VATN to describe your facility, current rearing infrastructure, and production objectives. We will evaluate what improvements are feasible for your site.
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
