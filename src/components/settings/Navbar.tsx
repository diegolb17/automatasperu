import { useEffect, useState } from "react";
import logo from "@/assets/logo-automatas.jpeg";
import ThemeToggle from "./ThemeToggle";

interface User {
  Id: number;
  Nombre: string;
  Correo: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('currentUser');
      if (stored) {
        const userData = JSON.parse(stored) as User;
        setUser(userData);
        console.log('User loaded in Navbar:', userData);
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Los Autómatas" className="w-8 h-8 rounded-md" />
        <span className="font-display text-sm tracking-wide">Los Autómatas</span>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Bienvenido/a,</span>
            <span className="text-sm font-medium text-foreground">
              {user.Nombre || user.Correo}
            </span>
          </div>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;