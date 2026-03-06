import Image from "next/image";
// import "./AboutCoreValues.css";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getAboutCoreValues() {
  const res = await fetch(
    `${API_URL}/api/about-page?populate[sections][on][sections.aboutcorevalues][populate][aboutCoreValues][populate]=icon`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.aboutcorevalues");
}

export default async function AboutCoreValues() {
  const section = await getAboutCoreValues();
  if (!section) return null;

  const { title, description, aboutCoreValues = [] } = section;

  return (
    <section className="values">
      <div className="values__container">
        <div className="values__header">
          <h2 className="values__title">{title}</h2>
          <p className="values__description">{description}</p>
        </div>
        <div className="values__grid">
          {aboutCoreValues.map((value, i) => {
            const iconUrl = value.icon?.url
              ? `${API_URL}${value.icon.url}`
              : null;
            return (
              <div key={i} className="values__card">
                {iconUrl && (
                  <div className="values__icon-wrap">
                    <Image
                      src={iconUrl}
                      alt={value.title}
                      width={48}
                      height={48}
                      className="values__icon"
                    />
                  </div>
                )}
                <h4 className="values__card-title">{value.title}</h4>
                <p className="values__card-desc">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}