import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre Nós", href: "#about" },
    { label: "Tratamentos", href: "#treatments" },
    { label: "Unidades", href: "#units" },
    { label: "Contato", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-card border-b border-border/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-soft">
                <div className="w-5 h-5 bg-white rounded-lg"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}>
                  <span className="text-primary">Novo</span> Horizonte
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                variant={isScrolled ? "default" : "secondary"}
                size="sm"
                className="hidden xs:flex text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 touch-manipulation"
                onClick={() => window.open('tel:+5551333344444', '_self')}
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden md:inline">(51) 3333-4444</span>
                <span className="md:hidden">Ligar</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className={`lg:hidden p-2 touch-manipulation ${isScrolled ? 'text-foreground' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Full Screen */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-background animate-fade-in">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-border/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-soft">
                  <div className="w-5 h-5 bg-white rounded-lg"></div>
                </div>
                <h1 className="text-xl font-bold text-foreground">
                  <span className="text-primary">Novo</span> Horizonte
                </h1>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full justify-center px-6 sm:px-8 py-8 sm:py-12 space-y-3 sm:space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-center px-6 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 text-xl sm:text-2xl border border-transparent hover:border-primary/20 hover-lift touch-manipulation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Call Button */}
              <div className="pt-6 sm:pt-8 mt-6 sm:mt-8">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full py-4 sm:py-6 text-lg sm:text-xl font-semibold hover-lift rounded-xl sm:rounded-2xl touch-manipulation"
                  onClick={() => {
                    window.open('tel:+5551333344444', '_self');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Ligar (51) 3333-4444
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-0"></div>
    </>
  );
};