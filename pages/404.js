import Link from 'next/link';
import Layout from '../src/components/Layout';
import { useLang } from '../src/context/LangContext';

export default function Custom404() {
  const { t } = useLang();

  return (
    <Layout title="404 Error | MSA Agency" description="Page not found.">
      <main className="error-page">
        <section className="section-padding full-height-center">
          <div className="container text-center">
            <div className="error-visual">
              <h1 className="glitch" data-text="404">404</h1>
              <div className="glow-circle"></div>
            </div>
            <h2>{t('Lost in Space?', 'تهت في الفضاء الرقمي؟')}</h2>
            <p className="error-msg">
              {t(
                "The page you are looking for doesn't exist or has been moved.",
                'الصفحة التي تبحث عنها غير موجودة أو تم نقلها لمكان آخر.'
              )}
            </p>
            <Link href="/" className="btn-legacy">
              {t('Back to Home', 'العودة للرئيسية')}
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
