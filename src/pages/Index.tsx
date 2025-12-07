import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E4405F">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
  </svg>
);

const videos = [
  { name: 'WhatsApp', src: '/videos/whatsapp.mp4', icon: WhatsAppIcon },
  { name: 'Facebook', src: '/videos/facebook.mp4', icon: FacebookIcon },
  { name: 'Instagram', src: '/videos/instagram.mp4', icon: InstagramIcon },
];

const HomeContent = () => {
  return (
    <div className="flex flex-col h-full px-8 py-6">
      {/* Videos Section */}
      <div className="flex-1 flex items-center justify-center gap-6">
        {videos.map((video) => (
          <div key={video.name} className="flex flex-col items-center group">
            <div className="flex items-center gap-2 mb-3">
              <video.icon />
              <span className="text-sm font-medium text-foreground">{video.name}</span>
            </div>
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-72 h-[500px] object-cover rounded-2xl border border-border transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:border-primary/50"
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
    { name: 'WhatsApp', icon: WhatsAppIcon, color: '#25D366' },
    { name: 'Instagram', icon: InstagramIcon, color: '#E4405F' },
    { name: 'Facebook', icon: FacebookIcon, color: '#1877F2' },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <h2 className="text-2xl font-bold text-center mb-2">{t('platforms.title')}</h2>
      <p className="text-muted-foreground text-center mb-8 max-w-md">{t('platforms.subtitle')}</p>
      <div className="flex gap-12">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex flex-col items-center gap-4">
            <span className="text-lg font-semibold">{platform.name}</span>
            <div 
              className="w-28 h-28 rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: platform.color }}
            >
              <svg viewBox="0 0 24 24" className="w-16 h-16" fill="white">
                {platform.name === 'WhatsApp' && (
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                )}
                {platform.name === 'Instagram' && (
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                )}
                {platform.name === 'Facebook' && (
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                )}
              </svg>
            </div>
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
        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
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
