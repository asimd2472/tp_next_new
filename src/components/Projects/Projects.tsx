import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    image: "/images/f1_resized.jpg",
    alt: "Contemporary residential towers at Birla Vanya",
    name: "Birla Vanya",
    description: "2-3 storey towers",
  },
  {
    image: "/images/f2.jpg",
    alt: "Residential project at Himalaya Trasea",
    name: "Himalaya Trasea",
    description: "30 storey luxury tower",
  },
  {
    image: "/images/f3.jpg",
    alt: "Residential interiors at Agastya Altezza",
    name: "Agastya Altezza",
    description: "Three 38 storey towers",
  },
];

export default function Projects() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const moveProjects = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const firstCard = viewport?.querySelector<HTMLElement>(".projects__card");

    if (!viewport || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(viewport).getPropertyValue("--projects-gap")) || 10;
    viewport.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="projects__container">
        <div className="projects__heading">
          <div>
            <h2 id="projects-title">Iconic projects</h2>
            <p>Homes and towers across India fitted with Tata Pravesh.</p>
          </div>
          <div className="projects__arrows" aria-label="Project controls">
            <button type="button" aria-label="Previous projects" onClick={() => moveProjects(-1)}>
              <span className="projects__chevron projects__chevron--previous" />
            </button>
            <button type="button" aria-label="Next projects" onClick={() => moveProjects(1)}>
              <span className="projects__chevron projects__chevron--next" />
            </button>
          </div>
        </div>

        <div className="projects__viewport" ref={viewportRef}>
          <div className="projects__track">
            {projects.map((project) => (
              <article className="projects__card" key={project.name}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 33vw, 390px" />
                <div className="projects__copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}