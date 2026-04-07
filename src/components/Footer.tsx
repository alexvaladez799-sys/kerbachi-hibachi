import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__logo">
          <Image src="/images/logo.png" alt="Kerbachi Hibachi" width={72} height={36} />
        </div>
        <div className="footer__info">
          <p>100 N Madera Ave, Kerman, CA 93630</p>
          <p>Tue – Sun · 11am – 9pm</p>
        </div>
        <div className="footer__links">
          <Link href="/menu">Menu</Link>
          <a href="#why">About</a>
          <a href="#location">Find Us</a>
        </div>
        <div className="footer__social">
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
          <a href="#" aria-label="TikTok"><i className="fab fa-tiktok" /></a>
          <a href="#" aria-label="Yelp"><i className="fab fa-yelp" /></a>
        </div>
      </div>
      <div className="footer__bottom container">
        <p>&copy; 2026 Kerbachi Hibachi · Kerman, CA</p>
      </div>
    </footer>
  );
}
