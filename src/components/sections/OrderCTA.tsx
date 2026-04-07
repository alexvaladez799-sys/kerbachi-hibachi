"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OrderCTA() {
  return (
    <section id="order" className="py-32 sm:py-48 border-t border-border bg-ink relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-8"
        >
          Ready?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-disp text-5xl sm:text-7xl md:text-8xl font-light text-paper leading-[0.95] tracking-tight mb-8"
        >
          Order your plate<br />
          <em className="italic text-[#c0392b] font-light">today.</em>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-light text-paper-2 text-sm sm:text-base mb-16 max-w-sm"
        >
          Hot off the grill. Ready for pickup. Kerman&apos;s best hibachi.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
        >
          <a 
            href="tel:+15594086027" 
            className="text-lg font-light text-ink bg-paper hover:bg-gold px-10 py-4 transition-colors duration-300 shadow-xl shadow-gold/5"
          >
            (559) 408-6027
          </a>
          <Link 
            href="/menu" 
            className="inline-flex items-center gap-3 text-[0.7rem] font-normal tracking-[0.14em] uppercase text-paper-2 hover:text-paper group transition-colors"
          >
            Browse Menu <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
