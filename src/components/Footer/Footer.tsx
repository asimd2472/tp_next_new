import Link from "next/link";
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
    items: [
      { label: "About Us", href: "/why-tata-pravesh-doors-and-windows" },
      { label: "FAQ", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { label: "Why Choose Tata Pravesh", href: "/why-tata-pravesh-doors-and-windows" },
      { label: "Refer & Earn", href: "/referandearn" },
      { label: "Store Locator", href: "/store-locator" },
      {
        label: "Installation Checks (YT Link)",
        href: "https://www.youtube.com/results?search_query=Tata+Pravesh+installation+checks",
      },
      {
        label: "Easy Finance (YT Link)",
        href: "https://www.youtube.com/results?search_query=Tata+Pravesh+easy+finance",
      },
      { label: "Find a Right Door", href: "/select-best-door" },
      { label: "Find a Right Window", href: "/select-best-windows" },
    ],
  },
  {
    title: "Doors & Windows",
    items: [
      { label: "Embossed Door", href: "/door-models/embossed-wood-finish-doors" },
      { label: "Double Door", href: "/double-door-designs" },
      { label: "Door With Mesh", href: "/fly-mesh-door" },
      { label: "Door with Side Window", href: "/door-models/door-with-side-window" },
      { label: "Balcony Door/Window", href: "/french-door" },
      { label: "Sliding Doors & Windows", href: "/windows-models/swing-and-slide-window" },
      {
        label: "Hospitals Door",
        href: "mailto:enquiry@tatapravesh.com?subject=Hospital%20door%20enquiry",
      },
      {
        label: "Doors for Tower Projects",
        href: "mailto:enquiry@tatapravesh.com?subject=Tower%20project%20enquiry",
      },
      { label: "Balcony/French Doors", href: "/french-door" },
      { label: "Aluminum Windows", href: "/aluminium-windows" },
    ],
  },
  {
    title: "Contact & Support",
    items: [
      { label: "Book a Demo", href: "/book-a-demo" },
      {
        label: "Enquire for a Project",
        href: "mailto:enquiry@tatapravesh.com?subject=Project%20enquiry",
      },
      {
        label: "Log a complaint",
        href: "mailto:enquiry@tatapravesh.com?subject=Customer%20complaint",
      },
      { label: "Track Your Order", href: "/track-your-order" },
      {
        label: "Enquire for Distributorship",
        href: "mailto:enquiry@tatapravesh.com?subject=Distributorship%20enquiry",
      },
      { label: "Book a Free Consultation", href: "/book-a-demo" },
    ],
  },
  {
    title: "Brochures & Catalogs",
    items: [
      {
        label: "Download Consumer Brochure",
        href: "mailto:enquiry@tatapravesh.com?subject=Consumer%20brochure%20request",
      },
      {
        label: "Download Aluminum Brochure",
        href: "mailto:enquiry@tatapravesh.com?subject=Aluminium%20brochure%20request",
      },
      {
        label: "Download Fire Door Brochure",
        href: "mailto:enquiry@tatapravesh.com?subject=Fire%20door%20brochure%20request",
      },
      {
        label: "Download French Door Brochure",
        href: "mailto:enquiry@tatapravesh.com?subject=French%20door%20brochure%20request",
      },
      { label: "Newly Launched Products", href: "/" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/tatapravesh/", Icon: FaFacebookF, className: "social-link social-link--facebook" },
  { label: "X", href: "https://twitter.com/TataPravesh", Icon: FaXTwitter, className: "social-link social-link--x" },
  { label: "Instagram", href: "https://www.instagram.com/Tatapravesh/", Icon: FaInstagram, className: "social-link social-link--instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/showcase/tatasteel-pravesh", Icon: FaLinkedinIn, className: "social-link social-link--linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCqm5l8IxRDS3akkfRAbvluQ", Icon: FaYoutube, className: "social-link social-link--youtube" },
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
                    <li key={item.label}>
                      <span className="site-footer__bullet" aria-hidden="true" />
                      {item.href.startsWith("https://") ? (
                        <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                      ) : item.href.startsWith("/") ? (
                        <Link href={item.href}>{item.label}</Link>
                      ) : (
                        <a href={item.href}>{item.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="site-footer__bottom-bar">
          <div className="site-footer__copyright">© 2026 Tata Pravesh. All rights reserved.</div>

          <div className="site-footer__socials" aria-label="Social media links">
            {socialLinks.map(({ label, href, Icon, className }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={className}>
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
