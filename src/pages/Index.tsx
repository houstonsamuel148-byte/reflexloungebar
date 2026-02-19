import { Navbar, HeroSection } from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import { CTASection, Footer } from "@/components/CTAFooter";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhyUsSection />
    <GallerySection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
