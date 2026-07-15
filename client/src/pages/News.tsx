/**
 * VATN News Page
 * Style: Field-Grade Precision — deep navy, teal accent, Barlow Condensed
 */
import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function News() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F9FB" }}>
      <Navigation />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #060E1A 0%, #0A1628 60%, #0D2040 100%)",
          paddingTop: "120px",
          paddingBottom: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14,155,138,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,155,138,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container relative z-10 text-center">
          <RevealSection>
            <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Latest Updates</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.05 }}
            >
              News &amp; Events
            </h1>
            <p className="font-body text-white/60 max-w-2xl mx-auto" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
              Conference appearances, product announcements, and technical updates from VATN Science and Technology.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* News content */}
      <div className="container py-16">
        <div className="max-w-3xl">

          {/* RASTECH 2026 article */}
          <RevealSection>
            <article
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                border: "1px solid rgba(14,155,138,0.12)",
                marginBottom: "32px",
              }}
            >
              {/* Article header bar */}
              <div
                style={{
                  backgroundColor: "#0A1628",
                  padding: "12px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  className="font-display font-bold"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0E9B8A",
                    backgroundColor: "rgba(14,155,138,0.12)",
                    padding: "3px 10px",
                    borderRadius: "2px",
                    border: "1px solid rgba(14,155,138,0.25)",
                  }}
                >
                  Conference
                </span>
                <div className="flex items-center gap-2 text-white/40" style={{ fontSize: "0.78rem" }}>
                  <Calendar size={13} />
                  <span className="font-body">May 19 – 21, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-white/40" style={{ fontSize: "0.78rem" }}>
                  <MapPin size={13} />
                  <span className="font-body">St. Augustine, FL, USA</span>
                </div>
              </div>

              {/* Article body */}
              <div style={{ padding: "32px 28px" }}>
                <h2
                  className="font-display font-bold mb-4"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                    color: "#060E1A",
                    lineHeight: 1.15,
                  }}
                >
                  VATN at RASTECH 2026
                </h2>

                <div
                  style={{
                    width: "48px",
                    height: "3px",
                    backgroundColor: "#0E9B8A",
                    marginBottom: "20px",
                    borderRadius: "2px",
                  }}
                />

                <p
                  className="font-body"
                  style={{ fontSize: "0.975rem", lineHeight: "1.8", color: "#2A3F52" }}
                >
                  Terry McCarthy, VATN's Sales Manager, attended RASTECH 2026 in St. Augustine, FL, USA and caught up with many industry leaders and good friends. Many people found VATN's new gas management products dynamic and robust. More information on VATN's new products to follow.
                </p>
              </div>
            </article>
          </RevealSection>

          {/* 2025 Field Trials article */}
          <RevealSection delay={80}>
            <article
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                border: "1px solid rgba(14,155,138,0.12)",
                marginBottom: "32px",
              }}
            >
              {/* Article header bar */}
              <div
                style={{
                  backgroundColor: "#0A1628",
                  padding: "12px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  className="font-display font-bold"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0E9B8A",
                    backgroundColor: "rgba(14,155,138,0.12)",
                    padding: "3px 10px",
                    borderRadius: "2px",
                    border: "1px solid rgba(14,155,138,0.25)",
                  }}
                >
                  Research Update
                </span>
                <div className="flex items-center gap-2 text-white/40" style={{ fontSize: "0.78rem" }}>
                  <Calendar size={13} />
                  <span className="font-body">2025</span>
                </div>
                <div className="flex items-center gap-2 text-white/40" style={{ fontSize: "0.78rem" }}>
                  <MapPin size={13} />
                  <span className="font-body">Freshwater Institute, Shepherdstown, WV</span>
                </div>
              </div>

              {/* Article body */}
              <div style={{ padding: "32px 28px" }}>
                <h2
                  className="font-display font-bold mb-4"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                    color: "#060E1A",
                    lineHeight: 1.15,
                  }}
                >
                  Field Trials of New Methods for CO&#x2082; Degassing and Oxygen Absorption Completed in 2025
                </h2>

                <div
                  style={{
                    width: "48px",
                    height: "3px",
                    backgroundColor: "#0E9B8A",
                    marginBottom: "20px",
                    borderRadius: "2px",
                  }}
                />

                <p className="font-body mb-5" style={{ fontSize: "0.975rem", lineHeight: "1.8", color: "#2A3F52" }}>
                  Field trials of new methods for CO&#x2082; degassing and oxygen absorption were completed in 2025 in cooperation with Dr. Brian Vinci and Scott Tsukuda of the Freshwater Institute, Shepherdstown WV.
                </p>

                <p className="font-body mb-5" style={{ fontSize: "0.975rem", lineHeight: "1.8", color: "#2A3F52" }}>
                  Exploiting past research experience in gas transfer VATN has develop[ed and tested two new and unique approaches to CO&#x2082; stripping and oxygen absorption that offers a number of advantages over current technologies.  These include (1) the elimination of expensive plastic packing that is known to restrict airflow and is subject to biological fouling, the later in some cases requiring complex cleaning cycles and (2), the ability to operate without blower assisted air feeds, i.e., the new CO&#x2082; degasser induces airflow passively providing gas to liquid ratio's odin the 5-7 range which is adequate for good stripping efficiencies.  Our 2025 laboratory trials, conducted in cooperation with Dr. Brian Vinci and Scott Tsukuda of the Freshwater Institute, have shown CO&#x2082; stripping efficiencies range from 45 to 55% at 13C in water with very high alkalinity.  This blower free operating feature reduces capital, maintenance and energy requirements.  Further the reactor volume and height has been reduced by about 90% and 60%, respectively when compared to a conventional packed column operating at similar stripping efficiencies.  The  prototype  evaluated had, for example, a height of just 0.57m.  Given the new stripper design eliminates packing, the reactor reduced wetted surface areas by about 95% and maintained a high hydraulic loading rate representing just 47% of the packed column alternative.  Water delivery pressure requirements at the inlet to the prototype were low and in the 3-5 psig range.  A larger scale reactor has been assembled and is now entering  an evaluation stage with Industry cooperators.
                </p>

                <p className="font-body mb-5" style={{ fontSize: "0.975rem", lineHeight: "1.8", color: "#2A3F52" }}>
                  VATN's new oxygen/ozone  absorber evaluated, an alternative to the downflow bubble contactor, is a very low profile horizontal design that allows exploitation of hydrostatic pressure available when coupled to tanks and sumps to passively accelerate gas absorption.  Again, no plastic packing or perforated plates to foul, very short retention time, no potential for gas void stalling and no moving parts. Mass transfer coefficients established in our 2025 trials, coupled with VATN proprietary modeling software, demonstrated effluent DO's increase from 20 -30 mg.L when operating at near atmospheric pressure to 30-45 mg/l at 1/2 bar and 45-60 mg/l at 1 bar (14C).  This reactor type can be operated at high vacuum levels in a nitrogen (N&#x2082;) degassing configuration.
                </p>

                <p className="font-body" style={{ fontSize: "0.975rem", lineHeight: "1.8", color: "#2A3F52" }}>
                  Both reactor types evaluated employ a common method for creating gas-liquid interfacial areas needed to accelerate gas transfer.  Reactor geometry involved here was altered via CAD and use of 3D printing efforts that in the end resulted in a 40% reduction in energy (pressure drop) requirements for a target water flow rate as per laboratory trial data.  Scale up of the new geometry that evolved is currently underway.
                </p>
              </div>
            </article>
          </RevealSection>

          {/* Stay updated CTA */}
          <RevealSection delay={120}>
            <div
              style={{
                backgroundColor: "#0A1628",
                borderRadius: "6px",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(14,155,138,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(14,155,138,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10">
                <p
                  className="font-display font-bold mb-2"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0E9B8A" }}
                >
                  Stay Informed
                </p>
                <h3
                  className="font-display font-bold text-white mb-3"
                  style={{ fontSize: "1.4rem", lineHeight: 1.2 }}
                >
                  Upcoming Conferences & Announcements
                </h3>
                <p className="font-body text-white/50 mb-6" style={{ fontSize: "0.875rem", lineHeight: "1.65" }}>
                  VATN regularly participates in aquaculture engineering conferences and industry events. Reach out directly to learn about upcoming appearances or to arrange a technical consultation.
                </p>
                <a
                  href="tel:2252294711"
                  className="font-display font-bold inline-flex items-center gap-2 transition-all duration-200"
                  style={{
                    backgroundColor: "#0E9B8A",
                    color: "#FFFFFF",
                    padding: "12px 24px",
                    borderRadius: "3px",
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Call Terry: (225) 229-4711
                </a>
              </div>
            </div>
          </RevealSection>

        </div>
      </div>
      <Footer />
    </div>
  );
}
