import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getDevHero() {
  const res = await fetch(
    `${STRAPI_URL}/api/mobile-app-development?populate[sections][on][sections.dev-hero][populate]=image`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.dev-hero");
}

export default async function DevHero() {
  const section = await getDevHero();
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
    <section className="devhero">
      <div className="devhero__container">
        <div className="devhero__text">
          <h1>{title}</h1>
          <p>{description}</p>

          <div className="devhero__buttons">
            <a href={primarybuttonurl}>{primarybutton}</a>
            <a href={seconadrybuttonurl}>{seconadrybutton}</a>
          </div>
        </div>

        {image && (
          <Image
            src={`${STRAPI_URL}${image.url}`}
            alt={title}
            width={image.width}
            height={image.height}
          />
        )}
      </div>
    </section>
  );
}