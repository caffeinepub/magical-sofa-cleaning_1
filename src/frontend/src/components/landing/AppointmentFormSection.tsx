import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, MessageSquare } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { generateWhatsAppBookingURL, type BookingDetails } from '@/lib/whatsappBooking';
import InlineIcon from '@/components/common/InlineIcon';
import { useI18n } from '@/i18n/useI18n';

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  area?: string;
  date?: string;
  time?: string;
}

export default function AppointmentFormSection() {
  const { t } = useI18n();
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

  const serviceOptions = [
    { value: 'Sofa Cleaning', label: t.serviceOptions.sofaCleaning },
    { value: 'Carpet Cleaning', label: t.serviceOptions.carpetCleaning },
    { value: 'Office Chair Cleaning', label: t.serviceOptions.chairCleaning },
    { value: 'Mattress Cleaning', label: t.serviceOptions.mattressCleaning },
    { value: 'AC Water Jet Service', label: t.serviceOptions.acWaterJet },
  ];

  const timeSlots = [
    { value: '8:00 AM - 10:00 AM', label: t.timeSlots.morning1 },
    { value: '10:00 AM - 12:00 PM', label: t.timeSlots.morning2 },
    { value: '12:00 PM - 2:00 PM', label: t.timeSlots.afternoon1 },
    { value: '2:00 PM - 4:00 PM', label: t.timeSlots.afternoon2 },
    { value: '4:00 PM - 6:00 PM', label: t.timeSlots.evening1 },
    { value: '6:00 PM - 8:00 PM', label: t.timeSlots.evening2 },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.appointment.errorNameRequired;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.appointment.errorPhoneRequired;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = t.appointment.errorPhoneInvalid;
    }

    if (!formData.service) {
      newErrors.service = t.appointment.errorServiceRequired;
    }

    if (!formData.area.trim()) {
      newErrors.area = t.appointment.errorAreaRequired;
    }

    if (!formData.date) {
      newErrors.date = t.appointment.errorDateRequired;
    }

    if (!formData.time) {
      newErrors.time = t.appointment.errorTimeRequired;
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
          <h2 className="mb-3 text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            {t.appointment.heading}
          </h2>
          <p className="text-balance text-sm text-muted-foreground md:text-base lg:text-lg">
            {t.appointment.description}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <Card className="premium-box">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-xl font-bold text-primary lg:text-2xl">{t.appointment.cardTitle}</CardTitle>
              <CardDescription className="text-sm lg:text-base">
                {t.appointment.cardDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <InlineIcon icon={User} />
                    {t.appointment.nameLabel} *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.appointment.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <InlineIcon icon={Phone} />
                    {t.appointment.phoneLabel} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t.appointment.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? 'border-destructive' : ''}
                  />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <InlineIcon icon={MessageSquare} />
                    {t.appointment.serviceLabel} *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger id="service" className={errors.service ? 'border-destructive' : ''}>
                      <SelectValue placeholder={t.appointment.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
                </div>

                {/* Area */}
                <div className="space-y-2">
                  <Label htmlFor="area" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <InlineIcon icon={MapPin} />
                    {t.appointment.areaLabel} *
                  </Label>
                  <Input
                    id="area"
                    type="text"
                    placeholder={t.appointment.areaPlaceholder}
                    value={formData.area}
                    onChange={(e) => handleInputChange('area', e.target.value)}
                    className={errors.area ? 'border-destructive' : ''}
                  />
                  {errors.area && <p className="text-xs text-destructive">{errors.area}</p>}
                </div>

                {/* Date & Time */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                      <InlineIcon icon={Calendar} />
                      {t.appointment.dateLabel} *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className={errors.date ? 'border-destructive' : ''}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.date && <p className="text-xs text-destructive">{errors.date}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                      <InlineIcon icon={Clock} />
                      {t.appointment.timeLabel} *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger id="time" className={errors.time ? 'border-destructive' : ''}>
                        <SelectValue placeholder={t.appointment.timePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot.value} value={slot.value}>
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.time && <p className="text-xs text-destructive">{errors.time}</p>}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="flex items-center gap-2 text-sm font-semibold lg:text-base">
                    <InlineIcon icon={MessageSquare} />
                    {t.appointment.notesLabel}
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder={t.appointment.notesPlaceholder}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#25D366] py-6 text-base font-bold text-white hover:bg-[#20BA5A] lg:text-lg"
                >
                  <SiWhatsapp className="h-5 w-5" />
                  {isSubmitting ? t.appointment.submitting : t.appointment.submitButton}
                </Button>

                <p className="text-center text-xs text-muted-foreground lg:text-sm">
                  {t.appointment.disclaimer}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
