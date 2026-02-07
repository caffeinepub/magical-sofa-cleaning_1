import { Phone, Sparkles, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden lg:min-h-[85vh]">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/sofa-hero.dim_1920x900.png"
          alt="Professional Sofa Cleaning Services in Ahmedabad - Before and After Results"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/55" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 text-center md:px-6 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Sofa Cleaning Services in Ahmedabad
            <span className="mt-3 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Carpet, Mattress & AC Services
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium text-white/95 drop-shadow-lg sm:text-lg md:text-xl lg:text-2xl">
            Expert Sofa Cleaning Services in Ahmedabad at ₹90/ft. Serving all areas across Ahmedabad & Gandhinagar with same-day service and affordable rates.
          </p>
          
          {/* Hygiene & Quick Dry Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <div className="flex items-center gap-2 rounded-full border-2 border-primary/50 bg-primary/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm md:text-sm">
              <Sparkles className="h-4 w-4 stroke-[2.5]" />
              <span>Hygienic & Sanitized</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border-2 border-primary/50 bg-primary/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm md:text-sm">
              <Clock className="h-4 w-4 stroke-[2.5]" />
              <span>Dries in ~2 Hours</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border-2 border-primary/50 bg-primary/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm md:text-sm">
              <Sparkles className="h-4 w-4 stroke-[2.5]" />
              <span>Thorough Cleaning</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <a
              href="tel:+918000262644"
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary via-primary to-primary/90 px-10 py-5 text-sm font-bold text-primary-foreground shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all hover:scale-105 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)] sm:w-auto lg:px-12 lg:py-6 lg:text-base"
            >
              <Phone className="h-4 w-4 stroke-[3] lg:h-5 lg:w-5" />
              <span>Call: 8000262644</span>
            </a>
            <a
              href="https://wa.me/918000262644"
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[oklch(0.65_0.19_145)] to-[oklch(0.55_0.22_145)] px-10 py-5 text-sm font-bold text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all hover:scale-105 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)] sm:w-auto lg:px-12 lg:py-6 lg:text-base"
            >
              <SiWhatsapp className="h-4 w-4 lg:h-5 lg:w-5" />
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
