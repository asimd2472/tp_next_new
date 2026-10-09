import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

const designs = ["Wave (E32)", "Ripple (E05)", "Coast (E01)", "Shell (E18)", "E65", "E66", "E67", "E68"];

const shades = [
  { name: "Forest Brown (RAL-8017)", color: "#4a2f27" },
  { name: "Snowflake White (RAL-9010)", color: "#f3f2ea" },
  { name: "B-04-01", color: "#6b3a28" },
  { name: "B-02-01", color: "#5a3418" },
  { name: "R-02-01", color: "#3b2330" },
  { name: "16-78-05", color: "#e9dcb1" },
  { name: "R-04-01", color: "#6a3040" },
  { name: "B-22-01", color: "#a46a35" },
  { name: "LB-22-01", color: "#c99a47" },
  { name: "B-12-01", color: "#d9731f" },
  { name: "B-87-02", color: "#8a5233" },
  { name: "LB-87-02", color: "#b57a50" },
  { name: "B-78-05", color: "#8f4a1a" },
  { name: "LB-78-05", color: "#a05c20" },
  { name: "16-22-01", color: "#ecd1b0" },
  { name: "B-11-13", color: "#5d4730" },
  { name: "R-78-05", color: "#7a3f22" },
];

const sizes = ["760", "915", "1050", "1067", "1200"];
const glasses = [
  { name: "Clear Float", color: "#d7ecf3" },
  { name: "Frosted", color: "#f1f3f5" },
  { name: "Karatachi", color: "#c9d6dc" },
  { name: "Tinted", color: "#6f8f7f" },
];
const ventilatorTypes = ["Openable", "Fixed"];

const features = [
  { icon: "🌬️", text: "Improved ventilation" },
  { icon: "☀️", text: "Lets in natural light and fresh air" },
  { icon: "✨", text: "Aesthetically appealing" },
  { icon: "🔒", text: "Openable or fixed ventilator, clear float glass and safety grills" },
  { icon: "📐", text: "Available for doors with 100 mm frame only" },
  { icon: "🚪", text: "Available with single leaf doors only" },
];

const projects = [
  {
    title: "Apartment entrance",
    description: "Daylight reaches the lobby while the door stays locked.",
    background: "#c9d8bd",
    door: "#5a3a2e",
    glass: "#cfe6f0",
  },
  {
    title: "Independent house and villa",
    description: "A frosted ventilator brings in light while maintaining privacy.",
    background: "#e6d9c3",
    door: "#8a5a2b",
    glass: "#e9e9e9",
  },
  {
    title: "Offices, clinics and shops",
    description: "Improved airflow in service corridors and rooms.",
    background: "#d9dde6",
    door: "#f1f1ec",
    glass: "#9bb7a8",
  },
];

const faqs = [
  {
    question: "What is a steel door with a ventilator?",
    answer: "A steel door with a glazed window panel above the door leaf that lets in natural light and fresh air while the door stays closed and secure.",
  },
  {
    question: "Is the ventilator openable or fixed?",
    answer: "Both options are available, with glass and safety grills.",
  },
  {
    question: "Which frame and leaf types are supported?",
    answer: "Ventilator doors are available for 100 mm frames and single-leaf doors only.",
  },
  {
    question: "What sizes are available?",
    answer: "Widths of 760, 915, 1050, 1067 and 1200 mm, each 457 mm high.",
  },
  {
    question: "Which glass types can I choose?",
    answer: "Clear float, frosted, karatachi and tinted glass.",
  },
];

type Selection = {
  design: number;
  shade: number;
  size: number;
  glass: number;
  ventilatorType: number;
};

type ModalType = "demo" | "enquiry";

const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`ventilator-page__container ${className}`}>{children}</div>
);

