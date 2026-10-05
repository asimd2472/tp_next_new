import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaDownload, FaMapMarkerAlt, FaCalendarCheck, FaEnvelope, FaPhoneAlt, FaUser, FaShoppingCart, FaArrowRight } from "react-icons/fa";

const menuCategories = [
  {
    name: "Doors",
    href: "#doors",
    items: [
      "Embossed Wood Finish Doors",
      "Plain Wood Finish Doors",
      "Plain Steel Finish Doors",
      "Fly Mesh Doors",
      "Reflections -Nature Series",
      "Door With Side Window",
      "Door With Ventilator",
      "Glazed Door",
      "Shaft Duct Access Door",
    ],
  },
  {
    name: "Windows",
    href: "#windows",
    items: ["Swing & Slide Window", "Vista Window", "Casement Window"],
  },
  { name: "Aluminum Windows", href: "#aluminum-windows", items: [] },
  { name: "Fire Door", href: "/fire-door", items: [] },
  { name: "French Door", href: "#french-door", items: [] },
  {
    name: "Buyers Guide",
    href: "#buyers-guide",
    items: [
      "Why Tata Pravesh?",
      "Select Best Doors",
      "Select Best Windows",
      "Doors & Windows for Villa",
      "Doors for Bedroom",
      "Doors & Windows for Bathroom",
      "Modern Font Door design",
      "Double Door Designs",
      "Louver Door",
      "Main Door Designs",
      "Flush Door designs",
      "Fly Mesh Doors",
      "Track Your Order",
      "Blogs",
    ],
  },
];
const utilityLinks = [
  { label: "Download Brochure", href: "#download-brochure", icon: FaDownload },
  { label: "Find A Store", href: "#find-a-store", icon: FaMapMarkerAlt },
  { label: "Book a Demo", href: "#book-a-demo", icon: FaCalendarCheck },
  { label: "enquiry@tatapravesh.com", href: "#product-enquiry-mail", icon: FaEnvelope },
  { label: "1800 419 9200", href: "#product-enquiry-phone", icon: FaPhoneAlt },
];

export default function Header() {
  const { pathname } = useRouter();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categoryId = (name: string) => name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <header className={`site-header ${isHomePage ? "" : "site-header--inner-page"} ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="utility-bar">
        <div className="utility-bar__inner">
          <div className="utility-bar__group utility-bar__group--left">
            {utilityLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <Link key={label} href={href} className="utility-link">
                <span className="utility-link__icon">
                  <Icon aria-hidden="true" />
                </span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <div className="utility-bar__group utility-bar__group--right">
            {utilityLinks.slice(3).map(({ label, href, icon: Icon }) => (
              <Link key={label} href={href} className="utility-link">
                <span className="utility-link__icon">
                  <Icon aria-hidden="true" />
                </span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className="main-header"
        onMouseLeave={() => setActiveCategory(null)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setActiveCategory(null);
        }}
      >
        <div className="main-header__inner">
          <Link href="/" aria-label="Tata Pravesh home" className="tata-steel-logo">
            <Image src="/images/tatasteel-logo.png" alt="Tata Steel" width={108} height={32} priority />
          </Link>
          <nav aria-label="Primary navigation" className="desktop-navigation">
            {menuCategories.map((category) => (
              <button
                key={category.name}
                type="button"
                className={activeCategory === category.name ? "desktop-navigation__trigger desktop-navigation__trigger--active" : "desktop-navigation__trigger"}
                aria-expanded={activeCategory === category.name}
                aria-controls="header-mega-menu"
                onMouseEnter={() => setActiveCategory(category.name)}
                onFocus={() => setActiveCategory(category.name)}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </nav>
          <Link href="#home" aria-label="Tata Pravesh" className="tata-pravesh-logo">
            <Image src="/images/Tata-Pravesh-logo.png" alt="Tata Pravesh" fill priority sizes="166px" />
          </Link>
          <div className="header-actions">
            <Link href="#account" aria-label="Account" className="header-icon-button header-icon-button--user">
              <FaUser aria-hidden="true" />
            </Link>
            <Link href="#cart" aria-label="Cart" className="header-icon-button header-icon-button--cart">
              <FaShoppingCart aria-hidden="true" />
              <span className="cart-count">0</span>
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="menu-button"
            >
              <span className={`menu-icon ${menuOpen ? "menu-icon--open" : ""}`}>
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-navigation">
            {menuCategories.map((category) => (
              category.items.length > 0 ? (
                <div className="mobile-navigation__category" key={category.name}>
                  <button
                    type="button"
                    className="mobile-navigation__category-button"
                    aria-expanded={expandedCategory === category.name}
                    aria-controls={`mobile-submenu-${categoryId(category.name)}`}
                    onClick={() => setExpandedCategory((expanded) => expanded === category.name ? null : category.name)}
                  >
                    {category.name}
                    <span className={expandedCategory === category.name ? "mobile-navigation__chevron mobile-navigation__chevron--open" : "mobile-navigation__chevron"} aria-hidden="true" />
                  </button>
                  {expandedCategory === category.name && (
                    <div className="mobile-navigation__submenu" id={`mobile-submenu-${categoryId(category.name)}`}>
                      {category.items.map((item) => (
                        <Link key={item} href={category.href} onClick={() => setMenuOpen(false)}>
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link className="mobile-navigation__category-link" key={category.name} href={category.href} onClick={() => setMenuOpen(false)}>
                  {category.name}
                </Link>
              )
            ))}
          </nav>
        )}
        {activeCategory && (
          <div className="mega-menu" id="header-mega-menu" role="region" aria-labelledby={`mega-${categoryId(activeCategory)}`}>
            {menuCategories.filter((category) => category.name === activeCategory).map((category) => (
              <section className="mega-menu__content" key={category.name}>
                <div className="mega-menu__intro">
                  <span className="mega-menu__eyebrow">Tata Pravesh</span>
                  <h2 id={`mega-${categoryId(category.name)}`}>{category.name}</h2>
                  <p>{category.items.length > 0 ? "Find the right fit for every space." : `Explore our ${category.name.toLowerCase()} collection.`}</p>
                </div>
                {category.items.length > 0 ? (
                  <ul className="mega-menu__links">
                    {category.items.map((item) => (
                      <li key={item}>
                        <Link href={category.href} onClick={() => setActiveCategory(null)}>
                          <span>{item}</span>
                          <FaArrowRight aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Link className="mega-menu__collection-link" href={category.href} onClick={() => setActiveCategory(null)}>
                    <span>Explore collection</span>
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}