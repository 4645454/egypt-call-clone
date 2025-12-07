import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.whyUs': 'Why',
    'nav.platforms': 'Platforms',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    'hero.title': 'Let your customers be answered by chat',
    'hero.titleHighlight': 'Faster than humans!',
    'hero.description': 'Auto Boom will make your brand respond in less than 30 seconds on WhatsApp, Instagram and Facebook',
    'hero.cta': 'Start Now',
    
    'whyUs.title': 'Why Choose Auto Boom?',
    'whyUs.subtitle': 'Fast chatbot service features',
    'whyUs.feature1.title': '⚡ Response in less than 30 seconds',
    'whyUs.feature1.desc': 'Instant interaction with customers at any time. Speed is essential for an excellent user experience.',
    'whyUs.feature2.title': '🕐 Available 24 hours a day',
    'whyUs.feature2.desc': 'Your service is always running even on holidays. No interruption, no waiting.',
    'whyUs.feature3.title': '🧠 Speaks the brand language, not a robot',
    'whyUs.feature3.desc': 'Responds in the same style and tone as your company. Makes the customer feel like talking to a real person.',
    'whyUs.feature4.title': '💰 Saves more than 60% of customer service costs',
    'whyUs.feature4.desc': 'Reduce customer service costs smartly. Same quality but at a lower cost.',
    'whyUs.feature5.title': '🔐 Data is encrypted and protected',
    'whyUs.feature5.desc': 'Complete protection for your customer conversations. Trust and security are a priority.',
    'whyUs.feature6.title': '💡 Provides automatic sales suggestions',
    'whyUs.feature6.desc': 'Not just responding — also selling! Suggests products and services to increase your profits.',
    
    'platforms.title': 'We work on all platforms',
    'platforms.subtitle': 'One Agent runs your customer service everywhere… without missing a message.',
    
    'pricing.title': 'Packages and Prices',
    'pricing.subtitle': 'Choose the package that suits your goals',
    'pricing.basic': 'Basic Package',
    'pricing.pro': 'Professional Package',
    'pricing.business': 'Business Package',
    'pricing.advanced': 'Advanced Package',
    'pricing.perDay': '/day',
    'pricing.service247': '24/7 service',
    'pricing.response30': 'Response in less than 30 seconds',
    'pricing.messages': 'messages',
    'pricing.platform1': 'Supports one platform',
    'pricing.platform3': 'Supports 3 platforms',
    'pricing.perPlatform': 'messages per platform',
    
    'contact.title': 'Contact Us',
    'contact.name': 'Your Name',
    'contact.brand': 'Brand Name',
    'contact.whatsapp': 'WhatsApp Number',
    'contact.reason': 'Reason for interest',
    'contact.plan': 'Choose Plan',
    'contact.submit': 'Submit',
    
    'footer.email': 'Email',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.whyUs': 'ليه',
    'nav.platforms': 'المنصات',
    'nav.pricing': 'الأسعار',
    'nav.contact': 'اتصل الآن',
    
    'hero.title': 'خلي عملاءك يرد عليهم الشات',
    'hero.titleHighlight': 'أسرع من البشر!',
    'hero.description': 'Auto Boom هتخلي البراند بتاعك يرد في أقل من 30 ثانية على واتساب وإنستا وفيسبوك',
    'hero.cta': 'ابدأ دلوقتي',
    
    'whyUs.title': 'لماذا تختار Auto Boom؟',
    'whyUs.subtitle': 'مميزات خدمة الشات بوت السريع',
    'whyUs.feature1.title': '⚡ الرد في أقل من 30 ثانية',
    'whyUs.feature1.desc': 'تفاعل فوري مع العملاء في أي وقت. السرعة عنصر أساسي لتجربة مستخدم ممتازة.',
    'whyUs.feature2.title': '🕐 متوفر 24 ساعة يوميًا',
    'whyUs.feature2.desc': 'خدمتك دايمًا شغالة حتى في الإجازات. لا انقطاع ولا انتظار.',
    'whyUs.feature3.title': '🧠 بيتكلم بلغة البراند مش روبوت',
    'whyUs.feature3.desc': 'بيرد بنفس أسلوب شركتك ولهجتها. بيخلي العميل يحس إنه بيتكلم مع إنسان حقيقي.',
    'whyUs.feature4.title': '💰 يوفر أكثر من 60% من تكلفة خدمة العملاء',
    'whyUs.feature4.desc': 'قلل مصاريف خدمة العملاء بشكل ذكي. نفس الجودة بس بتكلفة أقل.',
    'whyUs.feature5.title': '🔐 البيانات مشفرة ومحمية',
    'whyUs.feature5.desc': 'حماية كاملة لمحادثات عملاءك. الثقة والأمان أولوية في كل تفاعل.',
    'whyUs.feature6.title': '💡 يقدم اقتراحات بيع تلقائيًا',
    'whyUs.feature6.desc': 'مش بس بيرد — كمان بيبيع! يقترح منتجات وخدمات تزيد أرباحك.',
    
    'platforms.title': 'نشتغل على كل المنصات',
    'platforms.subtitle': 'Agent واحد يشغّل خدمة العملاء عندك في كل مكان… بدون ما يفوّت رسالة.',
    
    'pricing.title': 'الباقات والأسعار',
    'pricing.subtitle': 'اختر الباقة المناسبة لأهدافك',
    'pricing.basic': 'الباقة الأساسية',
    'pricing.pro': 'الباقة الاحترافية',
    'pricing.business': 'باقة الأعمال',
    'pricing.advanced': 'الباقة المتقدمة',
    'pricing.perDay': '/يوم',
    'pricing.service247': 'خدمة 24/7',
    'pricing.response30': 'رد في أقل من 30 ثانية',
    'pricing.messages': 'رسالة',
    'pricing.platform1': 'تدعم منصة واحدة',
    'pricing.platform3': 'تدعم 3 منصات',
    'pricing.perPlatform': 'رسالة لكل منصة',
    
    'contact.title': 'تواصل معنا',
    'contact.name': 'اسمك',
    'contact.brand': 'اسم البراند',
    'contact.whatsapp': 'رقم الواتساب',
    'contact.reason': 'سبب اهتمامك بالخدمة',
    'contact.plan': 'اختر الخطة',
    'contact.submit': 'إرسال',
    
    'footer.email': 'البريد الإلكتروني',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
