import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

const featureStats = [
  { value: "Steel", label: "Strong and secure" },
  { value: "Wood finish", label: "Warm, elegant look" },
  { value: "Termite-proof", label: "No termite worries" },
  { value: "Weather-proof", label: "No warping or swelling" },
  { value: "Installed", label: "By Tata Pravesh team" },
];

const reasons = [
  { icon: "🛡️", title: "Strength of steel", text: "Made from Tata Steel, for security and peace of mind." },
  { icon: "🪵", title: "Elegance of wood", text: "Embossed wood finishes and plain shades that suit any villa style." },
  { icon: "🐜", title: "Termite resistant", text: "No termite damage, ever." },
  { icon: "🌧️", title: "Weather proof", text: "Handles sun, rain and humidity without warping." },
  { icon: "🧰", title: "No maintenance", text: "No repeated polishing or repainting." },
  { icon: "🔇", title: "Quiet and comfortable", text: "French doors with sound insulation up to 45 dB." },
  { icon: "🌿", title: "Eco-friendly", text: "The first steel doors brand with GreenPro certification by CII." },
  { icon: "🧩", title: "One team, start to finish", text: "Selection, delivery and installation handled by Tata Pravesh." },
];

const faqs = [
  {
    question: "Which doors and windows are best for a villa?",
    answer: "Steel: secure, termite-resistant, weather-proof and low maintenance, in wood finishes and many shades.",
  },
  {
    question: "Which main door is best for a villa entrance?",
    answer: "An embossed wood finish steel door, with a branded lock, gives wood's look with steel's strength.",
  },
  {
    question: "Can I have large openings to a lawn or patio?",
    answer: "Yes. French doors like Lumiére fold fully open and are made to size.",
  },
  {
    question: "Do steel windows suit villas?",
    answer: "Yes. Casement, sliding and swing-cum-slide windows suit different rooms.",
  },
  {
    question: "What warranty do you offer?",
    answer: "Up to 5 years*, subject to terms and conditions.",
  },
  {
    question: "Is installation included?",
    answer: "Delivery and professional installation are available from our team.",
  },
];

