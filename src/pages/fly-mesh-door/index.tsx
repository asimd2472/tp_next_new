import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

const features = [
  {
    title: "Rust-proof fly mesh",
    description: "High quality mesh keeps insects at bay without obstructing the flow of breeze.",
  },
  {
    title: "Safety grill option",
    description: "A safety grill is also offered in the mesh shutter for additional security.",
  },
  {
    title: "Your choice of finish",
    description: "Available with Embossed, Plain Wood Finish and RAL doors, in 15 wood-grain and 5 RAL shades.",
  },
];

const advantages = [
  ["4×", "more secure than wood doors*"],
  ["7×", "more resistant to warpage than wooden doors*"],
  ["0", "worry about termites, as steel is naturally resistant"],
  ["100%", "recyclable, and saves trees"],
];

const installationScenes = [
  {
    image: "/images/fly-mesh-door/installation-scene-1.svg?v=2",
    alt: "Fly mesh door at an apartment corridor entrance",
    caption: "Apartment entrance",
  },
  {
    image: "/images/fly-mesh-door/installation-scene-2.svg?v=2",
    alt: "Fly mesh door on an independent house porch",
    caption: "Independent house porch",
  },
  {
    image: "/images/fly-mesh-door/installation-scene-3.svg?v=2",
    alt: "Fly mesh door opening to an apartment balcony",
    caption: "Apartment balcony",
  },
  {
    image: "/images/fly-mesh-door/installation-scene-4.svg?v=2",
    alt: "Fly mesh door in a kitchen",
    caption: "Kitchen and service entry",
  },
  {
    image: "/images/fly-mesh-door/installation-scene-5.svg?v=2",
    alt: "Fly mesh door on a villa entrance",
    caption: "Villa entrance",
  },
  {
    image: "/images/fly-mesh-door/installation-scene-6.svg?v=2",
    alt: "Fly mesh doors on a row of houses",
    caption: "Row houses and townships",
  },
];

const models = [
  ["Deluxe", "External single leaf solid door + single mesh shutter with 170 mm frame"],
  ["Deluxe Pro", "Single leaf solid door + single mesh shutter with 170 mm frame + grill"],
  ["Supreme", "External double leaf solid door + single mesh shutter with 170 mm frame"],
  ["Supreme Pro", "External double leaf solid door + single mesh shutter with 170 mm frame + grill"],
];

const shades = [
  { name: "Sun Teak B0401", color: "#6b4a2b" },
  { name: "Lava Teak B0201", color: "#432a18" },
  { name: "Trunk Mahogany R0201", color: "#2c1b26" },
  { name: "Nest Mahogany R0401", color: "#6e3445" },
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
  { name: "Forest Brown RAL 8017", color: "#45322a" },
  { name: "Snowflake White RAL 9010", color: "#eeeee6" },
  { name: "Graphite Grey RAL 7021*", color: "#2f3436" },
  { name: "Metallic Grey RAL 9006*", color: "#9a9d9e" },
  { name: "Orange Brown RAL 8023*", color: "#a05e32" },
];

const serviceDetails = [
  {
    title: "Included accessories",
    description: "SS Tower Bolt, Lever Lock, SS Hinges, Bump Ons. Architrave and threshold available on request.",
  },
  {
    title: "Warranty",
    description:
      "1 year warranty with an option to extend by up to 4 more years. Covers manufacturing defects and termite infestation*, accessories, and colour and texture fading. 2-year and 4-year AMC options available.",
  },
  {
    title: "Installation",
    description:
      "Two steps, one expert: measurement, then installation by a trained professional. Contactless installation available.*",
  },
];

const productPageUrl = "https://aashiyana.tatasteel.com";

