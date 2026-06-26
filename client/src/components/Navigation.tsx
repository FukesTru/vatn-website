/**
 * VATN Navigation Component
 * Style: Field-Grade Precision — deep navy, teal accent, Barlow Condensed
 * Nav order: Home | Products & Solutions (dropdown) | Our Team | Publications | News | CTA
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";

const LOGO_URL = "/manus-storage/vatn-logo-white-text_fbb8237d.png";

const productDropdown = [
  {
    label: "Product Overview",
    href: "/products",
    desc: "Full overview of VATN's aquaculture and hatchery solutions",
  },
  {
    label: "Gas Management",
    href: "/products/gas-management",
    desc: "Oxygenation, degassing, CO₂ control, and total gas pressure",
  },
  {
    label: "UV Disinfection",
    href: "/products/uv-disinfection",
    desc: "Ultraqua UV systems for pathogen control in hatchery water",
  },
  {
    label: "Bio Media",
    href: "/products/bio-media",
    desc: "B100 structured bio media for biological filtration in RAS",
  },
  {
    label: "Fish Rearing Tank Design",
    href: "/products/fish-rearing-tank-design",
    desc: "Mixed-cell raceways and rearing unit hydraulics",
  },
  {
    label: "Alkalinity Enhancement",
    href: "/products/alkalinity-enhancement",
    desc: "Limestone-based pH and alkalinity control for acid-impacted water",
  },
  {
    label: "Solids Management",
    href: "/products/solids-management",
    desc: "NP Drum & Disc microscreen filters for solids removal",
  },
  {
    label: "Other / Custom Solutions",
    href: "/products/custom-solutions",
    desc: "Site-specific water quality, hydraulic, and treatment challenges",
  },
];

const rightNavLinks = [
  { label: "Our Team", href: "/our-team" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileProductsOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isProductsActive = location.startsWith("/products");

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10, 22, 40, 0.97)" : "rgba(10, 22, 40, 0.15)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
          borderBottom: scrolled ? "1px solid rgba(14, 155, 138, 0.2)" : "1px solid transparent",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center group">
                <img
                  src={LOGO_URL}
                  alt="VATN Science and Technology"
                  style={{ height: "44px", width: "auto", objectFit: "contain" }}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5">
              {/* Home */}
              <Link href="/">
                <span
                  className="font-display font-semibold transition-colors duration-200"
                  style={{
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: location === "/" ? "#0E9B8A" : "rgba(255,255,255,0.85)",
                  }}
                >
                  Home
                </span>
              </Link>

              {/* Products & Solutions Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-1 font-display font-semibold transition-colors duration-200"
                  style={{
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: isProductsActive ? "#0E9B8A" : "rgba(255,255,255,0.85)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Products &amp; Solutions
                  <ChevronDown
                    size={13}
                    style={{
                      transition: "transform 0.2s ease",
                      transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* Mega Menu */}
                {dropdownOpen && (
                  <div
                    className="absolute top-full left-1/2"
                    style={{
                      transform: "translateX(-50%)",
                      marginTop: "12px",
                      width: "640px",
                      backgroundColor: "#0A1628",
                      border: "1px solid rgba(14,155,138,0.25)",
                      borderRadius: "4px",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      zIndex: 100,
                    }}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {/* Mega menu header */}
                    <div
                      className="flex items-center justify-between px-5 py-3"
                      style={{ borderBottom: "1px solid rgba(14,155,138,0.15)" }}
                    >
                      <span
                        className="font-display font-bold"
                        style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E9B8A" }}
                      >
                        Products &amp; Solutions
                      </span>
                      <Link href="/products">
                        <span
                          className="flex items-center gap-1 font-body text-white/50 hover:text-white/80 transition-colors"
                          style={{ fontSize: "0.8rem" }}
                        >
                          View All <ArrowRight size={11} />
                        </span>
                      </Link>
                    </div>

                    {/* Grid of items */}
                    <div className="grid grid-cols-2 gap-0 p-3">
                      {productDropdown.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <div
                            className="flex flex-col gap-0.5 px-3 py-3 rounded transition-colors duration-150 group"
                            style={{ cursor: "pointer" }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(14,155,138,0.08)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                            }}
                          >
                            <span
                              className="font-display font-semibold"
                              style={{
                                fontSize: "0.82rem",
                                color: location === item.href ? "#0E9B8A" : "rgba(255,255,255,0.9)",
                                letterSpacing: "0.02em",
                              }}
                            >
                              {item.label}
                            </span>
                            <span
                              className="font-body"
                              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", lineHeight: "1.4" }}
                            >
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right nav links */}
              {rightNavLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="font-display font-semibold transition-colors duration-200"
                    style={{
                      fontSize: "0.82rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: location === link.href ? "#0E9B8A" : "rgba(255,255,255,0.85)",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:2252294711"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                style={{ fontSize: "0.8rem", fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={13} />
                (225) 229-4711
              </a>
              <a href="/our-team#contact" className="btn-primary" style={{ padding: "0.55rem 1.25rem", fontSize: "0.78rem" }}>
                Contact
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16 overflow-y-auto"
          style={{ backgroundColor: "rgba(10, 22, 40, 0.98)", backdropFilter: "blur(16px)" }}
        >
          <div className="container py-8 flex flex-col gap-1">
            {/* Home */}
            <Link href="/">
              <span
                className="font-display font-bold block py-3 border-b border-white/10"
                style={{ fontSize: "1.4rem", letterSpacing: "0.04em", color: location === "/" ? "#0E9B8A" : "rgba(255,255,255,0.9)" }}
              >
                Home
              </span>
            </Link>

            {/* Products & Solutions accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 border-b border-white/10"
                style={{ background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <span
                  className="font-display font-bold"
                  style={{ fontSize: "1.4rem", letterSpacing: "0.04em", color: isProductsActive ? "#0E9B8A" : "rgba(255,255,255,0.9)" }}
                >
                  Products &amp; Solutions
                </span>
                <ChevronDown
                  size={18}
                  style={{ color: "rgba(255,255,255,0.5)", transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 flex flex-col gap-0 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {productDropdown.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        className="font-display block py-2.5"
                        style={{ fontSize: "1rem", color: location === item.href ? "#0E9B8A" : "rgba(255,255,255,0.7)", letterSpacing: "0.03em" }}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Right nav links */}
            {rightNavLinks.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="font-display font-bold block py-3 border-b border-white/10"
                  style={{
                    fontSize: "1.4rem",
                    letterSpacing: "0.04em",
                    color: location === link.href ? "#0E9B8A" : "rgba(255,255,255,0.9)",
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <div className="pt-5 flex flex-col gap-3">
              <a href="tel:2252294711" className="flex items-center gap-2 text-white/60" style={{ fontSize: "0.9rem" }}>
                <Phone size={14} />
                (225) 229-4711
              </a>
              <a href="/our-team#contact" className="btn-primary w-fit">
                Contact VATN
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
