import { motion } from "framer-motion";
import { Shield, Star, Heart, Zap } from "lucide-react";

const reasons = [
  { icon: Star, title: "Unmatched Ambience", desc: "From intimate corners to lively dance floors, our space adapts to your mood." },
  { icon: Heart, title: "Flavor You'll Crave", desc: "Our chefs blend local and continental flavors into dishes that keep you coming back." },
  { icon: Zap, title: "Instant Service", desc: "You won't wait more than 2 minutes to be attended to — that's our promise." },
  { icon: Shield, title: "Safe & Secure", desc: "Enjoy your night worry-free with our professional security and well-lit premises." },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">The Reflex Difference</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Why Choose Us</h2>
        <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
            className="flex gap-5 items-start group">
            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <r.icon className="text-primary" size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
