/**
 * VATN Navigation Component
 * Style: Field-Grade Precision — deep navy, teal accent, Barlow Condensed
 * Behavior: Transparent over hero, transitions to solid navy on scroll
 * Products dropdown with all 7 product categories
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const LOGO_URL = "/manus-storage/vatn-logo-white-text_fbb8237d.png";

const productLinks = [
  { label: "Gas Management", href: "/gas-management" },
  { label: "NP Drum & Disc Filters", href: "/products#np-drum-disc-filters" },
  { label: "Utraqua UV Systems", href: "/products#utraqua-uv" },
  { label: "Bio Media", href: "/products#bio-media" },
  { label: "Advanced Fish Tank Design", href: "/products#advanced-fish-tank-design" },
  { label: "Alkalinity Enhancement", href: "/products#alkalinity-enhancement" },
  { label: "Invasive Species Control", href: "/products#invasive-species-control" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Hatchery Solutions", href: "/hatchery-solutions" },
  { label: "Engineering Partners", href: "/engineering-partners" },
  { label: "Our Team", href: "/our-team" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
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
    setProductsOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isProductsActive = location === "/products" || location === "/gas-management" ||
    productLinks.some(p => location === p.href);

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
            <nav className="hidden lg:flex items-center gap-6">

              {/* Products Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1 font-display font-semibold transition-colors duration-200"
                  style={{
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: isProductsActive ? "#0E9B8A" : "rgba(255,255,255,0.85)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Products
                  <ChevronDown
                    size={13}
                    style={{
                      transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      marginTop: "1px",
                    }}
                  />
                </button>

                {/* Dropdown panel */}
                {productsOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "rgba(10, 22, 40, 0.98)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(14,155,138,0.2)",
                      borderRadius: "6px",
                      padding: "8px 0",
                      minWidth: "240px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
                      zIndex: 100,
                    }}
                  >
                    {/* All Products link */}
                    <Link href="/products">
                      <div
                        className="font-display font-semibold transition-colors duration-150"
                        style={{
                          display: "block",
                          padding: "10px 20px",
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#0E9B8A",
                          borderBottom: "1px solid rgba(14,155,138,0.15)",
                          marginBottom: "4px",
                          cursor: "pointer",
                        }}
                      >
                        All Products & Solutions
                      </div>
                    </Link>

                    {productLinks.map((p) => (
                      <Link key={p.href} href={p.href}>
                        <div
                          className="font-body transition-colors duration-150"
                          style={{
                            display: "block",
                            padding: "9px 20px",
                            fontSize: "0.85rem",
                            color: "rgba(255,255,255,0.75)",
                            cursor: "pointer",
                          }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#0E9B8A")}
                          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                        >
                          {p.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="font-display font-semibold transition-colors duration-200"
                    style={{
                      fontSize: "0.85rem",
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
                Discuss Your Site
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
          <div className="container py-8 flex flex-col gap-2">

            {/* Products accordion in mobile */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="font-display font-bold flex items-center justify-between w-full py-3 border-b border-white/10"
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "0.04em",
                  color: isProductsActive ? "#0E9B8A" : "rgba(255,255,255,0.9)",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                Products
                <ChevronDown
                  size={18}
                  style={{
                    transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    color: "#0E9B8A",
                  }}
                />
              </button>

              {mobileProductsOpen && (
                <div className="flex flex-col pl-4 py-2 gap-1">
                  <Link href="/products">
                    <span
                      className="font-display font-semibold block py-2"
                      style={{ fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E9B8A" }}
                    >
                      All Products
                    </span>
                  </Link>
                  {productLinks.map((p) => (
                    <Link key={p.href} href={p.href}>
                      <span
                        className="font-body block py-2"
                        style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)" }}
                      >
                        {p.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="font-display font-bold block py-3 border-b border-white/10"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "0.04em",
                    color: location === link.href ? "#0E9B8A" : "rgba(255,255,255,0.9)",
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:2252294711" className="flex items-center gap-2 text-white/60" style={{ fontSize: "0.9rem" }}>
                <Phone size={14} />
                (225) 229-4711
              </a>
              <a href="/our-team#contact" className="btn-primary w-fit">
                Discuss Your Site Requirements
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
