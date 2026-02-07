import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/magical-service-logo.dim_512x512.png" 
                alt="Magical Service" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-tight">
                  MAGICAL <span className="text-primary">SERVICE</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for professional sofa, AC, and home cleaning services in Ahmedabad & Gandhinagar.
              <span className="mt-2 block">
                અમદાવાદ અને ગાંધીનગરમાં વ્યાવસાયિક સોફા, AC અને ઘર સફાઈ સેવાઓ માટે તમારા વિશ્વાસુ ભાગીદાર.
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links | ઝડપી લિંક્સ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground transition-colors hover:text-primary">
                  Home | હોમ
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Services | સેવાઓ
                </a>
              </li>
              <li>
                <a href="#areas" className="text-muted-foreground transition-colors hover:text-primary">
                  Areas Served | વિસ્તારો
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us | અમારો સંપર્ક કરો</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+918000262644" className="text-muted-foreground transition-colors hover:text-primary">
                  8000 2626 44
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Nikol, Naroda, Bapunagar<br />Ahmedabad, Gujarat
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Book Now | હમણાં બુક કરો</h3>
            <div className="space-y-3">
              <a
                href="tel:+918000262644"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now | કૉલ કરો</span>
              </a>
              <a
                href="https://wa.me/918000262644"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[oklch(0.65_0.19_145)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[oklch(0.60_0.19_145)] hover:shadow-md"
              >
                <SiWhatsapp className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
            <p>
              © 2026 <strong className="font-semibold text-foreground">Magical Sofa Cleaning</strong>. Managed by Jaydeep Patel.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
