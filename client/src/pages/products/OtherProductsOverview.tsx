import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

export default function OtherProductsOverview() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />
      <section className="relative" style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", paddingTop: "9rem", paddingBottom: "5rem" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,14,26,0.96) 0%, rgba(10,22,40,0.90) 55%, rgba(10,22,40,0.60) 100%)" }} />
        <div className="container relative z-10 text-center"><p className="section-label mb-3">Aquaculture &amp; Hatchery Water Treatment</p><span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} /><h1 className="font-display text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}>Other Products &amp; Solutions</h1></div>
      </section>
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container"><div className="max-w-4xl mx-auto"><p className="section-label mb-3">Product Overview</p><span className="teal-rule mb-5" /><h2 className="font-display mb-6" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", color: "#1C2B3A", lineHeight: 1.1 }}>Product Overview for Other Products</h2><div className="space-y-5 font-body" style={{ color: "#3A5068", fontSize: "1rem", lineHeight: "1.8" }}><p>When you partner with VATN, you are bringing decades of trusted aquaculture experience straight to your hatchery. We know that managing water quality is a massive responsibility, which is why we provide reliable, deep technical knowledge across the systems you count on every day—from drum and disc filters to Ultraaqua UV disinfection, bio-media, and gas management solutions.</p><p>What does this history mean for your facility? It means you have a friendly, knowledgeable team in your corner. We bring irreplaceable, hands-on experience to help you navigate your most unique water treatment challenges and keep your systems running smoothly.</p></div></div></div>
      </section>
      <Footer />
    </div>
  );
}
