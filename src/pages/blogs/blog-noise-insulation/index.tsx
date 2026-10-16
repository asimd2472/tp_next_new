import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const noiseEntryPoints = [
  {
    number: "1",
    title: "Gaps around the frame",
    description: "Even a thin gap lets sound through, just as it lets air through.",
  },
  {
    number: "2",
    title: "Thin glass",
    description: "A single thin pane vibrates easily and passes noise into the room.",
  },
  {
    number: "3",
    title: "Light or warped doors",
    description: "A door that bows or swells leaves gaps and rattles in its frame.",
  },
  {
    number: "4",
    title: "Loose or noisy fittings",
    description: "Worn hinges and rattling sashes add noise of their own.",
  },
];

const products = [
  {
    label: "Quietest balcony and patio",
    title: "French Door Lumière",
    description: "Fully foldable, leakage proof, and sound insulation of up to 45 dB*.",
    href: "/french-door",
  },
  {
    label: "Rattle-free ventilation",
    title: "Swing & Slide Window",
    description: "Twin gas springs and a PU foam gasket for a steady, sealed window.",
    href: "/select-best-windows",
  },
  {
    label: "Wide views, sealed frames",
    title: "Aluminium Sliding Windows",
    description: "Glass from 6 mm to 26 mm, with SGU and DGU options.",
    href: "/aluminium-windows",
  },
  {
    label: "A solid, quiet entrance",
    title: "Tata Pravesh Steel Doors",
    description: "Steel that stays true, with ball bearing hinges and a snug frame.",
    href: "/doors-for-bedroom",
  },
];

const noiseMatches = [
  {
    issue: "Noisy balcony, patio or lawn side",
    recommendation: "French Door Lumière (up to 45 dB*)",
  },
  {
    issue: "Bedroom facing the road",
    recommendation: "Aluminium sliding or casement windows with double glazed (DGU) glass",
  },
  {
    issue: "Windows that rattle in the wind",
    recommendation: "Swing & Slide Window with twin gas springs",
  },
  {
    issue: "Front door facing a busy street or corridor",
    recommendation: "Steel door with ball bearing hinges and a snug steel frame",
  },
];

const quietHomeTips = [
  {
    title: "Seal the gaps.",
    description:
      "A correctly sized opening and professional installation matter as much as the product. Tata Pravesh doors and windows are installed by trained experts.",
  },
  {
    title: "Choose the right glass.",
    description: "Thicker or double glazed glass is a well-known way to cut outside noise.",
  },
  {
    title: "Start with the noisy side.",
    description: "Upgrade the openings that face the road, railway or market first.",
  },
  {
    title: "Keep it tight.",
    description: "Check hinges, handles and gaskets from time to time and fix rattles early.",
  },
  {
    title: "Layer it.",
    description: "Curtains, rugs and soft furnishings absorb echo inside the room.",
  },
];

function NoiseEntryDiagram() {
  return (
    <svg
      className="noise-insulation-page__diagram"
      viewBox="0 0 520 280"
      role="img"
      aria-label="Diagram of a wall with a window and a door. Four weak spots for noise are numbered: gaps around the frame, thin glass, a light or warped door, and loose fittings."
    >
      <rect width="520" height="280" fill="#e8eef6" />
      <rect x="20" y="20" width="480" height="240" fill="#cfd8e4" />
      <rect x="60" y="60" width="150" height="120" fill="#f4f4f0" stroke="#9aa7b8" strokeWidth="3" />
      <rect x="72" y="72" width="126" height="96" fill="#bcd9ee" />
      <path d="M82 160 120 76M112 160l38-84" stroke="#fff" strokeOpacity=".6" strokeWidth="6" />
      <rect x="60" y="180" width="150" height="8" fill="#aab6c6" />
      <rect x="290" y="60" width="130" height="200" fill="#5e2a1f" />
      <rect x="298" y="68" width="114" height="192" fill="#8a3f30" />
      <rect x="326" y="110" width="58" height="48" fill="none" stroke="#2b100a" strokeOpacity=".4" strokeWidth="3" />
      <rect x="326" y="170" width="58" height="60" fill="none" stroke="#2b100a" strokeOpacity=".4" strokeWidth="3" />
      <rect x="404" y="150" width="5" height="26" rx="2.5" fill="#e4e2da" />
      <rect x="290" y="96" width="8" height="18" fill="#c4c8cc" />
      <rect x="290" y="206" width="8" height="18" fill="#c4c8cc" />
      <path d="M34 120q-14-16 0-32M22 130q-24-26 0-52" fill="none" stroke="#d8402a" strokeWidth="4" strokeLinecap="round" />
      <g transform="translate(212 124)">
        <circle r="15" fill="#14407f" />
        <text y="5.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">1</text>
      </g>
      <g transform="translate(135 40)">
        <circle r="15" fill="#14407f" />
        <text y="5.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">2</text>
      </g>
      <g transform="translate(355 44)">
        <circle r="15" fill="#14407f" />
        <text y="5.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">3</text>
      </g>
      <g transform="translate(272 215)">
        <circle r="15" fill="#14407f" />
        <text y="5.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">4</text>
      </g>
      <path d="m206 136 4 12M135 55v17m220-13v9m-71 154 10 2" fill="none" stroke="#14407f" strokeWidth="2" />
    </svg>
  );
}

