
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Bed, Activity, Heart, Users, Star, Wifi, Car, Coffee, Dumbbell, Trees } from "lucide-react";

export const UnitsSection = () => {
  const [activeUnit, setActiveUnit] = useState(0);

  const handleUnitChange = (index: number) => {
    console.log('Changing to unit:', index);
    setActiveUnit(index);
  };

  const units = [
    {
      name: "Unidade Pelotas Masculina",
      subtitle: "Centro de Recuperação Masculino",
      address: "Rua dos Girassóis, 1233 - Fragata, Pelotas",
      phone: "(53) 3377-8888",
      description: "Unidade especializada no atendimento masculino, com ambiente acolhedor e estrutura completa para tratamento de dependência química. Oferece espaços de convivência e atividades terapêuticas em ambiente residencial.",
      capacity: "25 leitos",
      rating: "4.9",
      specialties: ["Tratamento Masculino", "Terapia Individual", "Grupos Terapêuticos"],
      amenities: [
        { icon: Bed, label: "25 acomodações individuais" },
        { icon: Activity, label: "Área de convivência externa" },
        { icon: Users, label: "Salas de terapia em grupo" },
        { icon: Heart, label: "Atendimento médico especializado" },
        { icon: Trees, label: "Jardim terapêutico" },
        { icon: Coffee, label: "Espaço de refeições" }
      ],
      image: "/lovable-uploads/05ffcab5-9a5a-4d6e-a04c-6f1697c0cf44.png",
      featured: true
    },
    {
      name: "Unidade Tramandaí",
      subtitle: "Centro de Recuperação Litoral",
      address: "Av. Beira Mar, 567 - Centro, Tramandaí",
      phone: "(51) 3344-5555",
      description: "Localizada no litoral gaúcho, oferece um ambiente tranquilo para recuperação com atividades noturnas monitoradas e espaços amplos para convivência e terapia.",
      capacity: "30 leitos",
      rating: "4.8",
      specialties: ["Terapia Natural", "Atividades Noturnas", "Convivência"],
      amenities: [
        { icon: Bed, label: "30 acomodações confortáveis" },
        { icon: Trees, label: "Área externa ampla" },
        { icon: Heart, label: "Monitoramento 24h" },
        { icon: Activity, label: "Espaços de convivência" },
        { icon: Coffee, label: "Área de refeições coletiva" },
        { icon: Car, label: "Proximidade com a praia" }
      ],
      image: "/lovable-uploads/8e5afa13-1a44-4b06-8304-7e03e657e523.png",
      featured: false
    },
    {
      name: "Unidade Feminina Osório",
      subtitle: "Centro de Recuperação Feminino",
      address: "Rua das Palmeiras, 890 - Centro, Osório",
      phone: "(51) 3355-6666",
      description: "Clínica especializada no atendimento feminino com ambiente acolhedor e seguro. Oferece tratamento humanizado com foco nas necessidades específicas do público feminino.",
      capacity: "20 leitos",
      rating: "4.9",
      specialties: ["Tratamento Feminino", "Terapia Especializada", "Ambiente Seguro"],
      amenities: [
        { icon: Bed, label: "20 acomodações femininas" },
        { icon: Heart, label: "Atendimento especializado" },
        { icon: Activity, label: "Terapias específicas" },
        { icon: Users, label: "Grupos de apoio feminino" },
        { icon: Trees, label: "Jardim terapêutico" },
        { icon: Coffee, label: "Espaço de convivência" }
      ],
      image: "/lovable-uploads/b1b2a6df-7e0d-4dac-97c8-7e043e8731b4.png",
      featured: true
    },
    {
      name: "Unidade Feminina Pelotas",
      subtitle: "Clínica Terapêutica Lótus",
      address: "Rua das Flores, 456 - Areal, Pelotas",
      phone: "(53) 3366-7777",
      description: "Clínica Terapêutica Lótus, especializada no tratamento feminino com estrutura moderna e ambiente acolhedor. Oferece tratamento integral com foco na recuperação e reinserção social.",
      capacity: "22 leitos",
      rating: "4.8",
      specialties: ["Tratamento Feminino", "Terapia Lótus", "Reinserção Social"],
      amenities: [
        { icon: Bed, label: "22 acomodações especializadas" },
        { icon: Activity, label: "Terapias integradas" },
        { icon: Users, label: "Grupos de apoio" },
        { icon: Heart, label: "Atendimento psicológico" },
        { icon: Coffee, label: "Espaço de convivência" },
        { icon: Trees, label: "Área verde terapêutica" }
      ],
      image: "/lovable-uploads/20c4f196-2286-436a-9333-c5afd6308035.png",
      featured: false
    },
    {
      name: "Centro de Recuperação Litorânea",
      subtitle: "Unidade Capão da Canoa",
      address: "Rua das Acácias, 123 - Centro, Capão da Canoa",
      phone: "(51) 3377-9999",
      description: "Centro de recuperação com arquitetura colorida e acolhedora, oferecendo tratamento em ambiente próximo à natureza com fácil acesso e estrutura completa para recuperação.",
      capacity: "28 leitos",
      rating: "4.7",
      specialties: ["Terapia Natural", "Ambiente Litorâneo", "Arquitetura Terapêutica"],
      amenities: [
        { icon: Bed, label: "28 acomodações modernas" },
        { icon: Trees, label: "Ambiente natural" },
        { icon: Activity, label: "Atividades ao ar livre" },
        { icon: Heart, label: "Cuidado humanizado" },
        { icon: Car, label: "Fácil acesso" },
        { icon: Coffee, label: "Espaços de convivência" }
      ],
      image: "/lovable-uploads/2d3f3dcc-2f23-4cb3-86a8-e0290962eb36.png",
      featured: false
    },
    {
      name: "Unidade Premium Pelotas",
      subtitle: "Centro de Excelência",
      address: "Av. Bento Gonçalves, 789 - Centro, Pelotas",
      phone: "(53) 3388-0000",
      description: "Nossa unidade premium com estrutura de alto padrão, incluindo piscina terapêutica e ambiente moderno. Oferece o que há de mais avançado em tratamento de dependência química.",
      capacity: "18 leitos",
      rating: "5.0",
      specialties: ["Tratamento Premium", "Piscina Terapêutica", "Estrutura Moderna"],
      amenities: [
        { icon: Bed, label: "18 acomodações premium" },
        { icon: Activity, label: "Piscina terapêutica" },
        { icon: Heart, label: "Atendimento de excelência" },
        { icon: Dumbbell, label: "Academia completa" },
        { icon: Trees, label: "Área de lazer" },
        { icon: Car, label: "Estacionamento privativo" }
      ],
      image: "/lovable-uploads/1c5de89b-bd66-4fc8-8ff7-713b42a04a88.png",
      featured: true
    }
  ];

  return (
    <section id="units" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Nossas <span className="text-primary">Unidades</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-hero mx-auto mb-10 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            Presentes em 6 unidades estratégicas do Rio Grande do Sul, oferecemos estrutura completa 
            e proximidade para melhor atender você e sua família.
          </p>
        </div>

        {/* Units Grid - Mobile/Tablet View */}
        <div className="lg:hidden space-y-8 mb-20">
          {units.map((unit, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-all duration-500 hover-lift overflow-hidden rounded-3xl group">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  {unit.featured && (
                    <Badge className="absolute top-6 left-6 bg-gradient-hero text-white border-0 shadow-soft">
                      ⭐ Destaque
                    </Badge>
                  )}
                  <div className="absolute top-6 right-6 flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">{unit.rating}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">{unit.name}</h3>
                    <p className="text-primary font-medium mb-1">{unit.subtitle}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{unit.address}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {unit.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {unit.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{unit.capacity}</span>
                    </div>
                    <Button variant="default" size="sm" className="hover-lift focus-ring">
                      <Phone className="w-4 h-4" />
                      Contato
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Tab Navigation */}
        <div className="hidden lg:block">
          <div className="mb-12">            
            <div className="flex flex-wrap justify-center gap-4 bg-gradient-soft rounded-2xl p-4">
              {units.map((unit, index) => (
                <Button
                  key={index}
                  variant={activeUnit === index ? "default" : "outline"}
                  onClick={() => handleUnitChange(index)}
                  className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeUnit === index 
                      ? "shadow-card transform scale-105" 
                      : "hover:shadow-soft hover:scale-102"
                  }`}
                >
                  {unit.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Unit Display */}
          <div className="animate-fade-in" key={activeUnit}>
          <Card className="bg-gradient-card border-0 shadow-hero overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={units[activeUnit].image}
                    alt={units[activeUnit].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {units[activeUnit].name}
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        {units[activeUnit].address}
                      </p>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        <span className="text-secondary font-medium">
                          {units[activeUnit].phone}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {units[activeUnit].description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-secondary" />
                      Infraestrutura e Serviços
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {units[activeUnit].amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                            <amenity.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-muted-foreground text-sm font-medium">{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <Button variant="default" className="flex-1">
                      <Phone className="w-4 h-4" />
                      Ligar para esta unidade
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      <MapPin className="w-4 h-4" />
                      Ver localização
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20">
          <div className="group text-center bg-card rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-soft hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-hover rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
              <Bed className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">143+</div>
            <p className="text-muted-foreground font-medium text-sm md:text-lg">Acomodações</p>
          </div>
          <div className="group text-center bg-card rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-soft hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary to-secondary-hover rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
              <Activity className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-secondary transition-colors duration-300">24/7</div>
            <p className="text-muted-foreground font-medium text-sm md:text-lg">Atendimento</p>
          </div>
          <div className="group text-center bg-card rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-soft hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">100%</div>
            <p className="text-muted-foreground font-medium text-sm md:text-lg">Humanizado</p>
          </div>
          <div className="group text-center bg-card rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-soft hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-secondary transition-colors duration-300">6</div>
            <p className="text-muted-foreground font-medium text-sm md:text-lg">Unidades</p>
          </div>
        </div>
      </div>
    </section>
  );
};
