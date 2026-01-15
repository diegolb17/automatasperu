import { motion } from "framer-motion";
import { TrendingUp, Building2, ShoppingBag, Scale, Megaphone } from "lucide-react";

const cases = [
  {
    icon: Megaphone,
    industry: "Marketing Digital",
    title: "OPTMEDIA",
    problem: "Desafío: Procesos operativos manuales y lentos que limitaban la capacidad de atención y crecimiento de la cartera de clientes.",
    solution: "Solución con IA: Implementamos una suite de automatización con chatbots inteligentes y sistemas de 'cliente incógnito' 24/7. Resultado: Operaciones optimizadas, respuesta inmediata y un ahorro financiero masivo y comprobado para sus clientes.",
    result: "S/ 1,000,000+",
    resultLabel: "en ahorros para sus clientes",
    image: "/optmedia.png",
  },
  {
    icon: ShoppingBag,
    industry: "Salud / Nutrición Infantil",
    title: "Muna&CO",
    problem: "Miles de madres en cada rincón del Perú enfrentan la incertidumbre de la nutrición infantil sin acceso a asesoría experta inmediata, donde cada segundo cuenta para el desarrollo de una nueva vida.",
    solution: "Creamos un Ecosistema de IA Multicanal: un Callbot de voz hiper-realista orquestado con bases de datos dinámicas y una integración quirúrgica con WhatsApp. Un agente IA que atiende, escucha y guía a las madres peruanas 24/7, democratizando el acceso a la salud con precisión clínica y calidez humana.",
    result: "+200",
    resultLabel: "madres satisfechas con la atención inmediata",
    image: "/munayco.png",
  },
  {
    icon: Building2,
    industry: "Industria Alimentaria",
    title: "Thalassa Hub",
    problem: "Thalassa Hub (25 años navegando la Industria Alimentaria). Susana Serna, CEO, enfrentaba una desconexión digital crítica. Necesitaba urgentemente una nueva web con captura de leads automatizada hacia Gmail, y una solución de formularios con IA para entornos de alta presión en ferias, capaces de orquestar seguimientos inmediatos por WhatsApp y correo para no perder ninguna oportunidad.",
    solution: "Implementamos un ecosistema digital completo: una nueva web integrada con automatizaciones de backend hacia Gmail. Desplegamos formularios inteligentes con IA para ferias que disparan secuencias omnicanal instantáneas y personalizadas vía WhatsApp y Gmail.",
    result: "30x",
    resultLabel: "aumento en leads, cero prospectos perdidos",
    image: "/thalassa.png",
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
                  <div className={`relative h-64 md:h-auto overflow-hidden ${caseItem.title === "OPTMEDIA" || caseItem.title === "Muna&CO" || caseItem.title === "Thalassa Hub" ? "flex items-center justify-center" : ""}`}>
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                       className={`w-full h-full ${caseItem.title === "OPTMEDIA" || caseItem.title === "Muna&CO" || caseItem.title === "Thalassa Hub" ? "object-contain bg-dark p-4 max-h-full max-w-full" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                    />
                      <div className={`absolute inset-0 ${caseItem.title === "OPTMEDIA" || caseItem.title === "Muna&CO" || caseItem.title === "Thalassa Hub" ? "bg-gradient-to-b from-transparent via-dark/10 to-dark/40" : "bg-gradient-to-r from-dark via-dark/80 to-transparent"}`}></div>
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
                       <div className={`${caseItem.title === "OPTMEDIA" ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"} font-bold text-accent glow-text font-display`}>
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
