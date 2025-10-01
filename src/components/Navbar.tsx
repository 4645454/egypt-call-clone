import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-card/50 backdrop-blur-xl border border-border rounded-full px-6 py-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Auto Boom" className="h-10 w-10 object-contain" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#why-us" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Why Us
            </a>
            <a href="#services" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Services
            </a>
          </div>

          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={() => window.location.href = '#contact'}
          >
            Let's Talk →
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
