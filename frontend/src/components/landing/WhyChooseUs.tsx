import { Leaf, Zap, Award, ShieldCheck, ThumbsUp, MapPin, Star } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const FEATURE_KEYS = [
  {
    icon: Leaf,
    titleKey: "ecoTitle",
    descKey: "ecoDesc",
    color: "from-green-50 to-green-100/60",
    iconColor: "text-green-600",
    borderColor: "border-green-200",
  },
  {
    icon: Zap,
    titleKey: "sameDayTitle",
    descKey: "sameDayDesc",
    color: "from-yellow-50 to-yellow-100/60",
    iconColor: "text-yellow-600",
    borderColor: "border-yellow-200",
  },
  {
    icon: Award,
    titleKey: "goldStandardTitle",
    descKey: "goldStandardDescription",
    color: "from-amber-50 to-amber-100/60",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    icon: ShieldCheck,
    titleKey: "certifiedTitle",
    descKey: "certifiedDesc",
    color: "from-blue-50 to-blue-100/60",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: ThumbsUp,
    titleKey: "satisfactionTitle",
    descKey: "satisfactionDesc",
    color: "from-purple-50 to-purple-100/60",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    icon: MapPin,
    titleKey: "coverageTitle",
    descKey: "coverageDesc",
    color: "from-rose-50 to-rose-100/60",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
  },
];

export default function WhyChooseUs() {
  const { t } = useI18n();
  const cardsRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: ".feature-card",
    staggerDelay: 120,
  });

  const wcu = t.whyChooseUs as Record<string, string>;

  const STATS = [
    { value: "1000+", label: wcu.statCustomers ?? "Happy Customers" },
    { value: "230+", label: wcu.statReviews ?? "Google Reviews" },
    { value: "5+", label: wcu.statYears ?? "Years Experience" },
    { value: "100%", label: wcu.statSatisfaction ?? "Satisfaction" },
  ];

  return (
    <section
      id="why-us"
      className="py-16 sm:py-20"
      style={{ background: "var(--section-peach)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold font-body">{t.whyChooseUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* Feature Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {FEATURE_KEYS.map((feature) => {
            const Icon = feature.icon;
            const title = wcu[feature.titleKey] ?? feature.titleKey;
            const desc = wcu[feature.descKey] ?? "";
            return (
              <div
                key={feature.titleKey}
                className={`feature-card bg-gradient-to-br ${feature.color} rounded-2xl border ${feature.borderColor} p-5 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm mb-3">
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-foreground font-body mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-border p-5 text-center shadow-premium"
            >
              <div className="text-3xl font-bold text-primary font-body mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
