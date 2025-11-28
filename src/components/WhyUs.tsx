import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyUs = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Clock, title: t('whyUs.feature1.title'), description: t('whyUs.feature1.desc') },
    { icon: DollarSign, title: t('whyUs.feature2.title'), description: t('whyUs.feature2.desc') },
    { icon: Zap, title: t('whyUs.feature3.title'), description: t('whyUs.feature3.desc') },
    { icon: TrendingUp, title: t('whyUs.feature4.title'), description: t('whyUs.feature4.desc') },
  ];

  return (
    <section id="why-us" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-muted-foreground uppercase tracking-widest text-sm mb-12">
          {t('whyUs.title')} {t('whyUs.titleHighlight')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-card border-border p-6 rounded-2xl hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
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

export default WhyUs;
