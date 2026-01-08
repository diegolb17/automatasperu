import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("https://n8n-diego-n8n.am0d7p.easypanel.host/webhook/automatas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "no-cors",
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          mensaje: formData.message,
          telefono: formData.phone,
          "tipo de negocio": formData.business
        })
      });

      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos en menos de 24 horas."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Intenta de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      {/* Subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-foreground">¿Listo para que tu empresa</span>
            <br />
            <span className="text-gradient">funcione sola?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            Únete a la revolución. Hagamos de Perú una potencia en IA.
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="neu-card p-8 md:p-10 rounded-2xl neon-border"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground font-mono">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-dark-300 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-all input-neon"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground font-mono">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-dark-300 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-all input-neon"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground font-mono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-dark-300 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-all input-neon"
                  placeholder="+51 999 999 999"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground font-mono">
                  Tipo de Negocio
                </label>
                <input
                  type="text"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-dark-300 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-all input-neon"
                  placeholder="Inmobiliaria, E-commerce, etc."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground font-mono">
                Cuéntanos sobre tu negocio
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-dark-300 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-all resize-none input-neon"
                placeholder="¿Qué procesos te gustaría automatizar? ¿Cuántas llamadas recibes al día?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full neu-button px-8 py-4 rounded-full font-semibold text-lg text-primary-foreground flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className={`w-5 h-5 ${isLoading ? "animate-pulse" : ""}`} />
              <span>{isLoading ? "Enviando..." : "Quiero Automatizar mi Negocio"}</span>
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mt-8"
        >
          <a
            href="https://wa.me/51991623582"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 glass rounded-full hover:bg-accent/10 transition-all group neon-border"
          >
            <MessageCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/automatas.pe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 glass rounded-full hover:bg-accent/10 transition-all group neon-border"
          >
            <Instagram className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
