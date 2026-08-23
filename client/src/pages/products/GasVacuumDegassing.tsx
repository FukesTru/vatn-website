import GasPageShell from "./GasPageShell";

const photoCard = (src: string, alt: string, title: string, description: string) => (
  <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 2px 16px rgba(10,22,40,0.09)", border: "1px solid rgba(58,140,63,0.12)" }}>
    <img src={src} alt={alt} style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/3" }} />
    <div style={{ padding: "16px 20px", backgroundColor: "#F8FAFB", borderTop: "2px solid #3A8C3F" }}>
      <p className="font-display font-bold" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>{title}</p>
      <p className="font-body" style={{ fontSize: "0.8rem", color: "#5A7080", marginTop: "4px", lineHeight: "1.5" }}>{description}</p>
    </div>
  </div>
);

export default function GasVacuumDegassing() {
  return (
    <GasPageShell
      eyebrow="Signature Product"
      title="Vacuum Degassing"
      intro="Computer-modeled vacuum degassing systems for dissolved nitrogen reduction and precise dissolved-gas control."
    >
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="section-label mb-3">Vacuum Degassing Tower</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <p className="font-body" style={{ color: "#000000", fontSize: "0.95rem", lineHeight: "1.75" }}>In the early 90&apos;s Watten developed a vacuum degasser design for removal of gas supersaturation common in well water and spring water hatchery supplies. Design conditions including packing depth and gas (oxygen) feed rate are based on reactor theory with vacuum levels identified that result in product water TGP levels that circumvent gas bubble disease. Oxygen feed rates allow for DO levels above saturation while concurrently reducing dissolved nitrogen (N₂) well below saturation. VATN&apos;s design employs a unique method for control of column vacuum level regardless of changes in water fed rates. This method is based on a sidewall application of water jet exhausters that use a very small side stream flow of raw water, under pressure, to remove nitrogen rich column off-gas from the operating degasser. Our design has provided years of trouble free service at numerous state, federal and commercial fisheries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photoCard("/images/narl-vacuum-degassing-tower.webp", "Vacuum degassing tower at NARL", "Vacuum Degassing Tower", "Vacuum degasser at NARL following modifications for enhanced radon removal.")}
            {photoCard("/images/craig-brook-900gpm-degasser-tanks.webp", "900 GPM vacuum degasser tanks at Craig Brook National Fish Hatchery", "3, 900 gpm vacuum degassers installed at Craig Brook National Fish Hatchery", "Three 900 gpm vacuum degasser tanks installed at Craig Brook National Fish Hatchery, Maine.")}
            {photoCard("/images/dworshak-portable-sidestream-degasser.webp", "Portable sidestream vacuum degasser at Dworshak National Fish Hatchery", "Portable Vacuum Degasser", "Portable sidestream vacuum degasser at Dworshak National Fish Hatchery. Designed for flexible deployment across hatchery sites where fixed installations are not practical.")}
            {photoCard("/images/leetown-usgs-gas-management-tower.webp", "Leetown USGS Gas Management Tower with CO2 Strippers and Vacuum Degassers", "Leetown Gas Management Towers. Co2 Strippers & Vacuum Degassers", "Leetown Gas Management Towers featuring CO2 strippers and vacuum degassers.")}
          </div>
        </div>
      </section>
    </GasPageShell>
  );
}
