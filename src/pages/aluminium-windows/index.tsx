import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";

const rooms = [
	{
		image: "room-living.jpg",
		alt: "Living room with a black aluminium sliding window",
		caption: "The living room, open to green",
	},
	{
		image: "room-balcony.jpg",
		alt: "Sliding door to a balcony",
		caption: "Balcony mornings",
	},
	{
		image: "room-study.jpg",
		alt: "Aluminium glass partition in a study",
		caption: "A study with presence",
	},
];

const products = [
	{
		title: "Sliding Windows",
		image: "sliding-windows.jpg",
		alt: "Sliding window in a bedroom",
		description: "Wide shutters glide on a 2.5 track, with nylon mesh and locks fitted for everyday ease.",
		specifications: [
			["Frame", "40 mm × 98 mm"],
			["Glass", "6 mm to 26 mm"],
			["Largest size", "24 ft × 10 ft"],
			["Suited to", "Up to G+10, and above with reinforced interlock"],
		],
	},
	{
		title: "Slimline Sliding Windows",
		image: "slimline-windows.jpg",
		alt: "Slimline sliding window facing the sea",
		description: "The finest sightlines in the range, for those who want the frame to nearly disappear.",
		specifications: [
			["Frame", "40 mm × 67.5 mm"],
			["Glass", "5 mm to 8 mm"],
			["Largest size", "13 ft × 5 ft"],
			["Suited to", "Up to G+10"],
		],
	},
	{
		title: "Casement Windows",
		image: "casement-windows.jpg",
		alt: "Casement windows with louvres",
		description: "Outward-opening tophung and casement styles, with louvre and exhaust options and inside or outside mesh.",
		specifications: [
			["Frame", "50 mm × 110 mm"],
			["Glass", "5 mm to 8 mm"],
			["Largest size", "6 ft × 6 ft"],
		],
	},
	{
		title: "Fixed Glass with Openable Windows",
		image: "fixed-openable-windows.jpg",
		alt: "Fixed glass with a casement panel overlooking the city",
		description: "Large uninterrupted panes for the view, with a casement panel where you want fresh air.",
		specifications: [
			["Frame", "50 mm × 45 mm"],
			["Glass", "6 mm to 26 mm"],
			["Layouts", "2, 3, 4, 6 and 8 parts, with louvres and exhaust options"],
		],
	},
	{
		title: "Doors",
		image: "doors.jpg",
		alt: "Aluminium glass door",
		description: "Slender glazed doors in single or double casement styles, with a mortise lock.",
		specifications: [
			["Frame", "50 mm × 45 mm"],
			["Glass", "6 mm to 26 mm"],
			["Largest size", "4 ft × 10 ft"],
		],
	},
];

const benefits = [
	{ title: "Light and air", detail: "More daylight and natural airflow for brighter, healthier rooms." },
	{ title: "Unbroken views", detail: "Sleek frames and wide glass panels for a modern, elegant look." },
	{ title: "Weather protection", detail: "Built to withstand heavy rain, strong winds and harsh sun." },
	{ title: "Hush indoors", detail: "Advanced sealing reduces outside noise for a more peaceful home." },
	{ title: "Security", detail: "Robust aluminium profiles and precision fittings for reliable safety." },
	{ title: "Energy efficiency", detail: "Better thermal performance helps lower energy use and cost." },
];

const comparison = [
	["Panoramic design", false, false, true],
	["Sleek profile thickness", false, false, true],
	["Low maintenance", false, true, true],
	["Wide single panel width", false, false, true],
	["Withstands high cyclonic winds", false, false, true],
	["UV and colour fading resistance", false, false, true],
	["Termite and rodent resistance", false, false, true],
	["Recyclable", false, false, true],
	["No warpage or bends", false, false, true],
] as const;

const shades = [
	["RAL 7043", "#4a4e50"],
	["RAL 7015", "#4d5357"],
	["RAL 7024", "#454b53"],
	["RAL 9005", "#0c0c0c"],
	["ACP Grey", "#9a9892"],
	["RAL 9016", "#f0f0ea"],
	["RAL 9010", "#eeebe0"],
	["D1036", "#c5cbc9"],
];

