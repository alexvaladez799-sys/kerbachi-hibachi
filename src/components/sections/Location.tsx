"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="border-t border-border bg-ink">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        <div className="flex flex-col py-24 sm:py-32 px-6 sm:px-12 lg:pl-12 xl:pl-[calc(50vw-40rem)] lg:pr-20 border-b lg:border-b-0 lg:border-r border-border">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-[0.65rem] font-normal tracking-[0.22em] uppercase text-gold mb-5 block"
          >
            05
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-disp text-4xl sm:text-6xl md:text-7xl font-light text-paper leading-none tracking-tight mb-16 sm:mb-24"
          >
            Find Us
          </motion.h2>

          <div className="flex flex-col gap-8 flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-border/40"
            >
              <span className="block text-[0.62rem] font-medium tracking-[0.18em] text-paper-2 uppercase mb-4">Address</span>
              <address className="not-italic text-sm font-light text-paper leading-loose">
                100 N Madera Ave<br />Kerman, CA 93630
              </address>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-border/40"
            >
              <span className="block text-[0.62rem] font-medium tracking-[0.18em] text-paper-2 uppercase mb-4">Hours</span>
              <p className="text-sm font-light text-paper leading-loose">Tuesday – Sunday<br />11:00 AM – 9:00 PM</p>
              <p className="text-sm font-light text-paper-2/60 mt-2">Monday: Closed</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-border/40"
            >
              <span className="block text-[0.62rem] font-medium tracking-[0.18em] text-paper-2 uppercase mb-4">Phone</span>
              <p><a href="tel:+15594086027" className="text-lg font-light text-paper hover:text-gold transition-colors">(559) 408-6027</a></p>
            </motion.div>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="https://maps.google.com/?q=100+N+Madera+Ave+Kerman+CA+93630"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 inline-flex items-center gap-3 text-[0.72rem] font-normal tracking-[0.14em] uppercase text-paper-2 hover:text-paper group/link transition-colors"
          >
            Get Directions <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </motion.a>
        </div>

        <div className="relative min-h-[400px] lg:min-h-full">
          {/* A sophisticated dark mode map effect applied via CSS filter */}
          <iframe
            title="Kerbachi location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.000000000001!2d-120.0608!3d36.7231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945000000000%3A0x0!2sKerman%2C+CA+93630!5e0!3m2!1sen!2sus!4v1700000000000"
            className="absolute inset-0 w-full h-full border-0 saturate-0 hover:saturate-[0.3] invert-[0.9] hue-rotate-180 brightness-[0.8] transition-all duration-700"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Inner shadow to blend the iframe edges with the section */}
          <div className="absolute inset-0 pointer-events-none border-[12px] border-ink/40 shadow-[inset_0_0_40px_rgba(16,15,12,0.8)]" />
        </div>

      </div>
    </section>
  );
}
