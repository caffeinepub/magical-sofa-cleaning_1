import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Star, ExternalLink } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";

const REVIEWS = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent sofa cleaning service! My 5-year-old sofa looks brand new. Very professional team.",
    date: "2 weeks ago",
    avatar: "PS",
  },
  {
    name: "Rahul Patel",
    rating: 5,
    text: "Best cleaning service in Ahmedabad. They cleaned my carpet and mattress perfectly. Highly recommended!",
    date: "1 month ago",
    avatar: "RP",
  },
  {
    name: "Meera Joshi",
    rating: 5,
    text: "Very satisfied with the service. The team was punctual, professional and did an amazing job.",
    date: "3 weeks ago",
    avatar: "MJ",
  },
  {
    name: "Amit Shah",
    rating: 5,
    text: "Great service at reasonable price. My sofa smells fresh and looks clean. Will book again!",
    date: "1 month ago",
    avatar: "AS",
  },
  {
    name: "Kavita Desai",
    rating: 5,
    text: "Wonderful experience! They used eco-friendly products and the results were outstanding.",
    date: "2 months ago",
    avatar: "KD",
  },
  {
    name: "Suresh Modi",
    rating: 5,
    text: "Professional team, on-time service, and excellent results. Best sofa cleaning in Ahmedabad!",
    date: "3 months ago",
    avatar: "SM",
  },
];

export default function GoogleReviewsSection() {
  const { t } = useI18n();
  const cardsRef = useScrollReveal<HTMLDivElement>({
    staggerSelector: ".review-card",
    staggerDelay: 120,
  });

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20"
      style={{ background: "var(--section-lavender)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold font-body">
              {t.reviews.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
            {t.reviews.title}
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground font-body">4.9</span>
            <span className="text-muted-foreground font-body">
              230+ {t.reviews.reviewsLabel}
            </span>
          </div>
          <p className="text-muted-foreground font-body text-sm">
            {t.reviews.onGoogle}
          </p>
        </div>

        {/* Review Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="review-card bg-white rounded-2xl border border-border p-5 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 font-body">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground font-body text-sm truncate">{review.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground font-body flex-shrink-0">{review.date}</span>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://share.google/fbDwfH8GXo2UXRzij"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200 shadow-premium font-body"
          >
            <ExternalLink className="w-4 h-4" />
            {t.reviews.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
