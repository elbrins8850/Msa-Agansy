import Image from 'next/image';
import Layout from '../src/components/Layout';
import { useLang } from '../src/context/LangContext';

export default function AboutPage() {
  const { t } = useLang();

  return (
    <Layout
      title="About MSA | Engineering Success"
      description="تعرف على العقول المبدعة خلف وكالة MSA. رحلتنا، رؤيتنا، وفريقنا الشغوف بتحويل التحديات التقنية إلى نجاحات تجارية."
      ogImage="https://msa-agency.com/assets/img/main/about-agency.jpg"
    >
      <div className="about-page-wrapper" style={{ paddingTop: '80px' }}>

        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-image-wrapper">
            <img src="/assets/img/main/about-agency.jpg" alt="MSA Agency" className="glow-img hero-full-width" />
          </div>
          <div className="container section-padding">
            <div className="about-text-content">
              <h2 className="scramble">
                {t('Engineering Digital Success', 'هندسة النجاح الرقمي')}
              </h2>
              <p>
                {t(
                  "MSA Agency is a tech-driven marketing powerhouse. We build brands that don't just exist, but dominate the digital landscape.",
                  'وكالة MSA هي قوة تسويقية مدفوعة بالتكنولوجيا. نجمع بين علم البيانات والسرد الإبداعي لبناء علامات تجارية تسيطر على المشهد الرقمي.'
                )}
              </p>
              <div className="about-stats">
                <div className="stat-item reveal-item">
                  <h3>{t('2026', '٢٠٢٦')}</h3>
                  <p>{t('Future Ready', 'جاهزون للمستقبل')}</p>
                </div>
                <div className="stat-item reveal-item">
                  <h3>{t('Global', 'عالمي')}</h3>
                  <p>{t('Reach', 'نطاق الوصول')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint */}
        <section className="blueprint-section section-padding glass-morphism reveal-item">
          <div className="tech-grid-bg"></div>
          <div className="container">
            <h2 className="section-title-small text-center scramble" style={{ marginBottom: '40px' }}>
              {t('The Agency Blueprint', 'مخطط الوكالة')}
            </h2>
            <div className="blueprint-grid">
              <div className="blueprint-item">
                <h3>
                  <i className="fas fa-microchip icon-glow"></i>{' '}
                  <span>{t('01. The Concept', '٠١. المفهوم')}</span>
                </h3>
                <p>{t('Not just an agency, but a Digital Intelligence Hub.', 'ليست مجرد وكالة، بل مركز استخبارات رقمية.')}</p>
              </div>
              <div className="blueprint-item">
                <h3>
                  <i className="fas fa-code icon-glow"></i>{' '}
                  <span>{t('02. The Architecture', '٠٢. المعمارية')}</span>
                </h3>
                <p>{t("Built on a 'Clean Code' philosophy.", "مبنية على فلسفة الكود النظيف.")}</p>
              </div>
            </div>
            <div className="blueprint-quote text-center">
              <h4 className="reveal-item">
                {t('"We Don\'t Follow Trends, We Set Them."', '"نحن لا نتبع الاتجاهات، نحن نصنعها."')}
              </h4>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="partners-section section-padding">
          <div className="container">
            <h4 className="section-title-small">{t('Recognized By', 'نحن محل ثقة')}</h4>
            <div className="logo-showcase">
              {[1, 2, 3, 4, 5].map((n) => (
                <div className="partner-logo" key={n}>
                  <img src={`/assets/img/icons/client-${n}.png`} alt="Client" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="kmw-achievements section-padding reveal-item">
          <div className="container text-center">
            <h2 className="hologram-title scramble">
              {t('MSA by Numbers', 'وكالة MSA في أرقام')}
            </h2>
            <div className="achievements-grid">
              <div className="stat-item">
                <div className="stat-number" data-target="150">0</div>
                <div className="stat-label">{t('Projects', 'مشروع')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="98">0</div>
                <div className="stat-label">{t('Efficiency %', 'كفاءة %')}</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
