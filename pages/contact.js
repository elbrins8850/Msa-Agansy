import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';
import { useLang } from '../src/context/LangContext';

export default function ContactPage() {
  const { t, lang } = useLang();
  const router = useRouter();
  const subjectRef = useRef(null);

  // Auto-fill subject from URL ?plan=
  useEffect(() => {
    const { plan } = router.query;
    if (plan && subjectRef.current) {
      subjectRef.current.value = plan.replace(/_/g, ' ');
    }
  }, [router.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const btnSpan = btn.querySelector('span') || btn;
    const original = btnSpan.innerHTML;

    btnSpan.innerHTML = lang === 'ar'
      ? '<i class="fas fa-circle-notch fa-spin"></i> جاري إرسال المهمة...'
      : '<i class="fas fa-circle-notch fa-spin"></i> Transmitting Mission...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    // Replace with your Web3Forms access key
    const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

    if (!ACCESS_KEY) {
      btnSpan.innerHTML = lang === 'ar'
        ? '<i class="fas fa-exclamation-triangle"></i> نموذج غير مفعل'
        : '<i class="fas fa-exclamation-triangle"></i> Contact form disabled';
      btn.style.background = '#ffb703';
      btn.style.color = '#000';
      setTimeout(() => {
        btnSpan.innerHTML = original;
        btn.style.background = '';
        btn.style.color = '';
        btn.style.pointerEvents = 'auto';
        btn.style.opacity = '1';
      }, 4000);
      return;
    }

    const formData = new FormData();
    formData.append('access_key', ACCESS_KEY);
    formData.append('subject', '🚀 New Mission from MSA Agency Website');
    formData.append('Name', form.name.value);
    formData.append('Email', form.email.value);
    formData.append('Interested_Plan', form.subject.value);
    formData.append('Service_Category', form['service-type'].options[form['service-type'].selectedIndex]?.text || '');
    formData.append('Message', form.message.value);

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        const clientName = form.name.value;
        const clientPlan = form.subject.value;
        const clientMsg = form.message.value;

        btnSpan.innerHTML = lang === 'ar'
          ? '<i class="fas fa-check-circle"></i> تمت المهمة بنجاح'
          : '<i class="fas fa-check-circle"></i> Mission Accomplished';
        btn.style.background = '#00f3ff';
        btn.style.color = '#000';
        btn.style.boxShadow = '0 0 20px #00f3ff';

        form.reset();

        setTimeout(() => {
          const waText = lang === 'ar'
            ? `أهلاً وكالة MSA، أنا ${clientName}. سجلت طلبي بخصوص (${clientPlan}). رسالتي: ${clientMsg}`
            : `Hello MSA Agency, I'm ${clientName}. I submitted a request for (${clientPlan}). Message: ${clientMsg}`;
          window.open(`https://wa.me/+201055660130?text=${encodeURIComponent(waText)}`, '_blank');
        }, 1500);
      } else {
        throw new Error('Failed');
      }
    } catch {
      btnSpan.innerHTML = lang === 'ar'
        ? '<i class="fas fa-exclamation-triangle"></i> حدث خطأ'
        : '<i class="fas fa-exclamation-triangle"></i> Error. Transmission Failed.';
      btn.style.background = '#ff003c';
      btn.style.color = '#fff';
    } finally {
      setTimeout(() => {
        btnSpan.innerHTML = original;
        btn.style.background = '';
        btn.style.color = '';
        btn.style.boxShadow = '';
        btn.style.pointerEvents = 'auto';
        btn.style.opacity = '1';
      }, 5000);
    }
  };

  return (
    <Layout
      title="Contact Us | Command Center"
      description="تواصل مع فريق MSA Agency لبدء مشروعك الرقمي. استجابة سريعة خلال 24 ساعة."
    >
      <main className="contact-page">
        <section className="contact-hero section-padding" style={{ paddingTop: '120px' }}>
          <div className="container">
            <div className="contact-grid">

              {/* Info Side */}
              <div className="contact-info-side reveal-item">
                <img src="/assets/img/main/contact-support.jpg" alt="MSA Command Center" className="contact-img" />
                <div className="info-boxes">
                  <div className="info-item">
                    <div className="hologram-icon-mini"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="info-text">
                      <h4>{t('Location', 'الموقع')}</h4>
                      <p>{t('Riyadh | Istanbul | Cairo', 'الرياض | إسطنبول | القاهرة')}</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="hologram-icon-mini"><i className="fas fa-envelope"></i></div>
                    <div className="info-text">
                      <h4>{t('Email', 'البريد الإلكتروني')}</h4>
                      <p>info@msa-agency.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="hologram-icon-mini"><i className="fas fa-phone-alt"></i></div>
                    <div className="info-text">
                      <h4>{t('Phone', 'رقم الهاتف')}</h4>
                      <p dir="ltr">+201055660130</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="contact-form-side reveal-item">
                <h2 className="scramble">{t('Initialize Connection', 'بدء الاتصال')}</h2>
                <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>
                  {t('Transmit your project details to our secure servers.', 'أرسل تفاصيل مشروعك إلى خوادمنا الآمنة.')}
                </p>

                <form id="msa-contact-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input type="text" name="name" required placeholder=" " />
                    <label>{t('Full Name', 'الاسم الكامل')}</label>
                  </div>
                  <div className="input-group">
                    <input type="email" name="email" required placeholder=" " />
                    <label>{t('Email Address', 'البريد الإلكتروني')}</label>
                  </div>
                  <div className="input-group">
                    <input type="text" name="subject" ref={subjectRef} required placeholder=" " />
                    <label>{t('Subject / Selected Plan', 'الموضوع / الباقة المختارة')}</label>
                  </div>
                  <div className="input-group">
                    <select name="service-type" required>
                      <option value="" disabled defaultValue hidden></option>
                      <option value="marketing">{t('Digital Marketing', 'تسويق رقمي')}</option>
                      <option value="web">{t('Web Development', 'تطوير مواقع')}</option>
                      <option value="branding">{t('Branding', 'هوية بصرية')}</option>
                    </select>
                    <label>{t('Select Service Type', 'اختر نوع الخدمة')}</label>
                  </div>
                  <div className="input-group">
                    <textarea name="message" rows="5" required placeholder=" "></textarea>
                    <label>{t('Mission Brief', 'تفاصيل المهمة')}</label>
                  </div>
                  <button type="submit" className="btn-legacy" style={{ width: '100%' }}>
                    <span>{t('Execute Mission', 'تنفيذ المهمة')}</span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
