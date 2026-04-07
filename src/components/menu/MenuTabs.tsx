"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = "hibachi" | "bowls" | "appetizers" | "combos" | "drinks" | "sauces";

const TABS: { id: Tab; label: string }[] = [
  { id: "hibachi",     label: "Hibachi Plates" },
  { id: "bowls",       label: "Rice Bowls" },
  { id: "appetizers",  label: "Appetizers" },
  { id: "combos",      label: "Combos" },
  { id: "drinks",      label: "Specialty Drinks" },
  { id: "sauces",      label: "Sauces" },
];

export default function MenuTabs() {
  const [active, setActive] = useState<Tab>("hibachi");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTab = (tab: Tab) => {
    setActive(tab);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <div className="sticky top-20 z-40 bg-ink/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar py-4 w-full">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={cn(
                  "relative text-[0.65rem] sm:text-[0.7rem] font-medium tracking-[0.14em] uppercase whitespace-nowrap transition-colors py-2",
                  active === t.id ? "text-gold" : "text-paper-2 hover:text-paper"
                )}
                onClick={() => handleTab(t.id)}
              >
                {t.label}
                {active === t.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 sm:py-32 scroll-mt-32" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <AnimatePresence mode="wait">
            {active === "hibachi" && (
              <motion.div
                key="hibachi"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-16 sm:mb-24 flex flex-col max-w-2xl">
                  <span className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5">01 — Hibachi Plates</span>
                  <h2 className="font-disp text-4xl sm:text-6xl font-light text-paper leading-[1.1] tracking-tight mb-6">
                    Straight from<br /><em className="italic text-paper-2 font-light">the grill.</em>
                  </h2>
                  <p className="font-light text-paper-2 text-sm sm:text-base leading-relaxed">
                    Every plate cooked to order. Served with hibachi fried rice, grilled vegetables, ginger salad & your choice of sauce.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16">
                  {[
                    { img: "/images/steak-plate.png",      name: "Hibachi Steak",    desc: "Prime beef, teppanyaki-seared over open flame.",                       price: "$18", badge: "Best Seller",   tags: ["Fried Rice", "Grilled Veg", "Ginger Salad"] },
                    { img: "/images/new-york-steak.png",   name: "New York Strip",   desc: "USDA prime cut, hibachi butter glaze and house sear.",                  price: "$20", badge: "Premium Cut",   tags: ["Fried Rice", "Grilled Veg", "Ginger Salad"] },
                    { img: "/images/shrimp-plate.png",     name: "Volcano Shrimp",   desc: "Jumbo tiger shrimp, hibachi butter, signature yum yum sauce.",          price: "$16", badge: "Fan Favorite",  tags: ["Fried Rice", "Grilled Veg", "Yum Yum"] },
                    { img: "/images/chicken-plate.png",    name: "Hibachi Chicken",  desc: "Teriyaki-glazed chicken, teppanyaki style.",                            price: "$14", badge: null,            tags: ["Fried Rice", "Grilled Veg", "Ginger Salad"] },
                    { img: "/images/calamari-plate.jpg",   name: "Calamari Hibachi", desc: "Tender calamari, seasoned and flame-grilled to order.",                 price: "$15", badge: null,            tags: ["Fried Rice", "Grilled Veg"] },
                    { img: "/images/vegetarian-plate.png", name: "Garden Hibachi",   desc: "Fresh seasonal vegetables, flame-grilled with house seasoning.",        price: "$12", badge: null,            tags: ["Fried Rice", "Grilled Veg", "Vegetarian"] },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group flex flex-col border border-border/50 bg-ink-1 hover:border-gold/30 transition-colors"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-border/50">
                        <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-disp text-3xl font-light text-paper mb-3">{item.name}</h3>
                        <p className="font-light text-sm text-paper-2 leading-relaxed mb-6 flex-1">{item.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.tags.map((t) => <span key={t} className="text-[0.55rem] tracking-[0.15em] uppercase text-paper-2 bg-ink px-2 py-1 border border-border/60 rounded-none">{t}</span>)}
                        </div>
                        <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                          <span className="font-disp text-2xl text-gold">{item.price}</span>
                          {item.badge && <span className="text-[0.6rem] font-medium tracking-[0.15em] uppercase text-gold bg-gold/10 px-3 py-1 border border-gold/20">{item.badge}</span>}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-ink-1 border border-border/50 p-6 sm:p-8 text-center text-sm font-light text-paper-2">
                  <p>All hibachi plates include sesame fried rice, grilled vegetables, ginger salad & your choice of sauce. Substitutions available on request.</p>
                </div>
              </motion.div>
            )}

            {/* Other tabs omitted for brevity but generally structured the same - mapping data to UI with Framer motion */}
            {active === "bowls" && (
              <motion.div key="bowls" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div className="mb-16 sm:mb-24 flex flex-col max-w-2xl">
                  <span className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5">02 — Rice Bowls</span>
                  <h2 className="font-disp text-4xl sm:text-6xl font-light text-paper leading-[1.1] tracking-tight mb-6">Bowl over<br /><em className="italic text-paper-2 font-light">everything.</em></h2>
                  <p className="font-light text-paper-2 text-sm sm:text-base leading-relaxed">Kerbachi rice bowls — protein over seasoned rice with house sauce and fresh toppings.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                  {[
                    { img: "/images/chicken-bowl.png",    name: "Chicken Rice Bowl",      desc: "Teriyaki chicken over steamed rice, house sauce, pickled vegetables.",              price: "$13", badge: null },
                    { img: "/images/pork-belly-bowl.png", name: "Crispy Pork Belly Bowl", desc: "Slow-cooked crispy pork belly over rice with house golden sauce.",                  price: "$15", badge: "Signature" },
                    { img: "/images/salmon-bowl.png",     name: "Salmon Rice Bowl",       desc: "Seared salmon fillet over seasoned rice with peanut sauce and herbs.",              price: "$16", badge: null },
                    { img: "/images/sausage-bowl.png",    name: "Hmong Sausage Bowl",     desc: "Signature herbaceous Hmong sausage over sticky rice with green sauce.",             price: "$14", badge: "House Specialty" },
                    { img: "/images/teriyaki-bowl.png",   name: "Teriyaki Bowl",          desc: "Classic teriyaki glaze over rice with sesame seeds and scallions.",                 price: "$13", badge: null },
                  ].map((item, i) => (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group flex flex-col border border-border/50 bg-ink-1 hover:border-gold/30 transition-colors">
                      <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-border/50">
                        <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-disp text-3xl font-light text-paper mb-3">{item.name}</h3>
                        <p className="font-light text-sm text-paper-2 leading-relaxed mb-6 flex-1">{item.desc}</p>
                        <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                          <span className="font-disp text-2xl text-gold">{item.price}</span>
                          {item.badge && <span className="text-[0.6rem] font-medium tracking-[0.15em] uppercase text-gold bg-gold/10 px-3 py-1 border border-gold/20">{item.badge}</span>}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {active === "appetizers" && (
              <motion.div key="appetizers" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div className="mb-16 flex flex-col max-w-2xl">
                  <span className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5">03 — Appetizers</span>
                  <h2 className="font-disp text-4xl sm:text-6xl font-light text-paper leading-[1.1] tracking-tight mb-6">Start here.<br /><em className="italic text-paper-2 font-light">Every time.</em></h2>
                  <p className="font-light text-paper-2 text-sm sm:text-base leading-relaxed">Southeast Asian-inspired starters, handmade with family recipes.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                  {[
                    { img: "/images/eggrolls.png",   name: "Eggrolls",    desc: "Crispy handmade eggrolls with seasoned pork and vegetables. Served with dipping sauce.", price: "$8",  badge: "House Made" },
                    { img: "/images/springrolls.png", name: "Spring Rolls", desc: "Light and fresh spring rolls with vermicelli, herbs, and peanut sauce.",                price: "$7",  badge: null },
                    { img: "/images/porkbuns.png",   name: "Pork Buns",   desc: "Steamed bao buns filled with braised pork belly and house sauce.",                      price: "$9",  badge: "Must Try" },
                  ].map((item, i) => (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group flex flex-col border border-border/50 bg-ink-1 hover:border-gold/30 transition-colors">
                      <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-border/50">
                        <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-disp text-3xl font-light text-paper mb-3">{item.name}</h3>
                        <p className="font-light text-sm text-paper-2 leading-relaxed mb-6 flex-1">{item.desc}</p>
                        <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                          <span className="font-disp text-2xl text-gold">{item.price}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Very simple versions of the combos, drinks, and sauces tabs */}
            {active === "combos" && (
              <motion.div key="combos" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div className="mb-16 flex flex-col max-w-2xl">
                  <span className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5">04 — Combo Plates</span>
                  <h2 className="font-disp text-4xl sm:text-6xl font-light text-paper leading-[1.1] tracking-tight mb-6">Two proteins.<br /><em className="italic text-paper-2 font-light">One plate.</em></h2>
                  <p className="font-light text-paper-2 text-sm sm:text-base leading-relaxed">All combos include hibachi fried rice, grilled vegetables, ginger salad & your choice of sauce.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                  {[
                    ["Steak & Chicken", "$22"], ["Steak & Shrimp", "$24"], ["Chicken & Shrimp", "$20"],
                    ["NY Strip & Shrimp", "$26"], ["Triple Combo", "$28"], ["NY Strip & Chicken", "$24"],
                  ].map(([name, price]) => (
                    <div className="flex items-center justify-between border-b border-border/50 pb-4" key={name}>
                      <span className="font-disp text-2xl font-light text-paper">{name}</span>
                      <span className="font-disp text-2xl text-gold">{price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {active === "drinks" && (
              <motion.div key="drinks" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div className="mb-16 flex flex-col max-w-2xl">
                  <span className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5">05 — Specialty Drinks</span>
                  <h2 className="font-disp text-4xl sm:text-6xl font-light text-paper leading-[1.1] tracking-tight mb-6">Crafted<br /><em className="italic text-paper-2 font-light">to sip.</em></h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                  {[
                    { img: "/images/coconut-boba.png",    name: "Coconut Boba",    price: "$6" },
                    { img: "/images/honeydew-boba.png",   name: "Honeydew Boba",   price: "$6" },
                    { img: "/images/strawberry-boba.png", name: "Strawberry Boba", price: "$6" },
                    { img: "/images/taro-boba.png",       name: "Taro Boba",       price: "$6" },
                    { img: "/images/thai-tea-boba.png",   name: "Thai Tea Boba",   price: "$6" },
                  ].map((item, i) => (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
                      <div className="aspect-[3/4] w-full overflow-hidden relative border border-border/50 mb-4">
                        <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <h3 className="font-disp text-xl md:text-2xl font-light text-paper mb-1">{item.name}</h3>
                      <span className="font-disp text-xl text-gold">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {active === "sauces" && (
              <motion.div key="sauces" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div className="mb-16 flex flex-col max-w-2xl">
                  <span className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5">06 — Sauces</span>
                  <h2 className="font-disp text-4xl sm:text-6xl font-light text-paper leading-[1.1] tracking-tight mb-6">House-made<br /><em className="italic text-paper-2 font-light">every batch.</em></h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {[
                    { img: "/images/chili-oil.png",     name: "Chili Oil",     note: "Bold & fiery" },
                    { img: "/images/golden-sauce.png",  name: "Golden Sauce",  note: "Sweet & savory" },
                    { img: "/images/green-sauce.png",   name: "Green Sauce",   note: "Herb-forward" },
                    { img: "/images/peanut-sauce.png",  name: "Peanut Sauce",  note: "Rich & nutty" },
                    { img: "/images/yum-yum-sauce.png", name: "Yum Yum Sauce", note: "House classic" },
                  ].map((item, i) => (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
                      <div className="aspect-square w-full overflow-hidden relative border border-border/50 rounded-full mb-6">
                        <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-disp text-xl md:text-2xl font-light text-paper mb-1">{item.name}</h3>
                        <p className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-gold">{item.note}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
        
        <div className="max-w-3xl mx-auto px-6 mt-32 text-center flex flex-col items-center">
          <h3 className="font-disp text-4xl sm:text-5xl font-light text-paper mb-4">Ready to order?</h3>
          <p className="font-light text-paper-2 text-sm sm:text-base mb-10">Call us and we&apos;ll have it hot and ready for pickup.</p>
          <a href="tel:+15594086027" className="text-lg font-light text-ink bg-paper hover:bg-gold px-10 py-4 transition-colors duration-300">
            Call (559) 408-6027
          </a>
        </div>
      </div>
    </>
  );
}
