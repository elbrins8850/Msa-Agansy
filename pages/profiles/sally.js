import ProfilePage from '../../src/components/ProfilePage';
export default function SallyProfile() {
  return <ProfilePage
    nameEn="Dr. Sally" nameAr="د. سالي"
    roleEn="Co-Founder & CEO" roleAr="الشريك المؤسس والمدير التنفيذي"
    image="/assets/img/profiles/sally.jpeg"
    metaDesc="تعرف على الدكتورة سالي، الشريك المؤسس والمدير التنفيذي في MSA Agency."
    bioEn="Dr. Sally is the Co-Founder and Chief Executive Officer (CEO) of MSA, leading the company's strategic vision and overseeing key decisions that drive growth and expansion. She focuses on business development, strategic partnerships, and delivering innovative solutions that strengthen the company's market position."
    bioAr="الدكتورة سالي هي الشريك المؤسس والمدير التنفيذي لشركة MSA، وتقود الرؤية الاستراتيجية للشركة وتشرف على اتخاذ القرارات الرئيسية التي تدعم نموها وتوسعها. تركز على تطوير الأعمال، بناء الشراكات، وضمان تقديم حلول مبتكرة تعزز نجاح العملاء وترسخ مكانة الشركة في السوق."
    tags={[{ en: 'Business Development', ar: 'تطوير الأعمال' }, { en: 'Strategic Partnerships', ar: 'الشراكات الاستراتيجية' }, { en: 'Market Leadership', ar: 'ريادة السوق' }]}
  />;
}
