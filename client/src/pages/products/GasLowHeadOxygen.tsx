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
              <p className="font-body text-white/65 mb-5" style={{ fontSize: "0.92rem", lineHeight: "1.75" }}>The Low head oxygenator (LHO) was developed, modeled and patented by Watten in 1989. Since then, this reactor type has been used successfully at hundreds of RAS and raceway sites within and outside the United States given its lack of moving parts and ability to operate on the limited head available between the water supply and water level of the culture system involved, i.e., 0.3 to 1 m. The system consists of a number of spray or packed column segments operated in parallel with regard to water flow and in series with regard to off-gas flow. This repeated contacting of oxygen rich off-gas with low dissolved oxygen inlet water provides an elevated mean dissolved oxygen deficit for oxygen that accelerates gas transfer. The resulting decrease in head requirement lowers energy costs and reduces the risk of system failure by eliminating the need for pumping.</p>
              <p className="font-body text-white/65 mb-5" style={{ fontSize: "0.92rem", lineHeight: "1.75" }}>Performance of this patented devise is related to the available head (fall), water and oxygen feed rates, influent dissolved gas levels, the number of chambers or stages employed and the presence or absence of packing within the chambers. Dr. Watten's original proprietary design software, calibration data and criteria for hydraulic loading has been applied successfully for over 30 years in a wide range of operating conditions and is available at VATN to design future LHO systems that match system configurations with target gas transfer rates.</p>
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
