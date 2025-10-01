import { Card } from "@/components/ui/card";
import { Bot, Workflow, BarChart3, MessageSquare, Database, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Smart conversational systems managing customer queries round-the-clock, slashing support expenses up to 80%."
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Optimize recurring operations and procedures, liberating your workforce for high-value strategic activities."
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Convert unprocessed information into strategic decisions through AI-driven analytical and reporting platforms."
  },
  {
    icon: MessageSquare,
    title: "Communication Systems",
    description: "Intelligent email, text, and chat automation delivering timely customer engagement at optimal touchpoints."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Unify disparate applications and systems into a single cohesive operational environment."
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Bespoke AI frameworks engineered precisely for your distinctive operational requirements and objectives."
  }
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="relative py-20 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          From intelligent chat systems to comprehensive operational automation, we provide solutions generating measurable business impact.
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
