export default function Location() {
  return (
    <section className="location" id="location">
      <div className="location__inner">
        <div className="location__info container" style={{ maxWidth: 'none' }}>
          <h2 className="display-title">
            Come <em>find us.</em>
          </h2>

          <div className="loc-rows">
            <div className="loc-row">
              <span className="loc-label">Address</span>
              <address>Kerman, CA</address>
            </div>

            <div className="loc-row">
              <span className="loc-label">Hours</span>
              <p>
                Mon &ndash; Sat: 11am &ndash; 9pm<br />
                Sunday: 11am &ndash; 8pm
              </p>
              <p className="loc-closed">Hours may vary &mdash; call ahead to confirm.</p>
            </div>

            <div className="loc-row">
              <span className="loc-label">Order</span>
              <p>
                <a href="tel:+15594086027">(559) 408-6027</a>
              </p>
            </div>
          </div>
        </div>

        <div className="location__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25422.52!2d-120.0617!3d36.7232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80948f76f36aa5e7%3A0xb3f5e3c6b8a24f3e!2sKerman%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
            title="Kerbachi Hibachi location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
