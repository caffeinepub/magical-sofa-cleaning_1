import { Phone, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp, SiInstagram, SiGoogle } from 'react-icons/si';
import InlineIcon from '@/components/common/InlineIcon';

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary/30 bg-gradient-to-b from-muted/30 to-background">
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

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Sofa Cleaning</li>
              <li>Carpet Cleaning</li>
              <li>Mattress Cleaning</li>
              <li>Chair Cleaning</li>
              <li>AC Water Jet Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <InlineIcon icon={Phone} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+918000262644" className="text-muted-foreground transition-colors hover:text-primary">
                  +91 80002 62644
                </a>
              </li>
              <li className="flex items-start gap-2">
                <InlineIcon icon={MapPin} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Serving Ahmedabad & Gandhinagar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <InlineIcon icon={Clock} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Mon - Sun: 8:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 sm:flex-row">
          <a
            href="tel:+918000262644"
            className="premium-box flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg sm:w-auto md:px-7 md:text-base"
          >
            <Phone className="h-4 w-4 stroke-[2.5]" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/918000262644"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-box flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.19_145)] to-[oklch(0.55_0.22_145)] px-6 py-3 text-sm font-bold text-white shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg sm:w-auto md:px-7 md:text-base"
          >
            <SiWhatsapp className="h-4 w-4" />
            <span>Book via WhatsApp</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground md:text-sm">
          <p>© 2026. Built with love using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">caffeine.ai</a>.</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <a href="#home" className="transition-colors hover:text-primary">Home</a>
            <span>•</span>
            <a href="#services" className="transition-colors hover:text-primary">Services</a>
            <span>•</span>
            <a href="#why-choose-us" className="transition-colors hover:text-primary">Why Choose Us</a>
            <span>•</span>
            <a href="#appointment" className="transition-colors hover:text-primary">Book Now</a>
            <span>•</span>
            <a href="#areas" className="transition-colors hover:text-primary">Areas</a>
            <span>•</span>
            <a href="#reviews" className="transition-colors hover:text-primary">Reviews</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
