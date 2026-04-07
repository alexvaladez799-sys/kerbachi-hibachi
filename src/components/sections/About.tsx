import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="idx">Our Story</span>
          <h2 className="display-title" style={{ marginBottom: '2rem' }}>
            Born from <em>fire &amp; family.</em>
          </h2>
          <div className="about__body">
            <p>
              Kerbachi started as a family tradition &mdash; late nights, open flames,
              and recipes passed down through generations of Southeast Asian cooking.
              <strong> What began in a backyard became a mission:</strong> bring
              restaurant-quality hibachi to the Central Valley without the white tablecloth
              price tag.
            </p>
            <p>
              Every plate is cooked to order. Every sauce is made in-house. We source
              quality proteins and pair them with our signature fried rice, grilled
              vegetables, and handcrafted boba drinks.
            </p>
            <p>
              No shortcuts. No compromises. Just fire, flavor, and food that hits.
            </p>
          </div>
          <div className="about__tags">
            <span>Family Owned</span>
            <span>Fresh Daily</span>
            <span>Kerman, CA</span>
            <span>Cooked to Order</span>
          </div>
        </div>

        <div className="about__img">
          <div className="about__img-frame">
            <Image
              src="/images/why-bg.png"
              alt="Hibachi grill close-up"
              width={800}
              height={1000}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="about__img-accent">
            <span className="about__img-accent-text">Since Day One</span>
          </div>
        </div>
      </div>
    </section>
  );
}
