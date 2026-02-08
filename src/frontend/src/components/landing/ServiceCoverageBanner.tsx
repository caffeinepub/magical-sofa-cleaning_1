import { MapPin } from 'lucide-react';
import { useI18n } from '@/i18n/useI18n';

export default function ServiceCoverageBanner() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-6 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
              <MapPin className="h-4 w-4 stroke-[2.5]" />
              <span className="text-sm font-medium">{t.serviceCoverage.chipText}</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {t.serviceCoverage.heading}
            </h2>
          </div>

          {/* Banner Image */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-lg">
            <img
              src="/assets/generated/service-coverage-writing.dim_1400x500.jpg"
              alt="Service coverage areas in Ahmedabad and Gandhi Nagar - Professional residential cleaning services including flats, bungalows, offices, and hospitals"
              className="h-auto w-full object-contain"
              width="1400"
              height="500"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Optional Caption */}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {t.serviceCoverage.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