function Embossing({ design, stroke }: { design: number; stroke: string }) {
  const lineProps = { fill: "none", opacity: 0.55, stroke, strokeWidth: 2 };

  if (design === 0) {
    return <>{Array.from({ length: 11 }, (_, i) => <path key={i} d={`M70 ${150 + i * 21}q15 -10 30 0t30 0t30 0t30 0`} {...lineProps} />)}</>;
  }
  if (design === 1) {
    return <>{[14, 26, 38, 50].map((r) => <circle key={r} cx="150" cy="265" r={r} {...lineProps} />)}</>;
  }
  if (design === 2) {
    return <>{Array.from({ length: 13 }, (_, i) => <path key={i} d={`M70 ${150 + i * 19}H230`} {...lineProps} />)}</>;
  }
  if (design === 3) {
    return <>{[20, 38, 56, 74, 92].map((r) => <path key={r} d={`M${150 - r} 385A${r} ${r} 0 0 1 ${150 + r} 385`} {...lineProps} />)}</>;
  }
  if (design === 4) {
    return <>{[95, 120, 145, 170, 195].map((x) => <path key={x} d={`M${x} 145V385`} {...lineProps} />)}</>;
  }
  if (design === 5) {
    return <><path d="M70 220H230M70 300H230M150 145V385" {...lineProps} /></>;
  }
  if (design === 6) {
    return <>{Array.from({ length: 5 }, (_, i) => <path key={i} d={`M${70 + i * 8} 145V${385 - i * 8}H${230 - i * 8}`} {...lineProps} />)}</>;
  }
  return <>{[170, 230, 290, 350].flatMap((y) => [90, 150, 210].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="40" height="40" {...lineProps} />))}</>;
}

