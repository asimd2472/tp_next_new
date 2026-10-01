import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaCloud, FaDoorOpen, FaFire, FaLock } from "react-icons/fa6";

const fireDoorBenefits = [
	{
		icon: FaFire,
		title: "Slows the spread of fire",
		description: "It reduces the propagation of fire and heat, and keeps flames on one side.",
	},
	{
		icon: FaCloud,
		title: "Contains smoke",
		description: "Holds the escape, clears circulation and allows fire-fighting to work.",
	},
	{
		icon: FaDoorOpen,
		title: "Gives a clear way out",
		description: "Provides a safe route for people to evacuate quickly and safely.",
	},
	{
		icon: FaLock,
		title: "Works as an everyday door",
		description: "Adds daily security and is used as a normal door.",
	},
];

const environmentFeatures = [
	"Galvanised or stainless steel",
	"Honeycomb, rockwool or mineral wool core",
	"120 minute rating for stability and integrity (BS476)",
	"UL, welded doors for 90 minutes",
	"Vision panel rated up to 120 minutes",
	"Non-fragile finishes to sharp edges",
	"Factory prepared for mortise hardware",
	"Fully flush construction",
	"Fire flush wall openings and dry wall partitions",
	"Wide range of colours, wood grain finish options",
	"Tested up to 650°C",
	"Installed by trained, skilled installation teams",
];

const specifications = [
	["Door leaf", "1.2 mm (18 SWG) or 0.8 mm (22 SWG) light gauge galvanised steel sheet. 15 / 27 mm thick, 44 mm overall."],
	["Infill", "Rockwool, mineral wool or honeycomb (fire-retardant)."],
	["Door frame", "1.6 mm (16 SWG) or 1.2 mm (18 SWG) galvanised steel sheet, IS 277. Single or double rebate. Profile: 143 mm x 56 mm."],
	["Vision glass", "5 mm clear or wired glass, secured by rubber gasket. 200 mm (300 mm) square, high-integrity rated glass available."],
	["Finish", "Zinc-rich base coating primer. Epoxy polyester or polyurethane powder coat, 60–95 microns."],
	["Hinges", "Stainless steel ball bearing butt hinges, 102 mm x 76 mm x 3 mm (thk). 3 no’s per door, depending on height."],
	["Lock", "Mortise sash lock, dead bolt, latch or panic device. Concealed fixings, surface or concealed door."],
	["Maximum size", "Single leaf: 2.15 m (high) x 1.22 m (wide). Double leaf: 2.30 m (high) x 2.44 m (wide)."],
	["Tested", "BS 476 Part 22 & 24 (2000), certified by Building Research Institute."],
];

const hardware = [
	{ title: "Hinges, panic bars, D-handles", brands: "Geze, Häfele, Dorma, Kich" },
	{ title: "Door closers", brands: "Dorgar, Geze, Hettich, Dorma, Assa Abloy, Kich" },
	{ title: "Main door locks and dead locks", brands: "Geze, Häfele, Dorma, Korma, Kich" },
];

const questions = [
	"What is the role of the door made of?",
	"Can the door be used with access control?",
	"Why are the frames double rebate?",
];

