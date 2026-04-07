"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled 
            ? "bg-ink/90 backdrop-blur-xl border-border/50 py-2 sm:py-3" 
            : "bg-transparent border-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="Kerbachi Hibachi" 
              width={160} 
              height={80} 
              priority 
              className="w-32 sm:w-40 h-auto"
            />
          </Link>

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2">
            <Link href="/menu" className="text-[0.68rem] font-normal tracking-[0.14em] uppercase text-paper-2 hover:text-paper px-4 py-2 transition-colors">Menu</Link>
            <a href="#about" className="text-[0.68rem] font-normal tracking-[0.14em] uppercase text-paper-2 hover:text-paper px-4 py-2 transition-colors">About</a>
            <a href="#location" className="text-[0.68rem] font-normal tracking-[0.14em] uppercase text-paper-2 hover:text-paper px-4 py-2 transition-colors">Find Us</a>
          </nav>

          <div className="hidden md:flex items-center gap-8">
            <a href="tel:+15594086027" className="text-[0.7rem] font-medium tracking-[0.06em] text-ink bg-paper px-5 py-2.5 hover:bg-gold hover:text-ink transition-colors">
              (559) 408-6027
            </a>
            <a href="#order" className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-ink bg-paper px-6 py-2.5 hover:bg-gold hover:text-ink transition-colors">
              Order Now
            </a>
          </div>

          <button
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-end gap-[6px] group"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1px] bg-paper transition-all duration-300 ease-out ${drawerOpen ? "w-6 rotate-45 translate-y-[3px]" : "w-6"}`} />
            <span className={`block h-[1px] bg-paper transition-all duration-300 ease-out ${drawerOpen ? "w-6 -rotate-45 -translate-y-[4px]" : "w-4 group-hover:w-6"}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-ink/80 backdrop-blur-md z-40 md:hidden pointer-events-auto"
              onClick={() => setDrawerOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-ink-1 border-l border-border z-40 md:hidden flex flex-col px-8 pt-32 pb-12 overflow-y-auto"
            >
              <nav className="flex flex-col gap-2 flex-1">
                <Link href="/menu" className="font-disp text-5xl font-light text-paper-2 hover:text-paper border-b border-border py-4 transition-colors" onClick={() => setDrawerOpen(false)}>Menu</Link>
                <a href="#why" className="font-disp text-5xl font-light text-paper-2 hover:text-paper border-b border-border py-4 transition-colors" onClick={() => setDrawerOpen(false)}>About</a>
                <a href="#location" className="font-disp text-5xl font-light text-paper-2 hover:text-paper border-b border-border py-4 transition-colors" onClick={() => setDrawerOpen(false)}>Find Us</a>
              </nav>
              
              <div className="flex flex-col gap-6 pt-12">
                <a href="tel:+15594086027" className="text-sm tracking-wide text-paper-2 hover:text-paper transition-colors">(559) 408-6027</a>
                <a href="#order" className="bg-gold text-ink text-[0.72rem] font-medium tracking-[0.14em] uppercase text-center py-4 hover:bg-[#b5873d] transition-colors" onClick={() => setDrawerOpen(false)}>Order Now</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
