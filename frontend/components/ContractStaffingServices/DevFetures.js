import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getDevFeatures() {
  const res = await fetch(
    `${STRAPI_URL}/api/mobile-app-development?populate[sections][on][sections.dev-fetures][populate][DevFetCard][populate]=image`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.dev-fetures");
}

export default async function DevFeatures() {
  const section = await getDevFeatures();
  if (!section) return null;

  const { title, DevFetCard = [] } = section;

  return (
    <section className="devfeatures">
      <h2>{title}</h2>

      <div className="devfeatures__grid">
        {DevFetCard.map((card) => (
          <div key={card.id} className="devfeatures__card">
            {card.image?.url && (
              <Image
                src={STRAPI_URL + card.image.url}
                alt={card.image.alternativeText || card.title}
                width={64}
                height={64}
                className="devfeatures__image"
              />
            )}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}