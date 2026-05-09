import Link from 'next/link';
import Layout from './Layout';
import { useLang } from '../context/LangContext';

export default function ProfilePage({ nameEn, nameAr, roleEn, roleAr, bioEn, bioAr, image, tags, metaDesc }) {
  const { t } = useLang();

  return (
    <Layout
      title={`${nameEn} | Profile - MSA Agency`}
      description={metaDesc || bioEn}
    >
      <main className="profile-page section-padding">
        <div className="container">

          <div className="back-btn-wrapper">
            <Link href="/profiles" className="btn-back">
              <i className="fas fa-arrow-left"></i>{' '}
              <span>{t('Back to Team', 'العودة للفريق')}</span>
            </Link>
          </div>

          <div className="glass-profile-card reveal-item">
            <div className="scan-line"></div>

            <div className="profile-header-main">
              <div className="profile-img-container">
                <img src={image} alt={nameEn} className="glow-img" />
              </div>
              <div className="profile-title-info">
                <h1 className="scramble text-gold">{t(nameEn, nameAr)}</h1>
                <h4>{t(roleEn, roleAr)}</h4>
              </div>
            </div>

            <div className="profile-content-body">
              <p className="glass-bio">{t(bioEn, bioAr)}</p>
            </div>

            <div className="profile-tags">
              {tags.map((tag, i) => (
                <span className="tag" key={i}>{t(tag.en, tag.ar)}</span>
              ))}
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}
