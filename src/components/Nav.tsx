'use client';

import { useEffect, useRef, useState } from 'react';
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="mainNav">
        <div className="nav__inner">
          <Link href="/" className="nav__logo">
            <Image
              src="/images/logo.png"
              alt="Kerbachi Hibachi"
              width={176}
              height={88}
              priority
            />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            <Link href="/#featured" className="nav__link">Menu</Link>
            <Link href="/#about"    className="nav__link">About</Link>
            <Link href="/#why"      className="nav__link">Why Us</Link>
            <Link href="/#gallery"  className="nav__link">Gallery</Link>
            <Link href="/#location" className="nav__link">Find Us</Link>
          </nav>

          <div className="nav__right">
            <a href="tel:+15594086027" className="nav__phone">(559) 408-6027</a>
            <a href="tel:+15594086027" className="nav__order-btn">Order Now</a>
          </div>

          <button
            className={`nav__burger${drawerOpen ? ' open' : ''}`}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <span /><span />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`nav__overlay${drawerOpen ? ' open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`nav__drawer${drawerOpen ? ' open' : ''}`}
        aria-hidden={!drawerOpen}
        id="navDrawer"
      >
        <button
          className="drawer__close"
          aria-label="Close menu"
          onClick={() => setDrawerOpen(false)}
        >
          ✕
        </button>
        <nav className="drawer__nav">
          <Link href="/#featured" onClick={() => setDrawerOpen(false)}>Menu</Link>
          <Link href="/#about"    onClick={() => setDrawerOpen(false)}>About</Link>
          <Link href="/#why"      onClick={() => setDrawerOpen(false)}>Why Us</Link>
          <Link href="/#gallery"  onClick={() => setDrawerOpen(false)}>Gallery</Link>
          <Link href="/#location" onClick={() => setDrawerOpen(false)}>Find Us</Link>
        </nav>
        <div className="drawer__bottom">
          <a href="tel:+15594086027">(559) 408-6027</a>
          <a href="tel:+15594086027" className="drawer__order">Call to Order</a>
        </div>
      </div>
    </>
  );
}
