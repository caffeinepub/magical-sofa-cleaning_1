import { ArrowRight, Calculator } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";

const PRICE_PER_FOOT = 90;
const MIN_FEET = 5;
const MAX_FEET = 30;

const SERVICES = [
  { id: "sofa-cleaning", label: "Sofa Cleaning", emoji: "🛋️" },
  { id: "chair-cleaning", label: "Chair Cleaning", emoji: "🪑" },
  { id: "carpet-cleaning", label: "Carpet Cleaning", emoji: "🏠" },
  { id: "mattress-cleaning", label: "Mattress Cleaning", emoji: "🛏️" },
];

export default function SofaPriceCalculator() {
  const { t } = useI18n();
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [feet, setFeet] = useState(10);

  const totalPrice = feet * PRICE_PER_FOOT;

  const whatsappMessage = encodeURIComponent(
    `Hello! I want to book ${selectedService.label} for ${feet} feet.\nEstimated Price: \u20b9${totalPrice}\n\nPlease confirm availability. Thank you!`,
  );
  const whatsappUrl = `https://wa.me/918000262644?text=${whatsappMessage}`;

  const sliderPercent = ((feet - MIN_FEET) / (MAX_FEET - MIN_FEET)) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-premium-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-royal-blue-dark px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg font-body">
              {t.calculator?.title ?? "Price Calculator"}
            </h3>
            <p className="text-white/80 text-sm">
              ₹{PRICE_PER_FOOT} per foot • Instant estimate
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Service Selection */}
        <div>
          <p className="block text-sm font-semibold text-foreground mb-3 font-body">
            Select Service
          </p>
          <div className="grid grid-cols-2 gap-2">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-200 font-body ${
                  selectedService.id === service.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                <span className="text-base">{service.emoji}</span>
                <span className="truncate">{service.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feet Range Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-foreground font-body">
              Select Size (Feet)
            </p>
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
              <span className="text-primary font-bold text-lg">{feet}</span>
              <span className="text-primary/70 text-sm font-medium">ft</span>
            </div>
          </div>

          {/* Custom range slider */}
          <div className="relative py-2">
            <input
              type="range"
              min={MIN_FEET}
              max={MAX_FEET}
              step={1}
              value={feet}
              onChange={(e) => setFeet(Number(e.target.value))}
              className="range-slider"
              style={{
                background: `linear-gradient(to right, oklch(0.42 0.18 255) 0%, oklch(0.42 0.18 255) ${sliderPercent}%, oklch(0.88 0.02 240) ${sliderPercent}%, oklch(0.88 0.02 240) 100%)`,
              }}
            />
          </div>

          {/* Min/Max labels */}
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground font-body">
              {MIN_FEET} ft (min)
            </span>
            <span className="text-xs text-muted-foreground font-body">
              {MAX_FEET} ft (max)
            </span>
          </div>

          {/* Foot markers */}
          <div className="flex justify-between mt-2 px-1">
            {[5, 10, 15, 20, 25, 30].map((mark) => (
              <button
                key={mark}
                type="button"
                onClick={() => setFeet(mark)}
                className={`text-xs px-1.5 py-0.5 rounded font-body transition-all ${
                  feet === mark
                    ? "bg-primary text-white font-bold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {mark}
              </button>
            ))}
          </div>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-br from-primary/8 to-gold/10 rounded-2xl p-5 border border-primary/15">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground font-body">
                Estimated Price
              </p>
              <p className="text-xs text-muted-foreground font-body mt-0.5">
                {feet} ft × ₹{PRICE_PER_FOOT}/ft
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary font-body">
                ₹{totalPrice.toLocaleString("en-IN")}
              </div>
              <p className="text-xs text-muted-foreground font-body">
                incl. all charges
              </p>
            </div>
          </div>

          {/* Price breakdown bar */}
          <div className="w-full bg-white/60 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-gold rounded-full transition-all duration-300"
              style={{ width: `${sliderPercent}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground font-body">
              ₹{MIN_FEET * PRICE_PER_FOOT}
            </span>
            <span className="text-xs text-muted-foreground font-body">
              ₹{MAX_FEET * PRICE_PER_FOOT}
            </span>
          </div>
        </div>

        {/* Service info chips */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-200 font-body">
            ✅ Free Inspection
          </span>
          <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200 font-body">
            🚗 Free Pickup
          </span>
          <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-body">
            ⭐ 5-Star Service
          </span>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg font-body"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-white flex-shrink-0"
            role="img"
            aria-label="WhatsApp"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book Now on WhatsApp — ₹{totalPrice.toLocaleString("en-IN")}
          <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-center text-xs text-muted-foreground font-body">
          * Final price may vary based on sofa condition &amp; fabric type
        </p>
      </div>
    </div>
  );
}
