import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const roomOptions = [
  ["Main entrance", "Embossed steel door", "Strength and security come first. Pick an embossed wood finish with a branded lock."],
  ["Bedroom", "Embossed or plain steel door", "A solid door for privacy, in a wood finish or a clean plain shade."],
  ["Bathroom", "Plain steel door", "Moisture will not warp it. Add a ventilator for light and airflow."],
  ["Balcony or garden", "French or balcony door", "Wide glass for light and views, with the strength of steel."],
  ["Between rooms", "French door", "A stylish partition that keeps spaces open and bright."],
];

const priorityOptions = [
  ["Security", "Add a branded lock and check the warranty."],
  ["Light and air", "Choose a ventilator, a side window, or glass."],
  ["Looks", "Pick from embossed designs and wood or RAL shades."],
  ["Low maintenance", "Steel needs no polishing and resists termites."],
];

export default function SelectBestDoorPage() {
  const [roomIndex, setRoomIndex] = useState(0);
  const [priorityIndex, setPriorityIndex] = useState(0);

  const selectedRoom = roomOptions[roomIndex];
  const selectedPriority = priorityOptions[priorityIndex];

  return (
    <>
      <Head>
        <title>How to choose the best door | Tata Pravesh</title>
        <meta
          name="description"
          content="A simple guide to choosing a door: material, weather, termites, maintenance, warranty, value and design, with a room-by-room guide and checklist."
        />
      </Head>

      <Header />

      <main className="select-best-door">
        <nav className="select-best-door__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/doors/">Doors</Link> / <span>Select the Best Door</span>
        </nav>

        <section className="select-best-door__section select-best-door__section--hero">
          <div className="select-best-door__container select-best-door__hero-grid">
            <div className="select-best-door__hero-copy">
              <p className="select-best-door__eyebrow">Tata Pravesh · Buyer&apos;s guide</p>
              <h1>How to choose the best door.</h1>
              <p className="select-best-door__lead">
                A door has to look good, keep you secure and last for years. Check these seven things before you buy,
                and match the right door to each room.
              </p>
              <div className="select-best-door__answer">
                <b>Quick answer:</b> choose by durability, material, weather, termite protection, maintenance, value and
                design. For most homes, a warranty-backed steel door with a wood finish covers all seven.
              </div>
              <div className="select-best-door__actions">
                <a className="select-best-door__button" href="#book-a-demo">
                  Book a Demo <span aria-hidden="true">→</span>
                </a>
                <a className="select-best-door__button select-best-door__button--alt" href="#enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="select-best-door__hero-visual">
              <img src="/images/french-door/hero.svg" alt="Tata Pravesh steel door in a bright living room" />
              <div className="select-best-door__hero-badge">
                <b>Up to 5 yrs</b>
                <span>Warranty*</span>
              </div>
            </div>
          </div>
        </section>

        <section className="select-best-door__section">
          <div className="select-best-door__container">
            <p className="select-best-door__eyebrow">Seven things to check</p>
            <h2>What to look for in a door.</h2>
            <div className="select-best-door__cards">
              <div className="select-best-door__card">
                <div className="select-best-door__card-heading">
                  <div className="select-best-door__card-number">1</div>
                  <h3>Think long-term</h3>
                </div>
                <p>
                  Choose a door that will not get damaged or fade over time, with a written warranty. Tata Pravesh offers up
                  to 5 years*.
                </p>
              </div>
              <div className="select-best-door__card">
                <div className="select-best-door__card-heading">
                  <div className="select-best-door__card-number">2</div>
                  <h3>Choose the right material</h3>
                </div>
                <p>
                  Wood looks warm but is not always secure. Tata Pravesh states its steel doors are 12 times stronger than
                  wood.
                </p>
              </div>
              <div className="select-best-door__card">
                <div className="select-best-door__card-heading">
                  <div className="select-best-door__card-number">3</div>
                  <h3>Consider the weather</h3>
                </div>
                <p>
                  Heat and moisture can warp or swell some materials. For exposed doors, pick sturdy, weather-proof material.
                </p>
              </div>
              <div className="select-best-door__card">
                <div className="select-best-door__card-heading">
                  <div className="select-best-door__card-number">4</div>
                  <h3>Protect against termites</h3>
                </div>
                <p>
                  Termites often damage wooden doors. Treatment helps, but a steel door avoids the problem altogether.
                </p>
              </div>
              <div className="select-best-door__card">
                <div className="select-best-door__card-heading">
                  <div className="select-best-door__card-number">5</div>
                  <h3>Keep maintenance low</h3>
                </div>
                <p>
                  Pick materials from a trusted specialist rather than a local vendor, so you are not repairing or
                  repainting often.
                </p>
              </div>
              <div className="select-best-door__card">
                <div className="select-best-door__card-heading">
                  <div className="select-best-door__card-number">6</div>
                  <h3>Value for money</h3>
                </div>
                <p>
                  Superior material at a fair price. Compare total cost over the life of the door, not just the price today.
                </p>
              </div>
              <div className="select-best-door__card">
                <div className="select-best-door__card-heading">
                  <div className="select-best-door__card-number">7</div>
                  <h3>Let design matter</h3>
                </div>
                <p>
                  Choose a design that reflects your home: embossed or plain finishes in many wood and RAL shades.
                </p>
              </div>
              <div className="select-best-door__card select-best-door__card--dark">
                <h3>Not sure which to pick?</h3>
                <p>Our team will help you choose the right door.</p>
                <a className="select-best-door__button" href="#book-a-demo">
                  Book a Demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="select-best-door__gallery select-best-door__gallery--two">
              <figure>
                <img src="/images/french-door/wind.svg" alt="Steel door standing against strong winds" loading="lazy" />
                <figcaption>
                  <b>Wind.</b> <em>Shield your home from strong winds.</em>
                </figcaption>
              </figure>
              <figure>
                <img src="/images/french-door/rain.svg" alt="Rain on the glass of a steel door" loading="lazy" />
                <figcaption>
                  <b>Rain.</b> <em>Leak-proof your space and enjoy the rain.</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="select-best-door__section">
          <div className="select-best-door__container">
            <p className="select-best-door__eyebrow">Compare materials</p>
            <h2>Steel, wood or MDF/PVC?</h2>
            <div className="select-best-door__comparison-grid">
              <div className="select-best-door__table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Check</th>
                      <th className="select-best-door__table-highlight">Tata Pravesh steel</th>
                      <th>Wood</th>
                      <th>MDF / PVC</th>
                    </tr>
                    <tr>
                      <td>Strength, security</td>
                      <td className="select-best-door__table-highlight">High</td>
                      <td>Moderate</td>
                      <td>Lower</td>
                    </tr>
                    <tr>
                      <td>Termites</td>
                      <td className="select-best-door__table-highlight">Resistant</td>
                      <td>Prone</td>
                      <td>Varies</td>
                    </tr>
                    <tr>
                      <td>Moisture, heat</td>
                      <td className="select-best-door__table-highlight">Does not warp</td>
                      <td>Can warp</td>
                      <td>Interior use</td>
                    </tr>
                    <tr>
                      <td>Maintenance</td>
                      <td className="select-best-door__table-highlight">Very low</td>
                      <td>Polishing</td>
                      <td>Low</td>
                    </tr>
                    <tr>
                      <td>Looks</td>
                      <td className="select-best-door__table-highlight">Wood or plain</td>
                      <td>Natural</td>
                      <td>Limited</td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td className="select-best-door__table-highlight">Up to 5 yrs*</td>
                      <td>Varies</td>
                      <td>Varies</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <figure>
                <img src="/images/french-door/model-premium.jpg" alt="Tata Pravesh steel door with toughened glass" loading="lazy" />
                <figcaption>
                  <em>Steel strength with a wood-finish look.</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="select-best-door__section">
          <div className="select-best-door__container">
            <p className="select-best-door__eyebrow">Match door to room</p>
            <h2>The best door for each space.</h2>
            <div className="select-best-door__table-wrap" style={{ marginTop: 12 }}>
              <table style={{ minWidth: 560 }}>
                <tbody>
                  <tr>
                    <th>Where</th>
                    <th>What matters most</th>
                    <th>Good choice</th>
                  </tr>
                  <tr>
                    <td>Main entrance</td>
                    <td>Security, looks, weather</td>
                    <td className="select-best-door__table-highlight">Embossed steel door with a branded lock</td>
                  </tr>
                  <tr>
                    <td>Bedroom</td>
                    <td>Privacy, finish</td>
                    <td className="select-best-door__table-highlight">Embossed or plain steel door</td>
                  </tr>
                  <tr>
                    <td>Bathroom</td>
                    <td>Moisture, light and air</td>
                    <td className="select-best-door__table-highlight">Plain steel door, with ventilator if needed</td>
                  </tr>
                  <tr>
                    <td>Balcony, garden, between rooms</td>
                    <td>Light, view, openness</td>
                    <td className="select-best-door__table-highlight">French door or balcony door</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="select-best-door__gallery select-best-door__gallery--four">
              <figure>
                <img src="/images/french-door/patio-balcony.svg" alt="Door opening to a patio or balcony" loading="lazy" />
                <figcaption>
                  <b>Patio and balcony</b>
                </figcaption>
              </figure>
              <figure>
                <img src="/images/french-door/room-partition.svg" alt="Door used as a room partition" loading="lazy" />
                <figcaption>
                  <b>Room partition</b>
                </figcaption>
              </figure>
              <figure>
                <img src="/images/french-door/lawn-opening.svg" alt="Door opening to a lawn" loading="lazy" />
                <figcaption>
                  <b>Lawn opening</b>
                </figcaption>
              </figure>
              <figure>
                <img src="/images/french-door/garage.svg" alt="Steel door used for a garage" loading="lazy" />
                <figcaption>
                  <b>Garage</b>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="select-best-door__section">
          <div className="select-best-door__container select-best-door__selector-grid">
            <div className="select-best-door__box">
              <p className="select-best-door__eyebrow">Door finder</p>
              <h2>Find your door.</h2>
              <b>Where will it go?</b>
              <div className="select-best-door__options" id="f1">
                {roomOptions.map(([label], index) => (
                  <button
                    key={label}
                    type="button"
                    className="select-best-door__chip"
                    aria-pressed={roomIndex === index}
                    onClick={() => setRoomIndex(index)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <b>What matters most?</b>
              <div className="select-best-door__options" id="f2">
                {priorityOptions.map(([label], index) => (
                  <button
                    key={label}
                    type="button"
                    className="select-best-door__chip"
                    aria-pressed={priorityIndex === index}
                    onClick={() => setPriorityIndex(index)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="select-best-door__recommendation" aria-live="polite">
                <h3>Our suggestion: {selectedRoom[1]}</h3>
                <p>
                  {selectedRoom[2]} <strong>{selectedPriority[0]}:</strong> {selectedPriority[1]}
                </p>
              </div>

              <div className="select-best-door__actions">
                <a className="select-best-door__button" href="#book-a-demo">
                  Book a Demo <span aria-hidden="true">→</span>
                </a>
                <a className="select-best-door__button select-best-door__button--alt" href="#enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="select-best-door__box">
              <p className="select-best-door__eyebrow">Before you buy</p>
              <h2>Buyer&apos;s checklist.</h2>
              <ul className="select-best-door__checklist">
                <li>
                  <label>
                    <input type="checkbox" /> I measured the opening&apos;s width and height
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> I know the wall thickness and frame type
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> The material suits my weather
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> The door is termite-resistant
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> I have the warranty in writing
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Lock, delivery and installation are included
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> I compared total cost, not only price
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="select-best-door__section select-best-door__section--faq">
          <div className="select-best-door__container">
            <p className="select-best-door__eyebrow">Questions</p>
            <h2>Door buying FAQs.</h2>
            <div className="select-best-door__faq-grid">
              <details open>
                <summary>Which material is best for a main door?</summary>
                <p>
                  Steel: it is secure, termite-resistant, weather-proof and low maintenance, and comes in embossed wood
                  finishes.
                </p>
              </details>
              <details>
                <summary>How do I choose the right door size?</summary>
                <p>
                  Measure the opening or frame width and height at several points and note the wall thickness. Our team can
                  take site measurements.
                </p>
              </details>
              <details>
                <summary>Are steel doors better than wooden doors?</summary>
                <p>
                  Steel resists termites, does not warp with moisture or heat, and needs little maintenance. For most homes it
                  is more durable.
                </p>
              </details>
              <details>
                <summary>Which door is best for a bathroom?</summary>
                <p>A moisture-resistant plain steel door, with a ventilator for light and airflow.</p>
              </details>
              <details>
                <summary>What warranty should I look for?</summary>
                <p>A clear written warranty. Tata Pravesh offers up to 5 years*, with terms and conditions.</p>
              </details>
              <details>
                <summary>Does a better-looking door cost more?</summary>
                <p>Not necessarily. Compare total cost over the life of the door, including maintenance.</p>
              </details>
            </div>
            <p className="select-best-door__note">
              <em>*Warranty period varies by product. Terms and conditions apply.</em>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
