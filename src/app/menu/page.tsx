import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MenuTabs from "@/components/menu/MenuTabs";
import { MoveLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Full Menu · Kerbachi Hibachi",
  description: "Kerbachi full menu — hibachi plates, rice bowls, appetizers, specialty drinks, and signature sauces.",
};

export default function MenuPage() {
  return (
    <main className="bg-ink min-h-screen">
      {/* Sticky nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.18em] uppercase text-paper-2 hover:text-paper group transition-colors">
            <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/images/logo.png" alt="Kerbachi Hibachi" width={110} height={55} priority className="opacity-90 hover:opacity-100 transition-opacity" />
          </Link>
          <a href="tel:+15594086027" className="flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.14em] text-ink bg-gold hover:bg-[#b5873d] px-4 py-2 sm:px-6 sm:py-2.5 transition-colors">
            <Phone className="w-3 h-3 sm:hidden" />
            <span className="hidden sm:inline">(559) 408-6027</span>
          </a>
        </div>
      </nav>

      {/* Hero with MenuHero.jpg */}
      <div className="relative h-[60vh] min-h-[400px] flex items-end pb-16 justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/menu-hero.jpg"
            alt="Kerbachi menu spread"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20 z-10" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-ink/80 to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 max-w-4xl mx-auto px-6">
          <span className="font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-6 block drop-shadow-md">
            Full Menu — Kerman, CA
          </span>
          <h1 className="font-disp text-5xl sm:text-7xl md:text-8xl font-light text-paper leading-[0.95] tracking-tight mb-6">
            The Menu,<br />
            <em className="italic text-[#c0392b] font-light">Unabridged.</em>
          </h1>
          <p className="font-light text-paper-2 text-sm sm:text-base tracking-wide">
            Hibachi plates <span className="text-gold mx-2">·</span> Rice bowls <span className="text-gold mx-2">·</span> Fusion appetizers <span className="text-gold mx-2">·</span> Specialty drinks
          </p>
        </div>
      </div>

      {/* Tabs + content */}
      <MenuTabs />

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.65rem] font-light tracking-[0.1em] text-paper-2/60 uppercase text-center sm:text-left">
            &copy; {new Date().getFullYear()} Kerbachi Hibachi — Kerman, CA
          </p>
          <a href="tel:+15594086027" className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-paper-2 hover:text-gold transition-colors">
            (559) 408-6027
          </a>
        </div>
      </footer>
    </main>
  );
}
