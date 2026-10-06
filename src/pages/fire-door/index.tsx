import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { FaCheck, FaChevronRight, FaCloud, FaDoorOpen, FaFire, FaLock } from "react-icons/fa6";

/* ---------- data ---------- */
const stats = [
  ["120 min", "Fire resistance"],
  ["46 min", "(thermal insulation)"],
  ["BS 476", "Part 22 & 24 (2000)"],
  ["1 year", "Limited warranty"],
];
const jobs = [
  { Icon: FaFire, t: "Slows the spread of fire", d: "It reduces the propagation of fire and heat, and keeps flames on one side." },
  { Icon: FaCloud, t: "Contains smoke", d: "Contains smoke, keeps escape routes clear and allows fire-fighting to work." },
  { Icon: FaDoorOpen, t: "Gives a clear way out", d: "Provides a safe route for people to evacuate quickly and safely." },
  { Icon: FaLock, t: "Works as an everyday door", d: "Adds daily security and is used as a normal door." },
];
const doors = [
  { t: "Fire rated doors", d: "For staircases, corridors, plant rooms and exits.  Single or double leaf, with options of vision panel and panic bar.", pills: ["Up to 120 min", "Single leaf", "Double leaf", "Vision panel"] },
  { t: "Shaft / duct access doors", d: "Smaller doors for electrical ducts and fire equipment. Available fire rated or non fire rated.", pills: ["Fire rated", "Non fire rated", "Single or double panel"] },
];
const featLeft = [
  "Galvanised or stainless steel",
  "Honeycomb, rockwool or mineral wool core",
  "120 minute rating for stability and integrity (BS476)",
  "UL, welded doors for 90 minutes",
  "Vision panel rated up to 120 minutes",
  "Non-fragile finishes to sharp edges",
];
const featRight = [
  "Factory prepared for mortise hardware",
  "Fully flush construction",
  "Fire-rated flush wall openings and dry wall partitions",
  "Wide range of colours, wood grain finish options",
  "Tested up to 650°C",
  "Installed by trained, skilled installation teams",
];
const specs: [string, string][] = [
  ["Door leaf", "1.2 mm (18 SWG) or 0.8 mm (22 SWG) light-gauge galvanised steel sheet. 15 / 27 mm thick, 44 mm overall."],
  ["Infill", "Rockwool, mineral wool or fire-retardant honeycomb."],
  ["Door frame", "1.6 mm (16 SWG) or 1.2 mm (18 SWG) galvanised steel sheet, IS 277. Single or double rebate. Profile: 143 mm x 56 mm."],
  ["Vision glass", "5 mm clear or wired glass, secured by rubber gasket. 200 mm or 300 mm square; high-integrity rated glass available."],
  ["Finish", "Zinc-rich base coating primer. Epoxy polyester or polyurethane powder coat, 60–95 microns."],
  ["Hinges", "Stainless steel ball-bearing butt hinges, 102 mm x 76 mm x 3 mm (thk). 3 per door, depending on height."],
  ["Lock", "Mortise sash lock, dead bolt, latch or panic device. Concealed fixings; surface-mounted or concealed door options."],
  ["Maximum size", "Single leaf: 2.15 m (high) x 1.22 m (wide). Double leaf: 2.30 m (high) x 2.44 m (wide)."],
  ["Tested", "BS 476 Part 22 & 24 (2000) (Certified) Building Research Institute."],
];
const hardware = [
  ["Hinges, panic bars, D-handles", "Geze, Haffele, Dorma, Kich"],
  ["Door closers", "Dorgar, Geze, Hettich, Dorma, Assa Abloy, Kich"],
  ["Main door locks and dead locks", "Geze, Haffele, Dorma, Korma, Kich"],
];
const faqs = [
  "What is the door made of?",
  "Can the door be used with access control?",
  "Why are the frames double rebate?",
];

/* ---------- small helpers ---------- */
const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`fire-door__container ${className}`}>{children}</div>
);
const H2 = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`fire-door__heading ${className}`}>{children}</h2>
);

