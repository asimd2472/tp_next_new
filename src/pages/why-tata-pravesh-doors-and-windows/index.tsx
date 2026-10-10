import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const stats = [
  { value: "Up to 5 yrs", label: "Warranty*" },
  { value: "Installed", label: "by Tata Pravesh" },
  { value: "35+", label: "Door designs" },
  { value: "GreenPro", label: "CII certified" },
];

const comparisonRows = [
  ["Termites", "Termite-resistant", "Prone to termite damage", "Varies by product"],
  ["Fire", "Fire-resistant", "Combustible", "Varies by product"],
  ["Moisture and heat", "Does not change shape", "Can swell, warp or crack", "Mostly for interiors"],
  ["Maintenance", "No maintenance", "Periodic polishing", "Low"],
  ["Rust", "Galvanised, rust-resistant steel", "Not applicable", "Not applicable"],
  ["Look", "Embossed wood finish or plain", "Natural wood", "Limited finishes"],
  ["Warranty", "Up to 5 years*", "Varies", "Varies"],
];

const reasons = [
  { icon: "🛡️", title: "Strength of steel", text: "Made from Tata Steel for security and peace of mind, and lighter than you would expect." },
  { icon: "🪵", title: "Elegance of wood", text: "Embossed wood finish and smooth plain finishes that look and feel like wood." },
  { icon: "🐜", title: "Termite resistant", text: "No termite worries, now or years from now." },
  { icon: "🔥", title: "Fire resistant", text: "Steel that stands up to fire, for added safety at home." },
  { icon: "🌧️", title: "Weather proof", text: "Does not warp, swell or crack with moisture and heat." },
  { icon: "🧰", title: "No maintenance", text: "Factory finish with no repeated polishing or repainting." },
  { icon: "🌿", title: "Eco-friendly", text: "The first steel doors brand with GreenPro certification by CII." },
  { icon: "🧩", title: "End-to-end solution", text: "Doors, windows, branded locks and accessories, delivery and professional installation." },
];

const galleryItems = [
  {
    title: "Embossed wood finish doors",
    text: "35+ designs in many shades.",
    image: "/images/french-door/hero.svg",
    alt: "Embossed wood finish Tata Pravesh door illustration",
  },
  {
    title: "Plain steel doors",
    text: "Clean, smooth finish for modern interiors.",
    image: "/images/french-door/room-partition.svg",
    alt: "Plain steel Tata Pravesh door illustration",
  },
  {
    title: "Doors with ventilators",
    text: "Light and fresh air above the door.",
    image: "/images/french-door/patio-balcony.svg",
    alt: "Door with ventilator illustration",
  },
  {
    title: "French door: Premium",
    text: "Fixed toughened glass for an uninterrupted view.",
    image: "/images/french-door/model-premium.jpg",
    alt: "Tata Pravesh Lumiére Premium French door with fixed toughened glass",
  },
  {
    title: "French door: Executive",
    text: "Openable glass with collapsible mesh and grill.",
    image: "/images/french-door/model-executive.jpg",
    alt: "Tata Pravesh Lumiére Executive French door with collapsible mesh and grill",
  },
  {
    title: "Windows",
    text: "Casement (Oyster), sliding (Canvas) and swing-cum-slide (Vista).",
    image: "/images/french-door/garage.svg",
    alt: "Tata Pravesh window illustration",
  },
];

const realSpaces = [
  { title: "Lawn opening", text: "Open up to the garden.", image: "/images/french-door/lawn-opening.svg", alt: "Tata Pravesh French door opening to a lawn" },
  { title: "Patio and balcony", text: "Light and air for apartments.", image: "/images/french-door/patio-balcony.svg", alt: "Tata Pravesh French door on a patio or balcony" },
  { title: "Room partition", text: "A stylish separator between spaces.", image: "/images/french-door/room-partition.svg", alt: "Tata Pravesh French door used as a room partition" },
  { title: "Garage", text: "Strong, secure and made to size.", image: "/images/french-door/garage.svg", alt: "Tata Pravesh French door used for a garage" },
];

const faqs = [
  { question: "Why choose Tata Pravesh steel doors over wooden doors?", answer: "They combine the strength of steel with the look of wood, resist termites, fire and weather, and need no maintenance." },
  { question: "Do Tata Pravesh doors look like wood?", answer: "Yes. The range includes embossed wood finish doors and smooth plain finishes in many shades." },
  { question: "Do you offer French doors?", answer: "Yes. Lumiére is a fully foldable French door in galvanised steel, made to size and installed by our team." },
  { question: "What is the warranty?", answer: "Up to 5 years, subject to terms and conditions." },
  { question: "Do you offer windows too?", answer: "Yes. Casement (Oyster), sliding (Canvas) and swing-cum-slide (Vista) windows." },
  { question: "Is installation available?", answer: "Yes. Delivery, branded accessories and professional installation are available." },
];

