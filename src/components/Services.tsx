import { motion } from "framer-motion";
import { Phone, Workflow, MessageCircle, Lightbulb, Check } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Agentes Telefónicos IA (Vapi)",
    description: "Recepcionistas con voz humana que cierran ventas y agendan citas mientras duermes. Acento peruano o neutro, tú eliges.",
    features: ["Voz natural indistinguible", "Cierra ventas automáticamente", "Agenda citas en tu calendario", "Transfiere a humanos si es necesario"],
  },
  {
    icon: Workflow,
    title: "Cerebros de Automatización (n8n)",
    description: "Conectamos tu CRM, WhatsApp y Google Sheets. Si es repetitivo, lo automatizamos para que tu equipo se enfoque en crecer.",
    features: ["Integración con +400 apps", "Flujos personalizados", "Sincronización en tiempo real", "Sin límites de automatización"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Intelligence",
    description: "Seguimiento ultra-personalizado. Recupera carritos abandonados y confirma asistencias automáticamente.",
    features: ["Mensajes personalizados", "Recuperación de leads", "Confirmaciones automáticas", "Análisis de conversaciones"],
  },
  {
    icon: Lightbulb,
    title: "Consultoría Estratégica",
    description: "No solo te damos el software, diseñamos la ingeniería de tu crecimiento comercial.",
    features: ["Diagnóstico de procesos", "Roadmap de automatización", "Capacitación a tu equipo", "Soporte continuo"],
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-50"></div>
      
      {/* Subtle glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-64 h-64 bg-accent/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-mono mb-4"
          >
             ARQUITECTURA 360°
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
             <span className="text-foreground">Más que solamente IA:</span>
            <br />
             <span className="text-gradient">Arquitectura de Automatización 360°</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatización de punta a punta. Desde la primera llamada hasta el cierre de venta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="neu-card p-8 rounded-2xl h-full neon-border">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:shadow-[0_0_30px_hsl(345_100%_65%/0.3)]">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-display">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <Check className="w-4 h-4 mr-2 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
