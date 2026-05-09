import ProfilePage from '../../src/components/ProfilePage';
export default function MennaProfile() {
  return <ProfilePage
    nameEn="Eng. Menna" nameAr="م. منة"
    roleEn="Co-Founder & Operations Director" roleAr="الشريك المؤسس ومدير العمليات"
    image="/assets/img/profiles/menna.jpeg"
    metaDesc="استكشف ملف المهندسة منة، الشريك المؤسس ومدير العمليات في MSA Agency."
    bioEn="Eng. Menna is the Co-Founder and Operations Director at MSA, overseeing daily operations and coordinating teams to ensure projects are executed efficiently and to the highest standards. She focuses on workflow organization, performance management, and delivering professional results that achieve client objectives."
    bioAr="المهندسة منة هي الشريك المؤسس ومدير العمليات في MSA، وتشرف على إدارة العمليات اليومية وتنسيق فرق العمل لضمان تنفيذ المشاريع بكفاءة وجودة عالية. تركز على تنظيم سير العمل، متابعة الأداء، وضمان تقديم نتائج احترافية تحقق أهداف العملاء."
    tags={[{ en: 'Operations Management', ar: 'إدارة العمليات' }, { en: 'Project Efficiency', ar: 'كفاءة المشاريع' }, { en: 'Performance Tracking', ar: 'متابعة الأداء' }]}
  />;
}
