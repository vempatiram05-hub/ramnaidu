import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getDevSpecs() {
  const res = await fetch(
    `${STRAPI_URL}/api/mobile-app-development?populate[sections][on][sections.dev-specs][populate][DevSpecCard][populate]=icon`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.dev-specs");
}

export default async function DevSpecs() {
  const section = await getDevSpecs();
  if (!section) return null;

  const { description, DevSpecCard = [] } = section;

  return (
    <section className="devspec">
      <h2>{description}</h2>

      <div className="devspec__grid">
        {DevSpecCard.map((item) => (
          <div key={item.id} className="devspec__card">
            {item.icon?.url && (
              <Image
                src={STRAPI_URL + item.icon.url}
                alt={item.icon.alternativeText || item.description}
                width={56}
                height={56}
                className="devspec__icon"
              />
            )}
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}