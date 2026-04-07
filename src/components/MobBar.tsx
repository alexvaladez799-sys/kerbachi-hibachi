'use client';

import { useEffect, useState, useRef } from 'react';

export default function MobBar() {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    footerRef.current = document.querySelector('footer');

    const check = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = scrolled / total;
      const nearFoot = footerRef.current
        ? footerRef.current.getBoundingClientRect().top < 80
        : false;
      setVisible(pct > 0.6 && !nearFoot);
    };

    window.addEventListener('scroll', check, { passive: true });
    check();
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <div className={`mob-bar${visible ? ' mob-bar--visible' : ''}`} aria-hidden="true">
      <a href="tel:+15594086027" className="mob-bar__call">(559) 408-6027</a>
      <a href="tel:+15594086027" className="mob-bar__order">Order Now</a>
    </div>
  );
}
