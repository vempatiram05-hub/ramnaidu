import Image from "next/image";
// import "./AboutUniq.css";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getAboutUniq() {
  const res = await fetch(
    `${API_URL}/api/about-page?populate[sections][on][sections.aboutuniq][populate][aboutuniq][populate]=icon`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.aboutuniq");
}

export default async function AboutUniq() {
  const section = await getAboutUniq();
  if (!section) return null;

  const { title, description, aboutuniq: items = [] } = section;

  return (
    <section className="uniq">
      <div className="uniq__container">
        <div className="uniq__header">
          <h2 className="uniq__title">{title}</h2>
          <p className="uniq__description">{description}</p>
        </div>
        <div className="uniq__grid">
          {items.map((item, i) => {
            const iconUrl = item.icon?.url
              ? `${API_URL}${item.icon.url}`
              : null;
            return (
              <div key={i} className="uniq__card">
                {iconUrl && (
                  <div className="uniq__icon-wrap">
                    <Image
                      src={iconUrl}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="uniq__icon"
                    />
                  </div>
                )}
                <h4 className="uniq__card-title">{item.title}</h4>
                <p className="uniq__card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}