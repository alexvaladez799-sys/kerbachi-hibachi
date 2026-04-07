export default function OrderCTA() {
  return (
    <section className="order-cta" id="order">
      <div className="container">
        <p className="order-cta__label">Ready to eat?</p>
        <h2 className="order-cta__headline">
          Order now.<br /><em>Taste the difference.</em>
        </h2>
        <p className="order-cta__sub">
          Call us to place your order. Fresh hibachi, made for you.
        </p>
        <div className="order-cta__actions">
          <a href="tel:+15594086027" className="order-cta__phone">(559) 408-6027</a>
          <a href="tel:+15594086027" className="hero__btn">Call to Order</a>
        </div>
      </div>
    </section>
  );
}
