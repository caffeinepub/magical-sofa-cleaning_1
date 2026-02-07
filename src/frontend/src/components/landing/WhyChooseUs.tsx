import { Leaf, Cog, Award, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import IconBadge from '@/components/common/IconBadge';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Chemicals',
    description: 'We use only environmentally safe, non-toxic cleaning solutions that are gentle on your furniture and safe for your family and pets.',
  },
  {
    icon: Cog,
    title: 'German Machines Technology',
    description: 'Advanced German-engineered cleaning equipment ensures deep, thorough cleaning with superior results and faster drying times.',
  },
  {
    icon: Award,
    title: 'Gold-Standard Equipment',
    description: 'Premium, industry-leading tools and machinery deliver professional-grade cleaning that exceeds expectations every time.',
  },
  {
    icon: UserCheck,
    title: 'Certified Experts',
    description: 'Our trained and certified professionals bring years of experience and expertise to every cleaning job, ensuring quality service.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Experience the difference with our premium cleaning services backed by cutting-edge technology and eco-friendly practices
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10 transition-all hover:border-accent/60 hover:shadow-premium-lg"
            >
              <CardHeader className="space-y-3 pb-4">
                <div className="flex justify-center">
                  <IconBadge 
                    icon={feature.icon} 
                    size="md" 
                    variant="primary"
                  />
                </div>
                <CardTitle className="text-center text-lg font-bold leading-tight lg:text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-xs leading-relaxed text-muted-foreground lg:text-sm">
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
