import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getBlogData() {
  const res = await fetch(
    `${API_URL}/api/pages?populate[sections][populate][blogcard][populate]=image`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const sections = data?.data?.[0]?.sections ?? [];
  return sections.find((s) => s.__component === "sections.blog-section");
}

export default async function BlogSection() {
  const section = await getBlogData();

  if (!section) return null;

  return (
    <section className="blog-section">
      <div className="container">
        <span className="blog-badge">{section.badge}</span>
        <h2>{section.title}</h2>
        <p>{section.subtitle}</p>

        <div className="blog-grid">
          {section.blogcard?.map((blog, index) => {
            const imageUrl = blog.image?.url
              ? `${API_URL}${blog.image.url}`
              : null;

            return (
              <Link key={index} href={blog.link || "#"} className="blog-card">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={blog.title || "Blog image"}
                    width={400}
                    height={250}
                  />
                )}
                <h3>{blog.title}</h3>
              </Link>
            );
          })}
        </div>

        {section.Button && (
          <Link
            href={section.Button.url || "#"}
            className={`view-btn ${section.Button.variant || ""}`}
            target={section.Button.openInNewTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {section.Button.label}
          </Link>
        )}
      </div>
    </section>
  );
}