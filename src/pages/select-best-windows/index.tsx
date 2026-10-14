import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

type WindowProduct = {
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  imageFit?: "contain" | "cover";
};

const steelWindows: WindowProduct[] = [
  {
    category: "Steel casement",
    title: "Pebble Classic",
    description: "Hinged shutters with glass and straight grill. 5 RAL shades.",
    image: "/images/select-best-windows/steel-pebble-classic.jpg",
    alt: "Tata Pravesh Pebble Classic steel casement window",
    imageFit: "contain",
  },
  {
    category: "Steel sliding",
    title: "Pebble Classic Slide",
    description: "Sliding window with grill and a sliding mesh shutter option.",
    image: "/images/select-best-windows/steel-pebble-classic-slide.jpg",
    alt: "Tata Pravesh Pebble Classic Slide steel window",
    imageFit: "contain",
  },
  {
    category: "Steel casement",
    title: "Pebble Eco Std-Grill",
    description: "Wood and RAL shades with a standard grill and mesh option.",
    image: "/images/select-best-windows/steel-pebble-eco-standard.jpg",
    alt: "Tata Pravesh Pebble Eco standard-grill window",
    imageFit: "contain",
  },
  {
    category: "Steel casement",
    title: "Pebble Eco K-Grill",
    description: "K-grill design in wood and RAL shades. Not in East & North.",
    image: "/images/select-best-windows/steel-pebble-eco-k-grill.jpg",
    alt: "Tata Pravesh Pebble Eco K-grill window",
    imageFit: "contain",
  },
  {
    category: "Steel casement",
    title: "Pebble Ultimate Neo",
    description: "7 wood and 5 RAL shades with a retractable mosquito net. East & North.",
    image: "/images/select-best-windows/steel-pebble-ultimate-neo.jpg",
    alt: "Tata Pravesh Pebble Ultimate Neo steel window",
    imageFit: "contain",
  },
  {
    category: "Steel · Vista",
    title: "Swing & Slide Window",
    description: "Swing and slide in one, with up to 95% opening.",
    image: "/images/select-best-windows/steel-swing-and-slide.jpg",
    alt: "Tata Pravesh Vista Swing and Slide window",
    imageFit: "contain",
  },
];

const aluminiumWindows: WindowProduct[] = [
  {
    category: "System aluminium",
    title: "Aluminium Sliding Window",
    description: "2.5 track, 6–26 mm glass and a nylon mesh option.",
    image: "/images/select-best-windows/aluminium-sliding.jpg",
    alt: "Tata Pravesh system aluminium sliding window",
  },
  {
    category: "System aluminium",
    title: "Aluminium Casement Window",
    description: "Outward-open top-hung sash with inside or outside mesh.",
    image: "/images/select-best-windows/aluminium-casement.jpg",
    alt: "Tata Pravesh system aluminium casement window",
  },
  {
    category: "System aluminium",
    title: "Fixed Glass Window",
    description: "Wide glass panes for open, unobstructed views.",
    image: "/images/select-best-windows/fixed-glass.jpg",
    alt: "Tata Pravesh fixed glass window",
  },
  {
    category: "System aluminium",
    title: "Slimline Windows",
    description: "Slim frames for a clean, minimal look.",
    image: "/images/select-best-windows/slimline.jpg",
    alt: "Tata Pravesh slimline aluminium window",
  },
];

const quickPicks = [
  ["Widest opening", "Swing & Slide opens up to 95%"],
  ["Keeping insects out", "Mesh options across the Pebble range"],
  ["Open views", "Fixed glass window"],
  ["Space-saving", "Sliding windows, steel or aluminium"],
];

