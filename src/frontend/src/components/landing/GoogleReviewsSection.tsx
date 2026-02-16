import { Star, ExternalLink } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function GoogleReviewsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const reviewsRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: '.review-card',
    staggerDelay: 150,
  });

  return (
    <section id="reviews" className="bg-gradient-to-b from-background to-muted/30 py-12 md:py-16 lg:py-20" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Trusted by hundreds of satisfied customers across Ahmedabad & Gandhinagar
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="premium-box space-y-6 p-6 md:p-8">
            {/* Google Rating Display */}
            <div className="flex flex-col items-center gap-4 border-b-2 border-border pb-6">
              <div className="flex items-center gap-3">
                <SiGoogle className="h-10 w-10 text-[oklch(0.55_0.20_25)]" />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-foreground">5-Star</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-accent stroke-accent"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">210+ Reviews</p>
                </div>
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-4" ref={reviewsRef}>
              <div className="review-card rounded-lg border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-4">
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent stroke-accent"
                    />
                  ))}
                </div>
                <p className="mb-2 text-sm leading-relaxed text-foreground">
                  "Excellent service! My sofa looks brand new after their deep cleaning. Very professional team and affordable rates."
                </p>
                <p className="text-xs font-semibold text-muted-foreground">- Rajesh P., Nikol</p>
              </div>

              <div className="review-card rounded-lg border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-4">
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent stroke-accent"
                    />
                  ))}
                </div>
                <p className="mb-2 text-sm leading-relaxed text-foreground">
                  "Best carpet cleaning service in Ahmedabad! They removed all the tough stains and the carpet dried quickly. Highly recommended!"
                </p>
                <p className="text-xs font-semibold text-muted-foreground">- Priya S., Satellite</p>
              </div>

              <div className="review-card rounded-lg border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-4">
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent stroke-accent"
                    />
                  ))}
                </div>
                <p className="mb-2 text-sm leading-relaxed text-foreground">
                  "Amazing mattress cleaning service! My mattress feels fresh and clean. The team was punctual and very professional."
                </p>
                <p className="text-xs font-semibold text-muted-foreground">- Amit K., Naroda</p>
              </div>
            </div>

            {/* CTA to Google Reviews */}
            <div className="pt-4 text-center">
              <a
                href="https://share.google/55laKjuHyGqn4ikkO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg md:text-base"
              >
                <SiGoogle className="h-4 w-4" />
                <span>View All Reviews on Google</span>
                <ExternalLink className="h-4 w-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
