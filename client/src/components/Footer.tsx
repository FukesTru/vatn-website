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


      {/* Main Footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src={LOGO_URL} alt="VATN Science and Technology" style={{ height: "70px", width: "auto", objectFit: "contain", maxWidth: "240px" }} />
            </div>
            <p className="font-body text-white/50" style={{ fontSize: "0.88rem", lineHeight: "1.65" }}>
              Engineered gas management and water treatment solutions for aquaculture and wastewater applications.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <p className="font-body text-white/50" style={{ fontSize: "0.88rem", lineHeight: "1.65" }}>
                VATN Science and Technology, LLC<br />
                124 Rockwall Trail<br />
                Winchester, VA 22602 USA
              </p>
              <a href="mailto:info@vatnusa.com" className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors" style={{ fontSize: "0.88rem" }}>
                <Mail size={13} style={{ color: "#3A8C3F" }} />
                info@vatnusa.com
              </a>
              <Link href="/terms-and-conditions">
                <span className="font-body text-white/50 hover:text-white/80 transition-colors" style={{ fontSize: "0.82rem", marginLeft: "23px", textDecoration: "underline", textUnderlineOffset: "3px", cursor: "pointer" }}>
                  Terms &amp; Conditions of Sale
                </span>
              </Link>
            </div>
          </div>

          {/* Products & Solutions */}
          <div>
            <p className="section-label mb-4" style={{ color: "#3A8C3F" }}>Products &amp; Solutions</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Product Overview", href: "/products" },
                { label: "Gas Management", href: "/products/gas-management" },
                { label: "UV Disinfection", href: "/products/uv-disinfection" },
                { label: "Bio Media", href: "/products/bio-media" },
                { label: "Fish Rearing Tank Design", href: "/products/fish-rearing-tank-design" },
                { label: "Alkalinity Enhancement", href: "/products/alkalinity-enhancement" },
                { label: "Solids Management", href: "/products/solids-management" },
                { label: "Other / Custom Solutions", href: "/products/custom-solutions" },
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
            Winchester, VA 22602 USA &nbsp;|&nbsp; vatnusa.com
          </p>
        </div>
      </div>
    </footer>
  );
}
