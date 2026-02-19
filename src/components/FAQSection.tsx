import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What are your opening hours?", a: "We're open daily. Our bar opens in the evening and runs late into the night. The kitchen serves food throughout operating hours. Follow us on social media for the latest updates!" },
  { q: "Do you take reservations?", a: "Yes! You can reserve a table through our website form or reach us directly via WhatsApp. We recommend booking ahead for weekends and special events." },
  { q: "Is there a dress code?", a: "We encourage smart-casual attire. While we want you to be comfortable, we maintain a classy atmosphere that our guests love." },
  { q: "Do you offer delivery?", a: "Absolutely. We offer both drive-through and no-contact delivery options. Check our menu and place your order via WhatsApp or our website." },
  { q: "Can I host a private event?", a: "Yes! From birthdays to corporate hangouts, our VIP area can be reserved for private events. Contact us to discuss packages and pricing." },
  { q: "What's on the menu?", a: "Our menu features signature cocktails, a wide range of alcoholic and non-alcoholic drinks, grilled bush meat, assorted meats, and continental dishes. Something for every taste!" },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">Got Questions?</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">FAQ</h2>
        <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6 overflow-hidden">
              <AccordionTrigger className="font-display text-lg text-foreground hover:text-primary py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
