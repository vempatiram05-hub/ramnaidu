const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getAboutCTA() {
  const res = await fetch(
    `${STRAPI_URL}/api/about-page?populate[sections][on][sections.about-cta][populate]=*`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.about-cta");
}

export default async function AboutCTA() {
  const section = await getAboutCTA();
  if (!section) return null;

  const { title, description, primarybutton, primarybuttonurl, seconadrybutton, seconadrybuttonurl } = section;

  return (
    <section className="aboutcta">
      <div className="aboutcta__container">
        <h2 className="aboutcta__title">{title}</h2>
        <p className="aboutcta__desc">{description}</p>
        <div className="aboutcta__buttons">
          <a href={primarybuttonurl} className="aboutcta__btn--primary">{primarybutton}</a>
          <a href={seconadrybuttonurl} className="aboutcta__btn--secondary">{seconadrybutton}</a>
        </div>
      </div>
    </section>
  );
}