import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <Image src="/images/logo.png" alt="Kerbachi" width={72} height={36} />
          </div>
          <p className="footer__info">
            Kerbachi Hibachi &mdash; Kerman, CA<br />
            Premium hibachi, rice bowls &amp; specialty drinks.
          </p>
          <nav className="footer__links">
            <Link href="/#featured">Menu</Link>
            <Link href="/#about">About</Link>
            <Link href="/#location">Find Us</Link>
          </nav>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">&#9632;</a>
          </div>
        </div>
        <p className="footer__bottom">
          &copy; {new Date().getFullYear()} Kerbachi Hibachi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
