const TERMS_PDF = "/manus-storage/vatn-terms-and-conditions-of-sale_a86db69a.pdf";
const TERMS_PAGES = [
  "/manus-storage/terms-1_932b8f32.png",
  "/manus-storage/terms-2_d254a395.png",
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
            Exhibit A — General Terms and Conditions of Sale.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href={TERMS_PDF} target="_blank" rel="noreferrer" className="btn-primary">Open Terms &amp; Conditions</a>
            <a href={TERMS_PDF} download className="btn-outline">Download PDF</a>
          </div>
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
