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
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up px-4 sm:px-0">
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8">
            Tratamentos <span className="text-primary">Oferecidos</span>
          </h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-hero mx-auto mb-6 sm:mb-10 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            Oferecemos diferentes modalidades de tratamento, adaptadas às necessidades específicas 
            de cada paciente e grau de dependência.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
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

              <CardHeader className="relative text-center pb-6 sm:pb-8 pt-6 sm:pt-10">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-soft transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                  treatment.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary-hover' : 'bg-gradient-to-br from-secondary to-secondary-hover'
                }`}>
                  <treatment.icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
                </div>
                <CardTitle className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                  {treatment.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                  {treatment.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 px-6 sm:px-8 pb-6 sm:pb-10">
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {treatment.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-secondary/30 transition-colors duration-300">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>
                

              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};