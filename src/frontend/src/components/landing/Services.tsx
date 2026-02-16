import { Sofa, Wind, Armchair, Sparkles, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import IconBadge from '@/components/common/IconBadge';
import SofaPriceCalculator from './SofaPriceCalculator';
import { useI18n } from '@/i18n/useI18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ServiceTheme {
  cardBorder: string;
  cardBg: string;
  iconVariant: 'default' | 'primary' | 'secondary' | 'accent' | 'muted';
  pricingBg: string;
  pricingBorder: string;
  priceText: string;
  badgeBorder: string;
  badgeText: string;
  popularBg: string;
}

const serviceThemes: Record<string, ServiceTheme> = {
  sofa: {
    cardBorder: 'border-primary/40',
    cardBg: 'bg-gradient-to-br from-primary/5 to-primary/10',
    iconVariant: 'primary',
    pricingBg: 'bg-primary/5',
    pricingBorder: 'border-primary/30',
    priceText: 'text-primary',
    badgeBorder: 'border-primary/40',
    badgeText: 'text-primary',
    popularBg: 'bg-gradient-to-r from-primary to-primary/80',
  },
  carpet: {
    cardBorder: 'border-accent/40',
    cardBg: 'bg-gradient-to-br from-accent/5 to-accent/10',
    iconVariant: 'accent',
    pricingBg: 'bg-accent/5',
    pricingBorder: 'border-accent/30',
    priceText: 'text-accent',
    badgeBorder: 'border-accent/40',
    badgeText: 'text-accent',
    popularBg: 'bg-gradient-to-r from-accent to-accent/80',
  },
  chair: {
    cardBorder: 'border-primary/40',
    cardBg: 'bg-gradient-to-br from-primary/5 to-primary/10',
    iconVariant: 'primary',
    pricingBg: 'bg-primary/5',
    pricingBorder: 'border-primary/30',
    priceText: 'text-primary',
    badgeBorder: 'border-primary/40',
    badgeText: 'text-primary',
    popularBg: 'bg-gradient-to-r from-primary to-primary/80',
  },
  mattress: {
    cardBorder: 'border-primary/40',
    cardBg: 'bg-gradient-to-br from-primary/5 to-primary/10',
    iconVariant: 'primary',
    pricingBg: 'bg-primary/5',
    pricingBorder: 'border-primary/30',
    priceText: 'text-primary',
    badgeBorder: 'border-primary/40',
    badgeText: 'text-primary',
    popularBg: 'bg-gradient-to-r from-primary to-primary/80',
  },
  ac: {
    cardBorder: 'border-primary/40',
    cardBg: 'bg-gradient-to-br from-primary/5 to-primary/10',
    iconVariant: 'primary',
    pricingBg: 'bg-primary/5',
    pricingBorder: 'border-primary/30',
    priceText: 'text-primary',
    badgeBorder: 'border-primary/40',
    badgeText: 'text-primary',
    popularBg: 'bg-gradient-to-r from-primary to-primary/80',
  },
};

export default function Services() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal<HTMLElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: '.service-card',
    staggerDelay: 150,
  });

  const services = [
    {
      icon: Sofa,
      title: t.services.sofaTitle,
      description: t.services.sofaDescription,
      price: '₹90/ft',
      featured: true,
      themeKey: 'sofa',
    },
    {
      icon: Layers,
      title: t.services.carpetTitle,
      description: t.services.carpetDescription,
      price: '₹15/sq ft',
      featured: false,
      themeKey: 'carpet',
    },
    {
      icon: Armchair,
      title: t.services.chairTitle,
      description: t.services.chairDescription,
      price: '₹100-₹150',
      featured: false,
      themeKey: 'chair',
    },
    {
      icon: Sparkles,
      title: t.services.mattressTitle,
      description: t.services.mattressDescription,
      price: '₹599',
      featured: true,
      themeKey: 'mattress',
    },
    {
      icon: Wind,
      title: t.services.acTitle,
      description: t.services.acDescription,
      price: '₹499',
      featured: false,
      themeKey: 'ac',
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-background to-primary/5 py-12 md:py-16 lg:py-20" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            {t.services.heading}
          </h2>
          <p className="text-balance text-sm text-muted-foreground md:text-base lg:text-lg">
            {t.services.description}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" ref={cardsRef}>
          {services.map((service, index) => {
            const theme = serviceThemes[service.themeKey];
            return (
              <Card
                key={index}
                className={`service-card group relative overflow-hidden border-2 transition-all hover:shadow-premium-lg ${
                  service.featured 
                    ? `${theme.cardBorder} ${theme.cardBg} shadow-premium` 
                    : `${theme.cardBorder} hover:border-opacity-60`
                }`}
              >
                {service.featured && (
                  <div className={`absolute right-0 top-0 rounded-bl-xl ${theme.popularBg} px-3 py-1.5 text-xs font-bold text-white shadow-premium`}>
                    {t.services.popular}
                  </div>
                )}
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <IconBadge icon={service.icon} size="sm" variant={theme.iconVariant} />
                  </div>
                  <CardTitle className="text-balance text-lg font-bold leading-tight lg:text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-balance text-xs leading-relaxed lg:text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className={`flex items-center justify-between rounded-xl border-2 ${theme.pricingBorder} ${theme.pricingBg} p-3`}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:text-sm">
                      {t.services.startingAt}
                    </span>
                    <span className={`text-xl font-bold ${theme.priceText} lg:text-2xl`}>
                      {service.price}
                    </span>
                  </div>
                  <Badge variant="outline" className={`w-full justify-center border-2 ${theme.badgeBorder} ${theme.badgeText} py-1.5 text-xs font-bold`}>
                    {t.services.sameDayAvailable}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sofa Price Calculator */}
        <div className="mt-8">
          <SofaPriceCalculator />
        </div>
      </div>
    </section>
  );
}
