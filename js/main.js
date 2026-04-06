/**
 * KERBACHI HIBACHI — main.js
 */

'use strict';

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const noMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── NAV ─────────────────────────────────────────────── */
function initNav() {
  const nav     = $('#mainNav');
  const burger  = $('#navBurger');
  const drawer  = $('#navDrawer');
  const overlay = $('#navOverlay');
  const close   = $('#drawerClose');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burger?.addEventListener('click', () =>
    drawer.classList.contains('open') ? closeDrawer() : openDrawer()
  );
  overlay?.addEventListener('click', closeDrawer);
  close?.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  $$('#navDrawer a').forEach(a => a.addEventListener('click', closeDrawer));

  /* Active nav link */
  const sections = $$('section[id]');
  const navLinks = $$('.nav__link');
  if (sections.length && navLinks.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          ));
        }
      });
    }, { threshold: 0.3, rootMargin: '-60px 0px -50% 0px' });
    sections.forEach(s => obs.observe(s));
  }
}

/* ── SMOOTH ANCHOR SCROLL ────────────────────────────── */
function initAnchorScroll() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const hash = anchor.getAttribute('href');
    if (hash === '#') return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    const navH = document.getElementById('mainNav')?.offsetHeight || 100;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - navH,
      behavior: 'smooth',
    });
  });
}

/* ── SCROLL REVEAL ───────────────────────────────────── */
function initScrollReveal() {
  if (noMotion()) return;

  const targets = $$([
    '.dishes__header',
    '.dish-row__body',
    '.why__head',
    '.why__pillar',
    '.menu-sec__head',
    '.menu-col',
    '.gallery__head',
    '.gcell',
    '.location__info',
    '.order-cta__content',
  ].join(', '));

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    const siblings = [...el.parentElement.children].filter(c => c.classList.contains(el.classList[0]));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${Math.min(idx * 0.1, 0.4)}s`;
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach(el => obs.observe(el));
}

/* ── GSAP PARALLAX ───────────────────────────────────── */
function initParallax() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (noMotion()) return;

  gsap.registerPlugin(ScrollTrigger);

  /* Hero background slow drift */
  const heroBg = $('.hero__bg');
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
    });
  }

  /* Gallery cells alternating depth */
  $$('.gcell').forEach((cell, i) => {
    gsap.to(cell, {
      yPercent: i % 2 === 0 ? -4 : 4,
      ease: 'none',
      scrollTrigger: {
        trigger: cell,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
  });
}

/* ── MOBILE BAR — show only after scrolling 60% of page ─ */
function initMobBar() {
  const bar    = $('.mob-bar');
  const footer = $('footer');
  if (!bar) return;

  const check = () => {
    const scrolled  = window.scrollY + window.innerHeight;
    const total     = document.documentElement.scrollHeight;
    const pct       = scrolled / total;
    const nearFoot  = footer ? footer.getBoundingClientRect().top < 80 : false;

    if (pct > 0.6 && !nearFoot) {
      bar.classList.add('mob-bar--visible');
    } else {
      bar.classList.remove('mob-bar--visible');
    }
  };

  window.addEventListener('scroll', check, { passive: true });
  check();
}

/* ── CUSTOM CURSOR ───────────────────────────────────── */
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  if (noMotion()) return;

  const dot = document.createElement('div');
  Object.assign(dot.style, {
    position: 'fixed',
    top: '0', left: '0',
    width: '8px', height: '8px',
    borderRadius: '50%',
    background: '#c4964a',
    pointerEvents: 'none',
    zIndex: '9999',
    transform: 'translate(-50%,-50%)',
    transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
    opacity: '0',
    mixBlendMode: 'difference',
  });
  document.body.appendChild(dot);

  let x = 0, y = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    dot.style.opacity = '1';
  }, { passive: true });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });

  const growSel = 'a, button, .gcell, .dish-row__img';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(growSel)) { dot.style.width = '22px'; dot.style.height = '22px'; }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(growSel)) { dot.style.width = '8px'; dot.style.height = '8px'; }
  });

  const follow = () => {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    dot.style.left = x + 'px';
    dot.style.top  = y + 'px';
    requestAnimationFrame(follow);
  };
  follow();
}

/* ── INIT ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAnchorScroll();
  initScrollReveal();
  initMobBar();
  initCursor();
  requestAnimationFrame(() => requestAnimationFrame(initParallax));
});
