const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCloudSolutionCta() {
  const res = await fetch(
  `${STRAPI_URL}/api/cloud-solution?populate[sections][on][sections.cloud-solution-cta][populate]=*`,
  { next: { revalidate: 60 } }
);
  if (!res.ok) throw new Error("Failed to fetch cloud solution CTA");
  const json = await res.json();
  const section = json.data.sections.find(
    (s) => s.__component === "sections.cloud-solution-cta"
  );
  return section;
}

export default async function CloudSolutionCta() {
  const data = await getCloudSolutionCta();
  if (!data) return null;

  const { title, Button, buttonlink } = data;

  return (
    <section className="cloud-cta">
      <div className="cloud-cta-container">
        <h2 className="cloud-cta-title">{title}</h2>
        <p className="cloud-cta-sub">
          Our cloud experts are ready to design a tailored strategy that drives your digital transformation.
        </p>
        {Button && buttonlink ? (
          <a href={buttonlink} className="btn-primary-clo">
            {Button} →
          </a>
        ) : (
          <a href="/contact" className="btn-primary-clo">
            Get in Touch →
          </a>
        )}
      </div>
    </section>
  );
}