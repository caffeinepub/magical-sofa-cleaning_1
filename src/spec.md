# Specification

## Summary
**Goal:** Add an Appointment booking form to the landing page that validates input and, on submit, opens WhatsApp with a pre-filled booking message (no backend storage).

**Planned changes:**
- Add a new “Appointment” section on the landing page with an English-only booking form (Customer Name, Phone Number, Service selection from existing services, Area/Location, Preferred Date, Preferred Time, Notes/Message).
- Implement client-side validation with inline, non-intrusive English error messages for required/invalid fields (e.g., empty name, invalid phone number).
- On successful submit, open `https://wa.me/918000262644` with a URL-encoded pre-filled message containing all entered booking details in a readable format.
- Add a prominent new button/link in the existing landing page flow (e.g., near Hero CTAs or nav) that scrolls to/reveals the Appointment form, without changing any existing CTA destinations.

**User-visible outcome:** Visitors can quickly access an Appointment form, fill in booking details, and be taken to WhatsApp with a ready-to-send message to the business number, on both mobile and desktop.
