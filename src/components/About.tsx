import { motion } from "framer-motion";
import { Bot, Phone, MessageCircle, Zap, Clock, Shield } from "lucide-react";

export const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Diseñamos el Cerebro Digital</span>
            <br />
            <span className="text-foreground">que tu Negocio Necesita</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Somos la primera agencia peruana especializada en crear agentes de voz telefónicos con IA
            que atienden, reservan y hacen seguimiento como si fueran tu mejor empleado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="code-highlight rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-dark-200 border-b border-dark-300">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-muted-foreground font-mono">agente@losautomatas:~</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-muted-foreground">$ whoami</div>
                <div className="mt-2 space-y-1">
                  <div><span className="text-accent">Nombre:</span> <span className="text-foreground/80">Los Autómatas</span></div>
                   <div><span className="text-accent">Tipo:</span> <span className="text-foreground/80">Agencia de Automatización & IA</span></div>
                  <div><span className="text-accent">Ubicación:</span> <span className="text-foreground/80">Lima, Perú 🇵🇪</span></div>
                   <div><span className="text-accent">Especialidad:</span> <span className="text-foreground/80">Arquitectura de Ecosistemas Autónomos</span></div>
                </div>
                <div className="mt-4 text-muted-foreground">$ ls servicios/</div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-foreground/80">
                  <div>agentes-telefonicos/</div>
                  <div>reservas-24-7/</div>
                  <div>whatsapp-followup/</div>
                  <div>voz-natural/</div>
                  <div>integraciones/</div>
                  <div>analytics/</div>
                </div>
                <div className="mt-4">
                  <span className="text-muted-foreground">$</span>
                  <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="glass-dark p-6 rounded-xl border border-accent/20">
              <h4 className="text-lg font-semibold text-accent mb-3">🎯 Nuestra Misión</h4>
              <p className="text-foreground/80">
                Liberar a los negocios peruanos de las llamadas repetitivas con tecnología 
                de punta, permitiéndoles enfocarse en lo que realmente importa: crecer.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="neu-card p-6 rounded-xl group hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">Llamadas Entrantes</h5>
              <p className="text-sm text-muted-foreground">Atención automática sin esperas</p>
            </div>

            <div className="neu-card p-6 rounded-xl group hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">Voz Natural</h5>
              <p className="text-sm text-muted-foreground">Conversación fluida y humana</p>
            </div>

            <div className="neu-card p-6 rounded-xl group hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">WhatsApp</h5>
              <p className="text-sm text-muted-foreground">Seguimiento multicanal</p>
            </div>

            <div className="neu-card p-6 rounded-xl group hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">24/7 Activo</h5>
              <p className="text-sm text-muted-foreground">Sin pausas ni descansos</p>
            </div>

            <div className="neu-card p-6 rounded-xl group hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">Respuesta Rápida</h5>
              <p className="text-sm text-muted-foreground">3 segundos máximo</p>
            </div>

            <div className="neu-card p-6 rounded-xl group hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">Integraciones</h5>
              <p className="text-sm text-muted-foreground">CRM, Calendarios, APIs</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
