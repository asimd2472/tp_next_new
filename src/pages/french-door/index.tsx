import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaArrowRight, FaCheck, FaDoorOpen, FaLeaf, FaShieldAlt } from "react-icons/fa";

const grillDesigns = [
	{ code: "SEHB001", path: "M0 20H60M0 40H60M0 60H60M0 80H60M0 100H60M0 120H60M0 140H60M0 160H60M0 180H60" },
	{ code: "SEH3V002", path: "M15 0V200M30 0V200M45 0V200M0 60H60M0 130H60M0 170H60" },
	{ code: "SEVHSQ03", path: "M20 0V80M40 0V80M0 80H60M0 120H60M20 120V200M40 120V200" },
	{ code: "SEV6H004", path: "M20 0V200M40 0V200M0 25H60M0 55H60M0 95H60M0 135H60M0 170H60M0 185H60" },
];

const specifications = [
	["Width", "1829 mm to 2438 mm, in steps of 30 mm"],
	["Height", "1829 mm to 2438 mm, in steps of 30 mm"],
	["Delivery", "45 to 60 days"],
	["Weight", "150 kg at 2438 x 2438 mm"],
];

const buildDetails = [
	"Frame: galvanized steel, 1 mm sheet",
	"Bottom section: 1 mm SS 304",
	"Shutters: galvanized steel 0.8 mm, 610 mm (2 ft) wide",
	"Grill: 10 mm MS bright round bar, 20 x 5 mm flat steel on all sides",
	"Glass: 5 mm clear float or 6 mm toughened, aluminium glass holder",
	"SS hinges and gas springs for smooth opening",
	"Collapsible mosquito net with noise-reducing gaskets",
	"3-way mortise lock and concealed tower bolts",
];

const applications = [
	{ title: "Room partition", image: "/images/french-door/room-partition.svg" },
	{ title: "Garage", image: "/images/french-door/garage.svg" },
	{ title: "Lawn opening", image: "/images/french-door/lawn-opening.svg" },
	{ title: "Patio / balcony", image: "/images/french-door/patio-balcony.svg" },
];

const selectorDesigns = ["Lumiére Pro", "Lumiére Classic", "Lumiére Classic Plus", "Lumiére Basic"];
const selectorShades = [
	{ name: "Forest Brown", color: "#4a2f27" },
	{ name: "Snowflake White", color: "#f3f2ea" },
];
const selectorSizes = ["2134X2134", "2134X2285", "2134X2440", "2440X2134", "2440X2285", "2440X2440"];

