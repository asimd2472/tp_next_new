import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const orderSteps = [
  {
    label: "Order placed",
    date: "2026-03-12",
    status: "done",
    icon: (
      <>
        <path d="M9 4h6v3H9z" />
        <path d="M7 5H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1" />
        <path d="m9 13 2 2 4-4" />
      </>
    ),
  },
  {
    label: "Order accepted",
    date: "2026-05-23",
    status: "done",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12.5 3 3 5-6" />
      </>
    ),
  },
  {
    label: "Manufacturing date",
    date: "2026-06-29",
    status: "done",
    icon: (
      <>
        <path d="M3 21V10l6 4v-4l6 4V6h3v15z" />
        <path d="M3 21h18" />
      </>
    ),
  },
  {
    label: "Expected dispatch",
    date: "2026-05-06",
    status: "now",
    icon: (
      <>
        <path d="M2 6h11v10H2z" />
        <path d="M13 9h4l3 3v4h-7" />
        <circle cx="6.5" cy="17.5" r="1.8" />
        <circle cx="16.5" cy="17.5" r="1.8" />
      </>
    ),
  },
  {
    label: "Expected delivery",
    date: "2026-07-15 to 2026-07-21",
    status: "pending",
    icon: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
  },
  {
    label: "Revised delivery",
    date: "Not revised",
    status: "dim",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4m8-4v4m-4 6v3l2 1" />
      </>
    ),
  },
] as const;

export default function TrackYourOrderPage() {
  return (
    <>
      <Head>
        <title>Track Your Order | Tata Pravesh</title>
        <meta
          name="description"
          content="Track your Tata Pravesh door order and view its latest delivery progress."
        />
      </Head>

      <Header />

      <div className="track-order">
        <section className="track-order__hero">
          <div className="track-order__container track-order__hero-top">
            <form
              className="track-order__search"
              onSubmit={(event) => event.preventDefault()}
              role="search"
            >
              <label className="track-order__visually-hidden" htmlFor="order-number">
                Order number
              </label>
              <input id="order-number" name="orderNumber" placeholder="Enter order number" />
              <button type="submit">Track</button>
            </form>
          </div>

          <div className="track-order__container track-order__hero-content">
            <div className="track-order__hero-copy">
              <div className="track-order__status" role="status">
                <span aria-hidden="true" />
                Dispatched (Expected)
              </div>
              <h1>Your Pravesh door is on its way.</h1>
              <p>Order 00151093, placed with Rightpoint. Here is where it stands today.</p>
            </div>
            <div className="track-order__delivery">
              <span>Expected delivery</span>
              <strong>15 – 21 July</strong>
              <span>2026</span>
            </div>
          </div>
        </section>

        <main className="track-order__container track-order__main">
          <dl className="track-order__card track-order__identifiers">
            <div>
              <dt>Purchase date</dt>
              <dd>2025-12-05</dd>
            </div>
            <div>
              <dt>Order no.</dt>
              <dd>00151093</dd>
            </div>
            <div>
              <dt>Booking ID</dt>
              <dd>00151093</dd>
            </div>
          </dl>

          <section className="track-order__card track-order__journey" aria-labelledby="order-journey">
            <h2 id="order-journey">Order journey</h2>
            <ol className="track-order__steps">
              {orderSteps.map((step) => (
                <li
                  className={`track-order__step track-order__step--${step.status}`}
                  key={step.label}
                >
                  <span className="track-order__step-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      {step.icon}
                    </svg>
                  </span>
                  <strong>{step.label}</strong>
                  <span>{step.date}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="track-order__details">
            <section className="track-order__card track-order__detail-card" aria-labelledby="order-details">
              <h2 id="order-details">Order details</h2>
              <dl className="track-order__rows">
                <div>
                  <dt>Payment mode</dt>
                  <dd>Digital transfer</dd>
                </div>
                <div>
                  <dt>Distributor</dt>
                  <dd>Rightpoint</dd>
                </div>
                <div>
                  <dt>Total quantity (without accessories)</dt>
                  <dd>1</dd>
                </div>
              </dl>
            </section>

            <section className="track-order__card track-order__help" aria-labelledby="order-help">
              <div>
                <h2 id="order-help">Need help?</h2>
                <p>Our support team can answer any question about your order.</p>
              </div>
              <a href="tel:18004199200">Call 1800 419 9200</a>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}