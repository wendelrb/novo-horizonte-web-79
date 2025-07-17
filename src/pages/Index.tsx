import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { UnitsSection } from "@/components/UnitsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <WhyChooseUsSection />
      <UnitsSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
