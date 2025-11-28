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
    <section id="pricing" className="py-20 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-muted-foreground uppercase tracking-widest text-sm mb-12">
          {t('pricing.title')} {t('pricing.titleHighlight')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card border p-6 rounded-2xl transition-colors ${
                plan.highlighted ? 'border-primary' : 'border-border hover:border-primary/30'
              }`}
            >
              {plan.badgeKey && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {t(plan.badgeKey)}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-semibold mb-1">{t(plan.titleKey)}</h3>
                <p className="text-xs text-muted-foreground mb-4">{t(plan.subtitleKey)}</p>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm"> EGP{t('pricing.month')}</span>
                </div>
                <p className="text-xs text-muted-foreground">{t(plan.messagesKey)}</p>
              </div>

              <Button 
                className={`w-full mb-4 rounded-full ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
                onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
              >
                {t('pricing.bookCall')}
              </Button>

              <div className="space-y-2">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-xs text-muted-foreground">{t(feature.textKey)}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Email Section */}
        <div className="text-center border-t border-border pt-12">
          <p className="text-muted-foreground uppercase tracking-widest text-sm mb-2">Email</p>
          <a href="mailto:info@viralboom.online" className="text-primary hover:underline">
            info@viralboom.online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
