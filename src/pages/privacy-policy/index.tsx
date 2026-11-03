import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const policySections = [
  { id: "processing-personal-data", label: "Processing personal data" },
  { id: "access-to-personal-data", label: "Access to personal data" },
  { id: "retention-of-personal-information", label: "Retention" },
  { id: "access-and-control", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "social-media", label: "Social media" },
  { id: "policy-changes", label: "Policy changes" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Tata Pravesh</title>
        <meta
          name="description"
          content="Read how Tata Steel Limited may collect, use, store and protect your personal data when you use Tata Pravesh and other TSL websites."
        />
      </Head>

      <Header />

      <main className="privacy-policy-page">
        <div className="privacy-policy-page__container">
          <nav className="privacy-policy-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>

          <header className="privacy-policy-page__hero">
            <span className="privacy-policy-page__eyebrow">Your privacy matters</span>
            <h1 id="privacy-policy-title">Privacy Policy</h1>
            <p>
              This policy explains how Tata Steel Limited handles your personal data and the
              choices and rights you have in relation to it.
            </p>
          </header>

          <div className="privacy-policy-page__layout">
            <nav className="privacy-policy-page__contents" aria-label="Privacy policy sections">
              <span className="privacy-policy-page__contents-title">On this page</span>
              {policySections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.label}
                </a>
              ))}
            </nav>

            <article className="privacy-policy-page__article">
              <section className="privacy-policy-page__section" aria-labelledby="policy-overview">
                <h2 id="policy-overview">Privacy Policy</h2>
                <p>
                  This Privacy Policy explains how Tata Steel Limited (hereinafter referred to as
                  “TSL”, “we”, “us”, “our”) may collect, use, store, disclose or otherwise process
                  your personal data including personal data provided when using our websites
                  (TSL websites) and describes the rights you have with respect to your personal
                  data.
                </p>
                <p>
                  TSL is committed to providing the highest level of protection regarding the
                  processing of their employees’, vendors’ and clients’/customers’ personal data
                  based on applicable data protection laws and regulations.
                </p>
                <p>
                  Personal data comprises all the details that TSL collects and processes directly
                  or indirectly about you as an individual, for instance information about your
                  identity and contact details (such as name, email-ID, contact number), including
                  information received from third parties and information collected through use of
                  TSL websites, cookies or other similar tools. TSL will first and foremost comply
                  with local law where it exists.
                </p>
              </section>

              <section className="privacy-policy-page__section" id="processing-personal-data" aria-labelledby="processing-title">
                <h2 id="processing-title">Processing Personal Data</h2>
                <p>
                  TSL may process your personal data where such relevant personally identifiable
                  information is required to be processed for legitimate TSL purposes as follows,
                  but not limited to:
                </p>
                <ul>
                  <li>Processing applications for products and services;</li>
                  <li>
                    Providing products and services; (It is not feasible for an organisation to
                    provide product / service without processing)
                  </li>
                  <li>Monitoring and improving our website and its content;</li>
                  <li>
                    Conducting market research and surveys with the aim of improving our products
                    and services;
                  </li>
                  <li>
                    Sending you information about our products and services for marketing purposes
                    and promotions;
                  </li>
                  <li>
                    Complying with applicable local or foreign law, regulation, policy, voluntary
                    codes, directive, judgement or court order, as well as any contractual
                    obligation pursuant to agreements between TSL and any authority, regulator or
                    enforcement agency or body or any request coming from said entities.
                  </li>
                  <li>
                    Establishing, exercising or defending legal rights in connection with legal
                    proceedings (including any prospective legal proceedings) and seeking
                    professional or legal advice in relation to such legal proceedings.
                  </li>
                  <li>Surveillance of premises. (Video Recording)</li>
                </ul>
                <p>
                  TSL processes your personal data for the performance of the contracts/agreements
                  concluded with you, compliance with applicable legal or regulatory obligations or
                  TSL legitimate interests to provide you with adequate and qualitative products
                  and services and to prevent against any excessive risk. Where providing the data
                  is optional, and you choose not to share personal data, features like
                  personalisation that use such data will not work for you.
                </p>
              </section>

              <section className="privacy-policy-page__section" id="access-to-personal-data" aria-labelledby="access-title">
                <h2 id="access-title">Access to Personal Data</h2>
                <p>
                  Your personal data processed by TSL will only be accessible by a limited list of
                  recipients on a need to know basis or where required by law.
                </p>
                <p>
                  Our policy does not apply to third-party websites where our online advertisements
                  are displayed, nor to linked third-party websites which we do not operate or
                  control.
                </p>
                <p>
                  To the extent permitted by law, TSL may record and monitor your communications
                  with TSL to ensure compliance with our legal and regulatory obligations and our
                  internal policies.
                </p>
              </section>

              <section className="privacy-policy-page__section" id="retention-of-personal-information" aria-labelledby="retention-title">
                <h2 id="retention-title">Retention of Personal Information</h2>
                <p>
                  Your personal data processed by TSL are kept in a form which permits your
                  identification for no longer than is necessary for the purposes for which the
                  personal data are processed in line with legal, regulatory or statutory
                  obligations.
                </p>
                <p>
                  At the expiry of such periods, your personal data will be deleted or archived to
                  comply with legal retention obligations or in accordance with applicable
                  statutory limitation periods.
                </p>
              </section>

              <section className="privacy-policy-page__section" id="access-and-control" aria-labelledby="rights-title">
                <h2 id="rights-title">How to access and control your personal data?</h2>
                <p>
                  Subject to applicable law, regulations and/or industry guidelines, you may have
                  the right to invoke a data subject right in relation to your personal data being
                  processed by TSL.
                </p>
                <p>
                  TSL may be allowed by law, in particular in case of excessive or manifestly
                  unfounded request, to charge a fee for fulfilling your request, subject to
                  applicable conditions.
                </p>
                <p>
                  TSL shall provide information on action taken on a request pertaining to the Data
                  Subject Rights without undue delay and in any event within one month of receipt
                  of the request. That period may be extended by two further months where
                  necessary, taking into account the complexity and number of the requests.
                </p>
                <p>
                  TSL shall inform the data subject of any such extension within one month of
                  receipt of the request, together with the reasons for the delay.
                </p>
                <p>
                  To invoke your data subject rights, please use the data subject right request
                  form or send an email to data protection officer (for contact details refer to
                  the last section of this policy).
                </p>
                <p>
                  Finally, note that you are entitled to lodge a complaint with a competent Data
                  Protection Authority where existing, concerning TSL’s compliance with the
                  applicable data protection laws and regulation.
                </p>
              </section>

              <section className="privacy-policy-page__section" id="security" aria-labelledby="security-title">
                <h2 id="security-title">Security</h2>
                <p>
                  The security and confidentiality of your Personal Data is important to us and
                  TSL has invested significant resources to protect the safekeeping and
                  confidentiality of your personal data. When using external service providers
                  acting as processors, we require that they adhere to the same standards as TSL.
                  Regardless of where your personal information is transferred or stored, we take
                  all steps reasonably necessary to ensure that personal data is kept secure.
                </p>
              </section>

              <section className="privacy-policy-page__section" id="social-media" aria-labelledby="social-title">
                <h2 id="social-title">Social Media</h2>
                <p>
                  TSL operates channels, pages and accounts on some social media sites to inform,
                  assist and engage with employees, vendors and clients/customers. TSL monitors
                  and records comments and posts made on these channels about TSL in order to
                  improve its products and services.
                </p>
                <p>
                  Please note that you must not communicate to TSL through such social media sites
                  the following information:
                </p>
                <ul>
                  <li>
                    Confidential personal data, including any information regarding your financial
                    situation, bank account details, transactions, etc.
                  </li>
                  <li>
                    Sensitive personal data including (i) special categories of personal data
                    meaning any information revealing racial or ethnic origin, political opinions,
                    religious or philosophical beliefs, or trade union membership, and the
                    processing of genetic data, biometric data for the purpose of uniquely
                    identifying a natural person, data concerning health or data concerning a
                    natural person’s sex life or sexual orientation and (ii) other sensitive
                    personal data such as criminal convictions and offences and national
                    identification number; and
                  </li>
                  <li>Excessive, inappropriate, offensive or insulting information towards individuals.</li>
                </ul>
                <p>
                  TSL is not responsible for any information posted on those sites other than the
                  information posted by its employees on its behalf. TSL is only responsible for
                  its own use of the personal data received through such sites.
                </p>
              </section>

              <section className="privacy-policy-page__section" id="policy-changes" aria-labelledby="changes-title">
                <h2 id="changes-title">Changes to this Privacy Policy</h2>
                <p>TSL may in its absolute discretion update this policy from time to time.</p>
                <p>
                  The use of the TSL Websites and any products and services supplied are subject
                  to our Terms and Conditions.
                </p>
              </section>

              <section className="privacy-policy-page__section privacy-policy-page__section--contact" id="contact" aria-labelledby="contact-title">
                <h2 id="contact-title">Who to Contact</h2>
                <p>
                  If you have any questions regarding this privacy policy or the protection of
                  your personal data, you may reach out to TSL’s DPO Team at{" "}
                  <a href="mailto:Privacy.governance@tatasteel.com">
                    Privacy.governance@tatasteel.com
                  </a>
                  .
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
