// import "./ContactInfo.css";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getContactInfo() {
  const res = await fetch(
    `${API_URL}/api/contact-page?populate=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.sections ?? [];
  return sections.find((s) => s.__component === "sections.contact-info");
}

export default async function ContactInfo() {
  const section = await getContactInfo();
  if (!section) return null;

  const {
    email,
    phone,
    addressTitle,
    street,
    city,
    state,
    postalCode,
    country,
  } = section;

  const address = [street, city, state, postalCode, country]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="contact-info">
      <h3 className="contact-info__title">Contact Information</h3>

      {address && (
        <div className="contact-info__item">
          <div className="contact-info__icon">📍</div>
          <div>
            {addressTitle && <p className="contact-info__label">{addressTitle}</p>}
            <p className="contact-info__value">{address}</p>
          </div>
        </div>
      )}

      {email && (
        <div className="contact-info__item">
          <div className="contact-info__icon">✉️</div>
          <div>
            <p className="contact-info__label">Email</p>
            <a href={`mailto:${email}`} className="contact-info__value contact-info__link">
              {email}
            </a>
          </div>
        </div>
      )}

      {phone && (
        <div className="contact-info__item">
          <div className="contact-info__icon">📞</div>
          <div>
            <p className="contact-info__label">Phone</p>
            <a href={`tel:${phone}`} className="contact-info__value contact-info__link">
              {phone}
            </a>
          </div>
        </div>
      )}

      <div className="contact-info__hours">
        <div className="contact-info__hours-header">🕐 Business Hours</div>
        <div className="contact-info__hours-row">
          <span>Monday - Friday</span>
          <span className="contact-info__hours-time">9:00 AM - 6:00 PM</span>
        </div>
        <div className="contact-info__hours-row">
          <span>Saturday</span>
          <span className="contact-info__hours-time">10:00 AM - 4:00 PM</span>
        </div>
        <div className="contact-info__hours-row">
          <span>Sunday</span>
          <span className="contact-info__hours-closed">Closed</span>
        </div>
      </div>
    </div>
  );
}