import Link from 'next/link';

export default function OrderCTA() {
  return (
    <section id="order" className="order-cta">
      <div className="order-cta__content container">
        <p className="order-cta__label">Ready?</p>
        <h2 className="order-cta__headline">Order your plate<br /><em>today.</em></h2>
        <p className="order-cta__sub">Hot off the grill. Ready for pickup. Kerman&apos;s best hibachi.</p>
        <div className="order-cta__actions">
          <a href="tel:+15594086027" className="order-cta__phone">(559) 408-6027</a>
          <Link href="/menu" className="link-arrow">Browse Menu <span>→</span></Link>
        </div>
      </div>
    </section>
  );
}
