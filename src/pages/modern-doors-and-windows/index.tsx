import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const featureStats = [
  { value: "97%", label: "French door opening" },
  { value: "95%", label: "Swing & slide opening" },
  { value: "45 dB", label: "Sound insulation" },
  { value: "Smart lock", label: "Fingerprint, OTP, mobile" },
  { value: "Installed", label: "by trained experts" },
];

const doorCards = [
  {
    title: "Embossed wood finish doors",
    eyebrow: "Doors",
    description: "Rich wood texture with steel strength. 8 designs, 15 wood finishes, 5 RAL shades.",
    tags: ["8 designs", "20 shades"],
    image: "/images/modern-doors-and-windows/french-door-lumiere.jpg",
    alt: "Tata Pravesh embossed wood finish steel doors in eight designs",
    href: "/door-models/embossed-wood-finish-doors",
  },
  {
    title: "New E65 to E68 designs",
    eyebrow: "Doors",
    description: "Clean lines and fluted textures, made for modern interiors.",
    tags: ["New launch", "4 designs"],
    image: "/images/modern-doors-and-windows/digital-lock-door.jpg",
    alt: "Tata Pravesh E66 modern door in four shades",
    href: "/door-models/plain-steel-finish-doors",
  },
  {
    title: "Door with digital lock",
    eyebrow: "Doors",
    description: "Fingerprint, password, RFID, mobile and OTP access with alarms and an audit trail.",
    tags: ["DG Secure series"],
    image: "/images/modern-doors-and-windows/digital-lock-door.jpg",
    alt: "Tata Pravesh DG Secure series door with digital lock",
    href: "/door-models/plain-wood-finish-doors",
  },
  {
    title: "French door Lumière",
    eyebrow: "Doors",
    description: "Fully foldable with 97% opening and sound insulation up to 45 dB.",
    tags: ["97% opening", "Up to 45 dB"],
    image: "/images/modern-doors-and-windows/french-door-lumiere.jpg",
    alt: "Tata Pravesh Lumiere French door opening to a patio",
    href: "/french-door",
  },
];

const windowCards = [
  {
    title: "Swing & slide window",
    eyebrow: "Windows",
    description: "Dual swing and slide action with up to 95% opening, gas springs and a decorative frame.",
    tags: ["Models: Vista, Vista Plus"],
    image: "/images/modern-doors-and-windows/window-sunset.jpg",
    alt: "Tata Pravesh swing and slide window open to a sunset view",
    href: "/windows-models/swing-and-slide-window",
  },
  {
    title: "Pebble series windows",
    eyebrow: "Windows",
    description: "Steel casement and sliding windows with grills, mesh options and wood or RAL shades.",
    tags: ["Casement", "Sliding"],
    image: "/images/modern-doors-and-windows/pebble-series.jpg",
    alt: "Tata Pravesh Pebble series steel casement and sliding windows",
    href: "/windows-models/pebble-series",
  },
  {
    title: "Aluminium sliding windows",
    eyebrow: "Windows",
    description: "Slim 2.5 track system with 6 to 26 mm glass and nylon mesh, suited to tall buildings.",
    tags: ["System aluminium", "8 shades"],
    image: "/images/modern-doors-and-windows/aluminium-sliding.jpg",
    alt: "Tata Pravesh system aluminium sliding window and door in a bedroom",
    href: "/aluminium-windows",
  },
  {
    title: "Aluminium casement windows",
    eyebrow: "Windows",
    description: "Outward-opening top-hung casements with inside or outside mesh and up to 6 × 6 ft size.",
    tags: ["System aluminium"],
    image: "/images/modern-doors-and-windows/casement-window.jpg",
    alt: "Tata Pravesh aluminium casement window with open shutters",
    href: "/aluminium-windows",
  },
];

const featureHighlights = [
  { title: "Smart, strong security", text: "Sturdy material, quality locks and, increasingly, digital access with alerts." },
  { title: "Light and openness", text: "Big glass areas, wide openings and good airflow that connect rooms to the outdoors." },
  { title: "Clean, versatile design", text: "Slim lines, textures and colours that suit contemporary interiors." },
  { title: "Low maintenance", text: "A finish that does not peel, warp or need polishing every few years." },
  { title: "Comfort", text: "Quiet, rattle-free operation and protection from insects and wind." },
  { title: "Sustainable", text: "Recyclable materials and responsible manufacturing." },
];

