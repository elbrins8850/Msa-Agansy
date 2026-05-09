import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';
import { useLang } from '../src/context/LangContext';

const SERVICES = [
  { icon: 'fa-users-cog', img: 'social.jpg', href: '/services/social-media', en: 'Social Media', ar: 'إدارة التواصل الاجتماعي' },
  { icon: 'fa-pen-nib', img: 'content.jpg', href: '/services/content-writing', en: 'Content Writing', ar: 'كتابة المحتوى' },
  { icon: 'fa-chess-knight', img: 'strategy.jpg', href: '/services/seo-strategy', en: 'Marketing Strategy', ar: 'استراتيجية التسويق' },
  { icon: 'fa-robot', img: 'ai.jpg', href: '/services/ai-content', en: 'AI Optimization', ar: 'سيو وذكاء اصطناعي' },
  { icon: 'fa-paint-brush', img: 'branding.jpg', href: '/services/branding', en: 'Visual Identity', ar: 'الهوية البصرية' },
  { icon: 'fa-vial', img: 'uiux.jpg', href: '/services/ui-ux-design', en: 'UI/UX Design', ar: 'تصميم واجهة المستخدم' },
  { icon: 'fa-code', img: 'web.jpg', href: '/services/web-development', en: 'Web Development', ar: 'تطوير المواقع' },
  { icon: 'fa-shopping-cart', img: 'store.jpg', href: '/services/ecommerce', en: 'E-commerce', ar: 'حلول التجارة الإلكترونية' },
  { icon: 'fa-ad', img: 'ads.jpg', href: '/services/paid-ads', en: 'Paid Advertising', ar: 'الإعلانات الممولة' },
];

const FOUNDERS = [
  { letter: 'M', en: 'Menna', ar: 'منة', subEn: 'Marketing', subAr: 'تسويق', href: '/profiles/menna' },
  { letter: 'S', en: 'Sally', ar: 'سالي', subEn: 'Solutions', subAr: 'حلول', href: '/profiles/sally' },
  { letter: 'A', en: 'Abd El-Alim', ar: 'عبد العليم', subEn: 'Agency', subAr: 'وكالة', href: '/profiles/abdelalim' },
];

export default function HomePage() {
  const { t } = useLang();
  const router = useRouter();

  return (
    <Layout
      title="MSA Agency"
      description="اكتشف مستقبل الابتكار مع MSA Agency. نقدم حلولاً رقمية متكاملة تشمل البرمجة، التسويق، والتصميم لبناء علامة تجارية لا تُنسى."
    >
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline id="hero-video">
          <source src="/assets/video/msa-motion.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <div className="hero-content-side">
            <h1 className="scramble">
              {t('INNOVATIVE DIGITAL MARKETING', 'تسويق رقمي مبتكر')}
            </h1>
            <p>{t('We build brands that lead the future.', 'نبني علامات تجارية تقود المستقبل.')}</p>
            <a href="#services" className="btn-legacy">
              {t('Start Your Legacy', 'ابدأ إرثك الآن')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          <h2 className="section-title scramble">
            {t('Digital Intelligence Units', 'وحدات الذكاء الرقمي')}
          </h2>
          <div className="services-matrix">
            {SERVICES.map((service) => (
              <div
                key={service.href}
                className="service-hex reveal-item"
                style={{ backgroundImage: `url('/assets/img/hero/${service.img}')` }}
              >
                <div className="hex-overlay"></div>
                <div className="hex-content">
                  <i className={`fas ${service.icon}`}></i>
                  <h3>{t(service.en, service.ar)}</h3>
                  <Link href={service.href} className="btn-analyze-cyber">
                    {t('Analyze', 'تحليل')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section section-padding">
        <div className="container">
          <h2 className="section-title scramble">
            {t('Core Intelligence Unit', 'وحدة الاستخبارات المركزية')}
          </h2>
          <div className="msa-letters-wrapper" id="msa-nav">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.letter}
                className="msa-item reveal-item"
                onClick={() => router.push(founder.href)}
                style={{ cursor: 'pointer' }}
              >
                <div className="letter-box">
                  <span className="pop-name">{t(founder.en, founder.ar)}</span>
                  <span className="main-letter">{founder.letter}</span>
                  <span className="sub-word-brand">{t(founder.subEn, founder.subAr)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
