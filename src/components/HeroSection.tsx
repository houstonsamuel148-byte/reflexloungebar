import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-primary tracking-wide">REFLEX</a>
        <div className="hidden md:flex gap-8 font-body text-sm tracking-widest uppercase text-foreground/70">
          {["Services", "Why Us", "Gallery", "FAQ"].map((s) => (
            <a key={s} href={`#${s.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors">{s}</a>
          ))}
        </div>
        <a href="#contact" className="hidden md:inline-block bg-gold-gradient text-primary-foreground px-6 py-2 rounded text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity">
          Reserve Now
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-gold/10 px-4 pb-4 flex flex-col gap-3">
          {["Services", "Why Us", "Gallery", "FAQ"].map((s) => (
            <a key={s} href={`#${s.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)} className="text-sm tracking-widest uppercase text-foreground/70 hover:text-primary py-2">{s}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-gold-gradient text-primary-foreground px-6 py-2 rounded text-sm font-semibold tracking-wider uppercase text-center">Reserve Now</a>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", message: "" });

  return (
    <section id="contact" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Reflex Lounge interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4">Osogbo's Premier Lounge & Bar</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
            <span className="text-foreground">Where Every</span><br />
            <span className="text-gold-gradient">Night Comes Alive</span>
          </h1>
          <p className="text-foreground/60 font-body text-lg max-w-md mb-8 leading-relaxed">
            Premium cocktails, sizzling grills, live DJ sets and an ambience that keeps you coming back. Dine in, drive through, or order delivery.
          </p>
          <div className="flex flex-wrap gap-6 text-foreground/50 text-sm">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Osogbo, Osun</span>
            <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> WhatsApp Available</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-primary" /> Open Daily</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-card/80 backdrop-blur-md border border-gold/20 rounded-lg p-8 shadow-gold">
          <h3 className="font-display text-2xl text-foreground mb-2">Make a Reservation</h3>
          <p className="text-muted-foreground text-sm mb-6">Book your table and experience the vibe</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/?text=${encodeURIComponent(`Reservation Request:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDate: ${form.date}\nGuests: ${form.guests}\nMessage: ${form.message}`)}`, "_blank"); }}>
            <input type="text" placeholder="Your Name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              <input type="tel" placeholder="Phone" required maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              <select required value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                <option value="">Guests</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, "10+"].map((n) => <option key={n} value={n}>{n} {typeof n === "number" && n === 1 ? "Guest" : "Guests"}</option>)}
              </select>
            </div>
            <textarea placeholder="Special requests..." maxLength={500} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors h-20 resize-none" />
            <button type="submit" className="w-full bg-gold-gradient text-primary-foreground py-3 rounded font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity">
              Reserve My Table
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export { Navbar, HeroSection };
