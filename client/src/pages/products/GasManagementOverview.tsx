import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

export default function GasManagementOverview() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />
      <section className="relative" style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", paddingTop: "9rem", paddingBottom: "5rem" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,14,26,0.96) 0%, rgba(10,22,40,0.90) 55%, rgba(10,22,40,0.60) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(58,140,63,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(58,140,63,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container relative z-10 text-center">
          <p className="section-label mb-3">Aquaculture Gas Management</p>
          <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
          <h1 className="font-display text-white mb-5" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>Gas Management<br /><span style={{ color: "#3A8C3F" }}>for Hatchery &amp; RAS Systems</span></h1>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: "1.65" }}>Oxygenation, degassing, CO₂ control, and total dissolved gas pressure management — modeled and sized for your site's actual water chemistry, hydraulic constraints, and production objectives.</p>
          <a href="/contact" className="btn-primary">Discuss Your Gas Management Challenge <ArrowRight size={15} /></a>
        </div>
      </section>
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="container"><div className="max-w-4xl mx-auto text-center"><p className="section-label mb-3">Product Overview</p><span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} /><p className="font-body" style={{ fontSize: "1.05rem", color: "#3A5068", lineHeight: "1.85" }}>Proper management of dissolved gas levels, particularly dissolved oxygen (DO), nitrogen and CO₂ is critical in determining the success of both aquaculture and wastewater/environmental operations. This includes maintaining adequate DO for rapid growth of aquaculture species as well as maintenance of environmental DO levels that allow for biological wastewater treatment or transport without hydrogen sulfide generation. CO₂ is a byproduct of both fish and microbe respiration and so managing (removal) this gas is also of importance given its effect on water pH and fish health. Well and spring water sources, commonly used at federal and state fish hatcheries, often contain elevated (stressful) levels of CO₂ as well as dissolved nitrogen (N₂) that must also be managed (stripped/scrubbed) prior to aquaculture use. Dissolved gas monitoring equipment is used to control gas management equipment so that gas transfer needs match gas transfer rates. Hence dissolved gas sensors play an important role in treatment solution packages. The required manipulation of dissolved gas levels and the number of monitoring sites is related in part to fish rearing unit design (tank hydraulics) including the state-of-the-art mixed cell rearing unit, biofilter type and performance and solids removal operations. VATN products address the needs outlined above:</p></div></div>
      </section>
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#060E1A" }}><div className="container text-center"><p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Ready to Discuss Your Project?</p><span className="teal-rule mb-6" style={{ margin: "0 auto 1.5rem" }} /><h2 className="font-display text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.1 }}>Every Project Starts With a Site Evaluation</h2><p className="font-body text-white/60 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>VATN does not sell from a catalog. Contact us to describe your facility, your water quality conditions, and the challenge you are trying to solve. We will tell you honestly what is feasible and what is not.</p><a href="/contact" className="btn-primary">Contact VATN <ArrowRight size={15} /></a></div></section>
      <Footer />
    </div>
  );
}
