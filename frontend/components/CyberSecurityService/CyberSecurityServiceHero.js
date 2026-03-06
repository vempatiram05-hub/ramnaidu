"use client";
import { useState, useEffect } from "react";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

export default function CybersecurityServiceHero() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `${STRAPI_URL}/api/cybersecurrity-service-page?populate[sections][populate]=*`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        const sections = json.data?.sections || [];
        const hero = sections.find(
          (s) => s.__component === "sections.cybersecurrity-service-hero"
        );
        setData(hero || null);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error.message}</div>;
  if (!data)   return null;

  const {
    title,
    description,
    badge,
    primarybutton,
    primarybuttonurl,
    seconadrybutton,
    seconadrybuttonurl,
    image,
  } = data;

  return (
    <section className="hero-cyber">
      <div className="hero-cyber__bg" aria-hidden="true" />
      <div className="hero-cyber__grid-lines" aria-hidden="true" />

      <div className="hero-cyber__container">
        <div className="hero-cyber__text">
          {badge && <p className="hero-cyber__badge">{badge}</p>}
          <h1 className="hero-cyber__title">{title}</h1>
          <p className="hero-cyber__description">{description}</p>
          <div className="hero-cyber__buttons">
            {primarybutton && (
              <a href={primarybuttonurl} className="hero-cyber__btn-primary">
                {primarybutton}
              </a>
            )}
            {seconadrybutton && (
              <a href={seconadrybuttonurl} className="hero-cyber__btn-secondary">
                {seconadrybutton}
              </a>
            )}
          </div>
        </div>

        {image && (
          <div className="hero-cyber__image-wrap">
            <div className="hero-cyber__glow" aria-hidden="true" />
            <img
              src={`${STRAPI_URL}${image.url}`}
              alt={image.alternativeText || title}
              width={image.width}
              height={image.height}
              className="hero-cyber__image"
            />
          </div>
        )}
      </div>
    </section>
  );
}