/**
 * VATN Federal & State Hatchery Solutions Page
 * Style: Field-Grade Precision
 * Target: Federal hatcheries, state hatcheries, fisheries biologists, hatchery managers
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Wrench, Shield, BarChart3, Leaf, Clock, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AERIAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-engineering-bg-axr5FwHvEAGP2vXDckcJTG.webp";
const EQUIPMENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hatchery-systems-X4SD42svGcW9x6EL3d4G2s.webp";

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

const hatcheryPriorities = [
  {
    icon: <Shield size={20} />,
    title: "Fish Health & Production Reliability",
    desc: "Dissolved gas levels directly affect fish physiology. Maintaining appropriate dissolved oxygen, CO₂, and total gas pressure is not optional — it determines whether fish survive and grow.",
  },
  {
    icon: <Leaf size={20} />,
    title: "Conservation & Restoration Outcomes",
    desc: "Federal and state hatcheries are often responsible for native species recovery, broodstock management, and stocking programs with defined biological objectives. Water quality systems must support these goals reliably.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Energy & Water Efficiency",
    desc: "Hatchery budgets are constrained. Equipment that consumes excess oxygen, requires frequent maintenance, or operates inefficiently adds cost that compounds over years of operation.",
  },
  {
    icon: <Clock size={20} />,
    title: "Seasonal Flexibility",
    desc: "Source-water conditions change seasonally. Dissolved oxygen, temperature, and barometric pressure all vary. Treatment systems must perform reliably across the full range of operating conditions.",
  },
  {
    icon: <Wrench size={20} />,
    title: "Long-Term Maintainability",
    desc: "Hatchery staff are not always equipment engineers. Systems must be simple to operate, reliable in the field, and maintainable with limited technical resources.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Regulatory & Program Accountability",
    desc: "Federal and state programs operate under agency oversight and performance requirements. Equipment must meet treatment objectives consistently and support documentation of water quality conditions.",
  },
];

const hatcheryApplications = [
  {
    title: "Broodstock Systems",
    desc: "Broodstock require precise water quality management to support reproductive conditioning and egg quality. Dissolved oxygen and CO₂ control are critical in these high-value production areas.",
  },
  {
    title: "Egg Incubation",
    desc: "Incubation water must maintain specific dissolved oxygen levels and low CO₂ to support embryo development and minimize early mortality. Flow rates and gas exchange requirements differ significantly from grow-out systems.",
  },
  {
    title: "Juvenile Rearing",
    desc: "Juvenile fish are particularly sensitive to dissolved gas conditions. Oxygenation and degassing systems must maintain appropriate conditions across variable stocking densities and seasonal flow changes.",
  },
  {
    title: "Raceway Systems",
    desc: "Raceway-based hatcheries depend on flow-through oxygenation and degassing to maintain water quality along the length of each raceway. VATN's LHO technology was developed specifically for raceway applications.",
  },
  {
    title: "Recirculating Aquaculture Systems (RAS)",
    desc: "RAS environments accumulate CO₂ and nitrogen rapidly. Effective CO₂ stripping, oxygenation, and total gas pressure management are essential to system stability and fish health.",
  },
  {
    title: "Oxygenation Upgrades & Retrofits",
    desc: "Many existing hatcheries operate with outdated or undersized oxygenation equipment. VATN evaluates existing infrastructure and designs upgrade solutions that work within available head, space, and budget constraints.",
  },
];

const realWorldConstraints = [
  "Aging infrastructure with limited available hydraulic head",
  "Coldwater and warmwater species with different dissolved gas requirements",
  "Remote sites with limited access to technical support",
  "Budget constraints that require cost-effective, low-maintenance designs",
  "Seasonal variation in source-water dissolved oxygen and temperature",
  "Limited footprint for new equipment installation",
  "Changing source-water conditions due to drought, runoff, or seasonal patterns",
  "Multi-species programs with different production stage requirements",
];

export default function HatcherySolutions() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative"
        style={{
          backgroundImage: `url(${AERIAL_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "9rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,14,26,0.95) 0%, rgba(10,22,40,0.88) 55%, rgba(10,22,40,0.55) 100%)" }} />
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="container relative z-10">
          <RevealSection>
            <p className="section-label mb-3">Federal &amp; State Hatchery Programs</p>
            <span className="teal-rule mb-5" />
            <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
              Water Treatment &amp; Gas Management<br />
              <span style={{ color: "#0E9B8A" }}>for Federal &amp; State Fish Hatcheries</span>
            </h1>
            <p className="font-body text-white/70 max-w-2xl mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>
              VATN Science and Technology has direct experience supporting federal and state hatchery programs with site-specific oxygenation, degassing, CO₂ control, and water treatment solutions designed around the real constraints of hatchery infrastructure and fish production objectives.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Plan a Hatchery System Evaluation
                <ArrowRight size={15} />
              </a>
              <Link href="/gas-management">
                <span className="btn-outline">Gas Management Solutions</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── HATCHERY PRIORITIES ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-2xl mb-12">
              <p className="section-label mb-3">What Hatcheries Need</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                The Priorities That Drive Hatchery Water Treatment Decisions
              </h2>
              <p className="font-body mt-4" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                Federal and state hatcheries operate under a different set of constraints than commercial aquaculture. Production goals are tied to conservation and restoration mandates, budgets are fixed, and the consequences of equipment failure extend beyond financial loss.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hatcheryPriorities.map((item, i) => (
              <RevealSection key={item.title} delay={i * 55}>
                <div className="p-6 h-full bg-white" style={{ border: "1px solid #E8EEF4", borderTop: "2px solid #0E9B8A", borderRadius: "2px" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: "#0E9B8A" }}>{item.icon}</div>
                    <h3 className="font-display" style={{ fontSize: "1.1rem", color: "#1C2B3A", lineHeight: 1.2 }}>{item.title}</h3>
                  </div>
                  <p className="font-body" style={{ color: "#5A7080", fontSize: "0.84rem", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <RevealSection>
              <p className="section-label mb-3">Hatchery Applications</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Solutions Across the Full Hatchery Production Cycle
              </h2>
              <p className="font-body mb-8" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                Water treatment requirements vary significantly across different stages of fish production and different facility types. VATN evaluates each application individually and designs solutions appropriate to the specific production stage, species, and infrastructure.
              </p>
              <div className="flex flex-col gap-4">
                {hatcheryApplications.map((app, i) => (
                  <RevealSection key={app.title} delay={i * 50}>
                    <div className="p-5 bg-white" style={{ borderLeft: "2px solid #0E9B8A", borderRadius: "2px" }}>
                      <h3 className="font-display mb-1.5" style={{ fontSize: "1.05rem", color: "#1C2B3A" }}>{app.title}</h3>
                      <p className="font-body" style={{ color: "#5A7080", fontSize: "0.83rem", lineHeight: "1.6" }}>{app.desc}</p>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </RevealSection>

            <div className="lg:sticky lg:top-24">
              <RevealSection delay={80}>
                <img
                  src={EQUIPMENT_IMG}
                  alt="Aquaculture water treatment equipment"
                  className="w-full object-cover mb-6"
                  style={{ borderRadius: "2px", aspectRatio: "4/3" }}
                />
              </RevealSection>
              <RevealSection delay={120}>
                <div className="p-6" style={{ backgroundColor: "#0A1628", borderRadius: "2px" }}>
                  <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Designed Around Real Hatchery Constraints</p>
                  <p className="font-body text-white/65 mb-5" style={{ fontSize: "0.85rem", lineHeight: "1.65" }}>
                    VATN's principals have direct experience working within the USFWS National Fish Hatchery program. This background informs how VATN approaches hatchery projects — with an understanding of the infrastructure, budget, and operational realities that shape what is actually feasible in the field.
                  </p>
                  <div className="flex flex-col gap-2">
                    {realWorldConstraints.map((c) => (
                      <div key={c} className="flex items-start gap-2">
                        <CheckCircle2 size={13} style={{ color: "#0E9B8A", marginTop: "3px", flexShrink: 0 }} />
                        <span className="font-body text-white/60" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM SUPPORT ── */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: "#060E1A" }}>
        <div className="absolute inset-0 blueprint-cross" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Technical Support</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.1 }}>
                Technical Support for Agency and Engineering Teams
              </h2>
              <p className="font-body text-white/65 mb-5" style={{ fontSize: "0.92rem", lineHeight: "1.7" }}>
                VATN works directly with hatchery managers, fisheries biologists, agency decision-makers, and outside engineering firms. Whether a project involves a straightforward oxygenation upgrade or a comprehensive water treatment system evaluation, VATN provides the technical input needed to make informed decisions.
              </p>
              <p className="font-body text-white/65" style={{ fontSize: "0.92rem", lineHeight: "1.7" }}>
                VATN's Director of Sales brings 35 years of experience supporting state and federal hatchery programs in the private sector, with a background in site assessment, equipment selection, and vendor-agency coordination. This experience means VATN understands how hatchery procurement and project approval processes work — and can support your team through them.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Hatchery Managers", desc: "Site assessment, treatment objective definition, equipment evaluation, and operational guidance." },
                  { title: "Fisheries Biologists", desc: "Species-specific dissolved gas requirements, water quality monitoring, and treatment performance evaluation." },
                  { title: "Agency Decision-Makers", desc: "Technical documentation, cost-benefit analysis, and procurement support for capital equipment decisions." },
                  { title: "Engineering Firms", desc: "Gas-transfer modeling, equipment sizing, specification development, and design review support." },
                ].map((item, i) => (
                  <div key={item.title} className="p-5" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(14,155,138,0.2)", borderRadius: "2px" }}>
                    <h3 className="font-display text-white mb-2" style={{ fontSize: "1.05rem" }}>{item.title}</h3>
                    <p className="font-body text-white/55" style={{ fontSize: "0.82rem", lineHeight: "1.55" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <RevealSection>
              <p className="section-label mb-3">Start a Hatchery Evaluation</p>
              <span className="teal-rule mb-5 mx-auto" />
              <h2 className="font-display mb-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Plan a Hatchery System Evaluation
              </h2>
              <p className="font-body mb-8" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}>
                Contact VATN to discuss your facility's water treatment objectives, existing infrastructure, and the specific challenges you are trying to address. VATN will provide a technical assessment of the options available for your site.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="p-7 bg-white text-left" style={{ boxShadow: "0 2px 16px rgba(10,22,40,0.08)", borderTop: "3px solid #0E9B8A", borderRadius: "2px" }}>
                <form className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Your Name" className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    <input type="text" placeholder="Hatchery / Agency Name" className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="email" placeholder="Email Address" className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    <input type="tel" placeholder="Phone Number" className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  </div>
                  <select className="font-body px-4 py-3 outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#3A5068", backgroundColor: "#ffffff" }}>
                    <option value="federal">Federal Fish Hatchery</option>
                    <option value="state">State Fish Hatchery</option>
                    <option value="tribal">Tribal Hatchery</option>
                    <option value="conservation">Conservation / Restoration Program</option>
                    <option value="private">Private Aquaculture Facility</option>
                    <option value="engineering">Engineering Firm / Consultant</option>
                  </select>
                  <textarea rows={4} placeholder="Describe your facility, species, current water treatment challenges, and any specific treatment objectives..." className="font-body px-4 py-3 outline-none resize-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  <button type="submit" className="btn-primary w-fit">
                    Request Hatchery Evaluation
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
