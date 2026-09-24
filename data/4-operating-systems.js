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
            "شروحات باللغة العربية لمفاهيم الصفحات (1 - 23) من الفصل الأول",
          links: [
            {
              t: "د. محمد الدسوقي - مقدمة نظم التشغيل ومعمارية النظام",
              d: "تغطية مفاهيم: What OS Does, Interrupts, Storage Structure, Dual-Mode Operation",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL1DUmTEdeA6IUD9Gt5rZlQfbZyAWXd-oD",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "د. عبد الرحمن الجمل - أساسيات هيكلية الحاسوب ونظام التشغيل",
              d: "شرح مفاهيم Kernel، Bootstrapping، Interrupt-Driven I/O، و Multiprogramming",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLLhe0ZInsJiVdbAaoM2rxW2W1rA3iQPf1",
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
            "شروحات أكاديمية لمفاهيم الصفحات (1 - 23) من كتاب Silberschatz",
          links: [
            {
              t: "Neso Academy - Operating System Basics & System Structure",
              d: "شرح مفاهيم: OS Definition, Computer System Structure, Interrupt Vector, DMA",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgneraVKkEXrwyLVx2vJUvt",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Gate Smashers - Computer System Organization & Operations",
              d: "شرح Dual-Mode Operation (User/Kernel Mode)، Hardware Protection، و Timesharing",
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
          description: "مقالات وتوثيقات تغطي مفاهيم الصفحات من 1 إلى 23 حصراً",
          links: [
            {
              t: "GeeksforGeeks - Operating System Overview & Dual-Mode",
              d: "شرح تفصيلي لوظائف OS، أنواع المعالجات (Single/Multiprocessor)، و Modes of Operation",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/operating-systems/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Silberschatz & Galvin Official Student Resources",
              d: "الموقع الرسمي للطلاب لكتاب Operating System Concepts (Chapter 1 Essentials)",
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
          description: "أدوات تفاعلية لفهم التسلسل الهرمي للذاكرة والمقاطعات",
          links: [
            {
              t: "Visualizing Memory & Storage Hierarchy",
              d: "أداة تفاعلية لفهم الهيكل الهرمي للذاكرة (Registers, Cache, Main Memory, Secondary Storage)",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://oslab.xikai.me/",
                  type: "view",
                  color: "orange",
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
  midterms: [
    {
      t: "ميدتيرم 1 (المحاضرات 1-2)",
      d: "امتحان منتصف الترم الأول",
      pdf: "Operating Systems/exams/Midterm 1.pdf",
      questions: [
        {
          q: "وضع التشغيل الذي يمنح النظام صلاحيات حماية كاملة:",
          options: ["Kernel Mode", "User Mode", "Guest Mode", "Safe Mode"],
          correct: 0,
        },
        {
          q: "النواة Kernel هي:",
          options: [
            "قلب نظام التشغيل الأساسي",
            "واجهة رسومية",
            "برنامج تطبيقي",
            "تعريف طابعة",
          ],
          correct: 0,
        },
        {
          q: "تعني حالة العملية Ready أنها:",
          options: [
            "جاهزة للتنفيذ بانتظار المعالج",
            "قيد التنفيذ الآن",
            "تنتظر إدخالاً/إخراجاً",
            "منتهية",
          ],
          correct: 0,
        },
        {
          q: "قد تعاني جدولة الأولويات الثابتة من:",
          options: [
            "تجويع Starvation لبعض العمليات",
            "زيادة الذاكرة",
            "بطء الطابعة",
            "ضياع الملفات",
          ],
          correct: 0,
        },
        {
          q: "يستهلك تبديل السياق Context Switch:",
          options: [
            "زمناً معالجاً بلا عمل مفيد",
            "طاقة فقط",
            "مساحة قرص",
            "لا يستهلك شيئاً",
          ],
          correct: 0,
        },
      ],
    },
  ],
  finals: [
    {
      t: "الفاينل 1 (شامل)",
      d: "امتحان نهاية الترم — نموذج أول",
      pdf: "Operating Systems/exams/Final 1.pdf",
      questions: [
        {
          q: "يحدث التشتت الخارجي External Fragmentation في:",
          options: [
            "التقسيم المتغير Segmentation",
            "الصفحات ثابتة الحجم",
            "السجلات",
            "الكاش",
          ],
          correct: 0,
        },
        {
          q: "يُستخدم TLB لتسريع:",
          options: [
            "ترجمة العناوين الافتراضية",
            "الطباعة",
            "الاتصال الشبكي",
            "إقلاع الجهاز",
          ],
          correct: 0,
        },
        {
          q: "تختار خوارزمية Best Fit الفجوة:",
          options: [
            "الأصغر المناسبة للحجم المطلوب",
            "الأكبر دائماً",
            "الأولى في الذاكرة",
            "عشوائية",
          ],
          correct: 0,
        },
        {
          q: "تعمل منع الاستعطال Deadlock Prevention على:",
          options: [
            "كسب (إلغاء) أحد الشروط الأربعة",
            "إعادة تشغيل الجهاز",
            "زيادة الرام",
            "حذف البرامج",
          ],
          correct: 0,
        },
        {
          q: "تحدث Race Condition لأن:",
          options: [
            "عمليات تصل للمورد المشترك بترتيب غير محدد",
            "القرص ممتلئ",
            "الشبكة بطيئة",
            "المستخدم أخطأ في الإدخال",
          ],
          correct: 0,
        },
        {
          q: "يستخدم Spooling في:",
          options: [
            "ترتيب مهام الطباعة",
            "جدولة المعالج",
            "إدارة الذاكرة",
            "الشبكات",
          ],
          correct: 0,
        },
      ],
    },
  ],
});
