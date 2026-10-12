import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

const features = [
  {
    title: "Main entrance ready",
    description: "External doors in embossed and plain wood finish.",
  },
  {
    title: "Mesh shutter option",
    description:
      "Single mesh shutter (up to 1300 mm width) keeps insects out, breeze in. Included in Supreme and Supreme Pro.",
  },
  {
    title: "Safety grill",
    description: "Also offered in the mesh shutter for extra security.",
  },
  {
    title: "Equal or unequal leaves",
    description: "Unequal leaves give a larger opening and a grand look.",
  },
];

const benefits = ["4× more secure than wood*", "7× more warpage resistant*", "0 termite worries", "100% recyclable"];

const designs = [
  { name: "Wave E32", image: "/images/double-door-wave-e32.svg" },
  { name: "Coast E01", image: "/images/double-door-coast-e01.svg" },
  { name: "Ripple E05", image: "/images/double-door-ripple-e05.svg" },
  { name: "Shell E18", image: "/images/double-door-shell-e18.svg" },
  { name: "E65", image: "/images/double-door-e65.svg" },
  { name: "E66", image: "/images/double-door-e66.svg" },
  { name: "E67", image: "/images/double-door-e67.svg" },
  { name: "E68", image: "/images/double-door-e68.svg" },
  { name: "Plain wood", image: "/images/double-door-plain-wood.svg" },
];

const entranceTypes = [
  {
    name: "Villa",
    image: "/images/double-door-villa.svg",
    alt: "Double door at a villa main entrance",
  },
  {
    name: "Independent house",
    image: "/images/double-door-independent-house.svg",
    alt: "Double door on an independent house porch",
  },
  {
    name: "Apartment",
    image: "/images/double-door-apartment.svg",
    alt: "Double door at an apartment entrance",
  },
  {
    name: "Bungalow",
    image: "/images/double-door-bungalow.svg",
    alt: "Double door on a bungalow with gate pillars",
  },
];

const models = [
  { name: "Royal", description: "External double leaf, 100 mm frame" },
  { name: "Royal Pro", description: "External double leaf, 152.4 mm frame" },
  { name: "Supreme", description: "Double leaf + single mesh shutter, 170 mm frame" },
  { name: "Supreme Pro", description: "Double leaf + single mesh shutter, 170 mm frame + grill" },
];

const unequalLeafSizes = [
  "1000×2062",
  "925×2062",
  "1077×2062",
  "1524×2134",
  "2134×2439",
  "1830×2439",
  "1830×2134",
  "1524×2439",
  "1200×2134",
  "1200×2057",
  "1200×2100",
];

const shades = [
  { name: "Sun Teak", color: "#6b4a2b" },
  { name: "Lava Teak", color: "#432a18" },
  { name: "Trunk Mahogany", color: "#2c1b26" },
  { name: "Nest Mahogany", color: "#6e3445" },
  { name: "B-87-02", color: "#7a4a12" },
  { name: "LB-22-01", color: "#c8923a" },
  { name: "B-12-01", color: "#d9701f" },
  { name: "B-11-13", color: "#5c4e48" },
  { name: "LB-78-05", color: "#b5792b" },
  { name: "B-78-05", color: "#a5481c" },
  { name: "R-78-05", color: "#7a3f33" },
  { name: "16-22-01", color: "#d9cbb9" },
  { name: "16-78-05", color: "#cfc59e" },
  { name: "LB-87-02", color: "#c07a33" },
  { name: "B-22-01", color: "#a8672f" },
  { name: "Forest Brown", color: "#45322a" },
  { name: "Snowflake White", color: "#eeeee6" },
  { name: "Graphite Grey*", color: "#2f3436" },
  { name: "Metallic Grey*", color: "#9a9d9e" },
  { name: "Orange Brown*", color: "#a05e32" },
];

