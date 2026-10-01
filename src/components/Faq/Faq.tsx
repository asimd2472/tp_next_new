const questions = [
  "What is the delivery time for my order?",
  "What is your return policy?",
  "Which payment methods do you accept?",
  "How can I contact customer support?",
  "Can I change or cancel my order?",
];

export default function Faq() {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="faq__container">
        <div className="faq__intro">
          <h2 id="faq-title">
            Frequently asked<br className="faq__desktop-break" /> questions
          </h2>
          <p>Can&apos;t find your answer? Our team will help.</p>
          <a className="faq__contact" href="mailto:enquiry@tatapravesh.com">Contact us</a>
        </div>

        <div className="faq__list">
          {questions.map((question) => (
            <details className="faq__item" key={question}>
              <summary>
                <span>{question}</span>
                <span className="faq__toggle" aria-hidden="true" />
              </summary>
              <p>For help with your order, please contact our team at enquiry@tatapravesh.com.</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}