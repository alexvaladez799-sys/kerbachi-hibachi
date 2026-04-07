import Image from 'next/image';

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__head container">
        <span className="idx">04</span>
        <h2 className="display-title">Delicious Dishes</h2>
      </div>
      <div className="gallery__grid">
        <div className="gcell gcell--tall">
          <Image src="/images/steak-plate.png" alt="Hibachi Steak" width={600} height={800} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="gcell">
          <Image src="/images/chicken-plate.png" alt="Hibachi Chicken" width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="gcell">
          <Image src="/images/shrimp-plate.png" alt="Volcano Shrimp" width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="gcell gcell--wide">
          <Image src="/images/new-york-steak.png" alt="New York Strip" width={1200} height={525} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="gcell">
          <Image src="/images/calamari-plate.jpg" alt="Calamari Hibachi" width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="gcell">
          <Image src="/images/vegetarian-plate.png" alt="Garden Hibachi" width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
