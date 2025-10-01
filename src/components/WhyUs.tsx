import { Card } from "@/components/ui/card";
import { Zap, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our systems operate at remarkable velocity, completing in mere seconds what would consume hours of manual effort, delivering immediate competitive advantage."
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Each solution we craft is engineered with meticulous attention to detail, removing mistakes and guaranteeing seamless business operations."
  },
  {
    icon: Users,
    title: "Customer-First Design",
    description: "Beyond simple process automation, we engineer delightful customer experiences that foster loyalty and drive repeat engagement."
  }
];

const WhyUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="relative py-20 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Why Us</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Why <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Auto Boom</span> Stands Out
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Beyond simple automation solutions, we fundamentally transform business operations. Each solution we create delivers lightning-fast, friction-free customer experiences.
        </p>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="relative bg-card/50 backdrop-blur-sm border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(30_100%_55%/0.2)] group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_40px_hsl(30_100%_55%/0.5)] text-primary-foreground font-bold px-8 transition-all duration-300"
            onClick={() => window.location.href = '#contact'}
          >
            Book A Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
