import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCybersecurrityStrategies() {
  const res = await fetch(
    `${STRAPI_URL}/api/cybersecurrity-service-page?populate[sections][on][sections.cybersecurritystrategies][populate][CybersecurityStrategycard][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.cybersecurritystrategies");
}

export default async function CybersecurrityStrategies() {
  const section = await getCybersecurrityStrategies();
  if (!section) return null;

  const { title, CybersecurityStrategycard = [] } = section;

  return (
    <section className="cyber-strategies">
      <div className="cyber-strategies__container">
        <h2 className="cyber-strategies__title">{title}</h2>

        <div className="cyber-strategies__steps">
          <div className="cyber-strategies__line" aria-hidden="true" />

          {CybersecurityStrategycard.map((step, index) => (
            <div key={step.id} className="cyber-strategies__step">
              <div className="cyber-strategies__bubble">
                {step.icon?.url ? (
                  <Image
                    src={`${STRAPI_URL}${step.icon.url}`}
                    alt={step.icon.alternativeText || step.description}
                    width={step.icon.width || 24}
                    height={step.icon.height || 24}
                    className="cyber-strategies__icon"
                  />
                ) : (
                  <span style={{ color: "#fff", fontSize: 18 }}>{index + 1}</span>
                )}
              </div>
              <p className="cyber-strategies__label">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}