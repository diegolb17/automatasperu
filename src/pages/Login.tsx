import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import Navbar from "@/components/config/Navbar";

const Login = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative pt-24 pb-16 px-6 bg-background">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[size:30px_30px] bg-[linear-gradient(to_right,_rgba(0,0,0,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,0,0,0.1)_1px,_transparent_1px)] dark:bg-[linear-gradient(to_right,_rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)]" />


          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center min-h-full">
          {/* Left: Welcome text */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
            <div className="max-w-lg px-16 animate-slide-right">
              <h1 className="text-5xl font-bold tracking-tight leading-tight mb-6 text-foreground">
                Bienvenido a{" "}
                <span className="text-primary">Los Autómatas</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Accede a tu espacio de automatización inteligente.
              </p>
            </div>
          </div>

          {/* Right: Auth Card */}
          <div className="flex-1 flex items-center justify-center p-6 lg:p-16 max-w-lg w-full">
            <div className="w-full animate-fade-up">
              {/* Mobile header */}
              <div className="lg:hidden text-center mb-10">
                <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">
                  Los <span className="text-primary">Autómatas</span>
                </h1>
                <p className="text-muted-foreground text-sm">
                  Tu espacio de automatización inteligente
                </p>
              </div>

              <div className="glass-card p-8 lg:p-10">
                {mode === "login" ? (
                  <LoginForm onSwitchToRegister={() => setMode("register")} />
                ) : (
                  <RegisterForm onSwitchToLogin={() => setMode("login")} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;