export default function DoorsWindowsForVillaPage() {
  return (
    <>
      <Head>
        <title>Steel Doors and Windows for Villas | Tata Pravesh</title>
        <meta
          name="description"
          content="Strong, termite-resistant, weather-proof steel doors and windows for villas with a warranty of up to 5 years and professional installation."
        />
      </Head>

      <Header />

      <main className="doors-windows-for-villa-page">
        <nav className="doors-windows-for-villa__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/doors/">Doors &amp; Windows</Link> / <span>For Villas</span>
        </nav>

        <section className="doors-windows-for-villa__section doors-windows-for-villa__section--hero">
          <div className="doors-windows-for-villa__container doors-windows-for-villa__hero-grid">
            <div>
              <p className="doors-windows-for-villa__eyebrow">Tata Pravesh · For villas</p>
              <h1>Doors and windows made for your villa.</h1>
              <p className="doors-windows-for-villa__lead">
                A villa deserves an entrance that impresses, windows that bring in light, and security you never have to think
                about. Tata Pravesh steel doors and windows deliver all three.
              </p>

              <div className="doors-windows-for-villa__answer">
                <b>Why they&apos;re best:</b> the strength of steel, the look of wood, protection from termites and weather,
                almost no maintenance, and a warranty of up to 5 years*.
              </div>

              <div className="doors-windows-for-villa__actions">
                <a className="doors-windows-for-villa__button" href="#book-a-demo">
                  Book a Demo <span aria-hidden="true">→</span>
                </a>
                <a className="doors-windows-for-villa__button doors-windows-for-villa__button--alt" href="#enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>

            <figure className="doors-windows-for-villa__figure doors-windows-for-villa__figure--hero">
              <img src="/images/french-door/exterior-dusk.svg" alt="Villa exterior at dusk with a Tata Pravesh French door lit warmly" />
              <div className="doors-windows-for-villa__badge">
                <b>Up to 5 yrs</b>
                <span>Warranty*</span>
              </div>
              <figcaption>Replace with your best villa hero photo (1600 × 1200 px).</figcaption>
            </figure>
          </div>
        </section>

        <section className="doors-windows-for-villa__section">
          <div className="doors-windows-for-villa__container doors-windows-for-villa__feature-grid">
            {featureStats.map((item) => (
              <div key={item.label} className="doors-windows-for-villa__feature-item">
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="doors-windows-for-villa__section">
          <div className="doors-windows-for-villa__container">
            <p className="doors-windows-for-villa__eyebrow">Doors for every part of the villa</p>
            <h2>Right door, right place.</h2>

            <div className="doors-windows-for-villa__room">
              <figure className="doors-windows-for-villa__figure">
                <div className="doors-windows-for-villa__placeholder" role="img" aria-label="Villa main entrance with Tata Pravesh embossed steel door">
                  Villa main entrance photo
                  <small>Replace this block with an img, 1600 × 1000 px</small>
                </div>
                <figcaption>Main entrance: an embossed wood finish steel door.</figcaption>
              </figure>

              <div>
                <p className="doors-windows-for-villa__eyebrow">Main entrance</p>
                <h3>Make a grand first impression.</h3>
                <p>
                  Your entrance sets the tone for the whole villa. An embossed steel door gives the richness of wood with far
                  greater strength.
                </p>
                <ul className="doors-windows-for-villa__list">
                  <li>
                    <b>Secure:</b> steel strength for your family&apos;s safety.
                  </li>
                  <li>
                    <b>Elegant:</b> wood finish and RAL shades to match any facade.
                  </li>
                  <li>
                    <b>Durable:</b> does not warp, swell or crack in sun and rain.
                  </li>
                </ul>
              </div>
            </div>

            <div className="doors-windows-for-villa__room doors-windows-for-villa__room--reverse">
              <figure className="doors-windows-for-villa__figure">
                <div className="doors-windows-for-villa__placeholder" role="img" aria-label="Villa bedroom with Tata Pravesh steel door">
                  Bedroom and interior doors photo
                  <small>Replace this block with an img, 1600 × 1000 px</small>
                </div>
                <figcaption>Bedrooms, baths and interiors: solid, quiet and low maintenance.</figcaption>
              </figure>

              <div>
                <p className="doors-windows-for-villa__eyebrow">Bedrooms and bathrooms</p>
                <h3>Privacy that lasts.</h3>
                <p>Interior steel doors stay straight and smooth for years, even in humid bathrooms.</p>
                <ul className="doors-windows-for-villa__list">
                  <li>
                    <b>Moisture-proof:</b> a good fit for bathrooms.
                  </li>
                  <li>
                    <b>Low maintenance:</b> no polishing or repainting.
                  </li>
                  <li>
                    <b>Ventilator option:</b> light and fresh air where needed.
                  </li>
                </ul>
              </div>
            </div>

            <div className="doors-windows-for-villa__room">
              <figure className="doors-windows-for-villa__figure">
                <img src="/images/french-door/patio-balcony.svg" alt="Tata Pravesh French door opening to a villa patio" loading="lazy" />
                <figcaption>Patio and balcony: bring the outdoors in.</figcaption>
              </figure>

              <div>
                <p className="doors-windows-for-villa__eyebrow">Patio, balcony and lawn</p>
                <h3>Open up to the garden.</h3>
                <p>
                  French doors turn a villa wall into a wide, bright opening. Lumiére folds fully back for a clear opening of
                  up to 97%.
                </p>
                <ul className="doors-windows-for-villa__list">
                  <li>
                    <b>Light and views:</b> large glass areas.
                  </li>
                  <li>
                    <b>Sound insulation:</b> up to 45 dB.
                  </li>
                  <li>
                    <b>Made to size:</b> to fit your opening, installed by us.
                  </li>
                </ul>
                <div className="doors-windows-for-villa__actions">
                  <a className="doors-windows-for-villa__button doors-windows-for-villa__button--alt" href="/french-door/">
                    Explore French Door Lumiére
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="doors-windows-for-villa__section">
          <div className="doors-windows-for-villa__container">
            <p className="doors-windows-for-villa__eyebrow">Windows</p>
            <h2>Windows that frame your villa.</h2>
            <div className="doors-windows-for-villa__window-row">
              <figure className="doors-windows-for-villa__figure">
                <div className="doors-windows-for-villa__placeholder" role="img" aria-label="Tata Pravesh windows on a villa">
                  Villa windows photo
                  <small>Replace this block with an img, 1600 × 1000 px</small>
                </div>
                <figcaption>Strong frames, clean lines, smooth operation.</figcaption>
              </figure>

              <div>
                <h3>Light, air and security together.</h3>
                <p>Choose the opening style for each room, with strong steel frames that stay true over time.</p>
                <ul className="doors-windows-for-villa__list">
                  <li>
                    <b>Casement (Oyster):</b> wide, full ventilation.
                  </li>
                  <li>
                    <b>Sliding (Canvas):</b> saves space, smooth to use.
                  </li>
                  <li>
                    <b>Swing-cum-slide (Vista):</b> flexible, easy to clean.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="doors-windows-for-villa__section">
          <div className="doors-windows-for-villa__container">
            <p className="doors-windows-for-villa__eyebrow">Why they&apos;re best</p>
            <h2>Eight reasons villa owners choose Tata Pravesh.</h2>

            <div className="doors-windows-for-villa__cards">
              {reasons.map((item) => (
                <div className="doors-windows-for-villa__card" key={item.title}>
                  <div className="doors-windows-for-villa__icon" aria-hidden="true">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="doors-windows-for-villa__section">
          <div className="doors-windows-for-villa__container">
            <p className="doors-windows-for-villa__eyebrow">Real villas</p>
            <h2>See them in real homes.</h2>

            <div className="doors-windows-for-villa__gallery">
              <figure className="doors-windows-for-villa__figure doors-windows-for-villa__figure--featured">
                <div className="doors-windows-for-villa__placeholder" role="img" aria-label="Completed villa project with Tata Pravesh doors and windows">
                  Featured villa project photo
                  <small>Large image, 1600 × 1100 px. Add city and year in the caption.</small>
                </div>
                <figcaption>Villa project: add location and year.</figcaption>
              </figure>

              <figure className="doors-windows-for-villa__figure">
                <img src="/images/french-door/lawn-opening.svg" alt="Villa lawn opening with Tata Pravesh French door" loading="lazy" />
                <figcaption>Lawn opening.</figcaption>
              </figure>

              <figure className="doors-windows-for-villa__figure">
                <div className="doors-windows-for-villa__placeholder" role="img" aria-label="Villa interior with Tata Pravesh door">
                  Interior photo
                  <small>800 × 600 px</small>
                </div>
                <figcaption>Interior doors.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="doors-windows-for-villa__section">
          <div className="doors-windows-for-villa__container">
            <div className="doors-windows-for-villa__cta-band">
              <div className="doors-windows-for-villa__cta-value">
                5<span> yrs</span>
              </div>
              <div>
                <h2>Warranty of up to 5 years.*</h2>
                <p>Backed by Tata Steel quality, with professional installation and support from the Tata Pravesh team.</p>
              </div>
              <a className="doors-windows-for-villa__button doors-windows-for-villa__button--light" href="#book-a-demo">
                Book a Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="doors-windows-for-villa__section">
          <div className="doors-windows-for-villa__container" id="faq">
            <p className="doors-windows-for-villa__eyebrow">Questions</p>
            <h2>Villa doors and windows FAQs.</h2>

            <div className="doors-windows-for-villa__faq-grid">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>

            <p className="doors-windows-for-villa__fine-print">
              <em>*Warranty period varies by product. Terms and conditions apply.</em>
            </p>

            <div className="doors-windows-for-villa__actions">
              <a className="doors-windows-for-villa__button" href="#book-a-demo">
                Book a Demo <span aria-hidden="true">→</span>
              </a>
              <a className="doors-windows-for-villa__button doors-windows-for-villa__button--alt" href="#enquire-now">
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
