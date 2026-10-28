import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import api from "@/config/api.config";
import Link from "next/link";

interface BlogPost {
  id: number;
  image: string | null;
  alt: string;
  category: string | null;
  date: string | null;
  title: string;
  summary: string | null;
}

interface ApiBlog {
  id: number;
  title: string;
  category: string | null;
  excerpt: string | null;
  content: string | null;
  featured_image_url: string | null;
  published_at: string | null;
}

interface BlogApiResponse {
  success: boolean;
  data: ApiBlog[];
}

export default function Blogs() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get<BlogApiResponse>("blogs", {
          params: { page: 1, per_page: 3 },
        });
        const apiPosts = response.data.success && Array.isArray(response.data.data)
          ? response.data.data
          : [];

        setPosts(apiPosts.map((post) => {
          const publishedDate = post.published_at ? new Date(post.published_at) : null;
          const date = publishedDate && !Number.isNaN(publishedDate.getTime())
            ? publishedDate.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
            : null;

          return {
            id: post.id,
            image: post.featured_image_url,
            alt: post.title,
            category: post.category,
            date,
            title: post.title,
            summary: post.excerpt || post.content,
          };
        }));
      } catch (error) {
        console.error("Unable to load blogs.", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchBlogs();
  }, []);

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

  const previewPost = posts[posts.length - 1];

  return (
    <section className="blogs" aria-labelledby="blogs-title">
      <div className="blogs__container">
        <header className="blogs__heading">
          <div>
            <h2 id="blogs-title">Latest insights</h2>
            <p>Practical advice on doors, windows, interiors and modern living.</p>
          </div>
          <Link className="blogs__all-link" href="/blogs">View all blogs</Link> 
        </header>

        <div className="blogs__grid" ref={gridRef} aria-busy={isLoading}>
          {isLoading ? (
            <>
              <article className="blogs__card blogs__card--mobile-preview blogs__skeleton-card" aria-hidden="true">
                <div className="blogs__skeleton blogs__skeleton-image" />
                <div className="blogs__skeleton blogs__skeleton-meta" />
                <div className="blogs__skeleton blogs__skeleton-title" />
                <div className="blogs__skeleton blogs__skeleton-summary" />
              </article>
              {Array.from({ length: 3 }, (_, index) => (
                <article className="blogs__card blogs__skeleton-card" key={index} aria-hidden="true">
                  <div className="blogs__skeleton blogs__skeleton-image" />
                  <div className="blogs__skeleton blogs__skeleton-meta" />
                  <div className="blogs__skeleton blogs__skeleton-title" />
                  <div className="blogs__skeleton blogs__skeleton-summary" />
                </article>
              ))}
            </>
          ) : (
            <>
              {previewPost && (
                <article className="blogs__card blogs__card--mobile-preview" aria-hidden="true">
                  <div className="blogs__image">
                    {previewPost.image && (
                      <Image src={previewPost.image} alt="" fill sizes="(max-width: 479px) 78vw, 0px" />
                    )}
                  </div>
                  {(previewPost.category || previewPost.date) && (
                    <p className="blogs__meta">
                      {[previewPost.category, previewPost.date].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  <h3>{previewPost.title}</h3>
                  {previewPost.summary && (
                    <p className="blogs__summary">{previewPost.summary}</p>
                  )}
                </article>
              )}
              {posts.map((post) => {
                const meta = [post.category, post.date].filter(Boolean).join(" · ");

                return (
                  <article className="blogs__card" key={post.id}>
                    <div className="blogs__image">
                      {post.image && (
                        <Image src={post.image} alt={post.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1023px) 44vw, 30vw" />
                      )}
                    </div>
                    {meta && <p className="blogs__meta">{meta}</p>}
                    <h3>{post.title}</h3>
                    {post.summary && <p className="blogs__summary">{post.summary}</p>}
                  </article>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}