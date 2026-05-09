import ProfilePage from '../../src/components/ProfilePage';
export default function AbdElAlimProfile() {
  return <ProfilePage
    nameEn="Eng. Ibrahim" nameAr="م. إبراهيم"
    roleEn="Co-Founder & Head of SEO and Analytics" roleAr="الشريك المؤسس ورئيس قسم تحسين محركات البحث وتحليل البيانات"
    image="/assets/img/profiles/ibrahim.jpeg"
    metaDesc="تعرف على المهندس إبراهيم، الشريك المؤسس ورئيس قسم SEO وتحليل البيانات في MSA."
    bioEn="Eng. Ibrahim is the Co-Founder and Head of SEO and Analytics at MSA, leading data-driven SEO strategies to enhance search visibility and digital performance. He focuses on performance analysis, strategic optimization, and delivering measurable, sustainable growth."
    bioAr="المهندس إبراهيم هو الشريك المؤسس ورئيس قسم تحسين محركات البحث وتحليل البيانات في MSA، ويقود استراتيجيات SEO المعتمدة على البيانات لتحسين ظهور العملاء في نتائج البحث. يركز على تحليل الأداء، تطوير الاستراتيجيات الرقمية، وتحقيق نمو مستدام قائل على نتائج قابلة للقياس."
    tags={[{ en: 'SEO Strategy', ar: 'استراتيجيات السيو' }, { en: 'Data Analytics', ar: 'تحليل البيانات' }, { en: 'Growth Marketing', ar: 'التسويق لزيادة النمو' }]}
  />;
}
