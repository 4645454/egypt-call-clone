import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { Sun } from "lucide-react";

const Navbar = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "why-us", "services", "pricing"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "overview", label: t('nav.overview') },
    { id: "why-us", label: t('nav.whyUs') },
    { id: "services", label: t('nav.services') },
    { id: "pricing", label: t('nav.pricing') },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-card/90 backdrop-blur-xl border border-border rounded-full px-2 py-2">
        <span className="px-4 py-2 text-sm font-semibold tracking-widest text-foreground">
          AUTO BOOM
        </span>
        
        <div className="w-px h-6 bg-border mx-1" />
        
        <button className="p-2 rounded-full hover:bg-muted transition-colors">
          <Sun className="w-4 h-4 text-muted-foreground" />
        </button>
        
        <LanguageToggle />
        
        <div className="w-px h-6 bg-border mx-1" />

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
              activeSection === item.id
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
