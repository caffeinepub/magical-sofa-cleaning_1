import { Award, MessageCircle, Phone, Star } from "lucide-react";
import { useRef } from "react";
import { useI18n } from "../../i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  const heroRef = useRef<HTMLElement>(null);

  const phoneNumber = "918000262644";
  const whatsappMessage = encodeURIComponent(
    "Hello! I want to book a sofa cleaning service. Please share availability.",
  );

  const trustBadges = [
    { icon: "🛡️", text: "Eco-Friendly Products" },
    { icon: "⚡", text: "Same Day Service" },
    { icon: "🏆", text: "Certified Professionals" },
    { icon: "💯", text: "100% Satisfaction" },
  ];

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden">
      {/* TOP BANNER: Best Sofa Cleaning Ahmedabad */}
      <div
        className="relative w-full py-4 px-4 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #b45309 0%, #d97706 40%, #f59e0b 100%)",
        }}
      >
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
            animation: "shimmer-sweep 3s linear infinite",
          }}
        />
        <div className="relative flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white text-xl">⭐</span>
          <span
            className="font-black text-xl sm:text-2xl md:text-3xl tracking-wide font-display"
            style={{
              color: "#1a1a1a",
              textShadow: "0 1px 3px rgba(255,255,255,0.4)",
            }}
          >
            Best Sofa Cleaning Ahmedabad
          </span>
          <span className="text-white text-xl">⭐</span>
        </div>
        <div className="relative mt-1 flex items-center justify-center gap-3 flex-wrap">
          <span className="text-gray-900 text-xs sm:text-sm font-semibold font-body">
            ✓ Trusted by 1000+ Families — 265+ Google Reviews &nbsp;|&nbsp; ✓
            Same Day Service &nbsp;|&nbsp; ✓ Eco-Friendly
          </span>
        </div>
      </div>

      {/* Hero Image Banner */}
      <div className="relative w-full" style={{ minHeight: "420px" }}>
        <img
          src="/assets/generated/sofa-washing-bg.dim_1440x800.png"
          alt="Professional Sofa Washing Service Ahmedabad"
          className="w-full object-cover"
          style={{
            maxHeight: "540px",
            minHeight: "340px",
            objectPosition: "center",
          }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,15,50,0.88) 0%, rgba(8,15,50,0.60) 55%, rgba(8,15,50,0.28) 100%)",
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
                {t.hero?.description ??
                  "Deep cleaning with eco-friendly products. Restore your sofa's freshness today!"}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white font-semibold text-sm font-body">
                  4.9/5
                </span>
                <span className="text-white/70 text-sm font-body">
                  (265+ Reviews)
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg font-body"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
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
                {/* Google Profile CTA */}
                <a
                  href="https://share.google/ncfZaY0xx8ZFxgXK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm border-2 border-white/40 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 hover:scale-105 active:scale-95 font-body"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Google"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div
        className="w-full py-3 px-4"
        style={{ background: "oklch(0.18 0.06 255)" }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-1.5">
                <span className="text-base">{badge.icon}</span>
                <span className="text-blue-100 text-xs font-semibold font-body whitespace-nowrap">
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
