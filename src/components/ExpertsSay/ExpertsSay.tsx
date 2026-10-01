import Image from "next/image";
import { useRef } from "react";

const stories = [
  {
    image: "/images/expert1.jpg",
    alt: "A woman beside a large window",
    name: "Mr. Krsna Mehta",
  },
  {
    image: "/images/expert.jpg",
    alt: "A red Tata Pravesh door",
    name: "Ms. Riddhi Khosla Jalan",
  },
  {
    image: "/images/expert2.jpg",
    alt: "Sliding windows overlooking a garden",
    name: "Ms. Rohina",
  },
  {
    image: "/images/expert3.jpg",
    alt: "Contemporary home with Tata Pravesh windows",
    name: "Ms. Binita Gandhi",
  },
  {
    image: "/images/expert.jpg",
    alt: "A red Tata Pravesh door",
    name: "Ms. Riddhi Khosla Jalan",
  },
  {
    image: "/images/expert2.jpg",
    alt: "Sliding windows overlooking a garden",
    name: "Ms. Rohina",
  },
  {
    image: "/images/expert3.jpg",
    alt: "Contemporary home with Tata Pravesh windows",
    name: "Ms. Binita Gandhi",
  },
];

export default function ExpertsSay() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const moveStories = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const firstCard = viewport?.querySelector<HTMLElement>(".experts-say__card");

    if (!viewport || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(viewport).getPropertyValue("--experts-say-gap")) || 14;
    const maximumScroll = viewport.scrollWidth - viewport.clientWidth;
    const nextScroll = Math.max(0, Math.min(maximumScroll, viewport.scrollLeft + direction * (firstCard.getBoundingClientRect().width + gap)));

    viewport.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  return (
    <section className="experts-say" aria-labelledby="experts-say-title">
      <div className="experts-say__container">
        <div className="experts-say__heading">
          <h2 id="experts-say-title">Tata Pravesh in the spotlight</h2>
          <div className="experts-say__arrows" aria-label="Customer stories controls">
            <button type="button" aria-label="Previous customer stories" onClick={() => moveStories(-1)}>
              <span className="experts-say__chevron experts-say__chevron--previous" />
            </button>
            <button type="button" aria-label="Next customer stories" onClick={() => moveStories(1)}>
              <span className="experts-say__chevron experts-say__chevron--next" />
            </button>
          </div>
        </div>

        <div className="experts-say__viewport" ref={viewportRef}>
          <div className="experts-say__track">
            {stories.map((story) => (
              <article className="experts-say__card" key={story.name}>
                <Image src={story.image} alt={story.alt} fill sizes="(max-width: 479px) 87vw, (max-width: 900px) 43vw, 22vw" />
                <span className="experts-say__play" aria-hidden="true" />
                <p>{story.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}