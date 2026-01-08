import { motion } from "framer-motion";
import { TrendingUp, Building2, ShoppingBag, Scale } from "lucide-react";

const cases = [
  {
    icon: Building2,
    industry: "Inmobiliaria",
    title: "Inmobiliaria Horizonte Lima",
    problem: "Perdían el 60% de llamadas los fines de semana.",
    solution: "Agente IA que pre-califica compradores y agenda visitas en Calendly.",
    result: "S/ 450,000",
    resultLabel: "en ventas adicionales el primer mes",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    icon: ShoppingBag,
    industry: "E-commerce / Retail",
    title: "Moda Tech Perú",
    problem: "Atención al cliente colapsada por preguntas sobre envíos.",
    solution: "Automatización n8n + WhatsApp para tracking automático.",
    result: "-80%",
    resultLabel: "de carga operativa en soporte",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    icon: Scale,
    industry: "Servicios Profesionales",
    title: "Estudio Jurídico Central",
    problem: "Abogados perdiendo tiempo filtrando clientes no calificados.",
    solution: "Recepcionista IA que entrevista y filtra casos según especialidad.",
    result: "100%",
    resultLabel: "de citas con clientes de alto valor",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
];

export const Cases = () => {
  return (
    <section id="casos" className="py-24 bg-dark-50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      {/* Subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"></div>
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
            CASOS DE ÉXITO
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Empresas Peruanas que ya</span>
            <br />
            <span className="text-gradient">Lideran el Cambio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reales de negocios que confiaron en la automatización inteligente.
          </p>
        </div>

        {/* Cases - Horizontal Cards */}
        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="neu-card rounded-2xl overflow-hidden neon-border">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center space-x-2 px-3 py-1.5 bg-accent/90 text-primary-foreground rounded-full text-sm font-semibold">
                        <caseItem.icon className="w-4 h-4" />
                        <span>{caseItem.industry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-display">{caseItem.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-xs text-accent font-mono uppercase tracking-wider">Problema</span>
                        <p className="text-muted-foreground">{caseItem.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs text-accent font-mono uppercase tracking-wider">Solución</span>
                        <p className="text-muted-foreground">{caseItem.solution}</p>
                      </div>
                    </div>

                    {/* Result - Big Number */}
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl md:text-5xl font-bold text-accent glow-text font-display">
                        {caseItem.result}
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <TrendingUp className="w-5 h-5 text-accent" />
                        <span>{caseItem.resultLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
