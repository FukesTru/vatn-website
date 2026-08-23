/**
 * VATN Navigation Component
 * Style: Field-Grade Precision — deep navy, teal accent, Barlow Condensed
 * Nav order: Home | Products & Solutions (dropdown) | Our Team | Publications | News | Partnerships | CTA
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const LOGO_URL = "/images/vatn-logo.png";

const productGroups = [
  {
    title: "Gas Management Products",
    items: [
      { label: "Product Overview", href: "/products/gas-management" },
      { label: "New Products Coming", href: "/products/gas-management/new-products" },
      { label: "Vacuum Degassing", href: "/products/gas-management/vacuum-degassing" },
      { label: "Low Head Oxygen (LHO)", href: "/products/gas-management/low-head-oxygen" },
      { label: "CO₂ Stripping", href: "/products/gas-management/co2-stripping" },
      { label: "CO₂ Scrubbing", href: "/products/gas-management/co2-scrubbing" },
    ],
  },
  {
    title: "Other Products & Solutions",
    items: [
      { label: "Product Overview", href: "/products" },
      { label: "Solids Management", href: "/products/solids-management" },
      { label: "UV Disinfection", href: "/products/uv-disinfection" },
      { label: "Bio-Media", href: "/products/bio-media" },
      { label: "Fish Rearing Tank Design", href: "/products/fish-rearing-tank-design" },
      { label: "Alkalinity Enhancement", href: "/products/alkalinity-enhancement" },
      { label: "Other / Custom Solutions", href: "/products/custom-solutions" },
    ],
  },
];

const rightNavLinks = [
  { label: "Our Team", href: "/our-team" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Hatcheries", href: "/hatchery-solutions" },
  { label: "Partnerships", href: "/engineering-partners" },
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
          borderBottom: scrolled ? "1px solid rgba(58, 140, 63, 0.2)" : "1px solid transparent",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: "120px" }}>
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center group">
                <img
                    src={LOGO_URL}
                    alt="VATN Science and Technology"
                    width={360}
                    height={104}
                    loading="eager"
                    fetchPriority="high"
                    style={{ height: "104px", width: "auto", objectFit: "contain", maxWidth: "360px", display: "block" }}
                  />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Home */}
              <Link href="/">
                <span
                  className="font-display font-semibold transition-colors duration-200"
                  style={{
                    fontSize: "1.06rem",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: location === "/" ? "#3A8C3F" : "rgba(255,255,255,0.85)",
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
                    fontSize: "1.06rem",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: isProductsActive ? "#3A8C3F" : "rgba(255,255,255,0.85)",
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
                    size={14}
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
                      width: "720px",
                      backgroundColor: "#0A1628",
                      border: "1px solid rgba(58,140,63,0.25)",
                      borderRadius: "4px",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      zIndex: 100,
                    }}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {/* Mega menu header */}
                    <div
                      className="flex items-center justify-between px-5 py-3"
                      style={{ borderBottom: "1px solid rgba(58,140,63,0.15)" }}
                    >
                      <span
                        className="font-display font-bold"
                        style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A8C3F" }}
                      >
                        Products &amp; Solutions
                      </span>
                    </div>

                    {/* Two primary product groups */}
                    <div className="grid grid-cols-2 gap-0 p-4">
                      {productGroups.map((group, groupIndex) => (
                        <div
                          key={group.title}
                          className={groupIndex === 0 ? "pr-4" : "pl-4"}
                          style={groupIndex === 0 ? { borderRight: "1px solid rgba(58,140,63,0.16)" } : undefined}
                        >
                          <p className="font-display font-bold mb-2 px-3" style={{ fontSize: "0.9rem", letterSpacing: "0.05em", color: "#3A8C3F" }}>
                            {group.title}
                          </p>
                          <div className="flex flex-col gap-0.5">
                            {group.items.map((item) => (
                              <Link key={item.href} href={item.href}>
                                <div
                                  className="px-3 py-2.5 rounded transition-colors duration-150"
                                  style={{ cursor: "pointer" }}
                                  onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(58,140,63,0.08)";
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                                  }}
                                >
                                  <span
                                    className="font-display font-semibold"
                                    style={{ fontSize: "0.9rem", letterSpacing: "0.02em", color: location === item.href ? "#3A8C3F" : "rgba(255,255,255,0.86)" }}
                                  >
                                    {item.label}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
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
                      fontSize: "1.06rem",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: location === link.href ? "#3A8C3F" : "rgba(255,255,255,0.85)",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="/contact"
                className="btn-primary"
                style={{
                  padding: "0.78rem 1.9rem",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  boxShadow: "0 0 0 2px rgba(58,140,63,0.4), 0 4px 18px rgba(58,140,63,0.3)",
                }}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
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
                style={{ fontSize: "1.4rem", letterSpacing: "0.04em", color: location === "/" ? "#3A8C3F" : "rgba(255,255,255,0.9)" }}
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
                  style={{ fontSize: "1.4rem", letterSpacing: "0.04em", color: isProductsActive ? "#3A8C3F" : "rgba(255,255,255,0.9)" }}
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
                  {productGroups.map((group) => (
                    <div key={group.title} className="py-2">
                      <p className="font-display font-bold py-2" style={{ fontSize: "1.05rem", color: "#3A8C3F", letterSpacing: "0.03em" }}>{group.title}</p>
                      {group.items.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <span
                            className="font-display block py-2 pl-3"
                            style={{ fontSize: "0.98rem", color: location === item.href ? "#3A8C3F" : "rgba(255,255,255,0.7)", letterSpacing: "0.03em" }}
                          >
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
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
                    color: location === link.href ? "#3A8C3F" : "rgba(255,255,255,0.9)",
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <div className="pt-5 flex flex-col gap-3">
              <a href="/contact" className="btn-primary w-fit">
                Contact VATN
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
