import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getWebDevelopmentChoose() {
  const res = await fetch(
    `${STRAPI_URL}/api/web-developmentservice?populate[sections][on][sections.web-developmentchoose][populate][WebDevelopmentPick][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.web-developmentchoose");
}

export default async function WebDevelopmentChoose() {
  const section = await getWebDevelopmentChoose();
  if (!section) return null;

  const { title, WebDevelopmentPick = [] } = section;

  return (
    <section className="wdc">
      <div className="wdc__container">
        <h2 className="wdc__title">{title}</h2>

        <div className="wdc__grid">
          {WebDevelopmentPick.map((item) => (
            <div key={item.id} className="wdc__card">
              {item.icon?.url ? (
                <Image
                  src={`${STRAPI_URL}${item.icon.url}`}
                  alt={item.icon.alternativeText || item.description}
                  width={item.icon.width || 40}
                  height={item.icon.height || 40}
                  className="wdc__icon"
                />
              ) : (
                <span className="wdc__icon-fallback">✓</span>
              )}
              <p className="wdc__label">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}