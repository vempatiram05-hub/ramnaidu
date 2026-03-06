"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function Industries() {
  const [section, setSection] = useState(null);
  const trackRef = useRef(null);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/pages?populate=deep`)
      .then((res) => res.json())
      .then((json) => {
        const sections = json?.data?.[0]?.sections ?? [];
        setSection(sections.find((s) => s.__component === "sections.industries"));
      });
  }, []);

  const scrollLeft = () => {
    trackRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  if (!section) return null;

  const cards = section.industryCard || [];

  return (
    <section className="industries">
      <div className="industries-header">
        <span className="industries-badge">{section.badge}</span>
        <h2>{section.title}</h2>
        <p className="industries-description">
          {section.description?.map((block, index) =>
            block.children?.map((child, i) => (
              <span key={`${index}-${i}`}>{child.text}</span>
            ))
          )}
        </p>
      </div>

      <div className="industries-slider-wrapper">
        <button className="ind-arrow ind-arrow-left" onClick={scrollLeft}>&#8592;</button>

        <div className="industries-cards" ref={trackRef}>
          {cards.map((card, index) => (
            <div className="industry-card" key={card.id ?? index}>
              <div className="industry-icon-wrapper">
                {card.icon?.url && (
                  <img
                    src={`${STRAPI_URL}${card.icon.url}`}
                    alt={card.title}
                    width={50}
                    height={50}
                    className="industry-icon"
                  />
                )}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <button className="ind-arrow ind-arrow-right" onClick={scrollRight}>&#8594;</button>
      </div>
    </section>
  );
}