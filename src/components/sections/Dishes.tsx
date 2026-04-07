"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const dishes = [
  {
    id: 1,
    name: "Hibachi Steak",
    desc: "Prime beef, teppanyaki-seared over open flame. Sesame fried rice, grilled vegetables, ginger salad.",
    price: "$18",
    image: "/images/steak-plate.png",
    alt: "Hibachi Steak",
    flip: false,
  },
  {
    id: 2,
    name: "Volcano Shrimp",
    desc: "Jumbo tiger shrimp, hibachi butter glaze. Fried rice, signature yum yum sauce.",
    price: "$16",
    image: "/images/shrimp-plate.png",
    alt: "Volcano Shrimp",
    flip: true,
  },
  {
    id: 3,
    name: "New York Strip",
    desc: "USDA prime cut, hibachi butter sear. Fried rice, grilled vegetables, house sauce.",
    price: "$20",
    tag: "Premium Cut",
    image: "/images/new-york-steak.png",
    alt: "New York Strip",
    flip: false,
  },
];

export default function Dishes() {
  return (
    <section id="featured" className="py-24 sm:py-40 border-t border-border bg-ink">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col mb-16 sm:mb-28">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5 block"
        >
          01
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-disp text-4xl sm:text-6xl md:text-7xl font-light text-paper leading-none tracking-tight"
        >
          Customer Favorites
        </motion.h2>
      </div>

      <div className="flex flex-col w-full border-t border-border">
        {dishes.map((dish, i) => (
          <motion.div 
            key={dish.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`group grid grid-cols-1 lg:grid-cols-2 min-h-[540px] border-b border-border ${dish.flip ? "lg:direction-rtl" : ""}`}
          >
            <div className={`relative overflow-hidden min-h-[300px] lg:min-h-full ${dish.flip ? "lg:order-2" : "lg:order-1"}`}>
              <Image 
                src={dish.image} 
                alt={dish.alt} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                sizes="(max-width:1024px) 100vw, 55vw" 
              />
            </div>
            
            <div className={`flex flex-col justify-center p-10 sm:p-16 lg:p-24 relative overflow-hidden transition-colors duration-500 group-hover:bg-gold/5 ${dish.flip ? "lg:order-1 lg:border-r border-border" : "lg:order-2 lg:border-l border-border"}`}>
              {/* Highlight bar */}
              <div className={`absolute top-0 w-[2px] h-0 bg-gold transition-all duration-700 ease-out group-hover:h-full ${dish.flip ? "right-0" : "left-0"}`} />
              
              <span className="font-disp text-7xl sm:text-9xl font-light text-gold/10 leading-[0.8] tracking-tighter mb-2 -ml-2 select-none">
                0{dish.id}
              </span>
              
              <h3 className="font-disp text-3xl sm:text-5xl font-light tracking-tight text-paper mb-4 transition-all duration-500 group-hover:tracking-normal">
                {dish.name}
              </h3>
              
              <p className="text-sm font-light text-paper-2 leading-relaxed max-w-sm mb-10 pl-4 border-l border-border/40">
                {dish.desc}
              </p>
              
              <div className="flex items-center gap-6 flex-wrap pt-6 border-t border-border mt-auto">
                <span className="font-disp text-3xl font-light text-gold tracking-tight">{dish.price}</span>
                {dish.tag && (
                  <span className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-gold bg-gold/10 border border-gold/20 px-3 py-1">
                    {dish.tag}
                  </span>
                )}
                <a href="#order" className="inline-flex items-center gap-2 text-[0.72rem] font-normal tracking-[0.14em] uppercase text-paper-2 hover:text-paper group/link transition-colors ml-auto lg:ml-6">
                  Order This <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-end pt-12">
        <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-normal tracking-[0.14em] uppercase text-paper hover:text-white group/link transition-colors">
          View Full Menu <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>

    </section>
  );
}
