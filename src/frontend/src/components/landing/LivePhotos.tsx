import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const livePhotos = [
  {
    src: '/assets/generated/live-sofa-cleaning-1.dim_1600x1200.jpg',
    alt: 'Professional sofa cleaning service in Ahmedabad - before and after results',
    label: null,
  },
  {
    src: '/assets/generated/live-sofa-before-after-1.dim_1600x1200.jpg',
    alt: 'Sofa cleaning before and after comparison - professional deep cleaning results in Ahmedabad',
    label: 'Sofa Cleaning (Before / After)',
  },
  {
    src: '/assets/generated/live-carpet-cleaning-1.dim_1600x1200.jpg',
    alt: 'Expert carpet cleaning service in Ahmedabad - deep cleaning process',
    label: null,
  },
  {
    src: '/assets/generated/live-mattress-cleaning-1.dim_1600x1200.jpg',
    alt: 'Professional mattress cleaning and sanitization service in Ahmedabad',
    label: null,
  },
  {
    src: '/assets/generated/live-chair-cleaning-1.dim_1600x1200.jpg',
    alt: 'Office chair cleaning service in Ahmedabad - professional deep cleaning',
    label: 'Office Chair Cleaning',
  },
  {
    src: '/assets/generated/live-office-chair-cleaning-2.dim_1600x1200.jpg',
    alt: 'Professional office chair cleaning service - before and after results in Ahmedabad',
    label: 'Office Chair Cleaning',
  },
  {
    src: '/assets/generated/live-ac-water-jet-1.dim_1600x1200.jpg',
    alt: 'AC water jet cleaning service in Ahmedabad - professional AC maintenance',
    label: null,
  },
];

export default function LivePhotos() {
  return (
    <section id="gallery" className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Live Work Photos
          </h2>
          <p className="mb-8 text-sm text-muted-foreground md:text-base lg:text-lg">
            Real photos from our professional cleaning services across Ahmedabad
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {livePhotos.map((photo, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden premium-box premium-box-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {photo.label && (
                  <Badge className="absolute left-3 top-3 border-2 border-accent/40 bg-gradient-to-r from-accent to-accent/80 text-xs font-bold text-accent-foreground shadow-premium-gold backdrop-blur-sm">
                    {photo.label}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
