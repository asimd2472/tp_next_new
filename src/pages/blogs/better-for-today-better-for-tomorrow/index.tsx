import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const sustainabilitySteps = [
  {
    number: "1",
    title: "Made from steel",
    description: "Tata Pravesh doors are made of steel, so they do not rely on cutting trees.",
  },
  {
    number: "2",
    title: "Installed and built to last",
    description: "A door that does not warp, rot or need constant repair is a door you do not replace.",
  },
  {
    number: "3",
    title: "Recycled, not discarded",
    description: "At the end of its life, a steel door can be recycled instead of thrown away.",
  },
  {
    number: "4",
    title: "Back into new steel",
    description: "Recycled steel goes back into making new products, keeping materials in use.",
  },
];

const products = [
  {
    label: "Doors",
    title: "Embossed & Plain Wood Finish Doors",
    description: "Steel doors with a wood look, and no trees cut.",
    href: "/doors-for-bedroom",
  },
  {
    label: "Windows",
    title: "Swing & Slide Window",
    description: "A PU foam gasket for better thermal insulation, in galvanized steel.",
    href: "/select-best-windows",
  },
  {
    label: "Windows",
    title: "Aluminium Windows",
    description: "System aluminium sliding and casement windows with SGU and DGU glass.",
    href: "/aluminium-windows",
  },
  {
    label: "Light and air",
    title: "French Door Lumière",
    description: "Opens up to 97% for natural light and fresh air.",
    href: "/french-door",
  },
];

const greenerHomeTips = [
  {
    title: "Choose long-lasting materials.",
    description: "The greenest product is the one you do not have to replace.",
  },
  {
    title: "Pick insulating frames and glass.",
    description: "Better insulation helps your home use less energy for cooling.",
  },
  {
    title: "Use daylight and fresh air.",
    description: "Ventilators, side windows and French doors bring in natural light and a breeze.",
  },
  {
    title: "Look after what you buy.",
    description: "Do not paint the door and keep harsh chemicals away from the finish, so it lasts.",
  },
  {
    title: "Recycle at end of life.",
    description: "When a steel door is finally retired, hand it to a scrap or recycling partner.",
  },
];

const comparisonRows = [
  { feature: "Eco-friendly", steel: "Yes", wpc: "No", wooden: "No" },
  { feature: "Termite resistant", steel: "Yes", wpc: "Yes", wooden: "No" },
  { feature: "Strong and durable", steel: "Yes", wpc: "No", wooden: "No" },
  { feature: "Weather and water resistant", steel: "Yes", wpc: "No", wooden: "No" },
];

