import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Instagram } from 'lucide-react';
import { useI18n } from '../../i18n/I18nProvider';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LogoWithBacking from '../common/LogoWithBacking';

export default function Header() {
  const { t, locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: t.header.navHome, href: '#home' },
    { label: t.header.navServices, href: '#services' },
    { label: t.header.navWhyChooseUs, href: '#why-choose-us' },
    { label: t.header.navBookNow, href: '#book-now' },
    { label: t.header.navAreas, href: '#areas' },
    { label: t.header.navReviews, href: '#reviews' },
    { label: t.header.navFAQ, href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <LogoWithBacking size="sm" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">{t.header.logoText}</span>
              <span className="text-xs text-muted-foreground">{t.header.logoSubtext}</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <Select value={locale} onValueChange={(value) => setLocale(value as 'en' | 'hi' | 'gu')}>
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">{t.language.english}</SelectItem>
                <SelectItem value="hi">{t.language.hindi}</SelectItem>
                <SelectItem value="gu">{t.language.gujarati}</SelectItem>
              </SelectContent>
            </Select>

            <Button
              asChild
              size="sm"
              className="cta-primary"
            >
              <a href="tel:+918000262644">
                <Phone className="w-4 h-4 mr-2" />
                {t.header.callNow}
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="cta-whatsapp"
            >
              <a href="https://wa.me/918000262644" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.header.whatsapp}
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary/20 hover:bg-primary/5"
            >
              <a
                href="https://www.instagram.com/magical_service_ahmedabad?igsh=MWRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRxZQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 mr-2" />
                {t.header.instagram}
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Language Selector Mobile */}
            <Select value={locale} onValueChange={(value) => setLocale(value as 'en' | 'hi' | 'gu')}>
              <SelectTrigger className="w-[80px] h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="hi">हिं</SelectItem>
                <SelectItem value="gu">ગુ</SelectItem>
              </SelectContent>
            </Select>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-left text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                    <Button
                      asChild
                      className="cta-primary w-full"
                    >
                      <a href="tel:+918000262644">
                        <Phone className="w-4 h-4 mr-2" />
                        {t.header.callNow}
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="cta-whatsapp w-full"
                    >
                      <a href="https://wa.me/918000262644" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t.header.whatsapp}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary/20"
                    >
                      <a
                        href="https://www.instagram.com/magical_service_ahmedabad?igsh=MWRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRqNGRxZQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        {t.header.instagram}
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
