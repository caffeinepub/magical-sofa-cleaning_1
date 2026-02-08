import { Phone, Sparkles, Clock, Calendar, Star, CheckCircle2 } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useI18n } from '@/i18n/useI18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden lg:min-h-[85vh]">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/sofa-hero.dim_1920x900.png"
          alt="Professional Sofa Cleaning Services in Ahmedabad - Before and After Results"
          className="h-full w-full object-cover"
          width="1920"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 text-center md:px-6 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            {t.hero.title}
            <span className="mt-3 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {t.hero.subtitle}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-base font-medium text-white/95 drop-shadow-md sm:text-lg md:text-xl lg:text-2xl">
            {t.hero.description}
          </p>
          
          {/* Hygiene & Quick Dry Highlights - Professional Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <div className="hero-chip">
              <Sparkles className="h-4 w-4 stroke-[2.5] text-accent" />
              <span>{t.hero.chipHygienic}</span>
            </div>
            <div className="hero-chip hero-chip-primary">
              <Clock className="h-4 w-4 stroke-[2.5] text-primary" />
              <span>{t.hero.chipQuickDry}</span>
            </div>
            <div className="hero-chip">
              <Sparkles className="h-4 w-4 stroke-[2.5] text-accent" />
              <span>{t.hero.chipThorough}</span>
            </div>
            <div className="hero-chip hero-chip-primary">
              <Star className="h-4 w-4 fill-accent stroke-accent" />
              <span>{t.hero.chipReviews}</span>
            </div>
          </div>

          {/* Why Choose Magical Service - Compact Block */}
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-accent/10 to-accent/5 p-6 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
              {t.hero.whyChooseMagicalHeading}
            </h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 stroke-[2.5] text-accent" />
                <span>{t.hero.whyChooseMagicalPoint1}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 stroke-[2.5] text-accent" />
                <span>{t.hero.whyChooseMagicalPoint2}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 stroke-[2.5] text-accent" />
                <span>{t.hero.whyChooseMagicalPoint3}</span>
              </li>
            </ul>
          </div>
          
          {/* Professional CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <a
              href="tel:+918000262644"
              className="hero-cta hero-cta-accent"
            >
              <Phone className="h-5 w-5 stroke-[2.5]" />
              <span>{t.hero.ctaCall}</span>
            </a>
            <a
              href="https://wa.me/918000262644"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta hero-cta-whatsapp"
            >
              <SiWhatsapp className="h-5 w-5" />
              <span>{t.hero.ctaWhatsApp}</span>
            </a>
          </div>
          
          {/* Same-Day Service Badge */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <Calendar className="h-5 w-5 stroke-[2.5] text-accent" />
            <span className="text-sm font-semibold text-white/90 md:text-base">
              {t.hero.sameDayService}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
