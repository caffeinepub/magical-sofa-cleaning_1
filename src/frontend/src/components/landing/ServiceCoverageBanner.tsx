import { MapPin } from 'lucide-react';

export default function ServiceCoverageBanner() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Service Coverage Areas</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              We Serve Across Ahmedabad & Gandhi Nagar
            </h2>
          </div>

          {/* Banner Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50 bg-card">
            <img
              src="/assets/generated/service-coverage-english.dim_1400x500.jpg"
              alt="Service coverage areas in Ahmedabad and Gandhi Nagar - Professional residential cleaning services including flats, bungalows, offices, and hospitals"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Optional Caption */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Professional doorstep cleaning services available across all major areas
          </p>
        </div>
      </div>
    </section>
  );
}
