import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const columns = [
  {
    title: "Tata Pravesh",
    description: "Premium steel doors and windows that bring together strength, security and contemporary design. Built to last. Designed to elevate every space.",
    items: ["About Us", "FAQ", "Privacy Policy"],
  },
  {
    title: "Quick Links",
    items: [
      "Why Choose Tata Pravesh",
      "Refer & Earn",
      "Store Locator",
      "Installation Checks (YT Link)",
      "Easy Finance (YT Link)",
      "Find a Right Door",
      "Find a Right Window",
    ],
  },
  {
    title: "Doors & Windows",
    items: [
      "Embossed Door",
      "Double Door",
      "Door With Mesh",
      "Door with Side Window",
      "Balcony Door/Window",
      "Sliding Doors & Windows",
      "Hospitals Door",
      "Doors for Tower Projects",
      "Balcony/French Doors",
      "Aluminum Windows",
    ],
  },
  {
    title: "Contact & Support",
    items: [
      "Book a Demo",
      "Enquire for a Project",
      "Log a complaint",
      "Track Your Order",
      "Enquire for Distributorship",
      "Book a Free Consultation",
    ],
  },
  {
    title: "Brochures & Catalogs",
    items: [
      "Download Consumer Brochure",
      "Download Aluminum Brochure",
      "Download Fire Door Brochure",
      "Download French Door Brochure",
      "Newly Launched Products",
    ],
  },
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
          <div className="site-footer__columns">
            {columns.map((column) => (
              <div key={column.title} className={`site-footer__column${column.description ? " site-footer__column--brand" : ""}`}>
                <h4>{column.title}</h4>
                {column.description && <p className="site-footer__description">{column.description}</p>}
                <ul>
                  {column.items.map((item) => (
                    <li key={item}><span className="site-footer__bullet" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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
