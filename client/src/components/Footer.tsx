/**
 * VATN Footer Component
 * Style: Field-Grade Precision — deep navy background, structured columns
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const LOGO_URL = "/manus-storage/vatn-logo-v4_5ddd5c23.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#060E1A", borderTop: "1px solid rgba(58,140,63,0.2)" }}>
      {/* CTA Band */}
      <div style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="section-label mb-2" style={{ color: "#3A8C3F" }}>Ready to Solve a Water Treatment Challenge?</p>
              <h3 className="font-display text-white" style={{ fontSize: "1.9rem", fontWeight: 700 }}>
                Talk With a VATN Specialist
              </h3>
              <p className="font-body text-white/60 mt-2 max-w-xl" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                Whether you are evaluating oxygenation options, planning a hatchery upgrade, or working through a design challenge, VATN can help you identify the right approach for your site.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="/contact" className="btn-primary">
                Discuss Your Site Requirements
                <ArrowRight size={15} />
              </a>
              <a href="tel:2252294711" className="btn-outline">
                <Phone size={14} />
                (225) 229-4711
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src={LOGO_URL} alt="VATN Science and Technology" style={{ height: "70px", width: "auto", objectFit: "contain", maxWidth: "240px" }} />
            </div>
            <p className="font-body text-white/50" style={{ fontSize: "0.88rem", lineHeight: "1.65" }}>
              Engineered gas management and water treatment solutions for aquaculture, fish hatcheries, and wastewater applications.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a href="tel:2252294711" className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors" style={{ fontSize: "0.88rem" }}>
                <Phone size={13} style={{ color: "#3A8C3F" }} />
                Terry McCarthy: (225) 229-4711
              </a>
              <a href="tel:5403336859" className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors" style={{ fontSize: "0.88rem" }}>
                <Phone size={13} style={{ color: "#3A8C3F" }} />
                Dr. Barnaby Watten: (540) 333-6859
              </a>
              <a href="mailto:info@vatnusa.com" className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors" style={{ fontSize: "0.88rem" }}>
                <Mail size={13} style={{ color: "#3A8C3F" }} />
                info@vatnusa.com
              </a>
              <div className="flex items-start gap-2.5 text-white/50" style={{ fontSize: "0.88rem" }}>
                <MapPin size={13} style={{ color: "#3A8C3F", marginTop: "2px", flexShrink: 0 }} />
                124 Rockwall Trail<br />Winchester, VA 22602
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="section-label mb-4" style={{ color: "#3A8C3F" }}>Solutions</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Oxygenation & Degassing", href: "/gas-management" },
                { label: "CO₂ Stripping & Scrubbing", href: "/gas-management" },
                { label: "Vacuum Degassing", href: "/gas-management" },
                { label: "Low Head Oxygenators", href: "/gas-management" },
                { label: "Side-Stream Treatment", href: "/gas-management" },
                { label: "Packed Columns", href: "/gas-management" },
                { label: "Solids Management", href: "/products/solids-management" },
                { label: "Biofiltration & Bio Media", href: "/products/bio-media" },
                { label: "UV Disinfection", href: "/products/uv-disinfection" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="font-body text-white/50 hover:text-white/80 transition-colors" style={{ fontSize: "0.88rem" }}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clients */}
          <div>
            <p className="section-label mb-4" style={{ color: "#3A8C3F" }}>Who We Serve</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "Federal Fish Hatcheries",
                "State Fish Hatcheries",
                "Aquaculture Facilities",
                "RAS System Operators",
                "Raceway Systems",
                "Engineering Firms",
                "Conservation Programs",
              ].map((item) => (
                <li key={item}>
                  <span className="font-body text-white/50" style={{ fontSize: "0.88rem" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <p className="section-label mb-4" style={{ color: "#3A8C3F" }}>Pages</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Gas Management Solutions", href: "/gas-management" },
                { label: "Federal & State Hatcheries", href: "/hatchery-solutions" },
                { label: "Engineering Partners", href: "/engineering-partners" },
                { label: "Our Team", href: "/our-team" },
                { label: "Publications", href: "/publications" },
                { label: "News & Events", href: "/news" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="font-body text-white/50 hover:text-white/80 transition-colors" style={{ fontSize: "0.88rem" }}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="font-body text-white/30" style={{ fontSize: "0.82rem" }}>
            &copy; 2026 VATN Science and Technology, LLC. All rights reserved.
          </p>
          <p className="font-body text-white/30" style={{ fontSize: "0.82rem" }}>
            Winchester, VA 22602 &nbsp;|&nbsp; vatnusa.com
          </p>
        </div>
      </div>
    </footer>
  );
}