const serviceDetails = [
  {
    title: "Accessories",
    description:
      "SS Tower Bolt, SS Hinges, Bump Ons, Shims, Hole Caps, Anchor Bolt, Lever Lock, Peephole and Secondary Lock.",
  },
  {
    title: "Warranty",
    description:
      "1 year, extendable by up to 4 more years. Covers manufacturing defects and termite infestation*, accessories, and colour fading. 2- and 4-year AMC options.",
  },
  {
    title: "Installation",
    description: "Measurement, then installation by a trained expert. Contactless installation available.*",
  },
];

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: string }) {
  return (
    <div className="double-door-designs__section-heading">
      <p className="double-door-designs__eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  );
}

export default function DoubleDoorDesignsPage() {
  return (
    <>
      <Head>
        <title>Double Door Designs | Tata Pravesh</title>
        <meta
          name="description"
          content="Explore Tata Pravesh double door designs, finishes, models, sizes and shades for a grand steel main entrance."
        />
      </Head>

      <Header />

      <main className="double-door-designs">
        <section className="double-door-designs__hero">
          <div className="double-door-designs__container double-door-designs__hero-content">
            <div className="double-door-designs__hero-copy">
              <p className="double-door-designs__eyebrow">Steel doors · Double leaf range</p>
              <h1>Double Door</h1>
              <p className="double-door-designs__lead">
                A grand main entrance with the strength of steel. Equal or unequal leaves, embossed or plain wood finish,
                with an optional mesh shutter.
              </p>
              <div className="double-door-designs__actions">
                <a
                  className="double-door-designs__button"
                  href="https://aashiyana.tatasteel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know more
                </a>
                <a className="double-door-designs__button double-door-designs__button--secondary" href="tel:18004199200">
                  Call 1-800-4199-200
                </a>
              </div>
              <div className="double-door-designs__chips" aria-label="Door highlights">
                <span>Termite-resistant</span>
                <span>Mesh shutter option</span>
                <span>Warranty up to 5 years*</span>
              </div>
            </div>
            <div className="double-door-designs__hero-art">
              <Image
                src="/images/double-door-hero.svg"
                alt="Illustration of a Tata Pravesh double door"
                width={300}
                height={360}
                priority
              />
            </div>
          </div>
        </section>

        <section className="double-door-designs__section double-door-designs__features">
          <div className="double-door-designs__container double-door-designs__card-grid">
            {features.map((feature) => (
              <article className="double-door-designs__card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="double-door-designs__benefit-band">
          <div className="double-door-designs__container double-door-designs__benefits">
            {benefits.map((benefit) => (
              <p key={benefit}>{benefit}</p>
            ))}
          </div>
        </section>

        <section className="double-door-designs__section" id="designs">
          <div className="double-door-designs__container">
            <SectionHeading eyebrow="Designs">Choose a design</SectionHeading>
            <div className="double-door-designs__design-grid">
              {designs.map((design) => (
                <figure className="double-door-designs__design" key={design.name}>
                  <Image src={design.image} alt={`Double door design ${design.name}`} width={260} height={200} />
                  <figcaption>{design.name}</figcaption>
                </figure>
              ))}
            </div>
            <p className="double-door-designs__note">
              Illustrative renderings. Embossed designs on unequal double leaf are available for 1300 mm+ doors.
            </p>
          </div>
        </section>

        <section className="double-door-designs__section" id="where-it-fits">
          <div className="double-door-designs__container">
            <SectionHeading eyebrow="Where it fits">Entrances for every kind of home</SectionHeading>
            <div className="double-door-designs__entrance-grid">
              <figure className="double-door-designs__entrance">
                <div className="double-door-designs__entrance-image">
                  <Image
                    src="/images/double-door-equal.jpg"
                    alt="Tata Pravesh equal double leaf steel door"
                    width={319}
                    height={544}
                  />
                </div>
                <figcaption>Equal double leaf</figcaption>
              </figure>
              <figure className="double-door-designs__entrance">
                <div className="double-door-designs__entrance-image">
                  <Image
                    src="/images/double-door-unequal.jpg"
                    alt="Unequal double leaf steel door against a blue wall"
                    width={452}
                    height={524}
                  />
                </div>
                <figcaption>Unequal double leaf</figcaption>
              </figure>
              {entranceTypes.map((entrance) => (
                <figure className="double-door-designs__entrance" key={entrance.name}>
                  <div className="double-door-designs__entrance-image">
                    <Image src={entrance.image} alt={entrance.alt} width={400} height={300} />
                  </div>
                  <figcaption>{entrance.name}</figcaption>
                </figure>
              ))}
            </div>
            <p className="double-door-designs__note">First two are brochure photos; the rest are illustrations.</p>
          </div>
        </section>

        <section className="double-door-designs__section">
          <div className="double-door-designs__container double-door-designs__specifications">
            <div>
              <SectionHeading eyebrow="Models">Models</SectionHeading>
              <div className="double-door-designs__model-grid">
                {models.map((model) => (
                  <article className="double-door-designs__card" key={model.name}>
                    <h3>{model.name}</h3>
                    <p>{model.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Sizes">Unequal leaf sizes (mm)</SectionHeading>
              <div className="double-door-designs__chips">
                {unequalLeafSizes.map((size) => (
                  <span key={size}>{size}</span>
                ))}
              </div>
              <p className="double-door-designs__note">W × H, for 100 mm and 152.4 mm frames.</p>
            </div>
          </div>
        </section>

        <section className="double-door-designs__section" id="shades">
          <div className="double-door-designs__container">
            <SectionHeading eyebrow="Finishes">Shades</SectionHeading>
            <ul className="double-door-designs__shades">
              {shades.map((shade) => (
                <li className="double-door-designs__shade" key={shade.name}>
                  <span className="double-door-designs__swatch" style={{ backgroundColor: shade.color }} aria-hidden="true" />
                  <span>{shade.name}</span>
                </li>
              ))}
            </ul>
            <p className="double-door-designs__note">15 wood finishes and 5 RAL finishes. Swatches are indicative.</p>
          </div>
        </section>

        <section className="double-door-designs__section">
          <div className="double-door-designs__container double-door-designs__card-grid double-door-designs__service-grid">
            {serviceDetails.map((detail) => (
              <article className="double-door-designs__card" key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="double-door-designs__cta">
          <div className="double-door-designs__container">
            <h2>Want the full specifications?</h2>
            <p>Sizes, other door types and ordering are on the main product page.</p>
            <div className="double-door-designs__actions">
              <a
                className="double-door-designs__button"
                href="https://aashiyana.tatasteel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know more
              </a>
              <a
                className="double-door-designs__button double-door-designs__button--secondary"
                href="tel:18004199200"
              >
                Helpline 1-800-4199-200
              </a>
              <a
                className="double-door-designs__button double-door-designs__button--secondary"
                href="https://wa.me/918688322698"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp 8688322698
              </a>
            </div>
          </div>
        </section>

        <footer className="double-door-designs__footer">
          <div className="double-door-designs__container">
            *Conditions apply. MOQ required for RAL shades 7021, 9006 and 8023. Double leaf doors are available in
            equal door shutter only. Details per Tata Pravesh consumer brochure, version Pravesh/June/R3/2026.
          </div>
        </footer>
      </main>

      <Footer />
    </>
  );
}