export default function BlogNoiseInsulationPage() {
  return (
    <>
      <Head>
        <title>Superior Noise Insulation | Tata Pravesh Blog</title>
        <meta
          name="description"
          content="Learn how doors and windows can help keep outside noise out, and explore practical tips for a quieter home."
        />
      </Head>

      <Header />

      <main className="noise-insulation-page">
        <header className="noise-insulation-page__article-header">
          <nav className="noise-insulation-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blogs">Blog</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Noise insulation</span>
          </nav>

          <h1>Superior Noise Insulation: How Tata Pravesh Keeps the Noise Out</h1>
          <div className="noise-insulation-page__meta">
            <span className="noise-insulation-page__tag">Home comfort</span>
            <span>By Tata Pravesh</span>
            <span>4 min read</span>
          </div>
          <p className="noise-insulation-page__lead">
            Honking, construction, neighbours, late-night traffic. In a busy city, a quiet home is a luxury. The good news is
            that most of the noise reaching your rooms comes in through your doors and windows, and that is something you can
            fix.
          </p>
        </header>

        <figure className="noise-insulation-page__hero">
          <div className="noise-insulation-page__hero-image">
            <Image
              src="/images/blog-noise-insulation/noise-insulation-hero.jpg"
              alt="Illustration showing noisy outdoor surroundings, doors and windows, and a calm living room"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
          <figcaption>
            Noise outside, peace inside. *Sound insulation of up to 45 dB is the figure stated in the Tata Pravesh consumer
            brochure for the French Door Lumière.
          </figcaption>
        </figure>

        <article className="noise-insulation-page__article">
          <section aria-labelledby="noise-entry-title">
            <h2 id="noise-entry-title">Where noise gets in</h2>
            <p>
              Sound travels through air and through solid materials. Your walls are usually the strongest barrier, so your
              openings are the weak link. Look for these four spots.
            </p>

            <figure className="noise-insulation-page__diagram-wrap">
              <NoiseEntryDiagram />
            </figure>

            <ul className="noise-insulation-page__weak-points">
              {noiseEntryPoints.map((point) => (
                <li key={point.number}>
                  <span aria-hidden="true">{point.number}</span>
                  <div>
                    <strong>{point.title}</strong>
                    {point.description}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="noise-solutions-title">
            <h2 id="noise-solutions-title">How Tata Pravesh helps</h2>

            <h3>Steel that stays true</h3>
            <p>
              Tata Pravesh doors are made of steel, which does not bow with changes in temperature, so the door keeps sitting
              snugly in its frame. They are also 7× more resistant to warpage than wooden doors*. Ball bearing hinges are
              built so the door does not swing or make sound, and the door frames use a foam infill to provide superior
              insulation.
            </p>

            <h3>French Door Lumière: stay beyond the chaos</h3>
            <p>
              Lumière is a fully foldable French door that opens up to 97%, shields you against strong winds, is leakage proof
              and offers sound insulation of up to 45 dB*. It suits a lawn opening, balcony, patio, garage or a room
              partition, which are often the noisiest edges of a home.
            </p>

            <aside className="noise-insulation-page__callout">
              <p>
                <strong>Good to know:</strong> sound is measured in decibels (dB), and the scale is not linear. A big number
                on the label really does mean a much quieter room.
              </p>
            </aside>

            <h3>Windows that seal and stay quiet</h3>
            <p>
              The Swing &amp; Slide Window is fitted with twin gas springs that hold the sash steady against high wind pressure
              and dampen any rattling sound. A PU foam gasket helps prevent rainwater seepage and gives better thermal
              insulation. Our system aluminium windows offer glass from 6 mm to 26 mm in the sliding range, with SGU and DGU
              (single and double glazed unit) options.
            </p>
          </section>

          <section aria-labelledby="noise-products-title">
            <h2 id="noise-products-title">Products to explore</h2>
            <div className="noise-insulation-page__products">
              {products.map((product) => (
                <article className="noise-insulation-page__product-card" key={product.title}>
                  <span>{product.label}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link className="noise-insulation-page__button" href={product.href}>
                    Know more
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="noise-match-title">
            <h2 id="noise-match-title">Match the product to your noise problem</h2>
            <div className="noise-insulation-page__matches">
              {noiseMatches.map((match) => (
                <div key={match.issue}>
                  <span>If you have</span>
                  <p>{match.issue}</p>
                  <span>Try</span>
                  <strong>{match.recommendation}</strong>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="noise-tips-title">
            <h2 id="noise-tips-title">Five tips for a quieter home</h2>
            <ol className="noise-insulation-page__tips">
              {quietHomeTips.map((tip) => (
                <li key={tip.title}>
                  <span>
                    <strong>{tip.title}</strong> {tip.description}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <section className="noise-insulation-page__cta" aria-labelledby="noise-cta-title">
          <h2 id="noise-cta-title">Want a quieter home?</h2>
          <p>See Tata Pravesh doors and windows for yourself.</p>
          <div>
            <Link className="noise-insulation-page__button" href="/book-a-demo">
              Book a demo
            </Link>
            <Link className="noise-insulation-page__button noise-insulation-page__button--outline" href="/blogs">
              Explore more articles
            </Link>
          </div>
        </section>

        <p className="noise-insulation-page__disclaimer">
          *Conditions apply. Sound insulation of up to 45 dB is as stated in the Tata Pravesh consumer brochure for the French
          Door Lumière. Actual noise reduction depends on installation, glass and surroundings. Product details per the Tata
          Pravesh consumer brochure, version Pravesh/June/R3/2026.
        </p>
      </main>

      <Footer />
    </>
  );
}