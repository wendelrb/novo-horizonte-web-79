import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds, then hide after 3 more seconds
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => setShowTooltip(false), 3000);
      return () => clearTimeout(hideTimer);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, []);

  const handleWhatsAppClick = () => {
    console.log('WhatsApp button clicked!');
    const phoneNumber = "5519999888"; // Número do WhatsApp da clínica
    const message = "Olá! Gostaria de saber mais sobre os tratamentos da Clínica Novo Horizonte.";
    // Detecta se é mobile ou desktop para usar o link apropriado
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    console.log('Opening WhatsApp URL:', whatsappUrl);
    window.open(whatsappUrl, '_blank');
  };



  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 bg-foreground text-background px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in max-w-[200px] sm:max-w-none">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium">Fale Conosco</span>
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
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0 animate-fade-in hover:animate-pulse shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
        style={{ backgroundColor: '#25D366', color: 'white' }}
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </Button>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};