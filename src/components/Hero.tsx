import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="overview" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <img src={logo} alt="Auto Boom" className="w-24 h-24 mx-auto mb-8 rounded-full" />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t('hero.title1')}{' '}
          <span className="text-primary">{t('hero.title2')}</span>
        </h1>
        
        <p className="text-muted-foreground text-lg uppercase tracking-widest mb-12">
          {t('hero.badge')}
        </p>

        <Button 
          variant="ghost"
          size="lg"
          className="text-muted-foreground hover:text-foreground"
          onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-5 h-5 mr-2" />
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
