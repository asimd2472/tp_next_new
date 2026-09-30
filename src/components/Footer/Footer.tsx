import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const columns = [
  {
    title: "Doors",
    items: [
      "Pravesh Main Door",
      "Garden Door",
      "Flush Doors",
      "Fire Rated Doors",
      "Steel Doors",
      "PUF Doors",
      "Utility Door",
      "Designer Leaf Doors",
    ],
  },
  {
    title: "Commercial Doors",
    items: [
      "Urban Pivot Doors",
      "Lamin Doors",
      "Fire Rated Doors",
      "Fire Hollow Doors",
      "Flush Door",
      "Designer Doors",
      "Office Doors",
      "Panel Doors",
    ],
  },
  {
    title: "Windows",
    items: [
      "Fixed Glazed",
      "Sliding Windows",
      "Casement Windows",
      "Tilt & Turn Windows",
      "Ventilation Grill",
      "Window Grill",
      "Designer Windows",
      "Bifold Windows",
    ],
  },
  {
    title: "Contact Us",
    items: [
      "Reach a Dealer",
      "Trade Enquiry",
      "Email Dealer",
      "For Enquiries",
      "Distributors",
    ],
  },
];

const contactItems = [
  { icon: FaPhone, label: "Call us toll free", value: "1800-209-1234" },
  { icon: FaEnvelope, label: "Email", value: "email: enquiry@tatapravesh.com" },
  { icon: FaEnvelope, label: "For business enquiries", value: "business@tatapravesh.com" },
  { icon: FaLocationDot, label: "Tata Pravesh", value: "" },
];

const socialLinks = [
  { label: "Facebook", Icon: FaFacebookF, className: "social-link social-link--facebook" },
  { label: "X", Icon: FaXTwitter, className: "social-link social-link--x" },
  { label: "Instagram", Icon: FaInstagram, className: "social-link social-link--instagram" },
  { label: "LinkedIn", Icon: FaLinkedinIn, className: "social-link social-link--linkedin" },
  { label: "YouTube", Icon: FaYoutube, className: "social-link social-link--youtube" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="site-footer__inner">
        <div className="site-footer__content">
          <div className="site-footer__brand-box">
            <h3>Tata Pravesh Door View</h3>
            <p>Fenestration – a complete safety package.</p>
          </div>

          <div className="site-footer__columns">
            {columns.map((column) => (
              <div key={column.title} className="site-footer__column">
                <h4>{column.title}</h4>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}><span className="site-footer__bullet" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="site-footer__column site-footer__column--contact">
              <h4>Reach Us</h4>
              <ul className="site-footer__contact-list">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <li key={label}>
                    <span className="site-footer__contact-icon" aria-hidden="true"><Icon /></span>
                    <span className="site-footer__contact-text">
                      {value ? (
                        <>
                          <strong>{label}</strong>
                          <br />
                          {value}
                        </>
                      ) : (
                        <strong>{label}</strong>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom-bar">
          <div className="site-footer__copyright">© 2026 Tata Pravesh. All rights reserved.</div>

          <div className="site-footer__socials" aria-label="Social media links">
            {socialLinks.map(({ label, Icon, className }) => (
              <a key={label} href="#" aria-label={label} className={className}>
                <Icon />
              </a>
            ))}
          </div>

          <button type="button" className="site-footer__back-to-top" onClick={scrollToTop}>
            Back to Top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
