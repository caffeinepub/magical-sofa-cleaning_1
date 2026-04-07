import LogoWithBacking from "@/components/common/LogoWithBacking";
import { useI18n } from "@/i18n/I18nProvider";
import { Calendar, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiInstagram } from "react-icons/si";

// Google G SVG icon component
function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Google"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Header() {
  const { t, locale, setLocale } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.header.navServices, href: "#services" },
    { label: t.header.navWhyChooseUs, href: "#why-choose-us" },
    { label: t.header.navAreas, href: "#areas" },
    { label: t.header.navReviews, href: "#reviews" },
    { label: t.header.navFAQ, href: "#faq" },
  ];

  const googleProfileUrl = "https://share.google/ncfZaY0xx8ZFxgXK8";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b border-white/10" : "shadow-md"
      }`}
      style={{ background: "oklch(0.18 0.06 255)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="Magical Service - Home"
          >
            <LogoWithBacking size="sm" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-white leading-tight">
                {t.header.logoText}
              </p>
              <p className="text-xs text-blue-200 leading-tight">
                {t.header.logoSubtext}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-blue-100 hover:text-yellow-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-xs">
              {(["en", "hi", "gu"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={`px-2 py-1 rounded-md font-semibold transition-colors ${
                    locale === lang
                      ? "bg-yellow-400 text-gray-900"
                      : "text-blue-200 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label={`Switch to ${lang} language`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Google Profile */}
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/20 bg-white hover:bg-gray-100 text-gray-800 text-xs font-semibold btn-animate shadow-sm transition-all duration-200"
              aria-label="View Google Business Profile"
              title="View on Google"
            >
              <GoogleIcon size={15} />
              <span className="hidden xl:inline">Google Profile</span>
            </a>

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
              style={{
                background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
              }}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 icon-vibrate" />
              {t.header.whatsapp}
            </a>

            {/* Book Now */}
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 text-sm font-bold btn-animate shadow-md"
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
              }}
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
              {(["en", "hi", "gu"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={`px-1.5 py-1 rounded-md font-semibold transition-colors ${
                    locale === lang
                      ? "bg-yellow-400 text-gray-900"
                      : "text-blue-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Google Profile mobile icon */}
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white hover:bg-gray-100 btn-animate shadow-sm"
              aria-label="View Google Business Profile"
            >
              <GoogleIcon size={16} />
            </a>

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
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-900 text-xs font-bold btn-animate shadow-md"
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
              }}
              aria-label="Book appointment"
            >
              <Calendar className="w-3.5 h-3.5" />
              {t.header.bookNow}
            </a>

            {/* Menu toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            className="lg:hidden border-t border-white/10 py-4 space-y-1"
            aria-label="Mobile navigation"
            style={{ background: "oklch(0.14 0.05 255)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-blue-100 hover:text-yellow-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Google Profile */}
            <div className="px-4 pt-2">
              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-white hover:bg-gray-100 text-gray-800 text-sm font-semibold btn-animate shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <GoogleIcon size={18} />
                Google Profile
              </a>
            </div>

            {/* Mobile WhatsApp */}
            <div className="px-4 pt-1">
              <a
                href="https://wa.me/918000262644"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-white text-sm font-semibold btn-animate"
                style={{
                  background:
                    "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                }}
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
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-gray-900 text-sm font-bold btn-animate shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                {t.header.callNow}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
