import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/sofa-hero.dim_1920x900.png"
          alt="Professional Sofa Cleaning"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Expert Sofa & AC Cleaning Services
            <span className="mt-2 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              નિષ્ણાત સોફા અને AC સફાઈ સેવાઓ
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
            Professional cleaning services in Ahmedabad & Gandhinagar. Transform your home with our premium care.
            <span className="mt-2 block">
              અમદાવાદ અને ગાંધીનગરમાં વ્યાવસાયિક સફાઈ સેવાઓ. અમારી પ્રીમિયમ સંભાળથી તમારા ઘરને બદલો.
            </span>
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <a
              href="tel:+918000262644"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-2xl sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: 8000262644 | હમણાં કૉલ કરો</span>
            </a>
            <a
              href="https://wa.me/918000262644"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[oklch(0.65_0.19_145)] px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[oklch(0.60_0.19_145)] hover:shadow-2xl sm:w-auto"
            >
              <SiWhatsapp className="h-5 w-5" />
              <span>WhatsApp Booking | વોટ્સએપ બુકિંગ</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="oklch(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
