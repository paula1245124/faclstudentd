subjects.push({
  name: "نظم التشغيل",
  en: "Operating Systems",
  icon: "⚙️",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في نظم التشغيل والعمليات Processes.",
      pdf: "Operating Systems/lectures/chapter 1 - OS.pdf",

      // فئات روابط منظمة مخصصة للجزء الأول فقط (من صفحة 1 إلى صفحة 23) من الفصل الأول
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم نظم التشغيل، بنية الحاسوب، المقاطعات، وهرمية التخزين (صفحة 1 - 23)",
          links: [
            {
              t: "شرح نظم التشغيل - د. أحمد حجاج (Ch1 - Part 1 & 2)",
              d: "تغطية: تعريف الـ OS وأهدافه، المكونات الأربعة للنظام، الـ OS كموزع موارد وبرنامج تحكم، النواة (Kernel)، الإقلاع (Bootstrap) والـ Firmware، وبنية المقاطعات (Interrupt Vector) والـ Traps",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLxIvc-MGOs6ib0oK1z9C46DeKd9rRcSMY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "SoftwareTube - كورس نظم التشغيل بالعربي (Chapter 1 Part 1 & 2)",
              d: "شرح مفصل لـ: Computer-System Operation، الـ Local Buffers، الـ Interrupt Handling، الفرق بين Spooling و Pooling، الـ Device Drivers، بنية I/O والـ Device-Status Table، الـ DMA، هرمية التخزين، والـ Caching",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=BW90V5-J4a0",
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
            "محاضرات أكاديمية عالمية تغطي القسم الأول من Chapter 1 في كتاب Silberschatz (صفحة 1 - 23)",
          links: [
            {
              t: "Last Minute Lecture - Operating System Concepts (Ch1: Hardware & Storage)",
              d: "مراجعة مركزة: الـ Interrupt-driven architecture، الـ Traps، هيكلية الـ DMA، بنية التخزين الثانوي (Tracks & Sectors)، هرمية التخزين وأداء مستوياتها، والـ Caching",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLI3TocC2xS26LoF6tSsgTLv44HTr2l2Ol",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Ghassan Shobaki - OS Introduction & Computer System Organization",
              d: "شرح بنيوي مفصل: الـ Bus والذاكرة المشتركة، التفاعل بين العتاد الصلب والنواة والمتحكمات (Device Controllers)، وتدفق المقاطعات في الذاكرة",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=3Qfx4geYN9I",
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
            "مقالات وتوثيقات مرجعية لمفاهيم صفحات (1 - 23) من كتاب Silberschatz",
          links: [
            {
              t: "GeeksforGeeks - Operating System Fundamentals",
              d: "توثيق شامل: تعريف الـ OS ومكونات النظام، أنواع المقاطعات (Hardware & Traps)، هيكلية الـ DMA، والتدرج التخزيني",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Silberschatz & Galvin Official Student Resources",
              d: "الموقع الرسمي للطلاب لكتاب Operating System Concepts (Chapter 1 Essentials) - مرجع المؤلفين نفسه",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://bcs.wiley.com/college/bcs/redesign/student/0,,_0471694665_BKS_2217____,00.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "برامج تفاعلية ومحاكاة لتجسيد تنفيذ التعليمات، معالجة المقاطعات، ونقل البيانات عبر DMA والذاكرة",
          links: [
            {
              t: "CPU-OS Simulator - Teach-Sim Interactive Tool",
              d: "محاكي تفاعلي متقدم لتتبع تنفيذ التعليمات داخل المسجلات، معالجة المقاطعات، وحركة البيانات في الـ Cache والذاكرة الرئيسية",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح المحاكي",
                  url: "https://teach-sim.com/os/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Virtual Operating System Simulator - Hardware & Memory Architecture",
              d: "أداة تفاعلية لتصور التفاعل بين مكونات العتاد الصلب ونواة نظام التشغيل وإدارة الطبقات التخزينية",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المشروع",
                  url: "https://github.com/ovuiproduction/Virtual-Operating-System-Simulator",
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
          q: "What is the primary role of an operating system from a system point of view?",
          options: [
            "Resource allocator and control program",
            "Web browser and graphics editor",
            "Compiler and text editor",
            "Database management system",
          ],
          correct: 0,
        },
        {
          q: "Where is the bootstrap program usually stored when the computer powers on?",
          options: [
            "Main Memory (RAM)",
            "ROM or EEPROM (Firmware)",
            "Hard Disk Drive (HDD)",
            "CPU Registers",
          ],
          correct: 1,
        },
        {
          q: "How does a hardware device signal the CPU that it requires attention?",
          options: [
            "By executing a system call",
            "By raising an interrupt signal",
            "By creating a new thread",
            "By changing CPU mode to User Mode",
          ],
          correct: 1,
        },
        {
          q: "Which mode allows the execution of privileged instructions in an OS?",
          options: [
            "User Mode",
            "Kernel Mode (Supervisor Mode)",
            "Application Mode",
            "Virtual Mode",
          ],
          correct: 1,
        },
        {
          q: "What is the main purpose of Direct Memory Access (DMA)?",
          options: [
            "To allow high-speed I/O devices to transfer data directly to memory without CPU intervention",
            "To increase the execution speed of user applications",
            "To protect memory from unauthorized user access",
            "To replace RAM with solid-state storage",
          ],
          correct: 0,
        },
        {
          q: "Which of the following storage types is the fastest and has the smallest capacity?",
          options: [
            "Main Memory (RAM)",
            "Solid-State Disk (SSD)",
            "CPU Registers",
            "Cache Memory",
          ],
          correct: 2,
        },
        {
          q: "Multiprogramming increases CPU utilization by:",
          options: [
            "Executing instructions faster using higher clock speeds",
            "Keeping multiple jobs in memory so the CPU always has one to execute",
            "Allowing multiple users to share time interactively",
            "Running multiple CPUs on a single motherboard",
          ],
          correct: 1,
        },
        {
          q: "Why does the operating system use a hardware timer?",
          options: [
            "To display the current system clock to the user",
            "To prevent a user program from running indefinitely or locking the system",
            "To measure the speed of external storage devices",
            "To synchronize network data transfers",
          ],
          correct: 1,
        },
        {
          q: "What is another term used for Multiprocessor Systems?",
          options: [
            "Parallel systems or tightly coupled systems",
            "Distributed systems",
            "Clustered systems",
            "Loosely coupled systems",
          ],
          correct: 0,
        },
        {
          q: "According to OS fundamentals, what is 'The Kernel'?",
          options: [
            "The user interface software (GUI/CLI)",
            "The one program running at all times on the computer",
            "A set of application software installed on the disk",
            "The file management tool",
          ],
          correct: 1,
        },
      ],
    },
  ],
  // midterms: [
  //   {
  //     t: "ميدتيرم 1 (المحاضرات 1-2)",
  //     d: "امتحان منتصف الترم الأول",
  //     pdf: "Operating Systems/exams/Midterm 1.pdf",
  //     questions: [
  //       {
  //         q: "وضع التشغيل الذي يمنح النظام صلاحيات حماية كاملة:",
  //         options: ["Kernel Mode", "User Mode", "Guest Mode", "Safe Mode"],
  //         correct: 0,
  //       },
  //       {
  //         q: "النواة Kernel هي:",
  //         options: [
  //           "قلب نظام التشغيل الأساسي",
  //           "واجهة رسومية",
  //           "برنامج تطبيقي",
  //           "تعريف طابعة",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "تعني حالة العملية Ready أنها:",
  //         options: [
  //           "جاهزة للتنفيذ بانتظار المعالج",
  //           "قيد التنفيذ الآن",
  //           "تنتظر إدخالاً/إخراجاً",
  //           "منتهية",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "قد تعاني جدولة الأولويات الثابتة من:",
  //         options: [
  //           "تجويع Starvation لبعض العمليات",
  //           "زيادة الذاكرة",
  //           "بطء الطابعة",
  //           "ضياع الملفات",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "يستهلك تبديل السياق Context Switch:",
  //         options: [
  //           "زمناً معالجاً بلا عمل مفيد",
  //           "طاقة فقط",
  //           "مساحة قرص",
  //           "لا يستهلك شيئاً",
  //         ],
  //         correct: 0,
  //       },
  //     ],
  //   },
  // ],
  // finals: [
  //   {
  //     t: "الفاينل 1 (شامل)",
  //     d: "امتحان نهاية الترم — نموذج أول",
  //     pdf: "Operating Systems/exams/Final 1.pdf",
  //     questions: [
  //       {
  //         q: "يحدث التشتت الخارجي External Fragmentation في:",
  //         options: [
  //           "التقسيم المتغير Segmentation",
  //           "الصفحات ثابتة الحجم",
  //           "السجلات",
  //           "الكاش",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "يُستخدم TLB لتسريع:",
  //         options: [
  //           "ترجمة العناوين الافتراضية",
  //           "الطباعة",
  //           "الاتصال الشبكي",
  //           "إقلاع الجهاز",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "تختار خوارزمية Best Fit الفجوة:",
  //         options: [
  //           "الأصغر المناسبة للحجم المطلوب",
  //           "الأكبر دائماً",
  //           "الأولى في الذاكرة",
  //           "عشوائية",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "تعمل منع الاستعطال Deadlock Prevention على:",
  //         options: [
  //           "كسب (إلغاء) أحد الشروط الأربعة",
  //           "إعادة تشغيل الجهاز",
  //           "زيادة الرام",
  //           "حذف البرامج",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "تحدث Race Condition لأن:",
  //         options: [
  //           "عمليات تصل للمورد المشترك بترتيب غير محدد",
  //           "القرص ممتلئ",
  //           "الشبكة بطيئة",
  //           "المستخدم أخطأ في الإدخال",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "يستخدم Spooling في:",
  //         options: [
  //           "ترتيب مهام الطباعة",
  //           "جدولة المعالج",
  //           "إدارة الذاكرة",
  //           "الشبكات",
  //         ],
  //         correct: 0,
  //       },
  //     ],
  //   },
  // ],
});
