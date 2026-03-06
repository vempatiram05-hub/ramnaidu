"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function HomeSlider() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?populate[sections][on][sections.home-slider][populate][homeSlider][populate]=image`
    )
      .then((res) => res.json())
      .then((data) => {
        const sections = data.data?.[0]?.sections || [];
        const sliderSection = sections.find((s) => s.__component === "sections.home-slider");
        setSlides(sliderSection?.homeSlider || []);
      });
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
  }, [slides.length]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    startTimer();
    return () => stopTimer();
  }, [slides, startTimer, stopTimer]);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startTimer();
  };

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    startTimer();
  };

  if (!slides.length) return null;

  return (
    <div
      className="slider"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {slides.map((slide, index) => {
        const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}${slide.image?.url}`;
        return (
          <div key={index} className={`slide ${index === current ? "active" : ""}`}>
            <Image
              src={url}
              alt={slide.title || `Slide ${index + 1}`}
              width={1920}
              height={600}
              className="slide-image"
            />
            <div className="overlay">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              {slide.Button && (
                <a href={slide.buttonlink} className="slide-button">
                  {slide.Button}
                </a>
              )}
            </div>
          </div>
        );
      })}

      <button className="arroww arrow-left" onClick={prev}>&#8592;</button>
      <button className="arroww arrow-right" onClick={next}>&#8594;</button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => { setCurrent(index); startTimer(); }}
            className={`dot ${index === current ? "activeDot" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}