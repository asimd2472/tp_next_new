import Footer from "@/components/Footer";
import Header from "@/components/Header";
import api from "@/config/api.config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string | null;
  tags: string[] | null;
  excerpt: string | null;
  content: string | null;
  featured_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  published_at: string | null;
}

interface BlogDetailsResponse {
  success: boolean;
  data: BlogPost;
}

export default function BlogDetailsPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!router.isReady) return;

    let isCurrentRequest = true;

    const fetchPost = async () => {
      if (!slug) {
        setIsLoading(false);
        setErrorMessage("This article could not be found.");
        return;
      }

      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await api.get<BlogDetailsResponse>(
          `blog-details/${encodeURIComponent(slug)}`,
        );

        if (!isCurrentRequest) return;
        if (!response.data.success || !response.data.data?.title) {
          throw new Error("The blog details API returned an invalid response.");
        }

        setPost(response.data.data);
      } catch (error) {
        if (!isCurrentRequest) return;
        console.error("Unable to load the blog article.", error);
        setPost(null);
        setErrorMessage("We couldn’t load this article. Please try again.");
      } finally {
        if (isCurrentRequest) setIsLoading(false);
      }
    };

    void fetchPost();
    return () => {
      isCurrentRequest = false;
    };
  }, [router.isReady, slug, retryCount]);

  const parsedDate = post?.published_at ? new Date(post.published_at) : null;
  const formattedDate = parsedDate && !Number.isNaN(parsedDate.getTime())
    ? parsedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : "";
  const pageTitle = post?.meta_title || post?.title || "Blog | Tata Pravesh";
  const pageDescription = post?.meta_description || post?.excerpt || "";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {pageDescription && <meta name="description" content={pageDescription} />}
      </Head>

      <Header />

      <main className="blog-details-page">
        {isLoading ? (
          <div className="blog-details-page__status" role="status" aria-live="polite">
            Loading article…
          </div>
        ) : post ? (
          <>
            <header className="blog-details-page__article-header">
              <nav className="blog-details-page__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">›</span>
                <Link href="/blogs">Blog</Link>
                <span aria-hidden="true">›</span>
                <span aria-current="page">{post.title}</span>
              </nav>

              <h1>{post.title}</h1>
              {(post.category || post.tags?.length || formattedDate) && (
                <div className="blog-details-page__meta">
                  {post.category && <span className="blog-details-page__tag">{post.category}</span>}
                  {post.tags?.map((tag) => (
                    <span className="blog-details-page__tag" key={tag}>{tag}</span>
                  ))}
                  {formattedDate && <time dateTime={post.published_at || undefined}>{formattedDate}</time>}
                </div>
              )}
              {post.excerpt && <p className="blog-details-page__lead">{post.excerpt}</p>}
            </header>

            {post.featured_image_url && (
              <figure className="blog-details-page__hero">
                <div className="blog-details-page__hero-image">
                  <Image
                    src={post.featured_image_url}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1100px"
                  />
                </div>
              </figure>
            )}

            <article className="blog-details-page__article">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <p>This article does not have any content yet.</p>
              )}
            </article>

            <nav className="blog-details-page__back-link" aria-label="More articles">
              <Link href="/blogs">← Back to all articles</Link>
            </nav>
          </>
        ) : (
          <section className="blog-details-page__status" role="alert">
            <p>{errorMessage || "This article could not be found."}</p>
            {slug && (
              <button type="button" onClick={() => setRetryCount((count) => count + 1)}>
                Try again
              </button>
            )}
            <Link href="/blogs">Browse all articles</Link>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
