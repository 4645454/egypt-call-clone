import { Card } from "@/components/ui/card";
import { Bot, Workflow, BarChart3, MessageSquare, Database, Sparkles } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that handle customer inquiries 24/7, reducing support costs by up to 80%."
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline repetitive tasks and workflows, freeing your team to focus on what truly matters."
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with AI-powered analytics and reporting systems."
  },
  {
    icon: MessageSquare,
    title: "Communication Systems",
    description: "Automated email, SMS, and messaging solutions that engage customers at the perfect moment."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Connect all your tools and platforms into one unified, efficient ecosystem."
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Tailored AI systems designed specifically for your unique business challenges and goals."
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-secondary tracking-wider uppercase">Our Services</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Powerful <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Automation</span> Solutions
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          From AI-powered chatbots to complete business automation, we deliver solutions that drive real results.
        </p>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(30_100%_55%/0.2)] group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-primary/30">
                  <Icon className="w-6 h-6 text-primary" />
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
