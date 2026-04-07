export default function Location() {
  return (
    <section id="location" className="location">
      <div className="location__inner">
        <div className="location__info">
          <span className="idx">05</span>
          <h2 className="display-title">Find Us</h2>
          <div className="loc-rows">
            <div className="loc-row">
              <span className="loc-label">Address</span>
              <address>100 N Madera Ave<br />Kerman, CA 93630</address>
            </div>
            <div className="loc-row">
              <span className="loc-label">Hours</span>
              <p>Tuesday – Sunday<br />11:00 AM – 9:00 PM</p>
              <p className="loc-closed">Monday: Closed</p>
            </div>
            <div className="loc-row">
              <span className="loc-label">Phone</span>
              <p><a href="tel:+15594086027">(559) 408-6027</a></p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=100+N+Madera+Ave+Kerman+CA+93630"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
            style={{ marginTop: '2.5rem', display: 'inline-flex' }}
          >
            Get Directions <span>→</span>
          </a>
        </div>
        <div className="location__map">
          <iframe
            title="Kerbachi location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.000000000001!2d-120.0608!3d36.7231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945000000000%3A0x0!2sKerman%2C+CA+93630!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(88%) hue-rotate(180deg) saturate(0.5) brightness(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
