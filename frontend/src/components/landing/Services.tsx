import { useRef } from "react";
import { Sofa, Wind, Layers, BedDouble, Star, CheckCircle } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SofaPriceCalculator from "./SofaPriceCalculator";

const SERVICE_CARDS = [
  {
    icon: Sofa,
    key: "sofa",
    emoji: "🛋️",
    features: ["Deep Steam Clean", "Stain Removal", "Deodorize"],
    color: "from-blue-50 to-blue-100/60",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Wind,
    key: "ac",
    emoji: "❄️",
    features: ["Filter Clean", "Coil Service", "Gas Check"],
    color: "from-cyan-50 to-cyan-100/60",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-200",
  },
  {
    icon: Layers,
    key: "carpet",
    emoji: "🏠",
    features: ["Shampoo Wash", "Dry Clean", "Sanitize"],
    color: "from-amber-50 to-amber-100/60",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    icon: BedDouble,
    key: "mattress",
    emoji: "🛏️",
    features: ["UV Treatment", "Dust Mite Kill", "Deodorize"],
    color: "from-purple-50 to-purple-100/60",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
];

export default function Services() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: ".service-card",
    staggerDelay: 120,
  });

  const serviceNames: Record<string, string> = {
    sofa: t.services.sofaTitle,
    ac: t.services.acTitle,
    carpet: t.services.carpetTitle,
    mattress: t.services.mattressTitle,
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-20"
      style={{ background: "var(--section-mint)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold font-body">{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Service Cards */}
          <div ref={cardsRef} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICE_CARDS.map((service) => {
              const Icon = service.icon;
              const name = serviceNames[service.key] ?? service.key;
              return (
                <div
                  key={service.key}
                  className={`service-card bg-gradient-to-br ${service.color} rounded-2xl border ${service.borderColor} p-5 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 shimmer-card`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Icon className={`w-5 h-5 ${service.iconColor}`} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground font-body text-base">
                        {service.emoji} {name}
                      </h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Price Calculator */}
          <div className="lg:col-span-1">
            <SofaPriceCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
