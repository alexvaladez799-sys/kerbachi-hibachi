import Image from 'next/image';

const cells = [
  { src: '/images/steak-plate.png',    alt: 'Hibachi Steak',           cls: 'gcell--tall' },
  { src: '/images/chicken-bowl.png',   alt: 'Chicken Rice Bowl',       cls: '' },
  { src: '/images/pork-belly-bowl.png',alt: 'Pork Belly Bowl',         cls: '' },
  { src: '/images/eggrolls.png',       alt: 'Eggrolls',                cls: 'gcell--wide' },
  { src: '/images/coconut-boba.png',   alt: 'Coconut Boba',            cls: '' },
  { src: '/images/yum-yum-sauce.png',  alt: 'Yum Yum Sauce',          cls: '' },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__head">
          <span className="idx">Delicious Dishes</span>
          <h2 className="display-title">
            Made with fire,<br /><em>served with pride.</em>
          </h2>
        </div>
      </div>

      <div className="gallery__grid">
        {cells.map((cell) => (
          <div key={cell.src} className={`gcell${cell.cls ? ` ${cell.cls}` : ''}`}>
            <Image
              src={cell.src}
              alt={cell.alt}
              width={800}
              height={600}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
