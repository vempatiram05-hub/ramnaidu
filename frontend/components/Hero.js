import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getHeroData() {
  const res = await fetch(
    `${API_URL}/api/pages?populate[sections][populate]=image`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.[0]?.sections ?? [];
  return sections.find((s) => s.__component === "sections.hero");
}

export default async function Hero() {
  const section = await getHeroData();

  if (!section) return null;

  const imageUrl = section.image?.url ? `${API_URL}${section.image.url}` : "";

  return (
    <section className="hero">
      <div className="hero-content">
        {section.badge && <span className="hero-badge">{section.badge}</span>}
        {section.title && <h1 className="hero-title">{section.title}</h1>}

        {section.description?.map((block, index) =>
          block.children?.map((child, i) => (
            <p key={`${index}-${i}`}>{child.text}</p>
          ))
        )}

        <div className="hero-actions">
          {section.primaryButtonText && (
            <a href={section.primaryButtonLink || "#"} className="btn btn-primary">
              {section.primaryButtonText}
            </a>
          )}
          {section.secondaryButtonText && (
            <a href={section.secondaryButtonLink || "#"} className="btn btn-secondary">
              {section.secondaryButtonText}
            </a>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="hero-image">
          <Image
            src={imageUrl}
            alt={section.title || "Hero"}
            width={512}
            height={512}
          />
        </div>
      )}
    </section>
  );
}