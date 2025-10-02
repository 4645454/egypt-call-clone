import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Zap, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyUs = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t('whyUs.feature1.title'),
      description: t('whyUs.feature1.desc')
    },
    {
      icon: DollarSign,
      title: t('whyUs.feature2.title'),
      description: t('whyUs.feature2.desc')
    },
    {
      icon: Zap,
      title: t('whyUs.feature3.title'),
      description: t('whyUs.feature3.desc')
    },
    {
      icon: TrendingUp,
      title: t('whyUs.feature4.title'),
      description: t('whyUs.feature4.desc')
    }
  ];

  return (
    <section id="why-us" className="relative py-20 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-orange-400/20 border-2 border-primary/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t('whyUs.title')} <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">{t('whyUs.titleHighlight')}</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          {t('whyUs.description')}
        </p>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="relative bg-card/50 backdrop-blur-sm border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(30_100%_55%/0.2)] group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
