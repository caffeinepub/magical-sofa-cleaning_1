import { Phone, Languages } from 'lucide-react';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import LogoWithBacking from '@/components/common/LogoWithBacking';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useI18n } from '@/i18n/useI18n';
import { Locale } from '@/i18n/translations';

export default function Header() {
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:h-20">
        <a href="#home" className="flex items-center gap-3 transition-transform hover:scale-105">
          <LogoWithBacking size="md" />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight text-foreground lg:text-xl">
              {t.header.logoText} <span className="text-primary">SERVICE</span>
            </span>
            <span className="text-xs text-muted-foreground lg:text-sm">{t.header.logoSubtext}</span>
          </div>
        </a>
        
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <a href="#home" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            {t.header.navHome}
          </a>
          <a href="#services" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            {t.header.navServices}
          </a>
          <a href="#why-choose-us" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            {t.header.navWhyChooseUs}
          </a>
          <a href="#appointment" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            {t.header.navBookNow}
          </a>
          <a href="#areas" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            {t.header.navAreas}
          </a>
          <a href="#reviews" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary lg:text-base">
            {t.header.navReviews}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <Select value={locale} onValueChange={(value) => setLocale(value as Locale)}>
            <SelectTrigger 
              className="h-9 w-[110px] gap-1.5 border-border/50 bg-background/50 text-xs font-medium lg:h-10 lg:w-[120px] lg:text-sm"
              aria-label={t.language.label}
            >
              <Languages className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">{t.language.english}</SelectItem>
              <SelectItem value="hi">{t.language.hindi}</SelectItem>
              <SelectItem value="gu">{t.language.gujarati}</SelectItem>
            </SelectContent>
          </Select>
          
          <a
            href="tel:+918000262644"
            className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm ring-1 ring-primary/20 transition-all hover:bg-primary/90 hover:shadow-md sm:flex lg:px-6 lg:py-3"
            aria-label={t.header.callNow}
          >
            <Phone className="h-4 w-4 stroke-[2.5]" />
            <span>{t.header.callNow}</span>
          </a>
          <a
            href="https://wa.me/918000262644"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.whatsapp}
            className="flex items-center gap-2 rounded-lg bg-[oklch(0.65_0.19_145)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-[oklch(0.65_0.19_145)]/20 transition-all hover:bg-[oklch(0.60_0.20_145)] hover:shadow-md lg:px-5 lg:py-3"
          >
            <SiWhatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">{t.header.whatsapp}</span>
          </a>
          <a
            href="https://www.instagram.com/magical_sofa_cleaning?igsh=MW42bHIweG9oZDV0bQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.instagram}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-[oklch(0.60_0.18_330)] via-[oklch(0.58_0.19_350)] to-[oklch(0.56_0.20_20)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-[oklch(0.60_0.18_330)]/20 transition-all hover:opacity-90 hover:shadow-md lg:px-5 lg:py-3"
          >
            <SiInstagram className="h-4 w-4" />
            <span className="hidden sm:inline">{t.header.instagram}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
