import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Camera, Star } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";

const PHOTOS = [
  {
    src: "/assets/generated/live-sofa-cleaning-1.dim_1600x1200.jpg",
    alt: "Sofa Cleaning Service",
    label: "Sofa Deep Clean",
  },
  {
    src: "/assets/generated/live-sofa-before-after-1.dim_1600x1200.jpg",
    alt: "Before After Sofa Cleaning",
    label: "Before & After",
  },
  {
    src: "/assets/generated/live-chair-cleaning-1.dim_1600x1200.jpg",
    alt: "Chair Cleaning Service",
    label: "Chair Cleaning",
  },
  {
    src: "/assets/generated/live-carpet-cleaning-1.dim_1600x1200.jpg",
    alt: "Carpet Cleaning Service",
    label: "Carpet Cleaning",
  },
  {
    src: "/assets/generated/live-mattress-cleaning-1.dim_1600x1200.jpg",
    alt: "Mattress Cleaning Service",
    label: "Mattress Cleaning",
  },
  {
    src: "/assets/generated/live-office-chair-cleaning-2.dim_1600x1200.jpg",
    alt: "Office Chair Cleaning",
    label: "Office Chair Clean",
  },
];

export default function LivePhotos() {
  const { t } = useI18n();
  const photosRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: ".photo-card",
    staggerDelay: 100,
  });

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20"
      style={{ background: "var(--section-ivory)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold font-body">
              {t.livePhotos.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
            {t.livePhotos.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            {t.livePhotos.subtitle}
          </p>
        </div>

        {/* Photo Grid */}
        <div ref={photosRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="photo-card relative group rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-xs font-semibold font-body">{photo.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
