/**
 * VATN News Page
 * Style: Field-Grade Precision — deep navy, teal accent, Barlow Condensed
 */
import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

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
        <div className="container relative z-10">
          <RevealSection>
            <p className="section-label mb-3" style={{ color: "#0E9B8A" }}>Latest Updates</p>
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.05 }}
            >
              News & Events
            </h1>
            <p className="font-body text-white/60 max-w-2xl" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
              Conference appearances, product announcements, and technical updates from VATN Science and Technology.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* News content */}
      <div className="container py-16">
        <div className="max-w-3xl">

          {/* Featured article — RASTECH 2026 */}
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
                  Conference Announcement
                </span>
                <div className="flex items-center gap-2 text-white/40" style={{ fontSize: "0.78rem" }}>
                  <Calendar size={13} />
                  <span className="font-body">2026</span>
                </div>
                <div className="flex items-center gap-2 text-white/40" style={{ fontSize: "0.78rem" }}>
                  <MapPin size={13} />
                  <span className="font-body">Reno, Nevada</span>
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
                  VATN Science and Technology at RASTECH 2026
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
                  className="font-body mb-5"
                  style={{ fontSize: "0.95rem", lineHeight: "1.75", color: "#2A3F52" }}
                >
                  VATN Science and Technology will be exhibiting at RASTECH 2026, the premier technical conference and trade show for the recirculating aquaculture systems industry. RASTECH brings together engineers, hatchery managers, researchers, and equipment suppliers from across the aquaculture sector.
                </p>

                <p
                  className="font-body mb-5"
                  style={{ fontSize: "0.95rem", lineHeight: "1.75", color: "#2A3F52" }}
                >
                  VATN will be showcasing its full line of gas management solutions — including Low Head Oxygenation (LHO) systems, vacuum degassing technology, CO₂ scrubbing equipment, and alkalinity enhancement systems — specifically engineered for federal and state fish hatchery programs and high-density recirculating aquaculture operations.
                </p>

                <p
                  className="font-body mb-8"
                  style={{ fontSize: "0.95rem", lineHeight: "1.75", color: "#2A3F52" }}
                >
                  Dr. Barnaby Watten and Terry McCarthy will be on-site to discuss site-specific water quality challenges, system modeling, and equipment selection. If you are attending RASTECH 2026, we welcome the opportunity to connect in person.
                </p>

                {/* Event detail block */}
                <div
                  style={{
                    backgroundColor: "#F7F9FB",
                    border: "1px solid rgba(14,155,138,0.15)",
                    borderLeft: "4px solid #0E9B8A",
                    borderRadius: "0 4px 4px 0",
                    padding: "20px 24px",
                    marginBottom: "24px",
                  }}
                >
                  <p
                    className="font-display font-bold mb-3"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0E9B8A" }}
                  >
                    Event Details
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "Event", value: "RASTECH 2026 — Recirculating Aquaculture Systems Technology Conference & Expo" },
                      { label: "Location", value: "Reno, Nevada" },
                      { label: "Exhibitor", value: "VATN Science and Technology, LLC" },
                      { label: "Representatives", value: "Dr. Barnaby J. Watten & Terry McCarthy" },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3" style={{ fontSize: "0.875rem" }}>
                        <span className="font-display font-semibold shrink-0" style={{ color: "#3A5068", minWidth: "120px" }}>
                          {item.label}
                        </span>
                        <span className="font-body" style={{ color: "#1E2D3D" }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="font-display font-bold flex items-center gap-2 transition-all duration-200"
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
                    Schedule a Meeting at RASTECH
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href="tel:2252294711"
                    className="font-display font-semibold flex items-center gap-2 transition-all duration-200"
                    style={{
                      backgroundColor: "transparent",
                      color: "#0A1628",
                      padding: "12px 24px",
                      borderRadius: "3px",
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      border: "1px solid rgba(10,22,40,0.2)",
                    }}
                  >
                    Call Terry: (225) 229-4711
                  </a>
                </div>
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
                  href="/contact"
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
                  Contact VATN
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </RevealSection>

        </div>
      </div>
    </div>
  );
}
