import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const colours = [
  { name: "Volcano Red", door: "#870d22", frame: "#690a1a" },
  { name: "Fire Red", door: "#d81920", frame: "#a81318" },
  { name: "Forest Brown", door: "#3e1815", frame: "#301210" },
  { name: "Snowflake White", door: "#fefef2", frame: "#c6c6bc" },
  { name: "Moon Cream", door: "#f1ead8", frame: "#bbb6a8" },
  { name: "Cloud White", door: "#eaeae8", frame: "#b6b6b4" },
  { name: "Pearl White", door: "#e8e7d5", frame: "#b4b4a6" },
  { name: "Sand Grey", door: "#b3b4a2", frame: "#8b8c7e" },
  { name: "Sapphire Blue", door: "#004e90", frame: "#003c70" },
  { name: "Ocean Blue", door: "#0080c7", frame: "#00639b" },
  { name: "Crystal Blue", door: "#40668b", frame: "#314f6c" },
];

const glasses = [
  { name: "Float glass", fill: "#eaf4fb" },
  { name: "Toughened glass", fill: "#e3f1ec" },
  { name: "Fire rated glass", fill: "#f3e6cf" },
];

const handles = ["Pull handle", "Lever handle", "Panic bar"];

function DoorPreview({
  colourIndex,
  glassIndex,
  handleIndex,
}: {
  colourIndex: number;
  glassIndex: number;
  handleIndex: number;
}) {
  const colour = colours[colourIndex];

  return (
    <div className="glazed-door__preview">
      <svg
        viewBox="0 0 300 440"
        role="img"
        aria-label={`Preview of your glazed door in ${colour.name}, ${glasses[glassIndex].name.toLowerCase()} and ${handles[handleIndex].toLowerCase()}`}
      >
        <rect width="300" height="440" fill="#cfd6e2" />
        <g stroke="#b3bcca" strokeWidth="2">
          <line x1="0" y1="110" x2="300" y2="110" />
          <line x1="0" y1="250" x2="300" y2="250" />
          <line x1="0" y1="390" x2="300" y2="390" />
          <line x1="150" y1="0" x2="150" y2="110" />
          <line x1="40" y1="250" x2="40" y2="440" />
          <line x1="260" y1="110" x2="260" y2="250" />
        </g>
        <rect x="58" y="50" width="184" height="340" fill={colour.frame} />
        <rect
          x="66"
          y="58"
          width="168"
          height="324"
          fill={colour.door}
          stroke="#000"
          strokeOpacity=".25"
          strokeWidth="2"
        />
        <rect
          x="84"
          y="78"
          width="132"
          height="284"
          fill={glasses[glassIndex].fill}
          stroke="#000"
          strokeOpacity=".3"
          strokeWidth="2"
        />
        <path d="M96 90 L156 90 L96 200 Z" fill="#fff" fillOpacity=".45" />
        {glassIndex === 2 && (
          <g>
            {[104, 126, 148, 170, 192, 214].map((x) => (
              <line
                key={`vertical-${x}`}
                x1={x}
                y1="78"
                x2={x}
                y2="362"
                stroke="#8a6a35"
                strokeOpacity=".45"
                strokeWidth="1.5"
              />
            ))}
            {[100, 126, 152, 178, 204, 230, 256, 282, 308, 334, 360].map((y) => (
              <line
                key={`horizontal-${y}`}
                x1="84"
                y1={y}
                x2="216"
                y2={y}
                stroke="#8a6a35"
                strokeOpacity=".45"
                strokeWidth="1.5"
              />
            ))}
          </g>
        )}
        {glassIndex === 1 && (
          <path d="M86 344 L112 344 L86 322 Z" fill="#14407f" fillOpacity=".55" />
        )}
        <rect x="84" y="206" width="132" height="8" fill={colour.frame} />
        <rect x="58" y="96" width="8" height="26" fill="#aab2bd" />
        <rect x="58" y="210" width="8" height="26" fill="#aab2bd" />
        <rect x="58" y="324" width="8" height="26" fill="#aab2bd" />
        {handleIndex === 0 && (
          <g>
            <path
              d="M208 222 h10 a6 6 0 0 1 6 6 v38 a6 6 0 0 1 -6 6 h-10"
              fill="none"
              stroke="#b8bfc8"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx="196" cy="244" r="4" fill="#6a727c" />
          </g>
        )}
        {handleIndex === 1 && (
          <g>
            <rect x="200" y="224" width="20" height="52" rx="5" fill="#c4cad2" stroke="#6a727c" strokeWidth="2" />
            <rect x="164" y="244" width="48" height="9" rx="4.5" fill="#e8ebef" stroke="#6a727c" strokeWidth="2" />
          </g>
        )}
        {handleIndex === 2 && (
          <g>
            <rect x="94" y="238" width="112" height="10" rx="4" fill="#c4cad2" stroke="#6a727c" strokeWidth="2" />
            <rect x="88" y="230" width="12" height="26" rx="3" fill="#aab2bd" stroke="#6a727c" strokeWidth="2" />
            <rect x="200" y="230" width="12" height="26" rx="3" fill="#aab2bd" stroke="#6a727c" strokeWidth="2" />
          </g>
        )}
      </svg>
    </div>
  );
}

