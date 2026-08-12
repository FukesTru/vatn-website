import GasPageShell from "./GasPageShell";

export default function GasCO2Scrubbing() {
  return (
    <GasPageShell
      eyebrow="Gas Management Product"
      title="CO₂ Scrubbing"
      intro="Concurrent oxygen injection, CO₂ scrubbing, and dissolved nitrogen reduction for applications where air stripping alone is not sufficient."
      ctaTitle="Discuss CO₂ Scrubbing"
    >
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="section-label mb-3">CO₂ Scrubbing Benefits</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <p className="font-body" style={{ color: "#3A5068", fontSize: "1rem", lineHeight: "1.75" }}>Pump Once to accomplish Oxygen injection and CO₂ Scrubbing. Concurrent N₂ reduction makes Oxygen injection more affordable.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 2px 16px rgba(10,22,40,0.09)", border: "1px solid rgba(58,140,63,0.12)" }}>
              <img src="/manus-storage/co2-stripper-diagram_6e461e5a.png" alt="Oxygen Absorber Modified for Concurrent Carbon Dioxide Stripper — USGS process diagram" style={{ width: "100%", display: "block", objectFit: "contain", backgroundColor: "#ffffff", padding: "24px", minHeight: "330px" }} />
              <div style={{ padding: "16px 20px", backgroundColor: "#F8FAFB", borderTop: "2px solid #3A8C3F" }}><p className="font-display font-bold" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>Side View — Concurrent Carbon Dioxide Stripper Process</p></div>
            </div>
            <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 2px 16px rgba(10,22,40,0.09)", border: "1px solid rgba(58,140,63,0.12)" }}>
              <img src="/manus-storage/co2-scrubber-photo_a8d2683c.png" alt="CO2 scrubber unit installed at hatchery facility" style={{ width: "100%", display: "block", objectFit: "cover", minHeight: "330px", aspectRatio: "4/3" }} />
              <div style={{ padding: "16px 20px", backgroundColor: "#F8FAFB", borderTop: "2px solid #3A8C3F" }}><p className="font-display font-bold" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>CO₂ Scrubber</p></div>
            </div>
          </div>
        </div>
      </section>
    </GasPageShell>
  );
}
