import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="relative inline-flex items-center h-10 w-20 rounded-full bg-gradient-to-r from-primary/20 to-orange-400/20 border-2 border-primary/40 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_hsl(30_100%_55%/0.3)] hover:scale-105"
      aria-label="Toggle language"
    >
      {/* Sliding background */}
      <span
        className={`absolute top-0.5 h-8 w-9 rounded-full bg-gradient-to-r from-primary to-orange-400 shadow-lg transition-all duration-300 ease-in-out ${
          language === 'en' ? 'left-0.5' : 'left-10'
        }`}
      />
      
      {/* EN icon */}
      <span
        className={`absolute left-2 z-10 text-xs font-bold transition-colors duration-300 ${
          language === 'en' ? 'text-white' : 'text-foreground/60'
        }`}
      >
        EN
      </span>
      
      {/* AR icon */}
      <span
        className={`absolute right-2 z-10 text-xs font-bold transition-colors duration-300 ${
          language === 'ar' ? 'text-white' : 'text-foreground/60'
        }`}
      >
        AR
      </span>
    </button>
  );
};

export default LanguageToggle;
