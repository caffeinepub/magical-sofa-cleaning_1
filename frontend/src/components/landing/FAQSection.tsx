import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Phone, MessageCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "../../i18n/I18nProvider";

export default function FAQSection() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal<HTMLElement>();

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
    { q: t.faq.q7, a: t.faq.a7 },
    { q: t.faq.q8, a: t.faq.a8 },
    { q: t.faq.q9, a: t.faq.a9 },
    { q: t.faq.q10, a: t.faq.a10 },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 sm:py-20"
      style={{ background: "var(--section-sky)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold font-body">{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
            {t.faq.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-border shadow-premium overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 text-left font-semibold text-foreground hover:no-underline hover:bg-primary/5 transition-colors font-body text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-muted-foreground font-body text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4 font-body">
            {t.faq.stillHaveQuestions}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+918000262644"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-premium font-body"
            >
              <Phone className="w-4 h-4" />
              {t.faq.callUs}
            </a>
            <a
              href="https://wa.me/918000262644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 shadow-premium font-body"
              style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
            >
              <MessageCircle className="w-4 h-4" />
              {t.faq.whatsappUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
