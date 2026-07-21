/**
 * VATN Products — Other / Custom Solutions
 * Style: Field-Grade Precision
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-engineering-bg-axr5FwHvEAGP2vXDckcJTG.webp";

const challengeAreas = [
  {
    title: "Water Quality Challenges",
    body: "Source water conditions that fall outside standard treatment parameters — unusual chemistry, extreme temperature ranges, multi-contaminant problems, or seasonal variability that standard equipment cannot handle reliably.",
  },
  {
    title: "Hydraulic Constraints",
    body: "Sites with very limited available head, unusual flow patterns, or infrastructure that makes standard equipment installation impractical. VATN has experience designing solutions for low-head and gravity-fed systems.",
  },
  {
    title: "Biofiltration Problems",
    body: "RAS biofilter instability, nitrification failures, or unusual loading conditions that require evaluation beyond standard biofilter sizing. VATN's published research on biofilm reactor performance informs this work.",
  },
  {
    title: "Disinfection Challenges",
    body: "Pathogen control requirements that do not fit standard UV or chemical disinfection approaches — unusual organisms of concern, water quality that limits UV transmittance, or treatment objectives that require a combined approach.",
  },
  {
    title: "Multi-Parameter Treatment",
    body: "Problems that involve simultaneous management of dissolved gases, pH, alkalinity, solids, and biological treatment in a constrained infrastructure. VATN evaluates these as integrated systems, not isolated components.",
  },
  {
    title: "Engineering Evaluation & Review",
    body: "Independent technical review of existing system designs, troubleshooting of underperforming systems, or evaluation of proposed equipment specifications before purchase. VATN provides honest assessments, not sales recommendations.",
  },
];

const examples = [
  "Acid mine drainage treatment at National Park Service sites",
  "Ballast water treatment system development and testing",
  "Invasive species control using elevated CO₂ and pH",
  "Low-head hydropower conversion system development",
  "Eel passage systems using airlift deep bypass technology",
  "Hydrocyclonic separation of invasive species from water supplies",
];

export default function CustomSolutions() {
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
          <p className="section-label mb-3">Site-Specific Engineering</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Other &amp; Custom Solutions<br />
            <span style={{ color: "#0E9B8A" }}>When the Problem Doesn't Fit a Catalog</span>
          </h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
            Some hatchery and aquaculture problems do not fit neatly into a standard product category. VATN evaluates site-specific water quality, gas management, hydraulic, solids, disinfection, biofiltration, and treatment challenges and develops solutions appropriate to the actual conditions.
          </p>
          <a href="/contact" className="btn-primary">
            Describe Your Challenge
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Challenge areas */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="mb-12">
            <p className="section-label mb-3">Challenge Areas</p>
            <span className="teal-rule mb-5" />
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Problems VATN Can Evaluate
            </h2>
            <p className="font-body mt-4 max-w-2xl" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
              VATN's principals have worked on water treatment and aquaculture engineering problems that span well beyond standard product categories. If your challenge involves water quality, hydraulics, gas management, or biological treatment in an aquaculture or hatchery context, it is worth a conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {challengeAreas.map((c) => (
              <div key={c.title} className="p-6 bg-white" style={{ border: "1px solid #E8EEF4", borderTop: "2px solid #0E9B8A", borderRadius: "2px" }}>
                <h3 className="font-display mb-3" style={{ fontSize: "1.05rem", color: "#1C2B3A", lineHeight: 1.2 }}>{c.title}</h3>
                <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{c.body}</p>
              </div>
            ))}
          </div>

          {/* Examples from research */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="section-label mb-3">Examples from VATN's Research History</p>
              <span className="teal-rule mb-5" />
              <p className="font-body mb-6" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.7" }}>
                The following are examples of non-standard problems that VATN's principals have worked on through research and applied projects. These are not product offerings — they illustrate the range of technical problems that have been evaluated.
              </p>
              <div className="flex flex-col gap-3">
                {examples.map((ex) => (
                  <div key={ex} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: "#0E9B8A", marginTop: "2px", flexShrink: 0 }} />
                    <span className="font-body" style={{ fontSize: "0.88rem", color: "#3A5068", lineHeight: "1.6" }}>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6" style={{ backgroundColor: "#0A1628", borderRadius: "2px" }}>
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>How VATN Approaches Custom Problems</p>
              <p className="font-body text-white/65 mb-4" style={{ fontSize: "0.88rem", lineHeight: "1.7" }}>
                VATN does not sell solutions before understanding the problem. For non-standard challenges, the process starts with a conversation about your facility, your water quality conditions, your constraints, and your objectives. From there, VATN evaluates what approaches are technically feasible and what the tradeoffs are.
              </p>
              <p className="font-body text-white/50 mb-5" style={{ fontSize: "0.9rem", lineHeight: "1.65" }}>
                If a problem is outside VATN's scope, we will tell you that directly rather than recommend a solution that is not appropriate for your situation.
              </p>
              <a href="/contact" className="flex items-center gap-1 font-display font-semibold" style={{ fontSize: "0.78rem", color: "#0E9B8A", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Start a Conversation <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>
            Describe Your Challenge
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            If your problem involves water quality, gas management, hydraulics, or biological treatment in an aquaculture or hatchery context, contact VATN. We will give you an honest assessment of what is feasible.
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
