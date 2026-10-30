import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const colours = [
  { name: "Volcano Red", hex: "#870d22", frame: "#690a1a" },
  { name: "Fire Red", hex: "#d81920", frame: "#a81318" },
  { name: "Forest Brown", hex: "#3e1815", frame: "#301210" },
  { name: "Snowflake White", hex: "#fefef2", frame: "#c6c6bc" },
  { name: "Moon Cream", hex: "#f1ead8", frame: "#bbb6a8" },
  { name: "Cloud White", hex: "#eaeae8", frame: "#b6b6b4" },
  { name: "Pearl White", hex: "#e8e7d5", frame: "#b4b4a6" },
  { name: "Sand Grey", hex: "#b3b4a2", frame: "#8b8c7e" },
  { name: "Sapphire Blue", hex: "#004e90", frame: "#003c70" },
  { name: "Ocean Blue", hex: "#0080c7", frame: "#00639b" },
  { name: "Crystal Blue", hex: "#40668b", frame: "#314f6c" },
] as const;

const locks = ["Knob type", "Lever type", "Aldrop", "Shaft lock"] as const;

const applications = [
  ["Service shafts", "Access to electrical and plumbing risers."],
  ["Duct access", "Reach ducts and fittings for maintenance."],
  ["Wall-mounted access", "Open the wall to the fittings behind the door."],
  ["Passage access", "Get into a passage for repair work."],
];

