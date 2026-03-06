import Image from "next/image";
// import "./AboutMission.css";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getAboutMission() {
  const res = await fetch(
    `${API_URL}/api/about-page?populate[sections][on][sections.about-mission][populate][aboutValues][populate]=image`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.about-mission");
}

export default async function AboutMission() {
  const section = await getAboutMission();
  if (!section) return null;

  const { aboutValues = [] } = section;

  return (
    <section className="mission">
      <div className="mission__container">
        <div className="mission__grid">
          {aboutValues.map((item, i) => {
            const imageUrl = item.image?.url
              ? `${API_URL}${item.image.url}`
              : null;
            return (
              <div key={i} className="mission__card">
                {imageUrl && (
                  <div className="mission__image-wrap">
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="mission__image"
                    />
                  </div>
                )}
                <h3 className="mission__card-title">{item.title}</h3>
                <p className="mission__card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}