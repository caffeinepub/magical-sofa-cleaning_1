import { Phone } from 'lucide-react';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import LogoWithBacking from '@/components/common/LogoWithBacking';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 shadow-xs backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:h-20">
        <a href="#home" className="flex items-center gap-3 transition-transform hover:scale-105">
          <LogoWithBacking size="md" />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight text-foreground lg:text-xl">
              MAGICAL <span className="text-primary">SERVICE</span>
            </span>
            <span className="text-xs text-muted-foreground lg:text-sm">Professional Cleaning</span>
          </div>
        </a>
        
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <a href="#home" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            Home
          </a>
          <a href="#services" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            Services
          </a>
          <a href="#areas" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            Areas
          </a>
          <a href="#reviews" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            Reviews
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <a
            href="tel:+918000262644"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg sm:flex lg:px-7 lg:py-4"
          >
            <Phone className="h-4 w-4 stroke-[3]" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/918000262644"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.19_145)] to-[oklch(0.55_0.22_145)] px-5 py-3.5 text-sm font-bold text-white shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg lg:px-6 lg:py-4"
          >
            <SiWhatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/magical_sofa_cleaning?igsh=MW42bHIweG9oZDV0bQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-br from-[oklch(0.65_0.19_330)] via-[oklch(0.60_0.20_0)] to-[oklch(0.55_0.22_30)] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:scale-105 hover:opacity-90 hover:shadow-premium lg:px-6 lg:py-4"
          >
            <SiInstagram className="h-4 w-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
