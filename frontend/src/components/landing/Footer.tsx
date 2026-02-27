import { Phone, MessageCircle, MapPin, Clock, Star, Heart } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { useI18n } from "../../i18n/I18nProvider";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Footer() {
  const { t } = useI18n();
  const footerRef = useScrollReveal<HTMLElement>();
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "magical-services-ahmedabad"
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: t.footer.home, id: "home" },
    { label: t.footer.services, id: "services" },
    { label: t.footer.whyChooseUs, id: "why-us" },
    { label: t.footer.bookAppointment, id: "appointment" },
    { label: t.footer.areasServed, id: "areas" },
    { label: t.footer.reviewsLink, id: "reviews" },
    { label: t.footer.faqLink, id: "faq" },
  ];

  const servicesList = [
    t.footer.sofaCleaning,
    t.footer.carpetCleaning,
    t.footer.mattressCleaning,
    t.footer.chairCleaning,
    t.footer.acService,
  ];

  return (
    <footer
      ref={footerRef}
      className="pt-14 pb-6"
      style={{ background: "var(--section-lavender)" }}
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/magical-service-logo-uploaded-v3.dim_512x512.png"
                alt="Magical Services Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 shadow-sm"
              />
              <div>
                <div className="font-bold text-foreground font-body text-base leading-tight">
                  {t.footer.companyName}
                </div>
                <div className="text-xs text-muted-foreground font-body">
                  Best Sofa Cleaning Ahmedabad
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
              {t.footer.tagline}
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground font-body">230+ Reviews</span>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/magical_sofa_cleaning?igsh=MW42bHIweG9oZDV0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918000262644"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-green-600 hover:border-green-400 transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground font-body mb-4 text-sm uppercase tracking-wide">
              {t.footer.ourServices}
            </h4>
            <ul className="space-y-2">
              {servicesList.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground font-body mb-4 text-sm uppercase tracking-wide">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground font-body mb-4 text-sm uppercase tracking-wide">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+918000262644"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +91 80002 62644
              </a>
              <a
                href="https://wa.me/918000262644"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors font-body"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                WhatsApp Us
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{t.footer.servingAreas}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{t.footer.workingHours}</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="tel:+918000262644"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-4 py-2.5 text-xs font-bold text-white shadow-premium transition-all hover:scale-105 btn-animate font-body"
              >
                <Phone className="h-3.5 w-3.5" />
                {t.footer.callNow}
              </a>
              <a
                href="https://wa.me/918000262644"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-white shadow-premium transition-all hover:scale-105 btn-animate font-body"
                style={{ background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)" }}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {t.footer.whatsAppUs}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-body text-center sm:text-left">
            © {year} {t.footer.companyName}. {t.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground font-body flex items-center gap-1">
            {t.footer.builtWith}{" "}
            <Heart className="inline h-3 w-3 fill-rose-500 text-rose-500 mx-0.5" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
