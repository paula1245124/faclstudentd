subjects.push({
  name: "التدريب الميداني Python",
  en: "Field Training – Python",
  icon: "🐍",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "أساسيات لغة بايثون والمتغيرات.",
      pdf: "Python/lectures/Lecture 1.pdf",
      questions: [
        {
          q: "الدالة المستخدمة لطباعة النص في بايثون:",
          options: ["print()", "echo", "printf", "cout"],
          correct: 0,
        },
        {
          q: "نوع البيانات النصي في بايثون يسمى:",
          options: ["str", "int", "float", "bool"],
          correct: 0,
        },
        {
          q: "نكتب التعليق في بايثون باستخدام:",
          options: ["#", "//", "--", "<!-- -->"],
          correct: 0,
        },
      ],
    },
  ],
  midterm: [
    {
      t: "ميدتيرم 1 (المحاضرات 1-2)",
      d: "امتحان منتصف الترم الأول",
      pdf: "Python/exams/Midterm 1.pdf",
      questions: [
        {
          q: "ناتج type(5) في بايثون:",
          options: ["int", "str", "float", "list"],
          correct: 0,
        },
        {
          q: "ناتج 2 ** 3 هو:",
          options: ["8", "6", "9", "5"],
          correct: 0,
        },
        {
          q: "ناتج 7 % 3 هو:",
          options: ["1", "2", "3", "0"],
          correct: 0,
        },
        {
          q: "اسم متغير صحيح في بايثون:",
          options: ["my_var", "2var", "my var", "class"],
          correct: 0,
        },
        {
          q: "ناتج المقارنة 3 == 3.0 هو:",
          options: ["True", "False", "خطأ", "3"],
          correct: 0,
        },
      ],
    },
  ],
  finals: [
    {
      t: "الفاينل 1 (شامل)",
      d: "امتحان نهاية الترم — نموذج أول",
      pdf: "Python/exams/Final 1.pdf",
      questions: [
        {
          q: "ناتج len({1, 1, 2, 3}) هو:",
          options: ["3", "4", "2", "خطأ"],
          correct: 0,
        },
        {
          q: "الدالة range ترجع:",
          options: [
            "كائناً قابلاً للتكرار دون تخزين كامل",
            "قائمة فعلية في الذاكرة",
            "قاموساً",
            "نصاً",
          ],
          correct: 0,
        },
        {
          q: "لفتح ملف بغرض القراءة نستخدم الوضع:",
          options: ["r", "w", "a", "x"],
          correct: 0,
        },
        {
          q: "تُستخدم try مع except لـ:",
          options: [
            "معالجة الاستثناءات والأخطاء",
            "تعريف الدوال",
            "استيراد المكتبات",
            "الطباعة",
          ],
          correct: 0,
        },
        {
          q: "الوراثة المتعددة في بايثون:",
          options: [
            "مسموحة (فئة ترث من أكثر من أب)",
            "غير مسموحة",
            "مسموحة في C# فقط",
            "غير موجودة أصلاً",
          ],
          correct: 0,
        },
        {
          q: "ناتج sorted([3, 1, 2]) هو:",
          options: ["[1, 2, 3]", "[3, 2, 1]", "[1, 3, 2]", "خطأ"],
          correct: 0,
        },
      ],
    },
  ],
});
