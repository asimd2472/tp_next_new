import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    image: "/images/iconic-project/Iit dharwad.avif",
    alt: "Iit dharwad",
    name: "Iit dharwad",
    description: "2-3 storey towers",
  },
  {
    image: "/images/iconic-project/Aster hospital hyderabad.avif",
    alt: "Aster hospital hyderabad",
    name: "Aster hospital hyderabad",
    description: "30 storey luxury tower",
  },
  {
    image: "/images/iconic-project/Embassy edge bangaluru.avif",
    alt: "Embassy edge bangaluru",
    name: "Embassy edge bangaluru",
    description: "Three 38 storey towers",
  },
  {
    image: "/images/iconic-project/Hyatt brigade bangalore.avif",
    alt: "Hyatt brigade bangalore",
    name: "Hyatt brigade bangalore",
    description: "Three 38 storey towers",
  },
  {
    image: "/images/iconic-project/Jw mariott thimpu.avif",
    alt: "Jw mariott thimpu",
    name: "Jw mariott thimpu",
    description: "Three 38 storey towers",
  },
  {
    image: "/images/iconic-project/regalium by svasa.avif",
    alt: "Regalium by svasa",
    name: "Regalium by svasa",
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
                  {/* <p>{project.description}</p> */}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="projects__arrows projects__arrows--mobile" aria-label="Project controls mobile">
          <button type="button" aria-label="Previous projects" onClick={() => moveProjects(-1)}>
            <span className="projects__chevron projects__chevron--previous" />
          </button>
          <button type="button" aria-label="Next projects" onClick={() => moveProjects(1)}>
            <span className="projects__chevron projects__chevron--next" />
          </button>
        </div>
      </div>
    </section>
  );
}