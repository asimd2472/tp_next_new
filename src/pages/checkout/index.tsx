import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const products = [
  {
    name: "Fly Mesh Door",
    type: "Door · Fly mesh",
    model: "Deluxe",
    design: "Embossed · Coast (E01)",
    shade: "Nest Mahogany (R0401)",
    size: "1000 × 2062 mm",
    image: "/images/fly-mesh-door/fly-mesh-door.jpg",
    quantity: 2,
  },
  {
    name: "Pebble Classic Window",
    type: "Window · Steel casement",
    model: "Pebble Classic",
    design: "Straight grill",
    shade: "Forest Brown (RAL 8017)",
    size: "1219 × 1219 mm",
    image: "/images/product-1.jpg",
    quantity: 1,
  },
];

const constructionStages = [
  "Planning",
  "Foundation",
  "Structure ready",
  "Finishing",
  "Renovation",
];

export default function CheckoutPage() {
  const [quantities, setQuantities] = useState(products.map((product) => product.quantity));
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [constructionStage, setConstructionStage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const totalProducts = quantities.reduce((total, quantity) => total + quantity, 0);
  const productCountLabel = `${totalProducts} ${totalProducts === 1 ? "product" : "products"}`;

  const updateQuantity = (index: number, change: number) => {
    setQuantities((current) =>
      current.map((quantity, currentIndex) =>
        currentIndex === index ? Math.min(99, Math.max(1, quantity + change)) : quantity,
      ),
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^\d{6}$/.test(pincode.trim()) || !address.trim() || !constructionStage) {
      setError("Please enter a 6-digit pincode, your delivery address and construction stage.");
      return;
    }

    if (!termsAccepted) {
      setError("Please accept the terms and contact consent to continue.");
      return;
    }

    setError("");
    setShowConfirmation(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Booking &amp; Demo Request | Tata Pravesh</title>
        <meta
          name="description"
          content="Review your Tata Pravesh product selection and submit your booking and demo request details."
        />
      </Head>

      <Header />

      <div className="checkout-page" id="top">
        {showConfirmation ? (
          <section className="checkout-page__confirmation" aria-live="polite">
            <div className="checkout-page__card checkout-page__confirmation-card">
              <span className="checkout-page__success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h1>Details ready</h1>
              <p>
                Your booking and demo request details have been checked. Connect this page to
                the booking service to send them to Tata Pravesh.
              </p>
              <p className="checkout-page__confirmation-note">
                This page preview does not send your details or email a PDF.
              </p>
              <div className="checkout-page__confirmation-actions">
                <Link className="checkout-page__button" href="/">
                  Continue browsing
                </Link>
                <button
                  className="checkout-page__button checkout-page__button--secondary"
                  onClick={() => setShowConfirmation(false)}
                  type="button"
                >
                  Back to details
                </button>
              </div>
            </div>
          </section>
        ) : (
          <form className="checkout-page__container checkout-page__layout" onSubmit={handleSubmit}>
            <div className="checkout-page__form-column">
              <section className="checkout-page__card checkout-page__title-card">
                <h1>Submit details for booking &amp; schedule demo</h1>
                <span className="checkout-page__pill">No need to pay now</span>
              </section>

              <section className="checkout-page__card" aria-labelledby="checkout-selection">
                <h2 id="checkout-selection">
                  Your selection (<span>{productCountLabel}</span>)
                </h2>
                {products.map((product, index) => (
                  <article className="checkout-page__item" key={product.name}>
                    <div className="checkout-page__image">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={96}
                        height={128}
                      />
                    </div>
                    <div className="checkout-page__item-body">
                      <span className="checkout-page__product-label">
                        Product {index + 1}
                      </span>
                      <h3>{product.name}</h3>
                      <dl className="checkout-page__product-specs">
                        <div>
                          <dt>Type</dt>
                          <dd>{product.type}</dd>
                        </div>
                        <div>
                          <dt>Model</dt>
                          <dd>{product.model}</dd>
                        </div>
                        <div>
                          <dt>Design</dt>
                          <dd>{product.design}</dd>
                        </div>
                        <div>
                          <dt>Shade</dt>
                          <dd>{product.shade}</dd>
                        </div>
                        <div>
                          <dt>Size</dt>
                          <dd>{product.size}</dd>
                        </div>
                      </dl>
                      <div className="checkout-page__quantity">
                        <span>Quantity</span>
                        <div className="checkout-page__quantity-control">
                          <button
                            aria-label={`Decrease quantity of ${product.name}`}
                            onClick={() => updateQuantity(index, -1)}
                            type="button"
                          >
                            −
                          </button>
                          <output aria-live="polite">{quantities[index]}</output>
                          <button
                            aria-label={`Increase quantity of ${product.name}`}
                            onClick={() => updateQuantity(index, 1)}
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              <section className="checkout-page__card" aria-labelledby="checkout-address">
                <h2 id="checkout-address">Delivery address</h2>
                <div className="checkout-page__fields">
                  <div className="checkout-page__field">
                    <label htmlFor="checkout-pincode">
                      Pincode <span>*</span>
                    </label>
                    <input
                      autoComplete="postal-code"
                      id="checkout-pincode"
                      inputMode="numeric"
                      maxLength={6}
                      onChange={(event) => setPincode(event.target.value)}
                      placeholder="6-digit pincode"
                      value={pincode}
                    />
                  </div>
                  <div className="checkout-page__field">
                    <label htmlFor="checkout-address">
                      Address <span>*</span>
                    </label>
                    <textarea
                      autoComplete="street-address"
                      id="checkout-address"
                      onChange={(event) => setAddress(event.target.value)}
                      placeholder="House / flat no., building, street, area"
                      value={address}
                    />
                  </div>
                </div>
              </section>

              <section className="checkout-page__card" aria-labelledby="checkout-customer">
                <h2 id="checkout-customer">
                  Your details <span className="checkout-page__badge">From your login</span>
                </h2>
                <div className="checkout-page__fields checkout-page__fields--two">
                  <div className="checkout-page__field">
                    <label htmlFor="checkout-name">Name</label>
                    <input id="checkout-name" readOnly value="Rohan Sharma" />
                  </div>
                  <div className="checkout-page__field">
                    <label htmlFor="checkout-mobile">Mobile number</label>
                    <input id="checkout-mobile" readOnly value="+91 98765 43210" />
                  </div>
                  <div className="checkout-page__field checkout-page__field--full">
                    <label htmlFor="checkout-email">Email ID</label>
                    <input id="checkout-email" readOnly value="rohan.sharma@example.com" />
                  </div>
                </div>
              </section>

              <section className="checkout-page__card" aria-labelledby="checkout-project">
                <h2 id="checkout-project">Project details</h2>
                <div className="checkout-page__fields checkout-page__fields--two">
                  <div className="checkout-page__field">
                    <label htmlFor="checkout-stage">
                      Construction stage <span>*</span>
                    </label>
                    <select
                      id="checkout-stage"
                      onChange={(event) => setConstructionStage(event.target.value)}
                      value={constructionStage}
                    >
                      <option value="" disabled>
                        Select stage
                      </option>
                      {constructionStages.map((stage) => (
                        <option key={stage}>{stage}</option>
                      ))}
                    </select>
                  </div>
                  <div className="checkout-page__field">
                    <label htmlFor="checkout-quantity">Total products ordered</label>
                    <input id="checkout-quantity" readOnly value={productCountLabel} />
                  </div>
                </div>
              </section>

              <section className="checkout-page__card">
                <div className="checkout-page__submit-area">
                  <input
                    checked={termsAccepted}
                    className="checkout-page__checkbox"
                    id="checkout-terms"
                    onChange={(event) => setTermsAccepted(event.target.checked)}
                    type="checkbox"
                  />
                  <label htmlFor="checkout-terms">
                    I agree to the <a href="#top">Terms &amp; Conditions</a> and to be contacted
                    by Tata Pravesh about this request.
                  </label>
                  <button className="checkout-page__button" disabled={!termsAccepted} type="submit">
                    Submit details for booking &amp; schedule demo
                  </button>
                </div>
                {error && (
                  <p className="checkout-page__error" role="alert">
                    {error}
                  </p>
                )}
                <p className="checkout-page__fine-print">
                  No payment now. PDF email is not available in this preview.
                </p>
                <p className="checkout-page__preview-note">
                  Checkout preview only: request submission and PDF email are not connected yet.
                </p>
              </section>
            </div>

            <aside className="checkout-page__card checkout-page__next" aria-labelledby="checkout-next">
              <h2 id="checkout-next">What happens next</h2>
              <ol>
                <li>
                  <span>1</span>
                  <div>
                    <strong>Submit your details</strong>
                    No payment needed today.
                  </div>
                </li>
                <li>
                  <span>2</span>
                  <div>
                    <strong>Get a PDF on email</strong>
                    Products, quantities and delivery address in one document.
                  </div>
                </li>
                <li>
                  <span>3</span>
                  <div>
                    <strong>We contact you within 24 hours</strong>
                    Our executive will call to schedule your demo.
                  </div>
                </li>
              </ol>
              <p>Need help? Call 1-800-4199-200</p>
            </aside>
          </form>
        )}
      </div>

      <Footer />
    </>
  );
}