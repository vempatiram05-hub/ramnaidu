"use client";
import { useState, useEffect, useRef } from "react";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function Techstack() {
  const [section, setSection] = useState(null);
  const trackRef = useRef(null);

  useEffect(() => {
    fetch(`${API_URL}/api/pages?populate[sections][populate]=techitem`)
      .then((res) => res.json())
      .then((data) => {
        const sections = data?.data?.[0]?.sections ?? [];
        const tech = sections.find((s) => s.__component === "sections.tech-stack");
        setSection(tech);
      });
  }, []);

  if (!section) return null;

  // Duplicate items for infinite loop effect
  const items = [...(section.techitem || []), ...(section.techitem || [])];

  return (
    <section className="tech-stack">
      <span className="tech-badge">{section.badge}</span>
      <h2 className="tech-title">{section.title}</h2>
      <p className="tech-subtitle">{section.subtitle}</p>

      <div className="tech-carousel">
        <div className="tech-track" ref={trackRef}>
          {items.map((tech, index) => (
            <div key={index} className="tech-card">
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}