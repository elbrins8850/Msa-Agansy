import Link from 'next/link';
import Layout from './Layout';
import { useLang } from '../context/LangContext';

function PricingCard({ plan }) {
  const { t } = useLang();
  return (
    <div className={`price-card reveal-item${plan.featured ? ' featured' : ''}`}>
      {plan.badgeEn && <div className="badge">{t(plan.badgeEn, plan.badgeAr)}</div>}
      <div className="plan-header">
        <h3>{t(plan.nameEn, plan.nameAr)}</h3>
        <div className="price"><span>$</span>{plan.price}</div>
        {plan.descEn && <p className="plan-desc">{t(plan.descEn, plan.descAr)}</p>}
      </div>
      <ul className="plan-features">
        {plan.features.map((f, i) => <li key={i}>{t(f.en, f.ar)}</li>)}
      </ul>
      <Link href={`/contact?plan=${plan.planKey}`} className="btn-price">
        {t(plan.ctaEn || 'Choose Plan', plan.ctaAr || 'اختر الباقة')}
      </Link>
    </div>
  );
}

export default function ServiceDetail({
  titleEn, titleAr,
  descEn, descAr,
  image,
  features,
  pricingTitleEn, pricingTitleAr,
  plans,
  metaDesc,
  ogImage,
}) {
  const { t } = useLang();

  return (
    <Layout
      title={`${titleEn} | Service Details - MSA`}
      description={metaDesc || descEn}
      ogImage={ogImage || `https://msa-agency.com${image}`}
    >
      <main className="service-detail-page">
        {/* Hero */}
        <section className="service-hero section-padding">
          <div className="container">
            <div className="service-header-content">
              <img src={image} alt={titleEn} className="service-main-img" />
              <div className="service-text-content">
                <h1 className="scramble text-gold">{t(titleEn, titleAr)}</h1>
                <p className="service-desc">{t(descEn, descAr)}</p>
              </div>
            </div>

            {features && (
              <div className="service-features-grid">
                {features.map((f, i) => (
                  <div className="feature-item reveal-item" key={i}>
                    <h3>{t(f.titleEn, f.titleAr)}</h3>
                    <p>{t(f.descEn, f.descAr)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pricing */}
        {plans && (
          <section className="pricing-section section-padding alt-bg pb-100">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title text-gold scramble">
                  {t(pricingTitleEn, pricingTitleAr)}
                </h2>
                <p className="section-subtitle">
                  {t("RAMADAN SPECIAL OFFERS — DON'T MISS OUT!", 'عروض رمضان الخاصة — لا تفوت الفرصة!')}
                </p>
              </div>
              <div className="pricing-grid">
                {plans.map((plan) => <PricingCard key={plan.planKey} plan={plan} />)}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
