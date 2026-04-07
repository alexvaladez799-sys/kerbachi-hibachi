import Image from 'next/image';
import Link from 'next/link';

export default function Dishes() {
  return (
    <section id="featured" className="dishes">

      <div className="dishes__header container">
        <span className="idx">01</span>
        <h2 className="display-title">Customer Favorites</h2>
      </div>

      <div className="dish-row">
        <div className="dish-row__img">
          <Image src="/images/steak-plate.png" alt="Hibachi Steak" width={960} height={720} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="dish-row__body">
          <span className="dish-row__num">01</span>
          <h3 className="dish-row__name">Hibachi Steak</h3>
          <p className="dish-row__desc">Prime beef, teppanyaki-seared over open flame. Sesame fried rice, grilled vegetables, ginger salad.</p>
          <div className="dish-row__foot">
            <span className="dish-price">$18</span>
            <a href="#order" className="link-arrow">Order This <span>→</span></a>
          </div>
        </div>
      </div>

      <div className="dish-row dish-row--flip">
        <div className="dish-row__img">
          <Image src="/images/shrimp-plate.png" alt="Volcano Shrimp" width={960} height={720} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="dish-row__body">
          <span className="dish-row__num">02</span>
          <h3 className="dish-row__name">Volcano Shrimp</h3>
          <p className="dish-row__desc">Jumbo tiger shrimp, hibachi butter glaze. Fried rice, signature yum yum sauce.</p>
          <div className="dish-row__foot">
            <span className="dish-price">$16</span>
            <a href="#order" className="link-arrow">Order This <span>→</span></a>
          </div>
        </div>
      </div>

      <div className="dish-row">
        <div className="dish-row__img">
          <Image src="/images/new-york-steak.png" alt="New York Strip" width={960} height={720} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="dish-row__body">
          <span className="dish-row__num">03</span>
          <h3 className="dish-row__name">New York Strip</h3>
          <p className="dish-row__desc">USDA prime cut, hibachi butter sear. Fried rice, grilled vegetables, house sauce.</p>
          <div className="dish-row__foot">
            <span className="dish-price">$20</span>
            <span className="dish-tag">Premium Cut</span>
            <a href="#order" className="link-arrow">Order This <span>→</span></a>
          </div>
        </div>
      </div>

      <div className="dishes__viewall container">
        <Link href="/menu" className="link-arrow link-arrow--lg">View Full Menu <span>→</span></Link>
      </div>

    </section>
  );
}
