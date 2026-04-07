import Image from 'next/image';
import Link from 'next/link';

const dishes = [
  {
    num: '01',
    name: 'Hibachi Steak',
    desc: 'Prime beef teppanyaki-seared over open flame. Served with hibachi fried rice, grilled vegetables, and your choice of sauce.',
    price: '$18',
    tag: 'Best Seller',
    img: '/images/steak-plate.png',
    alt: 'Hibachi Steak Plate',
  },
  {
    num: '02',
    name: 'Volcano Shrimp',
    desc: 'Jumbo tiger shrimp, hibachi butter, signature yum yum sauce — bright, bold, and impossible to put down.',
    price: '$16',
    tag: 'Fan Favorite',
    img: '/images/shrimp-plate.png',
    alt: 'Volcano Shrimp Plate',
    flip: true,
  },
  {
    num: '03',
    name: 'Hibachi Chicken',
    desc: 'Teriyaki-glazed chicken, teppanyaki style. Clean heat, rich glaze, and every bite cooked to order.',
    price: '$14',
    tag: null,
    img: '/images/chicken-plate.png',
    alt: 'Hibachi Chicken Plate',
  },
];

export default function Dishes() {
  return (
    <section className="dishes" id="featured">
      <div className="container">
        <div className="dishes__header">
          <span className="idx">Customer Favorites</span>
          <h2 className="display-title">
            Cooked to order,<br /><em>every time.</em>
          </h2>
        </div>
      </div>

      {dishes.map((dish) => (
        <div
          key={dish.num}
          className={`dish-row${dish.flip ? ' dish-row--flip' : ''}`}
        >
          <div className="dish-row__img">
            <Image
              src={dish.img}
              alt={dish.alt}
              width={960}
              height={720}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="dish-row__body">
            <span className="dish-row__num">{dish.num}</span>
            <h3 className="dish-row__name">{dish.name}</h3>
            <p className="dish-row__desc">{dish.desc}</p>
            <div className="dish-row__foot">
              <span className="dish-price">{dish.price}</span>
              {dish.tag && <span className="dish-tag">{dish.tag}</span>}
            </div>
          </div>
        </div>
      ))}

      <div className="container">
        <div className="dishes__viewall">
          <Link href="/menu" className="link-arrow link-arrow--lg">
            View Full Menu <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
