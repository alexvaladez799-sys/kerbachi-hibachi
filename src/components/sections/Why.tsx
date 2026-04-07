import Image from 'next/image';

const pillars = [
  {
    title: 'No Shortcuts',
    body: 'Every protein is hand-prepped daily. Every sauce made in-house. We refuse to compromise on what ends up on your plate.',
  },
  {
    title: 'Open Flame Flavor',
    body: 'We cook hibachi-style — high heat, fast sear, real flavor. You taste the difference the moment it hits the grill.',
  },
  {
    title: 'Family First',
    body: 'Southeast Asian roots, Central Valley heart. Recipes built from family tradition and refined through obsession.',
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="why__bg" aria-hidden="true">
        <Image
          src="/images/why-bg.png"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="why__overlay" aria-hidden="true" />

      <div className="why__content container">
        <div className="why__head">
          <span className="idx">Our Promise</span>
          <h2 className="display-title">
            No shortcuts.<br />
            <em>No compromises.</em>
          </h2>
        </div>

        <div className="why__pillars">
          {pillars.map((p) => (
            <div className="why__pillar" key={p.title}>
              <span className="why__dash">&mdash;</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
