import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import type { ReactNode } from "react";
import { useEffect } from "react";

type DoorIllustrationKind =
  | "embossed"
  | "plain-wood"
  | "plain-steel"
  | "mesh"
  | "double"
  | "unequal-double"
  | "reflections"
  | "digital-lock"
  | "ventilator"
  | "side-windows"
  | "fixed-side-window"
  | "door-in-door"
  | "tall"
  | "french";

type Door = {
  category: string;
  title: string;
  description: string;
  kind: DoorIllustrationKind;
};

const doors: Door[] = [
  {
    category: "Entrance & interior",
    title: "Embossed Wood / RAL Door",
    description: "8 embossed designs, 15 wood finishes, 5 RAL shades.",
    kind: "embossed",
  },
  {
    category: "Entrance & interior",
    title: "Plain Wood Finish Door",
    description: "Clean wood-grain look in 15 finishes.",
    kind: "plain-wood",
  },
  {
    category: "Interior",
    title: "Plain Steel Finish Door",
    description: "5 non-wood textures for bedroom, kitchen, balcony.",
    kind: "plain-steel",
  },
  {
    category: "Entrance",
    title: "Fly Mesh Door",
    description: "Rust-proof mesh keeps insects out, breeze in.",
    kind: "mesh",
  },
  {
    category: "Main entrance",
    title: "Double Leaf Door",
    description: "Grand double entry with optional mesh shutter.",
    kind: "double",
  },
  {
    category: "Main entrance",
    title: "Unequal Double Leaf",
    description: "Larger opening with a grand look.",
    kind: "unequal-double",
  },
  {
    category: "Designer",
    title: "Reflections Natura Series",
    description: "6 wood-finish designs with matching handles.",
    kind: "reflections",
  },
  {
    category: "Smart",
    title: "DG Secure Digital Lock",
    description: "Fingerprint, PIN, RFID and mobile access.",
    kind: "digital-lock",
  },
  {
    category: "Entrance",
    title: "Door with Ventilator",
    description: "Fixed or openable ventilator above the door.",
    kind: "ventilator",
  },
  {
    category: "Entrance",
    title: "Door with Side Windows",
    description: "Natural light and fresh air beside the door.",
    kind: "side-windows",
  },
  {
    category: "Entrance",
    title: "Door with Side Fixed Windows",
    description: "Fixed side glass for a bright entryway.",
    kind: "fixed-side-window",
  },
  {
    category: "Entrance",
    title: "Door in Door",
    description: "Door-in-door design, available in North India.",
    kind: "door-in-door",
  },
  {
    category: "Entrance",
    title: "Wood Finish 9 ft Door",
    description: "Extra-tall door for grand entrances.",
    kind: "tall",
  },
  {
    category: "Patio & balcony",
    title: "French Door Lumiére",
    description: "Foldable, 97% opening, up to 45 dB sound insulation.",
    kind: "french",
  },
];

const productPageUrl = "https://aashiyana.tatasteel.com";

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`main-door-designs__container ${className}`}>{children}</div>;
}

function HeroIllustration() {
  return (
    <svg
      className="main-door-designs__hero-art"
      viewBox="0 0 560 380"
      role="img"
      aria-label="Illustration of a Tata Pravesh double door entrance"
    >
      <rect width="560" height="380" fill="#dbe8f7" />
      <rect width="560" height="26" fill="#14407f" />
      <rect y="26" width="560" height="284" fill="#eaf1fa" />
      <rect x="36" y="70" width="96" height="100" fill="#9fc5d9" stroke="#fff" strokeWidth="6" />
      <path d="M84 70v100M428 70h96v100h-96zM476 70v100" fill="none" stroke="#fff" strokeWidth="4" />
      <rect y="310" width="560" height="70" fill="#b9c9de" />
      <rect x="120" y="300" width="320" height="12" fill="#cfd8e6" />
      <rect x="150" y="44" width="260" height="258" rx="2" fill="#5e2a1f" />
      {[156, 280].map((x) => (
        <g key={x}>
          <rect x={x} y="50" width="124" height="252" fill="#8a3f30" />
          {[64, 140, 216].map((y) => (
            <g key={y} fill="none" stroke="#2b100a" strokeOpacity=".55" strokeWidth="1.6">
              <rect x={x + 14} y={y} width="46" height="72" />
              <rect x={x + 64} y={y} width="46" height="72" />
            </g>
          ))}
        </g>
      ))}
      <rect x="278" y="50" width="3" height="252" fill="#5e2a1f" />
      <rect x="268" y="178" width="4" height="31" rx="2" fill="#e4e2da" />
      <rect x="288" y="178" width="4" height="31" rx="2" fill="#e4e2da" />
      {[82, 478].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="290" rx="18" ry="16" fill="#5f9a56" />
          <rect x={x - 9} y="296" width="18" height="14" fill="#b86a45" />
        </g>
      ))}
    </svg>
  );
}

