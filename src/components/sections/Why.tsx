"use client";

import { motion } from "framer-motion";

export default function Why() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-40 border-t border-border bg-ink">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/why-bg.png')] bg-center bg-cover bg-no-repeat opacity-[0.28] saturate-50 brightness-75 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-28"
        >
          <span className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5 block">
            03
          </span>
          <h2 className="font-disp text-4xl sm:text-6xl md:text-7xl font-light text-paper leading-[1.1] tracking-tight max-w-[18ch]">
            No shortcuts.<br />
            <em className="italic text-paper-2/80 font-light">No compromises.</em>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-border"
        >
          <motion.div variants={itemVariants} className="py-12 md:py-16 md:pr-12 md:border-r border-border border-b md:border-b-0">
            <span className="block font-disp text-2xl text-gold mb-6">—</span>
            <h3 className="font-disp text-2xl sm:text-3xl font-light text-paper mb-4 tracking-tight">Cooked to Order</h3>
            <p className="font-light text-sm text-paper-2 leading-[1.75]">Every plate goes straight to the grill. No batches, no reheating. Just fresh, sizzling flavor.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="py-12 md:py-16 md:px-12 md:border-r border-border border-b md:border-b-0">
            <span className="block font-disp text-2xl text-gold mb-6">—</span>
            <h3 className="font-disp text-2xl sm:text-3xl font-light text-paper mb-4 tracking-tight">Prime Ingredients</h3>
            <p className="font-light text-sm text-paper-2 leading-[1.75]">USDA prime cuts, fresh vegetables, house-made sauces. The difference is immediate and undeniable.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="py-12 md:py-16 md:pl-12">
            <span className="block font-disp text-2xl text-gold mb-6">—</span>
            <h3 className="font-disp text-2xl sm:text-3xl font-light text-paper mb-4 tracking-tight">Fast Pickup</h3>
            <p className="font-light text-sm text-paper-2 leading-[1.75]">Call ahead or walk in. Ready in minutes, packed hot, and meant to be enjoyed right away.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
