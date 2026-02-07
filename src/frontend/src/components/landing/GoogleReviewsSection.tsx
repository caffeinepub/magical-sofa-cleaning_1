import { Star, ExternalLink } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';

export default function GoogleReviewsSection() {
  return (
    <section id="reviews" className="border-t-2 border-primary/20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary shadow-xs">
            <SiGoogle className="h-3.5 w-3.5" />
            <span>Google Business Profile</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">
            210+ Happy Customers
          </h2>
          <p className="mb-6 text-xs text-muted-foreground md:text-sm lg:text-base">
            Our customers love our professional cleaning services. Read their reviews on Google.
          </p>
          <a
            href="https://share.google/Nex4Ll5OOIXAVyXjZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-premium-lg md:px-7 md:text-base"
          >
            <SiGoogle className="h-4 w-4" />
            <span>View All Reviews on Google</span>
            <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Star Rating Display */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border-2 border-primary/30 bg-card p-6 shadow-premium-lg md:p-7">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-secondary stroke-secondary drop-shadow-md md:h-7 md:w-7"
                />
              ))}
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground md:text-4xl">5.0</p>
              <p className="mt-1.5 text-xs text-muted-foreground md:text-sm">
                Based on 210+ Google Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
