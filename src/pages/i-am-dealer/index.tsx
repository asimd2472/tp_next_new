import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useEffect, useRef, useState, type FormEvent } from "react";

type EnquiryType = "dealer" | "distributor";

type DealerForm = {
  fullName: string;
  mobile: string;
  email: string;
  pinCode: string;
  state: string;
  city: string;
  businessType: string;
  businessName: string;
  revenue: string;
  investment: string;
  commercialSpace: string;
  spaceArea: string;
  experience: string;
  existingBrands: string;
  preferredLocation: string;
  timeline: string;
  additionalInfo: string;
  consent: boolean;
};

type DealerFormField = Exclude<keyof DealerForm, "consent">;
type DealerErrors = Partial<Record<keyof DealerForm, string>>;
type PostalOffice = { State?: unknown; District?: unknown; Block?: unknown };

const STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

const BUSINESS_TYPES = [
  "Existing Dealer / Retailer",
  "Hardware / Building Materials Business",
  "Distributor",
  "Builder / Contractor",
  "Entrepreneur / Investor",
  "Other",
];
const REVENUES = [
  "Below ₹25 lakh",
  "₹25 lakh–₹50 lakh",
  "₹50 lakh–₹1 crore",
  "₹1 crore–₹5 crore",
  "Above ₹5 crore",
];
const INVESTMENTS = [
  "Below ₹5 lakh",
  "₹5 lakh–₹10 lakh",
  "₹10 lakh–₹25 lakh",
  "₹25 lakh–₹50 lakh",
  "Above ₹50 lakh",
];
const COMMERCIAL_SPACES = [
  "Owned",
  "Rented",
  "Space Identified, Yet to Be Finalised",
  "Looking for Suitable Space",
];
const SPACE_AREAS = [
  "Below 500 sq. ft.",
  "500–1,000 sq. ft.",
  "1,000–2,000 sq. ft.",
  "Above 2,000 sq. ft.",
];
const EXPERIENCES = ["No Prior Experience", "Less than 2 Years", "2–5 Years", "More than 5 Years"];
const TIMELINES = [
  "Immediately",
  "Within 1 Month",
  "Within 1–3 Months",
  "Within 3–6 Months",
  "More than 6 Months",
];

const REQUIRED_FIELDS: Array<{ key: DealerFormField; message: string; inputId: string }> = [
  { key: "fullName", message: "Enter your full name.", inputId: "dealer-full-name" },
  { key: "mobile", message: "Enter a 10-digit mobile number.", inputId: "dealer-mobile" },
  { key: "email", message: "Enter a valid email ID.", inputId: "dealer-email" },
  { key: "pinCode", message: "Enter a 6-digit PIN code.", inputId: "dealer-pin-code" },
  { key: "state", message: "Select your state.", inputId: "dealer-state" },
  { key: "city", message: "Enter your city or district.", inputId: "dealer-city" },
  { key: "businessType", message: "Select your type of business.", inputId: "dealer-business-type" },
  { key: "businessName", message: "Enter your current business name.", inputId: "dealer-business-name" },
  { key: "revenue", message: "Select your annual revenue.", inputId: "dealer-revenue" },
  { key: "investment", message: "Select your investment capacity.", inputId: "dealer-investment" },
  { key: "commercialSpace", message: "Select space availability.", inputId: "dealer-commercial-space" },
  { key: "spaceArea", message: "Select the approximate area.", inputId: "dealer-space-area" },
  { key: "preferredLocation", message: "Enter your preferred location.", inputId: "dealer-preferred-location" },
  { key: "timeline", message: "Select your expected timeline.", inputId: "dealer-timeline" },
];

function createEmptyForm(): DealerForm {
  return {
    fullName: "",
    mobile: "",
    email: "",
    pinCode: "",
    state: "",
    city: "",
    businessType: "",
    businessName: "",
    revenue: "",
    investment: "",
    commercialSpace: "",
    spaceArea: "",
    experience: "",
    existingBrands: "",
    preferredLocation: "",
    timeline: "",
    additionalInfo: "",
    consent: true,
  };
}

