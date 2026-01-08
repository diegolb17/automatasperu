import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";

const typingTexts = [
  "Agentes Telefónicos IA",
  "Automatización n8n",
  "WhatsApp Business Intelligence",
  "Flujos 24/7 Sin Parar",
];

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingTexts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background"></div>
      
      {/* Neon Glow Effect - Digital Sunrise */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full filter blur-[150px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full filter blur-[80px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="text-accent text-sm font-medium font-mono">🇵🇪 Tecnología 100% Desarrollada en Perú</span>
        </motion.div>

        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block text-foreground"
          >
            Llevando a tu Empresa
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block text-gradient glow-text"
          >
            a la Era de la Automatización
          </motion.span>
        </h1>

        {/* Subtitle / Vision */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-6"
        >
          Somos la primera agencia peruana construyendo el futuro. Convertimos negocios 
          tradicionales en <span className="text-accent font-semibold">potencias digitales</span> usando 
          Agentes de IA y flujos automatizados que trabajan <span className="text-accent font-semibold">24/7</span>.
        </motion.p>

        {/* Typing Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl md:text-2xl text-foreground/80 mb-12 h-10 font-mono"
        >
          <span className="text-accent">&gt;</span> {currentText}
          <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse"></span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#contacto"
            className="group neu-button px-8 py-4 rounded-full font-semibold text-lg text-primary-foreground flex items-center space-x-2"
          >
            <Rocket className="w-5 h-5" />
            <span>Quiero Automatizar mi Negocio</span>
          </a>
          <a
            href="#casos"
            className="group btn-outline-neon px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Ver Tecnología en Acción</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center animate-bounce"
        >
          <a href="#nosotros" className="block">
            <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse shadow-[0_0_10px_hsl(345_100%_65%)]"></div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
