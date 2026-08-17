import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

type PublicationReference = {
  heading: string;
  references: string;
};

type PublicationReferencesProps = {
  category: string;
  entries: PublicationReference[];
};

export default function PublicationReferences({ category, entries }: PublicationReferencesProps) {
  return (
    <section className="mt-12" aria-labelledby={`${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-publications`}>
      <div className="mb-6">
        <p className="section-label mb-3">Technical Papers</p>
        <span className="teal-rule mb-5" />
        <h2 id={`${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-publications`} className="font-display" style={{ fontSize: "clamp(1.45rem, 3vw, 2rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
          {category} Publications
        </h2>
        <p className="font-body mt-4" style={{ color: "#3A5068", fontSize: "0.92rem", lineHeight: "1.7" }}>
          Please refer to VATN&apos;s {" "}
          <Link href="/publications">
            <span style={{ color: "#3A8C3F", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px", cursor: "pointer" }}>Publication</span>
          </Link>{" "}
          page for pertinent technical papers.
        </p>
      </div>

      <div className="overflow-x-auto" style={{ border: "1px solid #DCE5EC", borderRadius: "2px" }}>
        <table style={{ width: "100%", minWidth: "440px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#0A1628" }}>
              <th className="font-display text-left text-white" style={{ padding: "0.75rem 1rem", fontSize: "0.85rem" }}>Publication Heading</th>
              <th className="font-display text-left text-white" style={{ padding: "0.75rem 1rem", fontSize: "0.85rem" }}>{category}</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={entry.heading} style={{ backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F7F9FA", borderTop: "1px solid #E3EAF0" }}>
                <td className="font-body" style={{ padding: "0.7rem 1rem", fontSize: "0.87rem", color: "#1C2B3A" }}>{entry.heading}</td>
                <td className="font-body" style={{ padding: "0.7rem 1rem", fontSize: "0.87rem", color: "#3A5068" }}>{entry.references}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <Link href="/publications">
          <span className="btn-navy inline-flex" style={{ cursor: "pointer" }}>
            View Publications <ArrowRight size={15} />
          </span>
        </Link>
      </div>
    </section>
  );
}
