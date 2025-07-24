import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, MessageCircle, Clock, Heart } from "lucide-react";

export const ContactSection = () => {
  const handleContactClick = (type: string, info: string) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${info.replace(/[^0-9]/g, '')}`, '_self');
        break;
      case 'whatsapp':
        const phoneNumber = info.replace(/[^0-9]/g, '');
        const message = "Olá! Gostaria de saber mais sobre os tratamentos da Clínica Novo Horizonte.";
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
          ? `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`
          : `https://web.whatsapp.com/send?phone=55${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        break;
      case 'email':
        window.open(`mailto:${info}?subject=Contato - Clínica Novo Horizonte&body=Olá, gostaria de saber mais sobre os tratamentos.`, '_self');
        break;
      case 'location':
        const address = encodeURIComponent(info + ", Porto Alegre, RS");
        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
        break;
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const emailBody = `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}\n\nMensagem:\n${message}`;
    const mailtoUrl = `mailto:contato@novohorizonte.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(mailtoUrl, '_self');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone Principal",
      info: "(51) 3333-4444",
      subtitle: "Disponível 24 horas",
      color: "primary",
      type: "phone"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(51) 9999-8888",
      subtitle: "Resposta rápida",
      color: "whatsapp",
      type: "whatsapp"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@novohorizonte.com.br",
      subtitle: "Envie sua mensagem",
      color: "secondary",
      type: "email"
    },
    {
      icon: MapPin,
      title: "Endereço Principal",
      info: "Av. Ipiranga, 1234 - Centro",
      subtitle: "Porto Alegre, RS",
      color: "primary",
      type: "location"
    }
  ];

  const emergencyNumbers = [
    { name: "Unidade Porto Alegre", number: "(51) 3333-4444" },
    { name: "Unidade Capão da Canoa", number: "(51) 3344-5555" },
    { name: "Unidade Canoas", number: "(51) 3355-6666" },
    { name: "Unidade Gravataí", number: "(51) 3366-7777" },
    { name: "Unidade Pelotas", number: "(51) 3377-8888" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-hero mx-auto mb-10 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            Nossa equipe está disponível <strong className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-lg">24 horas por dia</strong> para esclarecer suas dúvidas e oferecer orientação especializada.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="mb-16">
          <Card className="bg-gradient-hero border-0 text-white shadow-hero rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Precisando de ajuda urgente?
                </h3>
                <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                  Nossa equipe de plantão está pronta para atender você e sua família a qualquer momento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() => handleContactClick('phone', '(51) 3333-4444')}
                  >
                    <Phone className="w-5 h-5" />
                    Ligar agora: (51) 3333-4444
                  </Button>
                  <Button 
                    variant="soft" 
                    size="lg" 
                    className="bg-white/20 text-white hover:bg-white/30 border-white/30"
                    onClick={() => handleContactClick('whatsapp', '(51) 9999-8888')}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp: (51) 9999-8888
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-0 shadow-card rounded-3xl overflow-hidden">
              <CardHeader className="p-8 md:p-10 pb-0">
                <CardTitle className="font-display text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <Mail className="w-8 h-8 text-primary" />
                  Envie sua mensagem
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                </p>
              </CardHeader>
              <CardContent className="p-8 md:p-10">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Nome completo</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Seu nome completo"
                        className="h-12 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">Telefone</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel"
                        placeholder="(51) 99999-9999"
                        className="h-12 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">E-mail</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="h-12 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">Assunto</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="Como podemos ajudar?"
                      className="h-12 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Descreva sua situação ou dúvidas..."
                      rows={5}
                      className="resize-none border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="default" size="lg" className="w-full px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg hover-lift touch-manipulation">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Enviar mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Emergency Numbers */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-0 shadow-soft hover:shadow-card transition-all duration-500 hover-lift rounded-xl sm:rounded-2xl group cursor-pointer touch-manipulation"
                  onClick={() => handleContactClick(contact.type, contact.info)}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300 ${
                        contact.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary-hover' :
                        contact.color === 'secondary' ? 'bg-gradient-to-br from-secondary to-secondary-hover' :
                        'bg-gradient-to-br from-whatsapp to-whatsapp-hover'
                      }`}>
                        <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors text-sm sm:text-base">
                          {contact.title}
                        </h4>
                        <p className="text-primary font-medium mb-1 text-sm sm:text-base break-words">
                          {contact.info}
                        </p>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {contact.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Numbers */}
            <Card className="bg-card border-0 shadow-card rounded-2xl sm:rounded-3xl">
              <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
                <CardTitle className="font-display text-lg sm:text-xl font-bold text-foreground flex items-center gap-2 sm:gap-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                  <span className="text-sm sm:text-base">Plantão 24h - Todas as Unidades</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 sm:space-y-3">
                  {emergencyNumbers.map((emergency, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 rounded-lg sm:rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group cursor-pointer touch-manipulation"
                      onClick={() => handleContactClick('phone', emergency.number)}
                    >
                      <span className="text-muted-foreground font-medium text-xs sm:text-sm group-hover:text-foreground transition-colors truncate">
                        {emergency.name}
                      </span>
                      <span className="text-primary font-semibold text-sm sm:text-base ml-2">
                        {emergency.number}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-secondary/10 rounded-lg sm:rounded-xl border border-secondary/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                    <span className="text-secondary font-semibold text-sm sm:text-base">Atendimento Humanizado</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Nossa equipe está preparada para acolher você e sua família com carinho e profissionalismo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};