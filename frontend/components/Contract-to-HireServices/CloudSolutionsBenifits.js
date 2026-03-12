const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCloudSolutionsBenifits() {
  const res = await fetch(
    `${STRAPI_URL}/api/cloud-solution?populate[sections][on][sections.cloud-solutions-benifits][populate][CloudSolutionBenifitCard][populate]=image`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch cloud solutions benefits");
  const json = await res.json();
  const section = json.data.sections.find(
    (s) => s.__component === "sections.cloud-solutions-benifits"
  );
  return section;
}

export default async function CloudSolutionsBenifits() {
  const data = await getCloudSolutionsBenifits();
  if (!data) return null;

  const { title, CloudSolutionBenifitCard } = data;

  return (
    <section className="cloud-benifits">
      <div className="cloud-benifits-container">
        <h2 className="cloud-benifits-title">{title}</h2>
        <div className="cloud-benifits-grid">
          {CloudSolutionBenifitCard?.map((card) => (
            <div key={card.id} className="cloud-benifits-card">
              {card.image ? (
                <img
                  src={`${STRAPI_URL}${card.image.url}`}
                  alt={card.image.alternativeText || card.description}
                  width={36}
                  height={36}
                  className="cloud-benifits-img"
                />
              ) : (
                <span className="cloud-benifits-icon">☁️</span>
              )}
              <p className="cloud-benifits-label">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}