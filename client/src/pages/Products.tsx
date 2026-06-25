/**
 * VATN Products & Solutions Page
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed
 * Layout: Always-visible full sections for each of the 7 product categories
 * NO IntersectionObserver animations — content is always rendered and visible
 * All content sourced from vatnusa.com. No fabricated claims.
 */
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

const products = [
  {
    id: "gas-management",
    number: "01",
    title: "Gas Management",
    subtitle: "Oxygenation, Degassing & CO\u2082 Control",
    tag: "Core Technology",
    summary: "VATN has unmatched capabilities in the design, development, testing, modeling, and application of oxygenation and degassing equipment used in aquaculture.",
    body: [
      "Reactor performance is related to a number of site-specific conditions including inlet dissolved oxygen and N\u2082 concentrations, temperature, local barometric pressure, alpha, operating pressures, gas feed rates, gas composition, and the gas-liquid interfacial areas and linked mass transfer coefficients established within a specific reactor type.",
      "VATN\u2019s proprietary software and modeling approach identifies reactor operating conditions that minimize capital and variable costs while achieving target levels of dissolved gases and total gas pressures in the reactor\u2019s discharge.",
      "VATN\u2019s extensive experience includes the development and patenting (1989) of the multi-stage low head oxygenator (LHO). LHOs have no moving parts and have been designed to operate with hydraulic gradients as low as 9 inches.",
    ],
    technologies: [
      { name: "Multi-Stage Low Head Oxygenator (LHO)", desc: "No moving parts. Operates with hydraulic gradients as low as 9 inches. Patented 1989." },
      { name: "Vacuum Degassing", desc: "Computer model predicts performance under each unique application\u2019s water chemistry and physical plant characteristics. Side-stream designs reduce equipment scale by approximately 70%." },
      { name: "Packed Columns", desc: "Evaluated, modeled, and applied for oxygenation and degassing applications." },
      { name: "Spray Towers", desc: "Evaluated and modeled for site-specific gas transfer applications." },
      { name: "CO\u2082 Stripping Systems", desc: "Forced air packed beds, spray nozzle reactors, surface agitators, and oxygen absorption equipment modified for concurrent hydroxide base scrubbing of CO\u2082." },
    ],
    development: "VATN\u2019s in-house research is currently focused on a new class of reactors for CO\u2082 stripping and side-stream oxygenation or vacuum degassing. The CO\u2082 stripping reactors eliminate plastic packing, operate efficiently with 1/3 the footprint, and induce air flow for stripping without blower assist.",
    link: "/gas-management",
    linkLabel: "Full Gas Management Details",
  },
  {
    id: "np-drum-disc-filters",
    number: "02",
    title: "NP Drum & Disc Filters",
    subtitle: "Solids Removal for RAS and Hatchery Systems",
    tag: "Filtration",
    summary: "Drum and disc microscreen filters for effective solids removal in recirculating aquaculture systems and hatchery operations.",
    body: [
      "Effective solids removal is a critical component of any recirculating aquaculture system. Suspended solids must be removed rapidly to prevent oxygen depletion, ammonia spikes, and water quality degradation.",
      "Drum and disc microscreen filters provide continuous, automated solids removal with minimal operator intervention. Terry McCarthy has extensive hands-on experience with drum and disc microscreen systems from his years at Water Management Technologies (WMT).",
      "VATN can assist with equipment selection, sizing, and integration of drum and disc filter systems into new or existing RAS and hatchery designs.",
    ],
    technologies: [
      { name: "Drum Microscreen Filters", desc: "Rotating drum screens with continuous backwash for automated solids capture and removal from RAS effluent streams." },
      { name: "Disc Microscreen Filters", desc: "Compact footprint with effective solids removal for smaller flow rates and space-constrained installations." },
    ],
    development: null,
    link: null,
    linkLabel: null,
  },
  {
    id: "utraqua-uv",
    number: "03",
    title: "Utraqua UV Disinfection",
    subtitle: "Advanced UV Systems for Aquaculture",
    tag: "Disinfection",
    summary: "Ultraqua is an international UV disinfection manufacturer. VATN represents Ultraqua systems for aquaculture applications.",
    body: [
      "Ultraqua\u2019s UV product line offers low pressure and medium pressure UV contactors. Reactors can be sourced in stainless steel or polypropylene in various closed vessel styles, as well as channel UV systems for vertical or 45-degree installation.",
      "Aquaculture applications include influent pretreatment and recirculating aquaculture system (RAS) disinfection.",
      "Terry McCarthy\u2019s experience with Ultraqua systems spans aquaculture influent pretreatment, RAS disinfection, and related water treatment applications.",
    ],
    technologies: [
      { name: "Low Pressure UV Contactors", desc: "Stainless steel or polypropylene construction. Suitable for aquaculture influent pretreatment and RAS disinfection." },
      { name: "Medium Pressure UV Contactors", desc: "Higher intensity UV output for applications requiring greater disinfection capacity or flow rates." },
      { name: "Channel UV Systems", desc: "Open channel UV systems available for vertical or 45-degree installation configurations." },
    ],
    development: null,
    link: null,
    linkLabel: null,
  },
  {
    id: "bio-media",
    number: "04",
    title: "B100 Bio Media",
    subtitle: "Biological Filtration Support for RAS",
    tag: "Biological Filtration",
    summary: "VATN\u2019s B100 Bio Media is developed to support nitrifying bacteria needed to control ammonia in recirculating aquaculture systems.",
    body: [
      "The B-100 is made in the USA with high density polyethylene (HDPE). This unique product provides the desirable combination of a high protected surface area of 500 m\u00b2/m\u00b3, good mixing characteristics, and competitive pricing.",
      "Biological filtration is a critical component of any RAS. Nitrifying bacteria colonize the bio media surface and convert toxic ammonia first to nitrite and then to nitrate, maintaining water quality within safe limits for fish culture.",
      "The B-100\u2019s high protected surface area supports dense bacterial colonization while its mixing characteristics ensure adequate contact between the media, bacteria, and the water being treated.",
    ],
    technologies: [
      { name: "B100 Bio Media (Black)", desc: "High density polyethylene (HDPE). Protected surface area: 500 m\u00b2/m\u00b3. Made in the USA. Designed for moving bed biofilm reactor (MBBR) applications." },
      { name: "MB3 Bio Media (White)", desc: "Alternative HDPE bio media configuration for biological filtration in RAS applications." },
    ],
    development: null,
    link: null,
    linkLabel: null,
  },
  {
    id: "advanced-fish-tank-design",
    number: "05",
    title: "Advanced Fish Tank Design",
    subtitle: "Mixed-Cell Raceway Systems",
    tag: "Rearing Unit Design",
    summary: "A mixed-cell raceway (MCR) is designed to combine the best characteristics of both circular tanks and linear raceways in a single vessel.",
    body: [
      "The mixed-cell raceway provides uniform water quality, rapid solids removal, and simplicity of husbandry and maintenance \u2014 combining the hydraulic advantages of circular tank culture with the space efficiency and operational simplicity of linear raceways.",
      "Rearing unit design has a direct impact on gas management requirements, solids removal efficiency, and fish performance. VATN\u2019s expertise in rearing unit hydraulics was developed through decades of research at the USFWS Wellsboro Research and Development Laboratory.",
      "VATN can assist with rearing unit selection, hydraulic design review, and integration of gas management systems optimized for the specific tank or raceway configuration in use.",
    ],
    technologies: [
      { name: "Mixed-Cell Raceway (MCR)", desc: "Combines uniform water quality and rapid solids removal of circular tanks with the space efficiency and operational simplicity of linear raceways. Suitable for federal and state hatchery programs." },
    ],
    development: null,
    link: null,
    linkLabel: null,
  },
  {
    id: "alkalinity-enhancement",
    number: "06",
    title: "Alkalinity Enhancement",
    subtitle: "Limestone-Based Fluidized Bed Systems",
    tag: "Water Chemistry",
    summary: "A limestone-based fluidized bed system raises the alkalinity and pH of acid-impacted source water for fish culture operations.",
    body: [
      "In some applications it is beneficial to add carbon dioxide to overcome the dissolution rate of limestone, accelerating alkalinity addition to the water supply.",
      "This system was tested and proven at two hatcheries in the United States. Acid-impacted source water can be treated to achieve alkalinity and pH levels suitable for fish culture without the use of caustic chemicals.",
      "Alkalinity is also important in RAS for maintaining stable pH and supporting biological filtration performance. VATN can assist with alkalinity enhancement system design and integration into new or existing hatchery water supply systems.",
    ],
    technologies: [
      { name: "Limestone-Based Fluidized Bed", desc: "Raises alkalinity and pH of acid-impacted source water. CO\u2082 addition option available to overcome limestone dissolution rate limitations. Tested and proven at two U.S. hatcheries." },
    ],
    development: null,
    link: null,
    linkLabel: null,
  },
  {
    id: "invasive-species-control",
    number: "07",
    title: "Invasive Species Control",
    subtitle: "Aquatic Invasive Species Removal via Water Management",
    tag: "Biosecurity",
    summary: "New Zealand mud snails (Potamopyrgus antipodarum, NZMS) were successfully removed from infested waters employing hydrocyclones.",
    body: [
      "All three size classes of New Zealand mud snails were removed using this approach \u2014 including neonates, the smallest life form. NZMS are currently found in the Northwest USA and states bordering the Great Lakes, where they represent a significant biosecurity concern for hatchery operations.",
      "New Zealand mud snails can reach extremely high densities in hatchery water supplies and rearing units, competing with fish for food resources and potentially causing operational problems. Physical removal via hydrocyclone offers a chemical-free approach to managing NZMS in hatchery water supplies.",
      "This technology was developed through research conducted by Dr. Barnaby Watten during his career with the USFWS and USGS. VATN can provide consultation on invasive species control strategies for hatchery water supply and rearing systems.",
    ],
    technologies: [
      { name: "Hydrocyclone-Based Removal", desc: "Physical removal of New Zealand mud snails (NZMS) from hatchery water supplies. Effective against all size classes including neonates. Chemical-free approach suitable for hatchery water supply treatment." },
    ],
    development: null,
    link: null,
    linkLabel: null,
  },
];

