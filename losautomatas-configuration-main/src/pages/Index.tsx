import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo-automatas.jpeg";
import Navbar from "@/components/Navbar";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.img
            src={logo}
            alt="Los Autómatas"
            className="w-20 h-20 rounded-2xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight tracking-tight mb-6">
            Configura la Inteligencia{" "}
            <span className="italic text-primary">de tu Asistente.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg mx-auto font-light">
            Cada detalle define cómo tu IA representa tu marca.
          </p>

          <motion.button
            onClick={() => navigate("/settings")}
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-elegant hover:glow-accent-hover glow-accent"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Comenzar Configuración
          </motion.button>

          <p className="mt-8 text-xs text-muted-foreground">
            Proceso estructurado · 6 secciones · ~10 minutos
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
