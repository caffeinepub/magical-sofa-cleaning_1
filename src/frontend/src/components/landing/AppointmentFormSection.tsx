import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { generateWhatsAppBookingURL, type BookingDetails } from '@/lib/whatsappBooking';
import { SERVICE_OPTIONS } from './Services';

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  area?: string;
  date?: string;
  time?: string;
}

export default function AppointmentFormSection() {
  const [formData, setFormData] = useState<BookingDetails>({
    name: '',
    phone: '',
    service: '',
    area: '',
    date: '',
    time: '',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.area.trim()) {
      newErrors.area = 'Area/Location is required';
    }

    if (!formData.date) {
      newErrors.date = 'Preferred date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Generate WhatsApp URL and open in new tab
    const whatsappURL = generateWhatsAppBookingURL(formData);
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        service: '',
        area: '',
        date: '',
        time: '',
        notes: '',
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: keyof BookingDetails, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="appointment" className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Book Your Appointment
          </h2>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Fill out the form below and we'll connect with you on WhatsApp to confirm your booking
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <Card className="premium-box">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-xl font-bold text-primary lg:text-2xl">Appointment Details</CardTitle>
              <CardDescription className="text-sm lg:text-base">
                Enter your details and we'll reach out to you on WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <User className="h-4 w-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? 'border-destructive' : ''}
                  />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Service Required *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger id="service" className={errors.service ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
                </div>

                {/* Area */}
                <div className="space-y-2">
                  <Label htmlFor="area" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <MapPin className="h-4 w-4 text-primary" />
                    Area / Location *
                  </Label>
                  <Input
                    id="area"
                    type="text"
                    placeholder="e.g., Nikol, Naroda, Satellite, SG Highway"
                    value={formData.area}
                    onChange={(e) => handleInputChange('area', e.target.value)}
                    className={errors.area ? 'border-destructive' : ''}
                  />
                  {errors.area && <p className="text-xs text-destructive">{errors.area}</p>}
                </div>

                {/* Date and Time */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                      <Calendar className="h-4 w-4 text-primary" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={errors.date ? 'border-destructive' : ''}
                    />
                    {errors.date && <p className="text-xs text-destructive">{errors.date}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                      <Clock className="h-4 w-4 text-primary" />
                      Preferred Time *
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className={errors.time ? 'border-destructive' : ''}
                    />
                    {errors.time && <p className="text-xs text-destructive">{errors.time}</p>}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific requirements or questions?"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={3}
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2 bg-gradient-to-r from-[oklch(0.65_0.19_145)] to-[oklch(0.55_0.22_145)] py-6 text-base font-bold text-white shadow-premium transition-all hover:scale-105 hover:shadow-premium-lg lg:text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Book via WhatsApp</span>
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  * Required fields. Your details will be sent to us via WhatsApp.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
