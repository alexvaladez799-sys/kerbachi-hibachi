import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <Image
          src="/images/hero-bg.png"
          alt="Hibachi grill in action"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero__overlay" />

      <div className="hero__content container">
        <div className="hero__meta-top">
          <span>Kerbachi Hibachi</span>
          <span className="hero__meta-sep">&mdash;</span>
          <span>Kerman, CA</span>
        </div>

        <h1 className="hero__h1">
          <span className="hero__h1-line">Hibachi,</span>
          <span className="hero__h1-line hero__h1-italic">Elevated.</span>
        </h1>

        <div className="hero__foot">
          <hr className="hero__rule" />
          <div className="hero__actions">
            <Link href="/menu" className="hero__link">View Full Menu</Link>
            <a href="tel:+15594086027" className="hero__btn">Call to Order</a>
          </div>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
