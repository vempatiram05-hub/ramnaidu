const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getDevCont() {
  const res = await fetch(
    `${STRAPI_URL}/api/mobile-app-development?populate[sections][on][sections.dev-cont][populate]=*`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.dev-cont");
}

export default async function DevCont() {
  const section = await getDevCont();
  if (!section) return null;

  const { title, Button } = section;

  return (
    <section className="devcont">
      <div className="devcont__container">
        <h2>{title}</h2>
        <a href={Button}>Get Started</a>
      </div>
    </section>
  );
}