import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      titleKey: "pricing.plan1.title",
      subtitleKey: "pricing.plan1.subtitle",
      price: "5,999",
      messagesKey: "pricing.plan1.messages",
      features: [
        { textKey: "pricing.plan1.feature1", included: true },
        { textKey: "pricing.plan1.feature2", included: true },
        { textKey: "pricing.plan1.feature3", included: true },
        { textKey: "pricing.plan1.feature4", included: true },
        { textKey: "pricing.plan1.feature5", included: false },
        { textKey: "pricing.plan1.feature6", included: false }
      ],
      highlighted: false
    },
    {
      titleKey: "pricing.plan2.title",
      subtitleKey: "pricing.plan2.subtitle",
      price: "6,999",
      messagesKey: "pricing.plan2.messages",
      badgeKey: "pricing.plan2.badge",
      features: [
        { textKey: "pricing.plan2.feature1", included: true },
        { textKey: "pricing.plan2.feature2", included: true },
        { textKey: "pricing.plan2.feature3", included: true },
        { textKey: "pricing.plan2.feature4", included: true },
        { textKey: "pricing.plan2.feature5", included: true },
        { textKey: "pricing.plan2.feature6", included: true }
      ],
      highlighted: true
    },
    {
      titleKey: "pricing.plan3.title",
      subtitleKey: "pricing.plan3.subtitle",
      price: "8,499",
      messagesKey: "pricing.plan3.messages",
      features: [
        { textKey: "pricing.plan3.feature1", included: true },
        { textKey: "pricing.plan3.feature2", included: true },
        { textKey: "pricing.plan3.feature3", included: true },
        { textKey: "pricing.plan3.feature4", included: true },
        { textKey: "pricing.plan3.feature5", included: true }
      ],
      highlighted: false
    },
    {
      titleKey: "pricing.plan4.title",
      subtitleKey: "pricing.plan4.subtitle",
      price: "11,999",
      messagesKey: "pricing.plan4.messages",
      features: [
        { textKey: "pricing.plan4.feature1", included: true },
        { textKey: "pricing.plan4.feature2", included: true },
        { textKey: "pricing.plan4.feature3", included: true }
      ],
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-orange-400/20 border-2 border-primary/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t('pricing.title')} <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">{t('pricing.titleHighlight')}</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          {t('pricing.description')}
        </p>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card/50 backdrop-blur-sm border p-8 transition-all duration-300 hover:shadow-[0_0_30px_hsl(30_100%_55%/0.2)] group ${
                plan.highlighted 
                  ? 'border-primary bg-gradient-to-b from-primary/5 to-transparent' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.badgeKey && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                    {t(plan.badgeKey)}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{t(plan.titleKey)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t(plan.subtitleKey)}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> EGP</span>
                  <span className="text-sm text-muted-foreground">{t('pricing.month')}</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{t(plan.messagesKey)}</p>
              </div>

              <Button 
                className={`w-full mb-6 ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary'
                }`}
                onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
              >
                {t('pricing.bookCall')} ↘
              </Button>

              <div className="space-y-3">
                <p className="text-sm font-semibold mb-3">
                  {index < 2 ? t('pricing.planDetails') : t('pricing.everythingPlus')}
                </p>
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm text-muted-foreground">{t(feature.textKey)}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Final CTA Box */}
        <div className="max-w-2xl mx-auto">
          <Card className="relative bg-card/30 backdrop-blur-xl border border-primary/30 p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
            <div className="relative text-center">
              <h3 className="text-2xl font-bold mb-4">{t('pricing.cta.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('pricing.cta.description')}</p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_40px_hsl(30_100%_55%/0.5)] text-primary-foreground font-bold px-8 transition-all duration-300"
                onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
              >
                {t('pricing.bookCall')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;