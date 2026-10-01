import Image from "next/image";
import { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const socialVideos = [
  {
    embedUrl: "https://www.youtube-nocookie.com/embed/TjaIvZ1LIG8?autoplay=1&playsinline=1",
    platform: "YouTube Shorts",
  },
  {
    embedUrl: `https://www.youtube-nocookie.com/embed/VSdqQky7hoY?autoplay=1&playsinline=1`,
    platform: "YouTube Shorts",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DbnCeLCIbzc/embed",
    platform: "Instagram Reel",
  },
];

const stories = [
  {
    image: "/images/expert1.jpg",
    alt: "A woman beside a large window",
    name: "Mr. Krsna Mehta",
    video: socialVideos[0],
  },
  {
    image: "/images/expert.jpg",
    alt: "A red Tata Pravesh door",
    name: "Ms. Riddhi Khosla Jalan",
    video: socialVideos[1],
  },
  {
    image: "/images/expert2.jpg",
    alt: "Sliding windows overlooking a garden",
    name: "Ms. Rohina",
    video: socialVideos[0],
  },
  {
    image: "/images/expert3.jpg",
    alt: "Contemporary home with Tata Pravesh windows",
    name: "Ms. Binita Gandhi",
    video: socialVideos[1],
  },
  {
    image: "/images/expert.jpg",
    alt: "A red Tata Pravesh door",
    name: "Ms. Riddhi Khosla Jalan",
    video: socialVideos[1],
  },
  {
    image: "/images/expert2.jpg",
    alt: "Sliding windows overlooking a garden",
    name: "Ms. Rohina",
    video: socialVideos[0],
  },
  {
    image: "/images/expert3.jpg",
    alt: "Contemporary home with Tata Pravesh windows",
    name: "Ms. Binita Gandhi",
    video: socialVideos[0],
  },
];

export default function ExpertsSay() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

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
            {stories.map((story, index) => (
              <article className="experts-say__card" key={`${story.name}-${index}`}>
                {activeStoryIndex === index ? (
                  <div className="experts-say__video">
                    <iframe
                      src={story.video.embedUrl}
                      title={`${story.video.platform} shared by ${story.name}`}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      onLoad={() => setIsVideoLoading(false)}
                    />
                    {isVideoLoading && (
                      <div className="experts-say__video-loader" role="status">
                        <span className="experts-say__spinner" aria-hidden="true" />
                        <span>Loading video</span>
                      </div>
                    )}
                    <button
                      type="button"
                      aria-label="Close video"
                      onClick={() => {
                        setActiveStoryIndex(null);
                        setIsVideoLoading(false);
                      }}
                    >
                      <FaXmark aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="experts-say__media-button"
                    aria-label={`Play ${story.video.platform} from ${story.name}`}
                    onClick={() => {
                      setIsVideoLoading(true);
                      setActiveStoryIndex(index);
                    }}
                  >
                    <Image src={story.image} alt={story.alt} fill sizes="(max-width: 479px) 87vw, (max-width: 900px) 43vw, 22vw" />
                    <span className="experts-say__play" aria-hidden="true" />
                  </button>
                )}
                {activeStoryIndex !== index && <p>{story.name}</p>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}