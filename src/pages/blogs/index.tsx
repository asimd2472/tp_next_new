import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/config/api.config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string | null;
  excerpt: string | null;
  content: string | null;
  featured_image_url: string | null;
  published_at: string | null;
}

interface BlogPagination {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  from: number | null;
  to: number | null;
  next_page_url: string | null;
  prev_page_url: string | null;
}

interface BlogApiResponse {
  success: boolean;
  data: BlogPost[];
  pagination?: BlogPagination;
}

const stats = [
  { value: "30+", label: "Design inspirations" },
  { value: "5 yrs", label: "Product warranty" },
  { value: "1,200+", label: "Homes upgraded" },
  { value: "24/7", label: "Expert support" },
];

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [pagination, setPagination] = useState<BlogPagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    let isCurrentRequest = true;

    const fetchBlogs = async () => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await api.get<BlogApiResponse>("blogs", {
          params: { page: currentPage, per_page: 6 },
        });

        if (!isCurrentRequest) return;
        if (!response.data.success || !Array.isArray(response.data.data)) {
          throw new Error("The blog API returned an invalid response.");
        }

        const pageInfo = response.data.pagination;
        setPosts(response.data.data);
        setPagination(pageInfo ?? {
          current_page: currentPage,
          per_page: 6,
          total: response.data.data.length,
          last_page: response.data.data.length > 0 ? currentPage : 0,
          from: response.data.data.length > 0 ? 1 : null,
          to: response.data.data.length > 0 ? response.data.data.length : null,
          next_page_url: null,
          prev_page_url: null,
        });
        setActiveFilter("All");
      } catch (error) {
        if (!isCurrentRequest) return;
        console.error("Unable to load blog posts.", error);
        setPosts([]);
        setPagination(null);
        setErrorMessage("We couldn’t load the articles. Please try again.");
      } finally {
        if (isCurrentRequest) setIsLoading(false);
      }
    };

    void fetchBlogs();
    return () => {
      isCurrentRequest = false;
    };
  }, [currentPage]);

  const categories = Array.from(new Set(posts.flatMap((post) => post.category ? [post.category] : [])));
  const visiblePosts = activeFilter === "All"
    ? posts
    : posts.filter((post) => post.category === activeFilter);
  const featuredPost = visiblePosts[0] ?? null;
  const pageCount = pagination?.last_page ?? 0;
  const activePage = pagination?.current_page ?? currentPage;
  const pageNumbers = Array.from(new Set([
    1,
    pageCount,
    activePage - 1,
    activePage,
    activePage + 1,
  ]))
    .filter((page) => page > 0 && page <= pageCount)
    .sort((left, right) => left - right);
  const formatDate = (date: string | null) => {
    if (!date) return "";
    const parsedDate = new Date(date);
    return Number.isNaN(parsedDate.getTime())
      ? ""
      : parsedDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
  };

  return (
    <>
      <Head>
        <title>Blogs | Tata Pravesh</title>
        <meta
          name="description"
          content="Explore Tata Pravesh blogs covering modern doors, windows, home design ideas, and maintenance guidance."
        />
      </Head>

      <Header />

      <main className="blog-list-page">
        <section className="blog-list-page__hero">
          <div className="blog-list-page__container blog-list-page__hero-inner">
            <div className="blog-list-page__hero-copy">
              <span className="blog-list-page__eyebrow">Tata Pravesh Journal</span>
              <h1>Fresh ideas for homes that feel elegant, secure and truly lived in.</h1>
              <p className="blog-list-page__lead">
                Discover styling inspiration, practical how-to advice and expert perspectives on premium doors, windows and modern living spaces.
              </p>

              <div className="blog-list-page__actions">
                <Link href="#latest-articles" className="blog-list-page__button blog-list-page__button--primary">
                  Explore articles
                </Link>
                <Link href="/store-locator" className="blog-list-page__button blog-list-page__button--secondary">
                  Book a demo
                </Link>
              </div>

              <ul className="blog-list-page__feature-points" aria-label="Blog benefits">
                <li>Expert guidance</li>
                <li>Design-led ideas</li>
                <li>Maintenance tips</li>
              </ul>

              <div className="blog-list-page__stats" aria-label="Blog statistics">
                {stats.map((stat) => (
                  <div className="blog-list-page__stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {(isLoading || featuredPost) && (
              <div className="blog-list-page__hero-visual" aria-label="Featured blog preview card" aria-busy={isLoading}>
                {isLoading ? (
                  <div className="blog-list-page__visual-frame blog-list-page__skeleton" aria-hidden="true" />
                ) : featuredPost ? (
                  <>
                    <div className="blog-list-page__spotlight-tag">Featured story</div>
                    <div className="blog-list-page__visual-frame">
                      {featuredPost.featured_image_url && (
                        <Image
                          src={featuredPost.featured_image_url}
                          alt={featuredPost.title}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 44vw"
                        />
                      )}
                    </div>

                    <div className="blog-list-page__floating-card">
                      <span className="blog-list-page__floating-label">Featured article</span>
                      {featuredPost.category && <strong>{featuredPost.category}</strong>}
                      <p>{featuredPost.title}</p>
                    </div>

                    <div className="blog-list-page__visual-caption">
                      {featuredPost.category && <span>{featuredPost.category}</span>}
                      <h2>{featuredPost.title}</h2>
                    </div>
                  </>
                ) : null}
              </div>
            )}
          </div>
        </section>

        <section className="blog-list-page__section" id="latest-articles">
          <div className="blog-list-page__container">
            <div className="blog-list-page__toolbar">
              <div>
                <p className="blog-list-page__section-label">Latest articles</p>
                <h2>Fresh ideas for smarter homes</h2>
              </div>

              <div className="blog-list-page__filters" aria-label="Blog categories">
                {["All", ...categories].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={
                      activeFilter === filter
                        ? "blog-list-page__filter blog-list-page__filter--active"
                        : "blog-list-page__filter"
                    }
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {isLoading ? (
              <article className="blog-list-page__feature-card blog-list-page__skeleton-card" aria-hidden="true">
                <div className="blog-list-page__feature-image blog-list-page__skeleton" />
                <div className="blog-list-page__feature-copy">
                  <div className="blog-list-page__skeleton blog-list-page__skeleton-meta" />
                  <div className="blog-list-page__skeleton blog-list-page__skeleton-heading" />
                  <div className="blog-list-page__skeleton blog-list-page__skeleton-copy" />
                </div>
              </article>
            ) : featuredPost ? (
              <article className="blog-list-page__feature-card" aria-label="Featured blog article">
                <div className="blog-list-page__feature-image">
                  {featuredPost.featured_image_url && (
                    <Image
                      src={featuredPost.featured_image_url}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 52vw"
                    />
                  )}
                </div>

                <div className="blog-list-page__feature-copy">
                  <span className="blog-list-page__meta">
                    {[featuredPost.category, formatDate(featuredPost.published_at)].filter(Boolean).join(" · ")}
                  </span>
                  <h3>{featuredPost.title}</h3>
                  {(featuredPost.excerpt || featuredPost.content) && (
                    <p>{featuredPost.excerpt || featuredPost.content}</p>
                  )}
                  <div className="blog-list-page__feature-footer">
                    <span>{formatDate(featuredPost.published_at)}</span>
                    <Link href="#">Read article</Link>
                  </div>
                </div>
              </article>
            ) : null}

            <div className="blog-list-page__grid">
              {isLoading ? Array.from({ length: 3 }, (_, index) => (
                <article className="blog-list-page__card blog-list-page__skeleton-card" key={`skeleton-${index}`} aria-hidden="true">
                  <div className="blog-list-page__card-image blog-list-page__skeleton" />
                  <div className="blog-list-page__card-body">
                    <div className="blog-list-page__skeleton blog-list-page__skeleton-meta" />
                    <div className="blog-list-page__skeleton blog-list-page__skeleton-heading" />
                    <div className="blog-list-page__skeleton blog-list-page__skeleton-copy" />
                  </div>
                </article>
              )) : visiblePosts.slice(1).map((post) => (
                <article className="blog-list-page__card" key={post.id}>
                  <div className="blog-list-page__card-image">
                    {post.featured_image_url && (
                      <Image src={post.featured_image_url} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                    )}
                  </div>
                  <div className="blog-list-page__card-body">
                    <div className="blog-list-page__card-topline">
                      <span>{post.category || "Blog"}</span>
                      <span>{formatDate(post.published_at)}</span>
                    </div>
                    <h3>{post.title}</h3>
                    {(post.excerpt || post.content) && <p>{post.excerpt || post.content}</p>}
                    <div className="blog-list-page__card-footer">
                      <span>{formatDate(post.published_at)}</span>
                      <Link href="#">Read more</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {!isLoading && errorMessage && (
              <p className="blog-list-page__status" role="alert">{errorMessage}</p>
            )}
            {!isLoading && !errorMessage && visiblePosts.length === 0 && (
              <p className="blog-list-page__status">No articles found.</p>
            )}

            {!isLoading && !errorMessage && pageCount > 1 && (
              <nav className="blog-list-page__pagination" aria-label="Blog pagination">
                <button
                  type="button"
                  className="blog-list-page__page-button"
                  onClick={() => setCurrentPage(activePage - 1)}
                  disabled={activePage <= 1}
                >
                  Previous
                </button>
                {pageNumbers.map((page, index) => (
                  <span className="blog-list-page__page-item" key={page}>
                    {index > 0 && page - pageNumbers[index - 1] > 1 && <span aria-hidden="true">…</span>}
                    <button
                      type="button"
                      className={page === activePage
                        ? "blog-list-page__page-button blog-list-page__page-button--active"
                        : "blog-list-page__page-button"}
                      onClick={() => setCurrentPage(page)}
                      aria-current={page === activePage ? "page" : undefined}
                    >
                      {page}
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  className="blog-list-page__page-button"
                  onClick={() => setCurrentPage(activePage + 1)}
                  disabled={activePage >= pageCount}
                >
                  Next
                </button>
              </nav>
            )}
          </div>
        </section>

        <section className="blog-list-page__cta-section">
          <div className="blog-list-page__container">
            <div className="blog-list-page__newsletter">
              <div>
                <p className="blog-list-page__section-label blog-list-page__section-label--light">Need a personalised recommendation?</p>
                <h2>Speak with our design experts.</h2>
              </div>

              <div className="blog-list-page__newsletter-actions">
                <Link href="/store-locator" className="blog-list-page__button blog-list-page__button--primary">
                  Find a store
                </Link>
                <Link href="#" className="blog-list-page__button blog-list-page__button--ghost">
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