export default function AluminiumWindowsPage() {
	const bannerRef = useRef<HTMLDivElement>(null);
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		const banner = bannerRef.current;
		if (!banner) return;

		let animationFrame = 0;
		const updateProgress = () => {
			cancelAnimationFrame(animationFrame);
			animationFrame = requestAnimationFrame(() => {
				const scrollDistance = banner.offsetHeight - window.innerHeight;
				const progress = window.matchMedia("(prefers-reduced-motion: reduce)").matches
					? 1
					: Math.min(1, Math.max(0, (-banner.getBoundingClientRect().top / scrollDistance) * 1.15));
				banner.style.setProperty("--p", String(progress));
			});
		};

		window.addEventListener("scroll", updateProgress, { passive: true });
		window.addEventListener("resize", updateProgress);
		updateProgress();

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener("scroll", updateProgress);
			window.removeEventListener("resize", updateProgress);
		};
	}, []);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<>
			<Head>
				<title>Tata Pravesh Aluminium Windows</title>
				<meta name="description" content="Slim black frames, wide panes of glass and the strength of Tata Steel's legacy. Aluminium windows made for homes that feel calm." />
			</Head>
			<Header />
			<main className="aluminium-windows">
				<section className="aluminium-windows__run" ref={bannerRef} aria-label="Aluminium windows">
					<div className="aluminium-windows__stage">
						<div className="aluminium-windows__frame">
							<Image
								src="/images/aluminium-windows/hero.jpg"
								alt="Sliding glass windows opening to the sea"
								fill
								priority
								sizes="100vw"
							/>
							<div className="aluminium-windows__pane aluminium-windows__pane--left" aria-hidden="true" />
							<div className="aluminium-windows__pane aluminium-windows__pane--right" aria-hidden="true" />
							<div className="aluminium-windows__title">
								<h1>Open to the view</h1>
								<p>Scroll to slide the window open</p>
							</div>
							<div className="aluminium-windows__after">
								<p>Slim frames. Wide glass. A calm that stays indoors.</p>
								<a className="aluminium-windows__button" href="#enquire">Enquire Now</a>
							</div>
						</div>
					</div>
				</section>

				<section className="aluminium-windows__section">
					<div className="aluminium-windows__container">
						<div className="aluminium-windows__lead">
							<h2>Quiet strength, framed in light</h2>
							<p>Aluminium is light yet strong, naturally rust-resistant and easy to maintain. Its refined finish lets the glass take centre stage, so every room feels wider, brighter and more at ease.</p>
						</div>
						<div className="aluminium-windows__rooms">
							{rooms.map((room) => (
								<figure key={room.caption}>
									<Image src={`/images/aluminium-windows/${room.image}`} alt={room.alt} fill sizes="(min-width: 861px) 50vw, 100vw" loading="lazy" />
									<figcaption>{room.caption}</figcaption>
								</figure>
							))}
						</div>
					</div>
				</section>

				<section className="aluminium-windows__section aluminium-windows__collection" id="collection">
					<div className="aluminium-windows__container">
						<div className="aluminium-windows__lead">
							<h2>The collection</h2>
							<p>Five systems, each made with a minimum of 1.5 mm aluminium and available with single or double glazing, toughened, clear float or frosted glass.</p>
						</div>
						{products.map((product) => (
							<article className="aluminium-windows__item" key={product.title}>
								<div className="aluminium-windows__product-image">
									<Image src={`/images/aluminium-windows/${product.image}`} alt={product.alt} fill sizes="(min-width: 861px) 50vw, 100vw" loading="lazy" />
								</div>
								<div>
									<h3>{product.title}</h3>
									<p>{product.description}</p>
									<dl>
										{product.specifications.map(([label, value]) => (
											<div key={label}>
												<dt>{label}</dt>
												<dd>{value}</dd>
											</div>
										))}
									</dl>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="aluminium-windows__section">
					<div className="aluminium-windows__container">
						<div className="aluminium-windows__lead">
							<h2>Made for how you live</h2>
						</div>
						<div className="aluminium-windows__tiles">
							{benefits.map((benefit) => (
								<div key={benefit.title}>
									<h3>{benefit.title}</h3>
									<p>{benefit.detail}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="aluminium-windows__peace">
					<div className="aluminium-windows__peace-copy">
						<h2>Peace of mind, installed</h2>
						<p className="aluminium-windows__quote">Every window is fitted by a SmartCare professional.</p>
						<p>SmartCare is Tata Pravesh&apos;s certified installation service: precise fitting, careful workmanship and a hassle-free experience, backed by a 1-year installation warranty.</p>
						<p className="aluminium-windows__peace-last">It comes from a name that has redefined doors and windows across India, and from Tata Steel, a company founded in 1907.</p>
						<a className="aluminium-windows__button" href="#enquire">Enquire Now</a>
					</div>
					<div className="aluminium-windows__peace-image">
						<Image src="/images/aluminium-windows/peace-of-mind.jpg" alt="Aluminium windows overlooking a forest" fill sizes="50vw" loading="lazy" />
					</div>
				</section>

				<section className="aluminium-windows__section aluminium-windows__compare">
					<div className="aluminium-windows__container">
						<h2>Why aluminium</h2>
						<div className="aluminium-windows__table-wrap">
							<table>
								<thead><tr><th scope="col"></th><th scope="col">Wood</th><th scope="col">UPVC</th><th scope="col">Tata Pravesh Aluminium</th></tr></thead>
								<tbody>
									{comparison.map(([feature, wood, upvc, aluminium]) => (
										<tr key={feature}>
											<td>{feature}</td>
											<td className={wood ? "aluminium-windows__yes" : "aluminium-windows__no"}>{wood ? "Yes" : "No"}</td>
											<td className={upvc ? "aluminium-windows__yes" : "aluminium-windows__no"}>{upvc ? "Yes" : "No"}</td>
											<td className={aluminium ? "aluminium-windows__yes" : "aluminium-windows__no"}>{aluminium ? "Yes" : "No"}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				<section className="aluminium-windows__section aluminium-windows__shades">
					<div className="aluminium-windows__container">
						<h2>Shades</h2>
						<p className="aluminium-windows__shade-intro">Eight finishes in deep charcoal, soft grey and warm white. Woodfinish shades are also possible.</p>
						<div className="aluminium-windows__swatches">
							{shades.map(([name, color]) => (
								<span key={name}><i style={{ background: color }} />{name}</span>
							))}
						</div>
					</div>
					<div className="aluminium-windows__panorama">
						<Image src="/images/aluminium-windows/panorama.jpg" alt="Large sliding glass walls beside a pool" fill sizes="100vw" loading="lazy" />
					</div>
				</section>

				<section className="aluminium-windows__section aluminium-windows__enquiry" id="enquire">
					<div className="aluminium-windows__container aluminium-windows__enquiry-grid">
						<div>
							<h2>Begin with a conversation</h2>
							<p>Tell us about your home and we will help you choose the right window and arrange a visit.</p>
							<div className="aluminium-windows__contact">
								<a href="tel:18004199200">Call 1-800-4199-200</a>
								<a href="https://wa.me/918688322698">WhatsApp 8688322698</a>
								<a href="https://www.tatapravesh.com">www.tatapravesh.com</a>
							</div>
						</div>
						<div>
							{!submitted ? (
								<form onSubmit={handleSubmit}>
									<label>Full name<input required name="n" autoComplete="name" /></label>
									<label>Phone number<input required name="p" type="tel" autoComplete="tel" /></label>
									<label>City<input required name="c" autoComplete="address-level2" /></label>
									<label>Interested in
										<select name="t">
											<option>Sliding Windows</option>
											<option>Slimline Sliding Windows</option>
											<option>Casement Windows</option>
											<option>Fixed Glass with Openable Windows</option>
											<option>Doors</option>
											<option>Not sure yet</option>
										</select>
									</label>
									<label>Message (optional)<textarea name="m" rows={2} /></label>
									<button className="aluminium-windows__button" type="submit">Enquire Now</button>
								</form>
							) : (
								<div className="aluminium-windows__success" role="status">Thank you. Our team will call you shortly.</div>
							)}
						</div>
					</div>
				</section>

				<p className="aluminium-windows__disclaimer">Tata Pravesh is a Tata Steel brand. Images are for illustrative purposes only. Please refer to the product display for actual items.</p>
			</main>
			<Footer />
		</>
	);
}
