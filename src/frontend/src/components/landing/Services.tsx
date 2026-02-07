import { Sofa, Wind, Armchair, Sparkles, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import IconBadge from '@/components/common/IconBadge';
import SofaPriceCalculator from './SofaPriceCalculator';

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
    description: 'Transform your carpets with our advanced dry and wet cleaning technology. Our specialized treatment removes deep-seated dirt, stains, and allergens from all carpet types, leaving them fresh, vibrant, and safe for your family.',
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
    description: 'Experience healthier sleep with our professional mattress deep cleaning and sanitization service. We eliminate dust mites, allergens, bacteria, and stubborn stains using advanced equipment and eco-friendly solutions for all mattress types.',
    price: '₹599',
    featured: true,
    themeKey: 'mattress',
  },
  {
    icon: Wind,
    title: 'AC Water Jet Service in Ahmedabad',
    description: 'Keep your AC running efficiently with our comprehensive maintenance solutions. From water jet cleaning and foam jet service to repair, installation, uninstallation, and gas refilling—we handle all your AC needs for split and window units with expert care.',
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
            Professional sofa cleaning near me and across Ahmedabad & Gandhinagar—offering carpet, chair, mattress cleaning and AC services with affordable rates and same-day availability
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
                  <div className={`absolute right-0 top-0 rounded-bl-xl ${theme.popularBg} px-3 py-1.5 text-xs font-bold text-white shadow-premium`}>
                    Popular
                  </div>
                )}
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <IconBadge icon={service.icon} size="sm" variant={theme.iconVariant} />
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight lg:text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed lg:text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {service.acServices ? (
                    <div className={`space-y-2 rounded-xl border-2 ${theme.pricingBorder} ${theme.pricingBg} p-3`}>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Available Services:
                      </p>
                      <ul className="space-y-1.5">
                        {service.acServices.map((acService, idx) => (
                          <li key={idx} className="flex items-center justify-between text-xs lg:text-sm">
                            <span className="font-medium text-foreground">{acService.name}</span>
                            <span className={`font-bold ${theme.priceText}`}>{acService.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className={`flex items-center justify-between rounded-xl border-2 ${theme.pricingBorder} ${theme.pricingBg} p-3`}>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:text-sm">
                        Starting at
                      </span>
                      <span className={`text-xl font-bold ${theme.priceText} lg:text-2xl`}>
                        {service.price}
                      </span>
                    </div>
                  )}
                  <Badge variant="outline" className={`w-full justify-center border-2 ${theme.badgeBorder} ${theme.badgeText} py-1.5 text-xs font-bold`}>
                    Same-Day Service Available
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