function FrenchDoorSelector() {
	const [designIndex, setDesignIndex] = useState(0);
	const [shadeIndex, setShadeIndex] = useState(0);
	const [sizeIndex, setSizeIndex] = useState(0);
	const shade = selectorShades[shadeIndex];
	const [width, height] = selectorSizes[sizeIndex].split("X").map(Number);
	const previewHeight = 300;
	const previewWidth = Math.round(previewHeight * width / height);
	const frameWidth = Math.max(150, Math.min(260, previewWidth));
	const frameLeft = (300 - frameWidth) / 2;
	const paneStroke = shade.color === "#f3f2ea" ? "#000" : "#fff";
	const feet = (millimetres: number) => `${(millimetres / 304.8).toFixed(1).replace(/\.0$/, "")} ft`;
	const selection = `French Door · ${selectorDesigns[designIndex]} · ${shade.name} · ${width} × ${height} mm`;

	const fillEnquiry = () => {
		const form = document.getElementById("french-door-enquiry-form");
		if (!form) return;

		const widthInput = form.querySelector<HTMLInputElement>('input[name="width"]');
		const heightInput = form.querySelector<HTMLInputElement>('input[name="height"]');
		const messageInput = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

		if (widthInput) {
			widthInput.value = String(width);
			widthInput.dispatchEvent(new Event("input", { bubbles: true }));
			widthInput.dispatchEvent(new Event("change", { bubbles: true }));
		}
		if (heightInput) {
			heightInput.value = String(height);
			heightInput.dispatchEvent(new Event("input", { bubbles: true }));
			heightInput.dispatchEvent(new Event("change", { bubbles: true }));
		}
		if (messageInput) {
			messageInput.value = `Selected: ${selection}`;
			messageInput.dispatchEvent(new Event("input", { bubbles: true }));
			messageInput.dispatchEvent(new Event("change", { bubbles: true }));
		}

		form.scrollIntoView({ behavior: "smooth" });
	};

	const bookDemo = () => {
		const demoSection = document.getElementById("book-a-demo");
		(demoSection ?? document.getElementById("french-door-enquiry"))?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="french-door__section french-door__selector" id="pv-select" aria-labelledby="french-door-selector-title">
			<div className="french-door__container">
				<div className="french-door__section-heading">
					<p className="french-door__eyebrow">CHOOSE YOUR CONFIGURATION</p>
					<h2 id="french-door-selector-title">Select your Lumiére.</h2>
					<p className="french-door__section-intro">Pick a design, shade and size. Prices depend on your location, so book a demo or enquire for an exact quote.</p>
				</div>
				<div className="french-door__selector-grid">
					<div className="french-door__selector-preview">
						<svg viewBox={`0 0 300 ${previewHeight + 10}`} role="img" aria-label={`Preview of ${selectorDesigns[designIndex]} French door in ${shade.name}, ${width} by ${height} mm`}>
							<rect x={frameLeft} y="8" width={frameWidth} height={previewHeight - 2} fill={shade.color} />
							{[0, 1].map((paneIndex) => {
								const paneLeft = frameLeft + 8 + paneIndex * (frameWidth - 16) / 2;
								const paneWidth = (frameWidth - 16) / 2;
								return (
									<g key={paneIndex}>
										<rect x={paneLeft} y="18" width={paneWidth} height={previewHeight - 28} fill="none" stroke={paneStroke} strokeOpacity=".4" strokeWidth="2" />
										{[0, 1, 2].map((row) => (
											<rect
												key={row}
												x={paneLeft + 8}
												y={28 + row * ((previewHeight - 48) / 3)}
												width={paneWidth - 16}
												height={(previewHeight - 48) / 3 - 8}
												fill="#cfe6f0"
												opacity=".85"
												stroke="#555"
											/>
										))}
										<rect x={paneIndex ? paneLeft + 4 : paneLeft + paneWidth - 10} y={previewHeight / 2} width="6" height="26" rx="3" fill="#ccc" />
									</g>
								);
							})}
						</svg>
						<p>{selectorDesigns[designIndex]} in {shade.name}</p>
					</div>
					<div className="french-door__selector-controls">
						<h3><i>1</i>Select Design</h3>
						<div className="french-door__selector-options" role="group" aria-label="Design">
							{selectorDesigns.map((design, index) => (
								<button className="french-door__selector-chip" type="button" key={design} aria-pressed={designIndex === index} onClick={() => setDesignIndex(index)}>{design}</button>
							))}
						</div>

						<h3><i>2</i>Choose Shade</h3>
						<div className="french-door__selector-options" role="group" aria-label="Shade">
							{selectorShades.map((option, index) => (
								<button className="french-door__selector-swatch" type="button" key={option.name} aria-pressed={shadeIndex === index} onClick={() => setShadeIndex(index)}>
									<b style={{ background: option.color }} aria-hidden="true" />{option.name}
								</button>
							))}
						</div>

						<h3><i>3</i>Select Size (W × H mm)</h3>
						<div className="french-door__selector-options" role="group" aria-label="Size">
							{selectorSizes.map((size, index) => (
								<button className="french-door__selector-chip" type="button" key={size} aria-pressed={sizeIndex === index} onClick={() => setSizeIndex(index)}>{size.replace("X", " × ")}</button>
							))}
						</div>

						<div className="french-door__selector-summary" aria-live="polite">
							<strong>Your selection</strong><br />{selection}<br />
							<small>Approx. {feet(width)} × {feet(height)}</small>
						</div>
						<div className="french-door__selector-actions">
							<button className="french-door__selector-action" type="button" onClick={bookDemo}>Book a Demo <span aria-hidden="true">→</span></button>
							<button className="french-door__selector-action french-door__selector-action--outline" type="button" onClick={fillEnquiry}>Enquire Now</button>
						</div>
						<p className="french-door__selector-note">Swatches and previews are indicative. Final colour may vary on screen.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function FrenchDoorPage() {
	const [formMessage, setFormMessage] = useState("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const enquiry = Array.from(formData.entries())
			.filter(([key, value]) => key !== "website" && value)
			.map(([key, value]) => `${key}: ${value}`)
			.join("\n");
		const mailto = `mailto:enquiry@tatapravesh.com?subject=${encodeURIComponent("Lumiére French door enquiry")}&body=${encodeURIComponent(enquiry)}`;
		window.location.href = mailto;
		setFormMessage("Your email app should open with your enquiry. Please send the email to complete your request.");
	};

	return (
		<>
			<Head>
				<title>French Door Lumiére | Tata Pravesh</title>
				<meta name="description" content="Discover Tata Pravesh Lumiére French doors: fully foldable, made to size, and installed by our team." />
			</Head>
			<Header />
			<main className="french-door">
				<section className="french-door__hero" id="french-door" aria-labelledby="french-door-title">
					<div className="french-door__container">
						<nav className="french-door__breadcrumb" aria-label="Breadcrumb">
							<Link href="/">Home</Link><span>/</span><span>Products</span><span>/</span><span>French Door Lumiére</span>
						</nav>
						<div className="french-door__hero-grid">
							<div className="french-door__hero-copy">
								<p className="french-door__eyebrow">TATA PRAVESH · FRENCH DOOR</p>
								<h1 id="french-door-title">Lumiére</h1>
								<p className="french-door__hero-subtitle">Bring the outdoors inside, the French way.</p>
								<p className="french-door__hero-description">A French door in galvanized steel that folds fully open, bringing in light and air. The beauty of a window, with the function of a door, installed by Tata Pravesh.</p>
								<div className="french-door__hero-actions">
									<Link href="#french-door-enquiry" className="french-door__button french-door__button--primary">Request a quote <FaArrowRight aria-hidden="true" /></Link>
									<Link href="#french-door-models" className="french-door__button french-door__button--outline">Explore models</Link>
								</div>
								<div className="french-door__hero-metric"><strong>97<span>%</span></strong><span>clear opening when folded back</span></div>
							</div>
							<figure className="french-door__hero-image">
								<Image src="/images/french-door/hero.svg" alt="Lumiére French door in a bright living room" width={1400} height={913} priority />
								<figcaption>Fully foldable. Open up your view.</figcaption>
							</figure>
						</div>
					</div>
				</section>

				<section className="french-door__section french-door__overview" aria-labelledby="french-door-overview-title">
					<div className="french-door__container french-door__overview-grid">
						<div className="french-door__overview-image">
							<Image src="/images/french-door/exterior-dusk.svg" alt="Illustration of a Lumiére French door lit warmly at dusk" width={900} height={675} loading="lazy" />
							<div className="french-door__image-note"><FaDoorOpen aria-hidden="true" /><span>Room to open up</span></div>
						</div>
						<div className="french-door__overview-copy">
							<p className="french-door__eyebrow">A MORE OPEN WAY TO LIVE</p>
							<h2 id="french-door-overview-title">Proportion, symmetry and light.</h2>
							<p className="french-door__section-intro">Lumiére brings the symmetry of a classic French door to living rooms, lawns, balconies and garages. Indoors, it works as a stylish separator between spaces.</p>
							<div className="french-door__pillars">
								<div><FaCheck aria-hidden="true" /><p><strong>One-stop, installed</strong><span>Selection to installation handled by Tata Pravesh, with no separate fitter to find.</span></p></div>
								<div><FaShieldAlt aria-hidden="true" /><p><strong>Easy maintenance</strong><span>Galvanized steel with a stainless steel bottom section.</span></p></div>
								<div><FaLeaf aria-hidden="true" /><p><strong>Made to suit your home</strong><span>Wood finishes and RAL shades, with a choice of grill designs.</span></p></div>
							</div>
						</div>
					</div>
				</section>

				<FrenchDoorSelector />

				<section className="french-door__section french-door__models" id="french-door-models" aria-labelledby="french-door-models-title">
					<div className="french-door__container">
						<div className="french-door__section-heading">
							<p className="french-door__eyebrow">FIND YOUR FIT</p>
							<h2 id="french-door-models-title">Two ways to open a room.</h2>
							<p className="french-door__section-intro">Choose the Premium for unbroken views, or the Executive for ventilation with built-in mesh and grill.</p>
						</div>
						<div className="french-door__model-grid">
							<article className="french-door__model-card">
								<Image src="/images/french-door/model-premium.jpg" alt="Premium model with fixed toughened glass" width={900} height={600} loading="lazy" />
								<div className="french-door__model-content">
									<p className="french-door__eyebrow">WOOD FINISH OR RAL SHADES</p>
									<h3>Premium</h3>
									<p>Fixed toughened glass for a clean, uninterrupted view.</p>
									<dl><div><dt>Base offering</dt><dd>Fixed 6 mm toughened glass</dd></div><div><dt>Optional, chargeable</dt><dd>Grill, single sliding mesh, sun ban / tinted glass</dd></div></dl>
								</div>
							</article>
							<article className="french-door__model-card">
								<Image src="/images/french-door/model-executive.jpg" alt="Executive model with collapsible mesh and grill" width={900} height={600} loading="lazy" />
								<div className="french-door__model-content">
									<p className="french-door__eyebrow">RAL SHADES</p>
									<h3>Executive</h3>
									<p>Openable glass leaves with collapsible mesh and grill included.</p>
									<dl><div><dt>Base offering</dt><dd>Openable 5 mm clear float glass, collapsible mesh and grill</dd></div><div><dt>Optional, chargeable</dt><dd>6 mm toughened glass, sun ban / tinted glass</dd></div></dl>
								</div>
							</article>
						</div>
					</div>
				</section>

				<section className="french-door__section french-door__mesh" aria-labelledby="french-door-mesh-title">
					<div className="french-door__container">
						<div className="french-door__section-heading">
							<p className="french-door__eyebrow">EXECUTIVE MODEL</p>
							<h2 id="french-door-mesh-title">Mesh that moves with you.</h2>
							<p className="french-door__section-intro">A sideways collapsible mosquito mesh, with each glass leaf opening on its own.</p>
						</div>
						<div className="french-door__mesh-grid">
							{[
								{ title: "Opened", detail: "Mesh folded to the sides", image: "/images/french-door/mesh-open.jpg" },
								{ title: "Partially closed", detail: "Mesh drawn toward the centre", image: "/images/french-door/mesh-partial.jpg" },
								{ title: "Fully closed", detail: "Every leaf screened", image: "/images/french-door/mesh-closed.jpg" },
							].map((step) => (
								<figure className="french-door__mesh-step" key={step.title}>
									<Image src={step.image} alt={step.detail} width={900} height={675} loading="lazy" />
									<figcaption><strong>{step.title}</strong><span>{step.detail}</span></figcaption>
								</figure>
							))}
						</div>
					</div>
				</section>

				<section className="french-door__section french-door__grills" aria-labelledby="french-door-grills-title">
					<div className="french-door__container">
						<div className="french-door__section-heading">
							<p className="french-door__eyebrow">MAKE IT YOURS</p>
							<h2 id="french-door-grills-title">Grill designs.</h2>
							<p className="french-door__section-intro">Four patterns in 10 mm MS bright round bar. Quote the code when you enquire.</p>
						</div>
						<div className="french-door__grill-grid">
							{grillDesigns.map(({ code, path }) => (
								<div className="french-door__grill" key={code}>
									<svg viewBox="-2 -2 64 204" role="img" aria-label={`Grill pattern ${code}`}>
										<rect x="0" y="0" width="60" height="200" fill="none" stroke="currentColor" strokeWidth="1.5" />
										<path d={path} fill="none" stroke="currentColor" strokeWidth="1.5" />
									</svg>
									<strong>{code}</strong>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="french-door__section french-door__specifications" id="french-door-specifications" aria-labelledby="french-door-specifications-title">
					<div className="french-door__container french-door__spec-grid">
						<div>
							<p className="french-door__eyebrow">THE DETAILS</p>
							<h2 id="french-door-specifications-title">Technical specifications.</h2>
							<table>
								<tbody>
									{specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}
									<tr><th scope="row">Build</th><td><ul>{buildDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul></td></tr>
								</tbody>
							</table>
							<p className="french-door__terms">* Terms and conditions apply.</p>
						</div>
						<div className="french-door__finishes">
							<div>
								<h3>Wood finish <span>Premium only</span></h3>
								<div className="french-door__swatches">
									<figure><i style={{ backgroundColor: "#8a3b1e" }} />Lava Teak<small>B0201</small></figure>
									<figure><i style={{ backgroundColor: "#b5532a" }} />Sun Teak<small>B0401</small></figure>
									<figure><i style={{ backgroundColor: "#6e2418" }} />Trunk Mahogany<small>R0201</small></figure>
									<figure><i style={{ backgroundColor: "#7d2b20" }} />Nest Mahogany<small>R0401</small></figure>
								</div>
							</div>
							<div>
								<h3>RAL <span>Premium and Executive</span></h3>
								<div className="french-door__swatches">
									<figure><i style={{ backgroundColor: "#45322e" }} />Forest Brown<small>RAL8017</small></figure>
									<figure><i style={{ backgroundColor: "#781f19" }} />Volcano Red<small>RAL3011</small></figure>
									<figure><i style={{ backgroundColor: "#f1ede0" }} />Snowflake White<small>RAL9010</small></figure>
								</div>
							</div>
							<p className="french-door__terms">Swatches are indicative. Final colour may vary on screen.</p>
						</div>
					</div>
				</section>

				<section className="french-door__section french-door__weather" aria-labelledby="french-door-weather-title">
					<div className="french-door__container">
						<div className="french-door__section-heading">
							<p className="french-door__eyebrow">MADE FOR EVERYDAY LIVING</p>
							<h2 id="french-door-weather-title">Built for real weather, real homes.</h2>
						</div>
						<div className="french-door__benefits">
							<article><Image src="/images/french-door/wind.svg" alt="Lumiére door standing against strong winds" width={700} height={500} loading="lazy" /><div><strong>Wind</strong><p>Shield your home from strong winds.</p></div></article>
							<article><Image src="/images/french-door/rain.svg" alt="Rain on the glass of a red Lumiére door" width={700} height={500} loading="lazy" /><div><strong>Rain</strong><p>Leak-proof your space and enjoy the rain.</p></div></article>
							<article><Image src="/images/french-door/sound.svg" alt="Person sleeping peacefully behind a Lumiére door" width={700} height={500} loading="lazy" /><div><strong>45 dB</strong><p>Sound insulation up to 45 dB, so you stay beyond the chaos.</p></div></article>
						</div>
						<div className="french-door__applications">
							{applications.map(({ title, image }) => (
								<figure key={title}><Image src={image} alt={title} width={900} height={600} loading="lazy" /><figcaption>{title}</figcaption></figure>
							))}
						</div>
					</div>
				</section>

				<section className="french-door__section french-door__enquiry" id="french-door-enquiry" aria-labelledby="french-door-enquiry-title">
					<div className="french-door__container french-door__enquiry-grid">
						<div className="french-door__enquiry-copy">
							<p className="french-door__eyebrow">LET’S GET STARTED</p>
							<h2 id="french-door-enquiry-title">Enquire about Lumiére.</h2>
							<p className="french-door__section-intro">Tell us where the door will go and its approximate size. Our team will help you find the right fit.</p>
							<ul><li><FaCheck aria-hidden="true" />Supply and installation included</li><li><FaCheck aria-hidden="true" />Delivery in 45 to 60 days</li><li><FaCheck aria-hidden="true" />Made to size, 1829 to 2438 mm</li></ul>
						</div>
						<form className="french-door__form" id="french-door-enquiry-form" onSubmit={handleSubmit}>
							<label>Full name<input name="name" autoComplete="name" required /></label>
							<label>Phone<input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[+0-9][0-9\s-]{8,14}" required /></label>
							<label>Email<input name="email" type="email" autoComplete="email" required /></label>
							<label>City and pincode<input name="city" autoComplete="address-level2" /></label>
							<label>Model<select name="model"><option>Premium</option><option>Executive</option><option>Not sure yet</option></select></label>
							<label>Where will it be used?<select name="use"><option>Lawn opening</option><option>Patio / balcony</option><option>Room partition</option><option>Garage</option></select></label>
							<label>Width (mm)<input name="width" type="number" min="1829" max="2438" placeholder="1829 to 2438" /></label>
							<label>Height (mm)<input name="height" type="number" min="1829" max="2438" placeholder="1829 to 2438" /></label>
							<label className="french-door__form-full">Message (optional)<textarea name="message" placeholder="Grill code, finish, tinted glass..." rows={3} /></label>
							<button className="french-door__button french-door__button--primary french-door__form-full" type="submit">Prepare my enquiry <FaArrowRight aria-hidden="true" /></button>
							{formMessage && <p className="french-door__form-message french-door__form-full" role="status">{formMessage}</p>}
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}