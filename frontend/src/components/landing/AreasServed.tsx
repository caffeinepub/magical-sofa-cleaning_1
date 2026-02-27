import { useScrollReveal } from "../../hooks/useScrollReveal";
import { MapPin, MessageCircle, Star } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";

const PRIORITY_AREAS = [
  "Nikol", "Naroda", "Bapunagar", "Hanspura", "Odhav",
  "Kathwada", "Nana Chiloda", "Krishna Nagar", "Kuber Nagar",
];

const OTHER_AREAS = [
  "Vastral", "Amraiwadi", "Vatva", "Maninagar", "Isanpur",
  "Bopal", "Satellite", "Prahlad Nagar", "Vejalpur", "Jodhpur",
  "Thaltej", "Chandkheda", "Motera", "Sabarmati", "Ranip",
  "Gota", "Sola", "Memnagar", "Navrangpura", "Paldi",
  "Gandhinagar", "Sector 21", "Sector 23",
];

export default function AreasServed() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="py-16 sm:py-20"
      style={{ background: "var(--section-rose)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold font-body">
              {t.areasServed.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
            {t.areasServed.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            {t.areasServed.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Priority Areas */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-premium">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <h3 className="font-bold text-foreground font-body">
                {t.areasServed.priority}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRIORITY_AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-medium font-body"
                >
                  <MapPin className="w-3 h-3" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Other Areas */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-premium">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <h3 className="font-bold text-foreground font-body">
                {t.areasServed.other}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {OTHER_AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1 bg-muted text-muted-foreground border border-border rounded-full px-3 py-1 text-xs font-medium font-body"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4 text-sm font-body">
            {t.areasServed.notListed}
          </p>
          <a
            href="https://wa.me/918000262644"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg font-body"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            {t.areasServed.askUs}
          </a>
        </div>
      </div>
    </section>
  );
}
