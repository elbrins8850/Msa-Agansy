# MSA Agency — Next.js Project

تم تحويل المشروع بالكامل من Static HTML/CSS/JS إلى **Next.js 14** مع الحفاظ على كل الـ features الأصلية.

---

## 📁 هيكل المشروع

```
msa-nextjs/
├── pages/                    ← كل الصفحات
│   ├── index.js              ← الرئيسية
│   ├── about.js              ← من نحن
│   ├── contact.js            ← تواصل معنا
│   ├── news.js               ← الأخبار
│   ├── services.js           ← صفحة الخدمات والأسعار
│   ├── 404.js                ← صفحة الخطأ
│   ├── _app.js               ← App wrapper
│   ├── services/             ← 9 صفحات خدمات
│   │   ├── social-media.js
│   │   ├── content-writing.js
│   │   ├── seo-strategy.js
│   │   ├── ai-content.js
│   │   ├── branding.js
│   │   ├── ui-ux-design.js
│   │   ├── web-development.js
│   │   ├── ecommerce.js
│   │   └── paid-ads.js
│   └── profiles/             ← 4 صفحات profiles
│       ├── index.js
│       ├── menna.js
│       ├── sally.js
│       └── abdelalim.js
│
├── src/
│   ├── components/           ← الـ components المشتركة
│   │   ├── Layout.js         ← الـ layout الرئيسي (SEO + Audio + HUD)
│   │   ├── Navbar.js         ← الهيدر
│   │   ├── Footer.js         ← الفوتر
│   │   ├── ServiceDetail.js  ← template لصفحات الخدمات
│   │   └── ProfilePage.js    ← template لصفحات الأشخاص
│   ├── context/
│   │   └── LangContext.js    ← نظام اللغة AR/EN
│   ├── hooks/
│   │   └── useMSAEffects.js  ← Scramble, Stats, HUD, Audio
│   └── styles/
│       └── globals.css       ← استيراد كل الـ CSS الأصلية
│
├── public/
│   └── assets/               ← كل الـ assets الأصلية (CSS, img, video)
│
├── next.config.js            ← Redirects من .html القديم
└── .env.local.example        ← متغيرات البيئة
```

---

## 🚀 تشغيل المشروع

```bash
# 1. تثبيت الـ dependencies
npm install

# 2. تشغيل في وضع Development
npm run dev
# افتح: http://localhost:3000

# 3. Build للـ Production
npm run build
npm run start
```

---

## ⚙️ الإعدادات المهمة

### 1. Web3Forms (نموذج التواصل)
```bash
# اعمل نسخة من ملف .env.local.example
cp .env.local.example .env.local

# افتح .env.local وضع مفتاحك
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_key
```
احصل على مفتاحك مجاناً من: https://web3forms.com

### 2. Google Analytics (اختياري)
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. WhatsApp Number
الرقم موجود في `src/components/Footer.js` و `pages/contact.js`
```
+201055660130
```

---

## ✨ الـ Features المنقولة بالكامل

| Feature | الملف |
|---------|-------|
| Bilingual AR/EN | `src/context/LangContext.js` |
| Text Scramble Effect | `src/hooks/useMSAEffects.js` |
| HUD Cursor | `src/hooks/useMSAEffects.js` |
| Stats Counter Animate | `src/hooks/useMSAEffects.js` |
| Logo Glitch Pulse | `src/hooks/useMSAEffects.js` |
| Background Audio + Controls | `src/hooks/useMSAEffects.js` |
| Hover/Click Sounds | `src/hooks/useMSAEffects.js` |
| Scroll Reveal Animations | CSS + Observer |
| Chatbase AI Assistant | `src/components/Layout.js` |
| Web3Forms Contact | `pages/contact.js` |
| WhatsApp Auto-redirect | `pages/contact.js` |
| URL Plan Auto-fill | `pages/contact.js` |
| Old .html URL Redirects | `next.config.js` |
| SEO Meta Tags | `src/components/Layout.js` |
| OG / Twitter Cards | `src/components/Layout.js` |

---

## 🔧 لو عايز تعدل

### تغيير السعر في أي باقة:
- ابحث عن اسم الباقة في `pages/services/[service-name].js`

### إضافة خدمة جديدة:
1. اعمل ملف جديد في `pages/services/`
2. استخدم `<ServiceDetail />` component

### إضافة عضو فريق:
1. اعمل ملف جديد في `pages/profiles/`
2. استخدم `<ProfilePage />` component
3. أضف الصورة في `public/assets/img/profiles/`
4. أضف الكارد في `pages/profiles/index.js`

---

## 🚢 Deployment

**Vercel (الأسهل والأسرع):**
```bash
npm i -g vercel
vercel
```

**أو ارفع على أي VPS:**
```bash
npm run build
npm run start
```

---

## 📞 Support

WhatsApp: +201115882130
Email: info@msa-agency.com
