const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getTestimonialsData() {
  const res = await fetch(
    `${API_URL}/api/pages?populate[sections][populate]=testimonialcard`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.[0]?.sections ?? [];
  return sections.find((s) => s.__component === "sections.testimonials");
}

export default async function Testimonials() {
  const section = await getTestimonialsData();

  if (!section) return null;

  const { badge, title, subtitle, testimonialcard } = section;

  return (
    <section className="testimonials">
      {badge && <span className="test-badge">{badge}</span>}
      {title && <h2 className="test-title">{title}</h2>}
      {subtitle && <p className="test-subtitle">{subtitle}</p>}

      <div className="test-grid">
        {testimonialcard && testimonialcard.length > 0 ? (
          testimonialcard.map((item) => (
            <div key={item.id} className="test-card">
              <p className="quote">"{item.quote}"</p>
              {item.name && <h4>{item.name}</h4>}
              {item.designation && (
                <span className="designation">{item.designation}</span>
              )}
            </div>
          ))
        ) : (
          <p>No testimonials found</p>
        )}
      </div>
    </section>
  );
}