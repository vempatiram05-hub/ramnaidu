import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getServicesData() {
  const res = await fetch(
    `${API_URL}/api/pages?populate[sections][populate][services][populate]=icon`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.[0]?.sections ?? [];
  return sections.find((s) => s.__component === "sections.service-sections");
}

export default async function ServicesSection() {
  const section = await getServicesData();

  if (!section) return null;

  return (
    <section className="services">
   
        <h2 className="services-title">{section.heading}</h2>
        <p className="services-subtitle">{section.subheading}</p>

        <div className="services-grid">
          {section.services?.map((service, index) => {
            const iconUrl = service.icon?.url
              ? `${API_URL}${service.icon.url}`
              : null;

            return (
              <div key={index} className="service-card">
                <div className="icon-wrapper">
                  {iconUrl && (
                    <Image
                      src={iconUrl}
                      alt={service.title}
                      width={50}
                      height={50}
                      className="service-icon"
                    />
                  )}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
    
    </section>
  );
}