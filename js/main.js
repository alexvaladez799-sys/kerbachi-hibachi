/**
 * KERBACHI HIBACHI — main.js
 * No Lenis. No canvas. No heavy deps.
 * Native scroll + IntersectionObserver + minimal GSAP.
 */

'use strict';

/* ─── UTILS ─────────────────────────────────────────── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const noMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── 1. NAV — scroll state + mobile drawer ─────────── */
function initNav() {
  const nav     = $('#mainNav');
  const burger  = $('#navBurger');
  const drawer  = $('#navDrawer');
  const overlay = $('#navOverlay');
  if (!nav) return;

  /* Scroll → add .scrolled class for frosted glass */
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Burger / drawer toggle */
  function openDrawer() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  if (burger)  burger.addEventListener('click', () =>
    drawer.classList.contains('open') ? closeDrawer() : openDrawer()
  );
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  /* Drawer links close the drawer */
  $$('#navDrawer a').forEach(a => a.addEventListener('click', closeDrawer));

  /* Active nav link highlighting */
  const sections = $$('section[id]');
  const navLinks = $$('.nav__link');

  if (sections.length && navLinks.length) {
    const linkObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-60px 0px -50% 0px' });

    sections.forEach(s => linkObserver.observe(s));
  }
}

/* ─── 2. SMOOTH ANCHOR SCROLL — native, no library ──── */
function initAnchorScroll() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const hash   = anchor.getAttribute('href');
    if (hash === '#') return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();

    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

/* ─── 3. SCROLL REVEAL — IntersectionObserver ────────── */
function initScrollReveal() {
  /* Add .reveal class to elements that should animate in */
  const selectors = [
    '.section-header',
    '.dish-card',
    '.why-card',
    '.step',
    '.gallery-item',
    '.loc-item',
    '.menu-col',
  ];

  if (noMotion()) return;

  const targets = $$(selectors.join(', '));

  /* Mark elements hidden before observing (prevents flash) */
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    /* Stagger within the same parent grid */
    const siblings = [...el.parentElement.children].filter(c => c.classList.contains(el.classList[0]));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.setProperty('--delay', `${Math.min(idx * 0.08, 0.4)}s`);
  });

  /* Also handle explicit left/right reveals */
  $$('.location__info').forEach(el => {
    el.classList.remove('reveal');
    el.classList.add('reveal-left');
  });
  $$('.location__map').forEach(el => {
    el.classList.remove('reveal');
    el.classList.add('reveal-right');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold:  0.08,
    rootMargin: '0px 0px -36px 0px',
  });

  $$('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

/* ─── 4. GSAP PARALLAX — only if GSAP loaded ─────────── */
function initParallax() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (noMotion()) return;

  gsap.registerPlugin(ScrollTrigger);

  /* Hero background — slow cinematic drift */
  const heroBg = $('.hero-bg');
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
  }

  /* Gallery items — subtle parallax depth */
  $$('.gallery-item').forEach((item, i) => {
    const speed = i % 2 === 0 ? -8 : 8;
    gsap.to(item, {
      yPercent: speed,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
  });
}

/* ─── 5. STEPS NUMBER COUNTER — animated on reveal ────── */
function initStepReveal() {
  if (noMotion()) return;

  const steps = $$('.step');
  if (!steps.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('step--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  steps.forEach(s => observer.observe(s));
}

/* ─── 6. STICKY ORDER BAR — mobile only ─────────────── */
function initStickyBar() {
  const bar = $('.mobile-order-bar');
  if (!bar) return;

  /* Hide bar when near footer to avoid stacking */
  const footer = $('footer');
  if (!footer) return;

  const check = () => {
    const footerTop = footer.getBoundingClientRect().top;
    bar.style.opacity = footerTop < 100 ? '0' : '1';
    bar.style.pointerEvents = footerTop < 100 ? 'none' : 'auto';
  };

  window.addEventListener('scroll', check, { passive: true });
  check();
}

/* ─── 7. MENU LIST HOVER HIGHLIGHT ──────────────────── */
function initMenuHighlight() {
  $$('.menu-list li').forEach(li => {
    li.addEventListener('mouseenter', () => li.style.color = 'var(--cream)');
    li.addEventListener('mouseleave', () => li.style.color = '');
  });
}

/* ─── 8. DISH CARD — "Order This" tracks cursor on mobile */
function initDishCards() {
  if (window.matchMedia('(hover: none)').matches) {
    /* On touch devices, show overlay on tap */
    $$('.dish-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.dish-card__order-btn')) return;
        const overlay = card.querySelector('.dish-card__overlay');
        if (!overlay) return;
        const isVisible = overlay.style.opacity === '1';
        /* Hide all others first */
        $$('.dish-card__overlay').forEach(o => { o.style.opacity = '0'; });
        if (!isVisible) overlay.style.opacity = '1';
      });
    });
  }
}

/* ─── 9. CUSTOM EMBER CURSOR — desktop only ─────────── */
function initCursor() {
  /* Only desktop, non-reduced motion */
  if (window.matchMedia('(hover: none)').matches) return;
  if (noMotion()) return;

  const dot = document.createElement('div');
  dot.id = 'kerbachi-cursor';
  Object.assign(dot.style, {
    position: 'fixed',
    top: '0', left: '0',
    width: '10px', height: '10px',
    borderRadius: '50%',
    background: 'var(--fire)',
    boxShadow: '0 0 10px rgba(232,131,58,0.7)',
    pointerEvents: 'none',
    zIndex: '9999',
    transform: 'translate(-50%,-50%)',
    transition: 'width 0.18s ease, height 0.18s ease, opacity 0.2s ease',
    opacity: '0',
    mixBlendMode: 'screen',
  });
  document.body.appendChild(dot);

  let x = 0, y = 0, tx = 0, ty = 0, raf;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    if (dot.style.opacity !== '1') dot.style.opacity = '1';
  }, { passive: true });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });

  /* Grow on interactive elements */
  const grow = 'a, button, .dish-card, .why-card, .gallery-item';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(grow)) {
      dot.style.width  = '20px';
      dot.style.height = '20px';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(grow)) {
      dot.style.width  = '10px';
      dot.style.height = '10px';
    }
  });

  /* Smooth lag follow — requestAnimationFrame only */
  const follow = () => {
    x += (tx - x) * 0.14;
    y += (ty - y) * 0.14;
    dot.style.left = x + 'px';
    dot.style.top  = y + 'px';
    raf = requestAnimationFrame(follow);
  };
  follow();

  /* Pause on hidden */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else follow();
  });
}

/* ─── INIT ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAnchorScroll();
  initScrollReveal();
  initStepReveal();
  initStickyBar();
  initMenuHighlight();
  initDishCards();
  initCursor();

  /* GSAP after first paint — keeps initial render fast */
  requestAnimationFrame(() => requestAnimationFrame(initParallax));
});
