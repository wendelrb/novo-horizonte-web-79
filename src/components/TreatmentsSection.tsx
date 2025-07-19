import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Briefcase, Shield, Check } from "lucide-react";

export const TreatmentsSection = () => {
  const treatments = [
    {
      icon: Droplets,
      title: "Desintoxicação",
      description: "Processo seguro e monitorado para eliminação de substâncias do organismo",
      services: [
        "Avaliação médica completa",
        "Monitoramento 24 horas",
        "Medicação quando necessária",
        "Suporte psicológico",
        "Controle de sinais vitais"
      ],
      color: "primary"
    },
    {
      icon: Briefcase,
      title: "Tratamento Profissional",
      description: "Programa intensivo com equipe multidisciplinar especializada",
      services: [
        "Terapia individual",
        "Terapia em grupo",
        "Atividades terapêuticas",
        "Acompanhamento psiquiátrico",
        "Programa de prevenção à recaída"
      ],
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Internação Involuntária",
      description: "Cuidado especializado para casos que requerem internação legal",
      services: [
        "Avaliação judicial",
        "Ambiente protegido",
        "Cuidados médicos intensivos",
        "Apoio familiar",
        "Processo de conscientização"
      ],
      color: "primary"
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Tratamentos <span className="text-primary">Oferecidos</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-hero mx-auto mb-10 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            Oferecemos diferentes modalidades de tratamento, adaptadas às necessidades específicas 
            de cada paciente e grau de dependência.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid lg:grid-cols-3 gap-10">
          {treatments.map((treatment, index) => (
            <Card 
              key={index}
              className="group relative bg-gradient-card border-0 shadow-card hover:shadow-hero transition-all duration-700 hover-lift overflow-hidden rounded-3xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className={`w-full h-full ${
                  treatment.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary-hover' : 'bg-gradient-to-br from-secondary to-secondary-hover'
                }`}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transform rotate-45 group-hover:rotate-180 transition-transform duration-700"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 transform -rotate-45 group-hover:rotate-45 transition-transform duration-700"></div>

              <CardHeader className="relative text-center pb-8 pt-10">
                <div className={`w-28 h-28 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-soft transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                  treatment.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary-hover' : 'bg-gradient-to-br from-secondary to-secondary-hover'
                }`}>
                  <treatment.icon className="w-14 h-14 text-white" />
                </div>
                <CardTitle className="font-display text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {treatment.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                  {treatment.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 px-8 pb-10">
                <div className="space-y-4 mb-8">
                  {treatment.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-secondary/30 transition-colors duration-300">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{service}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={treatment.color === 'primary' ? 'default' : 'secondary'} 
                  className="w-full py-3 text-base md:text-lg hover-lift focus-ring whitespace-normal h-auto min-h-[44px]"
                >
                  <span className="text-center">Saiba mais sobre {treatment.title.toLowerCase()}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-soft rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft hover-lift transition-all duration-500 border border-border/50 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-transparent rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Não sabe qual tratamento é ideal?
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
                Nossa equipe especializada está pronta para avaliar seu caso e recomendar 
                o melhor plano de tratamento personalizado para suas necessidades específicas.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg hover-lift focus-ring w-full sm:w-auto whitespace-normal h-auto min-h-[48px]"
              >
                Fale com nossa equipe agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};