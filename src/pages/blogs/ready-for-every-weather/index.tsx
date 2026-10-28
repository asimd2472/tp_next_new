import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const weatherChallenges = [
  {
    number: "1",
    title: "Sun and heat",
    description: "Polish fades, finishes bleach, and heat makes wood and some frames change shape.",
  },
  {
    number: "2",
    title: "Rain and moisture",
    description: "Moisture swells wood, invites termites and corrodes unprotected metal.",
  },
  {
    number: "3",
    title: "Strong wind",
    description: "Wind pressure rattles loose sashes and pushes rain through weak seals.",
  },
  {
    number: "4",
    title: "Dust and dirt",
    description: "Grit collects in tracks and channels, making windows hard to clean and operate.",
  },
];

const products = [
  {
    label: "Wind and rain",
    title: "Swing & Slide Window",
    description: "Twin gas springs, a PU foam gasket and a channel design that flushes out rain water and dust.",
    href: "/select-best-windows",
  },
  {
    label: "Wide openings",
    title: "French Door Lumière",
    description: "Shields against strong winds, leakage proof, with up to 45 dB sound insulation*.",
    href: "/french-door",
  },
  {
    label: "Every season",
    title: "Tata Pravesh Steel Doors",
    description: "Weather-proof steel with a UV-resistant, powder-painted finish.",
    href: "/doors-for-bedroom",
  },
  {
    label: "Easy to clean",
    title: "Aluminium Windows",
    description: "System aluminium sliding and casement windows with SGU and DGU glass options.",
    href: "/aluminium-windows",
  },
];

const productMatches = [
  {
    issue: "Heavy monsoon rain",
    recommendation: "Try Swing & Slide Window, installed under a canopy or projecting roof slab",
  },
  {
    issue: "Strong winds or a high floor",
    recommendation: "Try Swing & Slide Window with twin gas springs, or the French Door Lumière",
  },
  {
    issue: "Harsh summer sun",
    recommendation: "Try steel doors with the UV-resistant, powder-painted finish",
  },
  {
    issue: "Damp walls and termite-prone areas",
    recommendation: "Try Tata Pravesh steel doors and windows, which are naturally termite-resistant",
  },
];

const weatherproofingTips = [
  {
    title: "Give windows a roof.",
    description: "Windows are not water-proof, so install them under a canopy or projecting roof slab.",
  },
  {
    title: "Keep the coating intact.",
    description: "The door will not rust as long as its outer coating is intact, so keep harsh chemicals and heavy objects away.",
  },
  {
    title: "Clean the tracks.",
    description: "Wipe dust and grit out of channels and tracks before the monsoon so rain water can drain.",
  },
  {
    title: "Do not paint the door.",
    description: "Painting removes the wood finish and is not advised.",
  },
  {
    title: "Check before each season.",
    description: "Look at seals, handles and hinges, and call the helpline on 1800 419 9200 if anything needs attention.",
  },
];

const comparisonRows = [
  {
    feature: "Weather changes",
    wooden: "The shape of a wooden window changes with weather fluctuations",
    tataPravesh: "Resistant to such changes",
  },
  {
    feature: "Water",
    wooden: "Not resistant to water seepage",
    tataPravesh: "Resistant to water seepage",
  },
  {
    feature: "Termites",
    wooden: "Prone to termite attack",
    tataPravesh: "Metal is naturally resistant to termites",
  },
  {
    feature: "Upkeep",
    wooden: "High maintenance as polish wears off in a few years",
    tataPravesh: "Highly durable*",
  },
  {
    feature: "Cleaning",
    wooden: "Not easy to clean",
    tataPravesh: "Easy to clean",
  },
];

