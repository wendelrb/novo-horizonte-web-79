import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-foreground text-background py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Clínica <span className="text-secondary">Novo Horizonte</span>
              </h3>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Há 15 anos dedicados à recuperação e reintegração social, oferecemos 
              tratamento humanizado com abordagem multidisciplinar especializada 
              em dependência química e alcoolismo.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-background/90">(51) 3333-4444</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-background/90">contato@novohorizonte.com.br</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Atendimento
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-background/90 text-sm">Segunda a Sexta</p>
                  <p className="text-background/70 text-sm">8h às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-background/90 text-sm">Sábados</p>
                  <p className="text-background/70 text-sm">8h às 12h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-background/90 text-sm">Emergências</p>
                  <p className="text-background/70 text-sm">24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Unidades
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90 text-sm">Porto Alegre - Centro</p>
                  <p className="text-background/70 text-xs">Unidade Principal</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90 text-sm">Capão da Canoa</p>
                  <p className="text-background/70 text-xs">Unidade Praia</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90 text-sm">Canoas, Gravataí, Pelotas</p>
                  <p className="text-background/70 text-xs">Outras unidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2024 Clínica Novo Horizonte. Todos os direitos reservados.
            </p>
            <p className="text-background/70 text-sm">
              CNES: 123456 | Responsável Técnico: Dr. João Silva - CRM/RS 12345
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};