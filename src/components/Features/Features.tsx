import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const features = [
  {
    image: "/images/f1_resized.jpg",
    alt: "A modern living room with a large window",
    title: "Superior noise insulation",
    description: "Advanced soundproofing blocks outside noise and keeps your home calm.",
    href: "/blogs/blog-noise-insulation",
  },
  {
    image: "/images/blog-strength-that-lasts/strength-that-lasts-hero.jpg",
    alt: "A woman beside a modern window",
    title: "Strength That Lasts",
    description: "Keeps rooms comfortable all year and helps reduce energy bills.",
    href: "/blogs/strength-that-lasts",
  },
  {
    image: "/images/blog-ready-for-every-weather/weather-hero.jpg",
    alt: "Ready for Every Weather",
    title: "Ready for Every Weather",
    description: "Our doors and windows are designed to withstand the harshest weather conditions, ensuring your home stays safe and secure.",
    href: "/blogs/ready-for-every-weather",
  },
  {
    image: "/images/custome.jpeg",
    alt: "A modern living room with a large window",
    title: "Superior noise insulation",
    description: "Advanced soundproofing blocks outside noise and keeps your home calm.",
    href: "/blogs/blog-noise-insulation",
  },
  {
    image: "/images/f1.jpeg",
    alt: "A woman beside a modern window",
    title: "Energy efficient",
    description: "Keeps rooms comfortable all year and helps reduce energy bills.",
    href: "/blogs",
  },
  {
    image: "/images/f1.jpeg",
    alt: "A woman beside a modern window",
    title: "Energy efficient",
    description: "Keeps rooms comfortable all year and helps reduce energy bills.",
    href: "/blogs",
  },
  {
    image: "/images/custome.jpeg",
    alt: "A modern living room with a large window",
    title: "Superior noise insulation",
    description: "Advanced soundproofing blocks outside noise and keeps your home calm.",
    href: "/blogs/blog-noise-insulation",
  },
];

export default function Features() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const firstCard = viewport?.querySelector<HTMLElement>(".features__card");

    if (!viewport || !firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = Number.parseFloat(getComputedStyle(viewport).getPropertyValue("--features-gap")) || 16;
    const maximumScroll = viewport.scrollWidth - viewport.clientWidth;
    const nextScroll = Math.max(0, Math.min(maximumScroll, viewport.scrollLeft + direction * (cardWidth + gap)));

    viewport.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  return (
    <section className="features" aria-labelledby="features-title">
      <div className="features__container">
        <div className="features__heading">
          <div>
            <h2 id="features-title">Doors and Windows that do more than look good</h2>
            <p className="features__visually-hidden">Designed for modern Indian homes: more natural light, better ventilation, lasting beauty.</p>
          </div>
          <div className="features__arrows" aria-label="Feature controls">
            <button type="button" aria-label="Previous features" onClick={() => moveCarousel(-1)}>
              <span className="features__chevron features__chevron--previous" />
            </button>
            <button type="button" aria-label="Next features" onClick={() => moveCarousel(1)}>
              <span className="features__chevron features__chevron--next" />
            </button>
          </div>
        </div>

        <div className="features__viewport" ref={viewportRef}>
          <div className="features__grid">
            {features.map((feature, index) => (
              <article className="features__card" key={`${feature.title}-${index}`}>
                <div className="features__image">
                  <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 700px) 42vw, 220px" />
                </div>
                <div className="features__copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <Link className="features__read-more" href={feature.href}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="features__arrows features__arrows--mobile" aria-label="Feature controls mobile">
          <button type="button" aria-label="Previous features" onClick={() => moveCarousel(-1)}>
            <span className="features__chevron features__chevron--previous" />
          </button>
          <button type="button" aria-label="Next features" onClick={() => moveCarousel(1)}>
            <span className="features__chevron features__chevron--next" />
          </button>
        </div>
      </div>
    </section>
  );
}