function DoorIllustration({ kind, title }: { kind: DoorIllustrationKind; title: string }) {
  const isDouble = kind === "double" || kind === "unequal-double" || kind === "french";
  const hasSidelights = kind === "side-windows" || kind === "fixed-side-window";
  const hasVentilator = kind === "ventilator";
  const tall = kind === "tall";
  const doorWidth = isDouble ? (kind === "unequal-double" ? 74 : 92) : 60;
  const doorHeight = tall ? 126 : hasVentilator ? 98 : 118;
  const doorX = (200 - doorWidth) / 2;
  const doorY = 136 - doorHeight;
  const wood = kind !== "plain-steel";
  const doorColor = wood ? (kind === "plain-wood" ? "#a5481c" : "#7a3b2c") : "#9a9d9e";
  const doorLeafWidth = doorWidth / (isDouble ? 2 : 1);
  const hasPanels = kind === "embossed" || kind === "reflections" || kind === "door-in-door";

  return (
    <svg viewBox="0 0 200 150" role="img" aria-label={title}>
      <defs>
        {kind === "mesh" && (
          <pattern id={`mesh-${kind}`} width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill="#d3dada" />
            <path d="M0 0H4M0 0V4" stroke="#6a7676" strokeWidth=".7" />
          </pattern>
        )}
      </defs>
      <rect width="200" height="150" fill="#e3eefa" />
      <rect y="136" width="200" height="14" fill="#b9c9de" />
      {hasSidelights && (
        <>
          <rect x="34" y="38" width="30" height="98" fill="#9fc5d9" stroke="#fff" strokeWidth="4" />
          {kind === "side-windows" && (
            <rect x="136" y="38" width="30" height="98" fill="#9fc5d9" stroke="#fff" strokeWidth="4" />
          )}
        </>
      )}
      {hasVentilator && (
        <rect x="70" y="14" width="60" height="20" fill="#9fc5d9" stroke="#5e2a1f" strokeWidth="3" />
      )}
      <rect x={doorX} y={doorY - 5} width={doorWidth} height={doorHeight + 5} rx="2" fill="#5e2a1f" />
      {Array.from({ length: isDouble ? 2 : 1 }, (_, leaf) => {
        const x = doorX + leaf * doorLeafWidth + 5;
        const centerX = x + (doorLeafWidth - 10) / 2;
        return (
          <g key={leaf}>
            <rect x={x} y={doorY} width={doorLeafWidth - 10} height={doorHeight} fill={doorColor} />
            {kind === "french" ? (
              <>
                <rect x={x + 5} y={doorY + 10} width={doorLeafWidth / 2 - 8} height={doorHeight - 26} fill="#9fc5d9" stroke="#fff" strokeWidth="3" />
                <rect x={x + doorLeafWidth / 2} y={doorY + 10} width={doorLeafWidth / 2 - 8} height={doorHeight - 26} fill="#9fc5d9" stroke="#fff" strokeWidth="3" />
              </>
            ) : hasPanels ? (
              <>
                <path
                  d={`M${x + 7} ${doorY + 38}v-18q${(doorLeafWidth - 24) / 4} -14 ${(doorLeafWidth - 24) / 2} 0v18z`}
                  fill="none"
                  stroke="#2b100a"
                  strokeOpacity=".55"
                  strokeWidth="1.6"
                />
                <rect x={x + 7} y={doorY + 45} width={doorLeafWidth - 24} height="14" fill="none" stroke="#2b100a" strokeOpacity=".55" strokeWidth="1.6" />
                <rect x={x + 7} y={doorY + 68} width={(doorLeafWidth - 24) / 2 - 2} height={Math.max(16, doorHeight - 78)} fill="none" stroke="#2b100a" strokeOpacity=".55" strokeWidth="1.6" />
                <rect x={centerX - 2} y={doorY + 60} width="4" height="14" rx="2" fill="#e4e2da" />
              </>
            ) : null}
            {kind === "mesh" && (
              <rect x={x + 4} y={doorY + 4} width={doorLeafWidth - 18} height={doorHeight - 8} fill={`url(#mesh-${kind})`} />
            )}
            {kind === "digital-lock" && (
              <g fill="#e4e2da">
                <rect x={x + doorLeafWidth - 18} y={doorY + 45} width="6" height="22" rx="2" />
                <circle cx={x + doorLeafWidth - 15} cy={doorY + 38} r="3" />
              </g>
            )}
            {kind === "door-in-door" && (
              <rect x={x + 10} y={doorY + 20} width={doorLeafWidth - 30} height={doorHeight - 42} fill="none" stroke="#2b100a" strokeWidth="2" />
            )}
          </g>
        );
      })}
      {isDouble && <rect x="99" y={doorY} width="2" height={doorHeight} fill="#5e2a1f" />}
      {!hasPanels && kind !== "digital-lock" && !isDouble && (
        <rect x={doorX + doorWidth - 14} y={doorY + 60} width="4" height="14" rx="2" fill="#e4e2da" />
      )}
    </svg>
  );
}