export default function GlazedDoorPage() {
  const [colourIndex, setColourIndex] = useState(7);
  const [glassIndex, setGlassIndex] = useState(0);
  const [handleIndex, setHandleIndex] = useState(0);
  const colour = colours[colourIndex];

  return (
    <>
      <Head>
        <title>Glazed Door | Tata Pravesh</title>
        <meta
          name="description"
          content="Explore Tata Pravesh glazed doors for bright, open commercial spaces. Choose a colour, glass and handle for your project."
        />
      </Head>

      <Header />

      <main className="glazed-door">
        <section className="glazed-door__container glazed-door__hero">
          <div>
            <div className="glazed-door__eyebrow">COMMERCIAL DOORS</div>
            <h1>Glazed Doors</h1>
            <p className="glazed-door__hero-copy">
              Full-glass steel doors for bright, open commercial spaces. Pick a colour, glass and handle, then enquire.
            </p>
            <div className="glazed-door__buttons">
              <a className="glazed-door__button" href="https://aashiyana.tatasteel.com" target="_blank" rel="noopener noreferrer">
                Enquire now
              </a>
              <a className="glazed-door__button glazed-door__button--outline" href="#configure">
                Choose colour
              </a>
            </div>
          </div>
          <div className="glazed-door__photo">
            <Image
              src="/images/door2.jpg"
              alt="Glazed commercial entrance with glass panels and pull handles."
              fill
              priority
              sizes="(min-width: 760px) 50vw, 100vw"
            />
          </div>
        </section>

        <section className="glazed-door__container glazed-door__section" id="configure">
          <h2 className="glazed-door__heading">Design your door</h2>
          <div className="glazed-door__configurator">
            <DoorPreview colourIndex={colourIndex} glassIndex={glassIndex} handleIndex={handleIndex} />
            <div>
              <div className="glazed-door__group">
                <p className="glazed-door__label">
                  Colour: <b>{colour.name}</b>
                </p>
                <div className="glazed-door__swatches" role="group" aria-label="Colour">
                  {colours.map((option, index) => (
                    <button
                      key={option.name}
                      className={`glazed-door__swatch${index === colourIndex ? " is-active" : ""}`}
                      type="button"
                      style={{ backgroundColor: option.door }}
                      aria-label={option.name}
                      aria-pressed={index === colourIndex}
                      onClick={() => setColourIndex(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="glazed-door__group">
                <p className="glazed-door__label">Glass</p>
                <div className="glazed-door__options" role="group" aria-label="Glass">
                  {glasses.map((option, index) => (
                    <button
                      key={option.name}
                      className={`glazed-door__option${index === glassIndex ? " is-active" : ""}`}
                      type="button"
                      aria-pressed={index === glassIndex}
                      onClick={() => setGlassIndex(index)}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="glazed-door__group">
                <p className="glazed-door__label">Handle</p>
                <div className="glazed-door__options" role="group" aria-label="Handle">
                  {handles.map((handle, index) => (
                    <button
                      key={handle}
                      className={`glazed-door__option${index === handleIndex ? " is-active" : ""}`}
                      type="button"
                      aria-pressed={index === handleIndex}
                      onClick={() => setHandleIndex(index)}
                    >
                      {handle}
                    </button>
                  ))}
                </div>
              </div>
              <div className="glazed-door__summary" aria-live="polite">
                {colour.name} · {glasses[glassIndex].name} · {handles[handleIndex]}
              </div>
              <a className="glazed-door__button" href="https://aashiyana.tatasteel.com" target="_blank" rel="noopener noreferrer">
                Enquire now
              </a>
              <p className="glazed-door__note">
                Hardware options are indicative and can be customised as per project requirement. Customised shades need a minimum order quantity (MoQ).
              </p>
            </div>
          </div>
        </section>

        <section className="glazed-door__container glazed-door__section">
          <h2 className="glazed-door__heading">Where it is used</h2>
          <div className="glazed-door__applications">
            <article><strong>Hospitals</strong><span>Clear sight lines along busy corridors.</span></article>
            <article><strong>Offices</strong><span>Bright cabins and meeting rooms.</span></article>
            <article><strong>IT parks</strong><span>Open, light-filled work floors.</span></article>
            <article><strong>Shopping malls</strong><span>Visible, welcoming entrances.</span></article>
          </div>
          <p className="glazed-door__where">
            Commercial doors used in hospitals, offices, IT parks, shopping malls and more.
          </p>
        </section>

        <p className="glazed-door__container glazed-door__footer">
          Hardware and accessories options are indicative and can be customised as per project requirement. Customised shades need a minimum order quantity (MoQ). Source: Tata Pravesh H&amp;C brochure.
        </p>
      </main>
      <Footer />
    </>
  );
}
