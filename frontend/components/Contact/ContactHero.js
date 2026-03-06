// import "./ContactHero.css";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getContactHero() {
  const res = await fetch(
    `${API_URL}/api/contact-page?populate=*`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.contact-hero");
}

export default async function ContactHero() {
  const section = await getContactHero();
  if (!section) return null;

  const { badge, title, subtitle } = section;

  // Extract plain text from Strapi rich text array
  const subtitleText = subtitle
    ?.map((block) => block.children?.map((c) => c.text).join(""))
    .join(" ");

  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        {badge && (
          <span className="contact-hero__badge">✉️ {badge}</span>
        )}
        {title && (
          <h1 className="contact-hero__title">{title}</h1>
        )}
        {subtitleText && (
          <p className="contact-hero__subtitle">{subtitleText}</p>
        )}
      </div>

      {/* Wave bottom */}
      <div className="contact-hero__wave">
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,70 L0,70 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}