function DoorPreview({
  colourIndex,
  visionPanel,
  lockIndex,
}: {
  colourIndex: number;
  visionPanel: boolean;
  lockIndex: number;
}) {
  const colour = colours[colourIndex];

  return (
    <div className="shaft-access__preview">
      <svg
        viewBox="0 0 300 440"
        role="img"
        aria-label={`Preview of a ${colour.name} shaft access door, ${visionPanel ? "with" : "without"} a vision panel, with ${locks[lockIndex]}`}
      >
        <rect width="300" height="440" fill="#cfd6e2" />
        <g stroke="#b3bcca" strokeWidth="2">
          <line x1="0" y1="110" x2="300" y2="110" />
          <line x1="0" y1="250" x2="300" y2="250" />
          <line x1="0" y1="390" x2="300" y2="390" />
          <line x1="150" y1="0" x2="150" y2="110" />
          <line x1="60" y1="110" x2="60" y2="250" />
          <line x1="240" y1="250" x2="240" y2="440" />
        </g>
        <rect x="64" y="64" width="172" height="312" fill={colour.frame} />
        <rect
          x="74"
          y="74"
          width="152"
          height="292"
          fill={colour.hex}
          stroke="#000"
          strokeOpacity=".25"
          strokeWidth="2"
        />
        {visionPanel && (
          <>
            <rect
              x="116"
              y="120"
              width="68"
              height="120"
              fill="#2b3340"
              stroke="#000"
              strokeOpacity=".35"
              strokeWidth="3"
            />
            <path d="M124 130 L150 130 L124 190 Z" fill="#fff" fillOpacity=".14" />
          </>
        )}
        <g fill="#aab2bd">
          <rect x="214" y="104" width="8" height="26" />
          <rect x="214" y="206" width="8" height="26" />
          <rect x="214" y="308" width="8" height="26" />
        </g>
        {lockIndex === 0 && (
          <>
            <rect x="84" y="262" width="26" height="40" rx="5" fill="#c4cad2" stroke="#6a727c" strokeWidth="2" />
            <circle cx="97" cy="282" r="10" fill="#e8ebef" stroke="#6a727c" strokeWidth="2" />
          </>
        )}
        {lockIndex === 1 && (
          <>
            <rect x="84" y="258" width="18" height="52" rx="5" fill="#c4cad2" stroke="#6a727c" strokeWidth="2" />
            <rect x="92" y="278" width="44" height="9" rx="4.5" fill="#e8ebef" stroke="#6a727c" strokeWidth="2" />
          </>
        )}
        {lockIndex === 2 && (
          <>
            <rect x="84" y="272" width="44" height="12" rx="3" fill="#aab2bd" stroke="#6a727c" strokeWidth="2" />
            <circle cx="128" cy="278" r="9" fill="none" stroke="#6a727c" strokeWidth="4" />
            <rect x="84" y="262" width="12" height="32" rx="3" fill="#c4cad2" stroke="#6a727c" strokeWidth="2" />
          </>
        )}
        {lockIndex === 3 && (
          <>
            <rect x="84" y="262" width="22" height="44" rx="4" fill="#c4cad2" stroke="#6a727c" strokeWidth="2" />
            <circle cx="95" cy="278" r="5" fill="#2b3340" />
            <rect x="93" y="280" width="4" height="12" rx="2" fill="#2b3340" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function ShaftDuctAccessDoorPage() {
  const [colourIndex, setColourIndex] = useState(1);
  const [visionPanel, setVisionPanel] = useState(true);
  const [lockIndex, setLockIndex] = useState(1);
  const colour = colours[colourIndex];

  return (
    <>
      <Head>
        <title>Shaft / Duct Access Door | Tata Pravesh</title>
        <meta
          name="description"
          content="Explore Tata Pravesh shaft and duct access doors. Choose your colour, vision panel and lock, then enquire."
        />
      </Head>

      <Header />

      <main className="shaft-access">
        <section className="shaft-access__container shaft-access__hero" aria-labelledby="shaft-access-title">
          <div className="shaft-access__hero-copy">
            <p className="shaft-access__eyebrow">Commercial doors</p>
            <h1 id="shaft-access-title">Shaft / Duct Access Doors</h1>
            <p className="shaft-access__intro">
              Steel access doors for service shafts and ducts. Pick a colour, vision panel and lock, then enquire.
            </p>
            <div className="shaft-access__actions">
              <a className="shaft-access__button" href="https://aashiyana.tatasteel.com" target="_blank" rel="noopener noreferrer">
                Enquire now
              </a>
              <a className="shaft-access__button shaft-access__button--outline" href="#configure">
                Choose colour
              </a>
            </div>
          </div>

          <figure className="shaft-access__photo">
            <Image
              src="/images/shaft-duct-access-door/hero.jpg"
              alt="Red Tata Pravesh shaft access door with a vision panel set into a tiled wall"
              fill
              priority
              sizes="(max-width: 899px) 100vw, 50vw"
            />
          </figure>
        </section>

        <section className="shaft-access__container shaft-access__section" id="configure" aria-labelledby="configure-title">
          <h2 className="shaft-access__heading" id="configure-title">
            Design your door
          </h2>

          <div className="shaft-access__configurator">
            <DoorPreview colourIndex={colourIndex} visionPanel={visionPanel} lockIndex={lockIndex} />

            <div className="shaft-access__controls">
              <div className="shaft-access__group">
                <p className="shaft-access__label">
                  Colour: <strong>{colour.name}</strong>
                </p>
                <div className="shaft-access__swatches" role="group" aria-label="Door colour">
                  {colours.map((option, index) => (
                    <button
                      className={`shaft-access__swatch${index === colourIndex ? " is-selected" : ""}`}
                      key={option.name}
                      type="button"
                      style={{ backgroundColor: option.hex }}
                      aria-label={option.name}
                      aria-pressed={index === colourIndex}
                      onClick={() => setColourIndex(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="shaft-access__group">
                <p className="shaft-access__label">Vision panel</p>
                <div className="shaft-access__options" role="group" aria-label="Vision panel">
                  <button
                    className={`shaft-access__option${visionPanel ? " is-selected" : ""}`}
                    type="button"
                    aria-pressed={visionPanel}
                    onClick={() => setVisionPanel(true)}
                  >
                    Required
                  </button>
                  <button
                    className={`shaft-access__option${!visionPanel ? " is-selected" : ""}`}
                    type="button"
                    aria-pressed={!visionPanel}
                    onClick={() => setVisionPanel(false)}
                  >
                    Not required
                  </button>
                </div>
              </div>

              <div className="shaft-access__group">
                <p className="shaft-access__label">Lock</p>
                <div className="shaft-access__options" role="group" aria-label="Door lock">
                  {locks.map((lock, index) => (
                    <button
                      className={`shaft-access__option${index === lockIndex ? " is-selected" : ""}`}
                      key={lock}
                      type="button"
                      aria-pressed={index === lockIndex}
                      onClick={() => setLockIndex(index)}
                    >
                      {lock}
                    </button>
                  ))}
                </div>
              </div>

              <p className="shaft-access__summary">
                {colour.name} · {visionPanel ? "With vision panel" : "No vision panel"} · {locks[lockIndex]}
              </p>
              <a className="shaft-access__button" href="https://aashiyana.tatasteel.com" target="_blank" rel="noopener noreferrer">
                Enquire now
              </a>
              <p className="shaft-access__note">
                Hardware and accessories options are indicative and can be customised as per project requirement.
              </p>
            </div>
          </div>
        </section>

        <section className="shaft-access__container shaft-access__section" aria-labelledby="applications-title">
          <h2 className="shaft-access__heading" id="applications-title">
            Where it is used
          </h2>
          <div className="shaft-access__applications">
            {applications.map(([title, description]) => (
              <article className="shaft-access__application" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="shaft-access__where">Used across hospitals, offices, IT parks and shopping malls.</p>
        </section>

        <div className="shaft-access__container">
          <p className="shaft-access__disclaimer">
            Hardware and accessories options are indicative and can be customised as per project requirement. Customised
            shades need a minimum order quantity (MoQ). Source: Tata Pravesh H&amp;C brochure and product page.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}