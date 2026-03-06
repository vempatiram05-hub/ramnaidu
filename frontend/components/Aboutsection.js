import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getAboutData() {
  const res = await fetch(
    `${API_URL}/api/pages?populate[sections][populate][image]=*&populate[sections][populate][features][populate]=image`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.[0]?.sections ?? [];
  return sections.find((s) => s.__component === "sections.about-section");
}

export default async function Aboutsection() {
  const section = await getAboutData();

  if (!section) return null;

  const imageUrl = section.image?.[0]?.url
    ? `${API_URL}${section.image[0].url}`
    : "";

  return (
    <section className="about">
      <div className="about-top">
        <div className="about-left">
          <span className="about-badge">{section.badge}</span>
          <h2 className="title-name">{section.title}</h2>
          {section.description?.map((block, index) =>
            block.children?.map((child, i) => (
              <p key={`${index}-${i}`}>{child.text}</p>
            ))
          )}
        </div>

        <div className="about-right">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={section.title}
              width={500}
              height={500}
            />
          )}
        </div>
      </div>

      <div className="about-features">
        {section.features?.map((item, index) => {
          const featureImageUrl = item.image?.url
            ? `${API_URL}${item.image.url}`
            : null;

          return (
            <div className="feature-card" key={index}>
              <div className="icon-box">
                {featureImageUrl && (
                  <Image
                    src={featureImageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="feature-icon"
                  />
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}