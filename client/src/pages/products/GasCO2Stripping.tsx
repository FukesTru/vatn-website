import GasPageShell from "./GasPageShell";
import PublicationReferences from "@/components/PublicationReferences";

export default function GasCO2Stripping() {
  return (
    <GasPageShell
      eyebrow="Gas Management Product"
      title="CO₂ Stripping"
      intro="Forced-air CO₂ stripping and degassing systems selected for actual site loading, flow, temperature, and available head."
      ctaTitle="Discuss Your CO₂ Stripping Challenge"
    >
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3">CO₂ Stripping</p>
              <span className="teal-rule mb-5" />
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1C2B3A", lineHeight: 1.1 }}>Forced-Air CO₂ Stripping &amp; Degassing</h2>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>Elevated dissolved CO₂ is one of the most common and damaging water quality problems in recirculating aquaculture and flow-through hatchery systems. High CO₂ suppresses fish appetite, reduces growth rates, impairs gill function, and at sufficient concentrations causes mortality. Managing CO₂ is not optional in high-density production systems.</p>
              <p className="font-body mb-4" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>VATN evaluates forced-air packed bed strippers, spray nozzle reactors, and cascade-type degassers against your site-specific CO₂ loading, flow rate, temperature, and available head. The NP CO₂-Degasser is a cascade-type forced-air stripping unit with a self-cleaning packing design that reduces maintenance requirements compared to conventional packed columns. A centrifugal blower forces ambient air countercurrent to the falling water film, stripping dissolved CO₂ from the water column efficiently.</p>
              <p className="font-body mb-6" style={{ color: "#3A5068", fontSize: "0.95rem", lineHeight: "1.75" }}>Hydroxide base scrubbing is also evaluated where CO₂ stripping targets cannot be met by air stripping alone, or where concurrent dissolved nitrogen reduction is a secondary objective. VATN's published research on CO₂ stripping spans packed columns, spray towers, and serial reuse systems, providing a validated modeling foundation for equipment selection and sizing.</p>
              <div className="flex flex-col gap-2">
                {["Forced-air packed bed strippers", "Cascade-type degassers with self-cleaning packing", "Spray nozzle reactors", "Hydroxide base scrubbing for high CO₂ loads", "Concurrent dissolved nitrogen reduction", "Computer-modeled sizing for your site conditions"].map((item) => <div key={item} className="flex items-start gap-3"><div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(58,140,63,0.12)" }}><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#3A8C3F" }} /></div><span className="font-body" style={{ fontSize: "0.88rem", color: "#3A5068", lineHeight: "1.6" }}>{item}</span></div>)}
              </div>
            </div>
            <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 2px 16px rgba(10,22,40,0.09)", border: "1px solid rgba(58,140,63,0.12)" }}>
              <img src="/manus-storage/np-oil-degasser-co2-stripper_026065a3.png" alt="NP CO2 Degasser — forced-air cascade-type CO2 stripping unit" style={{ width: "100%", display: "block", objectFit: "contain", backgroundColor: "#ffffff", padding: "24px" }} />
              <div style={{ padding: "16px 20px", backgroundColor: "#F8FAFB", borderTop: "2px solid #3A8C3F" }}>
                <p className="font-display font-bold" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>NP CO₂-Degasser</p>
                <p className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080", marginTop: "4px", lineHeight: "1.5" }}>Cascade-type forced-air CO₂ stripping unit with self-cleaning packing. A centrifugal blower forces air countercurrent to the falling water film, stripping dissolved CO₂ efficiently with minimal maintenance requirements.</p>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            <PublicationReferences category="CO2 Stripping" entries={[
              { heading: "CO₂ Stripping", numbers: [33, 34, 35, 28, 29, 30] },
              { heading: "Packed Column Design", numbers: [10, 13, 14] },
            ]} />
          </div>
        </div>
      </section>
    </GasPageShell>
  );
}
