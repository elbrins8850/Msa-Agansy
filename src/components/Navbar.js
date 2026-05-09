import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLang } from '../context/LangContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container flex-nav">
        <Link href="/" className="logo logo-glitch">
          <Image src="/assets/img/icons/Logo.png" alt="MSA Logo" width={120} height={40} priority />
        </Link>

        <div
          className={`hamburger${menuOpen ? ' active' : ''}`}
          id="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav id="nav-menu" className={menuOpen ? 'mobile-active' : ''}>
          <ul className="nav-links">
            <li><Link href="/" onClick={closeMenu}>{t('Home', 'الرئيسية')}</Link></li>
            <li><Link href="/about" onClick={closeMenu}>{t('About', 'من نحن')}</Link></li>
            <li><Link href="/services" onClick={closeMenu}>{t('Services', 'خدماتنا')}</Link></li>
            <li><Link href="/profiles" onClick={closeMenu}>{t('Our Minds', 'عقولنا')}</Link></li>
            <li><Link href="/news" onClick={closeMenu}>{t('News', 'الأخبار')}</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>{t('Contact', 'تواصل معنا')}</Link></li>
            <li>
              <button className="lang-switch" onClick={() => { toggleLang(); closeMenu(); }}>
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
