"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] flex items-end overflow-hidden pb-12 sm:pb-24 pt-24">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Kerbachi Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/15 to-ink/95 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex items-center gap-3 text-[0.65rem] sm:text-xs font-medium tracking-[0.2em] uppercase text-paper/70 mb-8"
        >
          <span>Kerman, California</span>
          <span className="text-gold">·</span>
          <span>Tue – Sun 11am – 9pm</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="font-disp font-light text-paper text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tight flex flex-col mb-12 sm:mb-20"
        >
          <span className="block">Hibachi,</span>
          <span className="block italic text-[#c0392b]">Elevated.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="w-full border-t border-border mt-auto pt-6 sm:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="#featured"
              className="text-[0.68rem] font-normal tracking-[0.18em] uppercase text-paper-2 hover:text-paper transition-colors duration-300"
            >
              Explore the Menu
            </a>
            <a
              href="#order"
              className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-ink bg-paper px-8 py-3.5 hover:bg-gold hover:text-ink transition-colors duration-300"
            >
              Order Now
            </a>
          </div>

          <a href="#featured" className="flex flex-col items-center gap-2 group" aria-label="Scroll down">
             <span className="text-[0.6rem] uppercase tracking-widest text-paper-2 group-hover:text-paper transition-colors">Scroll</span>
             <motion.div 
               animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="w-px h-12 bg-gradient-to-b from-paper-2 to-transparent"
             />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