/* ---------- sections ---------- */
function Hero() {
  return (
    <section className="fire-door__hero">
      <Container className="fire-door__hero-content">
        <div className="fire-door__hero-copy">
          <nav className="fire-door__breadcrumb" aria-label="Breadcrumb">Home / Products / Fire-Rated Doors</nav>
          <h1>
            Fire rated doors that hold the line for 2 hours
          </h1>
          <p className="fire-door__hero-description">
            Stark Fire doors and shutters from Tata Steel. Factory-engineered, tested to BS 476 Part 22 &amp; 24 (2000), and ready for your safety. Because real access can’t wait.
          </p>
          <div className="fire-door__hero-actions">
            <a href="#enquire" className="fire-door__button fire-door__button--light">Enquire Now</a>
            <a href="#brochure" className="fire-door__button fire-door__button--outline">Download Brochure (PDF)</a>
          </div>
          <dl className="fire-door__stats">
            {stats.map(([v, l]) => (
              <div key={v}>
                <dt>{v}</dt>
                <dd>{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="fire-door__hero-image">
          <Image
            src="/images/fair-door.jpg"
            alt="Red fire-rated door with a push bar"
            width={764}
            height={1024}
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function FourJobs() {
  return (
    <section className="fire-door__section fire-door__jobs">
      <Container>
        <H2>Four jobs a fire door does when it matters</H2>
        <p className="fire-door__section-intro">
          Sometimes, it’s a straightforward job to shut. A fire door controls the fire and smoke, so people get time to leave and fire-fighting can proceed.
        </p>
        <div className="fire-door__job-grid">
          {jobs.map(({ Icon, t, d }) => (
            <article key={t} className="fire-door__job-card">
              <Icon aria-hidden="true" />
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyIndia() {
  return (
    <section className="fire-door__why">
      <Container className="fire-door__why-content">
        <H2>Why India’s buildings need them</H2>
        <p className="fire-door__why-description">
          From residential (apartments, hotels, PGs) to commercial (offices, hospitals, schools) and industrial (factories, warehouses), fire safety is a must.
        </p>
      </Container>
    </section>
  );
}

function Pills({ items }: { items: string[] }) {
  const [on, setOn] = useState(0);
  return (
    <div className="fire-door__pills">
      {items.map((p, i) => (
        <button key={p} type="button" onClick={() => setOn(i)} aria-pressed={on === i}
          className={`fire-door__pill${on === i ? " fire-door__pill--active" : ""}`}>
          {p}
        </button>
      ))}
    </div>
  );
}

function ChooseDoor() {
  return (
    <section className="fire-door__section fire-door__choose">
      <Container>
        <H2>Choose your door</H2>
        <div className="fire-door__door-grid">
          {doors.map((x) => (
            <article key={x.t} className="fire-door__door-card">
              <h3>{x.t}</h3>
              <p>{x.d}</p>
              <Pills items={x.pills} />
            </article>
          ))}
        </div>
        <p className="fire-door__used-in">
          <strong>Used in:</strong> high-rise buildings, metro stations, hospitals, hotels, malls, multiplexes, power plants, telecom centres, industrial plants, schools, software parks and restaurants.
        </p>
      </Container>
    </section>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>
          <FaCheck aria-hidden="true" />
          {i}
        </li>
      ))}
    </ul>
  );
}

function Features({ panel = false }: { panel?: boolean }) {
  return (
    <section className={`fire-door__section fire-door__features${panel ? " fire-door__features--panel" : ""}`}>
      <Container>
        <H2>Built for demanding environments</H2>
        <div className="fire-door__feature-grid">
          <CheckList items={featLeft} />
          <CheckList items={featRight} />
        </div>
      </Container>
    </section>
  );
}

function TechSpecs() {
  return (
    <section className="fire-door__section fire-door__specifications">
      <Container>
        <H2>Technical specifications</H2>
        <p className="fire-door__specification-note">Fire rated doors &amp; door rating.</p>
        <div className="fire-door__table-wrap">
          <table>
            <tbody>
              {specs.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function Hardware() {
  return (
    <section className="fire-door__section fire-door__hardware">
      <Container>
        <H2 className="fire-door__heading--small">Hardware from trusted makers</H2>
        <p className="fire-door__section-intro">Every set includes fire rated hardware tested with the door.</p>
        <div className="fire-door__hardware-grid">
          {hardware.map(([t, d]) => (
            <article key={t} className="fire-door__hardware-card">
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className="fire-door__hardware-checklist">
          <strong>Checklist before you buy:</strong> Fire rated frame, hinges, closer, lock, handle and vision panel, plus manufacturer data and sample test results. Buy the frame with the shutter to both meet fire, smoke and acoustic standards.
        </p>
      </Container>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="fire-door__section fire-door__faq">
      <Container>
        <H2 className="fire-door__heading--small">Frequently asked questions</H2>
        <ul className="fire-door__faq-list">
          {faqs.map((q, i) => (
            <li key={q}>
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}
                className="fire-door__faq-toggle">
                <FaChevronRight className={open === i ? "fire-door__faq-chevron fire-door__faq-chevron--open" : "fire-door__faq-chevron"} />
                {q}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function CtaBand() {
  return (
    <section id="enquire" className="fire-door__cta">
      <h2>Need fire doors for your project?</h2>
      <p>Tell us the door type, size and quantity. Our team will get back to you with a quote.</p>
      <a href="#enquire" className="fire-door__button fire-door__button--light">Enquire Now</a>
    </section>
  );
}

/* ---------- page ---------- */
export default function FireDoorsPage() {
  return (
    <>
      <Head>
        <title>Fire Rated Doors | Tata Pravesh</title>
        <meta name="description" content="Explore Tata Pravesh fire-rated doors, technical specifications, hardware and fire-resistance features." />
      </Head>
      <Header />
      <div className="fire-door">
        <main>
          <Hero />
          <FourJobs />
          <WhyIndia />
          <ChooseDoor />
          <Features panel />
          <Features />
          <TechSpecs />
          <Hardware />
          <Faq />
          <CtaBand />
        </main>
      </div>
      <Footer />
    </>
  );
}
