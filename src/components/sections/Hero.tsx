import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__meta-top">
          <span>Kerman, California</span>
          <span className="hero__meta-sep">·</span>
          <span>Tue – Sun  11am – 9pm</span>
        </div>

        <h1 className="hero__h1">
          <span className="hero__h1-line">Hibachi,</span>
          <span className="hero__h1-line hero__h1-italic">Elevated.</span>
        </h1>

        <div className="hero__foot">
          <hr className="hero__rule" />
          <div className="hero__actions">
            <a href="#featured" className="hero__link">Explore the Menu</a>
            <a href="#order" className="hero__btn">Order Now</a>
          </div>
        </div>
      </div>

      <a href="#featured" className="hero__scroll-cue" aria-label="Scroll down">
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