export default function Products() {
  return (
    <div style={{ backgroundColor: "#F4F6F8", minHeight: "100vh" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          paddingTop: "9rem",
          paddingBottom: "5rem",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,14,26,0.93) 0%, rgba(10,22,40,0.86) 60%, rgba(10,22,40,0.72) 100%)" }} />
        <div className="blueprint-grid" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>VATN Science and Technology</p>
          <span className="teal-rule" style={{ display: "block", marginBottom: "1.25rem" }} />
          <h1 className="font-display" style={{ color: "#ffffff", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: "1rem" }}>
            Products &amp; Solutions
          </h1>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "640px", fontSize: "1rem", lineHeight: "1.65", marginBottom: "2rem" }}>
            Proper management of dissolved gas levels is critical in determining the success of aquaculture operations. VATN products address these needs with equipment developed and proven through decades of applied research.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="#gas-management" className="btn-primary">
              Gas Management <ArrowRight size={15} />
            </a>
            <a href="/our-team#contact" className="btn-outline">
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV STRIP ── */}
      <div style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(14,155,138,0.2)" }}>
        <div className="container" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem 2rem", alignItems: "center" }}>
            {products.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
              >
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#0E9B8A", flexShrink: 0 }} />
                <span className="font-body" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                  {p.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div style={{ backgroundColor: "#ffffff", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Product Overview</p>
            <span className="teal-rule" style={{ display: "block", marginBottom: "1.25rem" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1, marginBottom: "1rem" }}>
              Systems Engineered for Aquaculture Water Quality
            </h2>
            <p className="font-body" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>
              The required manipulation of dissolved gas levels and the number of monitoring sites is related in part to fish rearing unit design — including tank hydraulics, the mixed-cell rearing unit, biofilter type and performance, and solids removal operations. VATN products address the full range of water quality management needs for federal and state fish hatcheries, commercial RAS operations, and related aquaculture facilities.
            </p>
          </div>
        </div>
      </div>

      {/* ── PRODUCT SECTIONS ── */}
      {products.map((product, idx) => (
        <section
          key={product.id}
          id={product.id}
          style={{
            backgroundColor: idx % 2 === 0 ? "#F4F6F8" : "#ffffff",
            paddingTop: "4rem",
            paddingBottom: "4rem",
            scrollMarginTop: "80px",
          }}
        >
          <div className="container">
            {/* Section header */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "1rem", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #E0E8F0" }}>
              <div className="font-display" style={{ fontSize: "3rem", color: "rgba(14,155,138,0.18)", lineHeight: 1, minWidth: "3.5rem", fontWeight: 700 }}>
                {product.number}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                  <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1C2B3A", lineHeight: 1.1, fontWeight: 700 }}>
                    {product.title}
                  </h2>
                  <span className="font-body" style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0E9B8A", backgroundColor: "rgba(14,155,138,0.08)", padding: "2px 8px", borderRadius: "1px" }}>
                    {product.tag}
                  </span>
                </div>
                <p className="font-body" style={{ fontSize: "0.88rem", color: "#5A7080", marginTop: "2px" }}>{product.subtitle}</p>
                <p className="font-body" style={{ fontSize: "0.95rem", color: "#3A5068", lineHeight: "1.65", maxWidth: "680px", marginTop: "0.75rem" }}>
                  {product.summary}
                </p>
              </div>
            </div>

            {/* Body + Technologies */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {/* Body paragraphs — takes 2/3 on wide screens */}
              <div style={{ gridColumn: "span 2" }}>
                <p className="font-display" style={{ fontSize: "0.78rem", color: "#8A9BB0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Overview
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {product.body.map((para, i) => (
                    <p key={i} className="font-body" style={{ fontSize: "0.9rem", color: "#3A5068", lineHeight: "1.75" }}>
                      {para}
                    </p>
                  ))}
                </div>
                {product.development && (
                  <div style={{ marginTop: "1.5rem", padding: "1.25rem", backgroundColor: "rgba(14,155,138,0.06)", borderLeft: "3px solid #0E9B8A" }}>
                    <div className="font-display" style={{ fontSize: "0.72rem", color: "#0E9B8A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                      Active R&amp;D
                    </div>
                    <p className="font-body" style={{ fontSize: "0.87rem", color: "#3A5068", lineHeight: "1.7" }}>
                      {product.development}
                    </p>
                  </div>
                )}
                <div style={{ marginTop: "1.75rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
                  {product.link && product.linkLabel && (
                    <Link href={product.link}>
                      <span className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        {product.linkLabel} <ArrowRight size={14} />
                      </span>
                    </Link>
                  )}
                  <a href="/our-team#contact" className="font-body" style={{ fontSize: "0.85rem", color: "#0E9B8A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    Discuss this with our team
                  </a>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <p className="font-display" style={{ fontSize: "0.78rem", color: "#8A9BB0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Technologies &amp; Equipment
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {product.technologies.map((tech) => (
                    <div key={tech.name} style={{ padding: "1rem", backgroundColor: "#ffffff", borderLeft: "2px solid rgba(14,155,138,0.4)", boxShadow: "0 1px 4px rgba(10,22,40,0.05)" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.35rem" }}>
                        <CheckCircle2 size={13} style={{ color: "#0E9B8A", marginTop: "2px", flexShrink: 0 }} />
                        <div className="font-display" style={{ fontSize: "0.88rem", color: "#1C2B3A", lineHeight: 1.3, fontWeight: 700 }}>
                          {tech.name}
                        </div>
                      </div>
                      <p className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080", lineHeight: "1.55", paddingLeft: "1.25rem" }}>
                        {tech.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── DARK CTA SECTION ── */}
      <section style={{ backgroundColor: "#060E1A", paddingTop: "5rem", paddingBottom: "5rem", position: "relative" }}>
        <div className="blueprint-cross" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <p className="section-label" style={{ color: "#0E9B8A", marginBottom: "0.75rem" }}>Site-Specific Evaluation</p>
              <span className="teal-rule" style={{ display: "block", marginBottom: "1.25rem" }} />
              <h2 className="font-display" style={{ color: "#ffffff", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
                Every System Is Modeled Against Your Actual Conditions
              </h2>
              <p className="font-body" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "1.5rem" }}>
                VATN does not recommend equipment from a catalog. Every gas management system is evaluated using proprietary modeling software against your facility's specific water chemistry, flow rates, temperature, species requirements, and infrastructure constraints.
              </p>
              <a href="/our-team#contact" className="btn-primary">
                Request a Site Evaluation <ArrowRight size={15} />
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "Inlet DO & N\u2082 concentrations", desc: "Site-specific water chemistry inputs" },
                { label: "Temperature & barometric pressure", desc: "Local environmental conditions" },
                { label: "Operating pressures & gas feed rates", desc: "System-specific parameters" },
                { label: "Capital & variable cost minimization", desc: "Optimized for your budget and goals" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "1rem", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(14,155,138,0.15)" }}>
                  <div className="font-display" style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: "1.3", marginBottom: "0.25rem", fontWeight: 700 }}>{item.label}</div>
                  <div className="font-body" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" style={{ backgroundColor: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ maxWidth: "640px" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Product Inquiries</p>
            <span className="teal-rule" style={{ display: "block", marginBottom: "1.25rem" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.05, marginBottom: "0.75rem" }}>
              Discuss Your Requirements
            </h2>
            <p className="font-body" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "2rem" }}>
              Describe your facility, species, flow rates, and the water quality challenge you are working through. VATN will respond with an assessment of the most appropriate equipment and approach.
            </p>
            <div style={{ padding: "1.75rem", backgroundColor: "#F4F6F8", borderLeft: "3px solid #0E9B8A" }}>
              <form style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="font-body"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #D4DDE8", backgroundColor: "#ffffff", fontSize: "0.88rem", color: "#1C2B3A", outline: "none" }}
                  />
                  <input
                    type="text"
                    placeholder="Organization / Facility"
                    className="font-body"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #D4DDE8", backgroundColor: "#ffffff", fontSize: "0.88rem", color: "#1C2B3A", outline: "none" }}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="font-body"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #D4DDE8", backgroundColor: "#ffffff", fontSize: "0.88rem", color: "#1C2B3A", outline: "none" }}
                  />
                  <select
                    className="font-body"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #D4DDE8", backgroundColor: "#ffffff", fontSize: "0.88rem", color: "#3A5068", outline: "none" }}
                  >
                    <option value="gas-management">Gas Management / Oxygenation</option>
                    <option value="uv">UV Disinfection (Ultraqua)</option>
                    <option value="bio-media">B100 Bio Media</option>
                    <option value="filters">Drum &amp; Disc Filters</option>
                    <option value="tank-design">Fish Tank Design (MCR)</option>
                    <option value="alkalinity">Alkalinity Enhancement</option>
                    <option value="invasive">Invasive Species Control</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Describe your facility, species, flow rates, and the challenge you are working through..."
                  className="font-body"
                  style={{ padding: "0.75rem 1rem", border: "1px solid #D4DDE8", backgroundColor: "#ffffff", fontSize: "0.88rem", color: "#1C2B3A", outline: "none", resize: "none" }}
                />
                <button type="submit" className="btn-primary" style={{ width: "fit-content" }}>
                  Send Product Inquiry <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
