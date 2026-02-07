import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { SiWhatsapp, SiGoogle } from 'react-icons/si';
import { Heart } from 'lucide-react';
import LogoWithBacking from '@/components/common/LogoWithBacking';

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary/30 bg-card">
      <div className="container px-4 py-12 md:px-6 md:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <LogoWithBacking size="lg" />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-tight lg:text-2xl">
                  MAGICAL <span className="text-primary">SERVICE</span>
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
              Your trusted partner for professional sofa cleaning services in Ahmedabad, carpet cleaning, chair cleaning, mattress cleaning, and complete AC services in Ahmedabad & Gandhinagar. Affordable rates with same-day service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary lg:text-base">Quick Links</h3>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <a href="#home" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#appointment" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#areas" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Areas Served
                </a>
              </li>
              <li>
                <a href="#reviews" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary lg:text-base">Contact Us</h3>
            <ul className="space-y-3.5 text-sm lg:text-base">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 stroke-[2.5] text-primary" />
                <a href="tel:+918000262644" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  8000 2626 44
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 stroke-[2.5] text-primary" />
                <span className="font-medium text-muted-foreground">
                  Serving Ahmedabad & Gandhinagar<br />
                  Gujarat, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <SiGoogle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <a 
                  href="https://share.google/Nex4Ll5OOIXAVyXjZ" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <span>View us on Google</span>
                  <ExternalLink className="h-3 w-3 stroke-[2.5]" />
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary lg:text-base">Book Now</h3>
            <div className="space-y-2.5">
              <a
                href="tel:+918000262644"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg lg:text-base"
              >
                <Phone className="h-5 w-5 stroke-[3]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918000262644"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.19_145)] to-[oklch(0.55_0.22_145)] px-5 py-3.5 text-sm font-bold text-white shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg lg:text-base"
              >
                <SiWhatsapp className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground lg:text-base">
              © 2026. Built with <Heart className="inline h-4 w-4 fill-primary text-primary" /> using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary transition-colors hover:text-primary/80"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground lg:text-base">
              <a href="#services" className="font-medium transition-colors hover:text-primary">
                Services
              </a>
              <a href="#why-choose-us" className="font-medium transition-colors hover:text-primary">
                Why Choose Us
              </a>
              <a href="#appointment" className="font-medium transition-colors hover:text-primary">
                Book Now
              </a>
              <a href="#areas" className="font-medium transition-colors hover:text-primary">
                Areas
              </a>
              <a href="#reviews" className="font-medium transition-colors hover:text-primary">
                Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
