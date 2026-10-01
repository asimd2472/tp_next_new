import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    image: "/images/review1.jpg",
    alt: "Large sliding windows overlooking a green garden",
    name: "Mr. Prakash Mehta",
  },
  {
    image: "/images/review2.jpg",
    alt: "A red Tata Pravesh main door in a home",
    name: "Mrs. Neha Kousik Iqbal",
  },
  {
    image: "/images/review1.jpg",
    alt: "Large sliding windows overlooking a green garden",
    name: "Mr. Prakash Mehta",
  },
  {
    image: "/images/review2.jpg",
    alt: "A red Tata Pravesh main door in a home",
    name: "Mrs. Neha Kousik Iqbal",
  },
  {
    image: "/images/review1.jpg",
    alt: "Large sliding windows overlooking a green garden",
    name: "Mr. Prakash Mehta",
  },
  {
    image: "/images/review2.jpg",
    alt: "A red Tata Pravesh main door in a home",
    name: "Mrs. Neha Kousik Iqbal",
  },
];

export default function WhyChoose() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const moveTestimonials = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const firstCard = viewport?.querySelector<HTMLElement>(".why-choose__card");

    if (!viewport || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(viewport).getPropertyValue("--why-choose-gap")) || 14;
    const maximumScroll = viewport.scrollWidth - viewport.clientWidth;
    const nextScroll = Math.max(0, Math.min(maximumScroll, viewport.scrollLeft + direction * (firstCard.getBoundingClientRect().width + gap)));

    viewport.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  return (
    <section className="why-choose" aria-labelledby="why-choose-title">
      <div className="why-choose__container">
        <div className="why-choose__heading">
          <div className="why-choose__intro">
            <h2 id="why-choose-title">Why homeowners choose Tata Pravesh</h2>
            <p>Trusted by thousands of families across India for better homes, safer spaces and lasting comfort.</p>
          </div>
          <div className="why-choose__arrows" aria-label="Customer stories controls">
            <button type="button" aria-label="Previous customer stories" onClick={() => moveTestimonials(-1)}>
              <span className="why-choose__chevron why-choose__chevron--previous" />
            </button>
            <button type="button" aria-label="Next customer stories" onClick={() => moveTestimonials(1)}>
              <span className="why-choose__chevron why-choose__chevron--next" />
            </button>
          </div>
        </div>

        <div className="why-choose__viewport" ref={viewportRef}>
          <div className="why-choose__track">
            {testimonials.map((testimonial) => (
              <article className="why-choose__card" key={testimonial.name}>
                <Image src={testimonial.image} alt={testimonial.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 900px) 46vw, 30vw" />
                <span className="why-choose__play" aria-hidden="true" />
                <p>{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}