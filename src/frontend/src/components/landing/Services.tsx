import { Sofa, Wind, Armchair, Sparkles, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import IconBadge from '@/components/common/IconBadge';
import SofaPriceCalculator from './SofaPriceCalculator';

const services = [
  {
    icon: Sofa,
    title: 'Sofa Cleaning',
    description: 'Professional deep shampoo cleaning for fabric, leather, and velvet sofas. We restore your furniture to like-new condition with eco-friendly products.',
    price: '₹90/ft',
    featured: true,
    variant: 'primary' as const,
  },
  {
    icon: Layers,
    title: 'Carpet Cleaning',
    description: 'Specialized dry and wet cleaning for all carpet types. Perfect for offices and homes seeking fresh, clean environments.',
    price: '₹15/sq ft',
    featured: false,
    variant: 'primary' as const,
  },
  {
    icon: Armchair,
    title: 'Office Chair Cleaning',
    description: 'Expert cleaning for office chairs, dining chairs, and all seating furniture. Deep cleaning removes stains and odors effectively.',
    price: '₹100-₹150',
    featured: false,
    variant: 'primary' as const,
  },
  {
    icon: Sparkles,
    title: 'Mattress Cleaning',
    description: 'Deep cleaning and sanitization for all mattress types. Removes dust mites, allergens, and stains for healthier sleep.',
    price: '₹599',
    featured: true,
    variant: 'secondary' as const,
  },
  {
    icon: Wind,
    title: 'AC Water Jet Service',
    description: 'Complete AC maintenance including water jet cleaning, foam jet service, repair, installation, uninstallation, and gas refilling for split and window units.',
    price: 'Multiple Services',
    featured: false,
    variant: 'secondary' as const,
    acServices: [
      { name: 'Water Jet Service', price: '₹499' },
      { name: 'Water Foam Jet Service', price: '₹599' },
      { name: 'AC Repair', price: 'Starting ₹200' },
      { name: 'AC Installation', price: '₹1499' },
      { name: 'AC Uninstallation', price: '₹599' },
      { name: 'AC Gas Refilling', price: '₹3499' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-background to-primary/5 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Our Premium Services
          </h2>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Professional Sofa Cleaning Services in Ahmedabad, carpet, chair, mattress cleaning and AC services across Ahmedabad & Gandhinagar with affordable rates and same-day availability
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 transition-all hover:shadow-premium-lg ${
                service.featured ? 'border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-premium' : 'border-primary/20 hover:border-primary/30'
              }`}
            >
              {service.featured && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-gradient-to-r from-primary to-primary/80 px-3 py-1 text-xs font-bold text-primary-foreground shadow-premium">
                  POPULAR
                </div>
              )}
              <CardHeader className="space-y-3 pb-3">
                <IconBadge 
                  icon={service.icon} 
                  size="sm"
                  variant={service.variant}
                  className="transition-all group-hover:scale-110 group-hover:shadow-premium"
                />
                <div className="space-y-1.5">
                  <CardTitle className="text-lg font-bold tracking-tight lg:text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed lg:text-sm">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2.5 pb-4">
                {service.acServices ? (
                  <div className="space-y-1.5 rounded-lg border border-primary/20 bg-primary/5 p-2.5">
                    {service.acServices.map((acService, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground">{acService.name}</span>
                        <Badge variant="outline" className="border-primary/30 bg-background text-xs font-bold text-primary">
                          {acService.price}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-3 py-2.5">
                    <span className="text-xs font-semibold text-muted-foreground">Starting at</span>
                    <span className="text-lg font-bold text-primary lg:text-xl">{service.price}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sofa Price Calculator */}
        <div className="mt-10">
          <SofaPriceCalculator />
        </div>
      </div>
    </section>
  );
}
