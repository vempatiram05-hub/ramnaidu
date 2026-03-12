"use client";
import { useState, useEffect } from "react";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

export default function CybersecurrityContact() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `${STRAPI_URL}/api/cybersecurrity-service-page?populate[sections][on][sections.cybersecurritycontact][populate]=*`,
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
        const section = sections.find(
          (s) => s.__component === "sections.cybersecurritycontact"
        );
        setData(section || null);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error.message}</div>;
  if (!data)   return null;

  const { title, Button, buttonlink } = data;

  return (
    <section className="contact">
      <div className="contact__bg" aria-hidden="true" />
      <div className="contact__particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="contact__particle" />
        ))}
      </div>

      <div className="contact__container">
        <div className="contact__badge">Get Protected Today</div>
        <h2 className="contact__title">{title}</h2>
        <p className="contact__sub">
          Our security experts are ready to assess your vulnerabilities and build a robust defense strategy.
        </p>
        <a href={buttonlink} className="contact__btn">
          {Button}
          <span className="contact__arrow">→</span>
        </a>
      </div>
    </section>
  );
}