export default function FireDoorPage() {
	return (
		<>
			<Head>
				<title>Fire Rated Doors | Tata Pravesh</title>
				<meta name="description" content="Explore Tata Pravesh fire-rated doors, technical specifications, hardware and fire-resistance features." />
			</Head>
            <Header />
			<main className="fire-door">
				<section className="fire-door__hero" aria-labelledby="fire-door-title">
					<div className="fire-door__container">
						<nav className="fire-door__breadcrumb" aria-label="Breadcrumb">
							<Link href="/">Home</Link><span>/</span><span>Products</span><span>/</span><span>Fire-Rated Doors</span>
						</nav>
						<div className="fire-door__hero-grid">
							<div className="fire-door__hero-copy">
								<h1 id="fire-door-title">Fire rated doors<br />that hold the line<br />for 2 hours</h1>
								<p>Stark Fire doors and shutters from Tata Steel. Factory-engineered, tested to BS 476 Part 22 &amp; 24 (2000), and ready for your safety. Because real access can’t wait.</p>
								<div className="fire-door__hero-actions">
									<Link href="#project-enquiry" className="fire-door__button fire-door__button--light">Enquire Now</Link>
									<Link href="#fire-door-specifications" className="fire-door__button fire-door__button--outline">Download Brochure (PDF)</Link>
								</div>
								<div className="fire-door__metrics" aria-label="Fire door performance">
									<div><strong>120 min</strong><span>Fire resistance</span></div>
									<div><strong>46 min</strong><span>(thermal insulation)</span></div>
									<div><strong>BS 476</strong><span>Part 22 &amp; 24 (2000)</span></div>
									<div><strong>1 year</strong><span>Limited warranty</span></div>
								</div>
							</div>
							<div className="fire-door__hero-image">
								<Image src="/images/door2.jpg" alt="Tata Pravesh red fire-rated steel door" fill priority sizes="(max-width: 700px) 90vw, 42vw" />
							</div>
						</div>
					</div>
				</section>

				<section className="fire-door__section fire-door__benefits" aria-labelledby="fire-door-benefits-title">
					<div className="fire-door__container">
						<h2 id="fire-door-benefits-title">Four jobs a fire door does when it matters</h2>
						<p className="fire-door__section-intro">Sometimes, it’s a straightforward job to shut. A fire door controls the fire and smoke, so people get time to leave and fire-fighting can proceed.</p>
						<div className="fire-door__benefit-grid">
							{fireDoorBenefits.map(({ icon: Icon, title, description }) => (
								<article className="fire-door__benefit" key={title}>
									<Icon aria-hidden="true" />
									<h3>{title}</h3>
									<p>{description}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="fire-door__buildings" aria-labelledby="fire-door-buildings-title">
					<div className="fire-door__container">
						<h2 id="fire-door-buildings-title">Why India’s buildings need them</h2>
						<p>From residential (apartments, hotels, PGs) to commercial (offices, hospitals, schools)<br className="fire-door__desktop-break" /> and industrial (factories, warehouses), fire safety is a must.</p>
					</div>
				</section>

				<section className="fire-door__section fire-door__choose" aria-labelledby="fire-door-choose-title">
					<div className="fire-door__container">
						<h2 id="fire-door-choose-title">Choose your door</h2>
						<div className="fire-door__door-grid">
							<article className="fire-door__door-card">
								<h3>Fire rated doors</h3>
								<p>For staircases, corridors, plant rooms and exits. Single or double leaf, with options of vision panel and panic bar.</p>
								<div className="fire-door__tags"><span className="fire-door__tag--highlight">Up to 120 min</span><span>Single leaf</span><span>Double leaf</span><span>Vision panel</span></div>
							</article>
							<article className="fire-door__door-card">
								<h3>Shaft / duct access doors</h3>
								<p>Smaller doors for electrical ducts and fire equipment. Available fire rated or non fire rated.</p>
								<div className="fire-door__tags"><span>Fire rated</span><span>Non fire rated</span><span>Single or double panel</span></div>
							</article>
						</div>
						<p className="fire-door__used"><strong>Used in:</strong> high-rise buildings, metro stations, hospitals, hotels, malls, multiplexes, power plants, telecom centres, industrial plants, schools, software parks and restaurants.</p>
					</div>
				</section>

				<section className="fire-door__environment fire-door__environment--panel" aria-labelledby="fire-door-environment-panel-title">
					<div className="fire-door__container">
						<h2 id="fire-door-environment-panel-title">Built for demanding environments</h2>
						<ul>{environmentFeatures.map((feature) => <li key={feature}><FaCheck aria-hidden="true" />{feature}</li>)}</ul>
					</div>
				</section>

				<section className="fire-door__environment fire-door__environment--plain" aria-labelledby="fire-door-environment-title">
					<div className="fire-door__container">
						<h2 id="fire-door-environment-title">Built for demanding environments</h2>
						<ul>{environmentFeatures.map((feature) => <li key={feature}><FaCheck aria-hidden="true" />{feature}</li>)}</ul>
					</div>
				</section>

				<section className="fire-door__section fire-door__specifications" id="fire-door-specifications" aria-labelledby="fire-door-specifications-title">
					<div className="fire-door__container">
						<h2 id="fire-door-specifications-title">Technical specifications</h2>
						<p>Fire rated doors &amp; door rating.</p>
						<div className="fire-door__table-wrap">
							<table>
								<tbody>
									{specifications.map(([label, value]) => (
										<tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				<section className="fire-door__hardware" aria-labelledby="fire-door-hardware-title">
					<div className="fire-door__container">
						<h2 id="fire-door-hardware-title">Hardware from trusted makers</h2>
						<p>Every set includes fire rated hardware tested with the door.</p>
						<div className="fire-door__hardware-grid">
							{hardware.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.brands}</p></article>)}
						</div>
						<p className="fire-door__checklist"><strong>Checklist before you buy:</strong> Fire rated frame, hinges, closer, lock, handle and vision panel, plus manufacturer data and sample test results. Buy the frame with the shutter to both meet fire, smoke and acoustic standards.</p>
					</div>
				</section>

				<section className="fire-door__faq" aria-labelledby="fire-door-faq-title">
					<div className="fire-door__container">
						<h2 id="fire-door-faq-title">Frequently asked questions</h2>
						<div className="fire-door__questions">
							{questions.map((question) => (
								<details key={question}>
									<summary><span>{question}</span><span aria-hidden="true">›</span></summary>
								</details>
							))}
						</div>
					</div>
				</section>

				<section className="fire-door__cta" id="project-enquiry" aria-labelledby="fire-door-cta-title">
					<div className="fire-door__container">
						<h2 id="fire-door-cta-title">Need fire doors for your project?</h2>
						<p>Tell us the door type, size and quantity. Our team will get back to you with a quote.</p>
						<Link href="mailto:enquiry@tatapravesh.com?subject=Fire%20door%20project%20enquiry" className="fire-door__button fire-door__button--light">Enquire Now</Link>
					</div>
				</section>
			</main>
            <Footer />
		</>
	);
}
