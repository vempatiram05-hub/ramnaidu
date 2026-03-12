import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCybersecurritySolutins() {
  const res = await fetch(
    `${STRAPI_URL}/api/cybersecurrity-service-page?populate[sections][on][sections.cybersecurritysolutins][populate][CybersecurrityCards][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.cybersecurritysolutins");
}

export default async function CybersecurritySolutins() {
  const section = await getCybersecurritySolutins();
  if (!section) return null;

  const { title, CybersecurrityCards = [] } = section;

  return (
    <section className="solutions-cyber">
      <div className="solutions-cyber__container">
        <h2 className="solutions-cyber__title">{title}</h2>

        <div className="solutions-cyber__grid">
          {CybersecurrityCards.map((card, index) => (
            <div key={card.id} className="solutions-cyber__card">
              <div className="solutions-cyber__card-top">
                {card.image?.url ? (
                  <Image
                    src={`${STRAPI_URL}${card.image.url}`}
                    alt={card.image.alternativeText || card.title}
                    width={card.image.width}
                    height={card.image.height}
                    className="solutions-cyber__card-image"
                  />
                ) : (
                  <div className="solutions-cyber__card-placeholder" />
                )}
                <span className="solutions-cyber__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="solutions-cyber__card-title">{card.title}</h3>
              <p className="solutions-cyber__card-desc">{card.description}</p>
              <div className="solutions-cyber__accent" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}