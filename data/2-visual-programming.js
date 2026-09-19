subjects.push({
  name: "البرمجة المرئية",
  en: "Visual Programming",
  icon: "🧩",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في البرمجة المرئية وواجهات المستخدم الرسومية (GUI).",
      pdf: "Visual Programming/lectures/Lecture 1.pdf",
      pdf2: "Visual Programming/lectures/Lecture 2.pdf",
      links: [
        {
          t: "دليل المحاضرة الوظيفي",
          d: "شرح تفصيلي لمحاور المحاضرة",
          icon: "📘",
          actions: [
            {
              label: "📖 الشرح",
              url: "https://youtube.com/watch?v=XXXX",
              type: "view",
            },
          ],
        },
        {
          t: "الاسلايدات التعليمية (Slides)",
          d: "عرض شرائح المحاضرة",
          icon: "📑",
          actions: [
            {
              label: "PDF ⭳ تحميل",
              url: "Computer Graphics/slides/Slides 1.pdf",
              type: "download",
              color: "green",
            },
            {
              label: "PowerPoint ⭳ تحميل",
              url: "Computer Graphics/slides/Slides 1.pptx",
              type: "download",
              color: "orange",
            },
          ],
        },
        {
          t: "موقع الإنترنت التفاعلي",
          d: "محاكاة تجريبية للمحاضرة",
          icon: "🌐",
          actions: [
            {
              label: "🚀 فتح الموقع",
              url: "https://example.com",
              type: "view",
            },
          ],
        },
      ],
      questions: [
        {
          q: "المقصود بالبرمجة المرئية هو:",
          options: [
            "كتابة الأكواد النصية فقط",
            "بناء البرامج بسحب وإفلات مكونات جاهزة",
            "برمجة قواعد البيانات",
            "تصميم صور الحاسب",
          ],
          correct: 1,
        },
        {
          q: "اختصار RAD يعني:",
          options: [
            "Rapid Application Development",
            "Random Access Data",
            "Runtime Application Design",
            "Recursive Algorithm Definition",
          ],
          correct: 0,
        },
        {
          q: "من أشهر بيئات التطوير المرئي:",
          options: ["Visual Studio", "Notepad", "Paint", "Excel"],
          correct: 0,
        },
      ],
    },
  ],
  midterms: [
    {
      t: "ميدتيرم 1 (المحاضرات 1-2)",
      d: "امتحان منتصف الترم الأول",
      pdf: "Visual Programming/exams/Midterm 1.pdf",
      questions: [
        {
          q: "النموذج Form يمثل:",
          options: [
            "نافذة التطبيق",
            "زر أوامر",
            "مربع إدخال نص",
            "مؤقتاً زمنياً",
          ],
          correct: 0,
        },
        {
          q: "ينطلق الحدث Load عند:",
          options: [
            "تحميل النافذة لأول مرة",
            "الضغط على زر",
            "إغلاق النافذة",
            "تحريك الماوس",
          ],
          correct: 0,
        },
        {
          q: "خاصية BackColor تحدد:",
          options: [
            "لون خلفية الأداة",
            "النص الظاهر",
            "حجم الأداة",
            "اسم الأداة",
          ],
          correct: 0,
        },
        {
          q: "الخاصية التي تجعل الأداة غير مرئية للمستخدم:",
          options: ["Visible = False", "Text فارغ", "Name فارغ", "Tab = False"],
          correct: 0,
        },
        {
          q: "الأداة المناسبة لعرض صورة:",
          options: ["PictureBox", "TextBox", "Label", "Timer"],
          correct: 0,
        },
      ],
    },
    {
      t: "ميدتيرم 2 (المحاضرات 2-3)",
      d: "امتحان منتصف الترم الثاني",
      pdf: "Visual Programming/exams/Midterm 2.pdf",
      questions: [
        {
          q: "الخاصية التي تحمل النص المكتوب داخل TextBox:",
          options: ["Text", "Name", "BackColor", "Font"],
          correct: 0,
        },
        {
          q: "ينطلق الحدث TextChanged عند:",
          options: [
            "تغيير محتوى مربع النص",
            "الضغط عليه",
            "الخروج من البرنامج",
            "تحميل صورة",
          ],
          correct: 0,
        },
        {
          q: "الأداة التي تنفذ كوداً على فترات زمنية منتظمة:",
          options: ["Timer", "Button", "Label", "ComboBox"],
          correct: 0,
        },
        {
          q: "لعرض قائمة منسدلة يختار المستخدم منها:",
          options: ["ComboBox", "PictureBox", "Timer", "Panel"],
          correct: 0,
        },
        {
          q: "الواجهة التي توحّد أساليب الوصول للبيانات في .NET:",
          options: ["ADO.NET", "GDI+", "DirectX", "OpenGL"],
          correct: 0,
        },
      ],
    },
  ],
  finals: [
    {
      t: "الفاينل 1 (شامل)",
      d: "امتحان نهاية الترم — نموذج أول",
      pdf: "Visual Programming/exams/Final 1.pdf",
      questions: [
        {
          q: "الاتصال بقاعدة البيانات في ADO.NET يتم عبر كائن:",
          options: ["Connection", "Button", "Timer", "Form"],
          correct: 0,
        },
        {
          q: "تنفيذ أوامر SQL يتم عبر كائن:",
          options: ["Command", "DataSet", "Form", "Timer"],
          correct: 0,
        },
        {
          q: "يعرض DataTable البيانات في شكل:",
          options: ["صفوف وأعمدة", "أزرار متتابعة", "شجرة ملفات", "مخطط دائري"],
          correct: 0,
        },
        {
          q: "النافذة الأم التي تحتوي نوافذ أبناء بداخلها تسمى:",
          options: ["MDI Parent", "Dialog", "Splash Screen", "Toolbox"],
          correct: 0,
        },
        {
          q: "لفتح حوار اختيار ملف من الجهاز نستخدم:",
          options: ["OpenFileDialog", "Timer", "Label", "Menu"],
          correct: 0,
        },
        {
          q: "التعامل مع الرسم والجرافيكس في .NET يتم عبر:",
          options: ["GDI+", "SQL", "XML", "HTTP"],
          correct: 0,
        },
      ],
    },
    {
      t: "الفاينل 2 (شامل)",
      d: "امتحان نهاية الترم — نموذج ثاني",
      pdf: "Visual Programming/exams/Final 2.pdf",
      questions: [
        {
          q: "الخاصية Items في ListBox تحتوي على:",
          options: ["عناصر القائمة", "الألوان", "الخطوط", "الأحداث"],
          correct: 0,
        },
        {
          q: "لمنع المستخدم من الكتابة داخل مربع نص نضبط:",
          options: [
            "ReadOnly = True",
            "Visible = False",
            "Enabled = False",
            "MultiLine = True",
          ],
          correct: 0,
        },
        {
          q: "خطأ Syntax Error يعني خطأ في:",
          options: ["قواعد كتابة الكود", "منطق الحل", "الذاكرة", "الشبكة"],
          correct: 0,
        },
        {
          q: "يحدث Logical Error عندما:",
          options: [
            "يعمل البرنامج بنتيجة خاطئة دون انهيار",
            "يُترجم البرنامج بنجاح",
            "لا توجد أخطاء كتابة",
            "يتوقف النظام كاملاً",
          ],
          correct: 0,
        },
        {
          q: "عملية Publish تجعل التطبيق:",
          options: [
            "قابلاً للتثبيت على أجهزة المستخدمين",
            "أسرع في التنفيذ",
            "أصغر حجماً",
            "مشفراً بالكامل",
          ],
          correct: 0,
        },
      ],
    },
  ],
});
