import { Phone, MessageCircle } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";

export default function FloatingContactButtons() {
  const { t } = useI18n();

  const phoneNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hello! I want to book a sofa cleaning service. Please share availability and pricing."
  );

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp Button */}
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-body">
          {t.floating?.whatsapp ?? "Chat on WhatsApp"}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </div>

        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="float-vibrate float-glow-green flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #1ea952 50%, #0d7a3a 100%)",
          }}
        >
          {/* Shimmer sweep */}
          <div
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer-sweep 2s linear infinite"
            }}
          />
          <MessageCircle className="w-7 h-7 relative z-10" strokeWidth={2} />
        </a>
      </div>

      {/* Call Button */}
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-body">
          {t.floating?.call ?? "Call Us Now"}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </div>

        <a
          href={`tel:+${phoneNumber}`}
          aria-label="Call Us"
          className="float-vibrate float-glow-blue flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.55 0.18 255) 0%, oklch(0.42 0.18 255) 50%, oklch(0.30 0.18 255) 100%)",
            animationDelay: "0.5s"
          }}
        >
          {/* Shimmer sweep */}
          <div
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer-sweep 2s linear infinite",
              animationDelay: "1s"
            }}
          />
          <Phone className="w-6 h-6 relative z-10" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