function WindowCard({ product }: { product: WindowProduct }) {
  return (
    <article className="select-best-windows__product">
      <div className="select-best-windows__product-image">
        <Image
          src={product.image}
          alt={product.alt}
          width={800}
          height={600}
          loading="lazy"
          style={{ objectFit: product.imageFit ?? "cover" }}
        />
        <span className="select-best-windows__tag">{product.category}</span>
      </div>
      <div className="select-best-windows__product-body">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <a
          className="select-best-windows__button select-best-windows__button--primary"
          href="https://aashiyana.tatasteel.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Know more about ${product.title}`}
        >
          Know more <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

function ProductGrid({ products }: { products: WindowProduct[] }) {
  return (
    <div className="select-best-windows__grid">
      {products.map((product) => (
        <WindowCard key={product.title} product={product} />
      ))}
    </div>
  );
}

export default function SelectBestWindowsPage() {
  return (
    <>
      <Head>
        <title>Select the Best Windows | Tata Pravesh</title>
        <meta
          name="description"
          content="Explore Tata Pravesh steel and aluminium windows, compare the range and find the right window for your home."
        />
      </Head>

      <Header />

      <main className="select-best-windows">
        <section className="select-best-windows__hero">
          <div className="select-best-windows__container select-best-windows__hero-inner">
            <div className="select-best-windows__hero-copy">
              <p className="select-best-windows__eyebrow">Steel &amp; aluminium windows</p>
              <h1>Select the Best Windows</h1>
              <p className="select-best-windows__lead">
                Strong, termite-resistant windows for every home. Compare the range, pick what
                suits your space, and tap Know more.
              </p>
              <div className="select-best-windows__actions">
                <a
                  className="select-best-windows__button select-best-windows__button--primary"
                  href="#range"
                >
                  Browse windows
                </a>
                <a
                  className="select-best-windows__button select-best-windows__button--secondary"
                  href="tel:18004199200"
                >
                  Call 1-800-4199-200
                </a>
              </div>
              <ul className="select-best-windows__benefits" aria-label="Window benefits">
                <li>Termite-resistant</li>
                <li>Seepage-resistant</li>
                <li>Easy to clean</li>
              </ul>
            </div>
            <div className="select-best-windows__hero-image">
              <Image
                src="/images/select-best-windows/hero.jpg"
                alt="Tata Pravesh window opening onto a sunlit landscape"
                width={1200}
                height={800}
                priority
              />
              <div className="select-best-windows__hero-badge">
                <strong>4×</strong>
                <span>stronger than wooden windows*</span>
              </div>
            </div>
          </div>
        </section>

        <section className="select-best-windows__stats" aria-label="Window benefits">
          <div className="select-best-windows__container select-best-windows__stats-inner">
            <p>
              <strong>Termite</strong>
              <span>resistant metal</span>
            </p>
            <p>
              <strong>Seepage</strong>
              <span>resistant</span>
            </p>
            <p>
              <strong>Weather</strong>
              <span>proof frames</span>
            </p>
            <p>
              <strong>Easy</strong>
              <span>to clean</span>
            </p>
          </div>
        </section>

        <section className="select-best-windows__section" aria-labelledby="windows-quick-pick">
          <div className="select-best-windows__container">
            <h2 id="windows-quick-pick">Quick pick</h2>
            <div className="select-best-windows__quick-grid">
              {quickPicks.map(([title, description], index) => (
                <article className="select-best-windows__quick-pick" key={title}>
                  <span>{index + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="select-best-windows__section select-best-windows__section--range"
          id="range"
          aria-labelledby="steel-windows-title"
        >
          <div className="select-best-windows__container">
            <h2 id="steel-windows-title">Steel windows</h2>
            <ProductGrid products={steelWindows} />
          </div>
        </section>

        <section className="select-best-windows__section" aria-labelledby="aluminium-windows-title">
          <div className="select-best-windows__container">
            <h2 id="aluminium-windows-title">System aluminium windows</h2>
            <ProductGrid products={aluminiumWindows} />
            <p className="select-best-windows__image-note">
              Images are from the Tata Pravesh brochure.
            </p>
          </div>
        </section>

        <section className="select-best-windows__cta">
          <div className="select-best-windows__container">
            <h2>Not sure which window fits?</h2>
            <p>Talk to our expert or see a window in person. Helpline 1-800-4199-200</p>
            <div className="select-best-windows__actions select-best-windows__actions--center">
              <a
                className="select-best-windows__button select-best-windows__button--primary"
                href="https://aashiyana.tatasteel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire now
              </a>
              <a
                className="select-best-windows__button select-best-windows__button--secondary"
                href="https://aashiyana.tatasteel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
              </a>
            </div>
          </div>
        </section>

        <div className="select-best-windows__container select-best-windows__footer-note">
          *Conditions apply. Windows are not water-proof; installed windows must be covered with a
          canopy or projecting roof slab. Availability varies by region. Details per Tata Pravesh
          consumer brochure, version Pravesh/June/R3/2026.
        </div>
      </main>

      <Footer />
    </>
  );
}