export default function FlyMeshDoorPage() {
  return (
    <>
      <Head>
        <title>Tata Pravesh Fly Mesh Door</title>
        <meta
          name="description"
          content="Let the breeze in and keep insects out with Tata Pravesh fly mesh doors. Rust-proof mesh, optional safety grill, a range of finishes and warranty up to 5 years."
        />
      </Head>

      <Header />

      <main className="fly-mesh-door">
        <section className="fly-mesh-door__section fly-mesh-door__hero-section">
          <div className="fly-mesh-door__container fly-mesh-door__hero">
            <div className="fly-mesh-door__hero-copy">
              <p className="fly-mesh-door__eyebrow">Steel doors · Fly mesh range</p>
              <h1>Fly Mesh Door</h1>
              <p className="fly-mesh-door__lead">
                Let the breeze in and keep insects out. A rust-proof fly mesh shutter on a termite-resistant steel door,
                with an optional safety grill for added security.
              </p>
              <div className="fly-mesh-door__actions">
                <a className="fly-mesh-door__button" href={productPageUrl} target="_blank" rel="noopener noreferrer">
                  Know more
                </a>
                <a className="fly-mesh-door__button fly-mesh-door__button--secondary" href="tel:18004199200">
                  Call 1-800-4199-200
                </a>
              </div>
              <ul className="fly-mesh-door__pills">
                <li>Termite-resistant</li>
                <li>Rust-proof mesh</li>
                <li>Warranty up to 5 years*</li>
              </ul>
            </div>

            <div className="fly-mesh-door__hero-art" aria-hidden="true">
              <div className="fly-mesh-door__door-frame">
                <div className="fly-mesh-door__door-panel">
                  <span />
                  <span />
                  <span />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fly-mesh-door__section">
          <div className="fly-mesh-door__container">
            <h2>Built for fresh air and peace of mind</h2>
            <div className="fly-mesh-door__feature-grid">
              {features.map((feature) => (
                <article className="fly-mesh-door__card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fly-mesh-door__section fly-mesh-door__advantages-section">
          <div className="fly-mesh-door__container fly-mesh-door__advantages">
            <h2>Why steel beats wood</h2>
            <p className="fly-mesh-door__section-lead">The promise of every Tata Pravesh door.</p>
            <div className="fly-mesh-door__advantage-grid">
              {advantages.map(([stat, description]) => (
                <article className="fly-mesh-door__card fly-mesh-door__advantage" key={stat}>
                  <strong>{stat}</strong>
                  <span>{description}</span>
                </article>
              ))}
            </div>
            <p className="fly-mesh-door__advantage-note">
              Also fire-resistant, weather-proof and UV-resistant powder-coated, so no polishing every 2–3 years.
            </p>
          </div>
        </section>

        <section className="fly-mesh-door__section">
          <div className="fly-mesh-door__container">
            <p className="fly-mesh-door__eyebrow">Where it fits</p>
            <h2>One door, every kind of home</h2>
            <p className="fly-mesh-door__section-lead fly-mesh-door__where-lead">
              From city apartments to independent houses, the Fly Mesh Door lets fresh air in and keeps insects out.
              Scenes below are illustrations of typical installations.
            </p>
            <div className="fly-mesh-door__scene-grid">
              <figure className="fly-mesh-door__scene fly-mesh-door__scene--product">
                <div className="fly-mesh-door__product-visual">
                  <Image
                    src="/images/fly-mesh-door/fly-mesh-door.jpg"
                    alt="Tata Pravesh fly mesh door with three mesh panels, door open"
                    width={330}
                    height={643}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 45vw, 30vw"
                  />
                </div>
                <figcaption>The Fly Mesh Door</figcaption>
              </figure>
              {installationScenes.map((scene) => (
                <figure className="fly-mesh-door__scene" key={scene.caption}>
                  <Image src={scene.image} alt={scene.alt} width={400} height={300} sizes="(max-width: 600px) 100vw, (max-width: 900px) 45vw, 30vw" />
                  <figcaption>{scene.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="fly-mesh-door__section">
          <div className="fly-mesh-door__container">
            <h2>Models</h2>
            <div className="fly-mesh-door__table-wrap" role="region" aria-label="Fly mesh door models" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map(([model, description]) => (
                    <tr key={model}>
                      <th scope="row">{model}</th>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="fly-mesh-door__section">
          <div className="fly-mesh-door__container">
            <h2>Shades</h2>
            <p className="fly-mesh-door__section-lead">
              15 wood-grain finishes and 5 RAL finishes. Swatches are indicative; refer to the shade card.
            </p>
            <ul className="fly-mesh-door__shade-grid">
              {shades.map((shade) => (
                <li className="fly-mesh-door__swatch" key={shade.name}>
                  <span className="fly-mesh-door__swatch-color" style={{ backgroundColor: shade.color }} aria-hidden="true" />
                  <span>{shade.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="fly-mesh-door__section">
          <div className="fly-mesh-door__container fly-mesh-door__service-grid">
            {serviceDetails.map((detail) => (
              <article className="fly-mesh-door__card" key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fly-mesh-door__section fly-mesh-door__cta-section">
          <div className="fly-mesh-door__container fly-mesh-door__cta">
            <h2>Want the full specifications?</h2>
            <p>See sizes, other door types and ordering options on the main product page.</p>
            <a className="fly-mesh-door__button fly-mesh-door__button--light" href={productPageUrl} target="_blank" rel="noopener noreferrer">
              Know more
            </a>
            <p className="fly-mesh-door__contact">
              <a href="tel:18004199200">Helpline 1-800-4199-200</a>
              <span aria-hidden="true"> · </span>
              <a href="https://wa.me/918688322698" target="_blank" rel="noopener noreferrer">
                WhatsApp 8688322698
              </a>
            </p>
          </div>
        </section>

        <div className="fly-mesh-door__container fly-mesh-door__fine-print">
          *Conditions apply. MOQ required for RAL shades 7021, 9006 and 8023. Fly mesh door is available with Embossed,
          Plain Wood Finish and RAL doors. Product details as per Tata Pravesh consumer brochure, version
          Pravesh/June/R3/2026.
        </div>
      </main>

      <Footer />
    </>
  );
}
