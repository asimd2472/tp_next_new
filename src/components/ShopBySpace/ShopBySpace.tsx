import Image from "next/image";

const spaces = [
  {
    image: "/images/door1.jpg",
    alt: "Embossed Wood Finish Doors",
    label: "Embossed Wood Finish Doors",
  },
  {
    image: "/images/door2.jpg",
    alt: "Sliding windows in a contemporary living room",
    label: "Commercial Doors",
  },
  {
    image: "/images/wimdow.jpg",
    alt: "Garden doors opening to the outdoors",
    label: "Casement Window",
  },
  {
    image: "/images/door1.jpg",
    alt: "Contemporary home with designer windows",
    label: "Designer windows",
  },
];

export default function ShopBySpace() {
  return (
    <section className="shop-space" aria-labelledby="shop-space-title">
      <div className="shop-space__container">
        <header className="shop-space__heading">
          <h2 id="shop-space-title">Shop by space</h2>
          <p>Find the right door or window for every part of your home.</p>
        </header>

        <div className="shop-space__grid">
          {spaces.map((space) => (
            <article className="shop-space__item" key={space.label}>
              <div className="shop-space__image">
                <Image src={space.image} alt={space.alt} fill sizes="(max-width: 700px) 44vw, 22vw" />
              </div>
              <p>{space.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}