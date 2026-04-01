import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const images = [
  { src: gallery1, alt: "Reflex Lounge grills menu", label: "Our Grills" },
  { src: gallery2, alt: "Reflex Lounge indoor seating", label: "Indoor Lounge" },
  { src: gallery3, alt: "Reflex Lounge outdoor seating", label: "Outdoor Area" },
  { src: gallery4, alt: "Reflex Lounge VIP area", label: "VIP Section" },
  { src: gallery5, alt: "Reflex Lounge & Bar exterior at night", label: "Reflex at Night" },
  { src: gallery6, alt: "Isiewu delicacy at Reflex", label: "Isiewu Special" },
  { src: gallery7, alt: "Ofada Rice at Reflex Kitchen", label: "Ofada Rice" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">A Glimpse Inside</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Gallery</h2>
        <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div key={img.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <span className="font-display text-lg text-foreground">{img.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
