import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const faqGroups = [
  {
    id: "booking",
    title: "Booking and payment",
    description: "What to expect when placing an order.",
    questions: [
      {
        question: "How do I book a Tata Pravesh door or window?",
        answer:
          "A Tata Pravesh representative or authorised dealer can guide you through product selection, measurements and booking.",
      },
      {
        question: "What are the payment terms?",
        answer:
          "The official FAQ states that 50% is payable at booking, with the balance due three days before installation. Confirm the applicable terms with your dealer when placing your order.",
      },
      {
        question: "Can I cancel or change my order after booking?",
        answer:
          "The official FAQ says a confirmed order cannot be cancelled, and changes are not accepted after the booking form has been signed and submitted. Please review your order details before confirming.",
      },
      {
        question: "Can I get a refund on my booking amount?",
        answer:
          "The official FAQ states that the booking amount is non-refundable. Please check the applicable terms with your dealer before booking.",
      },
      {
        question: "Can I request a custom door size?",
        answer:
          "Custom sizes may be available at an additional charge. Share your requirements with the company representative or dealer so they can confirm feasibility and timing.",
      },
    ],
  },
  {
    id: "delivery-installation",
    title: "Measurement and installation",
    description: "Planning your delivery and fitting.",
    questions: [
      {
        question: "What are the steps before my door is installed?",
        answer:
          "The process includes measurement followed by installation. A representative will coordinate the details with you.",
      },
      {
        question: "Who will install my Tata Pravesh door?",
        answer:
          "Installation is carried out by a trained team. You can coordinate a suitable installation date and time with your dealer or company representative.",
      },
      {
        question: "How long will delivery take?",
        answer:
          "Delivery timelines depend on product availability and your location. Your dealer or company representative can provide an estimate when you place the order.",
      },
      {
        question: "What wall-opening size should I keep ready?",
        answer:
          "The official FAQ recommends a positive tolerance of up to 10 mm in width and 5 mm in height. Confirm the measured opening and requirements with your company representative before preparing it.",
      },
      {
        question: "How should I store the door before installation?",
        answer:
          "If delivery happens before installation, keep the door on a raised, stable surface and protect it from heavy objects. Delivery close to the installation date is recommended.",
      },
    ],
  },
  {
    id: "product-care",
    title: "Product and care",
    description: "A few tips for looking after your door.",
    questions: [
      {
        question: "Can I paint my Tata Pravesh door?",
        answer:
          "Painting can affect the factory-applied finish. The official FAQ advises against painting; check your product warranty terms before making any changes to the door.",
      },
      {
        question: "How do I change or add a lock?",
        answer:
          "Please contact your dealer or call Tata Pravesh customer support at 1800 419 9200 for guidance about changing or adding a lock.",
      },
      {
        question: "Can I add a nameplate to my door?",
        answer:
          "A nameplate provision may be available for an additional charge. Request it when booking so the required provision can be arranged.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Tata Pravesh</title>
        <meta
          name="description"
          content="Find answers to common questions about Tata Pravesh bookings, payments, measurements, installation and product care."
        />
      </Head>

      <Header />

      <main className="faqs-page">
        <div className="faqs-page__container">
          <nav className="faqs-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">FAQs</span>
          </nav>

          <header className="faqs-page__hero">
            <div className="faqs-page__hero-content">
              <span className="faqs-page__eyebrow">Here to help</span>
              <h1 id="faqs-title">Frequently asked questions</h1>
              <p>
                Clear answers to common questions about choosing, booking and installing Tata
                Pravesh doors and windows.
              </p>
              <a className="faqs-page__hero-link" href="#booking">
                Browse questions <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="faqs-page__hero-mark" aria-hidden="true">
              <span>?</span>
            </div>
          </header>

          <div className="faqs-page__groups">
            {faqGroups.map((group, groupIndex) => (
              <section className="faqs-page__group" id={group.id} key={group.id}>
                <header className="faqs-page__group-header">
                  <span className="faqs-page__group-number">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2>{group.title}</h2>
                    <p>{group.description}</p>
                  </div>
                </header>
                <div className="faqs-page__list">
                  {group.questions.map((item, index) => (
                    <details className="faqs-page__item" key={item.question}>
                      <summary>
                        <span className="faqs-page__question-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="faqs-page__question">{item.question}</span>
                        <span className="faqs-page__toggle" aria-hidden="true" />
                      </summary>
                      <div className="faqs-page__answer">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="faqs-page__contact">
            <div>
              <span className="faqs-page__eyebrow">Still need help?</span>
              <h2>Our team is happy to help.</h2>
              <p>Talk to us about your product, booking or installation questions.</p>
            </div>
            <div className="faqs-page__contact-actions">
              <a href="tel:18004199200">Call 1800 419 9200</a>
              <a href="mailto:enquiry@tatapravesh.com">Email our team</a>
            </div>
          </aside>

          <p className="faqs-page__source">
            For full and current details, please also refer to the{" "}
            <a href="https://www.tatapravesh.com/faqs/" target="_blank" rel="noreferrer">
              official Tata Pravesh FAQs
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}