import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";

const images = [
  { src: gallery1, alt: "Reflex Lounge & Bar exterior", label: "Our Space" },
  { src: gallery2, alt: "Reflex Lounge & Bar front view", label: "The Lounge" },
  { src: gallery3, alt: "Delicious vegetable soup", label: "Efo Riro" },
  { src: gallery4, alt: "Grilled fish with fries", label: "Grilled Fish" },
  { src: gallery5, alt: "Reflex Kitchen exterior", label: "The Kitchen" },
  { src: gallery6, alt: "Reflex Kitchen signage", label: "Our Menu" },
  { src: gallery7, alt: "Hearty pepper soup", label: "Pepper Soup" },
  { src: gallery8, alt: "Fresh fish selection", label: "Fresh Catch" },
  { src: gallery9, alt: "Ofada Rice special", label: "Ofada Rice" },
  { src: gallery10, alt: "Isiewu delicacy", label: "Isiewu" },
  { src: gallery11, alt: "Reflex Lounge & Bar at night", label: "Reflex at Night" },
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
