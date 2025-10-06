import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.overview': 'Overview',
    'nav.whyUs': 'Why Us',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.bookCall': 'Book A Call',
    
    // Hero
    'hero.badge': '🔥 Only 10 spots left',
    'hero.title1': 'Transform Your Business with',
    'hero.title2': 'AI-Powered',
    'hero.title3': 'Automation',
    'hero.description': 'Automate customer interactions, streamline operations, and scale your business with intelligent AI agents that work 24/7.',
    'hero.cta': 'Get Started Now',
    
    // Why Us
    'whyUs.label': 'Why Choose Us',
    'whyUs.title': 'Why',
    'whyUs.titleHighlight': 'Auto Boom?',
    'whyUs.description': 'We deliver cutting-edge AI solutions that transform how you operate and engage with customers.',
    'whyUs.feature1.title': '24/7 Availability',
    'whyUs.feature1.desc': 'Our AI agents work around the clock, ensuring your business never sleeps and customers always get instant responses.',
    'whyUs.feature2.title': 'Cost Effective',
    'whyUs.feature2.desc': 'Reduce operational costs by up to 80% while improving service quality and customer satisfaction.',
    'whyUs.feature3.title': 'Easy Integration',
    'whyUs.feature3.desc': 'Seamlessly integrate with your existing systems and platforms in minutes, not months.',
    'whyUs.feature4.title': 'Scalable Solutions',
    'whyUs.feature4.desc': 'Grow effortlessly as our AI scales with your business needs, handling thousands of conversations simultaneously.',
    
    // Services
    'services.label': 'Our Services',
    'services.title': 'What We',
    'services.titleHighlight': 'Offer',
    'services.description': 'Comprehensive AI automation solutions designed to elevate your business performance.',
    'services.service1.title': 'AI Customer Support',
    'services.service1.desc': 'Intelligent chatbots that understand context, solve problems, and deliver exceptional customer experiences instantly.',
    'services.service2.title': 'Sales Automation',
    'services.service2.desc': 'AI-driven sales assistants that qualify leads, schedule meetings, and increase conversion rates automatically.',
    'services.service3.title': 'Voice AI Agents',
    'services.service3.desc': 'Natural-sounding voice assistants that understand voice and images, handle calls, bookings, and customer inquiries with human-like precision and respond to them.',
    'services.service4.title': 'Custom AI Solutions',
    'services.service4.desc': 'Tailored AI systems built specifically for your unique business processes and requirements.',
    
    // Pricing
    'pricing.label': 'Pricing',
    'pricing.title': 'Choose Your',
    'pricing.titleHighlight': 'Perfect Plan',
    'pricing.description': 'Select the package that fits your business needs and scale as you grow.',
    'pricing.plan1.title': 'Starter Pack',
    'pricing.plan1.subtitle': 'Supports Text-only, Ideal for small businesses',
    'pricing.plan1.messages': 'Up to 40K messages',
    'pricing.plan1.feature1': 'Handles up to 40K Messages A Month',
    'pricing.plan1.feature2': 'Continues Support',
    'pricing.plan1.feature3': 'Supports Text Response',
    'pricing.plan1.feature4': 'CRM Storage: Up to 700 customer records',
    'pricing.plan1.feature5': 'No Image Understanding',
    'pricing.plan1.feature6': 'No Voice Understanding',
    'pricing.plan2.title': 'Starter Plus Pack',
    'pricing.plan2.subtitle': 'Multimodal, Supports (Text + Voice + Image)',
    'pricing.plan2.messages': 'Up to 50K messages',
    'pricing.plan2.badge': 'Most Popular',
    'pricing.plan2.feature1': 'Handles up to 50K Messages A Month',
    'pricing.plan2.feature2': 'Fast Continues Support',
    'pricing.plan2.feature3': 'Supports Text Response',
    'pricing.plan2.feature4': 'CRM Storage: Up to 700 customer records',
    'pricing.plan2.feature5': 'Supports Image Understanding',
    'pricing.plan2.feature6': 'Supports Voice Understanding',
    'pricing.plan3.title': 'Pro Pack',
    'pricing.plan3.subtitle': 'Multimodal at scale, ideal for growing & mid-sized businesses',
    'pricing.plan3.messages': 'Up to 75K messages',
    'pricing.plan3.feature1': 'Handles up to 75K Messages A Month',
    'pricing.plan3.feature2': 'Advanced customization',
    'pricing.plan3.feature3': 'CRM Storage: Up to 2,000 customer records',
    'pricing.plan3.feature4': 'Faster AI response',
    'pricing.plan3.feature5': 'Priority Support',
    'pricing.plan4.title': 'Advanced Pack',
    'pricing.plan4.subtitle': 'Multimodal at huge scale, ideal for large-sized businesses',
    'pricing.plan4.messages': 'Up to 120K messages',
    'pricing.plan4.feature1': 'Handles up to 120K Messages A Month',
    'pricing.plan4.feature2': 'CRM Storage: Up to 3,000 customer records',
    'pricing.plan4.feature3': 'Advanced Reporting & analytics',
    'pricing.bookCall': 'Book A Call',
    'pricing.cta.title': 'Ready to Transform Your Business?',
    'pricing.cta.description': 'Schedule a call with us to discuss your automation needs',
    'pricing.planDetails': 'Plan Details:',
    'pricing.everythingPlus': 'Everything in the previous plus:',
    'pricing.month': '/month',
    
    // Footer
    'footer.email': 'Email',
    'footer.rights': '© 2025 Auto Boom. All rights reserved.',
  },
  ar: {
    // Navbar
    'nav.overview': 'نظرة عامة',
    'nav.whyUs': 'لماذا نحن',
    'nav.services': 'خدماتنا',
    'nav.pricing': 'الأسعار',
    'nav.bookCall': 'احجز مكالمة',
    
    // Hero
    'hero.badge': '🔥 فقط 10 أماكن متبقية',
    'hero.title1': 'حوّل عملك مع',
    'hero.title2': 'الذكاء الاصطناعي',
    'hero.title3': 'الآلي',
    'hero.description': 'أتمتة تفاعلات العملاء، وتبسيط العمليات، وتوسيع نطاق عملك مع وكلاء الذكاء الاصطناعي الأذكياء الذين يعملون على مدار الساعة.',
    'hero.cta': 'ابدأ الآن',
    
    // Why Us
    'whyUs.label': 'لماذا تختارنا',
    'whyUs.title': 'لماذا',
    'whyUs.titleHighlight': 'أوتو بوم؟',
    'whyUs.description': 'نقدم حلول ذكاء اصطناعي متطورة تحول طريقة عملك وتفاعلك مع العملاء.',
    'whyUs.feature1.title': 'متاح 24/7',
    'whyUs.feature1.desc': 'وكلاؤنا بالذكاء الاصطناعي يعملون على مدار الساعة، مما يضمن أن عملك لا ينام أبدًا وأن العملاء يحصلون دائمًا على ردود فورية.',
    'whyUs.feature2.title': 'فعال من حيث التكلفة',
    'whyUs.feature2.desc': 'خفض التكاليف التشغيلية بنسبة تصل إلى 80٪ مع تحسين جودة الخدمة ورضا العملاء.',
    'whyUs.feature3.title': 'سهولة التكامل',
    'whyUs.feature3.desc': 'تكامل سلس مع أنظمتك ومنصاتك الحالية في دقائق، وليس شهور.',
    'whyUs.feature4.title': 'حلول قابلة للتوسع',
    'whyUs.feature4.desc': 'النمو بسهولة حيث يتوسع الذكاء الاصطناعي لدينا مع احتياجات عملك، ويتعامل مع آلاف المحادثات في وقت واحد.',
    
    // Services
    'services.label': 'خدماتنا',
    'services.title': 'ما',
    'services.titleHighlight': 'نقدمه',
    'services.description': 'حلول أتمتة شاملة بالذكاء الاصطناعي مصممة لرفع أداء عملك.',
    'services.service1.title': 'دعم العملاء بالذكاء الاصطناعي',
    'services.service1.desc': 'روبوتات الدردشة الذكية التي تفهم السياق، وتحل المشكلات، وتقدم تجارب عملاء استثنائية على الفور.',
    'services.service2.title': 'أتمتة المبيعات',
    'services.service2.desc': 'مساعدو المبيعات المدفوعون بالذكاء الاصطناعي الذين يؤهلون العملاء المحتملين، ويجدولون الاجتماعات، ويزيدون معدلات التحويل تلقائيًا.',
    'services.service3.title': 'وكلاء الصوت بالذكاء الاصطناعي',
    'services.service3.desc': 'وكلاء ذكاء اصطناعي يدعمون فهم الصوت والصور والرد عليهم، يتعاملون مع المكالمات والحجوزات واستفسارات العملاء بدقة تشبه البشر.',
    'services.service4.title': 'حلول ذكاء اصطناعي مخصصة',
    'services.service4.desc': 'أنظمة ذكاء اصطناعي مصممة خصيصًا لعمليات عملك ومتطلباتك الفريدة.',
    
    // Pricing
    'pricing.label': 'الأسعار',
    'pricing.title': 'اختر',
    'pricing.titleHighlight': 'الخطة المثالية',
    'pricing.description': 'اختر الباقة التي تناسب احتياجات عملك وقم بالتوسع مع نموك.',
    'pricing.plan1.title': 'باقة البداية',
    'pricing.plan1.subtitle': 'نصي فقط، مثالي للشركات الصغيرة',
    'pricing.plan1.messages': 'حتى 40 ألف رسالة',
    'pricing.plan1.feature1': 'يتعامل مع ما يصل إلى 40 ألف رسالة شهريًا',
    'pricing.plan1.feature2': 'دعم مستمر',
    'pricing.plan1.feature3': 'يدعم الرد النصي',
    'pricing.plan1.feature4': 'تخزين CRM: حتى 700 سجل عميل',
    'pricing.plan1.feature5': 'لا يدعم فهم الصور',
    'pricing.plan1.feature6': 'لا يدعم فهم الصوت',
    'pricing.plan2.title': 'باقة البداية المتقدمة',
    'pricing.plan2.subtitle': 'متعدد الوسائط، يدعم (نص + صوت + صورة)',
    'pricing.plan2.messages': 'حتى 50 ألف رسالة',
    'pricing.plan2.badge': 'الأكثر شعبية',
    'pricing.plan2.feature1': 'يتعامل مع ما يصل إلى 50 ألف رسالة شهريًا',
    'pricing.plan2.feature2': 'دعم مستمر سريع',
    'pricing.plan2.feature3': 'يدعم الرد النصي',
    'pricing.plan2.feature4': 'تخزين CRM: حتى 700 سجل عميل',
    'pricing.plan2.feature5': 'يدعم فهم الصور',
    'pricing.plan2.feature6': 'يدعم فهم الصوت',
    'pricing.plan3.title': 'الباقة الاحترافية',
    'pricing.plan3.subtitle': 'متعدد الوسائط على نطاق واسع، مثالي للشركات المتنامية والمتوسطة',
    'pricing.plan3.messages': 'حتى 75 ألف رسالة',
    'pricing.plan3.feature1': 'يتعامل مع ما يصل إلى 75 ألف رسالة شهريًا',
    'pricing.plan3.feature2': 'تخصيص متقدم',
    'pricing.plan3.feature3': 'تخزين CRM: حتى 2,000 سجل عميل',
    'pricing.plan3.feature4': 'استجابة أسرع بالذكاء الاصطناعي',
    'pricing.plan3.feature5': 'دعم ذو أولوية',
    'pricing.plan4.title': 'الباقة المتقدمة',
    'pricing.plan4.subtitle': 'متعدد الوسائط على نطاق واسع جدًا، مثالي للشركات الكبيرة',
    'pricing.plan4.messages': 'حتى 120 ألف رسالة',
    'pricing.plan4.feature1': 'يتعامل مع ما يصل إلى 120 ألف رسالة شهريًا',
    'pricing.plan4.feature2': 'تخزين CRM: حتى 3,000 سجل عميل',
    'pricing.plan4.feature3': 'تقارير وتحليلات متقدمة',
    'pricing.bookCall': 'احجز مكالمة',
    'pricing.cta.title': 'جاهز لتحويل عملك؟',
    'pricing.cta.description': 'جدولة مكالمة معنا لمناقشة احتياجات الأتمتة الخاصة بك',
    'pricing.planDetails': 'تفاصيل الخطة:',
    'pricing.everythingPlus': 'كل شيء في السابق بالإضافة إلى:',
    'pricing.month': '/شهر',
    
    // Footer
    'footer.email': 'البريد الإلكتروني',
    'footer.rights': '© 2025 أوتو بوم. جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
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
