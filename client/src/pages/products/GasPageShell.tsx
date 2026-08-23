import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "/images/hero-background-raceway.webp";

type GasPageShellProps = {
  title: string;
  eyebrow: string;
  intro: string;
  children: ReactNode;
  ctaTitle?: string;
  ctaText?: string;
};

export default function GasPageShell({
  title,
  eyebrow,
  intro,
  children,
  ctaTitle = "Discuss Your Gas Management Challenge",
  ctaText = "Contact VATN to discuss your facility, current water quality conditions, and the challenge you are working to address.",
}: GasPageShellProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />
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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(58,140,63,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(58,140,63,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container relative z-10 text-center">
          <Link href="/products/gas-management">
            <span className="inline-flex items-center gap-1 font-body text-white/45 hover:text-white/75 transition-colors mb-4" style={{ fontSize: "0.78rem" }}>
              ← Gas Management Products
            </span>
          </Link>
          <p className="section-label mb-3">{eyebrow}</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.35rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>
            {title}
          </h1>
          <p className="font-body text-white/70 max-w-2xl mx-auto" style={{ fontSize: "1rem", lineHeight: "1.65" }}>{intro}</p>
        </div>
      </section>

      {children}

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}>
        <div className="container text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.1 }}>{ctaTitle}</h2>
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>{ctaText}</p>
          <a href="/contact" className="btn-primary">Contact VATN <ArrowRight size={15} /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
