import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getDevProcess() {
  const res = await fetch(
    `${STRAPI_URL}/api/mobile-app-development?populate[sections][on][sections.dev-process][populate][DevProcessCard][populate]=icon`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.dev-process");
}

export default async function DevProcess() {
  const section = await getDevProcess();
  if (!section) return null;

  const { title, DevProcessCard = [] } = section;

  return (
    <section className="devprocess">
      <h2>{title}</h2>

      <div className="devprocess__steps">
        {DevProcessCard.map((step, i) => (
          <div key={step.id} className="devprocess__card">
            {step.icon?.url && (
              <Image
                src={STRAPI_URL + step.icon.url}
                alt={step.icon.alternativeText || step.title}
                width={56}
                height={56}
                className="devprocess__icon"
              />
            )}
            <p>{i + 1}. {step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}