import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Bed, Activity, Heart, Users, Star, Wifi, Car, Coffee, Dumbbell, Trees } from "lucide-react";

export const UnitsSection = () => {
  const [activeUnit, setActiveUnit] = useState(0);

  const units = [
    {
      name: "Porto Alegre Central",
      subtitle: "Unidade Principal",
      address: "Av. Ipiranga, 1234 - Centro Histórico",
      phone: "(51) 3333-4444",
      description: "Nossa unidade principal, localizada no coração de Porto Alegre, oferece tratamento completo com infraestrutura moderna e equipe especializada disponível 24 horas.",
      capacity: "40 leitos",
      rating: "4.9",
      specialties: ["Desintoxicação", "Terapia Individual", "Grupos Terapêuticos"],
      amenities: [
        { icon: Bed, label: "40 acomodações individuais" },
        { icon: Activity, label: "Centro de atividades físicas" },
        { icon: Users, label: "Salas de terapia em grupo" },
        { icon: Heart, label: "Atendimento médico 24h" },
        { icon: Trees, label: "Jardim terapêutico" },
        { icon: Wifi, label: "Wi-Fi em todas as áreas" }
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      featured: true
    },
    {
      name: "Capão da Canoa",
      subtitle: "Unidade Praia",
      address: "Rua das Acácias, 567 - Zona Norte",
      phone: "(51) 3344-5555",
      description: "Localizada próxima à praia, oferece um ambiente tranquilo e terapêutico para a recuperação, com vista para o mar e atividades ao ar livre.",
      capacity: "25 leitos",
      rating: "4.8",
      specialties: ["Terapia Natural", "Atividades Outdoor", "Meditação"],
      amenities: [
        { icon: Bed, label: "25 acomodações com vista" },
        { icon: Trees, label: "Atividades ao ar livre" },
        { icon: Heart, label: "Terapia assistida por animais" },
        { icon: Activity, label: "Espaços de meditação" },
        { icon: Coffee, label: "Horta terapêutica" },
        { icon: Car, label: "Proximidade com a praia" }
      ],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      featured: false
    },
    {
      name: "Canoas",
      subtitle: "Unidade Metropolitana",
      address: "Rua das Palmeiras, 890 - Centro",
      phone: "(51) 3355-6666",
      description: "Estrategicamente localizada na região metropolitana, com fácil acesso e ambiente acolhedor, ideal para quem busca tratamento próximo à capital.",
      capacity: "30 leitos",
      rating: "4.7",
      specialties: ["Reabilitação", "Reinserção Social", "Terapia Ocupacional"],
      amenities: [
        { icon: Bed, label: "30 acomodações confortáveis" },
        { icon: Dumbbell, label: "Academia e piscina" },
        { icon: Activity, label: "Sala de artes e música" },
        { icon: Heart, label: "Consultórios especializados" },
        { icon: Coffee, label: "Refeitório amplo" },
        { icon: Trees, label: "Área verde para caminhadas" }
      ],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      featured: false
    },
    {
      name: "Gravataí",
      subtitle: "Unidade Norte",
      address: "Av. Brasil, 456 - Industrial",
      phone: "(51) 3366-7777",
      description: "Unidade moderna com foco em atividades terapêuticas e reinserção social, equipada com oficinas profissionalizantes e espaços de convivência.",
      capacity: "35 leitos",
      rating: "4.6",
      specialties: ["Oficinas Profissionalizantes", "Reinserção", "Convivência"],
      amenities: [
        { icon: Bed, label: "35 acomodações modernas" },
        { icon: Activity, label: "Oficinas profissionalizantes" },
        { icon: Users, label: "Centro de convivência" },
        { icon: Heart, label: "Laboratório de análises" },
        { icon: Coffee, label: "Biblioteca terapêutica" },
        { icon: Dumbbell, label: "Campo de futebol" }
      ],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      featured: false
    },
    {
      name: "Pelotas",
      subtitle: "Unidade Sul",
      address: "Rua dos Girassóis, 123 - Fragata",
      phone: "(51) 3377-8888",
      description: "Nossa mais nova unidade, equipada com tecnologia de ponta e ambiente familiar, oferecendo o que há de mais moderno em tratamento de dependência química.",
      capacity: "20 leitos",
      rating: "5.0",
      specialties: ["Tecnologia Avançada", "Ambiente Familiar", "Cuidado Premium"],
      amenities: [
        { icon: Bed, label: "20 acomodações premium" },
        { icon: Activity, label: "Centro de reabilitação moderno" },
        { icon: Coffee, label: "Cozinha terapêutica" },
        { icon: Activity, label: "Sala de cinema" },
        { icon: Trees, label: "Jardim zen" },
        { icon: Car, label: "Estacionamento amplo" }
      ],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
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
            Presentes em 5 cidades estratégicas do Rio Grande do Sul, oferecemos estrutura completa 
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
          <div className="relative mb-12">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-full max-w-4xl h-16 bg-gradient-soft rounded-2xl -z-10"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {units.map((unit, index) => (
                <Button
                  key={index}
                  variant={activeUnit === index ? "default" : "outline"}
                  onClick={() => setActiveUnit(index)}
                  className={`text-sm font-medium transition-all duration-300 ${
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
        <div className="animate-fade-in">
          <Card className="bg-gradient-card border-0 shadow-hero overflow-hidden rounded-3xl">{/*bg-white*/}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="group text-center bg-card rounded-3xl p-10 shadow-soft hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
              <Bed className="w-10 h-10 text-white" />
            </div>
            <div className="font-display text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">150+</div>
            <p className="text-muted-foreground font-medium text-lg">Acomodações</p>
          </div>
          <div className="group text-center bg-card rounded-3xl p-10 shadow-soft hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-hover rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <div className="font-display text-4xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">24/7</div>
            <p className="text-muted-foreground font-medium text-lg">Atendimento</p>
          </div>
          <div className="group text-center bg-card rounded-3xl p-10 shadow-soft hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <div className="font-display text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">100%</div>
            <p className="text-muted-foreground font-medium text-lg">Humanizado</p>
          </div>
          <div className="group text-center bg-card rounded-3xl p-10 shadow-soft hover:shadow-card transition-all duration-500 hover-lift border border-border/50">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <div className="font-display text-4xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">5</div>
            <p className="text-muted-foreground font-medium text-lg">Unidades</p>
          </div>
        </div>
      </div>
    </section>
  );
};