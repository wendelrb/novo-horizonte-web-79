import { Heart, Building, Users2, Stethoscope, FileText } from "lucide-react";

export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Tratamento com respeito, dignidade e compreensão das necessidades individuais de cada paciente",
      bgColor: "from-pink-100 to-rose-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Building,
      title: "Estrutura Completa",
      description: "Instalações modernas e confortáveis com todos os recursos necessários para recuperação",
      bgColor: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Users2,
      title: "Suporte Familiar",
      description: "Programa de orientação e acompanhamento para familiares durante todo o processo",
      bgColor: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      icon: Stethoscope,
      title: "Equipe Multidisciplinar",
      description: "Médicos, psicólogos, terapeutas e enfermeiros especializados em dependência química",
      bgColor: "from-purple-100 to-violet-100",
      iconColor: "text-purple-600"
    },
    {
      icon: FileText,
      title: "Plano Personalizado",
      description: "Cada paciente recebe um programa de tratamento adaptado às suas necessidades específicas",
      bgColor: "from-orange-100 to-amber-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Por que escolher a <span className="text-primary">Novo Horizonte?</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-hero mx-auto mb-10 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            Somos reconhecidos pela excelência no tratamento de dependência química, 
            oferecendo cuidado integral e resultados comprovados há mais de uma década.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.slice(0, 3).map((reason, index) => (
              <div 
                key={index}
                className="group relative bg-card rounded-3xl p-10 shadow-card hover:shadow-hero transition-all duration-700 hover-lift border border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${reason.bgColor} flex items-center justify-center mb-8 shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <reason.icon className={`w-12 h-12 ${reason.iconColor}`} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {reason.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-hero transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Centered */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16">
          {reasons.slice(3).map((reason, index) => (
            <div 
              key={index + 3}
              className="group relative bg-card rounded-3xl p-10 shadow-card hover:shadow-hero transition-all duration-700 hover-lift border border-border/50 overflow-hidden"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${reason.bgColor} flex items-center justify-center mb-8 shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <reason.icon className={`w-12 h-12 ${reason.iconColor}`} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {reason.description}
                </p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-hero transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card rounded-3xl p-12 shadow-card hover-lift transition-all duration-500 border border-border/50 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up group">
              <div className="font-display text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">15+</div>
              <p className="text-muted-foreground text-lg font-medium">Anos de experiência</p>
            </div>
            <div className="animate-fade-in-up group" style={{ animationDelay: '0.1s' }}>
              <div className="font-display text-6xl font-bold text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
              <p className="text-muted-foreground text-lg font-medium">Vidas transformadas</p>
            </div>
            <div className="animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
              <div className="font-display text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">5</div>
              <p className="text-muted-foreground text-lg font-medium">Unidades no RS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};