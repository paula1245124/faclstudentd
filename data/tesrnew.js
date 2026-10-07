// ═══════════════════════════════════════════════════════════════════
//  ملف داتا مادة: Computer Networks
//  المرجع: Kurose & Ross — Computer Networking: A Top-Down Approach
//  النوع: JavaScript (مش JSON) — بيسمح بالتعليقات
// ═══════════════════════════════════════════════════════════════════

subjects.push({
  // ═══════════════════════════════════════════════════════════════════
  // 1) بيانات المادة
  // ═══════════════════════════════════════════════════════════════════
  name: "Computer Networks",
  en: "Computer Networks",
  icon: "🌐",

  // ═══════════════════════════════════════════════════════════════════
  // 2) المحاضرات
  // ═══════════════════════════════════════════════════════════════════
  lectures: [
    // ───────────────────────────── المحاضرة 1 ─────────────────────────────
    {
      t: "المحاضرة الأولى — مقدمة في شبكات الحاسوب",
      d: "What is the Internet, Nuts-and-Bolts, Services, Protocols, Access Networks",
      pdf: "files/net-1.pdf",
      pdf2: "files/net-1-questions.pdf",

      // روابط مباشرة للمحاضرة
      links: [
        {
          t: "🎥 تسجيل فيديو المحاضرة",
          d: "المحاضرة كاملة — 45 دقيقة",
          url: "https://example.com/net-1-video",
        },
        {
          t: "📑 سلايدات المحاضرة",
          d: "PDF الشرائح الرسمية",
          url: "https://example.com/net-1-slides",
        },
      ],

      // فئات روابط منظمة
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description: "شروحات باللغة العربية لمفاهيم الشبكات",
          links: [
            {
              t: "د. خولة الهراشحة - شبكات الحاسوب (Ch1: 1.1 - 1.3.1)",
              d: "تغطية شاملة بالعربي: Nuts-and-Bolts, Services, Protocols, DSL/Cable/FTTH, Packet Switching",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL8v_bZALWLKE9Lo2BIy8nsdsakbSvQlEo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أب ديت (Update) - أساسيات اتصال الإنترنت",
              d: "شرح Twisted-Pair والألياف الضوئية والشبكات اللاسلكية",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLkpG3YKjv6p5XwncCUIlPFSBNnN4mnhGA",
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
          description: "شروحات أكاديمية من مؤلف الكتاب وقنوات عالمية",
          links: [
            {
              t: "Jim Kurose - Chapter 1 (Official Lectures)",
              d: "الشرح المباشر لمؤلف الكتاب",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL1ya5dD_M8uX-BLUF1FEvUNsYWQL5_l0O",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Neso Academy - Introduction to Computer Networks",
              d: "مفاهيم Protocols، Transmission Media، Store-and-Forward Delay",
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
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description: "مقالات وتوثيقات إضافية",
          links: [
            {
              t: "GeeksforGeeks - Access Networks & Internet Connection",
              d: "شرح DSL, Cable, FTTH, Ethernet, Wi-Fi",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-networks/how-to-connect-to-the-internet/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Kurose & Ross Official Student Resources",
              d: "الموقع الرسمي للكتاب",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://gaia.cs.umass.edu/kurose_ross/",
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
          description: "برامج محاكاة وأدوات تفاعلية",
          links: [
            {
              t: "Kurose & Ross Interactive Animations",
              d: "محاكاة تفاعلية رسمية للـ Packets والـ Queue Buffers",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://gaia.cs.umass.edu/kurose_ross/interactive/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Wireshark - Packet Analyzer",
              d: "أداة تتبع الـ Packets وقراءة الـ Headers",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],

      // الأسئلة
      questions: [
        // ─── MCQ ───
        {
          q: "ما هو المقصود بالـ Protocol في شبكات الحاسوب؟",
          options: [
            "جهاز يربط الشبكات",
            "مجموعة قواعد تحكم عملية الاتصال بين الأجهزة",
            "برنامج لتصفح الإنترنت",
            "نوع من الكابلات",
          ],
          correct: 1,
        },
        {
          q: "أي من التالي يُعتبر من الـ End Systems؟",
          options: ["Router", "Switch", "Laptop", "Modem"],
          correct: 2,
        },
        {
          q: "أي وسيط نقل يُعتبر Guided Media؟",
          options: [
            "Radio Waves",
            "Infrared",
            "Twisted-Pair Cable",
            "Satellite",
          ],
          correct: 2,
        },
        {
          q: "الـ DSL و Cable و FTTH كلها أمثلة على...",
          options: [
            "Access Networks",
            "Core Networks",
            "Data Centers",
            "Protocols",
          ],
          correct: 0,
        },
        {
          q: "ما الفرق الأساسي بين Circuit Switching و Packet Switching؟",
          options: [
            "Circuit يحجز مسار مخصص، Packet يقسم البيانات لوحدات",
            "Circuit أسرع دايماً",
            "Packet لازم حجز مسبق",
            "مفيش فرق بينهم",
          ],
          correct: 0,
        },
        {
          q: "What does ISP stand for?",
          options: [
            "Internet Service Provider",
            "Internal System Protocol",
            "Integrated Switching Port",
            "International Standard Package",
          ],
          correct: 0,
        },

        // ─── مقالي ───
        {
          type: "essay",
          q: "اشرح الفرق بين Nuts-and-Bolts Description و Services Description لفهم الإنترنت.",
          answer:
            "Nuts-and-Bolts Description:\n" +
            "• وصف مادي للإنترنت كشبكة من مليارات أجهزة الحوسبة المتصلة.\n" +
            "• يركز على الأجهزة (End Systems, Routers, Switches) ووسائط النقل.\n" +
            "• يشرح كيفية ربط هذه المكونات معاً.\n\n" +
            "Services Description:\n" +
            "• وصف وظيفي للإنترنت كبنية تحتية تقدم خدمات للتطبيقات الموزعة.\n" +
            "• يركز على الخدمات زي Web, Email, Streaming, VoIP.\n" +
            "• يشرح إيه اللي بتقدمه الشبكة للمستخدم النهائي.",
          tags: ["Introduction", "Nuts-and-Bolts", "Services"],
          ref: "المحاضرة 1 — Section 1.1",
        },
      ],
    },

    // ───────────────────────────── المحاضرة 2 ─────────────────────────────
    {
      t: "المحاضرة الثانية — Network Edge & Core",
      d: "Hosts, Access Networks, Physical Media, Packet Switching, Circuit Switching",
      pdf: "files/net-2.pdf",

      links: [
        { t: "🎥 تسجيل الفيديو", url: "https://example.com/net-2-video" },
        { t: "📑 السلايدات", url: "https://example.com/net-2-slides" },
      ],

      questions: [
        {
          q: "الـ Queue Delay بيحدث فين؟",
          options: [
            "في الكابل نفسه",
            "في طوابير الانتظار جوه الراوتر",
            "في المعالج",
            "في الـ End System فقط",
          ],
          correct: 1,
        },
        {
          q: "الـ Packet Loss يحدث لما...",
          options: [
            "الـ Buffer يمتلئ بالكامل",
            "الكابل يتقطع",
            "المعالج يبطئ",
            "مفيش سبب محدد",
          ],
          correct: 0,
        },
        {
          q: "الـ Twisted-Pair Cable بيتكون من...",
          options: [
            "شعاع ضوئي",
            "زوجين ملتفين من الأسلاك النحاسية",
            "ألياف زجاجية",
            "موجات راديو",
          ],
          correct: 1,
        },
        {
          type: "essay",
          q: "اشرح مكونات الـ Packet Delay الأربعة بالتفصيل.",
          answer:
            "1) Processing Delay:\n" +
            "   الوقت اللي يستغرقه الراوتر لفحص الـ Header وتحديد المسار.\n\n" +
            "2) Queuing Delay:\n" +
            "   الوقت اللي تستناه الـ Packet في طابور الانتظار جوه الراوتر.\n\n" +
            "3) Transmission Delay:\n" +
            "   الوقت اللازم لدفع كل بتات الـ Packet للكابل = L / R.\n\n" +
            "4) Propagation Delay:\n" +
            "   الوقت اللازم لانتشار الإشارة عبر الوسيط = d / s.",
          tags: ["Delay", "Packet Switching", "Performance"],
          ref: "المحاضرة 2 — Section 1.4",
        },
      ],
    },

    // ───────────────────────────── المحاضرة 3 ─────────────────────────────
    {
      t: "المحاضرة الثالثة — Application Layer",
      d: "HTTP, FTP, SMTP, DNS, P2P Applications",
      pdf: "files/net-3.pdf",

      links: [
        { t: "🎥 تسجيل الفيديو", url: "https://example.com/net-3-video" },
        { t: "📑 السلايدات", url: "https://example.com/net-3-slides" },
      ],

      questions: [
        {
          q: "بروتوكول HTTP يعمل على أي طبقة؟",
          options: ["Application", "Transport", "Network", "Data Link"],
          correct: 0,
        },
        {
          q: "الـ DNS بيستخدم أي Port؟",
          options: ["80", "443", "53", "25"],
          correct: 2,
        },
        {
          q: "ما الفرق بين HTTP و HTTPS؟",
          options: [
            "HTTPS بيستخدم تشفير SSL/TLS",
            "HTTP أسرع",
            "مفيش فرق",
            "HTTPS للفيديو فقط",
          ],
          correct: 0,
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // 3) الميدتيرمات
  // ═══════════════════════════════════════════════════════════════════
  midterms: [
    {
      t: "ميدتيرم 1 (المحاضرات 1-2)",
      d: "امتحان منتصف الترم الأول",
      pdf: "files/net-midterm-1.pdf",
      questions: [
        {
          q: "ما هو الـ Protocol؟",
          options: ["قواعد تحكم الاتصال", "جهاز شبكة", "برنامج", "كابل"],
          correct: 0,
        },
        {
          q: "أي من التالي Access Network؟",
          options: ["DSL", "Router", "Switch", "Firewall"],
          correct: 0,
        },
        {
          q: "الـ Packet Delay بيتكون من كم مكون؟",
          options: ["2", "3", "4", "5"],
          correct: 2,
        },
      ],
    },
    {
      t: "ميدتيرم 2 (المحاضرات 3)",
      d: "امتحان منتصف الترم الثاني",
      pdf: "files/net-midterm-2.pdf",
      lectures: [2],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // 4) الفاينلات
  // ═══════════════════════════════════════════════════════════════════
  finals: [
    {
      t: "الفاينل الشامل - النموذج الأول",
      d: "امتحان نهاية الترم — يشمل كل المحاضرات",
      pdf: "files/net-final-1.pdf",
      lectures: [0, 1, 2],
    },
    {
      t: "الفاينل الشامل - النموذج الثاني",
      d: "نموذج إضافي للتدريب",
      pdf: "files/net-final-2.pdf",
      questions: [
        {
          q: "أي طبقة مسؤولة عن Routing؟",
          options: ["Application", "Transport", "Network", "Physical"],
          correct: 2,
        },
        {
          q: "TCP يضمن...",
          options: ["تسليم موثوق ومنظم", "سرعة عالية", "تشفير", "ضغط"],
          correct: 0,
        },
        {
          q: "UDP يُستخدم في...",
          options: [
            "Streaming والألعاب",
            "البريد الإلكتروني",
            "تحميل الملفات",
            "تصفح الويب",
          ],
          correct: 0,
        },
        {
          type: "essay",
          q: "اشرح الفرق بين TCP و UDP مع ذكر استخدامات كل منهما.",
          answer:
            "TCP (Transmission Control Protocol):\n" +
            "• موثوق — يضمن التسليم بدون فقدان.\n" +
            "• منظم — البيانات توصل بنفس الترتيب.\n" +
            "• أبطأ نسبياً — بسبب الـ Handshake والتحقق.\n" +
            "• الاستخدامات: تصفح الويب، البريد، نقل الملفات.\n\n" +
            "UDP (User Datagram Protocol):\n" +
            "• غير موثوق — ممكن يحصل فقدان.\n" +
            "• غير منظم — مش بيضمن الترتيب.\n" +
            "• أسرع — بدون Handshake.\n" +
            "• الاستخدامات: Streaming، الألعاب، DNS، VoIP.",
          tags: ["TCP", "UDP", "Transport Layer"],
          ref: "المحاضرة 3 — Section 3.5",
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // 5) بنوك الأسئلة
  // ═══════════════════════════════════════════════════════════════════
  testBanks: [
    {
      t: "Test Bank - Computer Networks - Final",
      d: "Final Question Bank - Computer Networks",
      pdf: "files/test-bank-final.pdf",
      questions: [
        {
          q: "كم عدد طبقات OSI Model؟",
          options: ["5", "6", "7", "8"],
          correct: 2,
        },
        {
          q: "كم عدد طبقات TCP/IP Model؟",
          options: ["3", "4", "5", "7"],
          correct: 1,
        },
        {
          q: "أي طبقة في OSI مسؤولة عن التشفير؟",
          options: ["Application", "Presentation", "Session", "Transport"],
          correct: 1,
        },
        {
          q: "الـ MAC Address بيتكون من كام بت؟",
          options: ["32", "48", "64", "128"],
          correct: 1,
        },
        {
          q: "IPv4 Address بيتكون من كام بت؟",
          options: ["32", "48", "64", "128"],
          correct: 0,
        },
        {
          q: "IPv6 Address بيتكون من كام بت؟",
          options: ["32", "48", "64", "128"],
          correct: 3,
        },
        {
          q: "بروتوكول ARP بيستخدم للربط بين...",
          options: ["IP و MAC", "Domain و IP", "Port و IP", "Data و Signal"],
          correct: 0,
        },
        {
          q: "بروتوكول DHCP بيستخدم لـ...",
          options: ["توزيع IP تلقائياً", "ترجمة الأسماء", "التشفير", "التوجيه"],
          correct: 0,
        },
      ],
    },
    {
      t: "بنك أسئلة Chapter 1",
      d: "كل أسئلة الفصل الأول في اختبار واحد",
      lectures: [0, 1],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // 5.1) الميدتيرمز — مقسّمة (بنفس فكرة linkCategories) بدل ما تكون كلها مع بعض
  //      كل "category" هنا ممكن تبقى اسم دكتور أو سنة أو أي تقسيم تحبيها،
  //      و"items" هي مصفوفة الامتحانات العادية (نفس شكل عنصر midterms العادي)
  // ═══════════════════════════════════════════════════════════════════
  midtermsCategories: [
    {
      category: "د. أحمد سمير",
      icon: "👨‍🏫",
      description: "امتحانات الميدتيرم بتاعة دكتور أحمد سمير",
      items: [
        {
          t: "ميدتيرم 2023 — د. أحمد سمير",
          d: "أسئلة من المحاضرتين الأولى والثانية",
          pdf: "files/mid-ahmed-2023.pdf",
          lectures: [0, 1],
        },
        {
          t: "ميدتيرم 1 (المحاضرات 1-2)",
          d: "امتحان منتصف الترم الأول",
          pdf: "files/net-midterm-1.pdf",
          questions: [
            {
              q: "ما هو الـ Protocol؟",
              options: ["قواعد تحكم الاتصال", "جهاز شبكة", "برنامج", "كابل"],
              correct: 0,
            },
            {
              q: "أي من التالي Access Network؟",
              options: ["DSL", "Router", "Switch", "Firewall"],
              correct: 0,
            },
            {
              q: "الـ Packet Delay بيتكون من كم مكون؟",
              options: ["2", "3", "4", "5"],
              correct: 2,
            },
          ],
        },
        {
          t: "ميدتيرم 2022 — د. أحمد سمير",
          d: "أسئلة من المحاضرتين الأولى والثانية",
          lectures: [0, 1],
        },
        {},
      ],
    },
    {
      category: "د. سارة محمد",
      icon: "👩‍🏫",
      description: "امتحانات الميدتيرم بتاعة دكتورة سارة محمد",
      items: [
        {
          t: "ميدتيرم 2023 — د. سارة محمد",
          d: "أسئلة من المحاضرتين الأولى والثانية",
          lectures: [0, 1],
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // 5.2) الفاينلز — مقسّمة بنفس الطريقة بالظبط
  // ═══════════════════════════════════════════════════════════════════
  finalsCategories: [
    {
      category: "سنة 2023",
      icon: "📅",
      items: [
        {
          t: "فاينل 2023 — الترم الأول",
          d: "أسئلة شاملة على كل المحاضرات",
          lectures: [0, 1, 2, 3],
        },
      ],
    },
    {
      category: "سنة 2022",
      icon: "📅",
      items: [
        {
          t: "فاينل 2022 — الترم الأول",
          d: "أسئلة شاملة على كل المحاضرات",
          lectures: [0, 1, 2, 3],
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // 6) روابط ومصادر عامة للمادة
  // ═══════════════════════════════════════════════════════════════════
  linkCategories: [
    {
      category: "قنوات يوتيوب موصى بها",
      description: "قنوات عربية وعالمية لشرح الشبكات",
      icon: "🎬",
      links: [
        {
          t: "Jim Kurose Official Channel",
          d: "شرح مؤلف الكتاب بنفسه",
          url: "https://www.youtube.com/@JimKurose",
        },
        {
          t: "Neso Academy",
          d: "شروحات أكاديمية ممتازة",
          url: "https://www.youtube.com/@nesoacademy",
        },
        {
          t: "Networking with Prof. Messer",
          d: "تحضير شهادات CompTIA Network+",
          url: "https://www.youtube.com/@professormesser",
        },
      ],
    },

    {
      category: "مراجع وكتب أساسية",
      description: "كتب أكاديمية معتمدة",
      icon: "📚",
      links: [
        {
          t: "Kurose & Ross - Computer Networking",
          d: "المرجع الأساسي للمادة — Top-Down Approach",
          actions: [
            {
              label: "الموقع الرسمي",
              url: "https://gaia.cs.umass.edu/kurose_ross/",
              type: "view",
              color: "blue",
            },
            {
              label: "تحميل",
              url: "https://example.com/kurose.pdf",
              type: "download",
              color: "green",
            },
          ],
        },
        {
          t: "Tanenbaum - Computer Networks",
          d: "مرجع كلاسيكي شامل",
          url: "https://example.com/tanenbaum",
        },
        {
          t: "Forouzan - Data Communications",
          d: "شرح مبسط للمفاهيم",
          url: "https://example.com/forouzan",
        },
      ],
    },

    {
      category: "أدوات ومحاكاة",
      description: "برامج لمحاكاة الشبكات عملياً",
      icon: "🔧",
      links: [
        {
          t: "Cisco Packet Tracer",
          d: "محاكاة شبكات كاملة",
          actions: [
            {
              label: "فتح / تحميل",
              url: "https://www.netacad.com/courses/packet-tracer",
              type: "view",
              color: "orange",
            },
          ],
        },
        {
          t: "Wireshark",
          d: "تحليل الـ Packets",
          actions: [
            {
              label: "تحميل",
              url: "https://www.wireshark.org/",
              type: "download",
              color: "blue",
            },
          ],
        },
        {
          t: "GNS3",
          d: "محاكي شبكات متقدم",
          url: "https://www.gns3.com/",
        },
        {
          t: "NS-3 Simulator",
          d: "محاكي شبكات أكاديمي",
          url: "https://www.nsnam.org/",
        },
      ],
    },

    {
      category: "شهادات احترافية",
      description: "مصادر لشهادات الشبكات",
      icon: "🎓",
      links: [
        {
          t: "Cisco CCNA",
          d: "شهادة سيسكو للشبكات",
          url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
        },
        {
          t: "CompTIA Network+",
          d: "شهادة أساسيات الشبكات",
          url: "https://www.comptia.org/certifications/network",
        },
      ],
    },

    {
      category: "بنوك أسئلة وامتحانات سابقة",
      description: "موارد إضافية للتدريب",
      icon: "📝",
      links: [
        {
          t: "امتحانات سنوات سابقة",
          d: "مجموعة امتحانات فاينل وميدتيرم",
          actions: [
            {
              label: "ميدتيرم 2023",
              url: "https://example.com/mid-2023.pdf",
              type: "download",
              color: "orange",
            },
            {
              label: "فاينل 2023",
              url: "https://example.com/fin-2023.pdf",
              type: "download",
              color: "red",
            },
            {
              label: "فاينل 2022",
              url: "https://example.com/fin-2022.pdf",
              type: "download",
              color: "red",
            },
          ],
        },
        {
          t: "GeeksforGeeks - Networking MCQs",
          d: "أسئلة مقابلات واختبارات",
          url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        },
      ],
    },
  ],
});