function getFormErrors(form: DealerForm, mobileVerified: boolean): DealerErrors {
  const nextErrors: DealerErrors = {};

  REQUIRED_FIELDS.forEach(({ key, message }) => {
    if (!form[key].trim()) nextErrors[key] = message;
  });

  if (!/^\d{10}$/.test(form.mobile.trim())) {
    nextErrors.mobile = "Enter a 10-digit mobile number.";
  } else if (!mobileVerified) {
    nextErrors.mobile = "Please verify your mobile number with the demo OTP flow.";
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) {
    nextErrors.email = "Enter a valid email ID.";
  }
  if (!/^\d{6}$/.test(form.pinCode.trim())) {
    nextErrors.pinCode = "Enter a 6-digit PIN code.";
  }
  if (!form.consent) nextErrors.consent = "Please give consent to be contacted.";

  return nextErrors;
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

function Field({
  id,
  label,
  required = false,
  optional = false,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`dealer-page__field ${className}`}>
      <label htmlFor={id}>
        {label}{" "}
        {required && <span className="dealer-page__required">*</span>}
        {optional && <span className="dealer-page__optional">(optional)</span>}
      </label>
      {children}
      {error && <span className="dealer-page__error" id={`${id}-error`} role="alert">{error}</span>}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  error,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <Field id={id} label={label} required error={error}>
      <select
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="dealer-page__control"
        id={id}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </Field>
  );
}

