import Link from 'next/link';
import Layout from '../src/components/Layout';
import { useLang } from '../src/context/LangContext';

function PricingCard({ plan, featured = false }) {
  const { t } = useLang();
  return (
    <div className={`price-card${featured ? ' featured' : ''}`}>
      {plan.badgeEn && (
        <div className="badge">{t(plan.badgeEn, plan.badgeAr)}</div>
      )}
      <div className="plan-header">
        <h3>{t(plan.nameEn, plan.nameAr)}</h3>
        <div className="price"><span>$</span>{plan.price}</div>
        {plan.descEn && <p className="plan-desc">{t(plan.descEn, plan.descAr)}</p>}
      </div>
      <ul className="plan-features">
        {plan.features.map((f, i) => (
          <li key={i}>{t(f.en, f.ar)}</li>
        ))}
      </ul>
      <Link href={`/contact?plan=${plan.planKey}`} className="btn-price">
        {t(plan.ctaEn || 'Get Started', plan.ctaAr || 'ابدأ الآن')}
      </Link>
    </div>
  );
}

function PricingSection({ titleEn, titleAr, subtitleEn, subtitleAr, plans, alt = false }) {
  const { t } = useLang();
  return (
    <section className={`pricing-section section-padding${alt ? ' alt-bg' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gold">{t(titleEn, titleAr)}</h2>
          <p className="section-subtitle">{t(subtitleEn, subtitleAr)}</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard key={plan.planKey} plan={plan} featured={plan.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}

const OFFER_EN = "RAMADAN SPECIAL OFFERS — DON'T MISS OUT!";
const OFFER_AR = 'عروض رمضان الخاصة — لا تفوت الفرصة!';

const SOCIAL_PLANS = [
  {
    nameEn: 'Starter', nameAr: 'البداية', price: '449', planKey: 'Social_Starter',
    ctaEn: 'Choose Starter', ctaAr: 'اختر باقة البداية',
    descEn: 'Ideal for new businesses looking to build a basic online presence.',
    descAr: 'مثالية للشركات الجديدة التي تسعى لبناء تواجد أساسي.',
    features: [
      { en: '8 Posts per Month', ar: '٨ منشورات شهرياً' },
      { en: '1 Platform Management', ar: 'إدارة منصة واحدة' },
      { en: 'Scheduled Publishing', ar: 'جدولة المنشورات' },
      { en: 'Basic Design', ar: 'تصاميم أساسية' },
      { en: 'Caption Writing', ar: 'كتابة المحتوى' },
    ],
  },
  {
    nameEn: 'Growth', nameAr: 'النمو', price: '799', planKey: 'Social_Growth', featured: true,
    badgeEn: 'Most Popular', badgeAr: 'الأكثر طلباً',
    ctaEn: 'Choose Growth', ctaAr: 'اختر باقة النمو',
    descEn: 'Designed for growing brands aiming to boost engagement and sales.',
    descAr: 'مصممة للعلامات التجارية النامية التي تهدف لزيادة التفاعل والمبيعات.',
    features: [
      { en: '12 Posts per Month', ar: '١٢ منشوراً شهرياً' },
      { en: '2 Platforms Management', ar: 'إدارة منصتين' },
      { en: '1 AI Promotional Video', ar: '١ فيديو ترويجي AI' },
      { en: 'Professional Design', ar: 'تصاميم احترافية' },
      { en: 'Captions + Hashtags', ar: 'محتوى + هاشتاجات' },
      { en: 'Comments & DM Monitoring', ar: 'متابعة التعليقات والرسائل' },
      { en: 'Monthly Report', ar: 'تقرير شهري' },
    ],
  },
  {
    nameEn: 'Elite VIP', nameAr: 'النخبة VIP', price: '1,499', planKey: 'Social_Elite',
    ctaEn: 'Choose Elite', ctaAr: 'اختر باقة النخبة',
    descEn: 'A full-scale solution for brands seeking strong market presence.',
    descAr: 'حل شامل للعلامات التجارية التي تسعى لتواجد قوي ونمو سريع.',
    features: [
      { en: '16 Posts per Month', ar: '١٦ منشوراً شهرياً' },
      { en: '3 Platforms Management', ar: 'إدارة ٣ منصات' },
      { en: '2 AI Promotional Videos', ar: '٢ فيديو ترويجي AI' },
      { en: 'Scheduled Publishing', ar: 'جدولة المنشورات' },
      { en: 'Professional Design & Copywriting', ar: 'تصميم وكتابة محتوى احترافي' },
      { en: 'Advanced Content Strategy', ar: 'استراتيجية محتوى متقدمة' },
      { en: 'Full Community Management', ar: 'إدارة كاملة للمجتمع' },
      { en: 'Priority Support 24/7', ar: 'دعم فني أولوية ٢٤/٧' },
      { en: 'Monthly Report', ar: 'تقرير شهري' },
    ],
  },
];

const SEO_PLANS = [
  {
    nameEn: 'Starter', nameAr: 'البداية', price: '499', planKey: 'SEO_Starter',
    descEn: 'For small websites starting with SEO.',
    descAr: 'للمواقع الصغيرة التي تبدأ رحلتها في السيو.',
    features: [
      { en: 'Keyword Research (Up to 10)', ar: 'بحث كلمات مفتاحية (حتى ١٠)' },
      { en: 'On-Page SEO (Meta, Titles)', ar: 'سيو داخلي (العناوين والوصف)' },
      { en: 'Basic Content Recommendations', ar: 'توصيات محتوى أساسية' },
      { en: 'Monthly Performance Report', ar: 'تقرير أداء شهري' },
    ],
  },
  {
    nameEn: 'Growth', nameAr: 'النمو', price: '1,199', planKey: 'SEO_Growth', featured: true,
    badgeEn: 'Grow Faster', badgeAr: 'نمو أسرع',
    descEn: 'For growing websites aiming for organic traffic.',
    descAr: 'للمواقع النامية لزيادة الزوار مجاناً.',
    features: [
      { en: 'Keyword Research (Up to 25)', ar: 'بحث كلمات مفتاحية (حتى ٢٥)' },
      { en: 'On-Page SEO + Internal Linking', ar: 'سيو داخلي + ربط داخلي' },
      { en: 'Content Strategy', ar: 'استراتيجية المحتوى' },
      { en: 'Competitor Analysis', ar: 'تحليل المنافسين' },
      { en: 'Monthly Performance Reports', ar: 'تقارير أداء شهرية' },
    ],
  },
  {
    nameEn: 'Elite SEO VIP', nameAr: 'سيو النخبة VIP', price: '2,499', planKey: 'SEO_Elite',
    descEn: 'For established websites aiming for top rankings.',
    descAr: 'للمواقع الكبرى للسيطرة على المراكز الأولى.',
    features: [
      { en: 'Keyword Research (Up to 50)', ar: 'بحث كلمات مفتاحية (حتى ٥٠)' },
      { en: 'Full Technical SEO Fixes', ar: 'إصلاحات سيو تقنية كاملة' },
      { en: 'Advanced Backlink Strategy', ar: 'استراتيجية روابط خارجية' },
      { en: 'Brand-Focused Content', ar: 'محتوى مخصص للبراند' },
      { en: 'Optimization & Scaling', ar: 'تحسين وتوسيع النطاق' },
      { en: 'Priority Support', ar: 'دعم أولوية' },
    ],
  },
];

const ADS_PLANS = [
  {
    nameEn: 'Starter', nameAr: 'البداية', price: '499', planKey: 'Ads_Starter',
    descEn: 'For small businesses testing ads.',
    descAr: 'للشركات الصغيرة أو لتجربة إعلاناتك الأولى.',
    features: [
      { en: 'Manage 1 Platform', ar: 'إدارة منصة واحدة' },
      { en: '1 Campaign / Month', ar: 'حملة إعلانية واحدة شهرياً' },
      { en: 'Ad Creation & Copywriting', ar: 'إنشاء الإعلانات وكتابة المحتوى' },
      { en: 'Audience Targeting Setup', ar: 'إعداد استهداف الجمهور' },
      { en: 'Basic Performance Report', ar: 'تقرير أداء أساسي' },
    ],
  },
  {
    nameEn: 'Growth', nameAr: 'النمو', price: '999', planKey: 'Ads_Growth', featured: true,
    badgeEn: 'Grow Faster', badgeAr: 'نمو أسرع',
    descEn: 'Aiming for leads and sales.',
    descAr: 'لزيادة العملاء المحتملين أو المبيعات.',
    features: [
      { en: 'Manage 2 Platforms', ar: 'إدارة منصتين' },
      { en: '3 Campaigns / Month', ar: '٣ حملات شهرياً' },
      { en: 'Audience Targeting & Retargeting', ar: 'الاستهداف وإعادة الاستهداف' },
      { en: 'Campaign Optimization', ar: 'تحسين أداء الحملات' },
      { en: 'Monthly Performance Report', ar: 'تقرير أداء شهري' },
    ],
  },
  {
    nameEn: 'Elite VIP', nameAr: 'النخبة VIP', price: '1,899', planKey: 'Ads_Elite',
    descEn: 'Established brands, max results.',
    descAr: 'للعلامات التجارية الكبرى لأقصى النتائج.',
    features: [
      { en: 'Manage 3 Platforms', ar: 'إدارة ٣ منصات' },
      { en: '5+ Campaigns / Month', ar: '+٥ حملات شهرياً' },
      { en: 'Creative Designs', ar: 'تصاميم إبداعية' },
      { en: 'A/B Testing & Funnels', ar: 'اختبار A/B وتحسين المسارات' },
      { en: 'Priority Support', ar: 'دعم أولوية' },
    ],
  },
];

const BUNDLE_PLANS = [
  {
    nameEn: 'Starter Bundle', nameAr: 'باقة البداية', price: '699', planKey: 'Bundle_Starter',
    ctaEn: 'Choose Bundle', ctaAr: 'اختر الباقة',
    features: [
      { en: '12 Posts per Month', ar: '١٢ منشوراً شهرياً' },
      { en: '1 Platform Management', ar: 'إدارة منصة واحدة' },
      { en: '1 AI Promotional Video', ar: '١ فيديو ترويجي AI' },
      { en: 'Basic SEO Optimization', ar: 'تحسين سيو أساسي' },
    ],
  },
  {
    nameEn: 'Growth Bundle', nameAr: 'باقة النمو', price: '1,299', planKey: 'Bundle_Growth', featured: true,
    badgeEn: 'Grow Faster', badgeAr: 'نمو أسرع',
    ctaEn: 'Choose Bundle', ctaAr: 'اختر الباقة',
    features: [
      { en: '14 Posts per Month', ar: '١٤ منشوراً شهرياً' },
      { en: '2 Platforms Management', ar: 'إدارة منصتين' },
      { en: '3 AI Promotional Videos', ar: '٣ فيديوهات ترويجية AI' },
      { en: 'Advanced SEO Analysis', ar: 'تحليل سيو متقدم' },
    ],
  },
  {
    nameEn: 'Elite VIP Bundle', nameAr: 'باقة النخبة VIP', price: '2,299', planKey: 'Bundle_Elite',
    ctaEn: 'Choose Bundle', ctaAr: 'اختر الباقة',
    features: [
      { en: '16 Posts per Month', ar: '١٦ منشوراً شهرياً' },
      { en: '3 Platforms Management', ar: 'إدارة ٣ منصات' },
      { en: 'Full SEO Strategy', ar: 'استراتيجية سيو كاملة' },
      { en: 'Priority Support 24/7', ar: 'دعم فني أولوية ٢٤/٧' },
    ],
  },
];

const WEB_PLANS = [
  {
    nameEn: 'Landing Page', nameAr: 'صفحة هبوط', price: '299', planKey: 'Web_Landing',
    features: [
      { en: 'High-Conversion Design', ar: 'تصميم يركز على زيادة المبيعات' },
      { en: 'Ultra-Fast Loading', ar: 'سرعة تحميل فائقة' },
      { en: 'WhatsApp Integration', ar: 'ربط مباشر بالواتساب' },
    ],
  },
  {
    nameEn: 'Business Site', nameAr: 'موقع شركات', price: '799', planKey: 'Web_Business', featured: true,
    badgeEn: 'Most Popular', badgeAr: 'الأكثر طلباً',
    features: [
      { en: 'Up to 5 Pages', ar: 'حتى ٥ صفحات مخصصة' },
      { en: 'Custom UI/UX Premium', ar: 'تصميم واجهة مستخدم فاخر' },
      { en: 'Multi-Language (EN/AR)', ar: 'دعم لغتين' },
    ],
  },
  {
    nameEn: 'E-Commerce', nameAr: 'متجر إلكتروني', price: '1,499', planKey: 'Web_Ecommerce',
    features: [
      { en: 'Full Online Store', ar: 'نظام متجر متكامل' },
      { en: 'Secure Payment', ar: 'بوابات دفع آمنة' },
      { en: 'Sales Analytics', ar: 'تحليلات مبيعات متقدمة' },
    ],
  },
];

export default function ServicesPage() {
  const { t } = useLang();
  return (
    <Layout
      title="Our Services | MSA Agency"
      description="اكتشف خدماتنا المتنوعة: تطوير المواقع، التسويق الرقمي، إدارة السوشيال ميديا، تصميم UI/UX، حلول تقنية متكاملة."
    >
      <div className="services-page-wrapper">
        <PricingSection titleEn="Social Media Management" titleAr="إدارة السوشيال ميديا" subtitleEn={OFFER_EN} subtitleAr={OFFER_AR} plans={SOCIAL_PLANS} />
        <PricingSection titleEn="SEO & Search Power" titleAr="قوة الأرشفة والظهور (SEO)" subtitleEn={OFFER_EN} subtitleAr={OFFER_AR} plans={SEO_PLANS} alt />
        <PricingSection titleEn="Paid Ads Campaigns" titleAr="حملات الإعلانات الممولة" subtitleEn={OFFER_EN} subtitleAr={OFFER_AR} plans={ADS_PLANS} />
        <PricingSection titleEn="Combined Marketing Strategy" titleAr="استراتيجية التسويق الشاملة" subtitleEn={OFFER_EN} subtitleAr={OFFER_AR} plans={BUNDLE_PLANS} alt />
        <PricingSection titleEn="Web Development" titleAr="تطوير المواقع" subtitleEn="BUILD YOUR DIGITAL EMPIRE" subtitleAr="ابنِ إمبراطوريتك الرقمية" plans={WEB_PLANS} />
      </div>
    </Layout>
  );
}
