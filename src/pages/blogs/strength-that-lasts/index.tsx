import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const wearFactors = [
  {
    number: "1",
    title: "Termites",
    description: "Wood is a meal for termites, and infestation is likely in moisture.",
  },
  {
    number: "2",
    title: "Moisture and heat",
    description: "Wood changes shape in moisture and heat, making the door harder to open and close.",
  },
  {
    number: "3",
    title: "Force",
    description: "Wooden doors and windows can be broken or cut, even by a hammer.",
  },
  {
    number: "4",
    title: "Sun, rain and wear",
    description: "Polish needs redoing every 2–3 years, and butt hinges wear away easily.",
  },
];

const durabilityStats = [
  { value: "4×", label: "more secure than wood doors*" },
  { value: "7×", label: "more resistant to warpage*" },
  { value: "8×", label: "longer-lasting ball bearing hinges" },
  { value: "5 yrs", label: "warranty option*" },
];

const durabilityBenefits = [
  {
    title: "Strength you can count on",
    description:
      "Tata Pravesh doors are 4× more secure than wood doors*, and our steel windows are 4× stronger than wooden windows. A hammer that can break through wood is a very different test for steel.",
  },
  {
    title: "Termite-proof by nature",
    description:
      "Steel is naturally resistant to termites, so there is nothing for them to eat. The warranty even covers termite infestation*.",
  },
  {
    title: "Stays true to shape",
    description:
      "Steel does not bow with changes in temperature, so there is no seasonal shrinkage or expansion. Tata Pravesh doors are 7× more resistant to warpage than wooden doors*, which keeps them opening and closing smoothly.",
  },
  {
    title: "Ready for any weather, and for fire",
    description:
      "The doors are weather-proof and, being made of steel, automatically resist fire. A UV-resistant, powder-painted finish means no repolishing every few years.",
  },
  {
    title: "Hardware that keeps up",
    description:
      "Ball bearing hinges take 2× more weight and work 8× longer than ordinary butt hinges. Locks and accessories are branded and come with a warranty, and external doors include a secondary lock for added security.",
  },
  {
    title: "Backed by a warranty",
    description:
      "Every door comes with a 1 year warranty, with an option to extend by up to 4 more years. It covers manufacturing defects and termite infestation*, accessories, and colour and texture fading. 2-year and 4-year AMC options are also available.",
  },
];

const comparisonRows = [
  {
    feature: "Termites",
    wood: "Infestation is likely in moisture",
    steel: "Steel is naturally resistant to termites",
  },
  {
    feature: "Shape",
    wood: "Changes shape in moisture or heat, so it is harder to open and close",
    steel: "Does not bow with change in temperature",
  },
  {
    feature: "Strength",
    wood: "Easily broken or cut, even by a hammer",
    steel: "4× stronger",
  },
  {
    feature: "Hinges",
    wood: "Butt hinges wear away easily",
    steel: "Ball bearing hinges take 2× more weight and work 8× longer",
  },
  {
    feature: "Finish",
    wood: "Polish needed every 2–3 years",
    steel: "UV-resistant, powder-painted",
  },
];

const products = [
  {
    label: "Steel with a wood look",
    title: "Embossed & Plain Wood Finish Doors",
    description: "15 wood-grain finishes and 5 RAL shades, in embossed and plain designs.",
    href: "/doors-for-bedroom",
  },
  {
    label: "Grand and secure",
    title: "Double Leaf Door",
    description: "A main entrance door with a secondary lock and an optional mesh shutter.",
    href: "/double-door-designs",
  },
  {
    label: "Smart protection",
    title: "DG Secure Digital Lock",
    description: "Fingerprint, password, RFID and mobile access, up to 100 users per mode.",
    href: "/doors-for-bedroom",
  },
  {
    label: "Strong windows",
    title: "Pebble Steel Windows",
    description: "Hinged and sliding steel windows, 4× stronger than wooden windows*.",
    href: "/select-best-windows",
  },
];

const careTips = [
  {
    title: "Do not paint the door.",
    description:
      "Painting removes the wood finish. To keep the elegant look, leave the factory finish as it is.",
  },
  {
    title: "Protect the coating.",
    description:
      "The finish is factory engineered and will not get spoilt unless harsh chemicals or a heavy object destroy the outer coating. The door will not rust as long as the coating stays intact.",
  },
  {
    title: "Handle with care.",
    description: "Although the door is made from high quality steel, it may get dented with rough use.",
  },
  {
    title: "Store it flat before fitting.",
    description:
      "Have it delivered at installation. If it arrives earlier, keep it flat on a raised surface and do not let heavy objects fall on it.",
  },
  {
    title: "Let the experts install it.",
    description:
      "Doors are fitted by a trained installation team, and 2-year and 4-year AMC options are available.",
  },
];

