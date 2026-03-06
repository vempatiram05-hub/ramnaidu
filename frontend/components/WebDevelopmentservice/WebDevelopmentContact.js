import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getWebDevelopmentContact() {
  const res = await fetch(
    `${STRAPI_URL}/api/web-developmentservice?populate[sections][on][sections.web-development-contact][populate]=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.web-development-contact");
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

export default async function WebDevelopmentContact() {
  const section = await getWebDevelopmentContact();
  if (!section) return null;

  const { title, description, Button, buttonlink, icon } = section;

  return (
    <section className="wdcontact">
      <div className="wdcontact__container">
        <div className="wdcontact__content">
          {icon && (
            <div className="wdcontact__icon-wrap">
              <Image
                src={`${STRAPI_URL}${icon.url}`}
                alt={icon.alternativeText || title}
                width={icon.width}
                height={icon.height}
                className="wdcontact__icon"
              />
            </div>
          )}
          <h2 className="wdcontact__title">{title}</h2>
          <div className="wdcontact__rich-text">
            <RichText content={description} />
          </div>
          {Button && (
            <a href={buttonlink} className="wdcontact__btn">
              {Button}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}