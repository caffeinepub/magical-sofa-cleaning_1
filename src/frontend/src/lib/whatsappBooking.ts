/**
 * Utility for formatting appointment booking details into a WhatsApp message URL
 */

export interface BookingDetails {
  name: string;
  phone: string;
  service: string;
  area: string;
  date: string;
  time: string;
  notes?: string;
}

/**
 * Formats booking details into a readable message string
 */
export function formatBookingMessage(details: BookingDetails): string {
  const lines = [
    "🧹 *New Appointment Request*",
    "",
    `👤 *Name:* ${details.name}`,
    `📱 *Phone:* ${details.phone}`,
    `🛋️ *Service:* ${details.service}`,
    `📍 *Area:* ${details.area}`,
    `📅 *Preferred Date:* ${details.date}`,
    `⏰ *Preferred Time:* ${details.time}`,
  ];

  if (details.notes?.trim()) {
    lines.push("", "📝 *Additional Notes:*", details.notes.trim());
  }

  return lines.join("\n");
}

/**
 * Generates a WhatsApp URL with pre-filled booking message
 */
export function generateWhatsAppBookingURL(details: BookingDetails): string {
  const message = formatBookingMessage(details);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/918000262644?text=${encodedMessage}`;
}
