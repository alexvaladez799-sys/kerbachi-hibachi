import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MenuTabs from '@/components/menu/MenuTabs';

export const metadata: Metadata = {
  title: 'Full Menu · Kerbachi Hibachi',
  description: 'Kerbachi full menu — hibachi plates, rice bowls, appetizers, specialty drinks, and signature sauces.',
};

export default function MenuPage() {
  return (
    <>
      {/* Sticky nav */}
      <nav className="menu-page-nav">
        <div className="container menu-page-nav__inner">
          <Link href="/" className="menu-page-nav__back">
            &larr; <span>Back</span>
          </Link>
          <Link href="/" className="menu-page-nav__logo">
            <Image src="/images/logo.png" alt="Kerbachi Hibachi" width={144} height={72} />
          </Link>
          <a href="tel:+15594086027" className="menu-page-nav__call">(559) 408-6027</a>
        </div>
      </nav>

      {/* Hero with MenuHero.jpg */}
      <div className="menu-hero">
        <div className="menu-hero__bg">
          <Image
            src="/images/menu-hero.jpg"
            alt="Kerbachi menu spread"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="menu-hero__overlay" />
        <div className="menu-hero__content">
          <span className="menu-hero__eyebrow">Full Menu &mdash; Kerman, CA</span>
          <h1>The Menu,<br /><em>Unabridged.</em></h1>
          <p>Hibachi plates &middot; Rice bowls &middot; Fusion appetizers &middot; Specialty drinks</p>
        </div>
      </div>

      {/* Tabs + content */}
      <MenuTabs />

      {/* Footer */}
      <footer className="menu-footer">
        <div className="container menu-footer__inner">
          <p>
            &copy; {new Date().getFullYear()} Kerbachi Hibachi &mdash; Kerman, CA
          </p>
          <p>
            <a href="tel:+15594086027">(559) 408-6027</a>
          </p>
        </div>
      </footer>
    </>
  );
}
