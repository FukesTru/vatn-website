import GasPageShell from "./GasPageShell";

export default function GasNewProducts() {
  return (
    <GasPageShell
      eyebrow="VATN In-House Research"
      title="New Products Coming"
      intro="VATN in-house research is currently focused on a new class of gas-management reactors."
      ctaTitle="Discuss Emerging Gas Management Technology"
    >
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="section-label mb-3">Innovation in Progress</p>
            <span className="teal-rule mb-5" />
            <div className="space-y-5 font-body" style={{ color: "#3A5068", fontSize: "0.98rem", lineHeight: "1.8" }}>
              <p>VATN in-house research is currently focused on the development of a new class of reactors for (1) Swirl Flow Reactor (SFR) for CO₂ stripping and (2) Low Profile Oxygenation (LPO) for side-stream oxygenation or side-stream vacuum degassing.</p>
              <p>VATN in-house research is currently focused on the development of a new class of reactors for (1) CO₂ stripping and (2) side-stream oxygenation or side-stream vacuum degassing. Regarding CO₂ stripping, the reactors that have evolved eliminate plastic packing use, operate efficiently with just 1/3 the footprint and about 40% of the height required by conventional equipment. Further, air flow for stripping is induced without blower assist over the G/L range of about 4.5 to 6.0. Higher G/L ratios can be accommodated with very low blower back pressure requirements.</p>
              <p>Regarding item (2), side-stream treatment, a new very low-profile reactor has been developed that reduces reactor volume requirements by about 50% while maintaining packing-free pressure or vacuum operation. Volume reductions are made possible by using a new method for controlling bubble carryover. This low-profile reactor is suited for O₂, O₃ and CO₂ absorption as well as N₂ stripping. Over treatment of the side-stream flow with blending reduces dramatically reactor flow rate requirements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {["Photo 1", "Photo 2"].map((label) => (
                <div key={label} className="flex flex-col items-center justify-center text-center" style={{ minHeight: "250px", background: "linear-gradient(135deg, #F3F6F8 0%, #E8EEF2 100%)", border: "1px dashed #91A3B0", borderRadius: "2px" }}>
                  <p className="font-display" style={{ color: "#1C2B3A", fontSize: "1.2rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Photos Coming Soon</p>
                  <span style={{ width: "42px", height: "2px", backgroundColor: "#3A8C3F", marginTop: "0.85rem" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </GasPageShell>
  );
}
