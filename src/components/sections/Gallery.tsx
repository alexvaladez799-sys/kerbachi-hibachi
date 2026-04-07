"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/steak-plate.png", alt: "Hibachi Steak", isTall: true },
  { src: "/images/chicken-plate.png", alt: "Hibachi Chicken", isTall: false },
  { src: "/images/shrimp-plate.png", alt: "Volcano Shrimp", isTall: false },
  { src: "/images/new-york-steak.png", alt: "New York Strip", isWide: true },
  { src: "/images/calamari-plate.jpg", alt: "Calamari Hibachi", isTall: false },
  { src: "/images/vegetarian-plate.png", alt: "Garden Hibachi", isTall: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-40 border-t border-border bg-ink">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16 sm:mb-24">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5 block"
        >
          04
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-disp text-4xl sm:text-6xl md:text-7xl font-light text-paper leading-none tracking-tight"
        >
          Delicious Dishes
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 px-1">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`relative overflow-hidden group ${
              img.isTall ? "row-span-2 aspect-[3/4]" : 
              img.isWide ? "col-span-2 aspect-[16/7]" : 
              "aspect-[4/3]"
            }`}
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-all duration-1000 group-hover:scale-105 saturate-[0.88] brightness-[0.92] group-hover:saturate-100 group-hover:brightness-100" 
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
