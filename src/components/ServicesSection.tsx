import { motion } from "framer-motion";
import { Wine, UtensilsCrossed, Music, Truck, Users, Sparkles } from "lucide-react";

const services = [
  { icon: Wine, title: "Premium Bar", desc: "Curated cocktails, fine wines, and an extensive selection of spirits from around the world." },
  { icon: UtensilsCrossed, title: "Grills & Kitchen", desc: "Signature bush meat, assorted grills, and a menu crafted to delight every palate." },
  { icon: Music, title: "Live DJ & Entertainment", desc: "Resident DJ spinning the latest tunes with big screens for live match viewing." },
  { icon: Truck, title: "Drive-Through & Delivery", desc: "Can't make it in? Enjoy our full menu via drive-through or no-contact delivery." },
  { icon: Users, title: "Private Events", desc: "Host unforgettable birthdays, corporate events, and celebrations in our VIP lounge." },
  { icon: Sparkles, title: "VIP Experience", desc: "Exclusive seating, bottle service, and personalized attention for your special nights." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">What We Offer</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Our Services</h2>
        <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 hover:shadow-gold transition-all duration-500 group">
            <s.icon className="text-primary mb-5 group-hover:scale-110 transition-transform" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
