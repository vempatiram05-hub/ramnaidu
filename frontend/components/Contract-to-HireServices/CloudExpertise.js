const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCloudExpertise() {
 const res = await fetch(
  `${STRAPI_URL}/api/cloud-solution?populate[sections][on][sections.cloud-expertise][populate]=icon`,
  { next: { revalidate: 60 } }
);
  if (!res.ok) throw new Error("Failed to fetch cloud expertise");
  const json = await res.json();
  const section = json.data.sections.find(
    (s) => s.__component === "sections.cloud-expertise"
  );
  return section;
}

export default async function CloudExpertise() {
  const data = await getCloudExpertise();
  if (!data) return null;

  const { title, subtitle, description, Button, buttonlink, icon } = data;
  const iconImage = Array.isArray(icon) ? icon[0] : icon;

  return (
    <section className="cloud-expertise">
      <div className="cloud-expertise-container">
        <div className="cloud-expertise-content">
          {iconImage && (
            <div className="cloud-expertise-icon-wrap">
              <img
                src={`${STRAPI_URL}${iconImage.url}`}
                alt={iconImage.alternativeText || title}
                width={80}
                height={80}
                className="cloud-expertise-icon"
              />
            </div>
          )}
          {subtitle && <p className="cloud-expertise-subtitle">{subtitle}</p>}
          <h2 className="cloud-expertise-title">{title}</h2>
          <p className="cloud-expertise-description">{description}</p>
          {Button && (
            <a href={buttonlink} className="btn-primary">{Button}</a>
          )}
        </div>
        <div className="cloud-expertise-visual" />
      </div>
    </section>
  );
}