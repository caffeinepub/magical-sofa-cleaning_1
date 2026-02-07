import { MapPin } from 'lucide-react';

const areas = [
  'Ahmedabad',
  'Gandhinagar',
  'Nikol',
  'Naroda',
  'Bapunagar',
  'Vastral',
  'Maninagar',
  'Satellite',
];

export default function AreasServed() {
  return (
    <section id="areas" className="bg-muted/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Areas We Serve
            <span className="mt-2 block text-2xl sm:text-3xl">
              અમે જે વિસ્તારોમાં સેવા આપીએ છીએ
            </span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Providing professional cleaning services across Ahmedabad & Gandhinagar
            <span className="mt-1 block">
              અમદાવાદ અને ગાંધીનગરમાં વ્યાવસાયિક સફાઈ સેવાઓ પ્રદાન કરીએ છીએ
            </span>
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="group flex items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-semibold text-foreground transition-colors group-hover:text-primary">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don't see your area? Call us at{' '}
              <a href="tel:+918000262644" className="font-semibold text-primary hover:underline">
                8000262644
              </a>{' '}
              to check availability
              <span className="mt-1 block">
                તમારો વિસ્તાર દેખાતો નથી? ઉપલબ્ધતા તપાસવા માટે અમને{' '}
                <a href="tel:+918000262644" className="font-semibold text-primary hover:underline">
                  8000262644
                </a>{' '}
                પર કૉલ કરો
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
