import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Login from "@/components/Login";
import axios from "axios";
import { useCart } from "@/context/CartContext";
import {
  getAuthSessionSnapshot,
  getServerAuthSessionSnapshot,
  subscribeToAuthSession,
} from "@/services/auth.service";
import { submitCartDetails } from "@/services/checkout.service";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { FaTrashCan } from "react-icons/fa6";

const constructionStages = [
  "Planning",
  "Foundation",
  "Structure ready",
  "Finishing",
  "Renovation",
];

export default function CheckoutPage() {
  const { items, itemCount, isLoaded, updateQuantity, removeItem } = useCart();
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [constructionStage, setConstructionStage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const addressRef = useRef<HTMLTextAreaElement>(null);
  const authSnapshot = useSyncExternalStore(
    subscribeToAuthSession,
    getAuthSessionSnapshot,
    getServerAuthSessionSnapshot,
  );
  const user = authSnapshot.session?.user ?? null;

  const productCountLabel = `${itemCount} ${itemCount === 1 ? "product" : "products"}`;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user) {
      setError("Please sign in before submitting your pre-order request.");
      return;
    }

    if (!address.trim()) {
      setError("Delivery address is required.");
      addressRef.current?.focus();
      return;
    }

    if (!/^\d{6}$/.test(pincode.trim())) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }

    if (!constructionStage) {
      setError("Please select your construction stage.");
      return;
    }

    if (!termsAccepted) {
      setError("Please accept the terms and contact consent to continue.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await submitCartDetails({
        cart_details: items,
        construction_stage: constructionStage,
        pincode: pincode.trim(),
        address: address.trim(),
      });

      if (response.success === false) {
        throw new Error(response.message || "We couldn’t submit your pre-order request. Please try again.");
      }

      setConfirmationMessage(response.message || "Your pre-order request has been submitted successfully.");
      setShowConfirmation(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submitError) {
      if (axios.isAxiosError<{ message?: string }>(submitError)) {
        setError(
          submitError.response?.data?.message
            || (submitError.response?.status === 401
              ? "Your sign-in session has expired. Please sign in again."
              : "We couldn’t submit your pre-order request. Please try again."),
        );
      } else {
        setError(submitError instanceof Error
          ? submitError.message
          : "We couldn’t submit your pre-order request. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
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
              <p>{confirmationMessage}</p>
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
        ) : !isLoaded ? (
          <section className="checkout-page__empty" aria-live="polite" aria-busy="true">
            <h1>Loading your cart…</h1>
          </section>
        ) : items.length === 0 ? (
          <section className="checkout-page__empty">
            <h1>Your cart is empty</h1>
            <p>Choose a product and add it to your cart to see it here.</p>
            <Link className="checkout-page__button continue-browsing" href="/">Continue browsing</Link>
          </section>
        ) : (
          <div className="checkout-page__container checkout-page__layout">
            <div className="checkout-page__form-column">
              <section className="checkout-page__card checkout-page__title-card">
                <h1>Submit details for booking &amp; schedule demo</h1>
                <span className="checkout-page__pill">No need to pay now</span>
              </section>

              <section className="checkout-page__card" aria-labelledby="checkout-selection">
                <h2 id="checkout-selection">
                  Your selection (<span>{productCountLabel}</span>)
                </h2>
                {items.map((item, index) => (
                  <article className="checkout-page__item" key={item.id}>
                    <div className="checkout-page__image">
                      <Image
                        src={item.image}
                        alt={item.modelName}
                        width={96}
                        height={128}
                      />
                    </div>
                    <div className="checkout-page__item-body">
                      <span className="checkout-page__product-label">
                        Product {index + 1}
                      </span>
                      {/* <h3>{item.modelName}</h3> */}
                      <h3>{item.productName}</h3>
                      <dl className="checkout-page__product-specs">
                        {/* <div>
                          <dt>Type</dt>
                          <dd>{item.productName}</dd>
                        </div> */}
                        <div>
                          <dt>Model</dt>
                          <dd>{item.modelName}</dd>
                        </div>
                        <div>
                          <dt>Design</dt>
                          <dd>{item.designName}</dd>
                        </div>
                        <div>
                          <dt>Shade</dt>
                          <dd>{item.shadeName}</dd>
                        </div>
                        <div>
                          <dt>Size</dt>
                          <dd>{item.sizeLabel}</dd>
                        </div>
                        <div>
                          <dt>Price</dt>
                          <dd>{item.unitPrice === null ? "Price on request" : `₹ ${item.unitPrice.toLocaleString("en-IN")}`}</dd>
                        </div>
                      </dl>
                      <div className="checkout-page__quantity">
                        <span>Quantity</span>
                        <div className="checkout-page__quantity-control">
                          <button
                            aria-label={`Decrease quantity of ${item.modelName}`}
                            disabled={item.quantity <= 1}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            type="button"
                          >
                            −
                          </button>
                          <output aria-live="polite">{item.quantity}</output>
                          <button
                            aria-label={`Increase quantity of ${item.modelName}`}
                            disabled={item.quantity >= 99}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            type="button"
                          >
                            +
                          </button>
                        </div>
                        <button
                          aria-label={`Remove ${item.modelName} from cart`}
                          className="checkout-page__remove"
                          onClick={() => removeItem(item.id)}
                          title="Remove from cart"
                          type="button"
                        >
                          <FaTrashCan aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              {authSnapshot.isLoaded && (
                user ? (
                  <section className="checkout-page__card" aria-label="Signed-in account">
                    <p className="checkout-page__account-status">
                      Signed in as <strong>{user.email}</strong>
                    </p>
                  </section>
                ) : (
                  <Login />
                )
              )}

              <form className="checkout-page__form-column" noValidate onSubmit={handleSubmit}>
                <section className="checkout-page__card" aria-labelledby="checkout-delivery-address">
                  <h2 id="checkout-delivery-address">Delivery address</h2>
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
                        required
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
                        ref={addressRef}
                        required
                        onChange={(event) => setAddress(event.target.value)}
                        placeholder="House / flat no., building, street, area"
                        value={address}
                      />
                    </div>
                  </div>
                </section>

                {user && (
                  <section className="checkout-page__card" aria-labelledby="checkout-customer">
                    <h2 id="checkout-customer">
                      Your details <span className="checkout-page__badge">From your login</span>
                    </h2>
                    <div className="checkout-page__fields checkout-page__fields--two">
                      <div className="checkout-page__field">
                        <label htmlFor="checkout-name">Name</label>
                        <input id="checkout-name" readOnly value={user.name} />
                      </div>
                      <div className="checkout-page__field">
                        <label htmlFor="checkout-mobile">Mobile number</label>
                        <input id="checkout-mobile" readOnly value={user.phone ?? ""} />
                      </div>
                      <div className="checkout-page__field checkout-page__field--full">
                        <label htmlFor="checkout-email">Email ID</label>
                        <input id="checkout-email" readOnly value={user.email} />
                      </div>
                    </div>
                  </section>
                )}

                <section className="checkout-page__card" aria-labelledby="checkout-project">
                  <h2 id="checkout-project">Project details</h2>
                  <div className="checkout-page__fields checkout-page__fields--two">
                    <div className="checkout-page__field">
                      <label htmlFor="checkout-stage">
                        Construction stage <span>*</span>
                      </label>
                      <select
                        id="checkout-stage"
                        required
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
                    <button className="checkout-page__button" disabled={!termsAccepted || !user || isSubmitting} type="submit">
                      {isSubmitting ? "Submitting request…" : "Submit Pre-Order Request"}
                    </button>
                  </div>
                  {error && (
                    <p className="checkout-page__error" role="alert">
                      {error}
                    </p>
                  )}
                  <p className="checkout-page__fine-print">
                    No payment is due when you submit your pre-order request.
                  </p>
                  <p className="checkout-page__preview-note">
                    Our team will contact you about your request.
                  </p>
                </section>
              </form>
            </div>

            <aside className="checkout-page__card checkout-page__next" aria-labelledby="checkout-next">
              <h2 id="checkout-next">The Booking Journey</h2>
              {/* <p>Simple | Transparent | Hassle-Free</p> */}
              <ol>
                <li>
                  <span>1</span>
                  <div>
                    <strong>Add Products to Your Cart</strong>
                    Explore our range of Tata Pravesh Aluminium Windows & Doors and add your preferred products to the cart.
                  </div>
                </li>
                <li>
                  <span>2</span>
                  <div>
                    <strong>Place Your Pre-Order & Book a Demo</strong>
                    Submit your pre-order and schedule a product demo at your convenience. No payment required at this stage.
                  </div>
                </li>
                <li>
                  <span>3</span>
                  <div>
                    <strong>Take the Demo & Confirm Your Order</strong>
                    Experience the product and finalise your order with the dealer by paying 50% advance.
                  </div>
                </li>
                <li>
                  <span>4</span>
                  <div>
                    <strong>Get Your Delivery</strong>
                    Your order will be delivered within 60–120 days from the date of order placement.
                  </div>
                </li>
                <li>
                  <span>5</span>
                  <div>
                    <strong>Pay the Remaining 50% Before Installation</strong>
                    Clear the remaining balance before installation and get ready to transform your space.
                  </div>
                </li>
              </ol>
              <p>Need help? Call 1-800-4199-200</p>
            </aside>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}