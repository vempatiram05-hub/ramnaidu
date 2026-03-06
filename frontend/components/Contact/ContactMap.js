// import "./ContactMap.css";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getContactMap() {
  const res = await fetch(
    `${API_URL}/api/contact-page?populate=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.map-section");
}

export default async function ContactMap() {
  const section = await getContactMap();
  if (!section) return null;

  const { locationTitle, googleMapEmbedUrl } = section;

  return (
    <section className="contact-map">
      <div className="contact-map__container">
        <div className="contact-map__header">
          <h2 className="contact-map__title">📍 {locationTitle}</h2>
        </div>
        {googleMapEmbedUrl && (
          <div className="contact-map__embed">
            <iframe
              src={googleMapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </section>
  );
}