import { Phone, Sparkles, Clock, Calendar } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden lg:min-h-[85vh]">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/sofa-hero.dim_1920x900.png"
          alt="Professional Sofa Cleaning Services in Ahmedabad - Before and After Results"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 text-center md:px-6 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Sofa Cleaning Services in Ahmedabad
            <span className="mt-3 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Carpet, Mattress & AC Services
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium text-white/95 drop-shadow-md sm:text-lg md:text-xl lg:text-2xl">
            Expert Sofa Cleaning Services in Ahmedabad at ₹90/ft. When you search for sofa cleaning near me, we're your trusted local choice serving all areas across Ahmedabad & Gandhinagar including Nikol, Naroda, Satellite, SG Highway with same-day service and affordable rates.
          </p>
          
          {/* Hygiene & Quick Dry Highlights - Professional Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <div className="hero-chip">
              <Sparkles className="h-4 w-4 stroke-[2.5] text-accent" />
              <span>Hygienic & Sanitized</span>
            </div>
            <div className="hero-chip hero-chip-primary">
              <Clock className="h-4 w-4 stroke-[2.5] text-primary" />
              <span>Dries in ~2 Hours</span>
            </div>
            <div className="hero-chip">
              <Sparkles className="h-4 w-4 stroke-[2.5] text-accent" />
              <span>Thorough Cleaning</span>
            </div>
          </div>
          
          {/* Professional CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <a
              href="#appointment"
              className="hero-cta hero-cta-accent group"
            >
              <Calendar className="h-4 w-4 stroke-[2.5] transition-transform group-hover:scale-110 lg:h-5 lg:w-5" />
              <span>Book Appointment</span>
            </a>
            <a
              href="tel:+918000262644"
              className="hero-cta hero-cta-primary group"
            >
              <Phone className="h-4 w-4 stroke-[2.5] transition-transform group-hover:scale-110 lg:h-5 lg:w-5" />
              <span>Call: 8000262644</span>
            </a>
            <a
              href="https://wa.me/918000262644"
              className="hero-cta hero-cta-whatsapp group"
            >
              <SiWhatsapp className="h-4 w-4 transition-transform group-hover:scale-110 lg:h-5 lg:w-5" />
              <span>WhatsApp</span>
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
