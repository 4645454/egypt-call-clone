import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "why-us", "services", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary animate-gradient"></div>
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between bg-card/50 backdrop-blur-xl border border-border rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Auto Boom" className="h-10 w-10 object-contain" />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#overview" 
                className={`text-sm transition-all duration-300 hover:scale-110 ${
                  activeSection === "overview" 
                    ? "text-primary font-semibold" 
                    : "text-foreground/80 hover:text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Overview
              </a>
              <a 
                href="#why-us" 
                className={`text-sm transition-all duration-300 hover:scale-110 ${
                  activeSection === "why-us" 
                    ? "text-primary font-semibold" 
                    : "text-foreground/80 hover:text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Why Us
              </a>
              <a 
                href="#services" 
                className={`text-sm transition-all duration-300 hover:scale-110 ${
                  activeSection === "services" 
                    ? "text-primary font-semibold" 
                    : "text-foreground/80 hover:text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Services
              </a>
              <a 
                href="#" 
                className="text-sm transition-all duration-300 hover:scale-110 text-foreground/80 hover:text-foreground"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img src={logo} alt="Auto Boom" className="h-8 w-8 object-contain" />
              </a>
            </div>

            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '#contact'}
            >
              Let's Talk →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
