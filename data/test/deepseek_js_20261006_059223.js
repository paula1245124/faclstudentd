subjects[0] = {
  name: "الرياضيات",
  en:   "Mathematics",
  icon: "📐",

  lectures: [
    {
      id: "lecture-01",                  // ★ معرّف فريد (يُستخدم في URL)
      t: "مقدمة في التفاضل",              // العنوان (إجباري)
      d: "شرح مفاهيم النهايات والاشتقاق",  // وصف مختصر
      pdf:  "https://drive.google.com/file/d/FILE_ID/view",   // ملف المحاضرة
      pdf2: "https://drive.google.com/file/d/FILE2_ID/view",  // ملف أسئلة منفصل (اختياري)
      sectionTitle: "🧩 سكاشن التفاضل",   // ★ عنوان قسم السكشن لهذه المحاضرة

      // روابط مباشرة
      links: [
        { t:"🎥 تسجيل الفيديو", d:"مشاهدة كاملة", url:"https://..." },
        { t:"📑 السلايدات", d:"PDF", url:"https://..." }
      ],

      // روابط متقدمة مع أزرار متعددة (اختياري)
      linkCategories: [
        {
          category:"مصادر خارجية", icon:"🌐",
          links:[
            { t:"شرح إضافي", icon:"🔗", actions:[
              { label:"مشاهدة", url:"https://...", type:"view", color:"blue" },
              { label:"تحميل", url:"https://...", type:"download", color:"green" }
            ]}
          ]
        }
      ],

      questions: [ /* انظر القسم (ج) */ ],

      notes:   "راجع الأمثلة 3 و4 قبل المحاضرة الجاية",
      summary: {
        pdf:  "https://...",   // ملف ملخص PDF
        text: "نص الملخص..."   // ملخص نصي (يمكن استخدام أحدهما أو كلاهما)
      }
    }
  ],

  midtermsCategories: [
    { category:"ميدتيرم 2023", icon:"📝", items:[
      { t:"ميدتيرم الفصل الأول", d:"محاضرات 1-5", pdf:"https://...", lectures:[0,1,2,3,4] }
    ]}
  ],
  finalsCategories: [
    { category:"فاينل سابقة", icon:"🎓", items:[ /* نفس الهيكل */ ] }
  ],
  testBanks: [
    { t:"بنك أسئلة المادة كامل", d:"كل الأسئلة", lectures:[0,1,2,3] }
  ],
  linkCategories: [
    { category:"مراجع الكتب", icon:"📖", description:"...", links:[ /* ... */ ] }
  ]
};