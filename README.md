# Apex Construction Group — Premium Contractor Website

**High-converting, award-quality contractor website with full lead generation system**

---

## 🎯 Project Goal

Convert website visitors into phone calls, quote requests, and form submissions. Every design decision serves trust-building and conversion — not decoration.

---

## ✅ Completed Features

### Conversion Elements (Critical Path)
- **Top bar** — Phone number and "Free Quote" CTA always visible
- **Sticky navigation** — Scroll-aware nav with phone + quote button
- **Hero CTAs** — Primary "Get a Free Quote" + secondary "Call Now"
- **Mid-page CTA banner** — Bright yellow strip between projects and about
- **Quote form** — 7-field form with real-time validation, loading state, success message
- **Mobile sticky bar** — Fixed bottom bar on mobile (Call + Quote) appears after 500px scroll
- **Scroll progress bar** — Subtle amber progress at top of page
- **Multiple CTAs** — Quote/call links in every major section

### Trust & Credibility
- Hero trust badges (Licensed, OSHA Certified, 4.9★, $2M Insured)
- Stats bar (20+ years, 850+ projects, 4.9★, 98% on-time, $2M coverage)
- About section differentiators (Owner on every job, Written guarantee, On-time penalty)
- License number in footer + nav
- Source-attributed testimonials (Google, Yelp)

### Sections (All 9 Built)
1. **Hero** — 100vh, canvas overlay, animated headline, CTAs, trust badges
2. **Stats Bar** — 5 bold counters, GSAP animated on scroll
3. **Services** — 5 service cards + CTA card, hover animations, accent bars
4. **Projects** — 5-item grid with hover overlay reveals, project metadata
5. **About** — Split layout, stacked imagery, 3 differentiators, certs
6. **Process** — 4-step timeline with GSAP-animated progress line
7. **Testimonials** — 4-card auto-advancing carousel, swipe, dots
8. **Quote Form** — Full lead capture with validation + success state
9. **Footer** — 4-column, contact/service areas, social links, legal

### Animations
- Scroll reveal (fade + translateY) on all sections
- GSAP stat counters (count up on scroll into view)
- GSAP process line fill (scrub animation)
- Hero canvas: structural grid lines + diagonal accents
- Hero parallax (background moves at 20% scroll speed)
- Project card tilt/zoom on hover + overlay reveal
- Service card hover: icon scale, accent bar slide, card lift
- Button magnetic effect (presses)
- Float badge pulse (CSS keyframe)

### Accessibility
- Semantic HTML5 throughout
- ARIA labels, roles, aria-live regions
- Keyboard navigation
- `prefers-reduced-motion` respected
- Focus-visible states
- `aria-label` on all interactive elements

---

## 📁 File Structure

```
/
├── index.html          # All HTML + inline JS
├── css/
│   ├── style.css       # Full design system + all components
│   └── animations.css  # Reveals, hover states, keyframes
└── README.md
```

---

## 🔗 Page Sections (Hash Links)

| Hash | Section |
|------|---------|
| `#hero` | Hero / above the fold |
| `#stats` | Stats / instant trust |
| `#services` | Services grid |
| `#projects` | Portfolio / featured work |
| `#about` | About / company story |
| `#process` | 4-step process |
| `#testimonials` | Customer reviews |
| `#quote` | Quote form + CTA |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Accent | `#E8A000` (amber/yellow) |
| Black | `#0a0a0a` |
| Background | `#ffffff` / `#f9f8f6` |
| Heading font | Barlow Condensed 800/900 |
| Body font | Barlow 400/500/600 |
| UI font | Inter 400/500/600 |
| Base spacing | 8px system |

---

## 📱 Mobile Optimizations

- Mobile-first CSS breakpoints (768px, 1024px, 1200px)
- Sticky call/quote bar on scroll > 500px
- Hamburger menu with full-screen overlay
- Tap-to-call links throughout
- All overlays visible by default on mobile (no hover required)
- Reduced animation count on small screens

---

## 🛠 Tech Stack

| Tech | Purpose |
|------|---------|
| HTML5 | Semantic structure |
| CSS3 | Design system, grid, animations |
| JavaScript (ES2022) | All interactions, inline |
| GSAP 3.12 + ScrollTrigger | Counter animation, parallax, process line |
| Font Awesome 6.5 | Icons |
| Google Fonts | Barlow Condensed, Barlow, Inter |
| Canvas API | Hero structural overlay |
| IntersectionObserver | Scroll reveals |

---

## 🚀 Recommended Next Steps

1. **Replace form** with Netlify Forms, Formspree, or custom API endpoint
2. **Replace phone** `(555) 555-0100` with real number throughout
3. **Replace visuals** with actual project photography (WebP format)
4. **Add Google Analytics** or Plausible for conversion tracking
5. **Add Google My Business** schema markup (JSON-LD) for local SEO
6. **Add OpenGraph tags** for social sharing
7. **Set up call tracking** (CallRail or similar) to track phone conversions
8. **A/B test CTAs** — try "Get My Free Estimate" vs "Get a Free Quote"
9. **Add live chat** widget (Tidio, Crisp) for instant lead capture
10. **Sitemap + robots.txt** for SEO

---

## ⚠️ Before Launch Checklist

- [ ] Replace `(555) 555-0100` with real phone number
- [ ] Replace `info@apexconstructiongroup.com` with real email
- [ ] Replace placeholder address with real address
- [ ] Connect quote form to real backend/email service
- [ ] Add real project photos
- [ ] Update license number
- [ ] Add real Google/Yelp review links
- [ ] Test on iOS Safari and Android Chrome
- [ ] Run Google PageSpeed Insights
- [ ] Set up Google Analytics

---

*Built for maximum conversion. Every element earns its place.*
