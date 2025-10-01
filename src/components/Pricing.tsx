import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    title: "Starter Pack",
    subtitle: "Supports Text-only, Ideal for small businesses",
    price: "40,000",
    messages: "Up to 40K messages",
    features: [
      { text: "Handles up to 40K Messages A Month", included: true },
      { text: "Continues Support", included: true },
      { text: "Supports Text Response", included: true },
      { text: "No Image Understanding", included: false },
      { text: "No Voice Understanding", included: false }
    ],
    highlighted: false
  },
  {
    title: "Starter Plus Pack",
    subtitle: "Multimodal, Supports (Text + Voice + Image)",
    price: "50,000",
    messages: "Up to 50K messages",
    badge: "Most Popular",
    features: [
      { text: "Handles up to 50K Messages A Month", included: true },
      { text: "Fast Continues Support", included: true },
      { text: "Supports Text Response", included: true },
      { text: "Supports Image Understanding", included: true },
      { text: "Supports Voice Understanding", included: true }
    ],
    highlighted: true
  },
  {
    title: "Pro Pack",
    subtitle: "Multimodal at scale, ideal for growing & mid-sized businesses",
    price: "75,000",
    messages: "Up to 75K messages",
    features: [
      { text: "Handles up to 75K Messages A Month", included: true },
      { text: "Advanced customization", included: true },
      { text: "Faster AI response", included: true },
      { text: "Priority Support", included: true }
    ],
    highlighted: false
  },
  {
    title: "Advanced Pack",
    subtitle: "Multimodal at huge scale, ideal for large-sized businesses",
    price: "120,000",
    messages: "Up to 120K messages",
    features: [
      { text: "Handles up to 120K Messages A Month", included: true },
      { text: "Advanced Reporting & analytics", included: true }
    ],
    highlighted: true
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-secondary tracking-wider uppercase">Pricing</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Choose Your <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Perfect Plan</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Select the package that fits your business needs and scale as you grow.
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
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> EGP</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{plan.messages}</p>
              </div>

              <Button 
                className={`w-full mb-6 ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary'
                }`}
                onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
              >
                Book A Call ↘
              </Button>

              <div className="space-y-3">
                <p className="text-sm font-semibold mb-3">
                  {index < 2 ? 'Plan Details:' : 'Everything in the previous plus:'}
                </p>
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6">Schedule a call with us to discuss your automation needs</p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_40px_hsl(30_100%_55%/0.5)] text-primary-foreground font-bold px-8 transition-all duration-300"
                onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
              >
                Book A Call
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;