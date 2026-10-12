import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  ["4× stronger*", "than wood doors"],
  ["No warping", "no shrink or swell"],
  ["Termite-proof", "made of steel"],
  ["Polish-free", "UV-resistant coat"],
  ["Installed", "by trained experts"],
];

const benefits = [
  { icon: "🛡️", title: "Security", description: "4 times more secure than wood doors*, with branded locks." },
  { icon: "🌧️", title: "No monsoon trouble", description: "Steel stays straight. No sticking, shrinking or swelling." },
  { icon: "🤫", title: "Silent and smooth", description: "Ball bearing hinges take 2× the weight and last 8× longer." },
  { icon: "🐜", title: "Termite-proof", description: "Steel is naturally resistant to termites." },
  { icon: "🎨", title: "Lasting finish", description: "UV-resistant powder coat. No polishing every 2 to 3 years." },
  { icon: "🌿", title: "Eco-friendly", description: "100% recyclable. GreenPro certified steel doors." },
];

const doorTypes = [
  {
    href: "/embossed-wood-finish-doors/",
    image: "/images/doors-for-bedroom/p1.jpg",
    imageAlt: "Eight Tata Pravesh embossed wood finish door designs",
    eyebrow: "Embossed wood / RAL finish",
    title: "Rich texture, classic style",
    tags: ["8 designs", "15 wood finishes", "5 RAL"],
    features: ["Internal and external use, 46 mm shutter", "Models: Interio Basic, Interio Pro Basic, Classic"],
  },
  {
    href: "/plain-wood-finish-doors/",
    image: "/images/doors-for-bedroom/p2.jpg",
    imageAlt: "Tata Pravesh plain wood finish steel door",
    eyebrow: "Plain wood finish",
    title: "Simple, warm, timeless",
    tags: ["15 wood finishes"],
    features: ["For bedroom, kitchen, balcony and more", "Models: Interio Basic, Interio Pro Basic, Classic"],
  },
  {
    href: "/plain-steel-finish-doors/",
    image: "/images/doors-for-bedroom/p3.jpg",
    imageAlt: "Tata Pravesh plain steel doors in grey, orange and white",
    eyebrow: "Plain steel finish",
    title: "Colour for modern rooms",
    tags: ["5 RAL shades"],
    features: ["Internal use: bedroom, kitchen, utility", "Models: Interio Basic, Interio Pro Basic"],
  },
  {
    href: "/reflections-natura-doors/",
    image: "/images/doors-for-bedroom/p4.jpg",
    imageAlt: "Tata Pravesh Reflections Natura series doors NS 01 to NS 06",
    eyebrow: "Reflections Natura series",
    title: "A statement door",
    tags: ["6 designs", "Reflections INT"],
    features: ["6 lock designs with matching handles", "Single leaf, South, East and West India"],
  },
];

const newDesigns = [
  { name: "E65.", description: "Clean horizontal lines", image: "/images/doors-for-bedroom/p1.jpg" },
  { name: "E66.", description: "Modern vertical accent", image: "/images/doors-for-bedroom/p2.jpg" },
  { name: "E67.", description: "Fluted texture", image: "/images/doors-for-bedroom/p3.jpg" },
  { name: "E68.", description: "Bold fluted panels", image: "/images/doors-for-bedroom/p4.jpg" },
];

const inclusions = [
  "SS ball bearing hinges, tower bolt and lever lock",
  "Bump-ons, shims, hole caps and anchor bolts",
  "Peephole and secondary lock with external doors",
  "Frames: Interio Basic 100 mm, Interio Pro Basic 152.4 mm",
  "2 steps, 1 expert: measurement and installation by our team",
];

const warrantyItems = [
  "Manufacturing defects and termite infestation*",
  "Accessories, and colour and texture fading",
  "2 AMC options: 2 years or 4 years",
];

