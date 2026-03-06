import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCloudHero() {
  const res = await fetch(
    `${STRAPI_URL}/api/cloud-solution?populate[sections][on][sections.cloudhero][populate]=image`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch cloud hero");
  const json = await res.json();
  return json.data.sections.find((s) => s.__component === "sections.cloudhero");
}

export default async function CloudHero() {
  const data = await getCloudHero();
  if (!data) return null;

  const { title, description, primarybutton, primarybuttonurl, seconadrybutton, seconadrybuttonurl, image } = data;

  return (
    <section className="cloudhero">
      <div className="cloudhero__container">
        <div className="cloudhero__text">
          <h1 className="cloudhero__title">{title}</h1>
          <p className="cloudhero__desc">{description}</p>
          <div className="cloudhero__buttons">
            <a href={primarybuttonurl} className="cloudhero__btn--primary">{primarybutton}</a>
            <a href={seconadrybuttonurl} className="cloudhero__btn--secondary">{seconadrybutton}</a>
          </div>
        </div>

        {image?.url && (
          <div className="cloudhero__image-wrap">
            <Image
              src={STRAPI_URL + image.url}
              alt={image.alternativeText || title}
              width={image.width}
              height={image.height}
              className="cloudhero__image"
            />
          </div>
        )}
      </div>
    </section>
  );
}