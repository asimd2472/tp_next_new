import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  {
    type: "video",
    src: "/images/tp-banner-video.mp4",
    image: "/images/tp-banner-video-poster.jpg",
    alt: "A Tata Pravesh smart door in a modern home",
    eyebrow: "Premium doors & windows",
    title: "Beautiful Homes",
    highlight: "Tata Pravesh",
    description: "Premium doors and windows for a safer, smarter and more beautiful tomorrow.",
  },
  // {
  //   type: "image",
  //   src: "/images/banner2.jpg",
  //   image: "/images/banner2.jpg",
  //   alt: "A beautiful Tata Pravesh home interior",
  //   eyebrow: "Thoughtful living",
  //   title: "Modern Spaces",
  //   highlight: "Made Better",
  //   description: "Elegant design, durable performance, and everyday comfort for every corner of your home.",
  // },
  // {
  //   type: "image",
  //   src: "/images/Website-Banner.webp",
  //   image: "/images/Website-Banner.webp",
  //   alt: "A premium Tata Pravesh entrance",
  //   eyebrow: "Smart home upgrades",
  //   title: "A Grand Welcome",
  //   highlight: "Every Day",
  //   description: "Create a statement entry with premium finishes that blend beauty, security, and lasting value.",
  // },
];

export default function Banner() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((current) => (current + 1) % banners.length), 20000);
    return () => window.clearInterval(timer);
  }, []);

  const showBanner = (index: number) => setActiveBanner((index + banners.length) % banners.length);
  const active = banners[activeBanner];

  return (
    <>
      <section className="hero-banner" aria-label="Tata Pravesh banner">
        <Image
          src={active.image}
          alt={active.alt}
          fill
          priority={activeBanner === 0}
          sizes="100vw"
          className="hero-banner__image"
        />
        {active.type === "video" && (
          <video
            key={active.src}
            className="hero-banner__video"
            autoPlay
            muted
            loop
            playsInline
            poster={active.image}
            aria-label={active.alt}
          >
            <source src={active.src} type="video/mp4" />
          </video>
        )}
        <div className="hero-banner__overlay" />
        <div className="hero-banner__content">
          {/* <p className="hero-banner__eyebrow">{active.eyebrow}</p> */}
          <h1>
            {active.title}
            {active.highlight && (
              <>
                <br />
                <span>{active.highlight}</span>
              </>
            )}
          </h1>
          <a href="#products" className="hero-banner__cta">
            Explore Now 
          </a>
        </div>
        <div className="hero-banner__controls" aria-label="Banner pagination">
          {banners.map((banner, index) => (
            <button
              key={banner.src}
              type="button"
              aria-label={`Show banner ${index + 1}`}
              aria-current={activeBanner === index}
              onClick={() => showBanner(index)}
              className={`hero-banner__dot ${activeBanner === index ? "hero-banner__dot--active" : ""}`}
            />
          ))}
        </div>
      </section>
      {/* <section id="products" className="product-strip">
        <p>Want to know more about our products?</p>
        <a href="#home">
          Enquire Now
        </a>
      </section> */}
    </>
  );
}