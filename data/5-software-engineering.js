subjects.push({
  name: "هندسة البرمجيات",
  en: "Software Engineering",
  icon: "🏗️",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في هندسة البرمجيات ونماذج دورة الحياة SDLC.",
      pdf: "Software Engineering/lectures/Software Engineering, 10th GLOBAL Edition Chapter 1.pdf",
      pdf2: "Software Engineering/Questions/New/Questions on each lecture/SE_Chapter1_Section1.1_Questions.pdf",
      // فئات روابط منظمة مخصصة للفصل الأول (Chapter 1: Introduction) من كتاب Software Engineering - Ian Sommerville (10th Edition)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم الفصل الأول (Software Engineering Introduction)",
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
          description:
            "شروحات أكاديمية باللغة الإنجليزية متوافقة مع كتاب Ian Sommerville 10th Edition",
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
          description:
            "المصادر الرسمية والمقالات المساعدة لكتاب Ian Sommerville 10th Edition",
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
          description:
            "دراسات الحالة (Case Studies) وميثاق أخلاقيات المهنة (ACM/IEEE Code of Ethics)",
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
        // ─── MCQ ───
        {
          q: "According to the text, what is the key distinction of professional software compared to software written by hobbyists?",
          options: [
            "It is written faster",
            "It is intended for use by someone apart from its developer, and is usually developed by teams",
            "It never needs documentation",
            "It is always open-source",
          ],
          correct: 1,
        },
        {
          q: "When talking about software engineering, 'software' refers to:",
          options: [
            "Only the compiled executable program",
            "The programs plus associated documentation, libraries, support websites, and configuration data",
            "Only the source code",
            "Only the user interface",
          ],
          correct: 1,
        },
        {
          q: "What is the essential difference between Generic products and Customized (bespoke) software?",
          options: [
            "Generic products are always more expensive",
            "In generic products the developing organization controls the specification; in customized software the buying organization controls the specification",
            "Customized software is sold on the open market",
            "There is no real difference between them",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is given as an example of a Generic software product?",
          options: [
            "An air traffic control system built for a specific customer",
            "A word processor sold on the open market",
            "A control system commissioned for a particular electronic device",
            "A system written to support one company's specific business process",
          ],
          correct: 1,
        },
        {
          q: "Enterprise Resource Planning (ERP) systems such as those from SAP and Oracle are given as an example of:",
          options: [
            "Pure customized software only",
            "Pure generic software only",
            "The blurring line between generic and customized products, where a generic base is adapted for a company",
            "Embedded control systems",
          ],
          correct: 2,
        },
        {
          q: "According to the text, the quality of professional software must take into account:",
          options: [
            "Only what the software does functionally",
            "Only the price paid for the software",
            "The software's behavior while executing, and the structure and organization of the system and its documentation",
            "Only the programming language used",
          ],
          correct: 2,
        },
        {
          q: "How does the book define 'software engineering'?",
          options: [
            "A branch of mathematics concerned with algorithms",
            "An engineering discipline concerned with all aspects of software production from early specification through to maintaining the system after it is in use",
            "The study of computer hardware design",
            "A marketing process for selling software products",
          ],
          correct: 1,
        },
        {
          q: "According to Figure 1.1, what are the four fundamental software engineering activities?",
          options: [
            "Coding, testing, debugging, deployment",
            "Software specification, software development, software validation, software evolution",
            "Planning, designing, marketing, selling",
            "Analysis, synthesis, compilation, execution",
          ],
          correct: 1,
        },
        {
          q: "Per Figure 1.1, roughly what percentage of software costs are development costs versus testing costs?",
          options: [
            "50% development, 50% testing",
            "Roughly 60% development, 40% testing",
            "90% development, 10% testing",
            "20% development, 80% testing",
          ],
          correct: 1,
        },
        {
          q: "According to Figure 1.1, what is the difference between software engineering and computer science?",
          options: [
            "They are exactly the same field",
            "Computer science focuses on theory and fundamentals; software engineering is concerned with the practicalities of developing and delivering useful software",
            "Computer science only studies hardware",
            "Software engineering has no relation to computer science",
          ],
          correct: 1,
        },
        {
          q: "According to Figure 1.1, what key challenges face software engineering?",
          options: [
            "Coping with increasing diversity, demands for reduced delivery times, and developing trustworthy software",
            "Only reducing the cost of hardware",
            "Only writing faster compilers",
            "Only training more programmers",
          ],
          correct: 0,
        },
        {
          q: "Which set of attributes are listed in Figure 1.2 as essential characteristics of a professional software system?",
          options: [
            "Acceptability, Dependability and security, Efficiency, Maintainability",
            "Speed, Color, Size, Popularity",
            "Price, Marketing, Branding, Packaging",
            "Portability, Novelty, Simplicity, Humor",
          ],
          correct: 0,
        },
        {
          q: "According to Figure 1.2, what does 'Maintainability' mean for professional software?",
          options: [
            "The software should never be changed after release",
            "The software should be written so it can evolve to meet the changing needs of customers",
            "The software should only run on one type of machine",
            "The software must be free of charge",
          ],
          correct: 1,
        },
        {
          q: "Section 1.1.1 states that software engineering involves two key phrases in its definition. What is the first?",
          options: [
            "Marketing strategy",
            "Engineering discipline",
            "Programming language",
            "Database design",
          ],
          correct: 1,
        },
        {
          q: "What does the phrase 'Engineering discipline' imply, as explained in section 1.1.1?",
          options: [
            "Engineers must always use the newest tools available",
            "Engineers apply theories, methods, and tools selectively, and work within organizational and financial constraints",
            "Engineers never make compromises",
            "Engineers only follow fixed rules with no creativity",
          ],
          correct: 1,
        },
        {
          q: "What does 'All aspects of software production' mean in the definition of software engineering?",
          options: [
            "Only the coding phase",
            "Only the testing phase",
            "It includes technical development as well as project management, and the development of supporting tools, methods, and theories",
            "Only the marketing phase",
          ],
          correct: 2,
        },
        {
          q: "According to the text, why is software engineering important? (Reason 1)",
          options: [
            "Individuals and society increasingly rely on advanced software systems, so reliable and trustworthy systems must be produced economically and quickly",
            "It makes software more expensive",
            "It is a legal requirement in every country",
            "It eliminates the need for programmers",
          ],
          correct: 0,
        },
        {
          q: "According to the text, why is software engineering important? (Reason 2)",
          options: [
            "It is usually cheaper in the long run than treating software development as a personal programming project",
            "It guarantees zero bugs",
            "It removes the need for documentation",
            "It replaces the need for computer science knowledge",
          ],
          correct: 0,
        },
        {
          q: "What is a 'software process' as defined in the text?",
          options: [
            "A single line of code",
            "A sequence of activities that leads to the production of a software product",
            "A hardware component",
            "A type of programming language",
          ],
          correct: 1,
        },
        {
          q: "How does the text distinguish software engineering from computer science?",
          options: [
            "Computer science theory is often most applicable to relatively small programs, while software engineering deals with practical problems of producing software",
            "Computer science is only about hardware",
            "They are identical disciplines with no differences",
            "Software engineering does not require any computer science knowledge",
          ],
          correct: 0,
        },
        {
          q: "How is software engineering related to system engineering?",
          options: [
            "They are unrelated fields",
            "System engineering covers hardware development, policy and process design, and system deployment, of which software engineering is a part",
            "System engineering is a subset of software engineering",
            "System engineering focuses only on marketing",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is listed as one of the four issues affecting many different types of software (Heterogeneity, Business and social change, Security and trust, Scale)?",
          options: [
            "Heterogeneity — the need to operate across different types of computers, mobile devices, and legacy systems",
            "Font selection",
            "Color theory",
            "Marketing budgets",
          ],
          correct: 0,
        },
        {
          q: "According to section 1.1.2, what determines which software engineering methods and techniques are most important?",
          options: [
            "The programmer's personal preference only",
            "The type of application being developed",
            "The price of the software",
            "The country where the company is based",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is given as an example of a 'Stand-alone application'?",
          options: [
            "An e-commerce web application",
            "Office applications on a PC or CAD programs",
            "A billing system that processes data in batches",
            "A web service accessed by many remote clients",
          ],
          correct: 1,
        },
        {
          q: "Which type of system is described as controlling and managing hardware devices, such as software in a mobile phone or a car's antilock braking system?",
          options: [
            "Batch processing systems",
            "Entertainment systems",
            "Embedded control systems",
            "Systems of systems",
          ],
          correct: 2,
        },
        {
          q: "What is a 'Batch processing system', as described in the text?",
          options: [
            "A system for playing games",
            "A business system designed to process large numbers of individual inputs to create corresponding outputs, such as phone billing",
            "A system that only runs once",
            "A system used exclusively for scientific simulation",
          ],
          correct: 1,
        },
        {
          q: "What are 'Systems of systems', as defined in the text?",
          options: [
            "Simple stand-alone mobile apps",
            "Systems used in enterprises that are composed of a number of other software systems, such as generic products combined with specially written software",
            "A single embedded controller",
            "A batch billing program only",
          ],
          correct: 1,
        },
        {
          q: "Why does an embedded control system in an automobile need extensive verification and validation, according to the text?",
          options: [
            "Because it is cheap and easy to update after installation",
            "Because it is safety-critical and burned into ROM, making it very expensive to change after installation",
            "Because it has no impact on safety",
            "Because users interact with it constantly",
          ],
          correct: 1,
        },
        {
          q: "Which software engineering fundamentals does the text say apply to ALL types of software systems?",
          options: [
            "Only testing and debugging",
            "A managed development process, dependability and performance, managing requirements, and effective reuse of existing resources",
            "Only marketing and sales strategy",
            "Only programming language choice",
          ],
          correct: 1,
        },
        {
          q: "According to section 1.1.3, around what year did the web start evolving so that more functionality was added to browsers, enabling web-based systems?",
          options: ["1990", "Around 2000", "2010", "2020"],
          correct: 1,
        },
        {
          q: "What does 'software as a service' mean, as introduced in section 1.1.3?",
          options: [
            "Software that must be installed on every PC individually",
            "The delivery of web-based system products such as Google Apps and Microsoft Office 365, where software runs on remote clouds instead of local servers",
            "A service that repairs broken software",
            "A subscription only for hardware maintenance",
          ],
          correct: 1,
        },
        {
          q: "Before the emergence of the web, how were most business applications organized, according to the text?",
          options: [
            "Highly distributed across the world",
            "Mostly monolithic, single programs running on single computers or clusters",
            "Entirely cloud-based",
            "Built using service-oriented architecture",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is listed as an effect of the web on software engineering for web-based systems?",
          options: [
            "Software reuse becoming the dominant approach for constructing web-based systems",
            "The complete disappearance of software specifications",
            "The elimination of incremental development",
            "A return to monolithic single-computer applications",
          ],
          correct: 0,
        },
        {
          q: "According to the text, why is it now generally recognized as impractical to specify all requirements for web-based systems in advance?",
          options: [
            "Because such systems are always developed and delivered incrementally",
            "Because web-based systems never change once released",
            "Because users do not have any requirements",
            "Because specifications are illegal for web systems",
          ],
          correct: 0,
        },
        {
          q: "Which interface development technologies are mentioned as supporting rich interfaces within a web browser?",
          options: [
            "COBOL and Fortran",
            "AJAX and HTML5",
            "Assembly and C",
            "SQL and XML only",
          ],
          correct: 1,
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Explain the difference between Generic software products and Customized (bespoke) software, according to Section 1.1 of the textbook.",
          answer:
            "Generic products:\n" +
            "• Stand-alone systems produced by a development organization and sold on the open market to any customer able to buy them.\n" +
            "• Examples: mobile apps, PC software such as databases, word processors, drawing packages, project management tools, and 'vertical' applications like library information systems or accounting systems.\n" +
            "• The developing organization controls the software specification, so it can rethink what is to be developed if problems arise.\n\n" +
            "Customized (bespoke) software:\n" +
            "• Systems commissioned by and developed for a particular customer; a software contractor designs and implements the software especially for that customer.\n" +
            "• Examples: control systems for electronic devices, systems supporting a particular business process, air traffic control systems.\n" +
            "• The specification is developed and controlled by the buying organization, and developers must work to that specification.\n\n" +
            "Note: The distinction is becoming blurred, as many systems (e.g., ERP systems from SAP/Oracle) are now built from a generic base that is then adapted to a specific customer's needs.",
          tags: ["1.1", "Generic products", "Customized software"],
          ref: "Chapter 1 — Section 1.1",
        },
        {
          type: "essay",
          q: "According to Section 1.1.1, what is software engineering, and what are the two key phrases in its definition?",
          answer:
            "Definition:\n" +
            "Software engineering is an engineering discipline that is concerned with all aspects of software production, from the early stages of system specification through to maintaining the system after it has gone into use.\n\n" +
            "1. Engineering discipline:\n" +
            "• Engineers make things work by applying theories, methods, and tools selectively where appropriate.\n" +
            "• They also work within organizational and financial constraints, looking for solutions within these limits, and cannot be perfectionists.\n\n" +
            "2. All aspects of software production:\n" +
            "• Software engineering is not just about the technical process of development.\n" +
            "• It also includes activities such as software project management, and the development of tools, methods, and theories that support software development.",
          tags: ["1.1.1", "Software engineering definition"],
          ref: "Chapter 1 — Section 1.1.1",
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
