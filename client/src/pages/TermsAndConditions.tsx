import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TermsAndConditions from "@/components/TermsAndConditions";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#060E1A" }}>
      <Navigation />
      <main style={{ paddingTop: "110px" }}>
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  );
}
