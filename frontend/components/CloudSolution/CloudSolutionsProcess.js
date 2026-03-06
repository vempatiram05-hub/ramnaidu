const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCloudSolutionProcess() {
  const res = await fetch(
    `${STRAPI_URL}/api/cloud-solution?populate[sections][on][sections.cloud-solutionprocess][populate][CloudSolutionsProcess][populate]=icon`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch");
  const json = await res.json();
  return json.data.sections.find(
    (s) => s.__component === "sections.cloud-solutionprocess"
  );
}

export default async function CloudSolutionProcess() {
  const data = await getCloudSolutionProcess();
  if (!data) return null;

  const { title, CloudSolutionsProcess } = data;

  return (
    <section className="cloud-process">
      <div className="cloud-process-container">
        <h2 className="cloud-process-title">{title}</h2>
        <div className="cloud-process-steps">
          <div className="cloud-process-line" />
          {CloudSolutionsProcess?.map((step, index) => (
            <div key={step.id} className="cloud-process-step">
              <div className="cloud-process-bubble">
                {step.icon && (
                  <img
                    src={`${STRAPI_URL}${step.icon.url}`}
                    alt={step.icon.alternativeText || step.title}
                    width={48}
                    height={48}
                    className="cloud-process-icon-img"
                  />
                )}
                <span className="cloud-process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="cloud-process-label">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
