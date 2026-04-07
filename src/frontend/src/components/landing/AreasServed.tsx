import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useI18n } from "../../i18n/I18nProvider";

const PRIORITY_AREAS = [
  "Nikol",
  "Naroda",
  "Bapunagar",
  "Hanspura",
  "Odhav",
  "Kathwada",
  "Nana Chiloda",
  "Krishna Nagar",
  "Kuber Nagar",
  "Vastral",
  "Nava Naroda",
  "Saijpur Bogha",
];

const AHMEDABAD_EAST = [
  "Amraiwadi",
  "Rakhial",
  "Khokhara",
  "Ghodasar",
  "Vatva",
  "Maninagar",
  "Isanpur",
  "Hatkeshwar",
  "Jashoda Nagar",
  "Narol",
  "Lambha",
  "Danilimda",
  "Behrampura",
  "Meghaninagar",
  "Saraspur",
  "Thakkarbapa Nagar",
  "Rabari Colony",
  "Nikol Gam",
  "Naroda Road",
  "Kathwada GIDC",
  "Odhav GIDC",
  "Khodiar Nagar",
  "Vallabh Nagar",
  "Youngmen Society",
  "New India Colony",
  "Satyam Nagar",
  "Arvind Park",
  "Kadva Patidar Society",
  "Panchamrut Bunglows",
  "Avkar Society",
];

const AHMEDABAD_OLD_CITY = [
  "Kalupur",
  "Raipur",
  "Khadia",
  "Jamalpur",
  "Dudheshwar",
  "Asarwa",
  "Shaherkotda",
  "Shahibaug",
];

const AHMEDABAD_NORTH = [
  "Sabarmati",
  "Ranip",
  "New Ranip",
  "Chandkheda",
  "Motera",
  "Hansol",
  "Gota",
  "Chandlodiya",
  "Vaishnodevi Circle",
  "Jagatpur",
  "Zundal",
];

const AHMEDABAD_WEST = [
  "Satellite",
  "Bodakdev",
  "Thaltej",
  "S G Highway",
  "Science City",
  "Sola",
  "Gurukul",
  "Memnagar",
  "Navrangpura",
  "Usmanpura",
  "Drive-In",
  "Ashram Road",
  "Ghatlodia",
  "Naranpura",
  "Chanakyapuri",
  "S P Ring Road",
];

const AHMEDABAD_SOUTH = [
  "Paldi",
  "Ambawadi",
  "Vasna",
  "Juhapura",
  "Sarkhej",
  "Vejalpur",
  "Bopal",
  "South Bopal",
  "Shela",
  "Shilaj",
  "Ghuma",
  "Prahlad Nagar",
  "Jodhpur",
];

const GANDHINAGAR_AREAS = [
  "Sector 1",
  "Sector 2",
  "Sector 3",
  "Sector 4",
  "Sector 5",
  "Sector 6",
  "Sector 7",
  "Sector 8",
  "Sector 9",
  "Sector 10",
  "Sector 11",
  "Sector 12",
  "Sector 13",
  "Sector 14",
  "Sector 15",
  "Sector 16",
  "Sector 17",
  "Sector 18",
  "Sector 19",
  "Sector 20",
  "Sector 21",
  "Sector 22",
  "Sector 23",
  "Sector 24",
  "Sector 25",
  "Sector 26",
  "Sector 27",
  "Sector 28",
  "Sector 29",
  "Sector 30",
  "Adalaj",
  "Kudasan",
  "Randesan",
  "Sargasan",
  "Raysan",
  "Koba",
  "Gift City",
  "Infocity",
  "Chiloda",
  "Bhat",
  "Pethapur",
  "Vavol",
  "Kalol",
  "Chhatral",
  "Mansa",
  "Dehgam",
];

type AreaGroup = {
  label: string;
  areas: string[];
  color: string;
  border: string;
};

const AREA_GROUPS: AreaGroup[] = [
  {
    label: "⭐ Priority Areas",
    areas: PRIORITY_AREAS,
    color: "bg-primary/10 text-primary",
    border: "border-primary/20",
  },
  {
    label: "🏙️ Ahmedabad East",
    areas: AHMEDABAD_EAST,
    color: "bg-orange-50 text-orange-700",
    border: "border-orange-200",
  },
  {
    label: "🕌 Old City",
    areas: AHMEDABAD_OLD_CITY,
    color: "bg-amber-50 text-amber-700",
    border: "border-amber-200",
  },
  {
    label: "🧭 Ahmedabad North",
    areas: AHMEDABAD_NORTH,
    color: "bg-sky-50 text-sky-700",
    border: "border-sky-200",
  },
  {
    label: "🌆 Ahmedabad West",
    areas: AHMEDABAD_WEST,
    color: "bg-violet-50 text-violet-700",
    border: "border-violet-200",
  },
  {
    label: "🌿 Ahmedabad South",
    areas: AHMEDABAD_SOUTH,
    color: "bg-green-50 text-green-700",
    border: "border-green-200",
  },
  {
    label: "🏛️ Gandhinagar",
    areas: GANDHINAGAR_AREAS,
    color: "bg-teal-50 text-teal-700",
    border: "border-teal-200",
  },
];

export default function AreasServed() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal<HTMLElement>();

  const totalAreas = AREA_GROUPS.reduce((sum, g) => sum + g.areas.length, 0);

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="py-16 sm:py-20"
      style={{ background: "var(--section-rose)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold font-body">
              {t.areasServed.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
            {t.areasServed.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body mb-2">
            {t.areasServed.subtitle}
          </p>
          <p className="text-sm font-semibold text-primary font-body">
            Serving {totalAreas}+ areas across Ahmedabad &amp; Gandhinagar
          </p>
        </div>

        {/* Area Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {AREA_GROUPS.map((group) => (
            <div
              key={group.label}
              className="bg-white rounded-2xl border border-border p-5 shadow-premium"
            >
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                <h3 className="font-bold text-foreground font-body text-sm">
                  {group.label}
                </h3>
                <span className="ml-auto text-xs text-muted-foreground font-body">
                  {group.areas.length} areas
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.areas.map((area) => (
                  <span
                    key={area}
                    className={`inline-flex items-center gap-1 ${group.color} border ${group.border} rounded-full px-2.5 py-0.5 text-xs font-medium font-body`}
                  >
                    <MapPin className="w-2.5 h-2.5" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4 text-sm font-body">
            {t.areasServed.notListed}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918000262644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg font-body btn-animate"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
              }}
            >
              <MessageCircle className="w-5 h-5 icon-vibrate" />
              {t.areasServed.askUs}
            </a>
            <a
              href="tel:+918000262644"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg font-body btn-animate"
              style={{
                background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
                boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4)",
              }}
            >
              <Phone className="w-5 h-5 icon-vibrate" />
              Call: 8000 2626 44
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
