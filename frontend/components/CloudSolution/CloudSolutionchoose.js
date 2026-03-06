const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCloudSolutionChoose() {
  const res = await fetch(
    `${STRAPI_URL}/api/cloud-solution?populate[sections][on][sections.cloud-solutionchoose][populate][CloudSolutionPick][populate]=icon`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch cloud solution choose");
  const json = await res.json();
  const section = json.data.sections.find(
    (s) => s.__component === "sections.cloud-solutionchoose"
  );
  return section;
}

export default async function CloudSolutionChoose() {
  const data = await getCloudSolutionChoose();
  if (!data) return null;

  const { title, CloudSolutionPick } = data;

  return (
    <section className="cloud-choose">
      <div className="cloud-choose-container">
        <h2 className="cloud-choose-title">{title}</h2>
        <div className="cloud-choose-grid">
          {CloudSolutionPick?.map((item, index) => (
            <div key={item.id} className="cloud-choose-item">
              <div className="cloud-choose-icon-wrap">
                {item.icon ? (
                  <img
                    src={`${STRAPI_URL}${item.icon.url}`}
                    alt={item.icon.alternativeText || item.title}
                    width={40}
                    height={40}
                    className="cloud-choose-icon-img"
                  />
                ) : (
                  <span>☁️</span>
                )}
              </div>
              <p className="cloud-choose-label">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}