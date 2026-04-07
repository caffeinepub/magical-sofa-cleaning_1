import {
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useI18n } from "../../i18n/I18nProvider";
import { generateWhatsAppBookingURL } from "../../lib/whatsappBooking";

const SERVICES_LIST = [
  "Sofa Cleaning",
  "Chair Cleaning",
  "Carpet Cleaning",
  "Mattress Cleaning",
  "AC Service",
];

export default function AppointmentFormSection() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal<HTMLElement>();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICES_LIST[0],
    area: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppBookingURL({
      name: form.name,
      phone: form.phone,
      service: form.service,
      area: form.area,
      date: form.date,
      time: form.time,
      notes: form.notes,
    });
    window.open(url, "_blank");
  };

  return (
    <section
      id="appointment"
      ref={sectionRef}
      className="py-16 sm:py-20"
      style={{ background: "var(--section-mint)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold font-body">
                {t.appointment.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
              {t.appointment.title}
            </h2>
            <p className="text-muted-foreground font-body">
              {t.appointment.subtitle}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-border shadow-premium-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="appt-name"
                  className="block text-sm font-semibold text-foreground mb-1.5 font-body"
                >
                  <User className="w-4 h-4 inline mr-1.5 text-primary" />
                  {t.appointment.nameLabel}
                </label>
                <input
                  id="appt-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.appointment.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-body text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="appt-phone"
                  className="block text-sm font-semibold text-foreground mb-1.5 font-body"
                >
                  <Phone className="w-4 h-4 inline mr-1.5 text-primary" />
                  {t.appointment.phoneLabel}
                </label>
                <input
                  id="appt-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder={t.appointment.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-body text-sm"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="appt-service"
                  className="block text-sm font-semibold text-foreground mb-1.5 font-body"
                >
                  {t.appointment.serviceLabel}
                </label>
                <select
                  id="appt-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-body text-sm"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Area */}
              <div>
                <label
                  htmlFor="appt-area"
                  className="block text-sm font-semibold text-foreground mb-1.5 font-body"
                >
                  <MapPin className="w-4 h-4 inline mr-1.5 text-primary" />
                  {t.appointment.areaLabel}
                </label>
                <input
                  id="appt-area"
                  type="text"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  placeholder={t.appointment.areaPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-body text-sm"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="appt-date"
                    className="block text-sm font-semibold text-foreground mb-1.5 font-body"
                  >
                    <Calendar className="w-4 h-4 inline mr-1.5 text-primary" />
                    {t.appointment.dateLabel}
                  </label>
                  <input
                    id="appt-date"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-body text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="appt-time"
                    className="block text-sm font-semibold text-foreground mb-1.5 font-body"
                  >
                    <Clock className="w-4 h-4 inline mr-1.5 text-primary" />
                    {t.appointment.timeLabel}
                  </label>
                  <input
                    id="appt-time"
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-body text-sm"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="appt-notes"
                  className="block text-sm font-semibold text-foreground mb-1.5 font-body"
                >
                  {t.appointment.notesLabel}
                </label>
                <textarea
                  id="appt-notes"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder={t.appointment.notesPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-body text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg font-body"
                style={{
                  background:
                    "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                {t.appointment.submitButton}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-body">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                {t.appointment.disclaimer}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
