import { Leaf, Cog, Award, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import IconBadge from '@/components/common/IconBadge';
import { useI18n } from '@/i18n/useI18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhyChooseUs() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal<HTMLElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: '.feature-card',
    staggerDelay: 120,
  });

  const features = [
    {
      icon: Leaf,
      title: t.whyChooseUs.ecoFriendlyTitle,
      description: t.whyChooseUs.ecoFriendlyDescription,
    },
    {
      icon: Cog,
      title: t.whyChooseUs.germanMachinesTitle,
      description: t.whyChooseUs.germanMachinesDescription,
    },
    {
      icon: Award,
      title: t.whyChooseUs.goldStandardTitle,
      description: t.whyChooseUs.goldStandardDescription,
    },
    {
      icon: UserCheck,
      title: t.whyChooseUs.certifiedExpertsTitle,
      description: t.whyChooseUs.certifiedExpertsDescription,
    },
  ];

  return (
    <section id="why-choose-us" className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16 lg:py-20" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            {t.whyChooseUs.heading}
          </h2>
          <p className="text-balance text-sm text-muted-foreground md:text-base lg:text-lg">
            {t.whyChooseUs.description}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5" ref={cardsRef}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card group relative overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10 transition-all hover:border-accent/60 hover:shadow-premium-lg"
            >
              <CardHeader className="space-y-3 pb-4">
                <div className="flex justify-center">
                  <IconBadge 
                    icon={feature.icon} 
                    size="md" 
                    variant="primary"
                  />
                </div>
                <CardTitle className="text-balance text-center text-lg font-bold leading-tight lg:text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-balance text-center text-xs leading-relaxed text-muted-foreground lg:text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
