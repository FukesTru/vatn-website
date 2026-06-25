/**
 * VATN Products & Solutions Page
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed
 * All product descriptions sourced directly from vatnusa.com product pages.
 * No fabricated claims.
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Waves, Filter, Sun, Layers, Fish, Droplets, Bug } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hatchery-systems-d6qdrLqEtbQveaqmZLT9mn.webp";

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition = `opacity 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

const products = [
  {
    id: "gas-management",
    number: "01",
    icon: <Waves size={22} />,
    title: "Gas Management",
    subtitle: "Oxygenation, Degassing & CO₂ Control",
    tag: "Core Technology",
    summary: "VATN has unmatched capabilities in the design, development, testing, modeling, and application of oxygenation and degassing equipment used in aquaculture.",
    body: [
      "Reactor performance is related to a number of site-specific conditions including inlet dissolved oxygen and N₂ concentrations, temperature, local barometric pressure, alpha, operating pressures, gas feed rates, gas composition, and the gas-liquid interfacial areas and linked mass transfer coefficients established within a specific reactor type.",
      "VATN's proprietary software and modeling approach identifies reactor operating conditions that minimize capital and variable costs while achieving target levels of dissolved gases and total gas pressures in the reactor's discharge.",
      "VATN's extensive experience includes the development and patenting (1989) of the multi-stage low head oxygenator (LHO). LHOs have no moving parts and have been designed to operate with hydraulic gradients as low as 9 inches.",
    ],
    technologies: [
      { name: "Multi-Stage Low Head Oxygenator (LHO)", desc: "No moving parts. Operates with hydraulic gradients as low as 9 inches. Patented 1989." },
      { name: "Vacuum Degassing", desc: "Barnaby Watten's computer model predicts performance under each unique application's water chemistry and physical plant characteristics. Employs an eductor to remove off-gas from the column. Side-stream designs operating at 13–15 feet of vacuum allow for over-treatment with blending, reducing equipment scale by approximately 70%." },
      { name: "Packed Columns", desc: "Evaluated, modeled, and applied for oxygenation and degassing applications." },
      { name: "Spray Towers", desc: "Evaluated and modeled for site-specific gas transfer applications." },
      { name: "Hooded Surface Agitators", desc: "Applied for oxygenation in raceway and pond systems." },
      { name: "U-Tubes", desc: "Evaluated and modeled for high-pressure oxygenation applications." },
      { name: "CO₂ Stripping Systems", desc: "Forced air packed beds, spray nozzle reactors, surface agitators, and oxygen absorption equipment modified for concurrent hydroxide base scrubbing of CO₂. Scrubber use provides savings in RAS oxygenation costs through linked reductions in dissolved N₂ concentrations." },
    ],
    development: "VATN's in-house research is currently focused on a new class of reactors for CO₂ stripping and side-stream oxygenation or vacuum degassing. The CO₂ stripping reactors eliminate plastic packing, operate efficiently with 1/3 the footprint and about 40% of the height required by conventional equipment, and induce air flow for stripping without blower assist over G/L ratios of approximately 4.5 to 6.0.",
    link: "/gas-management",
  },
  {
    id: "np-drum-disc-filters",
    number: "02",
    icon: <Filter size={22} />,
    title: "NP Drum & Disc Filters",
    subtitle: "Solids Removal for RAS and Hatchery Systems",
    tag: "Filtration",
    summary: "Drum and disc microscreen filters for effective solids removal in recirculating aquaculture systems and hatchery operations.",
    body: [
      "Effective solids removal is a critical component of any recirculating aquaculture system. Suspended solids — primarily uneaten feed and fecal matter — must be removed rapidly to prevent oxygen depletion, ammonia spikes, and water quality degradation.",
      "Drum and disc microscreen filters provide continuous, automated solids removal with minimal operator intervention. Terry McCarthy has extensive hands-on experience with drum and disc microscreen systems from his years at Water Management Technologies (WMT), where these filters were a core component of WMT's turnkey RAS packages for state and federal hatchery programs.",
      "VATN can assist with equipment selection, sizing, and integration of drum and disc filter systems into new or existing RAS and hatchery designs.",
    ],
    technologies: [
      { name: "Drum Microscreen Filters", desc: "Rotating drum screens with continuous backwash for automated solids capture and removal from RAS effluent streams." },
      { name: "Disc Microscreen Filters", desc: "Disc-style microscreen filters offering a compact footprint with effective solids removal for smaller flow rates and space-constrained installations." },
    ],
    development: null,
    link: null,
  },
  {
    id: "utraqua-uv",
    number: "03",
    icon: <Sun size={22} />,
    title: "Utraqua UV Disinfection",
    subtitle: "Advanced UV Systems for Aquaculture",
    tag: "Disinfection",
    summary: "Ultraqua is an international UV disinfection manufacturer. VATN represents Ultraqua systems for aquaculture applications.",
    body: [
      "Ultraqua's UV product line offers low pressure and medium pressure UV contactors. Reactors can be sourced in stainless steel or polypropylene in various closed vessel styles, as well as channel UV systems for vertical or 45-degree installation.",
      "Aquaculture applications include influent pretreatment and recirculating aquaculture system (RAS) disinfection.",
      "Terry McCarthy's experience with Ultraqua systems spans aquaculture influent pretreatment, RAS disinfection, and related water treatment applications.",
    ],
    technologies: [
      { name: "Low Pressure UV Contactors", desc: "Stainless steel or polypropylene construction. Suitable for aquaculture influent pretreatment and RAS disinfection." },
      { name: "Medium Pressure UV Contactors", desc: "Higher intensity UV output for applications requiring greater disinfection capacity or flow rates." },
      { name: "Channel UV Systems", desc: "Open channel UV systems available for vertical or 45-degree installation configurations." },
    ],
    development: null,
    link: null,
  },
  {
    id: "bio-media",
    number: "04",
    icon: <Layers size={22} />,
    title: "B100 Bio Media",
    subtitle: "Biological Filtration Support for RAS",
    tag: "Biological Filtration",
    summary: "VATN's B100 Bio Media is developed to support nitrifying bacteria needed to control ammonia in recirculating aquaculture systems.",
    body: [
      "The B-100 is made in the USA with high density polyethylene (HDPE). This unique product provides the desirable combination of a high protected surface area of 500 m²/m³, good mixing characteristics, and competitive pricing.",
      "Biological filtration is a critical component of any RAS. Nitrifying bacteria colonize the bio media surface and convert toxic ammonia (produced by fish respiration and feed decomposition) first to nitrite and then to nitrate, maintaining water quality within safe limits for fish culture.",
      "The B-100's high protected surface area supports dense bacterial colonization while its mixing characteristics ensure adequate contact between the media, bacteria, and the water being treated.",
    ],
    technologies: [
      { name: "B100 Bio Media (Black)", desc: "High density polyethylene (HDPE). Protected surface area: 500 m²/m³. Made in the USA. Designed for moving bed biofilm reactor (MBBR) applications." },
      { name: "MB3 Bio Media (White)", desc: "Alternative HDPE bio media configuration for biological filtration in RAS applications." },
    ],
    development: null,
    link: null,
  },
  {
    id: "advanced-fish-tank-design",
    number: "05",
    icon: <Fish size={22} />,
    title: "Advanced Fish Tank Design",
    subtitle: "Mixed-Cell Raceway Systems",
    tag: "Rearing Unit Design",
    summary: "A mixed-cell raceway (MCR) is designed to combine the best characteristics of both circular tanks and linear raceways in a single vessel.",
    body: [
      "The mixed-cell raceway provides uniform water quality, rapid solids removal, and simplicity of husbandry and maintenance — combining the hydraulic advantages of circular tank culture with the space efficiency and operational simplicity of linear raceways.",
      "Rearing unit design has a direct impact on gas management requirements, solids removal efficiency, and fish performance. VATN's expertise in rearing unit hydraulics — developed through decades of research at the USFWS Wellsboro Research and Development Laboratory — informs the selection and sizing of gas management and water treatment equipment for each specific rearing unit configuration.",
      "VATN can assist with rearing unit selection, hydraulic design review, and integration of gas management systems optimized for the specific tank or raceway configuration in use.",
    ],
    technologies: [
      { name: "Mixed-Cell Raceway (MCR)", desc: "Combines uniform water quality and rapid solids removal of circular tanks with the space efficiency and operational simplicity of linear raceways. Suitable for federal and state hatchery programs." },
    ],
    development: null,
    link: null,
  },
  {
    id: "alkalinity-enhancement",
    number: "06",
    icon: <Droplets size={22} />,
    title: "Alkalinity Enhancement",
    subtitle: "Limestone-Based Fluidized Bed Systems",
    tag: "Water Chemistry",
    summary: "A limestone-based fluidized bed system raises the alkalinity and pH of acid-impacted source water for fish culture operations.",
    body: [
      "In some applications it is beneficial to add carbon dioxide to overcome the dissolution rate of limestone, accelerating alkalinity addition to the water supply.",
      "This system was tested and proven at two hatcheries in the United States. Acid-impacted source water — common in areas with naturally low-pH geology or acid mine drainage influence — can be treated to achieve alkalinity and pH levels suitable for fish culture without the use of caustic chemicals.",
      "Alkalinity is also important in RAS for maintaining stable pH and supporting biological filtration performance. VATN can assist with alkalinity enhancement system design and integration into new or existing hatchery water supply systems.",
    ],
    technologies: [
      { name: "Limestone-Based Fluidized Bed", desc: "Raises alkalinity and pH of acid-impacted source water. CO₂ addition option available to overcome limestone dissolution rate limitations. Tested and proven at two U.S. hatcheries." },
    ],
    development: null,
    link: null,
  },
  {
    id: "invasive-species-control",
    number: "07",
    icon: <Bug size={22} />,
    title: "Invasive Species Control",
    subtitle: "Aquatic Invasive Species Removal via Water Management",
    tag: "Biosecurity",
    summary: "New Zealand mud snails (Potamopyrgus antipodarum, NZMS) were successfully removed from infested waters employing hydrocyclones.",
    body: [
      "All three size classes of New Zealand mud snails were removed using this approach — including neonates, the smallest life form. NZMS are currently found in the Northwest USA and states bordering the Great Lakes, where they represent a significant biosecurity concern for hatchery operations.",
      "New Zealand mud snails can reach extremely high densities in hatchery water supplies and rearing units, competing with fish for food resources and potentially causing operational problems. Physical removal via hydrocyclone offers a chemical-free approach to managing NZMS in hatchery water supplies.",
      "This technology was developed through research conducted by Dr. Barnaby Watten during his career with the USFWS and USGS. VATN can provide consultation on invasive species control strategies for hatchery water supply and rearing systems.",
    ],
    technologies: [
      { name: "Hydrocyclone-Based Removal", desc: "Physical removal of New Zealand mud snails (NZMS) from hatchery water supplies. Effective against all size classes including neonates. Chemical-free approach suitable for hatchery water supply treatment." },
    ],
    development: null,
    link: null,
  },
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          paddingTop: "9rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,14,26,0.92) 0%, rgba(10,22,40,0.85) 60%, rgba(10,22,40,0.7) 100%)" }} />
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="container relative z-10">
          <RevealSection>
            <p className="section-label mb-3">VATN Science and Technology</p>
            <span className="teal-rule mb-5" />
            <h1 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
              Products &amp; Solutions
            </h1>
            <p className="font-body text-white/70 max-w-2xl mb-8" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Proper management of dissolved gas levels — particularly dissolved oxygen, nitrogen, and CO₂ — is critical in determining the success of both aquaculture and wastewater operations. VATN products address these needs with equipment developed and proven through decades of applied research.
            </p>
            <a href="#products" className="btn-primary">
              View All Products <ArrowRight size={15} />
            </a>
          </RevealSection>
        </div>
      </section>

      {/* ── PRODUCT OVERVIEW STRIP ── */}
      <section style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(14,155,138,0.2)" }}>
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {products.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="flex items-center gap-2 group">
                <div className="w-1 h-1 rounded-full shrink-0 transition-colors" style={{ backgroundColor: "#0E9B8A" }} />
                <span className="font-body text-white/60 group-hover:text-white/90 transition-colors" style={{ fontSize: "0.75rem" }}>{p.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT INTRO ── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-3xl">
              <p className="section-label mb-3">Product Overview</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Systems Engineered for Aquaculture Water Quality
              </h2>
              <p className="font-body" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
                The required manipulation of dissolved gas levels and the number of monitoring sites is related in part to fish rearing unit design — including tank hydraulics, the mixed-cell rearing unit, biofilter type and performance, and solids removal operations. VATN products address the full range of water quality management needs for federal and state fish hatcheries, commercial RAS operations, and related aquaculture facilities.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── PRODUCT CARDS ── */}
      <section id="products" className="pb-20 lg:pb-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <div className="flex flex-col gap-6">
            {products.map((product, idx) => (
              <RevealSection key={product.id} delay={idx * 40}>
                <div
                  id={product.id}
                  className="overflow-hidden"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "3px",
                    boxShadow: "0 2px 12px rgba(10,22,40,0.07)",
                    border: "1px solid #E0E8F0",
                  }}
                >
                  {/* Card Header — always visible */}
                  <button
                    className="w-full text-left"
                    onClick={() => setActiveProduct(activeProduct === product.id ? null : product.id)}
                  >
                    <div className="flex items-start gap-5 p-6 lg:p-8">
                      {/* Number */}
                      <div className="shrink-0 font-display font-bold" style={{ fontSize: "2.5rem", color: "rgba(14,155,138,0.2)", lineHeight: 1, minWidth: "3rem" }}>
                        {product.number}
                      </div>
                      {/* Icon + Title */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <div className="p-2 shrink-0" style={{ backgroundColor: "rgba(14,155,138,0.1)", color: "#0E9B8A", borderRadius: "2px" }}>
                            {product.icon}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-display font-bold" style={{ fontSize: "1.25rem", color: "#1C2B3A", lineHeight: 1.1 }}>{product.title}</h3>
                              <span className="font-body" style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0E9B8A", backgroundColor: "rgba(14,155,138,0.08)", padding: "2px 8px", borderRadius: "1px" }}>{product.tag}</span>
                            </div>
                            <div className="font-body" style={{ fontSize: "0.84rem", color: "#5A7080", marginTop: "2px" }}>{product.subtitle}</div>
                          </div>
                        </div>
                        <p className="font-body" style={{ fontSize: "0.88rem", color: "#3A5068", lineHeight: "1.6" }}>{product.summary}</p>
                      </div>
                      {/* Expand indicator */}
                      <div
                        className="shrink-0 mt-1 transition-transform duration-300"
                        style={{
                          transform: activeProduct === product.id ? "rotate(180deg)" : "rotate(0deg)",
                          color: "#0E9B8A",
                        }}
                      >
                        <ArrowRight size={18} style={{ transform: "rotate(90deg)" }} />
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {activeProduct === product.id && (
                    <div style={{ borderTop: "1px solid #E8EEF4" }}>
                      {/* Body paragraphs */}
                      <div className="p-6 lg:p-8 pt-6" style={{ backgroundColor: "#FAFBFC" }}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-2">
                            <h4 className="font-display mb-4" style={{ fontSize: "0.85rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Overview</h4>
                            <div className="flex flex-col gap-3">
                              {product.body.map((para, i) => (
                                <p key={i} className="font-body" style={{ fontSize: "0.88rem", color: "#3A5068", lineHeight: "1.7" }}>{para}</p>
                              ))}
                            </div>
                            {product.development && (
                              <div className="mt-6 p-4" style={{ backgroundColor: "rgba(14,155,138,0.06)", borderLeft: "2px solid #0E9B8A", borderRadius: "2px" }}>
                                <div className="font-display mb-2" style={{ fontSize: "0.75rem", color: "#0E9B8A", letterSpacing: "0.1em", textTransform: "uppercase" }}>Under Development</div>
                                <p className="font-body" style={{ fontSize: "0.85rem", color: "#3A5068", lineHeight: "1.65" }}>{product.development}</p>
                              </div>
                            )}
                          </div>
                          {/* Technology list */}
                          <div>
                            <h4 className="font-display mb-4" style={{ fontSize: "0.85rem", color: "#1C2B3A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Technologies &amp; Equipment</h4>
                            <div className="flex flex-col gap-3">
                              {product.technologies.map((tech) => (
                                <div key={tech.name} className="p-4 bg-white" style={{ borderLeft: "2px solid rgba(14,155,138,0.4)", borderRadius: "2px", boxShadow: "0 1px 4px rgba(10,22,40,0.04)" }}>
                                  <div className="font-display font-bold mb-1" style={{ fontSize: "0.88rem", color: "#1C2B3A" }}>{tech.name}</div>
                                  <p className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080", lineHeight: "1.55" }}>{tech.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* CTA row */}
                        <div className="mt-8 pt-6 flex flex-wrap items-center gap-4" style={{ borderTop: "1px solid #E8EEF4" }}>
                          {product.link ? (
                            <Link href={product.link}>
                              <span className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                Full {product.title} Details <ArrowRight size={14} />
                              </span>
                            </Link>
                          ) : null}
                          <a href="#contact" className="font-body" style={{ fontSize: "0.85rem", color: "#0E9B8A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                            Discuss this product with our team
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK CTA SECTION ── */}
      <section className="py-20 relative" style={{ backgroundColor: "#060E1A" }}>
        <div className="absolute inset-0 blueprint-cross" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <div>
                <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Site-Specific Evaluation</p>
                <span className="teal-rule mb-5" />
                <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", lineHeight: 1.05 }}>
                  Every System Is Modeled Against Your Actual Conditions
                </h2>
                <p className="font-body text-white/60 mb-6" style={{ fontSize: "0.92rem", lineHeight: "1.65" }}>
                  VATN does not recommend equipment from a catalog. Every gas management system is evaluated using proprietary modeling software against your facility's specific water chemistry, flow rates, temperature, species requirements, and infrastructure constraints.
                </p>
                <a href="#contact" className="btn-primary">
                  Request a Site Evaluation <ArrowRight size={15} />
                </a>
              </div>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Inlet DO & N₂ concentrations", desc: "Site-specific water chemistry inputs" },
                  { label: "Temperature & barometric pressure", desc: "Local environmental conditions" },
                  { label: "Operating pressures & gas feed rates", desc: "System-specific parameters" },
                  { label: "Capital & variable cost minimization", desc: "Optimized for your budget and goals" },
                ].map((item, i) => (
                  <div key={item.label} className="p-4" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(14,155,138,0.15)", borderRadius: "2px" }}>
                    <div className="font-display font-bold text-white mb-1" style={{ fontSize: "0.82rem", lineHeight: "1.3" }}>{item.label}</div>
                    <div className="font-body text-white/45" style={{ fontSize: "0.75rem" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact" className="py-20 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="max-w-2xl">
            <RevealSection>
              <p className="section-label mb-3">Product Inquiries</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-3" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.05 }}>
                Discuss Your Requirements
              </h2>
              <p className="font-body mb-8" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Describe your facility, species, flow rates, and the water quality challenge you're working through. VATN will respond with an assessment of the most appropriate equipment and approach.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div className="p-7" style={{ backgroundColor: "#F4F6F8", borderLeft: "3px solid #0E9B8A", borderRadius: "2px" }}>
                <form className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Your Name" className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    <input type="text" placeholder="Organization / Facility" className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="email" placeholder="Email Address" className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                    <select className="font-body px-4 py-3 bg-white outline-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#3A5068" }}>
                      <option value="gas-management">Gas Management / Oxygenation</option>
                      <option value="uv">UV Disinfection (Ultraqua)</option>
                      <option value="bio-media">B100 Bio Media</option>
                      <option value="filters">Drum & Disc Filters</option>
                      <option value="tank-design">Fish Tank Design (MCR)</option>
                      <option value="alkalinity">Alkalinity Enhancement</option>
                      <option value="invasive">Invasive Species Control</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <textarea rows={3} placeholder="Describe your facility, species, flow rates, and the challenge you're working through..." className="font-body px-4 py-3 bg-white outline-none resize-none" style={{ border: "1px solid #D4DDE8", borderRadius: "2px", fontSize: "0.88rem", color: "#1C2B3A" }} />
                  <button type="submit" className="btn-primary w-fit">
                    Send Product Inquiry <ArrowRight size={15} />
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
