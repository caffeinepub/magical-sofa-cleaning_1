import { useScrollReveal } from "../../hooks/useScrollReveal";
import { MapPin, CheckCircle } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";

const AREAS = [
  "Satellite", "Bopal", "Prahlad Nagar", "Vastrapur", "Navrangpura",
  "Maninagar", "Gota", "Chandkheda", "Motera", "Thaltej",
  "SG Highway", "Gandhinagar", "Nikol", "Vastral", "Naranpura",
];

export default function ServiceCoverageBanner() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-18"
      style={{ background: "var(--section-sage)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-premium-lg">
            <img
              src="/assets/generated/service-coverage-writing.dim_1400x500.jpg"
              alt="Service Coverage Ahmedabad"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold font-body">
                {t.serviceCoverage.chipText}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
              {t.coverage.title}
            </h2>
            <p className="text-muted-foreground mb-6 font-body">
              {t.coverage.desc}
            </p>

            {/* Area chips */}
            <div className="flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-1.5 bg-white border border-border rounded-full px-3 py-1.5 shadow-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  <span className="text-xs font-medium text-foreground font-body">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