function DoorWearDiagram() {
  return (
    <svg
      className="strength-that-lasts-page__diagram"
      viewBox="0 0 520 280"
      role="img"
      aria-label="Illustration of an old wooden door affected by termites, moisture, force and weather"
    >
      <rect width="520" height="280" fill="#e8eef6" />
      <rect x="18" y="18" width="484" height="244" rx="8" fill="#d8e0ea" />
      <rect x="145" y="42" width="230" height="220" rx="4" fill="#6c4532" />
      <rect x="158" y="54" width="204" height="208" fill="#8c5a3b" stroke="#593727" strokeWidth="5" />
      <path d="M260 58v200M160 120h200M160 190h200" stroke="#593727" strokeWidth="5" />
      <path d="M212 55l-12 35 18 16-22 35 15 27-20 33 17 24-15 35M312 56l9 29-15 31 20 25-14 26 20 27-18 27 13 39" fill="none" stroke="#2d201b" strokeWidth="4" />
      <circle cx="176" cy="103" r="7" fill="#241a15" />
      <circle cx="344" cy="153" r="8" fill="#241a15" />
      <circle cx="185" cy="222" r="7" fill="#241a15" />
      <circle cx="336" cy="236" r="6" fill="#241a15" />
      <rect x="346" y="145" width="8" height="24" rx="4" fill="#d8d2c7" />
      <path d="M64 94q-16 14 0 28M50 82q-27 27 0 54" fill="none" stroke="#d8402a" strokeWidth="4" strokeLinecap="round" />
      <path d="M92 210h34m-26-8v16m18-16v16" stroke="#2a6ab5" strokeWidth="4" strokeLinecap="round" />
      <g transform="translate(125 72)">
        <circle r="15" fill="#14407f" />
        <text y="5.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">1</text>
      </g>
      <g transform="translate(393 94)">
        <circle r="15" fill="#14407f" />
        <text y="5.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">2</text>
      </g>
      <g transform="translate(398 202)">
        <circle r="15" fill="#14407f" />
        <text y="5.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">3</text>
      </g>
      <g transform="translate(120 220)">
        <circle r="15" fill="#14407f" />
        <text y="5.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">4</text>
      </g>
    </svg>
  );
}

export default function StrengthThatLastsPage() {
  return (
    <>
      <Head>
        <title>Strength That Lasts | Tata Pravesh Blog</title>
        <meta
          name="description"
          content="Discover why steel doors and windows offer lasting strength, security and durability compared with wood."
        />
      </Head>

      <Header />

      <main className="strength-that-lasts-page">
        <header className="strength-that-lasts-page__article-header">
          <nav className="strength-that-lasts-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blogs">Blog</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Strength</span>
          </nav>

          <h1>Strength That Lasts: Why Steel Beats Wood at Home</h1>
          <div className="strength-that-lasts-page__meta">
            <span className="strength-that-lasts-page__tag">Durability</span>
            <span>By Tata Pravesh</span>
            <span>4 min read</span>
          </div>
          <p className="strength-that-lasts-page__lead">
            Your doors and windows are used every day, in every season, and tested by weather, pests and sometimes by people
            who should not be there. Strength that lasts is what separates one you can forget about from one you keep
            repairing.
          </p>
        </header>

        <figure className="strength-that-lasts-page__hero">
          <div className="strength-that-lasts-page__hero-image">
            <Image
              src="/images/blog-strength-that-lasts/strength-that-lasts-hero.jpg"
              alt="Comparison of a worn wooden door with a strong Tata Pravesh steel door"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
          <figcaption>Wood over time versus Tata Pravesh steel. *4× more secure than wood doors; conditions apply.</figcaption>
        </figure>

        <article className="strength-that-lasts-page__article">
          <section aria-labelledby="strength-wear-title">
            <h2 id="strength-wear-title">What wears a door down</h2>
            <p>A home’s entrance faces the same four enemies year after year. Wood struggles with each of them.</p>
            <figure className="strength-that-lasts-page__diagram-wrap">
              <DoorWearDiagram />
            </figure>
            <ul className="strength-that-lasts-page__wear-factors">
              {wearFactors.map((factor) => (
                <li key={factor.number}>
                  <span aria-hidden="true">{factor.number}</span>
                  <div>
                    <strong>{factor.title}</strong>
                    {factor.description}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="strength-built-title">
            <h2 id="strength-built-title">How Tata Pravesh is built to last</h2>
            <div className="strength-that-lasts-page__stats">
              {durabilityStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            {durabilityBenefits.map((benefit) => (
              <div className="strength-that-lasts-page__benefit" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}

            <aside className="strength-that-lasts-page__callout">
              <p>
                <strong>Good to know:</strong> the same promise is made for windows. Metal frames are naturally resistant to
                termites, seepage resistant and easy to clean.
              </p>
            </aside>
          </section>

          <section aria-labelledby="strength-comparison-title">
            <h2 id="strength-comparison-title">Wood versus Tata Pravesh steel</h2>
            <div className="strength-that-lasts-page__table-wrap" role="region" aria-label="Wood and steel comparison" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Wood</th>
                    <th scope="col">Tata Pravesh steel</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>{row.wood}</td>
                      <td>{row.steel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="strength-products-title">
            <h2 id="strength-products-title">Products to explore</h2>
            <div className="strength-that-lasts-page__products">
              {products.map((product) => (
                <article className="strength-that-lasts-page__product-card" key={product.title}>
                  <span>{product.label}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link className="strength-that-lasts-page__button" href={product.href}>
                    Know more
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="strength-care-title">
            <h2 id="strength-care-title">Keep it strong for years</h2>
            <ol className="strength-that-lasts-page__tips">
              {careTips.map((tip) => (
                <li key={tip.title}>
                  <span>
                    <strong>{tip.title}</strong> {tip.description}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <section className="strength-that-lasts-page__cta" aria-labelledby="strength-cta-title">
          <h2 id="strength-cta-title">Build it once. Build it to last.</h2>
          <p>See Tata Pravesh doors and windows for yourself.</p>
          <div>
            <Link className="strength-that-lasts-page__button" href="/book-a-demo">
              Book a demo
            </Link>
            <Link
              className="strength-that-lasts-page__button strength-that-lasts-page__button--outline"
              href="/doors-for-bedroom"
            >
              Explore doors
            </Link>
          </div>
        </section>

        <p className="strength-that-lasts-page__disclaimer">
          *Conditions apply. All comparisons are as stated in the Tata Pravesh consumer brochure, version
          Pravesh/June/R3/2026. Warranty terms and AMC options apply as per the warranty card.
        </p>
      </main>

      <Footer />
    </>
  );
}