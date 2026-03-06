import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Zap, Users, Mail, Briefcase, Calendar } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { href: "#nosotros", label: "Nosotros", icon: Users },
  { href: "#servicios", label: "Servicios", icon: Zap },
  { href: "#casos", label: "Casos de Éxito", icon: Briefcase },
  { href: "#contacto", label: "Contacto", icon: Mail },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <img 
                src={logo} 
                alt="Los Autómatas" 
                className="relative w-12 h-12 object-contain transform group-hover:scale-110 transition-transform"
              />
            </div>
            <div>
              <p className="font-display font-bold text-xl text-foreground">Los Autómatas</p>
                <p className="text-xs text-muted-foreground hidden sm:block font-mono">IA & Automatización en el Perú</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-accent/5 transition-all"
              >
                <item.icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </span>
                <span className="absolute -bottom-1 left-3 h-0.5 bg-accent w-0 group-hover:w-[calc(100%-24px)] transition-all shadow-[0_0_10px_hsl(345_100%_65%)]"></span>
              </a>
            ))}
            <a
              href="#contacto"
              className="neu-button px-6 py-3 rounded-full font-semibold text-primary-foreground flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consultoría</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg glass"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass rounded-2xl overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-accent/10 transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{item.label}</span>
                  </a>
                ))}
                <div className="border-t border-foreground/10 my-2"></div>
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 neu-button text-primary-foreground px-6 py-4 rounded-xl font-semibold text-center"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consultoría Gratis</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
