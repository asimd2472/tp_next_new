import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useState, type ChangeEvent } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBox,
  FaCheck,
  FaChevronDown,
  FaChevronRight,
  FaCircleInfo,
  FaClipboardList,
  FaClock,
  FaHeadphones,
  FaHeart,
  FaPlay,
  FaPlus,
  FaRulerCombined,
  FaShareNodes,
  FaStar,
  FaTruck,
  FaWrench,
} from "react-icons/fa6";

const GALLERY = [
  "/images/product-1.jpg",
  "/images/product-1.jpg",
  "/images/product-2.jpg",
  "/images/product-3.jpg",
  "/images/product-2.jpg",
  "/images/product-3.jpg",
];
const DESIGNS: { name: string; img: string }[] = [
  { name: "Coral", img: "/images/product-1.jpg" },
  { name: "Quartz", img: "/images/product-2.jpg" },
  { name: "Everest", img: "/images/product-3.jpg" },
  { name: "Amber", img: "/images/product-1.jpg" },
  { name: "Onyx", img: "/images/product-2.jpg" },
  { name: "Topaz", img: "/images/product-3.jpg" },
];
const SHADES: { name: string; bg: string }[] = [
  { name: "Walnut Brown", bg: "#6b3a22" },
  { name: "Teak Wood", bg: "#b8691f" },
  { name: "Charcoal Grey", bg: "#454a52" },
  { name: "Matte Black", bg: "#1c1c1e" },
  { name: "Ivory White", bg: "#f2ecde" },
  { name: "Beige Grey", bg: "#d8bfa6" },
  { name: "Silver Grey", bg: "#9b9b9d" },
  {
    name: "Custom (RAL)",
    bg: "conic-gradient(#f44, #fb3, #7d3, #3cd, #46f, #b4d, #f44)",
  },
];
const SPECS: [string, string][] = [
  ["Material", "Engineered Wood"],
  ["Finish", "Laminated / Powder Coated"],
  ["Door Thickness", "65 mm (Standard)"],
  ["Frame Material", "Galvanized Steel"],
  ["Available Sizes", "Standard & Custom"],
  ["Available Shades", "Wide range of colours including wooden finish and RAL shades"],
  ["Applications", "Residential, Commercial"],
];
const DELIVERY: ["truck" | "wrench" | "clock" | "headset", string, string][] = [
  ["truck", "Pan India Delivery", "We deliver across India through trusted network."],
  ["wrench", "Expert Installation", "Our trained professionals ensure a seamless installation."],
  ["clock", "On-time Service", "Committed to your needs, and hassle-free experience."],
  ["headset", "Post-Installation Support", "Dedicated support for any assistance you need."],
];
const INCLUDED = [
  "Tall Frame Door (suitable design, shade & size)",
  "Door Frame",
  "Premium Hardware & Accessories",
  "Professional Installation",
  "Warranty Support",
];
const FAQS: [string, string][] = [
  ["What is the starting price of the Coral door?", "Pricing depends on your location. Please book a demo for the exact price."],
  ["Can I get custom sizes?", "Yes, custom sizes are available. Contact our team for assistance."],
  ["Is the door suitable for main entrance?", "Yes, it is crafted for strength and security, suitable for main entrances."],
  ["How long does delivery and installation take?", "Timelines vary by location and size; our team will confirm at booking."],
  ["What kind of warranty is provided?", "Warranty support is included. Our team will share the terms with you."],
  ["Can I see more shade options?", "Yes, use “View all Shades” to see the full range including RAL colours."],
];
const WIDTHS = [800, 900, 1000, 1200];
const HEIGHTS = [2000, 2100, 2200, 2400];


