"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState, type SVGProps, type ChangeEvent } from "react";

/* ---------- Replace image paths with your existing project assets ---------- */
const GALLERY = [
  "/images/products/coral/1.jpg",
  "/images/products/coral/2.jpg",
  "/images/products/coral/3.jpg",
  "/images/products/coral/4.jpg",
  "/images/products/coral/5.jpg",
  "/images/products/coral/video-thumb.jpg",
];
const DESIGNS: { name: string; img: string }[] = [
  { name: "Coral", img: "/images/designs/coral.jpg" },
  { name: "Quartz", img: "/images/designs/quartz.jpg" },
  { name: "Everest", img: "/images/designs/everest.jpg" },
  { name: "Amber", img: "/images/designs/amber.jpg" },
  { name: "Onyx", img: "/images/designs/onyx.jpg" },
  { name: "Topaz", img: "/images/designs/topaz.jpg" },
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
const DELIVERY: [IconName, string, string][] = [
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

/* ---------- Icons ---------- */
const P = {
  chevR: "m9 6 6 6-6 6",
  chevL: "m15 6-6 6 6 6",
  chevD: "m6 9 6 6 6-6",
  plus: "M12 5v14M5 12h14",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  check: "m5 12 5 5 9-10",
  heart: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.500-7 10-7 10Z",
  info: "M12 11v5m0-8v.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
  ruler: "M4 6h16v12H4zM8 6v4m4-4v6m4-6v4",
  clip: "M9 4h6v3H9zM7 5H5v15h14V5h-2M9 12h6m-6 4h6",
  truck: "M3 6h11v9H3zM14 9h4l3 3v3h-7M7 18a1.500 1.500 0 1 0 0 .01M17 18a1.500 1.500 0 1 0 0 .01",
  wrench: "M14 6a4 4 0 0 0 5 5l-9 9a2.100 2.100 0 0 1-3-3l9-9a4 4 0 0 0-2-2ZM5 5l4 4",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v4l3 2",
  headset: "M5 14v-2a7 7 0 0 1 14 0v2M5 14h2v4H5zM17 14h2v4h-2zM17 18c0 2-3 2-5 2",
  box: "m12 3 8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10",
  share: "M18 8a2.500 2.500 0 1 0 0-.01M6 14.500a2.500 2.500 0 1 0 0-.01M18 21a2.500 2.500 0 1 0 0-.01M8.200 13.200l7.600-4.400M8.200 15.800l7.600 4.400",
};
type IconName = keyof typeof P;
const Icon = ({ n, ...rest }: { n: IconName } & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
    <path d={P[n]} />
  </svg>
);
const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 2 3 6.500 7 .8-5.200 4.800 1.400 7L12 17.500 5.800 21l1.400-7L2 9.300l7-.8z" />
  </svg>
);

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
      <Header />
      <main className="pdp">
      {/* Keep your existing <Header /> above this component in the layout */}

      <div className="pdp-wrap">
        <nav className="pdp-crumbs" aria-label="Breadcrumb">
          {["Home", "Doors", "Premium Doors", "Engineered Doors", "Coral"].map((c, i, a) => (
            <span key={c} style={{ display: "contents" }}>
              <a href="#">{c}</a>
              {i < a.length - 1 && <Icon n="chevR" />}
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
                      <span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
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
                <button className="pdp-action"><Icon n="heart" /> Save</button>
                <button className="pdp-action"><Icon n="share" /> Share</button>
              </div>
            </div>

            <h1 className="pdp-title">Coral</h1>
            <p className="pdp-sub">Modern design. Timeless appeal.</p>
            <p className="pdp-desc">
              The Coral design brings a contemporary look to your space with its elegant vertical lines. Crafted for strength, security and long-lasting performance, it’s a perfect blend of modern lifestyle and refined beauty.
            </p>
            <div className="pdp-rating">
              <span className="pdp-stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}</span>
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
              <button className="pdp-btn pdp-btn--solid">Book a Demo <Icon n="arrow" /></button>
              <button className="pdp-btn pdp-btn--ghost">Enquire Now</button>
            </div>

            {/* 1 Design */}
            <div className="pdp-block">
              <div className="pdp-step"><div className="pdp-step-title"><span className="pdp-step-num">1</span>Select Design</div></div>
              <div className="pdp-designs">
                <button className="pdp-arrow" aria-label="Previous"><Icon n="chevL" /></button>
                <div className="pdp-design-list">
                  {DESIGNS.map((d, i) => (
                    <button key={d.name} className={`pdp-design ${design === i ? "is-active" : ""}`} onClick={() => setDesign(i)}>
                      <span className="box"><img src={d.img} alt="" /></span>
                      {d.name}
                    </button>
                  ))}
                </div>
                <button className="pdp-arrow" aria-label="Next"><Icon n="chevR" /></button>
              </div>
            </div>

            {/* 2 Shade */}
            <div className="pdp-block">
              <div className="pdp-step">
                <div className="pdp-step-title"><span className="pdp-step-num">2</span>Select Shade</div>
                <button className="pdp-link">View all Shades <Icon n="arrow" /></button>
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
                <button className="pdp-link"><Icon n="ruler" /> Size Guide</button>
              </div>
              <div className="pdp-size-grid">
                <div className="pdp-field">
                  <label htmlFor="w">Width (mm)</label>
                  <div className="pdp-select">
                    <select id="w" value={w} onChange={(e: ChangeEvent<HTMLSelectElement>) => setW(+e.target.value)}>{WIDTHS.map((v) => <option key={v}>{v}</option>)}</select>
                    <Icon n="chevD" />
                  </div>
                </div>
                <div className="pdp-field">
                  <label htmlFor="h">Height (mm)</label>
                  <div className="pdp-select">
                    <select id="h" value={h} onChange={(e: ChangeEvent<HTMLSelectElement>) => setH(+e.target.value)}>{HEIGHTS.map((v) => <option key={v}>{v}</option>)}</select>
                    <Icon n="chevD" />
                  </div>
                </div>
              </div>
              <div className="pdp-infobox"><Icon n="info" /> Custom sizes are also available. Contact our team for assistance.</div>
            </div>
          </div>
        </section>
      </div>

      {/* Lifestyle banner */}
      <section className="pdp-banner">
        <img src="/images/products/coral/banner.jpg" alt="" />
        <div className="pdp-banner-copy">
          <h2>Designs That<br />Define Homes</h2>
          <p>A perfect blend of aesthetics, strength and modern living.</p>
        </div>
      </section>

      {/* Details */}
      <div className="pdp-wrap">
        <section className="pdp-details">
          <div className="pdp-col">
            <h3><Icon n="clip" /> Product Specifications</h3>
            <table className="pdp-spec"><tbody>
              {SPECS.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
            </tbody></table>
          </div>
          <div className="pdp-col">
            <h3><Icon n="truck" /> Delivery &amp; Installation</h3>
            <ul className="pdp-deliv">
              {DELIVERY.map(([ic, t, d]) => (
                <li key={t}><Icon n={ic} /><div><b>{t}</b><span>{d}</span></div></li>
              ))}
            </ul>
          </div>
          <div className="pdp-col">
            <h3><Icon n="box" /> What’s Included</h3>
            <ul className="pdp-incl">
              {INCLUDED.map((t) => (
                <li key={t}><span className="tick"><Icon n="check" /></span>{t}</li>
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
                  {q} <Icon n="plus" />
                </button>
                {open === i && <p className="pdp-a">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep your existing <Footer /> below this component in the layout */}
    </main>
    <Footer />
    </>
  );
}
