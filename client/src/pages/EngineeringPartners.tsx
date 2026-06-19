/**
 * VATN Engineering Partners Page
 * Style: Field-Grade Precision
 * Target: Engineering firms supporting aquaculture and hatchery infrastructure projects
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Ruler, FileText, Calculator, Settings, RefreshCw, Layers, ClipboardList } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";
const AERIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-engineering-bg-axr5FwHvEAGP2vXDckcJTG.webp";

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

const collaborationAreas = [
  {
    icon: <Ruler size={22} />,
    title: "Concept Development",
    desc: "VATN can engage early in the design process to help engineering teams define gas-transfer requirements, evaluate treatment approaches, and establish equipment parameters before detailed design begins.",
  },
  {
    icon: <Calculator size={22} />,
    title: "Equipment Sizing & Modeling",
    desc: "Using site-specific water chemistry, hydraulic conditions, and treatment objectives, VATN applies proprietary modeling software to size oxygenation and degassing equipment accurately — avoiding both undersized systems and unnecessary overbuilding.",
  },
  {
    icon: <Settings size={22} />,
    title: "Oxygenation & Degassing Modeling",
    desc: "VATN evaluates reactor performance against inlet dissolved oxygen and nitrogen concentrations, temperature, barometric pressure, alpha factor, operating pressures, gas feed rates, and mass-transfer parameters specific to the project site.",
  },
  {
    icon: <Wind size={22} />,
    title: "CO₂ Stripping Evaluations",
    desc: "CO₂ accumulation in RAS and high-density systems is often underestimated in early design. VATN provides stripping evaluations that account for the full range of operating conditions and help engineering teams select the appropriate treatment approach.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Retrofit & Upgrade Planning",
    desc: "For projects involving existing facilities, VATN evaluates current equipment performance, identifies limiting factors, and develops upgrade recommendations that work within existing infrastructure constraints.",
  },
  {
    icon: <FileText size={22} />,
    title: "Technical Documentation",
    desc: "VATN can provide technical documentation supporting equipment selection decisions, including performance modeling outputs, equipment specifications, and design rationale for inclusion in project deliverables.",
  },
  {
    icon: <ClipboardList size={22} />,
    title: "Procurement & Specification Support",
    desc: "VATN can assist engineering teams in developing equipment specifications, evaluating vendor proposals, and supporting procurement processes for gas management and water treatment equipment.",
  },
  {
    icon: <Layers size={22} />,
    title: "RAS & Raceway System Support",
    desc: "VATN has extensive applied experience with both recirculating aquaculture systems and raceway-based hatcheries. This includes dissolved gas management across the full production cycle — from broodstock through grow-out.",
  },
];

const whyEarly = [
  {
    title: "Avoid Overbuilt Systems",
    desc: "Without site-specific modeling, gas management systems are often sized conservatively — resulting in unnecessary capital cost, larger footprints, and higher operating expenses. VATN's modeling approach right-sizes equipment from the start.",
  },
  {
    title: "Reduce Footprint Requirements",
    desc: "VATN's LHO technology and side-stream treatment approaches can significantly reduce the physical footprint required for oxygenation and degassing compared to conventional equipment. This matters in constrained hatchery environments.",
  },
  {
    title: "Reduce Operating Costs",
    desc: "Equipment selected without modeling often consumes more oxygen, energy, and maintenance resources than necessary. VATN's approach identifies configurations that minimize ongoing operating costs — a benefit that compounds over the facility's operating life.",
  },
  {
    title: "Improve Treatment Performance",
    desc: "Generic equipment selections may achieve minimum treatment targets under average conditions but fail during seasonal extremes. Site-specific modeling ensures performance across the full range of operating conditions.",
  },
  {
    title: "Account for Site-Specific Dissolved Gas Conditions",
    desc: "Dissolved gas conditions vary significantly by geography, elevation, source-water type, and season. Equipment that performs well at one site may be inadequate or inappropriate at another. VATN's modeling accounts for these differences.",
  },
  {
    title: "Support Long-Term Maintainability",
    desc: "VATN's designs prioritize simplicity and reliability. Systems with fewer moving parts, appropriate automation, and straightforward maintenance requirements are better suited to the operational realities of hatchery environments.",
  },
];

function Wind({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
    </svg>
  );
}

export default function EngineeringPartners() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          paddingTop: "9rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,14,26,0.93) 0%, rgba(10,22,40,0.88) 60%, rgba(10,22,40,0.78) 100%)" }} />
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="container relative z-10">
          <RevealSection>
            <p className="section-label mb-3">For Engineering Firms</p>
            <span className="teal-rule mb-5" />
            <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
              Technical Gas Management Support<br />
              <span style={{ color: "#0E9B8A" }}>for Aquaculture Engineering Firms</span>
            </h1>
            <p className="font-body text-white/70 max-w-2xl mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
              VATN helps engineering teams evaluate gas-transfer requirements, select treatment approaches, and design equipment around site-specific hydraulic and water-quality conditions — from concept development through procurement support.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Collaborate With VATN on a Project
                <ArrowRight size={15} />
              </a>
              <Link href="/gas-management">
                <span className="btn-outline">Gas Management Solutions</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <p className="section-label mb-3">Why Engineering Firms Work With VATN</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                A Technical Partner for Gas-Transfer Design Challenges
              </h2>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.7" }}>
                Gas management in aquaculture and hatchery systems involves a level of technical complexity that goes beyond standard water treatment design. Dissolved oxygen, nitrogen, CO₂, and total gas pressure interact in ways that are highly dependent on site-specific conditions — and equipment that is not sized and configured against those conditions will either underperform or be unnecessarily expensive to build and operate.
              </p>
              <p className="font-body" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.7" }}>
                VATN provides engineering firms with the specialized gas-transfer expertise needed to make informed equipment decisions. This includes proprietary modeling software, extensive applied experience across reactor types, and direct knowledge of the hatchery and aquaculture environments where this equipment operates.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <img
                src={AERIAL_IMG}
                alt="Aerial view of a fish hatchery facility"
                className="w-full object-cover"
                style={{ borderRadius: "2px", aspectRatio: "16/10" }}
              />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION AREAS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3">How VATN Supports Engineering Teams</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Collaboration Areas
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {collaborationAreas.map((area, i) => (
              <RevealSection key={area.title} delay={i * 50}>
                <div className="p-6 h-full bg-white" style={{ borderRadius: "2px", borderLeft: "2px solid #0E9B8A", boxShadow: "0 1px 4px rgba(10,22,40,0.05)" }}>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2.5 shrink-0" style={{ backgroundColor: "rgba(14,155,138,0.1)", color: "#0E9B8A", borderRadius: "2px" }}>
                      {area.icon}
                    </div>
                    <h3 className="font-display" style={{ fontSize: "1.1rem", color: "#1C2B3A", lineHeight: 1.2, paddingTop: "4px" }}>{area.title}</h3>
                  </div>
                  <p className="font-body" style={{ color: "#5A7080", fontSize: "0.84rem", lineHeight: "1.65" }}>{area.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INVOLVE VATN EARLY ── */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: "#060E1A" }}>
        <div className="absolute inset-0 blueprint-cross" />
        <div className="container relative z-10">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Early Engagement</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.1 }}>
                Why Engineering Firms Should Involve VATN Early in the Design Process
              </h2>
              <p className="font-body text-white/60 mt-4" style={{ fontSize: "0.92rem", lineHeight: "1.65" }}>
                Gas management decisions made early in a project have downstream consequences for capital cost, operating cost, footprint, and long-term performance. Involving VATN at the concept stage — rather than during equipment procurement — produces better outcomes across all of these dimensions.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyEarly.map((item, i) => (
              <RevealSection key={item.title} delay={i * 55}>
                <div className="p-6 h-full" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(14,155,138,0.2)", borderRadius: "2px" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={15} style={{ color: "#0E9B8A", flexShrink: 0 }} />
                    <h3 className="font-display text-white" style={{ fontSize: "1.05rem", lineHeight: 1.2 }}>{item.title}</h3>
                  </div>
                  <p className="font-body text-white/55" style={{ fontSize: "0.83rem", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VATN CAPABILITIES SUMMARY ── */}
      <section className="py-16" style={{ backgroundColor: "#1E4D7B" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <RevealSection>
              <div>
                <p className="section-label mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Reactor Types Evaluated</p>
                <p className="font-display text-white font-bold" style={{ fontSize: "1.5rem" }}>
                  Spray towers, packed columns, U-tubes, LHOs, vacuum degassers, surface agitators
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={60}>
              <div>
                <p className="section-label mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Modeling Approach</p>
                <p className="font-display text-white font-bold" style={{ fontSize: "1.5rem" }}>
                  Proprietary software. Site-specific inputs. Performance predictions across operating range.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={120}>
              <div>
                <p className="section-label mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Experience Base</p>
                <p className="font-display text-white font-bold" style={{ fontSize: "1.5rem" }}>
                  80+ combined years. Federal hatchery programs. Hundreds of RAS and raceway applications.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <RevealSection>
              <p className="section-label mb-3">Start a Collaboration</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Collaborate With VATN on a Project
              </h2>
              <p className="font-body mb-8" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                Describe your project — the facility type, the gas management challenge, and the stage of design you are in. VATN will respond with an assessment of how we can support your team and what information would be needed to begin a technical evaluation.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="p-7 bg-white" style={{ boxShadow: "0 2px 16px rgba(10,22,40,0.08)", borderTop: "3px solid #0E9B8A", borderRadius: "2px" }}>
                <form className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Your Name" className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    <input type="text" placeholder="Firm Name" className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="email" placeholder="Email Address" className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    <input type="tel" placeholder="Phone Number" className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  </div>
                  <select className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#3A5068", backgroundColor: "#ffffff" }}>
                    <option value="concept">Concept / Early Design Stage</option>
                    <option value="detailed">Detailed Design Stage</option>
                    <option value="procurement">Procurement / Specification Stage</option>
                    <option value="retrofit">Retrofit / Upgrade Project</option>
                    <option value="evaluation">Feasibility Evaluation</option>
                  </select>
                  <textarea rows={4} placeholder="Describe the project — facility type, species, flow rates, gas management challenge, and what support you are looking for..." className="font-body px-4 py-3 outline-none resize-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  <button type="submit" className="btn-primary w-fit">
                    Submit Project Inquiry
                    <ArrowRight size={15} />
                  </button>
                </form>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
