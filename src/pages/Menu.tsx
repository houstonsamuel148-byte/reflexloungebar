import { motion } from "framer-motion";
import { MapPin, Phone, Clock, UtensilsCrossed } from "lucide-react";

const menuData = [
  {
    category: "Pepper Soup & Specials",
    emoji: "🍲",
    items: [
      { name: "Point & Kill", price: "From ₦15,000" },
      { name: "Catfish Pepper Soup", price: "₦5,000 / plate" },
      { name: "Goat Meat Pepper Soup", price: "₦4,500 / plate" },
      { name: "Chicken Pepper Soup", price: "₦6,000 / plate" },
      { name: "Croaker Fish Pepper Soup", price: "₦16,000" },
      { name: "Tilapia Fish Pepper Soup", price: "₦16,000" },
    ],
  },
  {
    category: "Grills & Peppered",
    emoji: "🔥",
    items: [
      { name: "Grilled Catfish", price: "₦15,000" },
      { name: "Grilled Croaker Fish", price: "₦12,000 – ₦20,000" },
      { name: "Grilled Tilapia Fish", price: "₦12,000 – ₦20,000" },
      { name: "Peppered Goat Meat", price: "₦5,000" },
      { name: "Peppered Chicken", price: "₦6,000" },
      { name: "Peppered Beef", price: "₦4,000 / plate" },
      { name: "Peppered Kpomo", price: "₦3,000 / plate" },
      { name: "Asun", price: "₦5,000" },
      { name: "Bush Meat", price: "₦6,000 / plate" },
    ],
  },
  {
    category: "Local Delicacies",
    emoji: "🍖",
    items: [
      { name: "Isi Ewu", price: "₦9,000" },
      { name: "Nkwobi", price: "₦7,000" },
      { name: "Isi Ewu Special with Basmati Rice", price: "₦12,000" },
    ],
  },
  {
    category: "Soups",
    emoji: "🥘",
    items: [
      { name: "Efo Riro", price: "₦5,000" },
      { name: "Ogbono", price: "₦5,000" },
      { name: "Okro", price: "₦4,000" },
      { name: "Egusi", price: "₦4,000" },
      { name: "Afang", price: "₦5,000" },
      { name: "White Soup", price: "₦5,000" },
      { name: "Bitterleaf Soup", price: "₦5,000" },
      { name: "Oha Soup", price: "₦5,000" },
      { name: "Vegetable Soup", price: "₦5,000" },
      { name: "Banga Soup", price: "₦5,000" },
    ],
  },
  {
    category: "Swallow Options",
    emoji: "🫓",
    items: [
      { name: "Pounded Yam", price: "—" },
      { name: "Semo", price: "—" },
      { name: "Eba", price: "—" },
      { name: "Amala", price: "—" },
      { name: "Wheat", price: "—" },
    ],
  },
];

const popularDishes = [
  { name: "Grilled Catfish", description: "Perfectly seasoned and charcoal-grilled to golden perfection", emoji: "🐟" },
  { name: "Isi Ewu", description: "Traditional spicy goat head delicacy with rich palm oil sauce", emoji: "🍖" },
  { name: "Pepper Soup", description: "Aromatic, spicy broth loaded with fresh fish or tender meat", emoji: "🍲" },
];

const WHATSAPP_ORDER_URL = "https://wa.me/2348099314222?text=Hello%2C%20I%20want%20to%20order%20food%20from%20your%20menu";

const Menu = () => (
  <div className="min-h-screen bg-background">
    {/* Navbar */}
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="/" className="font-display text-2xl text-primary tracking-wide">REFLEX</a>
        <a
          href={WHATSAPP_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-gradient text-primary-foreground px-5 py-2 rounded text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <UtensilsCrossed size={16} /> Order Now
        </a>
      </div>
    </nav>

    {/* Hero */}
    <section className="section-padding text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px]" />
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">Reflex Lounge & Bar</p>
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">Our Menu</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          From sizzling grills to rich pepper soups — authentic Nigerian flavours crafted with love.
        </p>
        <a
          href={WHATSAPP_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold tracking-wider uppercase text-sm hover:bg-[#20bd5a] transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          Order Now on WhatsApp
        </a>
      </motion.div>
    </section>

    {/* Popular Dishes */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">Customer Favourites</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">Popular Dishes</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {popularDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/40 transition-colors"
            >
              <span className="text-5xl mb-4 block">{dish.emoji}</span>
              <h3 className="font-display text-xl text-foreground mb-2">{dish.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{dish.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Full Menu */}
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">What We Serve</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">Full Menu</h2>
        </motion.div>

        <div className="space-y-12">
          {menuData.map((section, si) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.1 }}
            >
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
                <span>{section.emoji}</span> {section.category}
              </h3>
              <div className="grid gap-1">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-3 px-4 rounded hover:bg-secondary/50 transition-colors group"
                  >
                    <span className="text-foreground/90 font-body group-hover:text-foreground transition-colors">{item.name}</span>
                    <span className="text-primary font-semibold text-sm whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
              {si < menuData.length - 1 && <div className="border-b border-border mt-6" />}
            </motion.div>
          ))}
        </div>

        {/* Order CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Ready to order?</p>
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-10 py-4 rounded-lg font-semibold tracking-wider uppercase text-sm hover:bg-[#20bd5a] transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Order Now on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">Visit Us</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10">Contact & Hours</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={22} />
              </div>
              <h4 className="font-display text-lg text-foreground">Location</h4>
              <p className="text-muted-foreground text-sm">Osogbo, Osun State,<br />Nigeria</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="text-primary" size={22} />
              </div>
              <h4 className="font-display text-lg text-foreground">Phone</h4>
              <p className="text-muted-foreground text-sm">+234 802 643 3322<br />+234 809 931 4222</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="text-primary" size={22} />
              </div>
              <h4 className="font-display text-lg text-foreground">Hours</h4>
              <p className="text-muted-foreground text-sm">Mon – Sun<br />11:00 AM – 11:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="px-4 md:px-8 py-10 border-t border-border text-center">
      <a href="/" className="font-display text-2xl text-primary">REFLEX</a>
      <p className="text-muted-foreground text-sm mt-2">Lounge & Bar · Osogbo, Osun</p>
      <p className="text-muted-foreground text-xs mt-4">© {new Date().getFullYear()} Reflex Lounge & Bar. All rights reserved.</p>
    </footer>
  </div>
);

export default Menu;