const faqs = [
  {
    question: "Which door is best for a bedroom?",
    answer: "Our internal steel doors, in embossed wood, plain wood or plain steel finish.",
  },
  {
    question: "How many designs and shades are there?",
    answer: "Embossed: 8 designs, 15 wood finishes, 5 RAL. Plain wood: 15 wood finishes. Plain steel: 5 RAL shades.",
  },
  {
    question: "Will the door warp in monsoon?",
    answer: "No. Steel does not shrink or expand with the seasons.",
  },
  {
    question: "Will it rust?",
    answer: "Not while the outer coating remains intact.",
  },
  {
    question: "Can I paint the door?",
    answer: "It is advised not to. Painting removes the wood finish.",
  },
  {
    question: "Who installs the door?",
    answer: "A trained Tata Pravesh team measures and installs it.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Steel Doors for Bedrooms | Tata Pravesh",
      description:
        "Strong, silent, termite-proof steel bedroom doors in wood finish, plain and embossed designs, with a 1-year warranty extendable up to 5 years.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which door is best for a bedroom?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tata Pravesh internal steel doors are made for bedrooms and kitchens. They are available in embossed wood finish, plain wood finish and plain steel finish, in models such as Interio Basic and Interio Pro Basic.",
          },
        },
        {
          "@type": "Question",
          name: "How many shades and designs are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Embossed doors come in 8 designs, 15 wood grain finishes and 5 RAL finishes. Plain wood doors come in 15 wood grain finishes, and plain steel doors in 5 RAL shades.",
          },
        },
        {
          "@type": "Question",
          name: "Will the door warp or swell in monsoon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tata Pravesh doors are made of steel, so they do not shrink or expand with the seasons the way wooden doors can.",
          },
        },
        {
          "@type": "Question",
          name: "What warranty is provided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 1-year warranty with the option to extend up to an additional 4 years, covering manufacturing defects, termite infestation, accessories and colour or texture fading. Conditions apply.",
          },
        },
        {
          "@type": "Question",
          name: "Can I paint the door?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Painting removes the wood finish, so it is advised not to paint the door.",
          },
        },
        {
          "@type": "Question",
          name: "Who installs the door?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A trained Tata Pravesh installation team measures and installs the door.",
          },
        },
      ],
    },
  ],
};

