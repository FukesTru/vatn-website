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
            <p className="font-display font-bold mb-6" style={{ fontSize: "1.05rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3A8C3F" }}>Patent Pending</p>
            <div className="space-y-5 font-body" style={{ color: "#3A5068", fontSize: "0.98rem", lineHeight: "1.8" }}>
              <p>VATN in-house research is currently focused on the development of a new class of reactors for (1) CO₂ stripping and (2) side-stream oxygenation or side-stream vacuum degassing. Regarding CO₂ stripping, the reactors that have evolved eliminate plastic packing use, operate efficiently with just 1/3 the footprint and about 40% of the height required by conventional equipment. Further, air flow for stripping is induced without blower assist over the G/L range of about 4.5 to 6.0. Higher G/L ratios can be accommodated with very low blower back pressure requirements.</p>
              <p>Regarding item (2), side-stream treatment, a new very low-profile reactor has been developed that reduces reactor volume requirements by about 50% while maintaining packing-free pressure or vacuum operation. Volume reductions are made possible by using a new method for controlling bubble carryover. This low-profile reactor is suited for O₂, O₃ and CO₂ absorption as well as N₂ stripping. Over treatment of the side-stream flow with blending reduces dramatically reactor flow rate requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </GasPageShell>
  );
}