export default function BetterForTodayBetterForTomorrowPage() {
  return (
    <>
      <Head>
        <title>Better for Today. Better for Tomorrow. | Tata Pravesh Blog</title>
        <meta
          name="description"
          content="Explore how recyclable steel, long-lasting doors and better insulation can support a more sustainable home."
        />
      </Head>

      <Header />

      <main className="better-tomorrow-page">
        <header className="better-tomorrow-page__article-header">
          <nav className="better-tomorrow-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blogs">Blog</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Sustainability</span>
          </nav>

          <h1>Better for Today. Better for Tomorrow.</h1>
          <p className="better-tomorrow-page__lead">
            The doors and windows you choose today will be part of your home for years. Recyclable steel, a long life and
            fewer trees cut make Tata Pravesh a more sustainable material choice for you and for the world your family
            grows up in.
          </p>
        </header>

        <figure className="better-tomorrow-page__hero">
          <Image
            src="/images/blog-better-for-today-tomorrow/sustainable-home-hero.jpg"
            alt="Illustration of a home, a recyclable steel loop, and new saplings"
            width={1800}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 1100px"
          />
          <figcaption>Recyclable steel, today and tomorrow.</figcaption>
        </figure>

        <article className="better-tomorrow-page__article">
          <section aria-labelledby="better-tomorrow-loop">
            <h2 id="better-tomorrow-loop">A door that stays in the loop</h2>
            <p>Most doors follow a straight line: made, used, thrown away. Steel can follow a circle instead.</p>
            <ul className="better-tomorrow-page__steps">
              {sustainabilitySteps.map((step) => (
                <li key={step.number}>
                  <span aria-hidden="true">{step.number}</span>
                  <div>
                    <strong>{step.title}</strong>
                    {step.description}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="better-tomorrow-choice">
            <h2 id="better-tomorrow-choice">Why Tata Pravesh is the more sustainable choice</h2>

            <h3>Recyclable by design</h3>
            <p>
              Tata Pravesh doors are 100% recyclable. When they have done their years of service, the steel does not have
              to end up as waste.
            </p>

            <h3>Saves trees</h3>
            <p>Every steel door you choose is one less wooden door that has to be made from a tree.</p>
            <blockquote className="better-tomorrow-page__quote">
              <p>“You are saving trees by not using wooden doors.”</p>
              <cite>Bharatbhai Keshavlal, Ahmedabad</cite>
            </blockquote>

            <h3>Certified green</h3>
            <p>
              Tata Pravesh is the first steel door with GreenPro certification, as shown on the brochure. Ask your Tata
              Pravesh representative for the certificate details.
            </p>

            <h3>Built to last, so you replace less</h3>
            <p>
              Steel is naturally resistant to termites, does not bow with changes in temperature, and is 7× more resistant
              to warpage than wooden doors*. The doors are weather-proof and maintenance-free, with a UV-resistant
              powder-painted finish that needs no repolishing. There is a 1 year warranty, extendable by up to 4 more
              years, and 2-year and 4-year AMC options.
            </p>

            <h3>Helps your home use less energy</h3>
            <p>
              Door frames come with a foam infill for superior insulation, and the Swing &amp; Slide Window uses a PU foam
              gasket for better thermal insulation. Ventilators and French doors bring in natural light and fresh air.
            </p>
          </section>

          <section aria-labelledby="better-tomorrow-comparison">
            <h2 id="better-tomorrow-comparison">Frames compared</h2>
            <div className="better-tomorrow-page__table-wrap" role="region" aria-label="Frame comparison" tabIndex={0}>
              <table className="better-tomorrow-page__comparison">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Tata Pravesh steel</th>
                    <th scope="col">WPC</th>
                    <th scope="col">Wooden</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>{row.steel}</td>
                      <td>{row.wpc}</td>
                      <td>{row.wooden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="better-tomorrow-page__table-note">As compared in the Tata Pravesh consumer brochure.</p>
          </section>

          <section aria-labelledby="better-tomorrow-products">
            <h2 id="better-tomorrow-products">Products to explore</h2>
            <div className="better-tomorrow-page__products">
              {products.map((product) => (
                <article className="better-tomorrow-page__product-card" key={product.title}>
                  <span>{product.label}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link className="better-tomorrow-page__button" href={product.href}>
                    Know more
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="better-tomorrow-tips">
            <h2 id="better-tomorrow-tips">Five ways to make your home greener</h2>
            <ol className="better-tomorrow-page__tips">
              {greenerHomeTips.map((tip) => (
                <li key={tip.title}>
                  <span><strong>{tip.title}</strong> {tip.description}</span>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <section className="better-tomorrow-page__cta" aria-labelledby="better-tomorrow-cta">
          <h2 id="better-tomorrow-cta">Choose better, for today and tomorrow.</h2>
          <p>See Tata Pravesh doors and windows for yourself.</p>
          <div>
            <Link className="better-tomorrow-page__button" href="/book-a-demo">
              Book a demo
            </Link>
            <a
              className="better-tomorrow-page__button better-tomorrow-page__button--outline"
              href="https://aashiyana.tatasteel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download brochure
            </a>
          </div>
        </section>

        <p className="better-tomorrow-page__disclaimer">
          *Conditions apply. Recyclability, GreenPro certification and comparisons are as stated in the Tata Pravesh
          consumer brochure, version Pravesh/June/R3/2026. Please confirm certification details with Tata Pravesh before
          quoting them elsewhere.
        </p>
      </main>

      <Footer />
    </>
  );
}