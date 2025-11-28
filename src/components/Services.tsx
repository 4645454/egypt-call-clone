import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: MessageSquare, title: t('services.service1.title'), description: t('services.service1.desc') },
    { icon: TrendingUp, title: t('services.service2.title'), description: t('services.service2.desc') },
    { icon: Phone, title: t('services.service3.title'), description: t('services.service3.desc') },
    { icon: Sparkles, title: t('services.service4.title'), description: t('services.service4.desc') },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-muted-foreground uppercase tracking-widest text-sm mb-12">
          {t('services.title')} {t('services.titleHighlight')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-card border-border p-6 rounded-2xl hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
