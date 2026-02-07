import { Sofa, Wind, Armchair, Sparkles, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Sofa,
    title: 'Sofa Cleaning | સોફા સફાઈ',
    description: 'Professional deep shampoo cleaning for all types of sofas including fabric, leather, and velvet. We restore your furniture to like-new condition.',
    descriptionGuj: 'ફેબ્રિક, લેધર અને વેલ્વેટ સહિત તમામ પ્રકારના સોફા માટે વ્યાવસાયિક ડીપ શેમ્પૂ સફાઈ. અમે તમારા ફર્નિચરને નવા જેવી સ્થિતિમાં પુનઃસ્થાપિત કરીએ છીએ.',
    price: 'From ₹99/Seat | ₹99/સીટથી',
    featured: true,
  },
  {
    icon: Layers,
    title: 'Carpet Cleaning | કાર્પેટ સફાઈ',
    description: 'Specialized dry and wet cleaning for all types of carpets. Perfect for offices and homes seeking a fresh, clean environment.',
    descriptionGuj: 'તમામ પ્રકારના કાર્પેટ માટે વિશિષ્ટ ડ્રાય અને વેટ ક્લીનિંગ. તાજા, સ્વચ્છ વાતાવરણની શોધમાં ઓફિસો અને ઘરો માટે યોગ્ય.',
    price: 'Competitive | સ્પર્ધાત્મક',
    featured: false,
  },
  {
    icon: Armchair,
    title: 'Chair Cleaning | ખુરશી સફાઈ',
    description: 'Expert cleaning for office chairs, dining chairs, and all types of seating furniture. Deep cleaning that removes stains and odors.',
    descriptionGuj: 'ઓફિસ ખુરશીઓ, ડાઇનિંગ ખુરશીઓ અને તમામ પ્રકારના બેઠક ફર્નિચર માટે નિષ્ણાત સફાઈ. ડાઘ અને ગંધને દૂર કરતી ડીપ ક્લીનિંગ.',
    price: 'Affordable | પોસાય તેવું',
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Mattress Cleaning | ગાદલું સફાઈ',
    description: 'Deep cleaning and sanitization for mattresses. Removes dust mites, allergens, and stains for a healthier sleep environment.',
    descriptionGuj: 'ગાદલા માટે ડીપ ક્લીનિંગ અને સેનિટાઇઝેશન. તંદુરસ્ત ઊંઘના વાતાવરણ માટે ધૂળના જીવાણુઓ, એલર્જન અને ડાઘને દૂર કરે છે.',
    price: 'Best Value | શ્રેષ્ઠ મૂલ્ય',
    featured: false,
  },
  {
    icon: Wind,
    title: 'AC Water Jet Service | AC વોટર જેટ સર્વિસ',
    description: 'Complete AC maintenance with high-pressure water jet cleaning and gas filling for both split and window units. Fast and reliable service.',
    descriptionGuj: 'સ્પ્લિટ અને વિન્ડો બંને યુનિટ માટે હાઇ-પ્રેશર વોટર જેટ ક્લીનિંગ અને ગેસ ફિલિંગ સાથે સંપૂર્ણ AC જાળવણી. ઝડપી અને વિશ્વસનીય સેવા.',
    price: 'Best Rates | શ્રેષ્ઠ દરો',
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Premium Services
            <span className="mt-2 block text-2xl sm:text-3xl md:text-4xl">
              અમારી પ્રીમિયમ સેવાઓ
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional cleaning solutions tailored to your needs in Ahmedabad & Gandhinagar
            <span className="mt-1 block">
              અમદાવાદ અને ગાંધીનગરમાં તમારી જરૂરિયાતો અનુસાર વ્યાવસાયિક સફાઈ ઉકેલો
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all hover:shadow-xl ${
                  service.featured ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    POPULAR | લોકપ્રિય
                  </div>
                )}
                <CardHeader className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl leading-snug">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                    <span className="mt-2 block">
                      {service.descriptionGuj}
                    </span>
                  </CardDescription>
                  <div className="pt-2">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All services include professional equipment, eco-friendly products, and satisfaction guarantee
            <span className="mt-1 block">
              તમામ સેવાઓમાં વ્યાવસાયિક સાધનો, ઇકો-ફ્રેન્ડલી ઉત્પાદનો અને સંતોષની ગેરંટી શામેલ છે
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
