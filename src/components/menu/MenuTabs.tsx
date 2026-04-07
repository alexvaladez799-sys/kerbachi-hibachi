'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

type Tab = 'hibachi' | 'bowls' | 'appetizers' | 'combos' | 'drinks' | 'sauces';

const TABS: { id: Tab; label: string }[] = [
  { id: 'hibachi',     label: 'Hibachi Plates' },
  { id: 'bowls',       label: 'Rice Bowls' },
  { id: 'appetizers',  label: 'Appetizers' },
  { id: 'combos',      label: 'Combos' },
  { id: 'drinks',      label: 'Specialty Drinks' },
  { id: 'sauces',      label: 'Sauces' },
];

export default function MenuTabs() {
  const [active, setActive] = useState<Tab>('hibachi');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTab = (tab: Tab) => {
    setActive(tab);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  return (
    <>
      <div className="menu-tabs">
        <div className="container menu-tabs__inner">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? ' active' : ''}`}
              onClick={() => handleTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-body" ref={contentRef}>
        <div className="container">

          {/* HIBACHI PLATES */}
          <div className={`menu-category${active === 'hibachi' ? ' visible' : ''}`} id="tab-hibachi">
            <div className="cat-header">
              <span className="cat-header__eyebrow">01 — Hibachi Plates</span>
              <h2>Straight from<br /><em>the grill.</em></h2>
              <p>Every plate cooked to order. Served with hibachi fried rice, grilled vegetables, ginger salad &amp; your choice of sauce.</p>
            </div>
            <div className="plates-grid">
              {[
                { img: '/images/steak-plate.png',      name: 'Hibachi Steak',    desc: 'Prime beef, teppanyaki-seared over open flame.',                       price: '$18', badge: 'Best Seller',   tags: ['Fried Rice', 'Grilled Veg', 'Ginger Salad'] },
                { img: '/images/new-york-steak.png',   name: 'New York Strip',   desc: 'USDA prime cut, hibachi butter glaze and house sear.',                  price: '$20', badge: 'Premium Cut',   tags: ['Fried Rice', 'Grilled Veg', 'Ginger Salad'] },
                { img: '/images/shrimp-plate.png',     name: 'Volcano Shrimp',   desc: 'Jumbo tiger shrimp, hibachi butter, signature yum yum sauce.',          price: '$16', badge: 'Fan Favorite',  tags: ['Fried Rice', 'Grilled Veg', 'Yum Yum'] },
                { img: '/images/chicken-plate.png',    name: 'Hibachi Chicken',  desc: 'Teriyaki-glazed chicken, teppanyaki style.',                            price: '$14', badge: null,            tags: ['Fried Rice', 'Grilled Veg', 'Ginger Salad'] },
                { img: '/images/calamari-plate.jpg',   name: 'Calamari Hibachi', desc: 'Tender calamari, seasoned and flame-grilled to order.',                 price: '$15', badge: null,            tags: ['Fried Rice', 'Grilled Veg'] },
                { img: '/images/vegetarian-plate.png', name: 'Garden Hibachi',   desc: 'Fresh seasonal vegetables, flame-grilled with house seasoning.',        price: '$12', badge: null,            tags: ['Fried Rice', 'Grilled Veg', 'Vegetarian'] },
              ].map((item) => (
                <div className="plate-card" key={item.name}>
                  <div className="plate-card__img">
                    <Image src={item.img} alt={item.name} width={640} height={480} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <div className="plate-card__body">
                    <h3 className="plate-card__name">{item.name}</h3>
                    <p className="plate-card__desc">{item.desc}</p>
                    <div className="plate-card__includes">
                      {item.tags.map((t) => <span className="incl-tag" key={t}>{t}</span>)}
                    </div>
                    <div className="plate-card__footer">
                      <span className="plate-card__price">{item.price}</span>
                      {item.badge && <span className="plate-card__badge">{item.badge}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="note-band">
              <p>All hibachi plates include sesame fried rice, grilled vegetables, ginger salad &amp; your choice of sauce. Substitutions available on request.</p>
            </div>
          </div>

          {/* RICE BOWLS */}
          <div className={`menu-category${active === 'bowls' ? ' visible' : ''}`} id="tab-bowls">
            <div className="cat-header">
              <span className="cat-header__eyebrow">02 — Rice Bowls</span>
              <h2>Bowl over<br /><em>everything.</em></h2>
              <p>Kerbachi rice bowls — protein over seasoned rice with house sauce and fresh toppings.</p>
            </div>
            <div className="plates-grid">
              {[
                { img: '/images/chicken-bowl.png',    name: 'Chicken Rice Bowl',      desc: 'Teriyaki chicken over steamed rice, house sauce, pickled vegetables.',              price: '$13', badge: null },
                { img: '/images/pork-belly-bowl.png', name: 'Crispy Pork Belly Bowl', desc: 'Slow-cooked crispy pork belly over rice with house golden sauce.',                  price: '$15', badge: 'Signature' },
                { img: '/images/salmon-bowl.png',     name: 'Salmon Rice Bowl',       desc: 'Seared salmon fillet over seasoned rice with peanut sauce and herbs.',              price: '$16', badge: null },
                { img: '/images/sausage-bowl.png',    name: 'Hmong Sausage Bowl',     desc: 'Signature herbaceous Hmong sausage over sticky rice with green sauce.',             price: '$14', badge: 'House Specialty' },
                { img: '/images/teriyaki-bowl.png',   name: 'Teriyaki Bowl',          desc: 'Classic teriyaki glaze over rice with sesame seeds and scallions.',                 price: '$13', badge: null },
              ].map((item) => (
                <div className="plate-card" key={item.name}>
                  <div className="plate-card__img">
                    <Image src={item.img} alt={item.name} width={640} height={480} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <div className="plate-card__body">
                    <h3 className="plate-card__name">{item.name}</h3>
                    <p className="plate-card__desc">{item.desc}</p>
                    <div className="plate-card__footer">
                      <span className="plate-card__price">{item.price}</span>
                      {item.badge && <span className="plate-card__badge">{item.badge}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* APPETIZERS */}
          <div className={`menu-category${active === 'appetizers' ? ' visible' : ''}`} id="tab-appetizers">
            <div className="cat-header">
              <span className="cat-header__eyebrow">03 — Appetizers</span>
              <h2>Start here.<br /><em>Every time.</em></h2>
              <p>Southeast Asian-inspired starters, handmade with family recipes.</p>
            </div>
            <div className="plates-grid">
              {[
                { img: '/images/eggrolls.png',   name: 'Eggrolls',    desc: 'Crispy handmade eggrolls with seasoned pork and vegetables. Served with dipping sauce.', price: '$8',  badge: 'House Made' },
                { img: '/images/springrolls.png', name: 'Spring Rolls', desc: 'Light and fresh spring rolls with vermicelli, herbs, and peanut sauce.',                price: '$7',  badge: null },
                { img: '/images/porkbuns.png',   name: 'Pork Buns',   desc: 'Steamed bao buns filled with braised pork belly and house sauce.',                      price: '$9',  badge: 'Must Try' },
              ].map((item) => (
                <div className="plate-card" key={item.name}>
                  <div className="plate-card__img">
                    <Image src={item.img} alt={item.name} width={640} height={480} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <div className="plate-card__body">
                    <h3 className="plate-card__name">{item.name}</h3>
                    <p className="plate-card__desc">{item.desc}</p>
                    <div className="plate-card__footer">
                      <span className="plate-card__price">{item.price}</span>
                      {item.badge && <span className="plate-card__badge">{item.badge}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMBOS */}
          <div className={`menu-category${active === 'combos' ? ' visible' : ''}`} id="tab-combos">
            <div className="cat-header">
              <span className="cat-header__eyebrow">04 — Combo Plates</span>
              <h2>Two proteins.<br /><em>One plate.</em></h2>
              <p>All combos include hibachi fried rice, grilled vegetables, ginger salad &amp; your choice of sauce.</p>
            </div>
            <div className="list-section">
              {[
                ['Steak & Chicken', '$22'],
                ['Steak & Shrimp', '$24'],
                ['Chicken & Shrimp', '$20'],
                ['NY Strip & Shrimp', '$26'],
                ['Triple Combo', '$28'],
                ['NY Strip & Chicken', '$24'],
              ].map(([name, price]) => (
                <div className="list-item" key={name}>
                  <span className="list-item__name">{name}</span>
                  <span className="list-item__price">{price}</span>
                </div>
              ))}
            </div>
            <div className="note-band">
              <p>Substitutions and modifications welcome. Ask us about adding extra protein or upgrading your rice.</p>
            </div>
          </div>

          {/* SPECIALTY DRINKS */}
          <div className={`menu-category${active === 'drinks' ? ' visible' : ''}`} id="tab-drinks">
            <div className="cat-header">
              <span className="cat-header__eyebrow">05 — Specialty Drinks</span>
              <h2>Crafted<br /><em>to sip.</em></h2>
              <p>Boba teas and specialty drinks, made fresh to order.</p>
            </div>
            <div className="drinks-grid">
              {[
                { img: '/images/coconut-boba.png',    name: 'Coconut Boba',    price: '$6' },
                { img: '/images/honeydew-boba.png',   name: 'Honeydew Boba',   price: '$6' },
                { img: '/images/strawberry-boba.png', name: 'Strawberry Boba', price: '$6' },
                { img: '/images/taro-boba.png',       name: 'Taro Boba',       price: '$6' },
                { img: '/images/thai-tea-boba.png',   name: 'Thai Tea Boba',   price: '$6' },
              ].map((item) => (
                <div className="drink-card" key={item.name}>
                  <div className="drink-card__img">
                    <Image src={item.img} alt={item.name} width={400} height={533} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <div className="drink-card__body">
                    <h3 className="drink-card__name">{item.name}</h3>
                    <span className="drink-card__price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SAUCES */}
          <div className={`menu-category${active === 'sauces' ? ' visible' : ''}`} id="tab-sauces">
            <div className="cat-header">
              <span className="cat-header__eyebrow">06 — Sauces</span>
              <h2>House-made<br /><em>every batch.</em></h2>
              <p>Five signature sauces. All made in-house, all worthy of a spoon.</p>
            </div>
            <div className="sauces-grid">
              {[
                { img: '/images/chili-oil.png',     name: 'Chili Oil',     note: 'Bold & fiery' },
                { img: '/images/golden-sauce.png',  name: 'Golden Sauce',  note: 'Sweet & savory' },
                { img: '/images/green-sauce.png',   name: 'Green Sauce',   note: 'Herb-forward' },
                { img: '/images/peanut-sauce.png',  name: 'Peanut Sauce',  note: 'Rich & nutty' },
                { img: '/images/yum-yum-sauce.png', name: 'Yum Yum Sauce', note: 'House classic' },
              ].map((item) => (
                <div className="sauce-card" key={item.name}>
                  <div className="sauce-card__img">
                    <Image src={item.img} alt={item.name} width={400} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <div className="sauce-card__body">
                    <h3 className="sauce-card__name">{item.name}</h3>
                    <p className="sauce-card__note">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA band */}
        <div className="cta-band">
          <h3>Ready to order?</h3>
          <p>Call us and we&apos;ll have it hot and ready for pickup.</p>
          <div className="cta-band__actions">
            <a href="tel:+15594086027" className="cta-btn">Call (559) 408-6027</a>
          </div>
        </div>
      </div>
    </>
  );
}
