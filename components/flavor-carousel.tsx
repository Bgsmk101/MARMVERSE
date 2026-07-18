"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { ArrowIcon } from "@/components/icons";
import { ProductPack } from "@/components/product-pack";
import { products } from "@/lib/products";

function CarouselArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg className={direction === "previous" ? "is-previous" : ""} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function FlavorCarousel() {
  const railRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  function updateActiveSlide() {
    const rail = railRef.current;
    if (!rail) return;

    const railCenter = rail.scrollLeft + rail.clientWidth / 2;
    const slides = Array.from(rail.children) as HTMLElement[];
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - railCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  }

  function handleScroll() {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(updateActiveSlide);
  }

  function scrollToSlide(index: number) {
    const rail = railRef.current;
    const slide = rail?.children.item(index) as HTMLElement | null;
    if (!rail || !slide) return;

    rail.scrollTo({
      left: slide.offsetLeft - (rail.clientWidth - slide.offsetWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    setActiveIndex(index);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToSlide(Math.max(0, activeIndex - 1));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToSlide(Math.min(products.length - 1, activeIndex + 1));
    }
  }

  return (
    <div className="flavor-carousel" role="region" aria-roledescription="карусель" aria-label="Пять вкусов MARMVERSE">
      <div
        className="flavor-carousel-rail"
        ref={railRef}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {products.map((product, index) => (
          <article
            className="flavor-slide"
            key={product.slug}
            style={{
              "--slide-primary": product.primary,
              "--slide-secondary": product.secondary,
              "--slide-ink": product.ink,
            } as CSSProperties}
            data-number={product.number}
            aria-label={`${index + 1} из ${products.length}: ${product.displayName}`}
          >
            <div className="flavor-slide-copy">
              <div className="flavor-slide-meta">
                <span>{product.number}</span>
                <small>{product.category}</small>
              </div>
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
              <div className="flavor-slide-notes" aria-label="Вкусовые ноты">
                {product.notes.slice(0, 3).map((note) => <span key={note}>{note}</span>)}
              </div>
              <Link href={`/products/${product.slug}/`}>Посмотреть вкус <ArrowIcon /></Link>
            </div>

            <div className="flavor-slide-visual">
              <span className="flavor-orbit" aria-hidden="true" />
              <div className="flavor-slide-pack">
                <ProductPack product={product} weight={index % 3 === 0 ? 50 : index % 3 === 1 ? 100 : 150} compact />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flavor-carousel-controls">
        <p aria-live="polite"><strong>{String(activeIndex + 1).padStart(2, "0")}</strong><span> / {String(products.length).padStart(2, "0")}</span></p>

        <div className="flavor-carousel-dots" aria-label="Выбор вкуса">
          {products.map((product, index) => (
            <button
              className={index === activeIndex ? "is-active" : ""}
              key={product.slug}
              type="button"
              aria-label={`Показать ${product.displayName}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => scrollToSlide(index)}
            ><span style={{ background: product.primary }} /></button>
          ))}
        </div>

        <div className="flavor-carousel-buttons">
          <button type="button" onClick={() => scrollToSlide(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Предыдущий вкус">
            <CarouselArrow direction="previous" />
          </button>
          <button type="button" onClick={() => scrollToSlide(activeIndex + 1)} disabled={activeIndex === products.length - 1} aria-label="Следующий вкус">
            <CarouselArrow direction="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
