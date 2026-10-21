import Footer from "@/components/Footer";
import Header from "@/components/Header";
import api from "@/config/api.config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type ModelListItem = {
  id: number;
  name: string;
  slug: string;
  main_image_url: string | null;
};

export type ModelListResponse = {
  success: boolean;
  product: {
    id: number;
    name: string;
    slug: string;
    category: string | null;
    main_image_url: string | null;
  };
  models: ModelListItem[];
};

export default function ModelListingPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const [product, setProduct] = useState<ModelListResponse["product"] | null>(null);
  const [models, setModels] = useState<ModelListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady || !slug) {
      if (router.isReady && !slug) {
        setLoading(false);
      }
      return;
    }

    const fetchModels = async () => {
      setLoading(true);

      try {
        const response = await api.get<ModelListResponse>(`products/${slug}/models`);

        if (!response.data?.product || !Array.isArray(response.data.models)) {
          setProduct(null);
          setModels([]);
          return;
        }

        setProduct(response.data.product);
        setModels(response.data.models);
      } catch (error) {
        setProduct(null);
        setModels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, [router.isReady, slug]);

  if (!router.isReady || loading) {
    return (
      <>
        <Header />
        <main className="model-listing">
          <div className="model-listing__container" style={{ padding: "60px 20px", textAlign: "center" }}>
            <p>Loading models...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="model-listing">
          <div className="model-listing__container" style={{ padding: "60px 20px", textAlign: "center" }}>
            <h1>Model not found</h1>
            <p>The requested collection could not be found.</p>
            <Link href="/" style={{ color: "#2d68c4", fontWeight: 700 }}>
              Go back home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const formattedProductName = product.name || "Premium Model Collection";
  const heroDescription = `Explore premium ${formattedProductName.toLowerCase()} models crafted for modern homes and architectural spaces.`;

  return (
    <>
      <Head>
        <title>{`${formattedProductName} Models | Tata Pravesh`}</title>
        <meta
          name="description"
          content={heroDescription}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${formattedProductName} Models`} />
        <meta property="og:description" content={heroDescription} />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className="model-listing">
        <section className="model-listing__hero">
          <div className="model-listing__container">
            <nav className="model-listing__breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/">Products</Link>
              <span>/</span>
              <span>{formattedProductName}</span>
            </nav>

            <div className="model-listing__hero-grid">
              <div className="model-listing__hero-copy">
                <span className="model-listing__eyebrow">Premium Collection</span>
                <h1>{formattedProductName}</h1>
                <p>{heroDescription}</p>

                <div className="model-listing__quick-stats" aria-label="Product overview">
                  <div>
                    <strong>{models.length}</strong>
                    <span>Models</span>
                  </div>
                  <div>
                    <strong>Premium</strong>
                    <span>Finish</span>
                  </div>
                  <div>
                    <strong>Modern</strong>
                    <span>Design</span>
                  </div>
                </div>

                <div className="model-listing__actions">
                  <a href="#models" className="model-listing__primary-btn">
                    View All Models
                  </a>
                  <Link href="/book-a-demo" className="model-listing__secondary-btn">
                    Book a Demo
                  </Link>
                </div>
              </div>

              <div className="model-listing__hero-visual">
                <div className="model-listing__product-card">
                  <Image
                    src={product.main_image_url || "/images/default/model.png"}
                    alt={formattedProductName}
                    width={720}
                    height={520}
                    priority
                    sizes="(max-width: 1023px) 100vw, 560px"
                    unoptimized
                  />
                </div>
                <div className="model-listing__floating-badge">
                  <span>Signature Range</span>
                  <strong>{models.length} Design Options</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="model-listing__section" id="models">
          <div className="model-listing__container">
            <div className="model-listing__section-head">
              <div>
                <span className="model-listing__section-kicker">Our Models</span>
                <h2>Choose the style that fits your space</h2>
              </div>
              <p>
                Discover elegant, durable, and design-forward options from the {formattedProductName} range.
              </p>
            </div>

            <div className="model-listing__grid">
              {models.map((model, index) => (
                <article key={model.id} className="model-listing__card">
                  <div className="model-listing__card-media">
                    <Image
                      src={model.main_image_url || "/images/default/model.png"}
                      alt={model.name}
                      width={640}
                      height={480}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>

                  <div className="model-listing__card-body">
                    {/* <span className="model-listing__card-tag">Model {index + 1}</span> */}
                    <h3>{model.name}</h3>
                    {/* <p>
                      Designed to balance premium craftsmanship, modern aesthetics, and long-lasting durability.
                    </p> */}

                    <div className="model-listing__card-meta">
                      <span>Collection</span>
                      <strong>{formattedProductName}</strong>
                    </div>

                    <div className="model-listing__card-actions">
                      <button type="button" aria-label={`View ${model.name}`}>
                        Explore Model
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="model-listing__feature-strip">
          <div className="model-listing__container">
            <div className="model-listing__feature-list">
              <div>
                <strong>Made for Modern Living</strong>
                <span>Clean silhouettes and premium textures</span>
              </div>
              <div>
                <strong>Engineered for Durability</strong>
                <span>Built to perform with long-term reliability</span>
              </div>
              <div>
                <strong>Expert Guidance</strong>
                <span>Personalized recommendations from our team</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
