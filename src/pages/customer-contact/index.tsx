import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useState, type FormEvent } from "react";

type EnquiryDetails = {
  name: string;
  mobile: string;
  email: string;
  zipcode: string;
  requiredBy: string;
  constructionStage: string;
  productCount: string;
  woodenFrame: "" | "Yes" | "No";
};

const requiredOptions = ["Within 3 months", "3-6 months", "More than 6 months"];
const constructionOptions = ["Planning", "Foundation", "Structure ready", "Finishing", "Renovation"];

function getErrors(details: EnquiryDetails) {
  return {
    name: !details.name.trim(),
    mobile: !/^\d{10}$/.test(details.mobile.trim()),
    email: !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(details.email.trim()),
    zipcode: !/^\d{6}$/.test(details.zipcode.trim()),
    requiredBy: !details.requiredBy,
    constructionStage: !details.constructionStage,
    productCount: !/^\d+$/.test(details.productCount) || Number(details.productCount) < 1,
  };
}

export default function CustomerContactPage() {
  const [details, setDetails] = useState<EnquiryDetails>({
    name: "",
    mobile: "",
    email: "",
    zipcode: "",
    requiredBy: "",
    constructionStage: "",
    productCount: "",
    woodenFrame: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [complete, setComplete] = useState(false);

  const errors = getErrors(details);

  const updateDetail = (field: keyof EnquiryDetails, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (Object.values(errors).some(Boolean)) {
      const firstError = [
        "customer-name",
        "customer-mobile",
        "customer-email",
        "customer-zipcode",
        "customer-required-by",
        "customer-construction-stage",
        "customer-product-count",
      ].find((id, index) => Object.values(errors)[index]);

      if (firstError) {
        const field = document.getElementById(firstError);
        field?.scrollIntoView({ behavior: "smooth", block: "center" });
        field?.focus();
      }
      return;
    }

    setComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setDetails({
      name: "",
      mobile: "",
      email: "",
      zipcode: "",
      requiredBy: "",
      constructionStage: "",
      productCount: "",
      woodenFrame: "",
    });
    setSubmitted(false);
    setComplete(false);
  };

  return (
    <>
      <Head>
        <title>Enquire Now | Tata Pravesh</title>
        <meta
          name="description"
          content="Enquire about Tata Pravesh doors and windows for your home."
        />
      </Head>

      <Header />

      <main className="customer-contact-page">
        <div className="customer-contact-page__container">
          {complete ? (
            <section className="customer-contact-page__confirmation" aria-live="polite">
              <div className="customer-contact-page__card customer-contact-page__confirmation-card">
                <span className="customer-contact-page__success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                </span>
                <h2>Thank you for your enquiry!</h2>
                <p>
                  We have received your details. Our team will contact you shortly to discuss your requirement.
                </p>
                <div className="customer-contact-page__channels">
                  <a href="tel:18004199200">
                    <small>Call toll free</small>
                    <strong>1800 419 9200</strong>
                  </a>
                  <a href="mailto:enquiry@tatapravesh.com">
                    <small>Email us</small>
                    <strong>enquiry@tatapravesh.com</strong>
                  </a>
                </div>
                <button
                  className="customer-contact-page__button customer-contact-page__button--secondary"
                  onClick={resetForm}
                  type="button"
                >
                  Submit another enquiry
                </button>
              </div>
            </section>
          ) : (
            <div className="customer-contact-page__layout">
              <aside className="customer-contact-page__intro">
                <p className="customer-contact-page__eyebrow">ENQUIRE NOW</p>
                <h1>Get the right doors and windows for your home</h1>
                <p className="customer-contact-page__intro-copy">
                  Share a few details about your project. Our team will help you choose and plan.
                </p>
                <ul className="customer-contact-page__benefits">
                  {["Backed by Tata Steel", "Complete door and window solutions", "Guidance from our expert team"].map((benefit) => (
                    <li key={benefit}>
                      <span className="customer-contact-page__check" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="customer-contact-page__contact">
                  Prefer to talk? Call toll free{" "}
                  <a href="tel:18004199200">1800 419 9200</a>
                  {" "}or email{" "}
                  <a href="mailto:enquiry@tatapravesh.com">enquiry@tatapravesh.com</a>
                </p>
              </aside>

              <section className="customer-contact-page__form" aria-labelledby="customer-contact-form-title" aria-live="polite">
                <form className="customer-contact-page__card" noValidate onSubmit={handleSubmit}>
                  <h2 id="customer-contact-form-title">Enquire now</h2>
                  <p className="customer-contact-page__subheading">
                    Fields marked <span className="customer-contact-page__required">*</span> are required.
                  </p>

                  <div className="customer-contact-page__fields customer-contact-page__fields--two">
                    <div className="customer-contact-page__field">
                      <label htmlFor="customer-name">Name <span className="customer-contact-page__required">*</span></label>
                      <input
                        aria-invalid={submitted && errors.name}
                        autoComplete="name"
                        id="customer-name"
                        onChange={(event) => updateDetail("name", event.target.value)}
                        placeholder="Your full name"
                        type="text"
                        value={details.name}
                      />
                      {submitted && errors.name && <span className="customer-contact-page__error" role="alert">Enter your name.</span>}
                    </div>

                    <div className="customer-contact-page__field">
                      <label htmlFor="customer-mobile">Mobile number <span className="customer-contact-page__required">*</span></label>
                      <input
                        aria-invalid={submitted && errors.mobile}
                        autoComplete="tel-national"
                        id="customer-mobile"
                        inputMode="numeric"
                        maxLength={10}
                        onChange={(event) => updateDetail("mobile", event.target.value.replace(/\D/g, "").slice(0, 10))}
                        placeholder="10-digit mobile number"
                        type="tel"
                        value={details.mobile}
                      />
                      {submitted && errors.mobile && <span className="customer-contact-page__error" role="alert">Enter a 10-digit mobile number.</span>}
                    </div>

                    <div className="customer-contact-page__field">
                      <label htmlFor="customer-email">Email ID <span className="customer-contact-page__required">*</span></label>
                      <input
                        aria-invalid={submitted && errors.email}
                        autoComplete="email"
                        id="customer-email"
                        onChange={(event) => updateDetail("email", event.target.value)}
                        placeholder="name@example.com"
                        type="email"
                        value={details.email}
                      />
                      {submitted && errors.email && <span className="customer-contact-page__error" role="alert">Enter a valid email ID.</span>}
                    </div>

                    <div className="customer-contact-page__field">
                      <label htmlFor="customer-zipcode">Zipcode <span className="customer-contact-page__required">*</span></label>
                      <input
                        aria-invalid={submitted && errors.zipcode}
                        autoComplete="postal-code"
                        id="customer-zipcode"
                        inputMode="numeric"
                        maxLength={6}
                        onChange={(event) => updateDetail("zipcode", event.target.value.replace(/\D/g, "").slice(0, 6))}
                        placeholder="6-digit zipcode"
                        type="text"
                        value={details.zipcode}
                      />
                      {submitted && errors.zipcode && <span className="customer-contact-page__error" role="alert">Enter a 6-digit zipcode.</span>}
                    </div>

                    <div className="customer-contact-page__field">
                      <label htmlFor="customer-required-by">When is the product required? <span className="customer-contact-page__required">*</span></label>
                      <select
                        aria-invalid={submitted && errors.requiredBy}
                        id="customer-required-by"
                        onChange={(event) => updateDetail("requiredBy", event.target.value)}
                        value={details.requiredBy}
                      >
                        <option value="">Select timeline</option>
                        {requiredOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                      </select>
                      {submitted && errors.requiredBy && <span className="customer-contact-page__error" role="alert">Select when you need the product.</span>}
                    </div>

                    <div className="customer-contact-page__field">
                      <label htmlFor="customer-construction-stage">Construction stage <span className="customer-contact-page__required">*</span></label>
                      <select
                        aria-invalid={submitted && errors.constructionStage}
                        id="customer-construction-stage"
                        onChange={(event) => updateDetail("constructionStage", event.target.value)}
                        value={details.constructionStage}
                      >
                        <option value="">Select stage</option>
                        {constructionOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                      </select>
                      {submitted && errors.constructionStage && <span className="customer-contact-page__error" role="alert">Select your construction stage.</span>}
                    </div>

                    <div className="customer-contact-page__field customer-contact-page__field--full">
                      <label htmlFor="customer-product-count">Number of products required <span className="customer-contact-page__required">*</span></label>
                      <input
                        aria-invalid={submitted && errors.productCount}
                        id="customer-product-count"
                        inputMode="numeric"
                        maxLength={4}
                        onChange={(event) => updateDetail("productCount", event.target.value.replace(/\D/g, "").slice(0, 4))}
                        placeholder="Enter the number of products"
                        type="text"
                        value={details.productCount}
                      />
                      {submitted && errors.productCount && <span className="customer-contact-page__error" role="alert">Enter a number of 1 or more.</span>}
                    </div>

                    <div className="customer-contact-page__field customer-contact-page__field--full">
                      <span className="customer-contact-page__label" id="customer-wooden-frame-label">
                        Is a wooden frame already installed? <span className="customer-contact-page__optional">(optional)</span>
                      </span>
                      <div className="customer-contact-page__segments" role="group" aria-labelledby="customer-wooden-frame-label">
                        {(["Yes", "No"] as const).map((option) => (
                          <button
                            aria-pressed={details.woodenFrame === option}
                            className={`customer-contact-page__segment${details.woodenFrame === option ? " customer-contact-page__segment--active" : ""}`}
                            key={option}
                            onClick={() => updateDetail("woodenFrame", details.woodenFrame === option ? "" : option)}
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="customer-contact-page__button" type="submit">Submit enquiry</button>
                  <p className="customer-contact-page__fine-print">
                    Or call toll free 1800 419 9200 or email enquiry@tatapravesh.com
                  </p>
                </form>
              </section>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}