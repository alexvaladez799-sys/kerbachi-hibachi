import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="idx">02</span>
          <h2 className="display-title">Where roots<br /><em>meet flavor.</em></h2>
          <div className="about__body">
            <p>Kerbachi is where our roots and flavors come together. Our name blends <strong>Kerman</strong> — the town we proudly serve — with <strong>hibachi</strong>, a cooking style known for bold flavor and fresh preparation.</p>
            <p>We specialize in hibachi-style dishes like fried rice, grilled chicken, steak, and shrimp. Alongside that, we bring Southeast Asian influences with handmade eggrolls, pork buns, sticky rice, crispy pork belly, and our signature herbaceous Hmong sausage.</p>
            <p>Every dish reflects a mix of cultures, family traditions, and a commitment to quality.</p>
          </div>
          <div className="about__tags">
            <span>Hibachi</span>
            <span>SE Asian Fusion</span>
            <span>Kerman, CA</span>
            <span>Family-Made</span>
          </div>
          <Link href="/menu" className="link-arrow link-arrow--lg" style={{ marginTop: '2.5rem', display: 'inline-flex' }}>
            Explore the Full Menu <span>→</span>
          </Link>
        </div>
        <div className="about__img">
          <div className="about__img-frame">
            <Image
              src="/images/hero-bg.png"
              alt="Kerbachi Hibachi kitchen"
              width={800}
              height={1000}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="about__img-accent">
            <span className="about__img-accent-text">Est. Kerman, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
