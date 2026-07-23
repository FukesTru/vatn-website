/**
 * VATN Products — Alkalinity Enhancement
 * Style: Field-Grade Precision
 * Content based on VATN's limestone reactor and alkalinity enhancement work.
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

const technologies = [
  {
    title: "Fluidized Bed Limestone Reactors",
    body: "Limestone sand is fluidized by upward water flow, maintaining a highly reactive surface area for dissolution. CO₂ pretreatment accelerates limestone dissolution and improves treatment efficiency. VATN's fluidized bed reactor design has been tested and applied at multiple federal fish hatcheries.",
  },
  {
    title: "Pulsed Bed Limestone Reactors",
    body: "Periodic pulsing of the limestone bed removes surface passivation and maintains dissolution rates over time. Effective for treatment of acid mine drainage and other acid-impacted source waters. Evaluated in multi-year research programs at National Park Service sites.",
  },
  {
    title: "CO₂ Pretreatment",
    body: "Elevating dissolved CO₂ in the water before contact with limestone significantly accelerates dissolution. This approach improves treatment efficiency and reduces the limestone bed volume required to achieve target alkalinity and pH levels.",
  },
];

const applications = [
  "Acid-impacted source water at federal and state fish hatcheries",
  "Acid mine drainage treatment for stream restoration and hatchery water supply",
  "pH and alkalinity control in recirculating aquaculture systems",
  "Marine RAS alkalinity management using aragonite media",
  "Seasonal source-water pH fluctuations in snowmelt-fed systems",
  "Soft-water systems requiring hardness and alkalinity supplementation",
];

export default function AlkalinityEnhancement() {
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
          <p className="section-label mb-3">pH &amp; Alkalinity Control</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Alkalinity Enhancement<br />
            <span style={{ color: "#3A8C3F" }}>Limestone-Based Treatment</span>
          </h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            Fluidized bed and pulsed bed limestone reactors for pH and alkalinity control in acid-impacted source water. Developed and tested at federal fish hatcheries and National Park Service sites.
          </p>
          <a href="/contact" className="btn-primary">
            Discuss Your Alkalinity Challenge
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(58,140,63,0.2)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Why Alkalinity Matters in Hatchery Water</p>
            <span className="teal-rule mb-5" />
            <p className="font-body text-white/70" style={{ fontSize: "0.95rem", lineHeight: "1.75" }}>
              Low pH and inadequate alkalinity in source water directly affect fish health, gill function, and reproduction. Acid-impacted water — whether from acid mine drainage, atmospheric deposition, or naturally soft source water — requires treatment before it can support fish production. Limestone-based treatment is one of the most cost-effective and well-documented approaches for hatchery applications.
            </p>
            <p className="font-body text-white/50 mt-3" style={{ fontSize: "0.88rem", lineHeight: "1.7" }}>
              Dr. Watten's research on limestone treatment systems spans more than two decades and includes peer-reviewed publications on fluidized bed reactors, pulsed bed reactors, CO₂ pretreatment, and acid mine drainage remediation. This research has been applied at federal hatcheries, National Park Service sites, and commercial aquaculture facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="mb-12">
            <p className="section-label mb-3">Treatment Technologies</p>
            <span className="teal-rule mb-5" />
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Limestone-Based Alkalinity Enhancement Systems
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {technologies.map((t) => (
              <div key={t.title} className="p-6 bg-white" style={{ border: "1px solid #E8EEF4", borderTop: "2px solid #3A8C3F", borderRadius: "2px" }}>
                <h3 className="font-display mb-3" style={{ fontSize: "1.05rem", color: "#1C2B3A", lineHeight: 1.2 }}>{t.title}</h3>
                <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{t.body}</p>
              </div>
            ))}
          </div>

          {/* Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="section-label mb-3">Applications</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Where Alkalinity Enhancement Is Applied
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
              <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Patents &amp; Research</p>
              <p className="font-body text-white/65 mb-4" style={{ fontSize: "0.88rem", lineHeight: "1.7" }}>
                VATN's alkalinity enhancement work is backed by two U.S. patents for CO₂ pretreatment and accelerated limestone dissolution (Patent Nos. 5914046 and 5863422), plus more than a decade of published research on pulsed bed and fluidized bed reactor performance.
              </p>
              <p className="font-body text-white/50" style={{ fontSize: "0.9rem", lineHeight: "1.65" }}>
                This is not catalog equipment. System design requires evaluation of your source water chemistry, target pH and alkalinity, flow rates, and available infrastructure. Contact VATN to discuss your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>
            Discuss Your Alkalinity Challenge
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            Alkalinity treatment design requires site-specific water chemistry data. Contact VATN to describe your source water conditions and treatment objectives.
          </p>
          <a href="/contact" className="btn-primary">
            Contact VATN
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
