"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-40 border-t border-border overflow-hidden bg-ink">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="flex flex-col">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5 block"
          >
            02
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-disp text-4xl sm:text-6xl md:text-7xl font-light text-paper leading-none tracking-tight mb-10"
          >
            Where roots<br /><em className="italic text-paper-2 font-light">meet flavor.</em>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-5 text-paper-2 font-light text-[0.95rem] leading-[1.85] mb-10"
          >
            <p>Kerbachi is where our roots and flavors come together. Our name blends <strong className="text-paper font-medium">Kerman</strong> — the town we proudly serve — with <strong className="text-paper font-medium">hibachi</strong>, a cooking style known for bold flavor and fresh preparation.</p>
            <p>We specialize in hibachi-style dishes like fried rice, grilled chicken, steak, and shrimp. Alongside that, we bring Southeast Asian influences with handmade eggrolls, pork buns, sticky rice, crispy pork belly, and our signature herbaceous Hmong sausage.</p>
            <p>Every dish reflects a mix of cultures, family traditions, and a commitment to quality.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {['Hibachi', 'SE Asian Fusion', 'Kerman, CA', 'Family-Made'].map((tag) => (
              <span key={tag} className="text-[0.62rem] font-medium tracking-[0.18em] uppercase text-gold bg-gold/5 border border-gold/20 px-4 py-2">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-normal tracking-[0.14em] uppercase text-paper hover:text-white group/link transition-colors">
              Explore the Full Menu <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="w-full aspect-[4/5] overflow-hidden relative border border-border/40">
            <Image
              src="/images/hero-bg.png"
              alt="Kerbachi Hibachi kitchen"
              fill
              className="object-cover saturate-[0.85] brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:saturate-100 group-hover:brightness-95"
            />
            {/* Dark overlay to add edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          <div className="absolute -bottom-px -left-px bg-ink border border-border/50 px-6 py-4 z-10 hidden sm:block">
            <span className="text-[0.6rem] font-medium tracking-[0.22em] uppercase text-gold">Est. Kerman, CA</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