function DoorPreview({ selection }: { selection: Selection }) {
  const shade = shades[selection.shade];
  const glass = glasses[selection.glass];
  const width = 100 + (Number(sizes[selection.size]) - 760) / (1200 - 760) * 70;
  const glassX = (300 - width) / 2;
  const detailStroke = selection.shade === 1 || selection.shade === 5 || selection.shade === 14 ? "#333" : "#fff";

  return (
    <svg className="ventilator-page__door-svg" viewBox="0 0 300 480" role="img" aria-label={`${designs[selection.design]} steel door in ${shade.name} with ${glass.name} ${ventilatorTypes[selection.ventilatorType].toLowerCase()} ventilator`}>
      <rect x="25" y="12" width="250" height="456" rx="2" fill="#d4d8df" />
      <rect x="42" y="28" width="216" height="424" fill={shade.color} />
      <rect x={glassX - 8} y="52" width={width + 16} height="68" fill={shade.color} />
      <rect x={glassX} y="60" width={width} height="52" fill={glass.color} stroke="#444" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M${glassX + 6 + i * (width - 12) / 4} 63V109`} stroke="#555" strokeWidth="2" />)}
      <rect x="60" y="138" width="180" height="314" fill={shade.color} stroke={detailStroke} strokeOpacity=".35" strokeWidth="2" />
      <Embossing design={selection.design} stroke={detailStroke} />
      <rect x="210" y="270" width="10" height="34" rx="4" fill="#ccc" />
    </svg>
  );
}

function ChoiceGroup({
  label,
  values,
  selected,
  onSelect,
  type = "chip",
}: {
  label: string;
  values: { name: string; color?: string }[];
  selected: number;
  onSelect: (index: number) => void;
  type?: "chip" | "swatch";
}) {
  return (
    <div className="ventilator-page__choice-group" role="group" aria-label={label}>
      {values.map((value, index) => (
        <button
          key={value.name}
          type="button"
          className={type === "swatch" ? "ventilator-page__swatch" : "ventilator-page__chip"}
          style={type === "swatch" ? { backgroundColor: value.color } : undefined}
          aria-label={type === "swatch" ? value.name : undefined}
          aria-pressed={selected === index}
          title={type === "swatch" ? value.name : undefined}
          onClick={() => onSelect(index)}
        >
          {type === "chip" ? value.name : null}
        </button>
      ))}
    </div>
  );
}

function VentilatorConfigurator() {
  const [selection, setSelection] = useState<Selection>({
    design: 0,
    shade: 0,
    size: 2,
    glass: 0,
    ventilatorType: 0,
  });
  const [modal, setModal] = useState<ModalType | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (modal && !dialog.open) dialog.showModal();
    if (!modal && dialog.open) dialog.close();
  }, [modal]);

  const updateSelection = (key: keyof Selection, value: number) => {
    setSelection((current) => ({ ...current, [key]: value }));
  };
  const summary = `${designs[selection.design]} · ${shades[selection.shade].name} · ${sizes[selection.size]} × 457 mm · ${glasses[selection.glass].name} glass · ${ventilatorTypes[selection.ventilatorType]} ventilator`;

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setModal(null);
    setSubmitted(false);
  };

  return (
    <>
      <section className="ventilator-page__configurator" aria-label="Door configurator">
        <div className="ventilator-page__preview">
          <DoorPreview selection={selection} />
          <p>{designs[selection.design]} design in {shades[selection.shade].name}</p>
        </div>
        <div className="ventilator-page__panel">
          <p className="ventilator-page__eyebrow">Modern design. Timeless appeal.</p>
          <p className="ventilator-page__lead">Steel doors with a ventilator window bring a contemporary look to your entrance. Crafted for strength, security and long-lasting performance, with light and fresh air built in.</p>
          <div className="ventilator-page__rating" aria-label="Rated 4.8 out of 5, from over 320 reviews">
            <span aria-hidden="true">★★★★★</span><strong>4.8</strong><span>(320+ reviews)</span>
          </div>
          <div className="ventilator-page__price">
            <div><small>Starting Price*</small><strong>₹ XX,XXX</strong></div>
            <p>Pricing depends on your location. Book a demo for an exact quote.</p>
          </div>
          <div className="ventilator-page__actions">
            <button type="button" className="ventilator-page__button" onClick={() => setModal("demo")}>Book a Demo <span aria-hidden="true">→</span></button>
            <button type="button" className="ventilator-page__button ventilator-page__button--outline" onClick={() => setModal("enquiry")}>Enquire Now</button>
          </div>

          <h3><span>1</span>Select Design</h3>
          <ChoiceGroup label="Door design" values={designs.map((name) => ({ name }))} selected={selection.design} onSelect={(value) => updateSelection("design", value)} />
          <h3><span>2</span>Choose Shade — {shades[selection.shade].name}</h3>
          <ChoiceGroup label="Door shade" values={shades} selected={selection.shade} onSelect={(value) => updateSelection("shade", value)} type="swatch" />
          <h3><span>3</span>Ventilator Size (W × H mm)</h3>
          <ChoiceGroup label="Ventilator size" values={sizes.map((name) => ({ name: `${name} × 457` }))} selected={selection.size} onSelect={(value) => updateSelection("size", value)} />
          <h3><span>4</span>Glass Type</h3>
          <ChoiceGroup label="Glass type" values={glasses} selected={selection.glass} onSelect={(value) => updateSelection("glass", value)} />
          <h3><span>5</span>Ventilator Type</h3>
          <ChoiceGroup label="Ventilator type" values={ventilatorTypes.map((name) => ({ name }))} selected={selection.ventilatorType} onSelect={(value) => updateSelection("ventilatorType", value)} />
          <div className="ventilator-page__summary"><strong>Your selection</strong><br />{summary}</div>
          <div className="ventilator-page__actions">
            <button type="button" className="ventilator-page__button" onClick={() => setModal("demo")}>Book a Demo <span aria-hidden="true">→</span></button>
            <button type="button" className="ventilator-page__button ventilator-page__button--outline" onClick={() => setModal("enquiry")}>Enquire Now</button>
          </div>
        </div>
      </section>

      <dialog ref={dialogRef} className="ventilator-page__dialog" onClose={closeModal}>
        {submitted ? (
          <div role="status">
            <h2>Thank you!</h2>
            <p>Our team will contact you shortly.</p>
            <button type="button" className="ventilator-page__button" onClick={closeModal}>Close</button>
          </div>
        ) : (
          <form onSubmit={submitEnquiry}>
            <button type="button" className="ventilator-page__dialog-close" aria-label="Close enquiry form" onClick={closeModal}>×</button>
            <h2>{modal === "demo" ? "Book a demo for this door" : "Enquire about this door"}</h2>
            <p>{summary}</p>
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Phone or email<input name="contact" autoComplete="email" required /></label>
            <label>City / project (optional)<input name="project" autoComplete="address-level2" /></label>
            <button type="submit" className="ventilator-page__button">Send</button>
          </form>
        )}
      </dialog>
    </>
  );
}

function StandardSizes() {
  return (
    <div className="ventilator-page__table-wrap">
      <table>
        <caption>Ventilator dimensions</caption>
        <tbody>
          <tr><th scope="row">Width (mm)</th>{sizes.map((size) => <td key={size}>{size}</td>)}</tr>
          <tr><th scope="row">Height (mm)</th>{sizes.map((size) => <td key={size}>457</td>)}</tr>
        </tbody>
      </table>
    </div>
  );
}

function Projects() {
  return (
    <div className="ventilator-page__project-grid">
      {projects.map((project) => (
        <figure key={project.title}>
          <svg viewBox="0 0 300 170" role="img" aria-label={`Illustration of a ventilator door at a ${project.title.toLowerCase()}`}>
            <rect width="300" height="170" fill={project.background} />
            <rect x="90" y="20" width="120" height="150" fill={project.door} />
            <rect x="100" y="30" width="100" height="24" fill={project.glass} />
          </svg>
          <figcaption><strong>{project.title}</strong><br />{project.description}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="ventilator-page__faq-list">
      {faqs.map(({ question, answer }, index) => (
        <details key={question} open={openIndex === index} onToggle={(event) => {
          if (event.currentTarget.open) setOpenIndex(index);
          else if (openIndex === index) setOpenIndex(null);
        }}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

export default function DoorsWithVentilatorsPage() {
  return (
    <>
      <Head>
        <title>Steel Doors with Ventilators | Tata Pravesh</title>
        <meta name="description" content="Explore single-leaf steel doors with ventilators. Choose from embossed designs, shades, glass types and standard ventilator sizes." />
      </Head>
      <Header />
      <main className="ventilator-page">
        <Container>
          <nav className="ventilator-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true"> / </span>Products<span aria-hidden="true"> / </span>Doors with Ventilators
          </nav>
          <h1>Steel Doors with Ventilators</h1>
          <p className="ventilator-page__quick-answer"><strong>Quick answer:</strong> A steel door with a ventilator adds a glazed window panel above the door leaf, bringing in natural light and airflow without compromising security. Choose openable or fixed ventilators, 8 embossed designs, 17 shades and 4 glass types. Available for 100 mm frames and single-leaf doors.</p>
          <VentilatorConfigurator />

          <section className="ventilator-page__section">
            <h2>Features</h2>
            <ul className="ventilator-page__feature-grid">
              {features.map(({ icon, text }) => (
                <li key={text}><span aria-hidden="true">{icon}</span>{text}</li>
              ))}
            </ul>
          </section>

          <section className="ventilator-page__section">
            <h2>Standard sizes for ventilators</h2>
            <StandardSizes />
          </section>

          <section className="ventilator-page__section">
            <h2>Where ventilator doors work best</h2>
            <p className="ventilator-page__section-intro">Ventilator doors suit entrances where a solid door would leave a passage dark or stuffy.</p>
            <Projects />
          </section>

          <section className="ventilator-page__section ventilator-page__faq">
            <h2>Frequently asked questions</h2>
            <Faq />
          </section>
          <p className="ventilator-page__closing">Elevate the impression of your entrance with steel doors featuring a ventilator window: grand aesthetics, superior ventilation, openness and fresh air.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}