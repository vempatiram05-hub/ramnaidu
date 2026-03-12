import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCybersecurityHero() {
  const res = await fetch(
    `${STRAPI_URL}/api/cybersecurrity-service-page?populate[sections][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  const sections = json.data?.sections || [];
  return sections.find(
    (s) => s.__component === "sections.cybersecurrity-service-hero"
  );
}

export default async function CybersecurityServiceHero() {
  const data = await getCybersecurityHero();
  if (!data) return null;

  const {
    title,
    description,
    badge,
    primarybutton,
    primarybuttonurl,
    seconadrybutton,
    seconadrybuttonurl,
    image,
  } = data;

  return (
    <section className="hero-cyber">
      <div className="hero-cyber__bg" aria-hidden="true" />
      <div className="hero-cyber__grid-lines" aria-hidden="true" />

      <div className="hero-cyber__container">
        <div className="hero-cyber__text">
          {badge && <p className="hero-cyber__badge">{badge}</p>}
          <h1 className="hero-cyber__title">{title}</h1>
          <p className="hero-cyber__description">{description}</p>
          <div className="hero-cyber__buttons">
            {primarybutton && (
              <a href={primarybuttonurl} className="hero-cyber__btn-primary">
                {primarybutton}
              </a>
            )}
            {seconadrybutton && (
              <a href={seconadrybuttonurl} className="hero-cyber__btn-secondary">
                {seconadrybutton}
              </a>
            )}
          </div>
        </div>

        {image && (
          <div className="hero-cyber__image-wrap">
            <div className="hero-cyber__glow" aria-hidden="true" />
            <Image
              src={`${STRAPI_URL}${image.url}`}
              alt={image.alternativeText || title}
              width={image.width}
              height={image.height}
              className="hero-cyber__image"
            />
          </div>
        )}
      </div>
    </section>
  );
}