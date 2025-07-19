import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip briefly after appearing
      setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after 3 seconds
        setTimeout(() => setShowTooltip(false), 3000);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Replace with actual clinic number
    const message = "Olá! Gostaria de saber mais sobre os tratamentos da Clínica Novo Horizonte.";
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 bg-foreground text-background px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Fale Conosco</span>
            <Button
              variant="ghost"
              size="sm"
              className="w-4 h-4 p-0 text-background hover:text-background/80"
              onClick={() => setShowTooltip(false)}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        variant="whatsapp"
        size="lg"
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full p-0 animate-fade-in hover:animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};