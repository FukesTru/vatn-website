import GasPageShell from "./GasPageShell";
import PublicationReferences from "@/components/PublicationReferences";

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
          <div className="max-w-5xl mx-auto mt-12">
            <p className="font-body" style={{ color: "#000000", fontSize: "0.94rem", lineHeight: "1.8" }}>
              In pure oxygen absorption equipment. The high solubility of carbon dioxide produces significant desorption within commercial oxygen absorption equipment. This operating characteristic of the equipment has limited its application in fish husbandry operations despite its ability to significantly increase allowable fish loading rates (kg/L/min). Carbon dioxide is typically removed by air stripping. This process requires a significant energy input for moving air, air heating in cold climates and water pumping. Dr. Watten developed a modification for a spray tower that provides for carbon dioxide desorption as well as oxygen absorption. Elimination of the air-stripping step reduces pumping costs while allowing dissolved nitrogen to drop below saturation concentrations. This latter response provides for an improvement in oxygen absorption efficiency. Carbon dioxide desorption is achieved by directing head-space gases from the spray tower (O₂, N₂, CO₂) through a sealed packed tower scrubber receiving a 2N NaOH solution. Carbon dioxide is selectively removed from the gas stream, by chemical reaction, forming the product Na₂CO₃. Scrubber off-gas, lean with regard to carbon dioxide but still rich with oxygen, is redirected through the spray tower for further stripping of carbon dioxide and absorption of oxygen. Make-up NaOH is metered into the scrubbing solution sump on an as needed basis as directed by a feedback control loop programmed to maintain a scrubbing solution pH of 11.4-11.8. The spent NaOH solution is collected, then regenerated for reuse, in a batch process that requires relatively inexpensive hydrated lime (Ca(OH)₂). A by-product of the regeneration step is an alkaline filter cake, which may have use in bio-solids stabilization. Given the enhanced gas transfer rates possible with chemical reaction, the required NaOH solution flow rate through the scrubber represents a fraction of the spray.
            </p>
            <PublicationReferences category="CO₂ Scrubbing" entries={[{ heading: "CO₂ Scrubbing", references: "No. 31" }]} />
          </div>
        </div>
      </section>
    </GasPageShell>
  );
}
