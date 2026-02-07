import { useState } from 'react';
import { Calculator, IndianRupee, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import IconBadge from '@/components/common/IconBadge';

export default function SofaPriceCalculator() {
  const [feet, setFeet] = useState(10);
  const pricePerFoot = 90;
  const total = feet * pricePerFoot;

  return (
    <Card className="mx-auto max-w-2xl border-primary/30 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 shadow-premium">
      <CardHeader className="space-y-3 pb-4 text-center">
        <div className="mx-auto">
          <IconBadge icon={Calculator} size="sm" variant="primary" />
        </div>
        <CardTitle className="text-xl lg:text-2xl">Sofa Cleaning Price Calculator</CardTitle>
        <CardDescription className="text-sm lg:text-base">
          Calculate your sofa cleaning cost instantly at ₹90 per foot
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground lg:text-sm">Sofa Size (feet)</span>
            <Badge variant="outline" className="text-base font-bold lg:text-lg">
              {feet} ft
            </Badge>
          </div>
          <Slider
            value={[feet]}
            onValueChange={(value) => setFeet(value[0])}
            min={5}
            max={30}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>5 ft (Small)</span>
            <span>30 ft (Large)</span>
          </div>
        </div>

        <div className="space-y-3 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-5 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground lg:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span>Estimated Total Cost</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <IndianRupee className="h-7 w-7 text-primary lg:h-8 lg:w-8" />
            <span className="text-4xl font-bold text-primary lg:text-5xl">{total}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {feet} feet × ₹{pricePerFoot}/ft = ₹{total}
          </p>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row">
          <a
            href="tel:+918000262644"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            <span>📞 Call Now</span>
          </a>
          <a
            href="https://wa.me/918000262644"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[oklch(0.65_0.19_145)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[oklch(0.60_0.19_145)] hover:shadow-lg"
          >
            <span>💬 WhatsApp</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
