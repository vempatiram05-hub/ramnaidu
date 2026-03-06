import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getFooterData() {
  const res = await fetch(
    `${API_URL}/api/footer?populate=*`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data?.data;
}

export default async function Footer() {
  const footer = await getFooterData();

  if (!footer) return null;

  return (
    <footer className="footer">
      <div className="container">

        {/* Newsletter */}
        <div className="newsletter">
          <input
            type="email"
            placeholder={footer.newsletterPlaceholder}
          />
          <button>Subscribe</button>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">

          {/* Left */}
          <div className="footer-left">
            <h2>{footer.companyName}</h2>
            <p>{footer.tagline}</p>
          </div>

          {/* Center */}
          <div className="footer-center">
            <p>📞 {footer.phone}</p>
            <p>✉️ {footer.Email}</p>
            <p>📍 {footer.text}</p>
          </div>

          {/* Right */}
          <div className="footer-right">
            {footer.sociallinks?.map((social) => (
              <Link
                key={social.id}
                href={social.url || "#"}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                {social.platform?.charAt(0).toUpperCase()}
              </Link>
            ))}
          </div>

        </div>

        <hr />

        <div className="copyright">
          {footer.copyright}
        </div>

      </div>
    </footer>
  );
}