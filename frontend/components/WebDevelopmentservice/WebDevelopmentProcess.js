import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getDevProcess() {
  const res = await fetch(
    `${STRAPI_URL}/api/web-developmentservice?populate[sections][on][sections.dev-process][populate][DevProcessCard][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.dev-process");
}

export default async function DevProcess() {
  const section = await getDevProcess();
  if (!section) return null;

  const { title, DevProcessCard = [] } = section;

  return (
    <section className="devprocess">
      <div className="devprocess__container">
        <h2 className="devprocess__title">{title}</h2>

        <div className="devprocess__steps">
          <div className="devprocess__line" aria-hidden="true" />

          {DevProcessCard.map((card, index) => (
            <div key={card.id} className="devprocess__step">
              <div className="devprocess__bubble">
                {card.icon?.url ? (
                  <Image
                    src={`${STRAPI_URL}${card.icon.url}`}
                    alt={card.icon.alternativeText || card.title}
                    width={card.icon.width || 24}
                    height={card.icon.height || 24}
                    className="devprocess__icon"
                  />
                ) : (
                  <span className="devprocess__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </div>
              <p className="devprocess__label">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}