function ProductCard({ door }: { door: Door }) {
  return (
    <article className="main-door-designs__card main-door-designs__reveal">
      <div className="main-door-designs__thumbnail">
        <DoorIllustration kind={door.kind} title={door.title} />
      </div>
      <span className="main-door-designs__tag">{door.category}</span>
      <h3>{door.title}</h3>
      <p>{door.description}</p>
      <a
        className="main-door-designs__button main-door-designs__button--product"
        href={productPageUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Know more about ${door.title}`}
      >
        Know more
      </a>
    </article>
  );
}

function MainDoorDesignsPage() {
  useEffect(() => {
    const page = document.querySelector(".main-door-designs");
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = page.querySelectorAll(".main-door-designs__reveal");
    if (!("IntersectionObserver" in window)) return;

    page.classList.add("main-door-designs--animated");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("main-door-designs__reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Tata Pravesh Main Doors</title>
        <meta
          name="description"
          content="Explore Tata Pravesh steel main doors, including wood-finish, double-leaf, mesh, ventilator and French door designs."
        />
      </Head>

      <Header />

      <main className="main-door-designs">
        <section className="main-door-designs__hero">
          <Container className="main-door-designs__hero-inner">
            <div className="main-door-designs__hero-copy main-door-designs__reveal">
              <p className="main-door-designs__eyebrow">Steel doors · Complete range</p>
              <h1>Main Doors</h1>
              <p className="main-door-designs__intro">
                Strong, termite-resistant steel doors for every entrance and room. Pick a door and tap Know more for the
                full details.
              </p>
              <div className="main-door-designs__actions">
                <a className="main-door-designs__button main-door-designs__button--primary" href="#range">
                  Browse doors
                </a>
                <a className="main-door-designs__button main-door-designs__button--secondary" href="tel:18004199200">
                  Call 1-800-4199-200
                </a>
              </div>
              <ul className="main-door-designs__benefits" aria-label="Door benefits">
                <li>Termite-resistant</li>
                <li>Fire-resistant</li>
                <li>Warranty up to 5 years*</li>
              </ul>
            </div>
            <div className="main-door-designs__hero-image main-door-designs__reveal">
              <HeroIllustration />
            </div>
          </Container>
        </section>

        <section className="main-door-designs__stats" aria-label="Door benefits at a glance">
          <Container className="main-door-designs__stats-inner">
            <p className="main-door-designs__reveal"><strong>4×</strong><span>more secure than wood*</span></p>
            <p className="main-door-designs__reveal"><strong>7×</strong><span>more warpage resistant*</span></p>
            <p className="main-door-designs__reveal"><strong>100%</strong><span>recyclable</span></p>
            <p className="main-door-designs__reveal"><strong>2 steps</strong><span>measure, then install</span></p>
          </Container>
        </section>

        <section className="main-door-designs__range" id="range" aria-labelledby="main-door-designs-range-title">
          <Container>
            <h2 className="main-door-designs__reveal" id="main-door-designs-range-title">Choose your door</h2>
            <div className="main-door-designs__grid">
              {doors.map((door) => <ProductCard key={door.title} door={door} />)}
            </div>
            <p className="main-door-designs__disclaimer">
              Thumbnails are illustrations; see each product page for real finishes and shades.
            </p>
          </Container>
        </section>

        <section className="main-door-designs__cta">
          <Container className="main-door-designs__cta-inner main-door-designs__reveal">
            <h2>Not sure which door fits?</h2>
            <p>Talk to our expert or see a door in person. Helpline 1-800-4199-200</p>
            <div className="main-door-designs__actions main-door-designs__actions--center">
              <a className="main-door-designs__button main-door-designs__button--primary" href={productPageUrl} target="_blank" rel="noopener noreferrer">
                Enquire now
              </a>
              <a className="main-door-designs__button main-door-designs__button--secondary" href={productPageUrl} target="_blank" rel="noopener noreferrer">
                Book a demo
              </a>
            </div>
          </Container>
        </section>

        <Container className="main-door-designs__footer-note">
          *Conditions apply. Availability of some doors varies by region. Details per Tata Pravesh consumer brochure,
          version Pravesh/June/R3/2026.
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default MainDoorDesignsPage;