import { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MessageCircle } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { useI18n } from '@/i18n/I18nProvider';
import LogoWithBacking from '@/components/common/LogoWithBacking';

export default function Header() {
  const { t, locale, setLocale } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.header.navServices, href: '#services' },
    { label: t.header.navWhyChooseUs, href: '#why-choose-us' },
    { label: t.header.navAreas, href: '#areas' },
    { label: t.header.navReviews, href: '#reviews' },
    { label: t.header.navFAQ, href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-premium border-b border-border/60'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0" aria-label="Magical Service - Home">
            <LogoWithBacking size="sm" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-foreground leading-tight">{t.header.logoText}</p>
              <p className="text-xs text-muted-foreground leading-tight">{t.header.logoSubtext}</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-xs">
              {(['en', 'hi', 'gu'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`px-2 py-1 rounded-md font-medium transition-colors ${
                    locale === lang
                      ? 'bg-primary/15 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label={`Switch to ${lang} language`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/magical_sofa_cleaning?igsh=MW42bHIweG9oZDV0bQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gradient-to-br from-[#f09433] to-[#bc1888] text-white btn-animate shadow-sm"
              aria-label="Follow us on Instagram"
            >
              <SiInstagram className="w-4 h-4 icon-vibrate" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918000262644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold btn-animate shadow-sm"
              style={{ background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)' }}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 icon-vibrate" />
              {t.header.whatsapp}
            </a>

            {/* Book Now */}
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/85 text-primary-foreground text-sm font-semibold btn-animate shadow-premium"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4 icon-vibrate" />
              {t.header.bookNow}
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Language switcher mobile */}
            <div className="flex items-center gap-0.5 text-xs">
              {(['en', 'hi', 'gu'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`px-1.5 py-1 rounded-md font-medium transition-colors ${
                    locale === lang
                      ? 'bg-primary/15 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Instagram mobile */}
            <a
              href="https://www.instagram.com/magical_sofa_cleaning?igsh=MW42bHIweG9oZDV0bQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gradient-to-br from-[#f09433] to-[#bc1888] text-white btn-animate"
              aria-label="Follow us on Instagram"
            >
              <SiInstagram className="w-4 h-4" />
            </a>

            {/* Book Now mobile */}
            <a
              href="#appointment"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/85 text-primary-foreground text-xs font-semibold btn-animate shadow-premium"
              aria-label="Book appointment"
            >
              <Calendar className="w-3.5 h-3.5" />
              {t.header.bookNow}
            </a>

            {/* Menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/60 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile WhatsApp */}
            <div className="px-4 pt-2">
              <a
                href="https://wa.me/918000262644"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-white text-sm font-semibold btn-animate"
                style={{ background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                {t.header.whatsapp}
              </a>
            </div>

            {/* Mobile Call */}
            <div className="px-4 pt-1">
              <a
                href="tel:+918000262644"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/85 text-primary-foreground text-sm font-semibold btn-animate shadow-premium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                {t.header.callNow}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
