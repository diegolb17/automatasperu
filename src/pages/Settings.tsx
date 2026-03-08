import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/settings/Navbar";
import { FormData, initialFormData, steps } from "@/lib/form-schema";
import Step1Identity from "@/components/settings/steps/Step1Identity";
import Step2Audience from "@/components/settings/steps/Step2Audience";
import Step3Personality from "@/components/settings/steps/Step3Personality";
import Step4Messages from "@/components/settings/steps/Step4Messages";
import Step5Payments from "@/components/settings/steps/Step5Payments";
import Step6Automation from "@/components/settings/steps/Step6Automation";

interface User {
  Id: number;
  Nombre: string;
  Correo: string;
}

const Settings = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('currentUser');
      if (stored) {
        const userData = JSON.parse(stored) as User;
        setUser(userData);
        console.log('User loaded in Settings:', userData);
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
    }
  }, []);

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const handleSubmit = async () => {
    const required = ["companyName", "assistantName", "industry", "brandDescription", "buyerPersona", "communicationStyle", "salesStyle", "welcomeMessage", "saleConfirmation"];
    const missing = required.filter((key) => !formData[key as keyof FormData]?.toString().trim());

    if (missing.length > 0) {
      toast.error("Por favor completa todos los campos requeridos antes de enviar.");
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Reemplazar con llamada a API real
      console.log('Configuración a enviar:', formData);
      setIsSubmitted(true);
    } catch {
      toast.error("Error al enviar la configuración. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepComponents = [
    <Step1Identity data={formData} onChange={handleChange} />,
    <Step2Audience data={formData} onChange={handleChange} />,
    <Step3Personality data={formData} onChange={handleChange} />,
    <Step4Messages data={formData} onChange={handleChange} />,
    <Step5Payments data={formData} onChange={handleChange} />,
    <Step6Automation data={formData} onChange={handleChange} />,
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-md"
          >
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-display font-medium mb-4">Configuración Recibida</h1>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro equipo comenzará la implementación estratégica de tu asistente IA.
              Te contactaremos pronto con los próximos pasos.
            </p>
            <p className="mt-8 text-xs text-muted-foreground italic">
              Estamos listos para construir inteligencia.
            </p>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-[920px] mx-auto">
          {/* User Welcome */}
          {user && (
            <div className="mb-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h1 className="text-2xl font-display font-medium text-foreground mb-2">
                Bienvenido/a, <span className="text-primary">{user.Nombre || user.Correo}</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Estás configurando tu asistente de IA personalizado. Completa cada paso para definir su personalidad y funciones.
              </p>
            </div>
          )}

          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground font-medium">
                Paso {currentStep + 1} de {steps.length}
              </span>
              <span className="text-xs text-muted-foreground">
                {steps[currentStep].subtitle}
              </span>
            </div>
            <div className="h-[2px] bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
            {/* Step indicators */}
            <div className="flex justify-between mt-4">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentStep ? 1 : -1); setCurrentStep(i); }}
                  className={`text-xs transition-elegant ${i === currentStep ? "text-primary font-medium" : i < currentStep ? "text-foreground/60" : "text-muted-foreground/40"}`}
                >
                  {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Form Step */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {stepComponents[currentStep]}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-border/50">
            <button
              onClick={prev}
              disabled={currentStep === 0}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-elegant disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-elegant hover:glow-accent-hover glow-accent disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar Configuración"}
                <Send className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={next}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-elegant hover:glow-accent-hover glow-accent"
              >
                Siguiente
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;