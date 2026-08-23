/**
 * VATN Homepage — People-First Rewrite
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed display
 * Story arc: (1) Led by experts → (2) Deep research & field experience → (3) Solve real challenges
 *            → (4) Products are tools → (5) Contact them for your project
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight, ChevronDown, CheckCircle2, BookOpen, Microscope, Wrench
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "/images/hero-background-raceway.webp";


function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; observer.disconnect(); } },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(6,14,26,0.95) 0%, rgba(10,22,40,0.82) 55%, rgba(10,22,40,0.45) 100%)" }} />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="container relative z-10 pt-24 pb-16">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <RevealSection delay={0}>
              <p className="section-label mb-4">Aquaculture Gas Management &amp; Water Treatment</p>
              <span className="teal-rule mb-6" style={{ margin: "0 auto 1.5rem" }} />
            </RevealSection>
            <RevealSection delay={80}>
              <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(3.2rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.0 }}>
                Science-Driven Experts.<br />
                <span style={{ color: "#3A8C3F" }}>Real Hatchery Solutions.</span>
              </h1>
            </RevealSection>
            <RevealSection delay={160}>
              <p className="font-body text-white/75 mb-8" style={{ fontSize: "1.15rem", lineHeight: "1.7", maxWidth: "680px", margin: "0 auto 2rem" }}>
                VATN provides expert aquaculture water treatment solutions tailored to modern hatchery operations. The team delivers hands-on, practical guidance to design, optimize, and manage water systems. VATN's team brings a depth of expertise that no equipment catalog can replicate.
              </p>
            </RevealSection>
            <RevealSection delay={220}>
              <div className="flex flex-wrap gap-3" style={{ justifyContent: "center" }}>
                <a href="#contact" className="btn-primary">
                  Discuss Your Project <ArrowRight size={16} />
                </a>
                <Link href="/our-team">
                  <span className="btn-outline">Meet the Team</span>
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
          <span className="font-body" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>



      {/* ── PEOPLE FIRST — WHO IS VATN ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <p className="section-label mb-3">The People Behind VATN</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Decades of Research. Applied in the Field.
              </h2>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                VATN was founded in 2019 by Dr. Barnaby J. Watten — a researcher whose career has been spent developing, testing, and deploying aquaculture water treatment systems in federal hatchery programs and commercial facilities across the United States. Terry McCarthy serves as Director of Sales, bringing 36 years of practical hatchery industry experience to the firm's commercial operations.
              </p>
              <p className="font-body mb-6" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.7" }}>
                Dr. Watten spent 49+ years in the aquaculture water treatment industry, authoring 80+ publications and holding 15 patents. Terry McCarthy co-founded WMT, Inc. in 1994 — a specialized aquaculture equipment firm that served state and federal hatcheries for over two decades before being acquired by Innovasea in February 2019. Together, they bring a combination of scientific depth and practical hatchery experience that is rare in this industry.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/our-team">
                  <span className="btn-navy">Meet Dr. Watten &amp; Terry <ArrowRight size={15} /></span>
                </Link>
                <Link href="/publications">
                  <span className="btn-outline" style={{ color: "#1C2B3A", borderColor: "#1C2B3A" }}>View Publications <ArrowRight size={15} /></span>
                </Link>
              </div>
            </RevealSection>
            <RevealSection delay={100}>
              <div className="flex flex-col gap-4">
                <img
                  src="/images/np-co2-degasser-cascade-1200w.webp"
                  srcSet="/images/np-co2-degasser-cascade-640w.webp 640w, /images/np-co2-degasser-cascade-1200w.webp 1200w"
                  sizes="(max-width: 768px) 80vw, 640px"
                  alt="Aquaculture hatchery systems"
                  className="mx-auto"
                  style={{ borderRadius: "2px", display: "block", objectFit: "contain", maxWidth: "80%", width: "100%" }}
                />

              </div>
            </RevealSection>
          </div>
        </div>
      </section>



      {/* ── HOW VATN WORKS ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <RevealSection>
            <div className="max-w-xl mb-12">
              <p className="section-label mb-3">How VATN Works</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
                Problems First. Equipment Second.
              </h2>
              <p className="font-body mt-4" style={{ color: "#3A5068", fontSize: "0.93rem", lineHeight: "1.7" }}>
                VATN does not start with a product catalog. They start with your site — your water source, your species, your infrastructure, your constraints. The equipment recommendation comes after the problem is understood.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Understand Your Site",
                desc: "Every project begins with a detailed assessment of your inlet water quality, dissolved gas levels, temperature, hydraulic head, species requirements, and facility layout. No assumptions.",
                icon: <Microscope size={20} />,
              },
              {
                step: "02",
                title: "Model the Solution",
                desc: "VATN uses computer modeling to evaluate which gas transfer technologies will perform at your site conditions. Sizing is based on your actual data, not industry averages.",
                icon: <BookOpen size={20} />,
              },
              {
                step: "03",
                title: "Apply the Right Tools",
                desc: "Equipment is selected, configured, and specified to solve the identified problem — whether that is oxygenation, CO₂ removal, nitrogen supersaturation, or a combination of challenges.",
                icon: <Wrench size={20} />,
              },
            ].map((item, i) => (
              <RevealSection key={item.step} delay={i * 80}>
                <div className="p-7 h-full bg-white" style={{ borderTop: "2px solid #3A8C3F", borderRadius: "2px", boxShadow: "0 1px 4px rgba(10,22,40,0.06)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-sm" style={{ backgroundColor: "rgba(58,140,63,0.1)", color: "#3A8C3F" }}>{item.icon}</div>
                    <span className="font-display font-bold" style={{ fontSize: "1.8rem", color: "rgba(58,140,63,0.25)", lineHeight: 1 }}>{item.step}</span>
                  </div>
                  <h3 className="font-display mb-2" style={{ fontSize: "1.2rem", color: "#1C2B3A", lineHeight: 1.2 }}>{item.title}</h3>
                  <p className="font-body" style={{ color: "#5A7080", fontSize: "0.85rem", lineHeight: "1.65" }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>


      {/* ── CONTACT / CTA ── */}
      <section
        id="contact"
        className="py-20 lg:py-28 relative"
        style={{
          backgroundImage: `url(/images/engineering-section-background.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,14,26,0.97) 0%, rgba(10,22,40,0.88) 60%, rgba(10,22,40,0.65) 100%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <RevealSection>
              <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Start a Conversation</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
                Bring VATN Your Water Treatment Challenge
              </h2>
              <p className="font-body text-white/65 mb-8" style={{ fontSize: "0.92rem", lineHeight: "1.65" }}>
                Describe your facility and the challenge you are facing. Dr. Watten and Terry will respond with a technical assessment of the options available for your specific site conditions.
              </p>
            </RevealSection>
            <RevealSection delay={80}>
              <div style={{ width: "100%", minHeight: "551px" }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/EixvLXvkzStptg4CDAf0"
                  style={{ width: "100%", height: "551px", border: "none", borderRadius: "0px" }}
                  id="inline-EixvLXvkzStptg4CDAf0"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form of VATN"
                  data-height="551"
                  data-layout-iframe-id="inline-EixvLXvkzStptg4CDAf0"
                  data-form-id="EixvLXvkzStptg4CDAf0"
                  title="Form of VATN"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