export default function IAmDealerPage() {
  const [form, setForm] = useState<DealerForm>(createEmptyForm);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>("dealer");
  const [errors, setErrors] = useState<DealerErrors>({});
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [postalStatus, setPostalStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [postalMessage, setPostalMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const postalController = useRef<AbortController | null>(null);

  useEffect(() => () => postalController.current?.abort(), []);

  const updateField = (field: DealerFormField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const updateMobile = (value: string) => {
    updateField("mobile", value.replace(/\D/g, "").slice(0, 10));
    setOtp("");
    setOtpSent(false);
    setOtpError("");
    setMobileVerified(false);
  };

  const lookupPinCode = async (pinCode: string) => {
    postalController.current?.abort();

    if (!/^\d{6}$/.test(pinCode)) {
      setPostalStatus("idle");
      setPostalMessage("");
      return;
    }

    const controller = new AbortController();
    postalController.current = controller;
    setPostalStatus("loading");
    setPostalMessage("Fetching state and city...");

    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pinCode}`, {
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("The PIN code lookup service is unavailable.");

      const result: unknown = await response.json();
      const firstResult = Array.isArray(result) ? result[0] : null;
      const record = firstResult && typeof firstResult === "object"
        ? firstResult as { Status?: unknown; PostOffice?: unknown }
        : null;
      const firstOffice = record?.Status === "Success" && Array.isArray(record.PostOffice)
        ? record.PostOffice[0] as PostalOffice | undefined
        : undefined;

      if (!firstOffice) throw new Error("No location details were found for this PIN code.");
      if (postalController.current !== controller) return;

      const stateName = typeof firstOffice.State === "string" ? firstOffice.State : "";
      const matchedState = STATES.find((state) => state.toLowerCase() === stateName.toLowerCase());
      const cityName = [firstOffice.District, firstOffice.Block]
        .find((value): value is string => typeof value === "string" && value.trim().length > 0);

      if (matchedState) updateField("state", matchedState);
      if (cityName) updateField("city", cityName);
      setPostalStatus("success");
      setPostalMessage("State and city filled. You can edit them.");
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      if (postalController.current !== controller) return;

      setPostalStatus("error");
      setPostalMessage(error instanceof Error
        ? `${error.message} Please select your state and enter your city.`
        : "Could not fetch location details. Please select your state and enter your city.");
    }
  };

  const updatePinCode = (value: string) => {
    const pinCode = value.replace(/\D/g, "").slice(0, 6);
    updateField("pinCode", pinCode);
    void lookupPinCode(pinCode);
  };

  const sendDemoOtp = () => {
    if (!/^\d{10}$/.test(form.mobile)) {
      setErrors((current) => ({ ...current, mobile: "Enter a 10-digit mobile number." }));
      document.getElementById("dealer-mobile")?.focus();
      return;
    }

    setErrors((current) => {
      const next = { ...current };
      delete next.mobile;
      return next;
    });
    setOtp("");
    setOtpError("");
    setOtpSent(true);
    setMobileVerified(false);
  };

  const verifyDemoOtp = () => {
    if (!/^\d{6}$/.test(otp)) {
      setOtpError("Enter a 6-digit OTP.");
      return;
    }

    setOtpError("");
    setOtpSent(false);
    setMobileVerified(true);
  };

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = getFormErrors(form, mobileVerified);
    setErrors(nextErrors);
    const firstInvalidField = REQUIRED_FIELDS.find(({ key }) => nextErrors[key]);
    const firstInvalidId = firstInvalidField?.inputId
      ?? (nextErrors.consent ? "dealer-consent" : undefined);

    if (firstInvalidId) {
      const input = document.getElementById(firstInvalidId);
      input?.scrollIntoView({ behavior: "smooth", block: "center" });
      input?.focus();
      return;
    }

    setComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetEnquiry = () => {
    postalController.current?.abort();
    setForm(createEmptyForm());
    setEnquiryType("dealer");
    setErrors({});
    setOtp("");
    setOtpSent(false);
    setMobileVerified(false);
    setOtpError("");
    setPostalStatus("idle");
    setPostalMessage("");
    setComplete(false);
  };

  const businessName = enquiryType === "dealer" ? "dealership" : "distributorship";
  const titleBusinessName = enquiryType === "dealer" ? "Dealership" : "Distributorship";

  return (
    <>
      <Head>
        <title>Dealership &amp; Distributorship Enquiry | Tata Pravesh</title>
        <meta
          name="description"
          content="Enquire about becoming a Tata Pravesh dealer or distributor."
        />
      </Head>
      <Header />
      <main className="dealer-page">
        <div className="dealer-page__container">
          <div className="dealer-page__layout">
            <aside className="dealer-page__intro">
              <p className="dealer-page__eyebrow">PARTNER WITH US</p>
              <h1>Grow with Tata Pravesh</h1>
              <p className="dealer-page__intro-copy">
                Tell us a little about yourself and your business. Our team will take it from there.
              </p>
              <ul className="dealer-page__benefits">
                <li><span className="dealer-page__check"><CheckIcon /></span><span>Backed by Tata Steel</span></li>
                <li><span className="dealer-page__check"><CheckIcon /></span><span>Complete door and window solutions</span></li>
                <li><span className="dealer-page__check"><CheckIcon /></span><span>Support from our expert team</span></li>
              </ul>
              <div className="dealer-page__contact">
                Prefer to talk? Call toll free <a href="tel:18004199200">1800 419 9200</a> or email{" "}
                <a href="mailto:enquire@tatapravesh.com">enquire@tatapravesh.com</a>
              </div>
            </aside>

            <section className="dealer-page__form-section" aria-live="polite">
              {complete ? (
                <div className="dealer-page__card dealer-page__done" aria-labelledby="dealer-done-title">
                  <span className="dealer-page__success-icon"><CheckIcon /></span>
                  <h2 id="dealer-done-title">
                    Thank You for Your Interest in Tata Pravesh {titleBusinessName}!
                  </h2>
                  <p>
                    Your enquiry preview is complete. Our team has not received your details because
                    enquiry submission is not connected yet.
                  </p>
                  <p className="dealer-page__done-emphasis">
                    We look forward to exploring this opportunity with you!
                  </p>
                  <div className="dealer-page__channels">
                    <a href="tel:18004199200"><small>Call toll free</small><strong>1800 419 9200</strong></a>
                    <a href="mailto:enquire@tatapravesh.com"><small>Email us</small><strong>enquire@tatapravesh.com</strong></a>
                  </div>
                  <button
                    className="dealer-page__button dealer-page__button--secondary"
                    onClick={resetEnquiry}
                    type="button"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form className="dealer-page__card" noValidate onSubmit={submitEnquiry}>
                  <h2>{titleBusinessName} enquiry</h2>
                  <p className="dealer-page__subheading">
                    Fields marked <span className="dealer-page__required">*</span> are required.
                  </p>

                  <div className="dealer-page__segments" role="group" aria-label="Enquiry type">
                    <button
                      aria-pressed={enquiryType === "dealer"}
                      className={`dealer-page__segment${enquiryType === "dealer" ? " is-active" : ""}`}
                      onClick={() => setEnquiryType("dealer")}
                      type="button"
                    >
                      Enquire for Dealership
                    </button>
                    <button
                      aria-pressed={enquiryType === "distributor"}
                      className={`dealer-page__segment${enquiryType === "distributor" ? " is-active" : ""}`}
                      onClick={() => setEnquiryType("distributor")}
                      type="button"
                    >
                      Enquire for Distributorship
                    </button>
                  </div>

                  <h3 className="dealer-page__section-title">Section 1: Contact details</h3>
                  <div className="dealer-page__fields dealer-page__fields--two">
                    <Field className="dealer-page__field--full" error={errors.fullName} id="dealer-full-name" label="Full name" required>
                      <input
                        aria-describedby={errors.fullName ? "dealer-full-name-error" : undefined}
                        aria-invalid={Boolean(errors.fullName)}
                        autoComplete="name"
                        className="dealer-page__control"
                        id="dealer-full-name"
                        onChange={(event) => updateField("fullName", event.target.value)}
                        placeholder="Your full name"
                        type="text"
                        value={form.fullName}
                      />
                    </Field>

                    <Field error={errors.mobile} id="dealer-mobile" label="Mobile number" required>
                      <div className="dealer-page__otp-row">
                        <input
                          aria-describedby={errors.mobile ? "dealer-mobile-error" : undefined}
                          aria-invalid={Boolean(errors.mobile)}
                          autoComplete="tel-national"
                          className="dealer-page__control"
                          id="dealer-mobile"
                          inputMode="numeric"
                          maxLength={10}
                          onChange={(event) => updateMobile(event.target.value)}
                          placeholder="10-digit mobile number"
                          type="tel"
                          value={form.mobile}
                        />
                        <button
                          className="dealer-page__small-button"
                          disabled={mobileVerified}
                          onClick={sendDemoOtp}
                          type="button"
                        >
                          {otpSent ? "Resend OTP" : "Send OTP"}
                        </button>
                      </div>
                    </Field>

                    {otpSent && (
                      <Field error={otpError} id="dealer-otp" label="Enter OTP" required>
                        <div className="dealer-page__otp-row">
                          <input
                            aria-describedby={otpError ? "dealer-otp-error" : undefined}
                            aria-invalid={Boolean(otpError)}
                            autoComplete="one-time-code"
                            className="dealer-page__control"
                            id="dealer-otp"
                            inputMode="numeric"
                            maxLength={6}
                            onChange={(event) => {
                              setOtp(event.target.value.replace(/\D/g, "").slice(0, 6));
                              setOtpError("");
                            }}
                            placeholder="6-digit OTP"
                            type="tel"
                            value={otp}
                          />
                          <button className="dealer-page__small-button" onClick={verifyDemoOtp} type="button">
                            Verify
                          </button>
                        </div>
                        <span className="dealer-page__hint">
                          Demo only: an SMS is not sent, and this code is not verified by a service.
                        </span>
                      </Field>
                    )}
                    {mobileVerified && (
                      <div className="dealer-page__verified" role="status">
                        <CheckIcon /> Mobile number verified (demo only)
                      </div>
                    )}

                    <Field className="dealer-page__field--full" error={errors.email} id="dealer-email" label="Email ID" required>
                      <input
                        aria-describedby={errors.email ? "dealer-email-error" : undefined}
                        aria-invalid={Boolean(errors.email)}
                        autoComplete="email"
                        className="dealer-page__control"
                        id="dealer-email"
                        onChange={(event) => updateField("email", event.target.value)}
                        placeholder="name@example.com"
                        type="email"
                        value={form.email}
                      />
                    </Field>
                  </div>

                  <h3 className="dealer-page__section-title">Section 2: Business &amp; location details</h3>
                  <div className="dealer-page__fields dealer-page__fields--two">
                    <Field error={errors.pinCode} id="dealer-pin-code" label="PIN code" required>
                      <input
                        aria-describedby={[
                          errors.pinCode ? "dealer-pin-code-error" : "",
                          postalMessage ? "dealer-pin-code-hint" : "",
                        ].filter(Boolean).join(" ") || undefined}
                        aria-invalid={Boolean(errors.pinCode)}
                        autoComplete="postal-code"
                        className="dealer-page__control"
                        id="dealer-pin-code"
                        inputMode="numeric"
                        maxLength={6}
                        onChange={(event) => updatePinCode(event.target.value)}
                        placeholder="6-digit PIN code"
                        type="text"
                        value={form.pinCode}
                      />
                      {postalMessage && (
                        <span
                          className={`dealer-page__hint dealer-page__hint--${postalStatus}`}
                          id="dealer-pin-code-hint"
                          role="status"
                        >
                          {postalMessage}
                        </span>
                      )}
                    </Field>

                    <SelectField
                      error={errors.state}
                      id="dealer-state"
                      label="State"
                      onChange={(value) => updateField("state", value)}
                      options={STATES}
                      placeholder="Select state"
                      value={form.state}
                    />
                    <Field className="dealer-page__field--full" error={errors.city} id="dealer-city" label="City / District" required>
                      <input
                        aria-describedby={errors.city ? "dealer-city-error" : undefined}
                        aria-invalid={Boolean(errors.city)}
                        autoComplete="address-level2"
                        className="dealer-page__control"
                        id="dealer-city"
                        onChange={(event) => updateField("city", event.target.value)}
                        placeholder="Auto-filled from PIN code, or enter manually"
                        type="text"
                        value={form.city}
                      />
                    </Field>

                    <SelectField
                      error={errors.businessType}
                      id="dealer-business-type"
                      label="Type of business"
                      onChange={(value) => updateField("businessType", value)}
                      options={BUSINESS_TYPES}
                      placeholder="Select type of business"
                      value={form.businessType}
                    />
                    <Field error={errors.businessName} id="dealer-business-name" label="Current business name" required>
                      <input
                        aria-describedby={errors.businessName ? "dealer-business-name-error" : undefined}
                        aria-invalid={Boolean(errors.businessName)}
                        autoComplete="organization"
                        className="dealer-page__control"
                        id="dealer-business-name"
                        onChange={(event) => updateField("businessName", event.target.value)}
                        placeholder="Name of your business"
                        type="text"
                        value={form.businessName}
                      />
                    </Field>
                    <SelectField
                      error={errors.revenue}
                      id="dealer-revenue"
                      label="Current annual business revenue"
                      onChange={(value) => updateField("revenue", value)}
                      options={REVENUES}
                      placeholder="Select annual revenue"
                      value={form.revenue}
                    />
                  </div>

                  <h3 className="dealer-page__section-title">
                    Section 3: {titleBusinessName} requirements
                  </h3>
                  <div className="dealer-page__fields dealer-page__fields--two">
                    <SelectField
                      error={errors.investment}
                      id="dealer-investment"
                      label={`Investment capacity for Tata Pravesh ${businessName}`}
                      onChange={(value) => updateField("investment", value)}
                      options={INVESTMENTS}
                      placeholder="Select investment capacity"
                      value={form.investment}
                    />
                    <SelectField
                      error={errors.commercialSpace}
                      id="dealer-commercial-space"
                      label="Availability of commercial space"
                      onChange={(value) => updateField("commercialSpace", value)}
                      options={COMMERCIAL_SPACES}
                      placeholder="Select availability"
                      value={form.commercialSpace}
                    />
                    <SelectField
                      error={errors.spaceArea}
                      id="dealer-space-area"
                      label="Approximate commercial space area"
                      onChange={(value) => updateField("spaceArea", value)}
                      options={SPACE_AREAS}
                      placeholder="Select area"
                      value={form.spaceArea}
                    />
                    <SelectField
                      id="dealer-experience"
                      label="Experience in doors, windows or building materials"
                      onChange={(value) => updateField("experience", value)}
                      options={EXPERIENCES}
                      placeholder="Select experience"
                      value={form.experience}
                    />
                    <Field id="dealer-existing-brands" label="Existing brands dealt with" optional>
                      <input
                        className="dealer-page__control"
                        id="dealer-existing-brands"
                        onChange={(event) => updateField("existingBrands", event.target.value)}
                        placeholder="Enter the brands you currently deal with"
                        type="text"
                        value={form.existingBrands}
                      />
                    </Field>
                    <Field error={errors.preferredLocation} id="dealer-preferred-location" label={`Preferred ${businessName} location`} required>
                      <input
                        aria-describedby={errors.preferredLocation ? "dealer-preferred-location-error" : undefined}
                        aria-invalid={Boolean(errors.preferredLocation)}
                        className="dealer-page__control"
                        id="dealer-preferred-location"
                        onChange={(event) => updateField("preferredLocation", event.target.value)}
                        placeholder="Enter preferred city, district or locality"
                        type="text"
                        value={form.preferredLocation}
                      />
                    </Field>
                    <SelectField
                      error={errors.timeline}
                      id="dealer-timeline"
                      label={`Expected timeline to start the ${businessName}`}
                      onChange={(value) => updateField("timeline", value)}
                      options={TIMELINES}
                      placeholder="Select timeline"
                      value={form.timeline}
                    />
                    <Field className="dealer-page__field--full" id="dealer-additional-info" label="Additional information" optional>
                      <textarea
                        className="dealer-page__control dealer-page__textarea"
                        id="dealer-additional-info"
                        onChange={(event) => updateField("additionalInfo", event.target.value)}
                        placeholder={`Share any additional details relevant to your ${businessName} enquiry`}
                        value={form.additionalInfo}
                      />
                    </Field>
                  </div>

                  <label className="dealer-page__consent" htmlFor="dealer-consent">
                    <input
                      checked={form.consent}
                      id="dealer-consent"
                      onChange={(event) => {
                        setForm((current) => ({ ...current, consent: event.target.checked }));
                        setErrors((current) => {
                          const next = { ...current };
                          delete next.consent;
                          return next;
                        });
                      }}
                      type="checkbox"
                    />
                    <span>
                      I agree to be contacted by Tata Pravesh regarding my enquiry via call, SMS,
                      WhatsApp or email.
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="dealer-page__error" id="dealer-consent-error" role="alert">
                      {errors.consent}
                    </span>
                  )}
                  <button className="dealer-page__button" type="submit">Submit Enquiry</button>
                  <p className="dealer-page__fine-print">
                    Preview only: this form does not send your enquiry yet. Or call toll free{" "}
                    <a href="tel:18004199200">1800 419 9200</a> or email{" "}
                    <a href="mailto:enquire@tatapravesh.com">enquire@tatapravesh.com</a>.
                  </p>
                </form>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}