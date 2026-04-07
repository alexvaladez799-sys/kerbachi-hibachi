'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawerOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`} id="mainNav">
        <div className="nav__inner">
          <a href="#" className="nav__logo" aria-label="Kerbachi home">
            <Image src="/images/logo.png" alt="Kerbachi Hibachi" width={176} height={88} priority />
          </a>

          <nav className="nav__links" aria-label="Main">
            <Link href="/menu" className="nav__link">Menu</Link>
            <a href="#about" className="nav__link">About</a>
            <a href="#location" className="nav__link">Find Us</a>
          </nav>

          <div className="nav__right">
            <a href="tel:+15594086027" className="nav__phone">(559) 408-6027</a>
            <a href="#order" className="nav__order-btn">Order Now</a>
          </div>

          <button
            className={`nav__burger${drawerOpen ? ' open' : ''}`}
            id="navBurger"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <span /><span />
          </button>
        </div>

        <div className={`nav__drawer${drawerOpen ? ' open' : ''}`} id="navDrawer" aria-hidden={!drawerOpen}>
          <button className="drawer__close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>✕</button>
          <nav className="drawer__nav">
            <Link href="/menu" onClick={() => setDrawerOpen(false)}>Menu</Link>
            <a href="#why" onClick={() => setDrawerOpen(false)}>About</a>
            <a href="#location" onClick={() => setDrawerOpen(false)}>Find Us</a>
          </nav>
          <div className="drawer__bottom">
            <a href="tel:+15594086027">(559) 408-6027</a>
            <a href="#order" className="drawer__order" onClick={() => setDrawerOpen(false)}>Order Now</a>
          </div>
        </div>

        <div
          className={`nav__overlay${drawerOpen ? ' open' : ''}`}
          id="navOverlay"
          onClick={() => setDrawerOpen(false)}
        />
      </header>
    </>
  );
}
