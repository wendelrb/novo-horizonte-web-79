import { Shield, Users, Heart, Award } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Estrutura protegida e monitorada 24 horas para garantir o bem-estar dos pacientes"
    },
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais especializados em dependência química e saúde mental"
    },
    {
      icon: Heart,
      title: "Acompanhamento Familiar",
      description: "Suporte e orientação para familiares durante todo o processo de recuperação"
    },
    {
      icon: Award,
      title: "15 Anos de Experiência",
      description: "Mais de uma década dedicada à reabilitação e reintegração social"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Sobre a <span className="text-primary">Novo Horizonte</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-hero mx-auto mb-10 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            Há <strong className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-lg">15 anos</strong> dedicados à recuperação e reintegração social, 
            oferecemos tratamento humanizado com abordagem multidisciplinar especializada em dependência química e alcoolismo.
          </p>
        </div>

        {/* Mission, Approach, Differentials */}
        <div className="grid lg:grid-cols-3 gap-10 mb-24">
          <div className="group relative bg-gradient-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-hero transition-all duration-700 hover-lift border border-primary/10 overflow-hidden">
            <div className="absolute -top-6 left-8 md:left-10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center shadow-card group-hover:rotate-12 transition-transform duration-500">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 mt-6">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Proporcionar um ambiente acolhedor e seguro para a recuperação de pessoas com dependência química, 
                oferecendo tratamento humanizado e eficaz que promova a reintegração social e familiar.
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl"></div>
          </div>
          
          <div className="group relative bg-gradient-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-hero transition-all duration-700 hover-lift border border-secondary/10 overflow-hidden lg:translate-y-6">
            <div className="absolute -top-6 left-8 md:left-10">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-hover rounded-2xl flex items-center justify-center shadow-card group-hover:rotate-12 transition-transform duration-500">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-transparent rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <h3 className="font-display text-xl md:text-2xl font-bold text-secondary mb-4 md:mb-6 mt-6">Nossa Abordagem</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Tratamento personalizado com equipe multidisciplinar, combinando terapias individuais e em grupo, 
                atividades terapêuticas e acompanhamento médico especializado para cada fase da recuperação.
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl"></div>
          </div>
          
          <div className="group relative bg-gradient-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-hero transition-all duration-700 hover-lift border border-primary/10 overflow-hidden">
            <div className="absolute -top-6 left-8 md:left-10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-card group-hover:rotate-12 transition-transform duration-500">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 mt-6">Nossos Diferenciais</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Infraestrutura completa, localização estratégica, programa de reinserção social 
                e acompanhamento familiar contínuo para garantir resultados duradouros.
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl"></div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-500 hover-lift group border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <highlight.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h4 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                {highlight.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};