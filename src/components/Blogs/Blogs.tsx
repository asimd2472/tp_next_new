import Image from "next/image";
import { useEffect, useRef } from "react";

const posts = [
  {
    image: "/images/door1.jpg",
    alt: "A red entrance door in a modern home",
    category: "Windows",
    date: "1 Sep 2025",
    title: "How to choose the right windows for a modern home",
    summary: "Key factors like material, style and energy efficiency.",
  },
  {
    image: "/images/f1_resized.jpg",
    alt: "Large windows overlooking a garden",
    category: "Doors",
    date: "12 Sep 2025",
    title: "5 ways premium doors transform your entrance",
    summary: "Better curb appeal, security and lasting value.",
  },
  {
    image: "/images/f2.jpg",
    alt: "Natural light entering a room through a large window",
    category: "Interiors",
    date: "26 Sep 2025",
    title: "Natural light: designing brighter, more comfortable spaces",
    summary: "How daylight improves mood and productivity.",
  },
];

export default function Blogs() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const mobileQuery = window.matchMedia("(max-width: 479px)");
    const alignInitialCard = (isMobile: boolean) => {
      grid.scrollLeft = 0;
      if (!isMobile) return;

      const firstPost = grid.querySelectorAll<HTMLElement>(".blogs__card")[1];
      if (!firstPost) return;

      const cardLeft = firstPost.getBoundingClientRect().left - grid.getBoundingClientRect().left;
      grid.scrollLeft += cardLeft - (grid.clientWidth - firstPost.clientWidth) / 2;
    };

    const handleBreakpointChange = (event: MediaQueryListEvent) => alignInitialCard(event.matches);

    alignInitialCard(mobileQuery.matches);
    mobileQuery.addEventListener("change", handleBreakpointChange);

    return () => mobileQuery.removeEventListener("change", handleBreakpointChange);
  }, []);

  return (
    <section className="blogs" aria-labelledby="blogs-title">
      <div className="blogs__container">
        <header className="blogs__heading">
          <div>
            <h2 id="blogs-title">Latest insights</h2>
            <p>Practical advice on doors, windows, interiors and modern living.</p>
          </div>
          <a className="blogs__all-link" href="#blogs-title">View all blogs</a>
        </header>

        <div className="blogs__grid" ref={gridRef}>
          <article className="blogs__card blogs__card--mobile-preview" aria-hidden="true">
            <div className="blogs__image">
              <Image src={posts[posts.length - 1].image} alt="" fill sizes="(max-width: 479px) 78vw, 0px" />
            </div>
            <p className="blogs__meta">{posts[posts.length - 1].category} · {posts[posts.length - 1].date}</p>
            <h3>{posts[posts.length - 1].title}</h3>
            <p className="blogs__summary">{posts[posts.length - 1].summary}</p>
          </article>
          {posts.map((post) => (
            <article className="blogs__card" key={post.title}>
              <div className="blogs__image">
                <Image src={post.image} alt={post.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1023px) 44vw, 30vw" />
              </div>
              <p className="blogs__meta">{post.category} · {post.date}</p>
              <h3>{post.title}</h3>
              <p className="blogs__summary">{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}