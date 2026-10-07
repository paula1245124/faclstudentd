// ═══════════════════════════════════════════════════════════════════
//  مادة: Computer Networks
//  المرجع: Kurose & Ross — Top-Down Approach
//  نسخة نظيفة — 1-2 أسئلة لكل محاضرة
// ═══════════════════════════════════════════════════════════════════

subjects.push({
  name: "Computer Networks",
  en: "Computer Networks",
  icon: "🌐",

  // ═══════════════════════════════════════════════════════════════════
  // المحاضرات
  // ═══════════════════════════════════════════════════════════════════
  lectures: [
    {
      id: "net-lecture-01",
      t: "المحاضرة الأولى — مقدمة في شبكات الحاسوب",
      d: "What is the Internet, Nuts-and-Bolts, Services, Protocols, Access Networks",
      pdf: "files/net-1.pdf",
      pdf2: "files/net-1-questions.pdf",
      sectionTitle: "🧩 سكاشن مقدمة الشبكات",  // ★ عنوان مخصص لقسم السكشن

      links: [
        { t: "🎥 تسجيل فيديو المحاضرة", d: "المحاضرة كاملة — 45 دقيقة", url: "https://example.com/net-1-video" },
        { t: "📑 سلايدات المحاضرة", d: "PDF الشرائح الرسمية", url: "https://example.com/net-1-slides" }
      ],

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description: "شروحات بالعربية لمفاهيم الشبكات",
          links: [
            {
              t: "د. خولة الهراشجة — شبكات الحاسوب (Ch1)",
              d: "تغطية شاملة: Nuts-and-Bolts, Protocols, DSL/Cable/FTTH",
              icon: "🇪🇬",
              actions: [
                { label: "📖 الشرح", url: "https://www.youtube.com/playlist?list=PL8v_bZALWLKE9Lo2BIy8nsdsakbSvQlEo", type: "view", color: "red" }
              ]
            }
          ]
        },
        {
          category: "مراجع عالمية",
          icon: "🌍",
          description: "شروحات أكاديمية موثوقة",
          links: [
            {
              t: "Jim Kurose — Chapter 1 (Official)",
              d: "الشرح الرسمي من مؤلف الكتاب",
              icon: "🌍",
              actions: [
                { label: "📖 الشرح", url: "https://www.youtube.com/playlist?list=PL1ya5dD_M8uX-BLUF1FEvUNsYWQL5_l0O", type: "view", color: "red" }
              ]
            }
          ]
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description: "برامج تفاعلية للتطبيق",
          links: [
            {
              t: "Kurose & Ross Interactive Animations",
              d: "محاكاة رسمية للـ Packets و Queue Buffers",
              icon: "🔧",
              actions: [
                { label: "🚀 فتح", url: "https://gaia.cs.umass.edu/kurose_ross/interactive/", type: "view", color: "orange" }
              ]
            }
          ]
        }
      ],

      questions: [
        {
          q: "ما هو المقصود بالـ Protocol في شبكات الحاسوب؟",
          options: [
            "جهاز يربط الشبكات",
            "مجموعة قواعد تحكم عملية الاتصال بين الأجهزة",
            "برنامج لتصفح الإنترنت",
            "نوع من الكابلات"
          ],
          correct: 1,
          translation: "What is a Protocol in computer networks?",
          explanation: "الـ Protocol = قواعد متفق عليها بين الأجهزة: الصيغة (Syntax)، المعنى (Semantics)، والتوقيت (Timing)."
        },
        {
          type: "essay",
          q: "اشرح الفرق بين Nuts-and-Bolts Description و Services Description للإنترنت.",
          answer:
            "Nuts-and-Bolts:\n" +
            "• وصف مادي — مليارات الأجهزة المتصلة (End Systems, Routers, Switches).\n" +
            "• يركّز على المكونات ووسائط النقل.\n\n" +
            "Services:\n" +
            "• وصف وظيفي — البنية التحتية اللي بتقدّم خدمات للتطبيقات.\n" +
            "• Web, Email, Streaming, VoIP.",
          tags: ["Introduction", "Nuts-and-Bolts", "Services"],
          ref: "المحاضرة 1 — Section 1.1"
        }
      ]
    },

    {
      id: "net-lecture-02",
      t: "المحاضرة الثانية — Network Edge & Core",
      d: "Hosts, Access Networks, Physical Media, Packet vs Circuit Switching",
      pdf: "files/net-2.pdf",

      links: [
        { t: "🎥 تسجيل الفيديو", url: "https://example.com/net-2-video" },
        { t: "📑 السلايدات", url: "https://example.com/net-2-slides" }
      ],

      questions: [
        {
          q: "الـ Queue Delay بيحدث فين؟",
          options: [
            "في الكابل نفسه",
            "في طوابير الانتظار جوه الراوتر",
            "في المعالج",
            "في الـ End System فقط"
          ],
          correct: 1
        },
        {
          type: "essay",
          q: "اشرح مكونات الـ Packet Delay الأربعة.",
          answer:
            "1) Processing Delay — فحص الـ Header وتحديد المسار.\n" +
            "2) Queuing Delay — انتظار الـ Packet في الطابور.\n" +
            "3) Transmission Delay — دفع البتات للكابل = L/R.\n" +
            "4) Propagation Delay — انتشار الإشارة عبر الوسيط = d/s.",
          tags: ["Delay", "Packet Switching", "Performance"],
          ref: "المحاضرة 2 — Section 1.4"
        }
      ]
    },

    {
      id: "net-lecture-03",
      t: "المحاضرة الثالثة — Application Layer",
      d: "HTTP, FTP, SMTP, DNS, P2P Applications",
      pdf: "files/net-3.pdf",

      links: [
        { t: "🎥 تسجيل الفيديو", url: "https://example.com/net-3-video" },
        { t: "📑 السلايدات", url: "https://example.com/net-3-slides" }
      ],

      questions: [
        {
          q: "بروتوكول HTTP يعمل على أي طبقة؟",
          options: ["Application", "Transport", "Network", "Data Link"],
          correct: 0
        },
        {
          q: "ما الفرق بين HTTP و HTTPS؟",
          options: [
            "HTTPS بيستخدم تشفير SSL/TLS",
            "HTTP أسرع",
            "مفيش فرق",
            "HTTPS للفيديو فقط"
          ],
          correct: 0
        }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════
  // الميدتيرمز — مقسّمة بفئات (نفس بنية linkCategories)
  // ═══════════════════════════════════════════════════════════════════
  midtermsCategories: [
    {
      category: "امتحانات د. أحمد سمير",
      icon: "👨‍🏫",
      description: "ميدتيرمات المادة على يد د. أحمد",
      items: [
        {
          t: "ميدتيرم 2023",
          d: "أسئلة المحاضرتين الأولى والثانية",
          pdf: "files/mid-ahmed-2023.pdf",
          lectures: [0, 1]
        }
      ]
    },
    {
      category: "امتحانات د. سارة محمد",
      icon: "👩‍🏫",
      description: "ميدتيرمات المادة على يد د. سارة",
      items: [
        {
          t: "ميدتيرم 2023 — د. سارة",
          d: "نسخة بديلة للتدريب",
          pdf: "files/mid-sara-2023.pdf",
          questions: [
            {
              q: "أي من التالي يُعتبر Access Network؟",
              options: ["DSL", "Router", "Switch", "Firewall"],
              correct: 0
            }
          ]
        }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════
  // الفاينلات — مقسّمة بالسنة
  // ═══════════════════════════════════════════════════════════════════
  finalsCategories: [
    {
      category: "سنة 2023",
      icon: "📅",
      items: [
        {
          t: "فاينل 2023",
          d: "أسئلة شاملة على كل المحاضرات",
          pdf: "files/final-2023.pdf",
          lectures: [0, 1, 2]
        }
      ]
    },
    {
      category: "سنة 2022",
      icon: "📅",
      items: [
        {
          t: "فاينل 2022",
          d: "أسئلة شاملة للتدريب",
          pdf: "files/final-2022.pdf",
          questions: [
            {
              type: "essay",
              q: "اشرح الفرق بين TCP و UDP مع ذكر استخدامات كل منهما.",
              answer:
                "TCP: موثوق ومنظم — ويب/بريد/نقل ملفات.\n" +
                "UDP: غير موثوق لكن أسرع — Streaming/ألعاب/DNS/VoIP.",
              tags: ["TCP", "UDP", "Transport Layer"],
              ref: "المحاضرة 3 — Section 3.5"
            }
          ]
        }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════
  // بنوك الأسئلة
  // ═══════════════════════════════════════════════════════════════════
  testBanks: [
    {
      t: "Test Bank — كل المحاضرات",
      d: "بنك أسئلة شامل للفاينل",
      pdf: "files/test-bank-final.pdf",
      questions: [
        { q: "كم عدد طبقات OSI Model؟", options: ["5", "6", "7", "8"], correct: 2 },
        { q: "IPv4 Address بيتكون من كام بت؟", options: ["32", "48", "64", "128"], correct: 0 },
        { q: "بروتوكول DHCP بيستخدم لـ...", options: ["توزيع IP تلقائياً", "ترجمة الأسماء", "التشفير", "التوجيه"], correct: 0 }
      ]
    },
    {
      t: "بنك أسئلة Chapter 1",
      d: "كل أسئلة الفصل الأول",
      lectures: [0, 1]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════
  // روابط ومصادر عامة
  // ═══════════════════════════════════════════════════════════════════
  linkCategories: [
    {
      category: "مراجع وكتب أساسية",
      icon: "📚",
      description: "مراجع أكاديمية معتمدة",
      links: [
        {
          t: "Kurose & Ross — Computer Networking",
          d: "المرجع الأساسي — Top-Down Approach",
          actions: [
            { label: "الموقع الرسمي", url: "https://gaia.cs.umass.edu/kurose_ross/", type: "view", color: "blue" },
            { label: "تحميل", url: "https://example.com/kurose.pdf", type: "download", color: "green" }
          ]
        },
        {
          t: "Tanenbaum — Computer Networks",
          d: "مرجع كلاسيكي شامل",
          url: "https://example.com/tanenbaum"
        }
      ]
    },
    {
      category: "أدوات ومحاكاة",
      icon: "🔧",
      description: "برامج لتطبيق الشبكات عمليًا",
      links: [
        {
          t: "Cisco Packet Tracer",
          d: "محاكاة شبكات كاملة",
          actions: [
            { label: "فتح / تحميل", url: "https://www.netacad.com/courses/packet-tracer", type: "view", color: "orange" }
          ]
        },
        {
          t: "Wireshark",
          d: "تحليل الـ Packets",
          actions: [
            { label: "تحميل", url: "https://www.wireshark.org/", type: "download", color: "blue" }
          ]
        }
      ]
    }
  ]
});