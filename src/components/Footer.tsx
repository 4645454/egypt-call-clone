import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Auto Boom" className="h-10 w-10 object-contain" />
            <span className="text-lg font-bold">Auto Boom</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Auto Boom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
