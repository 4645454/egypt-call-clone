import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";

const videos = [
  { name: 'WhatsApp', src: '/videos/whatsapp.mp4' },
  { name: 'Facebook', src: '/videos/facebook.mp4' },
  { name: 'Instagram', src: '/videos/instagram.mp4' },
];

const HomeContent = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col h-full px-8 py-6">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <p className="text-muted-foreground text-base mb-1">{t('hero.title')}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-primary">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-4 max-w-md">{t('hero.description')}</p>
          <div className="flex gap-3">
            <button 
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
            >
              {t('hero.cta')}
            </button>
            <button 
              className="px-5 py-2.5 bg-transparent text-foreground border border-border rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
            >
              {t('nav.pricing')}
            </button>
          </div>
        </div>
        
        {/* Right Logo */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center">
            <img src={logo} alt="Auto Boom" className="w-32 h-32 rounded-full object-cover" />
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="flex-1 flex items-center justify-center gap-4">
        {videos.map((video) => (
          <div key={video.name} className="flex flex-col items-center">
            <span className="text-sm font-medium mb-2 text-foreground">{video.name}</span>
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-36 h-64 object-cover rounded-xl border border-border"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyUsContent = () => {
  const { t } = useLanguage();
  const features = [
    { title: t('whyUs.feature1.title'), desc: t('whyUs.feature1.desc') },
    { title: t('whyUs.feature2.title'), desc: t('whyUs.feature2.desc') },
    { title: t('whyUs.feature3.title'), desc: t('whyUs.feature3.desc') },
    { title: t('whyUs.feature4.title'), desc: t('whyUs.feature4.desc') },
    { title: t('whyUs.feature5.title'), desc: t('whyUs.feature5.desc') },
    { title: t('whyUs.feature6.title'), desc: t('whyUs.feature6.desc') },
  ];
  
  return (
    <div className="h-full overflow-y-auto px-6 py-4">
      <h2 className="text-xl font-bold text-center mb-2">{t('whyUs.title')}</h2>
      <p className="text-muted-foreground text-center text-sm mb-6">{t('whyUs.subtitle')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((feature, i) => (
          <div key={i} className="bg-secondary rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
            <p className="text-muted-foreground text-xs">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlatformsContent = () => {
  const { t } = useLanguage();
  const platforms = [
    { name: 'WhatsApp', color: '#25D366' },
    { name: 'Instagram', color: '#E4405F' },
    { name: 'Facebook', color: '#1877F2' },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <h2 className="text-2xl font-bold text-center mb-2">{t('platforms.title')}</h2>
      <p className="text-muted-foreground text-center mb-8">{t('platforms.subtitle')}</p>
      <div className="flex gap-8">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex flex-col items-center gap-3">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
              style={{ backgroundColor: platform.color }}
            >
              {platform.name[0]}
            </div>
            <span className="text-sm font-medium">{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PricingContent = () => {
  const { t } = useLanguage();
  const plans = [
    { name: t('pricing.basic'), price: '100', messages: '350', platforms: '1' },
    { name: t('pricing.pro'), price: '150', messages: '700', platforms: '1' },
    { name: t('pricing.business'), price: '200', messages: '400', platforms: '3', perPlatform: true },
    { name: t('pricing.advanced'), price: '250', messages: '750', platforms: '3', perPlatform: true },
  ];
  
  return (
    <div className="h-full overflow-y-auto px-4 py-4">
      <h2 className="text-xl font-bold text-center mb-1">{t('pricing.title')}</h2>
      <p className="text-muted-foreground text-center text-sm mb-4">{t('pricing.subtitle')}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {plans.map((plan, i) => (
          <div key={i} className="bg-secondary rounded-xl p-4 text-center">
            <h3 className="font-semibold text-sm mb-2">{plan.name}</h3>
            <div className="text-2xl font-bold text-primary mb-3">
              {plan.price} <span className="text-xs text-muted-foreground">EGP{t('pricing.perDay')}</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1 text-start">
              <li>• {t('pricing.service247')}</li>
              <li>• {t('pricing.response30')}</li>
              <li>• {plan.messages} {plan.perPlatform ? t('pricing.perPlatform') : t('pricing.messages')}</li>
              <li>• {plan.platforms === '1' ? t('pricing.platform1') : t('pricing.platform3')}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactContent = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <h2 className="text-2xl font-bold mb-6">{t('contact.title')}</h2>
      <div className="text-center">
        <p className="text-muted-foreground text-sm mb-2">{t('footer.email')}</p>
        <a href="mailto:info@viralboom.online" className="text-primary hover:underline">
          info@viralboom.online
        </a>
      </div>
      <button 
        className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
        onClick={() => window.open('https://calendly.com/muzoreda/auto-boom', '_blank')}
      >
        {t('hero.cta')}
      </button>
    </div>
  );
};

const MainApp = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const tabs = [
    { id: 'home', label: t('nav.home') },
    { id: 'whyUs', label: t('nav.whyUs') },
    { id: 'platforms', label: t('nav.platforms') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeContent />;
      case 'whyUs': return <WhyUsContent />;
      case 'platforms': return <PlatformsContent />;
      case 'pricing': return <PricingContent />;
      case 'contact': return <ContactContent />;
      default: return <HomeContent />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between py-6 px-4 md:px-8">
      {/* Top Header */}
      <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 border border-border">
        <span className="text-sm font-bold tracking-widest">AUTO BOOM</span>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Moon className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
        <button
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="px-3 py-1.5 text-xs rounded-full border border-dashed border-primary text-primary hover:bg-primary/10 transition-colors"
        >
          {language === 'en' ? 'Ar' : 'En'}
        </button>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-5xl flex-1 my-4 bg-card rounded-3xl border border-border overflow-hidden flex flex-col" style={{ boxShadow: 'var(--card-shadow)' }}>
        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative">
          {renderContent()}
          {/* Footer inside card */}
          <div className="absolute bottom-4 left-6 text-xs text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            Made by <span className="text-primary">Auto Boom</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center gap-1 bg-card rounded-full p-1.5 border border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              activeTab === tab.id
                ? 'bg-secondary text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
};

export default Index;
