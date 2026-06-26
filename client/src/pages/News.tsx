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
