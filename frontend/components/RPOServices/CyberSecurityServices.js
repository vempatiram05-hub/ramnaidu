import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCybersecurrityServices() {
  const res = await fetch(
    `${STRAPI_URL}/api/cybersecurrity-service-page?populate[sections][on][sections.cybersecurrity-services][populate][cyberServices][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.cybersecurrity-services");
}

export default async function CybersecurityServices() {
  const section = await getCybersecurrityServices();
  if (!section) return null;

  const { title, cyberServices = [] } = section;

  return (
    <section className="services-cyber">
      <div className="services-cyber__container">
        <h2 className="services-cyber__title">{title}</h2>

        <div className="services-cyber__grid">
          {cyberServices.map((service) => (
            <div key={service.id} className="services-cyber__card">
              <div className="services-cyber__icon-wrap">
                {service.icon?.url ? (
                  <Image
                    src={`${STRAPI_URL}${service.icon.url}`}
                    alt={service.icon.alternativeText || service.title}
                    width={service.icon.width || 40}
                    height={service.icon.height || 40}
                    className="services-cyber__icon"
                  />
                ) : (
                  <span className="services-cyber__icon">🔒</span>
                )}
              </div>
              <p className="services-cyber__label">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}