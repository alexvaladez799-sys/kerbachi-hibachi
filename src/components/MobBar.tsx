"use client";

import { useEffect, useState, useRef } from "react";
import { Phone, UtensilsCrossed } from "lucide-react";

export default function MobBar() {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");

    const check = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = scrolled / total;
      const nearFoot = footerRef.current
        ? footerRef.current.getBoundingClientRect().top < 80
        : false;
      
      // Show when scrolled past 40% but not near footer
      setVisible(pct > 0.4 && !nearFoot && window.innerWidth < 768);
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    check();
    
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center h-16 bg-ink-1 border-t border-border/50 shadow-[0_-10px_40px_rgba(16,15,12,0.8)] transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`} 
      aria-hidden={!visible}
    >
      <a 
        href="tel:+15594086027" 
        className="flex-1 flex items-center justify-center gap-3 h-full text-[0.72rem] font-medium tracking-[0.1em] uppercase text-paper-2 hover:bg-ink-2 hover:text-paper transition-colors border-r border-border/50"
      >
        <Phone className="w-4 h-4" />
        Call Us
      </a>
      <a 
        href="#order" 
        className="flex-1 flex items-center justify-center gap-3 h-full text-[0.72rem] font-medium tracking-[0.1em] uppercase text-ink bg-gold hover:bg-[#b5873d] transition-colors"
      >
        <UtensilsCrossed className="w-4 h-4" />
        Order Now
      </a>
    </div>
  );
}
