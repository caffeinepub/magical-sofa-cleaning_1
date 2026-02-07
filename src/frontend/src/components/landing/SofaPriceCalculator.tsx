import { useState } from 'react';
import { Calculator, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import IconBadge from '@/components/common/IconBadge';

export default function SofaPriceCalculator() {
  const [sofaSize, setSofaSize] = useState<number>(10);
  const pricePerFoot = 90;
  const estimatedPrice = sofaSize * pricePerFoot;

  return (
    <Card className="premium-box mx-auto max-w-3xl">
      <CardHeader className="space-y-3 pb-5">
        <div className="flex items-center gap-3">
          <IconBadge icon={Calculator} size="sm" variant="accent" />
          <div>
            <CardTitle className="text-xl font-bold text-primary lg:text-2xl">
              Sofa Price Calculator
            </CardTitle>
            <CardDescription className="text-xs lg:text-sm">
              Estimate your sofa cleaning cost instantly
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="sofa-size" className="text-sm font-semibold lg:text-base">
              Sofa Size (in feet)
            </Label>
            <span className="rounded-lg border-2 border-accent/30 bg-accent/10 px-3 py-1 text-lg font-bold text-accent lg:text-xl">
              {sofaSize} ft
            </span>
          </div>
          <Slider
            id="sofa-size"
            min={5}
            max={25}
            step={1}
            value={[sofaSize]}
            onValueChange={(value) => setSofaSize(value[0])}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>5 ft (Small)</span>
            <span>15 ft (Medium)</span>
            <span>25 ft (Large)</span>
          </div>
        </div>

        <div className="premium-box-gold space-y-3 p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-muted-foreground lg:text-base">
              Price per foot:
            </span>
            <span className="text-base font-bold text-accent lg:text-lg">₹{pricePerFoot}</span>
          </div>
          <div className="border-t-2 border-accent/20 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-foreground lg:text-lg">
                Estimated Total:
              </span>
              <span className="text-2xl font-bold text-accent lg:text-3xl">
                ₹{estimatedPrice}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2">
          <a
            href="tel:+918000262644"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg lg:text-base"
          >
            <Phone className="h-4 w-4 stroke-[3]" />
            <span>Call for Booking</span>
          </a>
          <a
            href="https://wa.me/918000262644"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.19_145)] to-[oklch(0.55_0.22_145)] px-5 py-3.5 text-sm font-bold text-white shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg lg:text-base"
          >
            <SiWhatsapp className="h-4 w-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          * Final price may vary based on sofa condition and material type
        </p>
      </CardContent>
    </Card>
  );
}
