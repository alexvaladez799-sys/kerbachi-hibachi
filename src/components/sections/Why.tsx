export default function Why() {
  return (
    <section id="why" className="why">
      <div className="why__bg" />
      <div className="why__overlay" />
      <div className="why__content container">
        <div className="why__head">
          <span className="idx">03</span>
          <h2 className="display-title">No shortcuts.<br /><em>No compromises.</em></h2>
        </div>
        <div className="why__pillars">
          <div className="why__pillar">
            <span className="why__dash">—</span>
            <h3>Cooked to Order</h3>
            <p>Every plate goes straight to the grill. No batches, no reheating.</p>
          </div>
          <div className="why__pillar">
            <span className="why__dash">—</span>
            <h3>Prime Ingredients</h3>
            <p>USDA prime cuts, fresh vegetables, house-made sauces. The difference is immediate.</p>
          </div>
          <div className="why__pillar">
            <span className="why__dash">—</span>
            <h3>Fast Pickup</h3>
            <p>Call ahead or walk in. Ready in minutes, packed hot.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
