subjects.push({
  name: "هندسة البرمجيات",
  en: "Software Engineering",
  icon: "🏗️",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في هندسة البرمجيات ونماذج دورة الحياة SDLC.",
      pdf: "Software Engineering/lectures/Lecture 1.pdf",
    // فئات روابط منظمة مخصصة للفصل الأول (Chapter 1: Introduction) من كتاب Software Engineering - Ian Sommerville (10th Edition)
linkCategories: [
  {
    category: "فيديوهات عربية",
    icon: "🇪🇬",
    description: "شروحات باللغة العربية لمفاهيم الفصل الأول (Software Engineering Introduction)",
    links: [
      {
        t: "د. أحمد بهاء - مقدمة هندسة البرمجيات (Software Engineering Intro)",
        d: "شرح مفاهيم: Professional Software Development، الفرق بين CS و SE، وخصائص السوفت وير الجيد",
        icon: "🇪🇬",
        actions: [
          {
            label: "📖 الشرح",
            url: "https://www.youtube.com/playlist?list=PL3X--QEbK05L3f06wR_P2Q1Y81l_5y_5a",
            type: "view",
            color: "red",
          },
        ],
      },
      {
        t: "م. محمد الشريف - تطوير البرمجيات المهني وأخلاقيات المهنة",
        d: "شرح مفاهيم Fundamental SE Activities، وأنواع الأنظمة، وأخلاقيات المهنة (Ethics)",
        icon: "🇪🇬",
        actions: [
          {
            label: "📖 الشرح",
            url: "https://www.youtube.com/playlist?list=PLDoPjvoLj21vL3p_C5x9s6pS-_V-oD",
            type: "view",
            color: "red",
          },
        ],
      },
    ],
  },
  {
    category: "فيديوهات عالمية",
    icon: "🌍",
    description: "شروحات أكاديمية باللغة الإنجليزية متوافقة مع كتاب Ian Sommerville 10th Edition",
    links: [
      {
        t: "Ian Sommerville - Chapter 1: Introduction to Software Engineering",
        d: "شرح تفصيلي للمؤلف نفسه وحلول الفصل: Software Attributes, Fundamental Activities, Case Studies",
        icon: "🌍",
        actions: [
          {
            label: "📖 الشرح",
            url: "https://www.youtube.com/watch?v=GVDsxArvG2A",
            type: "view",
            color: "red",
          },
        ],
      },
      {
        t: "Gate Smashers - Software Engineering Overview & Key Concepts",
        d: "شرح مبسط لأهم أسئلة الفصل الأول: Attributes of Good Software، SE vs CS، و Software Diversity",
        icon: "🌍",
        actions: [
          {
            label: "📖 الشرح",
            url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6Xup8p",
            type: "view",
            color: "red",
          },
        ],
      },
    ],
  },
  {
    category: "مواقع ومراجع",
    icon: "📚",
    description: "المصادر الرسمية والمقالات المساعدة لكتاب Ian Sommerville 10th Edition",
    links: [
      {
        t: "Sommerville Official Web Site - Chapter 1 Resources & Slides",
        d: "الموقع الرسمي للكتاب لشرائح العرض (Slides)، والملاحظات الإضافية الخاصة بالفصل الأول",
        icon: "📚",
        actions: [
          {
            label: "🌐 فتح الموقع",
            url: "https://software-engineering-book.com/",
            type: "view",
            color: "blue",
          },
        ],
      },
      {
        t: "GeeksforGeeks - Software Engineering Fundamentals",
        d: "مقالات تغطي أساسيات SE، الفرق بين System Engineering و CS، وخصائص النظام الجيد",
        icon: "📚",
        actions: [
          {
            label: "🚀 فتح المقال",
            url: "https://www.geeksforgeeks.org/software-engineering/",
            type: "view",
            color: "green",
          },
        ],
      },
    ],
  },
  {
    category: "دراسات الحالة والأخلاقيات",
    icon: "🔧",
    description: "دراسات الحالة (Case Studies) وميثاق أخلاقيات المهنة (ACM/IEEE Code of Ethics)",
    links: [
      {
        t: "ACM/IEEE Software Engineering Code of Ethics",
        d: "المستند الرسمي لمبادئ وأخلاقيات مهنة مهندس البرمجيات المذكور في المنهج (Confidentiality, IP, Competence)",
        icon: "🔧",
        actions: [
          {
            label: "🚀 فتح الميثاق",
            url: "https://www.acm.org/code-of-ethics",
            type: "view",
            color: "orange",
          },
        ],
      },
      {
        t: "Sommerville Case Studies (Insulin Pump, Mentcare, Weather Station)",
        d: "توثيق تفصيلي لدراسات الحالة الأربعة الأساسية المذكورة في نهاية الفصل الأول",
        icon: "🔧",
        actions: [
          {
            label: "🌐 فتح دراسات الحالة",
            url: "https://software-engineering-book.com/case-studies/",
            type: "view",
            color: "blue",
          },
        ],
      },
    ],
  },
],
      questions: [
        {
          q: "اختصار SDLC يعني:",
          options: [
            "دورة حياة تطوير البرمجيات",
            "قاعدة بيانات مرتبطة",
            "لغة نمذجة موحدة",
            "اختبار وحدات",
          ],
          correct: 0,
        },
        {
          q: "نموذج Waterfall يعتمد على:",
          options: [
            "تنفيذ المراحل بشكل متسلسل",
            "تطويراً تدريجياً متكرراً",
            "عدم وجود مراحل",
            "بناء النماذج الأولية فقط",
          ],
          correct: 0,
        },
        {
          q: "من مميزات منهجية Agile:",
          options: [
            "المرونة والتسليم التدريجي",
            "عدم الحاجة للعميل",
            "توثيقاً ضخماً فقط",
            "تجميد المتطلبات نهائياً",
          ],
          correct: 0,
        },
      ],
    },
  ],

  // midterms: [
  //   {
  //     t: "ميدتيرم 1 (المحاضرات 1-2)",
  //     d: "امتحان منتصف الترم الأول",
  //     pdf: "Software Engineering/exams/Midterm 1.pdf",
  //     questions: [
  //       {
  //         q: "أول خطوة عملية في مشاريع البرمجيات:",
  //         options: [
  //           "تحديد وتحليل المتطلبات",
  //           "كتابة الكود",
  //           "الاختبار",
  //           "النشر",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "لا تشمل دراسة الجدوى عادة:",
  //         options: [
  //           "كود المصدر",
  //           "الجانب التقني",
  //           "الجانب الاقتصادي",
  //           "الجانب الزمني",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "يفيد النموذج الأولي Prototype في:",
  //         options: [
  //           "توضيح المتطلبات الغامضة للعميل",
  //           "تسليم المنتج النهائي",
  //           "اختبار الأداء النهائي",
  //           "إدارة الميزانية بعد الإطلاق",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "في نموذج V تقابل مرحلة التصميم مرحلة:",
  //         options: [
  //           "اختبار التكامل Integration",
  //           "اختبار الوحدات",
  //           "اختبار القبول",
  //           "لا يوجد اختبار مقابل",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "الـ Stakeholder هو:",
  //         options: [
  //           "كل طرف له مصلحة في المشروع",
  //           "المبرمج فقط",
  //           "السيرفر",
  //           "العميل النهائي فقط",
  //         ],
  //         correct: 0,
  //       },
  //     ],
  //   }
  // ],
  // finals: [
  //   {
  //     t: "الفاينل 1 (شامل)",
  //     d: "امتحان نهاية الترم — نموذج أول",
  //     pdf: "Software Engineering/exams/Final 1.pdf",
  //     questions: [
  //       {
  //         q: "يوضح مخطط التتابع Sequence Diagram:",
  //         options: [
  //           "ترتيب الرسائل زمنياً بين الكائنات",
  //           "الفئات وعلاقاتها فقط",
  //           "توزيع العتاد",
  //           "قاعدة البيانات",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "يشبه مخطط النشاط Activity Diagram:",
  //         options: [
  //           "مخطط سير العمل Flowchart",
  //           "مخطط الفئات",
  //           "مخطط ERD",
  //           "مخطط جانت",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "التماسك Cohesion العالي داخل الوحدة يعني:",
  //         options: [
  //           "أجزاؤها تعمل لهدف واحد مترابط",
  //           "اعتمادها على الوحدات الأخرى",
  //           "كوداً أطول",
  //           "ملفات أكثر",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "يُجري اختبار Alpha عادة:",
  //         options: [
  //           "فريق التطوير داخلياً",
  //           "المستخدم النهائي",
  //           "الجمهور كاملاً",
  //           "لا أحد",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "يُجري اختبار Beta عبر:",
  //         options: [
  //           "مجموعة من المستخدمين الحقيقيين",
  //           "المطورين فقط",
  //           "أدوات آلية فقط",
  //           "المدير وحده",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "تقيس مستويات CMMI:",
  //         options: [
  //           "نضج العمليات في المنظمة",
  //           "سرعة الشبكة",
  //           "حجم الكود",
  //           "عدد العملاء",
  //         ],
  //         correct: 0,
  //       },
  //     ],
  //   },
  // ],
});
