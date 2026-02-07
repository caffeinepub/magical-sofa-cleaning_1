import { MapPin } from 'lucide-react';
import IconBadge from '@/components/common/IconBadge';

const ahmedabadAreas: string[] = [
  // Priority areas (specified first in exact order)
  'Nikol',
  'Naroda',
  'Bapunagar',
  'Hanspura',
  'Odhav',
  'Kuber Nagar',
  'Vastral',
  
  // Other Ahmedabad areas
  'Nana Chiloda',
  'Kathwada',
  'Rakhial',
  'Maninagar',
  'Isanpur',
  'Vatva',
  'Narol',
  'Satellite',
  'Vastrapur',
  'Bodakdev',
  'Thaltej',
  'Ambawadi',
  'Prahladnagar',
  'Jodhpur',
  'Bopal',
  'Ghuma',
  'Shilaj',
  'Sola',
  'Science City',
  'SG Highway',
  'Gota',
  'Chandkheda',
  'Motera',
  'Sabarmati',
  'Ranip',
  'Ghatlodia',
  'Vejalpur',
  'Jivraj Park',
  'Memnagar',
  'Navrangpura',
  'CG Road',
  'Ashram Road',
  'Paldi',
  'Ellis Bridge',
  'Nehru Bridge',
  'Relief Road',
  'Kalupur',
  'Jamalpur',
  'Shahpur',
  'Dariapur',
  'Raipur',
];

const gandhinagarAreas: string[] = [
  'Sector 1-30',
  'Kudasan',
  'Raysan',
  'Pethapur',
  'Kalol',
  'Mansa',
  'Adalaj',
  'Koba',
  'Vavol',
  'Infocity',
  'GIFT City',
];

export default function AreasServed() {
  return (
    <section id="areas" className="bg-gradient-to-b from-muted/20 to-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex">
            <IconBadge icon={MapPin} size="sm" variant="accent" />
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Areas We Serve in Ahmedabad
          </h2>
          <p className="mb-8 text-sm text-muted-foreground md:text-base lg:text-lg">
            Professional sofa cleaning services in Ahmedabad, carpet, mattress, chair cleaning and AC services across all major areas in Ahmedabad & Gandhinagar
          </p>
        </div>

        <div className="mx-auto max-w-7xl space-y-10">
          {/* Ahmedabad Areas */}
          <div>
            <h3 className="mb-5 text-center text-xl font-bold text-primary sm:text-2xl">
              Ahmedabad
            </h3>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3">
              {ahmedabadAreas.map((area, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center rounded-xl border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5 p-3 text-center shadow-xs transition-all hover:border-accent/50 hover:bg-gradient-to-br hover:from-card hover:to-accent/10 hover:shadow-premium-gold lg:p-3.5"
                >
                  <span className="text-xs font-semibold text-foreground transition-colors group-hover:text-accent sm:text-sm">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gandhinagar Areas */}
          <div>
            <h3 className="mb-5 text-center text-xl font-bold text-accent sm:text-2xl">
              Gandhinagar
            </h3>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3">
              {gandhinagarAreas.map((area, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center rounded-xl border-2 border-accent/40 bg-gradient-to-br from-card to-accent/5 p-3 text-center shadow-xs transition-all hover:border-accent/60 hover:bg-gradient-to-br hover:from-card hover:to-accent/15 hover:shadow-premium-gold lg:p-3.5"
                >
                  <span className="text-xs font-semibold text-foreground transition-colors group-hover:text-accent sm:text-sm">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="mb-4 text-sm text-muted-foreground md:text-base">
              Don't see your area? We serve all of Ahmedabad & Gandhinagar!
            </p>
            <a
              href="tel:+918000262644"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg md:px-7 md:py-3.5 md:text-base"
            >
              <MapPin className="h-4 w-4 stroke-[2.5]" />
              <span>Call to Confirm Service in Your Area</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