export default function DoorsForBedroomPage() {
  return (
    <>
      <Head>
        <title>Steel Doors for Bedrooms | Tata Pravesh</title>
        <meta
          name="description"
          content="Strong, silent, termite-proof steel bedroom doors in wood finish, plain and embossed designs, with a 1-year warranty extendable up to 5 years."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Header />

      <main className="bedroom-door">
        <nav className="bedroom-door__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/doors/">Doors</Link> / <span>For Bedrooms</span>
        </nav>

        <section className="bedroom-door__section">
          <div className="bedroom-door__container bedroom-door__hero">
            <div>
              <p className="bedroom-door__eyebrow">Tata Pravesh · Bedroom doors</p>
              <h1>Doors made for your bedroom.</h1>
              <p className="bedroom-door__lead">
                Your bedroom is where you rest. Choose a steel door that keeps it private, stays silent, and looks as warm
                as wood for years.
              </p>
              <div className="bedroom-door__answer">
                <b>Why they&apos;re best:</b> steel strength, a wood finish that needs no polish, no warping in monsoon and
                termite-proof, with a warranty extendable up to 5 years*.
              </div>
              <div className="bedroom-door__actions">
                <a className="bedroom-door__button" href="#book-a-demo">
                  Book a Demo <span aria-hidden="true">→</span>
                </a>
                <a className="bedroom-door__button bedroom-door__button--alt" href="#enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>

            <figure className="bedroom-door__figure bedroom-door__figure--hero">
              <Image
                src="/images/doors-for-bedroom/banner.jpg"
                alt="Tata Pravesh dark wood finish steel door in a warm modern living room"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 50vw"
              />
              <div className="bedroom-door__warranty-badge">
                <b>Up to 5 yrs</b>
                <span>Warranty*</span>
              </div>
            </figure>
          </div>
        </section>

        <section className="bedroom-door__section">
          <div className="bedroom-door__container bedroom-door__highlights">
            {highlights.map(([title, description]) => (
              <div className="bedroom-door__highlight" key={title}>
                <b>{title}</b>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bedroom-door__section">
          <div className="bedroom-door__container">
            <p className="bedroom-door__eyebrow">Why steel for bedrooms</p>
            <h2>What your bedroom door should do.</h2>
            <div className="bedroom-door__benefits">
              {benefits.map((benefit) => (
                <article className="bedroom-door__benefit" key={benefit.title}>
                  <h3>
                    <span aria-hidden="true">{benefit.icon}</span> {benefit.title}
                  </h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bedroom-door__section">
          <div className="bedroom-door__container">
            <p className="bedroom-door__eyebrow">Our bedroom door range</p>
            <h2>Pick the door that fits your room.</h2>
            <p className="bedroom-door__section-intro">
              For bedroom and kitchen doors we recommend our internal doors.
            </p>

            <div className="bedroom-door__products">
              {doorTypes.map((door) => (
                <article className="bedroom-door__product" key={door.href}>
                  <Link className="bedroom-door__product-image" href={door.href}>
                    <Image src={door.image} alt={door.imageAlt} fill sizes="(max-width: 820px) 100vw, 25vw" />
                  </Link>
                  <div className="bedroom-door__product-body">
                    <p className="bedroom-door__eyebrow">{door.eyebrow}</p>
                    <h3>{door.title}</h3>
                    <p className="bedroom-door__tags">
                      {door.tags.map((tag) => (
                        <span className="bedroom-door__tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </p>
                    <ul className="bedroom-door__checklist">
                      {door.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <Link className="bedroom-door__know-more" href={door.href}>
                      Know more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bedroom-door__section">
          <div className="bedroom-door__container">
            <div className="bedroom-door__section-heading">
              <div>
                <p className="bedroom-door__eyebrow">Newly launched</p>
                <h2>E65, E66, E67 and E68.</h2>
              </div>
              <Link className="bedroom-door__know-more" href="/newly-launched-doors/">
                Know more <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="bedroom-door__new-designs">
              {newDesigns.map((design) => (
                <figure className="bedroom-door__figure" key={design.name}>
                  <div className="bedroom-door__design-image">
                    <Image
                      src={design.image}
                      alt={`Tata Pravesh ${design.name.slice(0, -1)} door in four shades`}
                      fill
                      sizes="(max-width: 760px) 100vw, 25vw"
                    />
                  </div>
                  <figcaption>
                    <b>{design.name}</b> {design.description}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bedroom-door__section">
          <div className="bedroom-door__container bedroom-door__solution">
            <div className="bedroom-door__box">
              <p className="bedroom-door__eyebrow">One-stop door solution</p>
              <h2>What comes with your door.</h2>
              <ul className="bedroom-door__checklist">
                {inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="bedroom-door__actions">
                <a className="bedroom-door__button" href="#book-a-demo">
                  Book a Demo <span aria-hidden="true">→</span>
                </a>
                <a className="bedroom-door__button bedroom-door__button--alt" href="#enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>
            <div className="bedroom-door__warranty">
              <p className="bedroom-door__eyebrow">Warranty</p>
              <h2>1 year, extendable up to 5 years.*</h2>
              <ul>
                {warrantyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <small>*Conditions apply.</small>
            </div>
          </div>
        </section>

        <section className="bedroom-door__section">
          <div className="bedroom-door__container" id="faq">
            <p className="bedroom-door__eyebrow">Questions</p>
            <h2>Bedroom door FAQs.</h2>
            <div className="bedroom-door__faqs">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="bedroom-door__fine-print">
              <em>
                *Conditions apply. Strength claims are as per Tata Pravesh comparison with wooden doors. MOQ applies to
                some RAL shades. Talk to our expert: 1-800-4199-200
              </em>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
