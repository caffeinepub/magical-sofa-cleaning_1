import { MapPin } from 'lucide-react';
import IconBadge from '@/components/common/IconBadge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ahmedabadAreas: string[] = [
  // Priority areas (specified first in exact order)
  'Nikol',
  'Naroda',
  'Bapunagar',
  'Hanspura',
  'Odhav',
  'Kuber Nagar',
  'Vastral',
  
  // Nikol-Naroda nearby smaller areas
  'Nikol Gam',
  'Nava Naroda',
  'Saijpur Bogha',
  'Khodiar Nagar',
  'Vallabh Nagar',
  'Nana Chiloda',
  
  // Other major Ahmedabad areas (East)
  'Kathwada',
  'Rakhial',
  'Maninagar',
  'Isanpur',
  'Hatkeshwar',
  'Ghodasar',
  'Vatva',
  'Narol',
  'Lambha',
  'Jashoda Nagar',
  'Amraiwadi',
  'Thakkarbapa Nagar',
  'Krishnanagar',
  
  // Central & North areas
  'Meghaninagar',
  'Saraspur',
  'Shaherkotda',
  'Kalupur',
  'Raipur',
  'Khadia',
  'Khokhara',
  'Danilimda',
  'Behrampura',
  'Jamalpur',
  'Dudheshwar',
  'Asarwa',
  'Shahibaug',
  'Sabarmati',
  'Ranip',
  'New Ranip',
  'Chandkheda',
  'Motera',
  'Hansol',
  'Gota',
  'Chandlodiya',
  'Ghatlodia',
  
  // West areas
  'Memnagar',
  'Naranpura',
  'Gurukul',
  'Navrangpura',
  'Usmanpura',
  'Ashram Road',
  'Paldi',
  'Ambawadi',
  'Vasna',
  'Juhapura',
  'Sarkhej',
  'Vejalpur',
  
  // Satellite & SG Highway corridor
  'Satellite',
  'Vastrapur',
  'Bodakdev',
  'Drive-In',
  'Thaltej',
  'SG Highway',
  'Science City',
  'Sola',
  'Chanakyapuri',
  'SP Ring Road',
  'Ghuma',
  'Bopal',
  'South Bopal',
  'Shela',
  'Shilaj',
  'Jagatpur',
  'Vaishnodevi Circle',
  
  // Additional areas
  'Prahladnagar',
  'Jodhpur',
  'Jivraj Park',
  'CG Road',
  'Ellis Bridge',
  'Nehru Bridge',
  'Relief Road',
  'Shahpur',
  'Dariapur',
];

const gandhinagarAreas: string[] = [
  // Sectors
  'Sector 1',
  'Sector 2',
  'Sector 3',
  'Sector 4',
  'Sector 5',
  'Sector 6',
  'Sector 7',
  'Sector 8',
  'Sector 9',
  'Sector 10',
  'Sector 11',
  'Sector 12',
  'Sector 13',
  'Sector 14',
  'Sector 15',
  'Sector 16',
  'Sector 17',
  'Sector 18',
  'Sector 19',
  'Sector 20',
  'Sector 21',
  'Sector 22',
  'Sector 23',
  'Sector 24',
  'Sector 25',
  'Sector 26',
  'Sector 27',
  'Sector 28',
  'Sector 29',
  'Sector 30',
  
  // Major localities
  'Adalaj',
  'Kudasan',
  'Randesan',
  'Sargasan',
  'Raysan',
  'Zundal',
  'Koba',
  'GIFT City',
  'Infocity',
  'Chiloda',
  'Bhat',
  'Pethapur',
  'Vavol',
  'Kalol',
  'Chhatral',
  'Mansa',
  'Dehgam',
];

export default function AreasServed() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const ahmedabadRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: '.area-item',
    staggerDelay: 20,
  });
  const gandhinagarRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: '.area-item',
    staggerDelay: 20,
  });

  return (
    <section id="areas" className="bg-gradient-to-b from-muted/20 to-background py-12 md:py-16 lg:py-20" ref={sectionRef}>
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
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3" ref={ahmedabadRef}>
              {ahmedabadAreas.map((area, index) => (
                <div
                  key={index}
                  className="area-item group flex items-center justify-center rounded-xl border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5 p-3 text-center shadow-xs transition-all hover:border-accent/50 hover:bg-gradient-to-br hover:from-card hover:to-accent/10 hover:shadow-premium-gold lg:p-3.5"
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
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3" ref={gandhinagarRef}>
              {gandhinagarAreas.map((area, index) => (
                <div
                  key={index}
                  className="area-item group flex items-center justify-center rounded-xl border-2 border-accent/40 bg-gradient-to-br from-card to-accent/5 p-3 text-center shadow-xs transition-all hover:border-accent/60 hover:bg-gradient-to-br hover:from-card hover:to-accent/15 hover:shadow-premium-gold lg:p-3.5"
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
