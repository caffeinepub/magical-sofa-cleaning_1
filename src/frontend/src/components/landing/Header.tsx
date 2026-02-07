import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/assets/generated/magical-service-logo.dim_512x512.png" 
            alt="Magical Service" 
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight text-foreground">
              MAGICAL <span className="text-primary">SERVICE</span>
            </span>
            <span className="text-xs text-muted-foreground">Professional Cleaning | વ્યાવસાયિક સફાઈ</span>
          </div>
        </a>
        
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Home | હોમ
          </a>
          <a href="#services" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Services | સેવાઓ
          </a>
          <a href="#areas" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Areas | વિસ્તારો
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+918000262644"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:flex"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now | કૉલ કરો</span>
          </a>
          <a
            href="https://wa.me/918000262644"
            className="flex items-center gap-2 rounded-lg bg-[oklch(0.65_0.19_145)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[oklch(0.60_0.19_145)] hover:shadow-md"
          >
            <SiWhatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
