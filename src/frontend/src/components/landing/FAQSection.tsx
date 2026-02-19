import { useI18n } from '../../i18n/I18nProvider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import IconBadge from '../common/IconBadge';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FAQSection() {
  const { t } = useI18n();
  const sectionRef = useScrollReveal<HTMLElement>({
    staggerSelector: '.faq-item',
    staggerDelay: 80,
  });

  return (
    <section id="faq" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <IconBadge icon={HelpCircle} size="lg" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.faq.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.faq.description}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q1}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a1}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q2}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a2}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q3}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a3}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q4}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a4}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q5}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a5}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q6}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a6}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q7}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a7}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q8}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a8}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q9}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a9}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="faq-item premium-box bg-card border-primary/20">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-foreground">{t.faq.q10}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {t.faq.a10}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">{t.faq.stillHaveQuestions}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918000262644"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all cta-primary"
            >
              {t.faq.callUs}
            </a>
            <a
              href="https://wa.me/918000262644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all cta-whatsapp"
            >
              {t.faq.whatsappUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
