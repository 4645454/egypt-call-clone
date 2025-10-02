import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp, Phone, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const services = [
    {
      icon: MessageSquare,
      title: t('services.service1.title'),
      description: t('services.service1.desc'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: t('services.service2.title'),
      description: t('services.service2.desc'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      title: t('services.service3.title'),
      description: t('services.service3.desc'),
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: t('services.service4.title'),
      description: t('services.service4.desc'),
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="relative py-20 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-orange-400/20 border-2 border-primary/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t('services.title')} <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">{t('services.titleHighlight')}</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          {t('services.description')}
        </p>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(30_100%_55%/0.2)] group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
