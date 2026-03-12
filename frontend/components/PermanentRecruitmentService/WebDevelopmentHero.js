import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getWebDevelopmentHero() {
  const res = await fetch(
    `${STRAPI_URL}/api/web-developmentservice?populate[sections][on][sections.web-development-hero][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.web-development-hero");
}

export default async function WebDevelopmentHero() {
  const section = await getWebDevelopmentHero();
  if (!section) return null;

  const {
    title,
    description,
    primarybutton,
    primarybuttonurl,
    seconadrybutton,
    seconadrybuttonurl,
    image,
  } = section;

  return (
    <section className="wdh">
      <div className="wdh__bg" aria-hidden="true" />

      <div className="wdh__container">
        <div className="wdh__text">
          <h1 className="wdh__title">{title}</h1>
          <p className="wdh__description">{description}</p>
          <div className="wdh__buttons">
            {primarybutton && (
              <a href={primarybuttonurl} className="wdh__btn-primary">
                {primarybutton}
              </a>
            )}
            {seconadrybutton && (
              <a href={seconadrybuttonurl} className="wdh__btn-secondary">
                {seconadrybutton}
              </a>
            )}
          </div>
        </div>

        {image && (
          <div className="wdh__image-wrap">
            <Image
              src={`${STRAPI_URL}${image.url}`}
              alt={image.alternativeText || title}
              width={image.width}
              height={image.height}
              className="wdh__image"
            />
          </div>
        )}
      </div>
    </section>
  );
}