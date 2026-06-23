/**
 * VATN Navigation Component
 * Style: Field-Grade Precision — deep navy, teal accent, Barlow Condensed
 * Behavior: Transparent over hero, transitions to solid navy on scroll
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-logo-mark-n3CY3gHHYbH4DDkguT9gCJ.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Hatchery Solutions", href: "/hatchery-solutions" },
  { label: "Engineering Partners", href: "/engineering-partners" },
  { label: "Our Team", href: "/our-team" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <img
                    src={LOGO_URL}
                    alt="VATN Science and Technology"
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div className="flex flex-col leading-none gap-0.5">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="font-display text-white font-bold"
                      style={{ fontSize: "1.4rem", letterSpacing: "0.12em", lineHeight: 1 }}
                    >
                      VATN
                    </span>
                    <span
                      className="font-display"
                      style={{ fontSize: "0.62rem", letterSpacing: "0.06em", color: "#0E9B8A", fontWeight: 700, textTransform: "uppercase" }}
                    >
                      Science &amp; Technology
                    </span>
                  </div>
                  <div style={{ height: "1px", background: "linear-gradient(to right, #0E9B8A, transparent)", width: "100%" }} />
                  <span
                    className="font-body"
                    style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}
                  >
                    Aquaculture Gas Management
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
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
                href="tel:5403336859"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                style={{ fontSize: "0.8rem", fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={13} />
                (540) 333-6859
              </a>
              <a href="#contact" className="btn-primary" style={{ padding: "0.55rem 1.25rem", fontSize: "0.78rem" }}>
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
          className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ backgroundColor: "rgba(10, 22, 40, 0.98)", backdropFilter: "blur(16px)" }}
        >
          <div className="container py-8 flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="font-display font-bold block py-2 border-b border-white/10"
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
              <a href="tel:5403336859" className="flex items-center gap-2 text-white/60" style={{ fontSize: "0.9rem" }}>
                <Phone size={14} />
                (540) 333-6859
              </a>
              <a href="#contact" className="btn-primary w-fit">
                Discuss Your Site Requirements
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
