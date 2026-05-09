import ServiceDetail from '../../src/components/ServiceDetail';

const PLANS = [
  {
    nameEn: 'Starter', nameAr: 'البداية', price: '449', planKey: 'Social_Starter',
    ctaEn: 'Choose Starter', ctaAr: 'اختر باقة البداية',
    descEn: 'Ideal for new businesses establishing their presence.',
    descAr: 'مثالية للشركات الجديدة لإثبات تواجدها الرقمي.',
    features: [
      { en: '8 Posts per Month', ar: '٨ منشورات شهرياً' },
      { en: '1 Platform Management', ar: 'إدارة منصة واحدة' },
      { en: 'Caption & Copywriting', ar: 'كتابة المحتوى' },
      { en: 'Basic Visual Design', ar: 'تصاميم بصرية أساسية' },
      { en: 'Monthly Analytics Report', ar: 'تقرير تحليلات شهري' },
    ],
  },
  {
    nameEn: 'Growth', nameAr: 'النمو', price: '799', planKey: 'Social_Growth', featured: true,
    badgeEn: 'Most Popular', badgeAr: 'الأكثر طلباً',
    ctaEn: 'Choose Growth', ctaAr: 'اختر باقة النمو',
    descEn: 'Boost engagement, drive traffic, and increase sales.',
    descAr: 'لزيادة التفاعل، جذب الزيارات، ومضاعفة المبيعات.',
    features: [
      { en: '12 Posts per Month', ar: '١٢ منشوراً شهرياً' },
      { en: '2 Platforms Management', ar: 'إدارة منصتين' },
      { en: '1 AI Promotional Video', ar: '١ فيديو ترويجي AI' },
      { en: 'Comments & DM Monitoring', ar: 'متابعة التعليقات والرسائل' },
      { en: 'Advanced Monthly Report', ar: 'تقرير أداء متقدم شهرياً' },
    ],
  },
  {
    nameEn: 'Elite VIP', nameAr: 'النخبة VIP', price: '1,499', planKey: 'Social_Elite',
    ctaEn: 'Choose Elite', ctaAr: 'اختر باقة النخبة',
    descEn: 'Full-scale market presence and aggressive growth.',
    descAr: 'تواجد كامل بالسوق ونمو سريع ومكثف.',
    features: [
      { en: '16 Posts per Month', ar: '١٦ منشوراً شهرياً' },
      { en: '3 Platforms Management', ar: 'إدارة ٣ منصات' },
      { en: '2 AI Promotional Videos', ar: '٢ فيديو ترويجي AI' },
      { en: 'Advanced Content Strategy', ar: 'استراتيجية محتوى متقدمة' },
      { en: 'Full Community Management', ar: 'إدارة كاملة للمجتمع' },
      { en: 'Priority Support 24/7', ar: 'دعم فني أولوية ٢٤/٧' },
    ],
  },
];

export default function SocialMediaPage() {
  return (
    <ServiceDetail
      titleEn="Social Media Management"
      titleAr="إدارة التواصل الاجتماعي"
      descEn="Dominate the social landscape. We handle everything from content creation to community management and growth analytics."
      descAr="سيطر على المشهد الاجتماعي. نحن نتولى كل شيء من صناعة المحتوى إلى إدارة المجتمع وتحليلات النمو."
      image="/assets/img/hero/social.jpg"
      metaDesc="حول متابعيك إلى عملاء مخلصين. إدارة احترافية لمنصات التواصل الاجتماعي باستراتيجيات تفاعل قائمة على البيانات."
      features={[
        { titleEn: 'Content Plan', titleAr: 'خطة المحتوى', descEn: 'Customized strategies', descAr: 'استراتيجيات مخصصة' },
        { titleEn: 'Growth', titleAr: 'النمو', descEn: 'Real follower increase', descAr: 'زيادة حقيقية للمتابعين' },
        { titleEn: 'Ads Integration', titleAr: 'ربط الإعلانات', descEn: 'Organic & Paid sync', descAr: 'مزامنة الترويج المجاني والمدفوع' },
      ]}
      pricingTitleEn="Social Plans"
      pricingTitleAr="باقات السوشيال"
      plans={PLANS}
    />
  );
}
