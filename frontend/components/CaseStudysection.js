import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCaseStudyData() {
  const res = await fetch(
    `${API_URL}/api/pages?populate[sections][populate][caseCard][populate]=link`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.[0]?.sections ?? [];
  return sections.find((s) => s.__component === "sections.case-study");
}

export default async function CaseStudysection() {
  const section = await getCaseStudyData();

  if (!section) return null;

  return (
    <section className="case-study">
      <span className="case-study-badge">{section.badge}</span>
      <h2 className="case-title">{section.title}</h2>
      <p className="case-subtitle">{section.subtitle}</p>

      <div className="case-grid">
        {section.caseCard?.map((card, index) => {
          const imageUrl = card.link?.url
            ? `${API_URL}${card.link.url}`
            : null;

          return (
            <div key={index} className="case-card">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={card.title || "Case study"}
                  width={400}
                  height={300}
                />
              )}
              <h3>{card.title}</h3>
            </div>
          );
        })}
      </div>

      {section.button && (
        <Link
          href={section.button.url || "#"}
          target={section.button.openInNewTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={`view-btn ${section.button.variant || ""}`}
        >
          {section.button.label}
        </Link>
      )}
    </section>
  );
}