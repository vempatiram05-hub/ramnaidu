import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getDevPoint() {
  const res = await fetch(
    `${STRAPI_URL}/api/mobile-app-development?populate[sections][on][sections.dev-point][populate]=icon`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.dev-point");
}

export default async function DevPoint() {
  const section = await getDevPoint();
  if (!section) return null;

  const { title, description, Button, icon } = section;

  return (
    <section className="devpoint">
      <div className="devpoint__container">
        <div className="devpoint__card">

          {icon?.url && (
            <div className="devpoint__icon-wrap">
              <Image
                src={STRAPI_URL + icon.url}
                alt={icon.alternativeText || title}
                width={60}
                height={60}
                className="devpoint__icon"
              />
            </div>
          )}

          <h2 className="devpoint__title">{title}</h2>
          <p className="devpoint__desc">{description}</p>

          {Button && (
            <a href="/contact" className="devpoint__btn">
              {Button}
            </a>
          )}

        </div>
      </div>
    </section>
  );
}