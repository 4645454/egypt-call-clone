import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden" ref={ref}>
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-primary">{t('hero.badge')}</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {t('hero.title1')}{' '}
          <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            {t('hero.title2')}
          </span>
          {' '}{t('hero.title3')}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>

        <Button 
          size="lg"
          className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_40px_hsl(30_100%_55%/0.5)] text-primary-foreground font-bold text-lg px-8 transition-all duration-300 hover:scale-105 group"
          onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
        >
          {t('hero.cta')}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
