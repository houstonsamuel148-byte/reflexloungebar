import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-secondary/30 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px]" />
    </div>
    <div className="relative max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">Don't Miss Out</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">Your Night Awaits</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join the crowd that knows where the best nights in Osogbo happen. Reserve your spot at Reflex Lounge & Bar tonight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity">
            Reserve a Table
          </a>
          <a href="https://wa.me/2348026433322" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-10 py-4 rounded font-semibold tracking-wider uppercase text-sm hover:bg-primary/10 transition-colors">
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-4 md:px-8 py-12 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <span className="font-display text-2xl text-primary">REFLEX</span>
        <p className="text-muted-foreground text-sm mt-1">Lounge & Bar · Osogbo, Osun</p>
      </div>
      <div className="flex gap-6 text-muted-foreground text-sm">
        <a href="https://reflexkitchen.com.ng" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Website</a>
        <a href="https://wa.me/2348026433322" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Reflex Lounge & Bar. All rights reserved.</p>
    </div>
  </footer>
);

export { CTASection, Footer };
