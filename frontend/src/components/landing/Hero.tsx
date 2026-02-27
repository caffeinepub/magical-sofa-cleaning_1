import { useRef } from "react";
import { Phone, MessageCircle, Star, Shield, Award, Clock } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  const heroRef = useRef<HTMLElement>(null);

  const phoneNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hello! I want to book a sofa cleaning service. Please share availability."
  );

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden">
      {/* TOP BANNER: Best Sofa Cleaning Ahmedabad */}
      <div
        className="relative w-full py-3 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.30 0.18 255) 0%, oklch(0.42 0.18 255) 50%, oklch(0.62 0.16 75) 100%)"
        }}
      >
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
            animation: "shimmer-sweep 3s linear infinite"
          }}
        />
        <div className="relative flex items-center justify-center gap-2 flex-wrap">
          <span className="text-yellow-300 text-lg">⭐</span>
          <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide font-body">
            Best Sofa Cleaning Ahmedabad
          </span>
          <span className="text-yellow-300 text-lg">⭐</span>
          <span className="hidden sm:inline text-white/80 text-sm font-body ml-2">
            — Trusted by 1000+ Families
          </span>
        </div>
      </div>

      {/* Hero Image Banner */}
      <div className="relative w-full" style={{ minHeight: "420px" }}>
        <img
          src="/assets/generated/sofa-hero-before-after.dim_1920x900.png"
          alt="Professional Sofa Cleaning Service Ahmedabad"
          className="w-full object-cover"
          style={{ maxHeight: "520px", minHeight: "320px" }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,20,60,0.82) 0%, rgba(10,20,60,0.55) 50%, rgba(10,20,60,0.25) 100%)"
          }}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-4">
                <Award className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-xs font-semibold font-body tracking-wide">
                  #1 Rated Cleaning Service
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3 font-display">
                {t.hero?.title ?? "Professional Sofa Cleaning"}
                <span className="block text-yellow-300 mt-1">
                  {t.hero?.subtitle ?? "in Ahmedabad"}
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/85 text-sm sm:text-base mb-6 leading-relaxed font-body max-w-md">
                {t.hero?.description ?? "Deep cleaning with eco-friendly products. Restore your sofa's freshness today!"}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-semibold text-sm font-body">4.9/5</span>
                <span className="text-white/70 text-sm font-body">(230+ Reviews)</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg font-body"
                  style={{
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)"
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Book on WhatsApp
                </a>
                <a
                  href={`tel:+${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm border-2 border-white/60 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95 font-body"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {[
              { icon: <Shield className="w-4 h-4 text-primary" />, text: "Eco-Friendly" },
              { icon: <Award className="w-4 h-4 text-gold" />, text: "Certified Experts" },
              { icon: <Clock className="w-4 h-4 text-primary" />, text: "Same Day Service" },
              { icon: <Star className="w-4 h-4 text-yellow-500" />, text: "230+ Reviews" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {badge.icon}
                <span className="text-xs sm:text-sm font-semibold text-foreground font-body whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
