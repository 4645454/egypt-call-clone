import { Card } from "@/components/ui/card";
import { Zap, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our automation systems work at incredible speed, processing tasks in seconds that would take hours manually, giving you an instant competitive edge."
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Every system we build is designed with surgical precision, eliminating errors and ensuring your business runs like a well-oiled machine."
  },
  {
    icon: Users,
    title: "Customer-First Design",
    description: "We don't just automate processes, we create experiences that delight your customers and keep them coming back for more."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
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
          We don't just offer automation, we reengineer the way your business works. Every system we build is designed to give your customers the fastest, most seamless experience possible.
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
