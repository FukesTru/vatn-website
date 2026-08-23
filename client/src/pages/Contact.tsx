/**
 * VATN Contact Page — Standalone
 * Style: Field-Grade Precision — deep navy, teal accents, Barlow Condensed display
 * A clean, focused contact page that sends visitors directly to the inquiry form.
 * No team bios. No distractions. Just the form and direct contact info.
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/RCq5N2ZMzxq2D3LnowP6W7/vatn-hero-bg-d6qdrLqEtbQveaqmZLT9mn.webp";

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", organization: "", email: "", phone: "", message: "" });
    },
    onError: (err: unknown) => {
      setError("There was a problem sending your inquiry. Please try again or call us directly.");
      console.error("[Contact Form Error]", err);
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please provide your name and email address.");
      return;
    }
    submitContact.mutate({
      name: formData.name.trim(),
      organization: formData.organization.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    });
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>
      <Navigation />

      {/* ── PAGE HEADER ── */}
      <section
        className="relative flex items-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          minHeight: "280px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(6,14,26,0.96) 0%, rgba(10,22,40,0.88) 60%, rgba(10,22,40,0.70) 100%)",
          }}
        />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="container relative z-10 pt-28 pb-14">
          <p className="section-label mb-3">Contact VATN</p>
          <span className="teal-rule mb-5" />
          <h1
            className="font-display text-white"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.05 }}
          >
            Discuss Your Project
          </h1>
          <p
            className="font-body text-white/65 mt-4"
            style={{ fontSize: "1rem", lineHeight: "1.65", maxWidth: "540px" }}
          >
            Describe your facility and the water treatment challenge you are facing. Barnaby and Terry will respond directly.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ── FORM ── */}
            <RevealSection>
              <p className="section-label mb-3">Send an Inquiry</p>
              <span className="teal-rule mb-5" />
              <h2
                className="font-display mb-4"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", color: "#1C2B3A", lineHeight: 1.05 }}
              >
                Tell Us About Your Facility
              </h2>
              <p
                className="font-body mb-7"
                style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.65" }}
              >
                Every project starts with understanding your site — your water source, species, infrastructure, and the specific challenge you need to solve. Use the form below to start that conversation.
              </p>

              <div style={{ width: "100%", minHeight: "551px" }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/EixvLXvkzStptg4CDAf0"
                  style={{ width: "100%", height: "551px", border: "none", borderRadius: "0px" }}
                  id="inline-EixvLXvkzStptg4CDAf0"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form of VATN"
                  data-height="551"
                  data-layout-iframe-id="inline-EixvLXvkzStptg4CDAf0"
                  data-form-id="EixvLXvkzStptg4CDAf0"
                  title="Form of VATN"
                />
              </div>
            </RevealSection>

            {/* ── DIRECT CONTACT ── */}
            <RevealSection delay={80}>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Direct Contact</p>
                  <span className="teal-rule mb-5" />
                </div>

                {/* Terry */}
                <div
                  className="p-6"
                  style={{
                    backgroundColor: "#0A1628",
                    borderRadius: "2px",
                    borderLeft: "3px solid #3A8C3F",
                  }}
                >
                  <p
                    className="font-display text-white font-bold mb-0.5"
                    style={{ fontSize: "1.15rem" }}
                  >
                    Terry McCarthy
                  </p>
                  <p
                    className="font-body mb-4"
                    style={{
                      color: "#3A8C3F",
                      fontSize: "0.82rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Director of Sales
                  </p>
                </div>

                {/* Barnaby */}
                <div
                  className="p-6"
                  style={{
                    backgroundColor: "#0A1628",
                    borderRadius: "2px",
                    borderLeft: "3px solid #3A8C3F",
                  }}
                >
                  <p
                    className="font-display text-white font-bold mb-0.5"
                    style={{ fontSize: "1.15rem" }}
                  >
                    Dr. Barnaby J. Watten
                  </p>
                  <p
                    className="font-body mb-4"
                    style={{
                      color: "#3A8C3F",
                      fontSize: "0.82rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Founder &amp; Principal Scientist
                  </p>
                </div>

                {/* What to expect */}
                <div
                  className="p-6"
                  style={{
                    backgroundColor: "#F4F6F8",
                    borderRadius: "2px",
                    borderTop: "2px solid rgba(58,140,63,0.3)",
                  }}
                >
                  <p
                    className="font-display font-bold mb-3"
                    style={{ fontSize: "1rem", color: "#1C2B3A" }}
                  >
                    What to Expect
                  </p>
                  {[
                    "A direct response from Barnaby or Terry — not a sales team",
                    "A conversation about your specific facility and challenges",
                    "Honest guidance on what will and will not work for your site",
                    "No pressure, no generic proposals",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 mb-2">
                      <div
                        className="mt-1 flex-shrink-0"
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "#3A8C3F",
                          marginTop: "7px",
                        }}
                      />
                      <p
                        className="font-body"
                        style={{ color: "#3A5068", fontSize: "0.87rem", lineHeight: "1.6" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
