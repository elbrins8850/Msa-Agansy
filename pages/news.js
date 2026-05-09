import Layout from '../src/components/Layout';
import { useLang } from '../src/context/LangContext';

const ARTICLES = [
  {
    date: 'Feb 15, 2026',
    enTitle: 'The Future of AI in Content Creation',
    arTitle: 'مستقبل الذكاء الاصطناعي في صناعة المحتوى',
    enDesc: 'Exploring how generative AI is reshaping the way brands communicate with their audiences in 2026.',
    arDesc: 'استكشاف كيف يعيد الذكاء الاصطناعي التوليدي تشكيل الطريقة التي تتواصل بها العلامات التجارية مع جمهورها.',
    href: '/news/ai-content-creation',
  },
  {
    date: 'Feb 10, 2026',
    enTitle: 'Hyper-Personalization in E-commerce',
    arTitle: 'التخصيص الفائق في التجارة الإلكترونية',
    enDesc: 'Why generic ads are dying and how data-driven personalization is driving 300% more conversions.',
    arDesc: 'لماذا تموت الإعلانات التقليدية وكيف يؤدي التخصيص القائم على البيانات إلى زيادة التحويلات بنسبة ٣٠٠٪.',
    href: '/news/personalization',
  },
  {
    date: 'Feb 05, 2026',
    enTitle: 'MSA Expands to New Tech Hubs',
    arTitle: 'توسع وكالة MSA في مراكز تكنولوجية جديدة',
    enDesc: 'We are proud to announce our new technical support offices opening soon in Riyadh and Istanbul.',
    arDesc: 'نفخر بالإعلان عن افتتاح مكاتب الدعم الفني الجديدة قريباً في الرياض وإسطنبول.',
    href: '/news/expansion',
  },
];

export default function NewsPage() {
  const { t } = useLang();

  return (
    <Layout
      title="MSA News | Digital Insights"
      description="تابع آخر تحديثات التكنولوجيا، اتجاهات السوق، وأخبار وكالة MSA."
    >
      <main>
        {/* Hero */}
        <section className="news-hero">
          <div className="news-hero-image-full">
            <img src="/assets/img/main/news-updates.jpg" alt="MSA News" className="news-main-img-full" />
            <div className="news-overlay-dark"></div>
          </div>
          <div className="news-hero-content-fixed">
            <div className="container">
              <div className="hero-text-overlay">
                <h1>{t('Digital Insights & News', 'رؤى وأخبار رقمية')}</h1>
                <p>
                  {t(
                    'Stay ahead of the curve with our latest updates on AI, marketing, and technology.',
                    'ابقَ في الطليعة مع أحدث مستجداتنا في مجالات الذكاء الاصطناعي والتسويق والتكنولوجيا.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="articles-section section-padding">
          <div className="container">
            <div className="articles-grid">
              {ARTICLES.map((article) => (
                <article className="news-card" key={article.href}>
                  <div className="post-date">{article.date}</div>
                  <h3>{t(article.enTitle, article.arTitle)}</h3>
                  <p>{t(article.enDesc, article.arDesc)}</p>
                  <a href={article.href} className="read-more">
                    {t('Read Full Article', 'اقرأ المقال كاملاً')}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
