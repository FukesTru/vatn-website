/**
 * VATN Products & Solutions — Overview Page
 * Style: Field-Grade Precision — deep navy, teal accent, Barlow Condensed
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

const products = [
  {
    title: "Gas Management",
    href: "/products/gas-management",
    desc: "Site-specific oxygenation, degassing, CO₂ control, and total dissolved gas pressure management for RAS, raceway, and flow-through hatchery systems. Equipment selection and sizing backed by proprietary computer modeling.",
    tags: ["Oxygenation", "CO₂ Control", "Degassing", "TGP Management"],
  },
  {
    title: "UV Disinfection",
    href: "/products/uv-disinfection",
    desc: "Ultraqua UV systems engineered for pathogen control in hatchery water supplies. Effective against bacteria, viruses, and parasites without chemical residuals.",
    tags: ["Pathogen Control", "Chemical-Free", "Hatchery Water"],
  },
  {
    title: "Bio Media",
    href: "/products/bio-media",
    desc: "B100 structured bio media for biological filtration in recirculating aquaculture systems. High specific surface area supports stable nitrification in RAS biofilter applications.",
    tags: ["Biological Filtration", "RAS", "Nitrification"],
  },
  {
    title: "Fish Rearing Tank Design",
    href: "/products/fish-rearing-tank-design",
    desc: "Mixed-cell raceway and rearing unit design based on decades of hydraulic research. Uniform water quality distribution, effective solids removal, and practical hatchery operation.",
    tags: ["Mixed-Cell Raceway", "Hydraulics", "Solids Removal"],
  },
  {
    title: "Alkalinity Enhancement",
    href: "/products/alkalinity-enhancement",
    desc: "Limestone-based fluidized bed and pulsed bed reactors for pH and alkalinity control in acid-impacted source water. Developed and tested at federal fish hatcheries.",
    tags: ["pH Control", "Limestone Treatment", "Acid Mine Drainage"],
  },
  {
    title: "Solids Management",
    href: "/products/solids-management",
    desc: "NP Drum and Disc microscreen filters for fine solids removal in RAS and flow-through systems. Compact, low-maintenance designs suited for hatchery applications.",
    tags: ["Drum Filters", "Disc Filters", "Microscreen", "RAS"],
  },
  {
    title: "Other / Custom Solutions",
    href: "/products/custom-solutions",
    desc: "Not every hatchery or aquaculture challenge fits a standard product category. VATN evaluates site-specific water quality, hydraulic, biofiltration, disinfection, and treatment problems and develops solutions appropriate to the actual conditions.",
    tags: ["Site-Specific", "Engineering Evaluation", "Custom Design"],
  },
];

export default function ProductOverview() {
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
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(6,14,26,0.96) 0%, rgba(10,22,40,0.90) 55%, rgba(10,22,40,0.60) 100%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(14,155,138,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,155,138,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container relative z-10 text-center">
          <p className="section-label mb-3">Aquaculture &amp; Hatchery Water Treatment</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1
            className="font-display text-white mb-5"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}
          >
            Products &amp; Solutions
          </h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            VATN provides equipment, engineering evaluation, and technical support for gas management, water treatment, and hatchery infrastructure challenges. Every solution is sized and selected for the actual conditions at your site.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/our-team#contact" className="btn-primary">
              Discuss Your Project
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(14,155,138,0.2)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>How VATN Approaches Projects</p>
            <span className="teal-rule mb-5" />
            <p className="font-body text-white/70" style={{ fontSize: "0.95rem", lineHeight: "1.75" }}>
              Federal and state fish hatcheries, commercial aquaculture facilities, and engineering firms face water treatment and gas management challenges that vary significantly by site. Source water chemistry, available head, infrastructure constraints, species requirements, and budget all shape what is actually feasible. VATN evaluates each project individually — selecting and sizing equipment based on your specific conditions, not a standard catalog recommendation.
            </p>
            <p className="font-body text-white/50 mt-3" style={{ fontSize: "0.88rem", lineHeight: "1.7" }}>
              Dr. Barnaby Watten's 87+ peer-reviewed publications and 10 patents, combined with Terry McCarthy's 32+ years supplying hatchery programs, mean that VATN brings both the research background and the practical field experience to evaluate problems that do not have simple off-the-shelf answers.
            </p>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="mb-12">
            <p className="section-label mb-3">Product Categories</p>
            <span className="teal-rule mb-5" />
            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}
            >
              Solutions for Aquaculture, Hatchery &amp; RAS Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product.href}
                className="flex flex-col bg-white"
                style={{
                  border: "1px solid #E8EEF4",
                  borderTop: "3px solid #0E9B8A",
                  borderRadius: "2px",
                  padding: "1.5rem",
                }}
              >
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: "1.15rem", color: "#1C2B3A", lineHeight: 1.2 }}
                >
                  {product.title}
                </h3>
                <p
                  className="font-body mb-4 flex-1"
                  style={{ fontSize: "0.85rem", color: "#5A7080", lineHeight: "1.65" }}
                >
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body"
                      style={{
                        fontSize: "0.78rem",
                        color: "#0E9B8A",
                        backgroundColor: "rgba(14,155,138,0.08)",
                        border: "1px solid rgba(14,155,138,0.2)",
                        borderRadius: "2px",
                        padding: "2px 8px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={product.href}>
                  <span
                    className="flex items-center gap-1.5 font-display font-semibold transition-colors duration-200"
                    style={{ fontSize: "0.8rem", color: "#0E9B8A", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    Learn More <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Ready to Discuss Your Project?</p>
          <span className="teal-rule mb-6" style={{ margin: "0 auto 1.5rem" }} />
          <h2
            className="font-display text-white mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.1 }}
          >
            Every Project Starts With a Site Evaluation
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            VATN does not sell from a catalog. Contact us to describe your facility, your water quality conditions, and the challenge you are trying to solve. We will tell you honestly what is feasible and what is not.
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
