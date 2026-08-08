/**
 * VATN — Oxygenation & Degassing Equipment (Under Construction)
 * Style: Field-Grade Precision
 */
import { Link } from "wouter";
import { ArrowLeft, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function OxygenationDegassing() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      <section
        className="relative flex-1 flex items-center justify-center"
        style={{ backgroundColor: "#060E1A", minHeight: "70vh" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(58,140,63,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(58,140,63,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container relative z-10 text-center py-24">
          <Link href="/products/gas-management">
            <span className="inline-flex items-center gap-1 font-body text-white/40 hover:text-white/70 transition-colors mb-8" style={{ fontSize: "0.78rem" }}>
              <ArrowLeft size={13} /> Back to Gas Management
            </span>
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full" style={{ backgroundColor: "rgba(58,140,63,0.1)", border: "1px solid rgba(58,140,63,0.25)" }}>
              <Wrench size={36} style={{ color: "#3A8C3F" }} />
            </div>
          </div>
          <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Oxygenation &amp; Degassing Equipment</p>
          <span className="teal-rule mb-6" style={{ margin: "0 auto 1.5rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.05 }}>
            New Products<br />
            <span style={{ color: "#3A8C3F" }}>Under Construction</span>
          </h1>
          <p className="font-body text-white/60 max-w-lg mx-auto mb-10" style={{ fontSize: "0.97rem", lineHeight: "1.7" }}>
            VATN is currently developing a new line of oxygenation and degassing products. This page will be updated as these products become available. In the meantime, please contact us to discuss your specific water quality challenge.
          </p>
          <a href="/contact" className="btn-primary">
            Contact VATN About Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
