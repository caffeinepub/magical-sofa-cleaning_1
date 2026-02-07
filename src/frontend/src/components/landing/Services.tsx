import { Sofa, Wind, Armchair, Sparkles, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import IconBadge from '@/components/common/IconBadge';
import SofaPriceCalculator from './SofaPriceCalculator';

interface ServiceTheme {
  cardBorder: string;
  cardBg: string;
  iconBg: string;
  iconFg: string;
  pricingBg: string;
  pricingBorder: string;
  priceText: string;
  badgeBorder: string;
  badgeText: string;
  popularBg: string;
}

const serviceThemes: Record<string, ServiceTheme> = {
  sofa: {
    cardBorder: 'border-service-sofa/40',
    cardBg: 'bg-gradient-to-br from-service-sofa/5 to-service-sofa/10',
    iconBg: 'bg-service-sofa',
    iconFg: 'text-service-sofa-foreground',
    pricingBg: 'bg-service-sofa/5',
    pricingBorder: 'border-service-sofa/20',
    priceText: 'text-service-sofa',
    badgeBorder: 'border-service-sofa/30',
    badgeText: 'text-service-sofa',
    popularBg: 'bg-gradient-to-r from-service-sofa to-service-sofa/80',
  },
  carpet: {
    cardBorder: 'border-service-carpet/40',
    cardBg: 'bg-gradient-to-br from-service-carpet/5 to-service-carpet/10',
    iconBg: 'bg-service-carpet',
    iconFg: 'text-service-carpet-foreground',
    pricingBg: 'bg-service-carpet/5',
    pricingBorder: 'border-service-carpet/20',
    priceText: 'text-service-carpet',
    badgeBorder: 'border-service-carpet/30',
    badgeText: 'text-service-carpet',
    popularBg: 'bg-gradient-to-r from-service-carpet to-service-carpet/80',
  },
  chair: {
    cardBorder: 'border-service-chair/40',
    cardBg: 'bg-gradient-to-br from-service-chair/5 to-service-chair/10',
    iconBg: 'bg-service-chair',
    iconFg: 'text-service-chair-foreground',
    pricingBg: 'bg-service-chair/5',
    pricingBorder: 'border-service-chair/20',
    priceText: 'text-service-chair',
    badgeBorder: 'border-service-chair/30',
    badgeText: 'text-service-chair',
    popularBg: 'bg-gradient-to-r from-service-chair to-service-chair/80',
  },
  mattress: {
    cardBorder: 'border-service-mattress/40',
    cardBg: 'bg-gradient-to-br from-service-mattress/5 to-service-mattress/10',
    iconBg: 'bg-service-mattress',
    iconFg: 'text-service-mattress-foreground',
    pricingBg: 'bg-service-mattress/5',
    pricingBorder: 'border-service-mattress/20',
    priceText: 'text-service-mattress',
    badgeBorder: 'border-service-mattress/30',
    badgeText: 'text-service-mattress',
    popularBg: 'bg-gradient-to-r from-service-mattress to-service-mattress/80',
  },
  ac: {
    cardBorder: 'border-service-ac/40',
    cardBg: 'bg-gradient-to-br from-service-ac/5 to-service-ac/10',
    iconBg: 'bg-service-ac',
    iconFg: 'text-service-ac-foreground',
    pricingBg: 'bg-service-ac/5',
    pricingBorder: 'border-service-ac/20',
    priceText: 'text-service-ac',
    badgeBorder: 'border-service-ac/30',
    badgeText: 'text-service-ac',
    popularBg: 'bg-gradient-to-r from-service-ac to-service-ac/80',
  },
};

const services = [
  {
    icon: Sofa,
    title: 'Sofa Cleaning in Ahmedabad',
    description: 'Professional deep shampoo cleaning for fabric, leather, and velvet sofas in Ahmedabad. We restore your furniture to like-new condition with eco-friendly products.',
    price: '₹90/ft',
    featured: true,
    themeKey: 'sofa',
  },
  {
    icon: Layers,
    title: 'Carpet Cleaning in Ahmedabad',
    description: 'Specialized dry and wet cleaning for all carpet types in Ahmedabad. Perfect for offices and homes seeking fresh, clean environments.',
    price: '₹15/sq ft',
    featured: false,
    themeKey: 'carpet',
  },
  {
    icon: Armchair,
    title: 'Office Chair Cleaning in Ahmedabad',
    description: 'Expert cleaning for office chairs, dining chairs, and all seating furniture in Ahmedabad. Deep cleaning removes stains and odors effectively.',
    price: '₹100-₹150',
    featured: false,
    themeKey: 'chair',
  },
  {
    icon: Sparkles,
    title: 'Mattress Cleaning in Ahmedabad',
    description: 'Deep cleaning and sanitization for all mattress types in Ahmedabad. Removes dust mites, allergens, and stains for healthier sleep.',
    price: '₹599',
    featured: true,
    themeKey: 'mattress',
  },
  {
    icon: Wind,
    title: 'AC Water Jet Service in Ahmedabad',
    description: 'Complete AC maintenance in Ahmedabad including water jet cleaning, foam jet service, repair, installation, uninstallation, and gas refilling for split and window units.',
    price: 'Multiple Services',
    featured: false,
    themeKey: 'ac',
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

// Export service options for reuse in appointment form
export const SERVICE_OPTIONS = [
  { value: 'Sofa Cleaning', label: 'Sofa Cleaning (₹90/ft)' },
  { value: 'Carpet Cleaning', label: 'Carpet Cleaning (₹15/sq ft)' },
  { value: 'Office Chair Cleaning', label: 'Office Chair Cleaning (₹100-₹150)' },
  { value: 'Mattress Cleaning', label: 'Mattress Cleaning (₹599)' },
  { value: 'AC Water Jet Service', label: 'AC Water Jet Service (₹499)' },
  { value: 'AC Water Foam Jet Service', label: 'AC Water Foam Jet Service (₹599)' },
  { value: 'AC Repair', label: 'AC Repair (Starting ₹200)' },
  { value: 'AC Installation', label: 'AC Installation (₹1499)' },
  { value: 'AC Uninstallation', label: 'AC Uninstallation (₹599)' },
  { value: 'AC Gas Refilling', label: 'AC Gas Refilling (₹3499)' },
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-background to-primary/5 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Our Premium Services in Ahmedabad
          </h2>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Professional Sofa Cleaning Services in Ahmedabad, carpet, chair, mattress cleaning and AC services across Ahmedabad & Gandhinagar with affordable rates and same-day availability
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => {
            const theme = serviceThemes[service.themeKey];
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-2 transition-all hover:shadow-premium-lg ${
                  service.featured 
                    ? `${theme.cardBorder} ${theme.cardBg} shadow-premium` 
                    : `${theme.cardBorder} hover:border-opacity-60`
                }`}
              >
                {service.featured && (
                  <div className={`absolute right-0 top-0 rounded-bl-lg ${theme.popularBg} px-3 py-1 text-xs font-bold text-white shadow-premium`}>
                    POPULAR
                  </div>
                )}
                <CardHeader className="space-y-3 pb-3">
                  <div 
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all group-hover:scale-110 group-hover:shadow-premium ${theme.iconBg}`}
                  >
                    <service.icon className={`h-5 w-5 stroke-[2.5] ${theme.iconFg}`} />
                  </div>
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
                    <div className={`space-y-1.5 rounded-lg border ${theme.pricingBorder} ${theme.pricingBg} p-2.5`}>
                      {service.acServices.map((acService, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs lg:text-sm">
                          <span className="font-medium text-muted-foreground">{acService.name}</span>
                          <span className={`font-bold ${theme.priceText}`}>{acService.price}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`rounded-lg border ${theme.pricingBorder} ${theme.pricingBg} p-2.5 text-center`}>
                      <p className={`text-2xl font-bold ${theme.priceText} lg:text-3xl`}>{service.price}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline" className={`border ${theme.badgeBorder} ${theme.badgeText} text-xs`}>
                      Same Day Service
                    </Badge>
                    <Badge variant="outline" className={`border ${theme.badgeBorder} ${theme.badgeText} text-xs`}>
                      Eco-Friendly
                    </Badge>
                  </div>
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
