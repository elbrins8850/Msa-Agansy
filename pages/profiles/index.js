import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { useLang } from '../../src/context/LangContext';

const TEAM = [
  {
    slug: 'menna',
    image: '/assets/img/profiles/menna.jpeg',
    nameEn: 'Menna', nameAr: 'منة',
    roleEn: 'Co-Founder & Operations Director', roleAr: 'الشريك المؤسس ومدير العمليات',
    icons: ['fa-linkedin', 'fa-behance'],
  },
  {
    slug: 'sally',
    image: '/assets/img/profiles/sally.jpeg',
    nameEn: 'Dr. Sally', nameAr: 'د. سالي',
    roleEn: 'Co-Founder & CEO', roleAr: 'الشريك المؤسس والمدير التنفيذي',
    icons: ['fa-linkedin', 'fa-twitter'],
  },
  {
    slug: 'abdelalim',
    image: '/assets/img/profiles/ibrahim.jpeg',
    nameEn: 'Eng. Ibrahim', nameAr: 'م. إبراهيم',
    roleEn: 'Co-Founder & Head of SEO', roleAr: 'الشريك المؤسس ورئيس قسم السيو',
    icons: ['fa-linkedin', 'fa-github'],
  },
];

export default function ProfilesIndexPage() {
  const { t } = useLang();

  return (
    <Layout
      title="Our Minds | MSA Agency"
      description="Meet the creative minds and digital architects behind MSA Agency."
    >
      <div className="grid-overlay"></div>
      <main className="profiles-index-wrapper section-padding">
        <div className="container">

          <div className="section-header text-center">
            <h2 className="scramble">{t('The Minds Behind MSA', 'العقول وراء MSA')}</h2>
            <p>{t('A collective of digital architects and creative engineers.', 'مجموعة من مهندسي الديجيتال والمبدعين.')}</p>
          </div>

          <div className="team-grid">
            {TEAM.map((member) => (
              <div className="team-card reveal-item" key={member.slug}>
                <div className="member-image">
                  <img src={member.image} alt={member.nameEn} className="glow-img" />
                  <div className="member-overlay">
                    <div className="social-links">
                      {member.icons.map((icon) => (
                        <Link href={`/profiles/${member.slug}`} key={icon}>
                          <i className={`fab ${icon}`}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="scramble">{t(member.nameEn, member.nameAr)}</h3>
                  <p>{t(member.roleEn, member.roleAr)}</p>
                  <Link href={`/profiles/${member.slug}`} className="btn-price">
                    {t('View Profile', 'عرض الملف')}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </Layout>
  );
}