const comparisonRows = [
  { label: "Smart security", value: "DG Secure digital lock: fingerprint, password, RFID, mobile and OTP access, alarms, audit trail. Works with Google Assistant and Alexa." },
  { label: "Light and openness", value: "Lumière French door (97% opening), swing and slide windows (up to 95%), aluminium sliding windows up to 24 × 10 ft." },
  { label: "Contemporary look", value: "Embossed wood, plain wood and plain steel doors, E65 to E68 designs, 15 wood finishes and 5 RAL shades, slim aluminium frames in 8 shades." },
  { label: "Low maintenance", value: "Steel with UV-resistant powder coat: no polishing, no warping, termite-proof." },
  { label: "Quiet comfort", value: "Sound insulation up to 45 dB in French doors, twin gas springs and PU foam gaskets in swing and slide windows." },
  { label: "Insect protection", value: "Fly mesh doors, plus mesh options on windows." },
  { label: "Sustainability", value: "100% recyclable steel doors, the first steel doors with GreenPro certification." },
  { label: "Peace of mind", value: "1-year warranty, extendable by up to 4 years. Measurement and installation by our trained team." },
];

const faqs = [
  {
    question: "What makes a door or window modern?",
    answer: "Clean design, smart security, plenty of light and air, low maintenance and durable materials.",
    open: true,
  },
  {
    question: "Do you offer digital lock doors?",
    answer: "Yes. The DG Secure series offers fingerprint, password, RFID, mobile and OTP access.",
    open: false,
  },
  {
    question: "Which door opens the widest?",
    answer: "The Lumière French door folds fully with a 97% opening.",
    open: false,
  },
  {
    question: "Are the windows water-proof?",
    answer: "Swing and slide windows are not water-proof. Cover installed windows with a canopy or projecting roof slab. Gaskets help prevent seepage.",
    open: false,
  },
  {
    question: "What warranty do I get?",
    answer: "1 year, extendable by up to 4 years. Conditions apply.",
    open: false,
  },
  {
    question: "Who installs them?",
    answer: "A trained Tata Pravesh team measures and installs your door or window.",
    open: false,
  },
];

