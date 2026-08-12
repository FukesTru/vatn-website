import GasPageShell from "./GasPageShell";

export default function GasLowHeadOxygen() {
  return (
    <GasPageShell
      eyebrow="Patented Technology"
      title="Low Head Oxygen (LHO)"
      intro="A low-head oxygenation system developed for hatchery and RAS applications where conventional equipment is not practical."
    >
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A1628" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div style={{ backgroundColor: "#fff", borderRadius: "2px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
              <img src="/manus-storage/lho-diagram-conservation-fund_2b149543.jpg" alt="Low Head Oxygenator (LHO) diagram — Courtesy of The Conservation Fund Freshwater Institute" style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} />
            </div>
            <div>
              <p className="font-body text-white/65 mb-5" style={{ fontSize: "0.92rem", lineHeight: "1.75" }}>The Low Head Oxygenator was developed and patented by Dr. Barnaby Watten in 1989. It operates on hydraulic gradients as low as 9 inches — making it applicable at sites where conventional oxygenation equipment cannot be used due to limited available head.</p>
              <p className="font-body text-white/65 mb-5" style={{ fontSize: "0.92rem", lineHeight: "1.75" }}>The LHO has no moving parts, requires minimal maintenance, and has been widely applied at federal, state, and private hatcheries across the United States. Multi-stage configurations allow oxygen transfer to be scaled to match production requirements.</p>
              <div className="flex flex-wrap gap-2">
                {["No moving parts", "9\" minimum head", "Multi-stage", "Patented 1989", "RAS & raceway"].map((tag) => <span key={tag} className="font-body" style={{ fontSize: "0.78rem", color: "#3A8C3F", backgroundColor: "rgba(58,140,63,0.08)", border: "1px solid rgba(58,140,63,0.2)", borderRadius: "2px", padding: "2px 8px" }}>{tag}</span>)}
              </div>
              <p className="font-body text-white/40 mt-4" style={{ fontSize: "0.75rem" }}>Courtesy of The Conservation Fund Freshwater Institute</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <img src="/manus-storage/lho-small-1_36716b91.png" alt="Low Head Oxygenator unit" style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "1/1", borderRadius: "2px", border: "1px solid rgba(58,140,63,0.2)" }} />
                <img src="/manus-storage/lho-small-2_df864e95.png" alt="Low Head Oxygenator installed at hatchery" style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "1/1", borderRadius: "2px", border: "1px solid rgba(58,140,63,0.2)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </GasPageShell>
  );
}