export default function WhyTataPraveshDoorsAndWindowsPage() {
  return (
    <>
      <Head>
        <title>Why Tata Pravesh Doors and Windows | Tata Pravesh</title>
        <meta
          name="description"
          content="Why Tata Pravesh doors and windows: steel that looks like wood, lasts longer and brings strength, safety and elegance home."
        />
      </Head>

      <Header />

      <main className="why-tata-pravesh-page">
        <section className="why-tata-pravesh__hero">
          <div className="why-tata-pravesh__container why-tata-pravesh__hero-grid">
            <div className="why-tata-pravesh__hero-copy">
              <p className="why-tata-pravesh__eyebrow">Why Tata Pravesh</p>
              <h1>The smarter choice for every doorway.</h1>
              <p className="why-tata-pravesh__lead">
                From the house of Tata Steel, Tata Pravesh doors and windows give you the strength of steel with the elegance of wood. Built to last, with a warranty of up to 5 years.
              </p>

              <div className="why-tata-pravesh__actions">
                <a className="why-tata-pravesh__button" href="#book-a-demo">
                  Book a Demo <span aria-hidden="true">→</span>
                </a>
                <a className="why-tata-pravesh__button why-tata-pravesh__button--alt" href="#enquire-now">
                  Enquire Now
                </a>
              </div>

              <div className="why-tata-pravesh__stats">
                {stats.map((item) => (
                  <div className="why-tata-pravesh__stat" key={item.label}>
                    <b>{item.value}</b>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-tata-pravesh__hero-visual">
              <div className="why-tata-pravesh__visual-frame">
                <Image
                  src="/images/french-door/hero.svg"
                  alt="Tata Pravesh Lumiére French door in a bright living room"
                  width={720}
                  height={640}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="why-tata-pravesh__section why-tata-pravesh__section--white">
          <div className="why-tata-pravesh__container">
            <p className="why-tata-pravesh__eyebrow">The smarter choice</p>
            <h2>Why steel beats the old way.</h2>
            <p className="why-tata-pravesh__lead">Wood was the default for generations. Here is how Tata Pravesh answers the problems homeowners face with it.</p>

            <div className="why-tata-pravesh__table-wrap">
              <table className="why-tata-pravesh__table">
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th className="why-tata-pravesh__table-head--highlight">Tata Pravesh steel</th>
                    <th>Wooden doors</th>
                    <th>MDF / PVC doors</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([matter, tp, wood, mdf]) => (
                    <tr key={matter}>
                      <td>{matter}</td>
                      <td className="why-tata-pravesh__table-cell--highlight">{tp}</td>
                      <td>{wood}</td>
                      <td>{mdf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="why-tata-pravesh__section">
          <div className="why-tata-pravesh__container">
            <p className="why-tata-pravesh__eyebrow">Reasons to choose</p>
            <h2>Eight reasons homeowners pick Tata Pravesh.</h2>

            <div className="why-tata-pravesh__cards">
              {reasons.map((reason) => (
                <div className="why-tata-pravesh__card" key={reason.title}>
                  <div className="why-tata-pravesh__icon" aria-hidden="true">{reason.icon}</div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-tata-pravesh__section why-tata-pravesh__section--white">
          <div className="why-tata-pravesh__container">
            <p className="why-tata-pravesh__eyebrow">The range</p>
            <h2>Doors and windows for every space.</h2>
            <p className="why-tata-pravesh__lead">Embossed wood finish, plain, ventilator, French doors and windows, made to suit your home.</p>

            <div className="why-tata-pravesh__gallery">
              {galleryItems.map((item) => (
                <figure className="why-tata-pravesh__gallery-item" key={item.title}>
                  <div className="why-tata-pravesh__gallery-visual">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <figcaption>
                    <b>{item.title}</b>
                    {item.text}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="why-tata-pravesh__section">
          <div className="why-tata-pravesh__container">
            <p className="why-tata-pravesh__eyebrow">Real spaces</p>
            <h2>Made for everyday living.</h2>

            <div className="why-tata-pravesh__applications">
              {realSpaces.map((space) => (
                <figure className="why-tata-pravesh__application-item" key={space.title}>
                  <div className="why-tata-pravesh__application-visual">
                    <Image src={space.image} alt={space.alt} fill sizes="(max-width: 768px) 100vw, 25vw" />
                  </div>
                  <figcaption>
                    <b>{space.title}</b>
                    <em>{space.text}</em>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="why-tata-pravesh__section">
          <div className="why-tata-pravesh__container">
            <div className="why-tata-pravesh__warranty-banner">
              <div className="why-tata-pravesh__warranty-number">5<small> yrs</small></div>
              <div className="why-tata-pravesh__warranty-copy">
                <h2>Warranty of up to 5 years.</h2>
                <p>Choose with confidence. Every Tata Pravesh door is backed by Tata Steel quality, with professional installation and support from our team.</p>
                <small>*Warranty period varies by product. Terms and conditions apply.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="why-tata-pravesh__section">
          <div className="why-tata-pravesh__container">
            <p className="why-tata-pravesh__eyebrow">Questions</p>
            <h2>Frequently asked questions.</h2>

            {faqs.map((faq, index) => (
              <details key={faq.question} className="why-tata-pravesh__faq" open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="why-tata-pravesh__section why-tata-pravesh__cta-section" id="book-a-demo">
          <div className="why-tata-pravesh__container why-tata-pravesh__cta-wrap" id="enquire-now">
            <h2>Ready to make the smarter choice?</h2>
            <p>See the doors in person or get a quote for your project.</p>
            <div className="why-tata-pravesh__actions why-tata-pravesh__actions--center">
              <a className="why-tata-pravesh__button" href="#book-a-demo">
                Book a Demo <span aria-hidden="true">→</span>
              </a>
              <a className="why-tata-pravesh__button why-tata-pravesh__button--alt" href="#enquire-now">
                Enquire Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
