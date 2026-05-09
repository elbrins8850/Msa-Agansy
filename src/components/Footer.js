import Link from 'next/link';
import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="main-footer">
      <div className="container footer-centered-content">
        <div className="footer-grid-wrapper">

          <div className="footer-col reveal-item">
            <div className="hologram-icon-sm">
              <i className="fas fa-brain"></i>
            </div>
            <div className="footer-brand-lock">
              <h3 style={{ color: 'var(--accent-gold)' }}>MSA AGENCY</h3>
              <p className="footer-desc">
                {t(
                  'Crafting digital excellence through innovation and creative strategy.',
                  'نصيغ التميز الرقمي من خلال الابتكار والاستراتيجية الإبداعية.'
                )}
              </p>
            </div>
          </div>

          <div className="footer-col reveal-item">
            <h4 className="footer-heading">{t('Quick Navigation', 'روابط سريعة')}</h4>
            <ul className="footer-links">
              <li><Link href="/">{t('Home', 'الرئيسية')}</Link></li>
              <li><Link href="/about">{t('About Us', 'عن الوكالة')}</Link></li>
              <li><Link href="/services">{t('Our Services', 'خدماتنا')}</Link></li>
              <li><Link href="/news">{t('News', 'الأخبار')}</Link></li>
              <li><Link href="/contact">{t('Contact', 'تواصل معنا')}</Link></li>
            </ul>
          </div>

          <div className="footer-col reveal-item">
            <h4 className="footer-heading">{t('Connect With Us', 'تواصل معنا')}</h4>
            <div className="hologram-social-grid">
              <a href="https://wa.me/+201055660130?text=Hello%20MSA%20Agency" target="_blank" rel="noreferrer" className="hologram-icon-sm">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/msa-agency-bb6a953b1/" target="_blank" rel="noreferrer" className="hologram-icon-sm">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/msa.digital.agency26" target="_blank" rel="noreferrer" className="hologram-icon-sm">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61588148560627" target="_blank" rel="noreferrer" className="hologram-icon-sm">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {t('2026 MSA AGENCY. All Rights Reserved.', '٢٠٢٦ وكالة MSA. جميع الحقوق محفوظة.')}</p>
        </div>
      </div>
    </footer>
  );
}