/* ---------- Page ---------- */
export default function ProductDetailsPage() {
  const [img, setImg] = useState(0);
  const [design, setDesign] = useState(0);
  const [shade, setShade] = useState(0);
  const [w, setW] = useState(900);
  const [h, setH] = useState(2100);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Coral | Tata Pravesh</title>
        <meta name="description" content="Coral premium engineered door from Tata Pravesh. Explore the modern design, finishes, sizes and pricing." />
      </Head>

      <Header />
      <main className="pdp">
        <div className="pdp-wrap">
        <nav className="pdp-crumbs" aria-label="Breadcrumb">
          {["Home", "Doors", "Premium Doors", "Engineered Doors", "Coral"].map((c, i, a) => (
            <span key={c} style={{ display: "contents" }}>
              <a href="#">{c}</a>
              {i < a.length - 1 && <FaChevronRight />}
            </span>
          ))}
        </nav>

        <section className="pdp-top">
          {/* Gallery */}
          <div className="pdp-gallery">
            <div className="pdp-thumbs">
              {GALLERY.map((src, i) => (
                <button key={src} className={`pdp-thumb ${img === i ? "is-active" : ""}`} onClick={() => setImg(i)} aria-label={`View image ${i + 1}`}>
                  <img src={src} alt="" />
                  {i === GALLERY.length - 1 && (
                    <span className="play">
                      <span><FaPlay /></span>
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="pdp-main">
              <img src={GALLERY[img]} alt="Coral engineered door" />
            </div>
          </div>

          {/* Info */}
          <div className="pdp-info">
            <div className="pdp-info-head">
              <span className="pdp-badge">Premium</span>
              <div className="pdp-actions">
                <button className="pdp-action"><FaHeart /> Save</button>
                <button className="pdp-action"><FaShareNodes /> Share</button>
              </div>
            </div>

            <h1 className="pdp-title">Coral</h1>
            <p className="pdp-sub">Modern design. Timeless appeal.</p>
            <p className="pdp-desc">
              The Coral design brings a contemporary look to your space with its elegant vertical lines. Crafted for strength, security and long-lasting performance, it’s a perfect blend of modern lifestyle and refined beauty.
            </p>
            <div className="pdp-rating">
              <span className="pdp-stars">{[0, 1, 2, 3, 4].map((i) => <FaStar key={i} />)}</span>
              <b>4.8</b> (320+ reviews)
            </div>

            <div className="pdp-price-row">
              <div>
                <div className="pdp-price-label">Starting Price*</div>
                <div className="pdp-price">₹ XX,XXX</div>
              </div>
              <div className="pdp-price-note">As per your location, we require please book a demo for the exact pricing.</div>
            </div>

            <div className="pdp-cta">
              <button className="pdp-btn pdp-btn--solid">Book a Demo <FaArrowRight /></button>
              <button className="pdp-btn pdp-btn--ghost">Enquire Now</button>
            </div>

            {/* 1 Design */}
            <div className="pdp-block">
              <div className="pdp-step"><div className="pdp-step-title"><span className="pdp-step-num">1</span>Select Design</div></div>
              <div className="pdp-designs">
                <button className="pdp-arrow" aria-label="Previous"><FaArrowLeft /></button>
                <div className="pdp-design-list">
                  {DESIGNS.map((d, i) => (
                    <button key={d.name} className={`pdp-design ${design === i ? "is-active" : ""}`} onClick={() => setDesign(i)}>
                      <span className="box"><img src={d.img} alt="" /></span>
                      {d.name}
                    </button>
                  ))}
                </div>
                <button className="pdp-arrow" aria-label="Next"><FaArrowRight /></button>
              </div>
            </div>

            {/* 2 Shade */}
            <div className="pdp-block">
              <div className="pdp-step">
                <div className="pdp-step-title"><span className="pdp-step-num">2</span>Select Shade</div>
                <button className="pdp-link">View all Shades <FaArrowRight /></button>
              </div>
              <div className="pdp-shades">
                {SHADES.map((s, i) => (
                  <button key={s.name} className={`pdp-shade ${shade === i ? "is-active" : ""}`} onClick={() => setShade(i)}>
                    <i style={{ background: s.bg }} />
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Size */}
            <div>
              <div className="pdp-step">
                <div className="pdp-step-title"><span className="pdp-step-num">3</span>Select Size</div>
                <button className="pdp-link"><FaRulerCombined /> Size Guide</button>
              </div>
              <div className="pdp-size-grid">
                <div className="pdp-field">
                  <label htmlFor="w">Width (mm)</label>
                  <div className="pdp-select">
                    <select id="w" value={w} onChange={(e: ChangeEvent<HTMLSelectElement>) => setW(+e.target.value)}>{WIDTHS.map((v) => <option key={v}>{v}</option>)}</select>
                    <FaChevronDown />
                  </div>
                </div>
                <div className="pdp-field">
                  <label htmlFor="h">Height (mm)</label>
                  <div className="pdp-select">
                    <select id="h" value={h} onChange={(e: ChangeEvent<HTMLSelectElement>) => setH(+e.target.value)}>{HEIGHTS.map((v) => <option key={v}>{v}</option>)}</select>
                    <FaChevronDown />
                  </div>
                </div>
              </div>
              <div className="pdp-infobox"><FaCircleInfo /> Custom sizes are also available. Contact our team for assistance.</div>
            </div>
          </div>
        </section>
      </div>

      {/* Lifestyle banner */}
      <section className="pdp-banner">
        <img src="/images/product-uses-background.jpg" alt="" />
        <div className="pdp-banner-copy">
          <h2>Designs That<br />Define Homes</h2>
          <p>A perfect blend of aesthetics, strength and modern living.</p>
        </div>
      </section>

      {/* Details */}
      <div className="pdp-wrap">
        <section className="pdp-details">
          <div className="pdp-col">
            <h3><FaClipboardList /> Product Specifications</h3>
            <table className="pdp-spec"><tbody>
              {SPECS.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
            </tbody></table>
          </div>
          <div className="pdp-col">
            <h3><FaTruck /> Delivery &amp; Installation</h3>
            <ul className="pdp-deliv">
              {DELIVERY.map(([ic, t, d]) => (
                <li key={t}>{ic === "truck" ? <FaTruck /> : ic === "wrench" ? <FaWrench /> : ic === "clock" ? <FaClock /> : <FaHeadphones />}<div><b>{t}</b><span>{d}</span></div></li>
              ))}
            </ul>
          </div>
          <div className="pdp-col">
            <h3><FaBox /> What’s Included</h3>
            <ul className="pdp-incl">
              {INCLUDED.map((t) => (
                <li key={t}><span className="tick"><FaCheck /></span>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section className="pdp-faq">
        <div className="pdp-faq-in">
          <h2>Frequently<br />Asked Questions</h2>
          <div className="pdp-faq-list">
            {FAQS.map(([q, a], i) => (
              <div key={q}>
                <button className="pdp-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                  {q} <FaPlus />
                </button>
                {open === i && <p className="pdp-a">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
