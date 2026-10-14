import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function ReferAndEarnPage() {
  return (
    <>
      <Head>
        <title>Refer &amp; Earn | Tata Pravesh</title>
        <meta
          name="description"
          content="Refer someone to Tata Pravesh steel doors and windows and get rewarded when they buy."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className="refer-and-earn">
        <div className="refer-and-earn__container">
          <section className="refer-and-earn__intro" aria-labelledby="refer-and-earn-title">
            <div className="refer-and-earn__eyebrow">Refer &amp; Earn</div>
            <h1 id="refer-and-earn-title">Know someone building or renovating?</h1>
            <p>
              Refer them to Tata Pravesh steel doors and windows, and get rewarded when they
              buy.
            </p>

            <ol className="refer-and-earn__steps">
              <li>
                <span className="refer-and-earn__step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m4 12 5 5L20 6" />
                  </svg>
                </span>
                <div>
                  <strong>Share the details</strong>
                  <span>Tell us who you are and who you are referring.</span>
                </div>
              </li>
              <li>
                <span className="refer-and-earn__step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 4h14v12H8l-3 3z" />
                  </svg>
                </span>
                <div>
                  <strong>We get in touch</strong>
                  <span>
                    Our team contacts your referral about Tata Pravesh doors and windows.
                  </span>
                </div>
              </li>
              <li>
                <span className="refer-and-earn__step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8l-5.3 2.8 1.1-6-4.4-4.2 6-.8L12 3Z" />
                  </svg>
                </span>
                <div>
                  <strong>Earn your reward</strong>
                  <span>
                    Get rewarded when your referral converts, as per programme terms.
                  </span>
                </div>
              </li>
            </ol>
          </section>

          <section className="refer-and-earn__card" aria-labelledby="refer-and-earn-form-title">
            <h2 id="refer-and-earn-form-title">Submit a referral</h2>
            <p className="refer-and-earn__subheading">
              Fields marked <span className="refer-and-earn__required">*</span> are required.
            </p>

            <div className="refer-and-earn__group refer-and-earn__group--first">
              About you
            </div>
            <div className="refer-and-earn__field refer-and-earn__who-field">
              <label htmlFor="referrer-type">
                Who am I <span className="refer-and-earn__required">*</span>
              </label>
              <select id="referrer-type" name="who" required defaultValue="">
                <option value="" disabled>
                  Select who you are
                </option>
                <option>Employee Referral</option>
                <option>AOS</option>
                <option>Tiscon Dealer</option>
              </select>
            </div>

            <div className="refer-and-earn__row">
              <div className="refer-and-earn__field">
                <label htmlFor="your-name">
                  Your name <span className="refer-and-earn__required">*</span>
                </label>
                <input
                  id="your-name"
                  name="yname"
                  type="text"
                  placeholder="Full name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="refer-and-earn__field">
                <label htmlFor="your-mobile">
                  Your mobile number <span className="refer-and-earn__required">*</span>
                </label>
                <input
                  id="your-mobile"
                  name="ymobile"
                  type="tel"
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="refer-and-earn__field refer-and-earn__field--full">
                <label htmlFor="your-email">
                  Your email <span className="refer-and-earn__required">*</span>
                </label>
                <input
                  id="your-email"
                  name="yemail"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="refer-and-earn__group">Who are you referring?</div>
            <div className="refer-and-earn__row">
              <div className="refer-and-earn__field">
                <label htmlFor="referral-name">
                  Referral name <span className="refer-and-earn__required">*</span>
                </label>
                <input
                  id="referral-name"
                  name="rname"
                  type="text"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="refer-and-earn__field">
                <label htmlFor="referral-mobile">
                  Referral mobile number <span className="refer-and-earn__required">*</span>
                </label>
                <input
                  id="referral-mobile"
                  name="rmobile"
                  type="tel"
                  placeholder="10-digit mobile number"
                  required
                />
              </div>
              <div className="refer-and-earn__field">
                <label htmlFor="referral-email">Referral email</label>
                <input
                  id="referral-email"
                  name="remail"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="refer-and-earn__field">
                <label htmlFor="referral-city">
                  City / Pincode <span className="refer-and-earn__required">*</span>
                </label>
                <input
                  id="referral-city"
                  name="rcity"
                  type="text"
                  placeholder="e.g. Kolkata, 700001"
                  required
                />
              </div>
              <div className="refer-and-earn__field">
                <label htmlFor="referral-interest">Interested in</label>
                <select id="referral-interest" name="rint" defaultValue="Doors">
                  <option>Doors</option>
                  <option>Windows</option>
                  <option>Doors and windows</option>
                </select>
              </div>
              <div className="refer-and-earn__field refer-and-earn__field--full">
                <label htmlFor="referral-remarks">Remarks</label>
                <textarea
                  id="referral-remarks"
                  name="rrem"
                  placeholder="Anything we should know?"
                />
              </div>
            </div>

            <label className="refer-and-earn__consent">
              <input type="checkbox" required />
              <span>
                I confirm the person I am referring has agreed to be contacted by Tata Pravesh.
              </span>
            </label>
            <button className="refer-and-earn__submit" type="button">
              Submit referral
            </button>
            <p className="refer-and-earn__fine-print">
              Rewards are subject to programme terms and conditions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}