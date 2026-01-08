import { Bot, Phone, Mail, MapPin, Instagram, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative py-16 bg-dark-100 border-t border-dark-300 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-accent blur-xl opacity-30"></div>
                <img 
                  src={logo} 
                  alt="Los Autómatas" 
                  className="relative w-12 h-12 object-contain"
                />
              </div>
              <div>
                <p className="font-display font-bold text-xl text-foreground">Los Autómatas</p>
                <p className="text-xs text-accent font-mono">Perú Potencia IA</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Primera agencia peruana construyendo el futuro de la automatización. 
              Agentes de IA, flujos n8n y WhatsApp Business Intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/automatas.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-accent/20 hover:shadow-[0_0_15px_hsl(345_100%_65%/0.3)] transition-all"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 font-display">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-accent transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-muted-foreground hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#casos" className="text-muted-foreground hover:text-accent transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 font-display">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground font-mono text-sm">+51 991 623 582</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground font-mono text-sm">losautomatasperu@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Lima, Perú 🇵🇪</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-300 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center font-mono">
              © 2026 Los Autómatas. Hecho con{" "}
              <Heart className="w-4 h-4 text-accent mx-1" /> en Perú
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