export default function ModernDoorsAndWindowsPage() {
  return (
    <>
      <Head>
        <title>Modern Doors and Windows | Tata Pravesh</title>
        <meta
          name="description"
          content="Modern steel doors, French doors, digital lock doors and steel and aluminium windows from Tata Pravesh, with up to 5 years warranty."
        />
      </Head>

      <Header />

      <main className="modern-doors-and-windows">
        <nav className="modern-doors-and-windows__breadcrumb" aria-label="Breadcrumb">
          <div className="modern-doors-and-windows__container">
            <Link href="/">Home</Link>
            <span> / </span>
            <span>Modern Doors &amp; Windows</span>
          </div>
        </nav>

        <section className="modern-doors-and-windows__section">
          <div className="modern-doors-and-windows__container modern-doors-and-windows__hero">
            <div>
              <p className="modern-doors-and-windows__eyebrow">Tata Pravesh · Modern living</p>
              <h1>Modern doors and windows.</h1>
              <p className="modern-doors-and-windows__lead">
                Clean design, smart security, more light and air, and almost no upkeep. Explore doors and windows made for the way you live now.
              </p>
              <div className="modern-doors-and-windows__highlight-box">
                <b>In short:</b> a modern door or window looks sleek, keeps you secure, opens up your space and stays beautiful without maintenance. That is how Tata Pravesh builds every product.
              </div>
              <div className="modern-doors-and-windows__actions">
                <Link className="modern-doors-and-windows__button" href="/book-a-demo">Book a Demo <span aria-hidden="true">→</span></Link>
                <a className="modern-doors-and-windows__button modern-doors-and-windows__button--alt" href="#enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>

            <figure className="modern-doors-and-windows__figure">
              <Image
                src="/images/modern-doors-and-windows/french-door-lumiere.jpg"
                alt="Tata Pravesh modern wood finish steel door in a contemporary living room"
                width={1200}
                height={900}
                priority
              />
              <div className="modern-doors-and-windows__chip">
                <b>1 + 4 yrs</b>
                <span>Warranty*</span>
              </div>
            </figure>
          </div>
        </section>

        <section className="modern-doors-and-windows__section">
          <div className="modern-doors-and-windows__container modern-doors-and-windows__stats-grid">
            {featureStats.map((item) => (
              <div key={item.label} className="modern-doors-and-windows__stat">
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="modern-doors-and-windows__section">
          <div className="modern-doors-and-windows__container">
            <p className="modern-doors-and-windows__eyebrow">Our modern doors</p>
            <h2>Doors for today&apos;s homes.</h2>

            <div className="modern-doors-and-windows__products-grid">
              {doorCards.map((card) => (
                <article key={card.title} className="modern-doors-and-windows__product-card">
                  <Link href={card.href} className="modern-doors-and-windows__product-image" aria-label={card.title}>
                    <Image src={card.image} alt={card.alt} width={800} height={640} loading="lazy" />
                  </Link>
                  <div className="modern-doors-and-windows__product-body">
                    <p className="modern-doors-and-windows__product-eyebrow">{card.eyebrow}</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="modern-doors-and-windows__tags">
                      {card.tags.map((tag) => (
                        <span key={tag} className="modern-doors-and-windows__tag">{tag}</span>
                      ))}
                    </div>
                    <Link href={card.href} className="modern-doors-and-windows__know-more">
                      Know more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="modern-doors-and-windows__section">
          <div className="modern-doors-and-windows__container">
            <p className="modern-doors-and-windows__eyebrow">Our modern windows</p>
            <h2>Windows that open up your view.</h2>

            <div className="modern-doors-and-windows__products-grid">
              {windowCards.map((card) => (
                <article key={card.title} className="modern-doors-and-windows__product-card">
                  <Link href={card.href} className="modern-doors-and-windows__product-image" aria-label={card.title}>
                    <Image src={card.image} alt={card.alt} width={800} height={640} loading="lazy" />
                  </Link>
                  <div className="modern-doors-and-windows__product-body">
                    <p className="modern-doors-and-windows__product-eyebrow">{card.eyebrow}</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="modern-doors-and-windows__tags">
                      {card.tags.map((tag) => (
                        <span key={tag} className="modern-doors-and-windows__tag">{tag}</span>
                      ))}
                    </div>
                    <Link href={card.href} className="modern-doors-and-windows__know-more">
                      Know more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="modern-doors-and-windows__section">
          <div className="modern-doors-and-windows__container">
            <p className="modern-doors-and-windows__eyebrow">What to look for</p>
            <h2>What a modern door or window should feature.</h2>
            <div className="modern-doors-and-windows__feature-grid">
              {featureHighlights.map((feature) => (
                <div key={feature.title} className="modern-doors-and-windows__feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="modern-doors-and-windows__section modern-doors-and-windows__section--table">
          <div className="modern-doors-and-windows__container">
            <p className="modern-doors-and-windows__eyebrow">Why Tata Pravesh</p>
            <h2>Perfectly aligned with modern living.</h2>

            <div className="modern-doors-and-windows__table-wrap">
              <table className="modern-doors-and-windows__table">
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="modern-doors-and-windows__section">
          <div className="modern-doors-and-windows__container modern-doors-and-windows__two-column">
            <div className="modern-doors-and-windows__band">
              <p className="modern-doors-and-windows__eyebrow modern-doors-and-windows__eyebrow--light">Warranty</p>
              <h2>1 year, extendable up to 5 years.*</h2>
              <ul>
                <li>Manufacturing defects and termite infestation*</li>
                <li>Accessories, colour and texture fading</li>
                <li>2 AMC options: 2 years or 4 years</li>
              </ul>
              <small>*Conditions apply. Warranty also applies to our windows range.</small>
            </div>

            <div className="modern-doors-and-windows__cta-box" id="book-a-demo">
              <p className="modern-doors-and-windows__eyebrow">Ready to go modern?</p>
              <h2>See it in person.</h2>
              <p>
                Talk to our expert or book a demo near you. Call <b>1-800-4199-200</b>.
              </p>
              <div className="modern-doors-and-windows__actions">
                <a className="modern-doors-and-windows__button" href="#book-a-demo">
                  Book a Demo <span aria-hidden="true">→</span>
                </a>
                <a className="modern-doors-and-windows__button modern-doors-and-windows__button--alt" href="#enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="modern-doors-and-windows__section" id="enquire-now">
          <div className="modern-doors-and-windows__container">
            <p className="modern-doors-and-windows__eyebrow">Questions</p>
            <h2>Modern doors and windows FAQs.</h2>

            <div className="modern-doors-and-windows__faq-grid">
              {faqs.map((faq) => (
                <details key={faq.question} open={faq.open}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>

            <p className="modern-doors-and-windows__fine-print">
              <em>*Conditions apply. Digital lock is for single leaf external doors in plain wood, embossed or RAL finish.</em>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
