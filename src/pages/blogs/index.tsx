import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const blogFilters = ["All", "Design Ideas", "Doors", "Windows", "Interiors", "Maintenance"];

const posts = [
  {
    id: 1,
    category: "Design Ideas",
    date: "12 Apr 2026",
    title: "How to choose the perfect front door for a luxury home",
    summary:
      "From curb appeal to security and long-term durability, discover what truly matters when selecting a statement entrance.",
    duration: "6 min read",
    image: "/images/door2.jpg",
    alt: "Modern luxury home entrance door",
  },
  {
    id: 2,
    category: "Windows",
    date: "02 Apr 2026",
    title: "Why large windows can completely transform the feel of a room",
    summary:
      "Natural light, airflow and visual openness work together to make spaces feel calmer, brighter and more welcoming.",
    duration: "5 min read",
    image: "/images/f1_resized.jpg",
    alt: "Large windows in a bright modern home",
  },
  {
    id: 3,
    category: "Doors",
    date: "27 Mar 2026",
    title: "Steel doors versus wood: what gives the better long-term value?",
    summary:
      "A practical comparison of strength, maintenance and visual appeal for modern homes across changing weather conditions.",
    duration: "7 min read",
    image: "/images/door1.jpg",
    alt: "Steel front door with premium finish",
  },
  {
    id: 4,
    category: "Maintenance",
    date: "18 Mar 2026",
    title: "Simple care routines that keep your doors and windows looking new",
    summary:
      "A low-effort maintenance plan for cleaner finishes, smoother operation and better long-term performance.",
    duration: "4 min read",
    image: "/images/f2.jpg",
    alt: "Clean modern home interior with window natural light",
  },
  {
    id: 5,
    category: "Interiors",
    date: "06 Mar 2026",
    title: "Interior styling ideas that pair beautifully with premium doors",
    summary:
      "Learn how finish, tones and architecture can help bring warmth and consistency into every room.",
    duration: "5 min read",
    image: "/images/f3.jpg",
    alt: "Stylish contemporary interior design",
  },
  {
    id: 6,
    category: "Doors",
    date: "01 Mar 2026",
    title: "French doors for balconies, patios and open-plan living",
    summary:
      "See how full-height glass openings improve light, airflow and the connection between indoor and outdoor spaces.",
    duration: "8 min read",
    image: "/images/french-door/patio-balcony.svg",
    alt: "French door patio opening illustration",
  },
];

const stats = [
  { value: "30+", label: "Design inspirations" },
  { value: "5 yrs", label: "Product warranty" },
  { value: "1,200+", label: "Homes upgraded" },
  { value: "24/7", label: "Expert support" },
];

export default function BlogListPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visiblePosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.category === activeFilter || activeFilter === "Design Ideas" && post.category === "Design Ideas");

  const featuredPost = visiblePosts[0] ?? posts[0];

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

            <div className="blog-list-page__hero-visual" aria-label="Featured blog preview card">
              <div className="blog-list-page__spotlight-tag">Featured story</div>
              <div className="blog-list-page__visual-frame">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 44vw"
                />
              </div>

              <div className="blog-list-page__floating-card">
                <span className="blog-list-page__floating-label">Popular now</span>
                <strong>{featuredPost.category}</strong>
                <p>{featuredPost.title}</p>
              </div>

              <div className="blog-list-page__visual-caption">
                <span>{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
              </div>
            </div>
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
                {blogFilters.map((filter) => (
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

            <article className="blog-list-page__feature-card" aria-label="Featured blog article">
              <div className="blog-list-page__feature-image">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 52vw"
                />
              </div>

              <div className="blog-list-page__feature-copy">
                <span className="blog-list-page__meta">{featuredPost.category} · {featuredPost.date}</span>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.summary}</p>
                <div className="blog-list-page__feature-footer">
                  <span>{featuredPost.duration}</span>
                  <Link href="#">Read article</Link>
                </div>
              </div>
            </article>

            <div className="blog-list-page__grid">
              {visiblePosts.map((post) => (
                <article className="blog-list-page__card" key={post.id}>
                  <div className="blog-list-page__card-image">
                    <Image src={post.image} alt={post.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="blog-list-page__card-body">
                    <div className="blog-list-page__card-topline">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <div className="blog-list-page__card-footer">
                      <span>{post.duration}</span>
                      <Link href="#">Read more</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
