
import { NewsItem, Faculty, Course } from './types';

export const UNIVERSITY_NAME = "الجامعة العالمية الافتراضية للطب الشمولي";
export const UNIVERSITY_ABBR = "IVUHM";
export const OFFICIAL_EMAIL = "holisticmedicineinternationaun@gmail.com";

export const PRIMARY_COLOR = "#271e3a"; 
export const ACCENT_COLOR = "#f1c40f";  
export const SECONDARY_COLOR = "#bd3057"; 

export const CONTACT_NUMBERS = [
  { label: "رئيس الجامعة (سوريا)", number: "+963 933 425 692" },
  { label: "الوكيل العلمي (الجزائر)", number: "+213 664 083 947" }
];

export const SOCIAL_LINKS = [
  { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61576702401322", icon: "facebook" },
  { name: "Telegram", link: "https://t.me/+_xQw-l_cFcpmNTU0", icon: "paper-plane" },
  { name: "WhatsApp", link: "https://chat.whatsapp.com/KRol8QEQDD19LUhJ6BSoKi?mode=gi_t", icon: "whatsapp" },
  { name: "YouTube", link: "https://www.youtube.com/@InternationalVirtuelUniversity", icon: "youtube-play" }
];

export const COURSES_LIST: Course[] = [
  {
    id: 'mental-health',
    title: 'دورة الصحة النفسية',
    price: 'عرض خاص',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgt_iX-kLeuv1wV2CILIAUsoF9czxdYeMPQLtA-IfXZQ-nJcXSLAgr1YCR05ezHAF31adZQOvqhrVADNGfMC0TMbmwQirfzN8qd56xuvQmQY6m6HtbHX8QorQWhx7LUlueG5mSqwxGH3oKr5hAdeBPO9pIC1MHuYpkBd-9_jArWsw0YjCsXPee3dqH8Ip0/s16000/Capture.PNG',
    link: '/course/mental-health',
    description: 'اعلم أن سر تشخيص الحالة النفسية هو السر العظيم والشيفرة لتحليل الصحة والشخصية المرضية. ثمانون بالمئة من الأمراض من الوهم هو مرض نفسي.',
    duration: 'مفتوحة',
    syllabus: [
      'فقه علة الأمراض النفسية',
      'تحليل الشخصية المرضية',
      'سر البناء التشخيصي النفسي',
      'قوة الاستشفاء والوهم'
    ],
    features: ['شهادة معتمدة', 'متابعة مباشرة', 'مواد علمية نادرة']
  },
  {
    id: 'humors-master',
    title: 'طب الطبائع والأمزجة والأخلاط',
    price: '100 دولار',
    fullPrice: '150 دولار',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNGSl-UVA2zdGQsyRZlnlb_a5IPhgdNfgV1jkyaVVkhCNhVZhQPuJIuVM_v5bPhRy80qb02qiHESH2HliMd599RjTPJJ4_lHBHq5vKj3WS4fBbhCGyFbWLVzLcrQjoiqxU7Xc4x_ehkV4JGi4Bxhcxdb0pbtGBjYbRvvAlSSKD6QmwwQcO8cQpBOTDKDY/s320/11111111111.jpg',
    link: '/course/humors-master',
    description: 'استعد لرحلة تعليمية استثنائية في فقه الطب الشمولي العربي وفق كتاب الشرح الكبير للعلامة ابن النفيس.',
    duration: '3 أشهر',
    syllabus: [
      'دراسة عميقة في فقه الطب الشمولي',
      'تطبيقات عملية وتدريب مكثف',
      'رؤية شاملة للعلاج والمتابعة',
      'رؤية مستقبلية للرعاية الصحية',
      'تقديم نظام الطب العربي للمجتمع'
    ],
    features: ['بطاقة عضوية سنة مجانية', 'دبلوم احترافي', 'متاح 24 ساعة']
  },
  {
    id: 'diag-chemical',
    title: 'التشخيص الكيميائي وتدبيره',
    price: '150 دولار',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5TIkGsLczSVVwQ8iVquVFAcdMUcE6A4AG6nVPAPDmj8ymvL_lIph7DIk6NTB08T-tysv8jiIX-M4RyUT-pp9IHLDZB5Ko2e3G7J1wDTp7VdpdGE_nV7MzRD3jiZoQ5E7l1lYSX-6FoQu5ojFh7PS0-DTjnPY-XHfJOcLt4_EZeCeCuZ_tja5eGw7GKlY/s320/photo_2026-02-18_20-33-21.jpg',
    link: '/course/diag-chemical',
    description: 'اكتشاف العلوم الحديثة للتشخيص الطبي واستخدام الكيمياء في تطوير العلاجات المبتكرة.',
    duration: '6 أشهر',
    syllabus: [
      'مفاهيم التشخيص الطبي والكيمياء',
      'كيمياء الدماغ وآليات عمله',
      'كيمياء الجهاز التنفسي والقلب',
      'تصنيع الدواء وقوانينه',
      'إكسير الشباب ومعجون الفلاسفة'
    ],
    features: ['تدريب تطبيقي مكثف', 'شهادة تخصصية', 'متابعة بالفيديو']
  }
];

export const NAV_STRUCTURE = [
  {
    title: "التدريس الجامعي",
    link: "#",
    sub: [
      { title: "الطب الشمولي", link: "/faculties" },
      { title: "مدرسة الادراك", link: "/faculties" },
      { title: "مدرسة الصحة النفسية", link: "/course/mental-health" }
    ]
  },
  {
    title: "التسجيل",
    link: "#",
    sub: [
      { title: "طلب التسجيل للمتدربين", link: "https://forms.gle/1CL7ohcCWB7g8Kd66" },
      { title: "طلب التسجيل للمدربين", link: "https://forms.gle/9ur8ToHkd7BUfmGk6" },
      { title: "برنامج التسويق بالعمولة", link: "/affiliate" }
    ]
  },
  {
    title: "الدورات",
    link: "/courses",
    isCoursesDropdown: true 
  },
  { title: "الشهادات و الوثائق", link: "/verify" },
  { title: "المكتبة الكونية", link: "https://t.me/+TbhidspQi25mOWM0" }
];

export const FACULTIES: Faculty[] = [
  {
    id: 'holistic',
    name: 'كلية الطب الشمولي',
    description: 'نقدم كورس علم المسارات العصبية المقارن ونظام الأخلاط والطوائع بأسلوب أكاديمي حديث.',
    dean: 'د. إحسان حمدان',
    departments: ['طب الأخلاط والأمزجة', 'فقه التشخيص الطبي', 'العلاج بالمسارات العصبية'],
    icon: '🩺'
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'n1',
    title: 'افتتاح دورة طب الأخلاط والأمزجة',
    excerpt: 'سجل الآن واحصل على بطاقة عضوية مجانية لسنة كاملة.',
    content: 'تعلن الجامعة عن بدء التسجيل في دورة طب الأخلاط والأمزجة، المميزات: عضوية مجانية، متابعة مستمرة، وشهادة دبلوم احترافي معتمد دولياً.',
    date: 'يونيو 2024',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    category: 'دورات'
  }
];
