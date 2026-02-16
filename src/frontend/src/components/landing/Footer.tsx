import { Phone, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp, SiInstagram, SiGoogle } from 'react-icons/si';
import InlineIcon from '@/components/common/InlineIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Footer() {
  const footerRef = useScrollReveal<HTMLElement>();

  return (
    <footer className="border-t-2 border-primary/30 bg-gradient-to-b from-muted/30 to-background" ref={footerRef}>
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">MAGICAL SERVICE</h3>
            <p className="text-sm text-muted-foreground">
              Professional cleaning services in Ahmedabad & Gandhinagar. Expert sofa, carpet, mattress, chair cleaning and AC water jet services.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/918000262644"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.65_0.19_145)] text-white transition-all hover:scale-110 hover:bg-[oklch(0.60_0.19_145)]"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/magical_sofa_cleaning?igsh=MW42bHIweG9oZDV0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.60_0.18_330)] via-[oklch(0.58_0.19_350)] to-[oklch(0.56_0.20_20)] text-white transition-all hover:scale-110 hover:opacity-90"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-muted-foreground transition-colors hover:text-primary">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-muted-foreground transition-colors hover:text-primary">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#areas" className="text-muted-foreground transition-colors hover:text-primary">
                  Areas Served
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-muted-foreground transition-colors hover:text-primary">
                  Reviews
                </a>
              </li>
              <li>
                <a 
                  href="https://share.google/55laKjuHyGqn4ikkO" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <SiGoogle className="h-3.5 w-3.5" />
                  <span>Google Business Profile</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+918000262644"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <InlineIcon icon={Phone} />
                  <span>+91 80002 62644</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <InlineIcon icon={MapPin} />
                <span>Nikol, Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <InlineIcon icon={Clock} />
                <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Get Started</h3>
            <p className="text-sm text-muted-foreground">
              Book your appointment today and experience professional cleaning services!
            </p>
            <div className="space-y-3">
              <a
                href="tel:+918000262644"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-5 py-3 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg"
              >
                <Phone className="h-4 w-4 stroke-[2.5]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918000262644"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.19_145)] to-[oklch(0.55_0.22_145)] px-5 py-3 text-sm font-bold text-white shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg"
              >
                <SiWhatsapp className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t-2 border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MAGICAL SERVICE. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary transition-colors hover:text-accent"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
