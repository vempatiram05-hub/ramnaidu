const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCloudSolutionCTA() {
  const res = await fetch(
    `${STRAPI_URL}/api/web-developmentservice?populate[sections][on][sections.cloud-solution-cta][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.cloud-solution-cta");
}

export default async function CloudSolutionCTA() {
  const section = await getCloudSolutionCTA();
  if (!section) return null;

  const { title, Button, buttonlink } = section;

  return (
    <section className="webdevcta">
      <div className="webdevcta__container">
        <h2 className="webdevcta__title">{title}</h2>
        {Button && (
          <a href={buttonlink} className="webdevcta__btn">
            {Button}
          </a>
        )}
      </div>
    </section>
  );
}