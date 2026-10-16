import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useState, type FormEvent } from "react";

const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dateFormat: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

type DemoDetails = {
  name: string;
  mobile: string;
  zipcode: string;
  email: string;
};

function getDateBounds() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() + 1);

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 60);

  return { minDate, maxDate };
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", dateFormat);
}

function isValidDetails(details: DemoDetails) {
  return {
    name: details.name.trim().length > 0,
    mobile: /^\d{10}$/.test(details.mobile.trim()),
    zipcode: /^\d{6}$/.test(details.zipcode.trim()),
    email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(details.email.trim()),
  };
}

export default function BookADemoPage() {
  const { minDate, maxDate } = getDateBounds();
  const [details, setDetails] = useState<DemoDetails>({
    name: "",
    mobile: "",
    zipcode: "",
    email: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [viewMonth, setViewMonth] = useState(() => {
    const firstAvailableDate = new Date();
    firstAvailableDate.setDate(firstAvailableDate.getDate() + 1);
    return new Date(firstAvailableDate.getFullYear(), firstAvailableDate.getMonth(), 1);
  });
  const [submitted, setSubmitted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const validDetails = isValidDetails(details);
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const selectedDateTime = selectedDate && selectedTime
    ? `${formatDateKey(selectedDate)} at ${selectedTime}`
    : "";
  const firstAvailableMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  const lastAvailableMonth = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
  const previousMonth = new Date(year, month - 1, 1);
  const nextMonth = new Date(year, month + 1, 1);
  const monthLabel = viewMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  const updateDetail = (field: keyof DemoDetails, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (!Object.values(validDetails).every(Boolean) || !selectedDate || !selectedTime) {
      return;
    }

    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChangeDateTime = () => {
    setConfirmed(false);
  };

  return (
    <>
      <Head>
        <title>Book a Demo | Tata Pravesh</title>
        <meta
          name="description"
          content="Choose a convenient date and time to see Tata Pravesh doors and windows with an expert."
        />
      </Head>

      <Header />

      <main className="book-demo-page">
        <div className="book-demo-page__container">
          {confirmed ? (
            <section className="book-demo-page__confirmation" aria-live="polite">
              <div className="book-demo-page__card book-demo-page__confirmation-card">
                <span className="book-demo-page__success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h2>Your demo request is ready</h2>
                <p className="book-demo-page__confirmation-copy">
                  Thank you, {details.name.trim().split(/\s+/)[0]}. Your preferred demo time is:
                </p>
                <p className="book-demo-page__confirmation-time">
                  <span>Preferred demo time</span>
                  <strong>{selectedDateTime}</strong>
                </p>
                <p className="book-demo-page__confirmation-copy">
                  If we cannot arrange the demo at this time, our team will call you to reschedule.
                </p>
                <p className="book-demo-page__confirmation-note">
                  This preview does not send your details or reserve the selected slot yet.
                </p>
                <button
                  className="book-demo-page__button book-demo-page__secondary-button"
                  onClick={handleChangeDateTime}
                  type="button"
                >
                  Change date or time
                </button>
              </div>
            </section>
          ) : (
            <div className="book-demo-page__layout">
              <aside className="book-demo-page__intro">
                <p className="book-demo-page__eyebrow">BOOK A DEMO</p>
                <h1>See it before you decide</h1>
                <p className="book-demo-page__intro-copy">
                  Tell us who you are and when suits you. We will help you find a time for your demo.
                </p>
                <ul className="book-demo-page__benefits">
                  <li>
                    <span className="book-demo-page__check" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                    </span>
                    <span>Choose a date and time that suit you</span>
                  </li>
                  <li>
                    <span className="book-demo-page__check" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                    </span>
                    <span>See Tata Pravesh doors and windows with our expert</span>
                  </li>
                  <li>
                    <span className="book-demo-page__check" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                    </span>
                    <span>No payment needed to request a demo</span>
                  </li>
                </ul>
                <p className="book-demo-page__contact">
                  Questions? Call toll free{" "}
                  <a href="tel:18004199200">1800 419 9200</a>
                </p>
              </aside>

              <section
                className="book-demo-page__form"
                aria-labelledby="book-demo-form-title"
                aria-live="polite"
              >
                <form className="book-demo-page__card" noValidate onSubmit={handleSubmit}>
                  <h2 id="book-demo-form-title">Book your demo</h2>
                  <p className="book-demo-page__subheading">
                    Fields marked <span className="book-demo-page__required">*</span> are required.
                  </p>

                  <p className="book-demo-page__group-title">Your details</p>
                  <div className="book-demo-page__fields book-demo-page__fields--two">
                    <div className="book-demo-page__field">
                      <label htmlFor="book-demo-name">
                        Name <span className="book-demo-page__required">*</span>
                      </label>
                      <input
                        autoComplete="name"
                        aria-describedby={submitted && !validDetails.name ? "book-demo-name-error" : undefined}
                        aria-invalid={submitted && !validDetails.name}
                        id="book-demo-name"
                        onChange={(event) => updateDetail("name", event.target.value)}
                        placeholder="Your full name"
                        type="text"
                        value={details.name}
                      />
                      {submitted && !validDetails.name && (
                        <span className="book-demo-page__error" id="book-demo-name-error" role="alert">
                          Enter your name.
                        </span>
                      )}
                    </div>

                    <div className="book-demo-page__field">
                      <label htmlFor="book-demo-mobile">
                        Mobile number <span className="book-demo-page__required">*</span>
                      </label>
                      <input
                        autoComplete="tel-national"
                        aria-describedby={submitted && !validDetails.mobile ? "book-demo-mobile-error" : undefined}
                        aria-invalid={submitted && !validDetails.mobile}
                        id="book-demo-mobile"
                        inputMode="numeric"
                        maxLength={10}
                        onChange={(event) => updateDetail("mobile", event.target.value)}
                        placeholder="10-digit mobile number"
                        type="tel"
                        value={details.mobile}
                      />
                      {submitted && !validDetails.mobile && (
                        <span className="book-demo-page__error" id="book-demo-mobile-error" role="alert">
                          Enter a 10-digit mobile number.
                        </span>
                      )}
                    </div>

                    <div className="book-demo-page__field">
                      <label htmlFor="book-demo-zipcode">
                        Zipcode <span className="book-demo-page__required">*</span>
                      </label>
                      <input
                        autoComplete="postal-code"
                        aria-describedby={submitted && !validDetails.zipcode ? "book-demo-zipcode-error" : undefined}
                        aria-invalid={submitted && !validDetails.zipcode}
                        id="book-demo-zipcode"
                        inputMode="numeric"
                        maxLength={6}
                        onChange={(event) => updateDetail("zipcode", event.target.value)}
                        placeholder="6-digit zipcode"
                        type="text"
                        value={details.zipcode}
                      />
                      {submitted && !validDetails.zipcode && (
                        <span className="book-demo-page__error" id="book-demo-zipcode-error" role="alert">
                          Enter a 6-digit zipcode.
                        </span>
                      )}
                    </div>

                    <div className="book-demo-page__field">
                      <label htmlFor="book-demo-email">
                        Email ID <span className="book-demo-page__required">*</span>
                      </label>
                      <input
                        autoComplete="email"
                        aria-describedby={submitted && !validDetails.email ? "book-demo-email-error" : undefined}
                        aria-invalid={submitted && !validDetails.email}
                        id="book-demo-email"
                        onChange={(event) => updateDetail("email", event.target.value)}
                        placeholder="name@example.com"
                        type="email"
                        value={details.email}
                      />
                      {submitted && !validDetails.email && (
                        <span className="book-demo-page__error" id="book-demo-email-error" role="alert">
                          Enter a valid email ID.
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="book-demo-page__group-title">
                    When do you want the demo? <span className="book-demo-page__required">*</span>
                  </p>
                  <div className="book-demo-page__date-time">
                    <div className="book-demo-page__calendar">
                      <div className="book-demo-page__calendar-heading">
                        <button
                          aria-label="Previous month"
                          className="book-demo-page__calendar-nav"
                          disabled={previousMonth < firstAvailableMonth}
                          onClick={() => setViewMonth(previousMonth)}
                          type="button"
                        >
                          &lsaquo;
                        </button>
                        <strong aria-live="polite">{monthLabel}</strong>
                        <button
                          aria-label="Next month"
                          className="book-demo-page__calendar-nav"
                          disabled={nextMonth > lastAvailableMonth}
                          onClick={() => setViewMonth(nextMonth)}
                          type="button"
                        >
                          &rsaquo;
                        </button>
                      </div>
                      <div className="book-demo-page__weekdays" aria-hidden="true">
                        {weekdays.map((weekday) => <span key={weekday}>{weekday}</span>)}
                      </div>
                      <div className="book-demo-page__days" role="group" aria-label={monthLabel}>
                        {Array.from({ length: 42 }, (_, index) => {
                          const dayOfMonth = index - firstWeekday + 1;
                          if (dayOfMonth < 1 || dayOfMonth > daysInMonth) {
                            return <span aria-hidden="true" key={`blank-${index}`} />;
                          }

                          const date = new Date(year, month, dayOfMonth);
                          const dateKey = toDateKey(date);
                          const isSelected = dateKey === selectedDate;
                          const isDisabled = date < minDate || date > maxDate;

                          return (
                            <button
                              aria-label={date.toLocaleDateString("en-IN", dateFormat)}
                              aria-pressed={isSelected}
                              className={`book-demo-page__day${isSelected ? " book-demo-page__day--selected" : ""}`}
                              disabled={isDisabled}
                              key={dateKey}
                              onClick={() => setSelectedDate(dateKey)}
                              type="button"
                            >
                              {dayOfMonth}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <span className="book-demo-page__time-label" id="book-demo-time-label">
                        Pick a time
                      </span>
                      <div
                        className="book-demo-page__slots"
                        role="group"
                        aria-labelledby="book-demo-time-label"
                      >
                        {timeSlots.map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              aria-pressed={isSelected}
                              className={`book-demo-page__slot${isSelected ? " book-demo-page__slot--selected" : ""}`}
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              type="button"
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {submitted && (!selectedDate || !selectedTime) && (
                    <p className="book-demo-page__error" role="alert">
                      Please choose a date and a time.
                    </p>
                  )}
                  {selectedDateTime && (
                    <p className="book-demo-page__chosen" aria-live="polite">
                      {selectedDateTime}
                    </p>
                  )}

                  <button className="book-demo-page__button" type="submit">
                    Confirm my demo
                  </button>
                  <p className="book-demo-page__fine-print">
                    No payment needed. We will confirm your preferred slot with you.
                  </p>
                  <p className="book-demo-page__preview-note">
                    Preview only: this form does not submit your details yet.
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
