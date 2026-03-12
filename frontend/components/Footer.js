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
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Globe
} from 'lucide-react';

const socialIcons = {
  facebook: <Facebook size={18} />,
  twitter: <Twitter size={18} />,
  instagram: <Instagram size={18} />,
  linkedin: <Linkedin size={18} />,
  youtube: <Youtube size={18} />,
  github: <Github size={18} />,
};


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

              <Link key={social.id ?? index} href={social.url} className="social-link">
                {socialIcons[social.platform?.toLowerCase()] ?? <Globe size={18} />}
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