export default function ReadyForEveryWeatherPage() {
  return (
    <>
      <Head>
        <title>Ready for Every Weather | Tata Pravesh Blog</title>
        <meta
          name="description"
          content="Learn how Tata Pravesh doors and windows stand up to sun, rain, wind and changing seasons."
        />
      </Head>

      <Header />

      <main className="ready-weather-page">
        <header className="ready-weather-page__article-header">
          <nav className="ready-weather-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blogs">Blog</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Weather</span>
          </nav>

          <h1>Ready for Every Weather: Doors and Windows That Take Sun, Rain and Wind</h1>
          <p className="ready-weather-page__lead">
            Scorching summers, heavy monsoons and sudden storms: your doors and windows face every season head-on. The right
            ones keep working, and keep looking good, long after the weather has done its worst.
          </p>
        </header>

        <figure className="ready-weather-page__hero">
          <Image
            src="/images/blog-ready-for-every-weather/weather-hero.jpg"
            alt="Illustration of a house with a Tata Pravesh door and windows facing sun, rain and wind"
            width={1800}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 1100px"
          />
          <figcaption>Sun, rain and wind: one home, every kind of weather.</figcaption>
        </figure>

        <article className="ready-weather-page__article">
          <section aria-labelledby="ready-weather-challenges">
            <h2 id="ready-weather-challenges">What the weather does to a door</h2>
            <p>Every season brings its own test. Here are four you will recognise.</p>
            <ul className="ready-weather-page__weak-points">
              {weatherChallenges.map((challenge) => (
                <li key={challenge.number}>
                  <span aria-hidden="true">{challenge.number}</span>
                  <div>
                    <strong>{challenge.title}</strong>
                    {challenge.description}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="ready-weather-benefits">
            <h2 id="ready-weather-benefits">How Tata Pravesh stands up to it</h2>

            <h3>Sun: a finish that holds its colour</h3>
            <p>
              Tata Pravesh doors are weather-proof, with a UV-resistant, powder-painted finish. There is no repolishing
              every 2–3 years as wood needs, and the warranty covers colour and texture fading*.
            </p>

            <h3>Rain: sealed against seepage</h3>
            <p>
              Steel is naturally termite-resistant even in damp conditions, and the door will not rust as long as its outer
              coating stays intact. On the Swing &amp; Slide Window, a PU foam gasket helps prevent rainwater seepage, and a
              special channel design flushes out rain water and dust. The French Door Lumière is leakage proof.
            </p>
            <aside className="ready-weather-page__callout">
              <p>
                <strong>Good to know:</strong> windows are not water-proof. Installed windows must be covered with a canopy
                or projecting roof slab.
              </p>
            </aside>

            <h3>Wind: held firm</h3>
            <p>
              Twin gas springs on the Swing &amp; Slide Window help it withstand high wind pressure and dampen any rattling
              sound. The French Door Lumière shields you against strong winds, and steel doors do not bow, so they stay shut
              where they should.
            </p>

            <h3>Heat and humidity swings</h3>
            <p>
              Steel does not bow with changes in temperature, so there is no seasonal shrinkage or expansion. Tata Pravesh
              doors are 7× more resistant to warpage than wooden doors* and, being steel, automatically resist fire.
            </p>

            <h3>Easy to keep clean</h3>
            <p>
              Our metal windows are easy to clean, and the channel design on the Swing &amp; Slide Window helps keep dust and
              rain water from collecting.
            </p>
          </section>

          <section aria-labelledby="ready-weather-comparison">
            <h2 id="ready-weather-comparison">Wooden window versus Tata Pravesh</h2>
            <div className="ready-weather-page__table-wrap" role="region" aria-label="Window comparison" tabIndex={0}>
              <table className="ready-weather-page__comparison">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Wooden window</th>
                    <th scope="col">Tata Pravesh window</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>{row.wooden}</td>
                      <td>{row.tataPravesh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="ready-weather-products">
            <h2 id="ready-weather-products">Products to explore</h2>
            <div className="ready-weather-page__products">
              {products.map((product) => (
                <article className="ready-weather-page__product-card" key={product.title}>
                  <span>{product.label}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link className="ready-weather-page__button" href={product.href}>
                    Know more
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="ready-weather-matches">
            <h2 id="ready-weather-matches">Match the product to your weather</h2>
            <div className="ready-weather-page__matches">
              {productMatches.map((match) => (
                <div key={match.issue}>
                  <span>If you have</span>
                  <p>{match.issue}</p>
                  <span>Try</span>
                  <strong>{match.recommendation}</strong>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="ready-weather-tips">
            <h2 id="ready-weather-tips">Five tips to weatherproof your home</h2>
            <ol className="ready-weather-page__tips">
              {weatherproofingTips.map((tip) => (
                <li key={tip.title}>
                  <span><strong>{tip.title}</strong> {tip.description}</span>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <section className="ready-weather-page__cta" aria-labelledby="ready-weather-cta">
          <h2 id="ready-weather-cta">Ready for every season?</h2>
          <p>See Tata Pravesh doors and windows for yourself.</p>
          <div>
            <Link className="ready-weather-page__button" href="/book-a-demo">
              Book a demo
            </Link>
            <a
              className="ready-weather-page__button ready-weather-page__button--outline"
              href="https://aashiyana.tatasteel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download brochure
            </a>
          </div>
        </section>

        <p className="ready-weather-page__disclaimer">
          *Conditions apply. Weather claims are as stated in the Tata Pravesh consumer brochure, version Pravesh/June/R3/2026.
          Windows are not water-proof and must be covered with a canopy or projecting roof slab. Sound insulation of up to
          45 dB is as stated for the French Door Lumière.
        </p>
      </main>

      <Footer />
    </>
  );
}