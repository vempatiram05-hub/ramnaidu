import Image from "next/image";
import Link from "next/link";
// import "./AboutHero.css";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getAboutHero() {
  const res = await fetch(
    `${API_URL}/api/about-page?populate[sections][on][sections.about-hero][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.about-hero");
}

export default async function AboutHero() {
  const section = await getAboutHero();
  if (!section) return null;

  const {
    title,
    badge,
    description,
    primarybutton,
    primarybuttonurl,
    seconadrybutton,
    seconadrybuttonurl,
    image,
  } = section;

  const imageUrl = image?.url ? `${API_URL}${image.url}` : null;

  return (
    <section className="about-hero">
      <div className="about-hero__container">
        <div className="about-hero__left">
          {badge && <span className="about-hero__badge">{badge}</span>}
          <h1 className="about-hero__title">{title}</h1>
          <p className="about-hero__description">{description}</p>
          <div className="about-hero__buttons">
            {primarybutton && (
              <Link href={primarybuttonurl || "/"} className="about-hero__btn--primary">
                {primarybutton}
              </Link>
            )}
            {seconadrybutton && (
              <Link href={seconadrybuttonurl || "/"} className="about-hero__btn--secondary">
                {seconadrybutton}
              </Link>
            )}
          </div>
        </div>

        <div className="about-hero__right">
          {imageUrl && (
            <div className="about-hero__image-wrap">
              <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={500}
                className="about-hero__image"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}