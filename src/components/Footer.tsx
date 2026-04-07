import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-1 border-t border-border pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8 mb-16 sm:mb-24">
        
        <div className="md:col-span-1">
          <Link href="/">
            <Image src="/images/logo.png" alt="Kerbachi Hibachi" width={100} height={50} className="mb-6 opacity-80 hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-sm font-light text-paper-2 leading-loose max-w-[200px]">
            Elevating hibachi style cuisine in Kerman. Fresh, fast, premium.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-2">Visit</h4>
          <p className="text-sm font-light text-paper-2 leading-relaxed">
            100 N Madera Ave<br />
            Kerman, CA 93630
          </p>
          <p className="text-sm font-light text-paper-2 leading-relaxed">
            Tue – Sun · 11am – 9pm<br />
            Mon · Closed
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-2">Explore</h4>
          <Link href="/menu" className="text-sm font-light text-paper-2 hover:text-paper transition-colors w-fit">Menu</Link>
          <a href="#about" className="text-sm font-light text-paper-2 hover:text-paper transition-colors w-fit">Our Story</a>
          <a href="#location" className="text-sm font-light text-paper-2 hover:text-paper transition-colors w-fit">Location & Hours</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-2">Socials</h4>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-paper-2 hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Location Map" className="text-paper-2 hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[0.65rem] font-light tracking-[0.1em] text-paper-2/60 uppercase">
          &copy; {new Date().getFullYear()} Kerbachi Hibachi · Kerman, CA
        </p>
        <p className="text-[0.65rem] font-light tracking-[0.1em] text-paper-2/40 uppercase">
          Crafted with care
        </p>
      </div>
    </footer>
  );
}
