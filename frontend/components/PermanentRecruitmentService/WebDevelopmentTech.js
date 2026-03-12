import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getWebDevelopmentTech() {
  const res = await fetch(
    `${STRAPI_URL}/api/web-developmentservice?populate[sections][on][sections.web-development-tech][populate][WebDevelopmentTechCard][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.web-development-tech");
}

export default async function WebDevelopmentTech() {
  const section = await getWebDevelopmentTech();
  if (!section) return null;

  const { title, WebDevelopmentTechCard = [] } = section;

  return (
    <section className="wdtech">
      <div className="wdtech__container">
        <h2 className="wdtech__title">{title}</h2>

        <div className="wdtech__grid">
          {WebDevelopmentTechCard.map((card) => (
            <div key={card.id} className="wdtech__card">
              {card.image?.url ? (
                <Image
                  src={`${STRAPI_URL}${card.image.url}`}
                  alt={card.image.alternativeText || card.title || ""}
                  width={card.image.width || 60}
                  height={card.image.height || 60}
                  className="wdtech__image"
                />
              ) : (
                <div className="wdtech__placeholder" />
              )}
              {card.title && <p className="wdtech__label">{card.title}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}