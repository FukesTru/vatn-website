import { Link } from "wouter";

/**
 * The two page scans were recovered from the VATN image library. The source
 * PDF was lost with the Manus deployment and is the only asset with no
 * replacement, so the download buttons were replaced with a request link
 * rather than left pointing at a dead file. To restore them, drop the PDF in
 * `client/public/docs/` and reinstate the two <a> buttons.
 */
const TERMS_PAGES = [
  "/images/terms-and-conditions-page-1.webp",
  "/images/terms-and-conditions-page-2.webp",
];

export default function TermsAndConditions() {
  return (
    <section aria-labelledby="terms-and-conditions" className="py-12 lg:py-16" style={{ backgroundColor: "#060E1A", borderTop: "1px solid rgba(58,140,63,0.2)" }}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>VATN Science and Technology, LLC</p>
          <h2 id="terms-and-conditions" className="font-display text-white mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.1 }}>
            Terms and Conditions of Sale
          </h2>
          <p className="font-body text-white/60 mb-6" style={{ fontSize: "0.9rem", lineHeight: "1.65" }}>
            Exhibit A — General Terms and Conditions of Sale. A PDF copy is available on{" "}
            <Link href="/contact">
              <span style={{ color: "#3A8C3F", textDecoration: "underline", cursor: "pointer" }}>request</span>
            </Link>
            .
          </p>
          <div className="space-y-6">
            {TERMS_PAGES.map((page, index) => (
              <img
                key={page}
                src={page}
                alt={`VATN General Terms and Conditions of Sale — page ${index + 1}`}
                className="w-full h-auto block"
                style={{ backgroundColor: "#ffffff", borderRadius: "2px", border: "1px solid rgba(58,140,63,0.25)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
