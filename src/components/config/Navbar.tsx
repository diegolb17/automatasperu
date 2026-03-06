import logo from "@/assets/logo-automatas.jpeg";
import ThemeToggle from "@/components/settings/ThemeToggle";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border/50">
    <div className="flex items-center gap-3">
      <img src={logo} alt="Los Autómatas" className="w-8 h-8 rounded-md" />
      <span className="font-display text-sm tracking-wide">Los Autómatas</span>
    </div>
    <ThemeToggle />
  </nav>
);

export default Navbar;
