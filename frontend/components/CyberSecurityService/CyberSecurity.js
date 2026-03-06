import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCybersecurrity() {
  const res = await fetch(
    `${STRAPI_URL}/api/cybersecurrity-service-page?populate[sections][on][sections.cybersecurrity][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.cybersecurrity");
}

function RichText({ content }) {
  if (!content || !Array.isArray(content)) return null;
  return (
    <>
      {content.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i}>
              {block.children?.map((child, j) => (
                <span key={j}>{child.text}</span>
              ))}
            </p>
          );
        }
        return null;
      })}
    </>
  );
}

export default async function Cybersecurrity() {
  const section = await getCybersecurrity();
  if (!section) return null;

  const { title, description, Button, buttonlink, icon } = section;

  return (
    <section className="cybersecurrity">
      <div className="cybersecurrity__bg" aria-hidden="true" />
      <div className="cybersecurrity__container">
        <div className="cybersecurrity__content">
          {icon && (
            <div className="cybersecurrity__icon-wrap">
              <Image
                src={`${STRAPI_URL}${icon.url}`}
                alt={icon.alternativeText || title}
                width={icon.width}
                height={icon.height}
                className="cybersecurrity__icon"
              />
            </div>
          )}
          <h2 className="cybersecurrity__title">{title}</h2>
          <div className="cybersecurrity__rich-text">
            <RichText content={description} />
          </div>
          <a href={buttonlink} className="cybersecurrity__btn">{Button}</a>
        </div>

        <div className="cybersecurrity__visual" aria-hidden="true">
          <div className="cybersecurrity__ring" />
          <div className="cybersecurrity__ring2" />
          <div className="cybersecurrity__center-dot" />
        </div>
      </div>
    </section>
  );
}