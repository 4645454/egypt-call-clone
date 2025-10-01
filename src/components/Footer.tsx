import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Auto Boom. All rights reserved.
          </p>
          <a 
            href="mailto:info@viralboom.online" 
            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>info@viralboom.online</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
