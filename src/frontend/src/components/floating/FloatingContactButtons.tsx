import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 left-4 z-40 flex flex-col gap-3 lg:bottom-8 lg:left-5">
      <a
        href="https://wa.me/918000262644"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.19_145)] text-white shadow-premium-lg transition-all hover:scale-110 hover:bg-[oklch(0.60_0.19_145)] hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.5)] lg:h-16 lg:w-16"
        aria-label="WhatsApp"
      >
        <SiWhatsapp className="h-7 w-7 lg:h-8 lg:w-8" />
      </a>
      <a
        href="tel:+918000262644"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-premium-lg transition-all hover:scale-110 hover:bg-primary/90 hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.5)] lg:h-16 lg:w-16"
        aria-label="Call"
      >
        <Phone className="h-7 w-7 stroke-[2.5] lg:h-8 lg:w-8" />
      </a>
    </div>
  );
}
