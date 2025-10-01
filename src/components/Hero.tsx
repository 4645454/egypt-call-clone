import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Dotted pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(30 100% 55% / 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8 border border-primary/30">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium">🔥 Only 10 spots left this month</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent animate-gradient">
            Transform
          </span>
          {' '}your{' '}
          <span className="text-foreground">business</span>
          <br />
          <span className="text-foreground">Beyond</span>
          {' '}
          <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            ✦ Limits
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          We streamline your operations with AI automation, building round-the-clock systems that let you concentrate on expanding your success.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_40px_hsl(30_100%_55%/0.5)] text-primary-foreground font-bold text-lg px-8 py-6 transition-all duration-300"
          onClick={() => window.location.href = '#contact'}
        >
          Book A Call
        </Button>
      </div>
    </section>
  );
};

export default Hero;
