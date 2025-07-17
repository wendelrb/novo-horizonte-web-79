import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">{/* add padding top for navigation */}
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Phone Fixed Button - Hidden on mobile, replaced by navigation */}
      <div className="hidden sm:block fixed top-6 right-6 z-40">
        <Button variant="secondary" size="lg" className="animate-fade-in">
          <Phone className="w-5 h-5" />
          <span className="hidden lg:inline">(51) 3333-4444</span>
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Clinic Name Badge */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/20 shadow-soft hover-lift transition-all duration-300">
              <div className="w-3 h-3 bg-secondary rounded-full animate-float"></div>
              <span className="text-white/90 font-medium text-lg tracking-wide">Clínica de Reabilitação</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl font-bold text-white mb-6 leading-none tracking-tight">
              <span className="block text-secondary drop-shadow-lg animate-slide-in-left">Novo</span>
              <span className="block drop-shadow-lg animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Horizonte</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-6 font-light leading-relaxed text-balance">
              Tratamento Humanizado e Eficaz em{" "}
              <span className="text-secondary font-semibold bg-white/10 px-3 py-1 rounded-lg">Porto Alegre</span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-12 animate-scale-in-soft" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed text-balance">
              Equipe multidisciplinar especializada em dependência química e alcoolismo.
              <br className="hidden sm:block" />
              <strong className="text-secondary bg-white/10 px-2 py-1 rounded">15 anos</strong> dedicados à recuperação e reintegração social.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="lg" className="min-w-[220px] text-lg py-4 px-8 hover-lift focus-ring">
              <MessageSquare className="w-6 h-6" />
              Preciso de ajuda
            </Button>
            <Button variant="soft" size="lg" className="min-w-[220px] text-lg py-4 px-8 hover-lift focus-ring">
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};