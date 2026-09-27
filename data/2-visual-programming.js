subjects.push({
  name: "البرمجة المرئية",
  en: "Visual Programming",
  icon: "🧩",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في البرمجة المرئية وواجهات المستخدم الرسومية (GUI).",
      pdf: "Visual Programming/lectures/Chapter 1.pdf",
      pdf2: "Visual Programming/Questions/Questions on each lecture/Chapter 1 - Questions - Visual Programming.pdf",

      // فئات روابط ومنهج منظّم - Chapter 1: Introduction to Visual C# (د. سارة طارق)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لأساسيات Visual C# وتطبيقات Windows Forms والـ Controls",
          links: [
            {
              t: "د. سارة طارق - Chapter 1: Introduction to Visual C#",
              d: "تغطية بيئة Visual Studio، إنشاء مشروع Windows Forms، والتعامل مع Controls (Button, Label, PictureBox) والـ Event Handlers",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/results?search_query=Visual+C%23+Windows+Forms+Arabic",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح C# Windows Forms - الأساسيات والواجهات",
              d: "شرح الخصائص (Properties)، الأحداث (Events)، صندوق الرسائل MessageBox، وإخفاء وإظهار العناصر (Visible Property)",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLv1B2sO_m836mU_N1WcE_xLqM90A0lOqZ",
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
            "دروس عالمية معتمدة لتعلم Visual Studio وC# Windows Forms",
          links: [
            {
              t: "Microsoft Visual Studio - Getting Started with C# & Windows Forms",
              d: "شرح واجهة بيئة التطوير: Solution Explorer, Designer Window, Properties Window, Toolbox",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/results?search_query=C%23+Windows+Forms+App+for+Beginners",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "C# Windows Forms Application Tutorial for Beginners",
              d: "تطبيقات عمليّة على Button Click, Label Text, PictureBox SizeMode, and Form Closing",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/results?search_query=C%23+Windows+Forms+Tutorial+Beginners",
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
          description: "توثيقات ومقالات رسمية لشرح مفاهيم C# وWindows Forms",
          links: [
            {
              t: "Microsoft Learn - Create a Windows Forms app in Visual Studio with C#",
              d: "التوثيق الرسمي من مايكروسوفت لإنشاء تطبيقات Windows Forms وفهم هيكلية الكود (Namespace, Class, Methods)",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://learn.microsoft.com/en-us/visualstudio/ide/create-a-visual-csharp-winform-app",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - C# Windows Forms Controls & Properties",
              d: "شرح مفصل لعناصر Label, Button, PictureBox والخواص Font, BorderStyle, AutoSize, SizeMode",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.geeksforgeeks.org/c-sharp-windows-forms/",
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
          description: "بيئات التطوير والأدوات البرمجية المطلوبة",
          links: [
            {
              t: "Visual Studio Community - Download IDE",
              d: "تحميل بيئة التطوير المتكاملة Visual Studio لبناء تطبيقات Visual C#",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://visualstudio.microsoft.com/downloads/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
            {
              t: "NET Fiddle - Online C# Compiler",
              d: "محرر أونلاين لتجربة وتجريب كود C# مباشرة",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://dotnetfiddle.net/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "فيديوهات عربية تساعد على فهم C# وWindows Forms وواجهات المستخدم، وهي مرتبطة مباشرة بالموضوعات العملية الموجودة في Chapter 1.",
          links: [
            {
              t: "C# البداية مع الشاشات - Introduction To Forms",
              d: "شرح عربي لـ C# وIntroduction to Forms، مناسب لفهم فكرة الـForms وبناء واجهات تطبيقات Windows.",
              icon: "🎥",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://www.youtube.com/watch?v=L7lC1D0BWE8",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
            {
              t: "C# Windows Form - شرح عربي",
              d: "شرح عربي لتطبيقات Windows Forms باستخدام C#، ويتناول بناء تطبيقات سطح المكتب والتعامل مع الواجهة.",
              icon: "🖥️",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://www.youtube.com/watch?v=GE2KtKpACYI",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
            {
              t: "أساسيات C# للمبتدئين - إنشاء أول برنامج",
              d: "فيديو عربي من Microsoft يشرح إنشاء أول برنامج C# باستخدام Visual Studio، وهو مناسب كبداية قبل تطبيق Windows Forms.",
              icon: "🎓",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://learn.microsoft.com/ar-sa/shows/c-fundamentals-for-absolute-beginners/03",
                  type: "view",
                  color: "#1E88E5",
                },
              ],
            },
            {
              t: "تشريح أول برنامج C#",
              d: "شرح عربي لبنية أول برنامج C# وفهم مكونات الكود، وهو مفيد قبل دراسة namespaces وclasses وmethods.",
              icon: "🔍",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://learn.microsoft.com/ar-sa/shows/c-fundamentals-for-absolute-beginners/04",
                  type: "view",
                  color: "#43A047",
                },
              ],
            },
          ],
        },

        {
          category: "فيديوهات ومحتوى عالمي",
          icon: "🌍",
          description:
            "مصادر تعليمية عملية من Microsoft لتعلم C# وVisual Studio وWindows Forms، مع تطبيقات فعلية على الـControls والـEvents.",
          links: [
            {
              t: "C# Fundamentals for Absolute Beginners",
              d: "سلسلة Microsoft لتعلم أساسيات C# من البداية، وتشمل إنشاء البرامج وفهم بنية الكود وVisual Studio.",
              icon: "🎬",
              actions: [
                {
                  label: "ابدأ التعلم",
                  url: "https://learn.microsoft.com/en-us/shows/c-fundamentals-for-absolute-beginners/",
                  type: "view",
                  color: "#0078D4",
                },
              ],
            },
            {
              t: "C# Beginner Video Series",
              d: "مجموعة فيديوهات Microsoft لتعلم أساسيات لغة C# ومفاهيمها الرئيسية.",
              icon: "▶️",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://learn.microsoft.com/en-us/shows/csharp-101/",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
          ],
        },

        {
          category: "C# Fundamentals",
          icon: "💻",
          description:
            "مراجع أساسية لفهم تركيب برامج C#، namespaces، classes، methods، وتنظيم الكود، وهي الموضوعات التي يشرحها الفصل في Introduction to C# Code.",
          links: [
            {
              t: "C# Documentation",
              d: "المرجع الرسمي للغة C# ويحتوي على tutorials وfundamentals وlanguage reference وأمثلة عملية.",
              icon: "📚",
              actions: [
                {
                  label: "فتح المرجع",
                  url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                  type: "view",
                  color: "#0078D4",
                },
              ],
            },
            {
              t: "General Structure of a C# Program",
              d: "شرح رسمي لبنية برنامج C# وكيفية استخدام namespaces وtypes وstatements لتنظيم وتنفيذ البرنامج.",
              icon: "🏗️",
              actions: [
                {
                  label: "قراءة",
                  url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/program-structure/",
                  type: "view",
                  color: "#3949AB",
                },
              ],
            },
            {
              t: "Namespaces in C#",
              d: "شرح namespaces وusing directives وكيف تستخدم لتنظيم عناصر وبرمجيات C#.",
              icon: "📦",
              actions: [
                {
                  label: "قراءة",
                  url: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/namespaces",
                  type: "view",
                  color: "#8E24AA",
                },
              ],
            },
            {
              t: "Methods in C#",
              d: "شرح methods، parameters، return values وmethod signatures، وهي من أساسيات الجزء الخاص بـIntroduction to C# Code.",
              icon: "⚙️",
              actions: [
                {
                  label: "قراءة",
                  url: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods",
                  type: "view",
                  color: "#43A047",
                },
              ],
            },
            {
              t: "Classes and Objects",
              d: "Tutorial عملي لفهم classes وobjects وبناء الأنواع في C#.",
              icon: "🧩",
              actions: [
                {
                  label: "تعلم",
                  url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/classes",
                  type: "view",
                  color: "#FB8C00",
                },
              ],
            },
          ],
        },

        {
          category: "Visual Studio",
          icon: "🛠️",
          description:
            "موارد مباشرة للبيئة التي يستخدمها الفصل: إنشاء Project وSolution، استخدام Designer وSolution Explorer وProperties، ثم تشغيل وتصحيح التطبيق.",
          links: [
            {
              t: "Visual Studio",
              d: "بيئة التطوير المتكاملة التي يستخدمها الفصل لإنشاء واختبار وتصحيح تطبيقات C#.",
              icon: "🟣",
              actions: [
                {
                  label: "فتح Visual Studio",
                  url: "https://visualstudio.microsoft.com/",
                  type: "view",
                  color: "#5C2D91",
                },
              ],
            },
            {
              t: "Create a Windows Forms App with C#",
              d: "Tutorial رسمي لإنشاء مشروع Windows Forms باستخدام C# في Visual Studio وتشغيل التطبيق.",
              icon: "🖥️",
              actions: [
                {
                  label: "Tutorial",
                  url: "https://learn.microsoft.com/en-us/visualstudio/ide/create-csharp-winform-visual-studio",
                  type: "view",
                  color: "#0078D4",
                },
              ],
            },
            {
              t: "Windows Forms Designer",
              d: "شرح رسمي للـWindows Forms Designer وإضافة وترتيب Controls وتعديل خصائصها وكتابة Event Handlers.",
              icon: "🎨",
              actions: [
                {
                  label: "فتح الشرح",
                  url: "https://learn.microsoft.com/en-us/visualstudio/designers/windows-forms-designer-overview",
                  type: "view",
                  color: "#7B1FA2",
                },
              ],
            },
            {
              t: "Getting Started with Windows Forms Designer",
              d: "Tutorial عملي على Designer يشمل تصميم الـLayout والتعامل مع Controls وتنفيذ Event Handlers واختبار التطبيق.",
              icon: "🧰",
              actions: [
                {
                  label: "ابدأ التطبيق",
                  url: "https://learn.microsoft.com/en-us/visualstudio/designers/walkthrough-windows-forms-designer",
                  type: "view",
                  color: "#00897B",
                },
              ],
            },
          ],
        },

        {
          category: "Windows Forms & Controls",
          icon: "🖱️",
          description:
            "موارد مطابقة للجزء الذي يشرح Forms وControls وProperties وToolbox، وكيفية بناء واجهة المستخدم داخل Visual Studio.",
          links: [
            {
              t: "Add Controls to a Form",
              d: "شرح رسمي لإضافة Controls إلى Form باستخدام Visual Studio Designer أو باستخدام الكود.",
              icon: "➕",
              actions: [
                {
                  label: "قراءة",
                  url: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/controls/how-to-add-to-a-form",
                  type: "view",
                  color: "#43A047",
                },
              ],
            },
            {
              t: "Add Controls to Windows Forms",
              d: "مثال عملي على إنشاء Windows Forms وإضافة Button وTextBox وListBox وCheckBox وLabel وتعديل خصائصها.",
              icon: "🧱",
              actions: [
                {
                  label: "المثال",
                  url: "https://learn.microsoft.com/en-us/troubleshoot/developer/visualstudio/csharp/language-compilers/add-controls-to-windows-forms",
                  type: "view",
                  color: "#1E88E5",
                },
              ],
            },
            {
              t: "Windows Forms Math Quiz",
              d: "مشروع تطبيقي كامل لبناء Math Quiz باستخدام Windows Forms، مع إنشاء المشروع وإضافة Labels وButtons وControls.",
              icon: "🧮",
              actions: [
                {
                  label: "ابدأ المشروع",
                  url: "https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-windows-forms-math-quiz-create-project-add-controls",
                  type: "view",
                  color: "#FB8C00",
                },
              ],
            },
            {
              t: "Windows Forms Matching Game",
              d: "مشروع عملي لبناء لعبة Matching باستخدام Windows Forms، ويطبق إنشاء Project وإضافة Controls والتعامل مع Events.",
              icon: "🎮",
              actions: [
                {
                  label: "ابدأ المشروع",
                  url: "https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-windows-forms-create-match-game",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
          ],
        },

        {
          category: "Events & Event Handlers",
          icon: "⚡",
          description:
            "مصادر مباشرة للجزء الخاص بالـEvent Handler، مثل displayButton_Click وForm_Load والتفاعل مع ضغط المستخدم على Controls.",
          links: [
            {
              t: "C# Events",
              d: "شرح رسمي لمفهوم Events في C# وكيف تتعامل Controls مثل Buttons وListBoxes مع الأحداث.",
              icon: "⚡",
              actions: [
                {
                  label: "قراءة",
                  url: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/",
                  type: "view",
                  color: "#F9A825",
                },
              ],
            },
            {
              t: "How to Handle Control Events",
              d: "شرح رسمي لكيفية إنشاء وربط Event Handlers مع Controls في Windows Forms باستخدام Visual Studio.",
              icon: "🔗",
              actions: [
                {
                  label: "قراءة",
                  url: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/controls/how-to-add-an-event-handler",
                  type: "view",
                  color: "#8E24AA",
                },
              ],
            },
            {
              t: "Add Code to a Picture Viewer",
              d: "تطبيق عملي يوضح إضافة Event Handlers وكتابة الكود المرتبط بالـControls وتشغيل Windows Forms application.",
              icon: "🖼️",
              actions: [
                {
                  label: "Tutorial",
                  url: "https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-windows-forms-picture-viewer-code",
                  type: "view",
                  color: "#00897B",
                },
              ],
            },
          ],
        },

        {
          category: "مشاريع تطبيقية",
          icon: "🚀",
          description:
            "مشاريع صغيرة لتطبيق ما ورد في الملف عمليًا: إنشاء Windows Forms Project، تصميم GUI، إضافة Controls، كتابة Events وتشغيل البرنامج.",
          links: [
            {
              t: "Hello World Windows Forms",
              d: "تطبيق بسيط لإنشاء C# Windows Forms app وإضافة Button وتغيير النص، وهو قريب جدًا من تطبيق Hello World الموجود في الفصل.",
              icon: "👋",
              actions: [
                {
                  label: "ابدأ التطبيق",
                  url: "https://learn.microsoft.com/en-us/visualstudio/ide/create-csharp-winform-visual-studio",
                  type: "view",
                  color: "#43A047",
                },
              ],
            },
            {
              t: "Picture Viewer",
              d: "مشروع Windows Forms متكامل نسبيًا يطبق إنشاء المشروع والـLayout والـControls والـEvent Handlers.",
              icon: "🖼️",
              actions: [
                {
                  label: "ابدأ المشروع",
                  url: "https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-windows-forms-picture-viewer-layout",
                  type: "view",
                  color: "#1E88E5",
                },
              ],
            },
            {
              t: "Matching Game",
              d: "مشروع عملي يستخدم Controls وEvents وTimer داخل Windows Forms لتطبيق المفاهيم بشكل أكبر.",
              icon: "🎮",
              actions: [
                {
                  label: "ابدأ المشروع",
                  url: "https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-windows-forms-create-match-game",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
          ],
        },
      ],
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات عربية مرتبطة مباشرة بمقدمة هندسة البرمجيات وموضوعات Chapter 1 مثل التطوير الاحترافي، تعريف Software Engineering، تنوع الأنظمة، الأخلاقيات ودراسات الحالة.",
          links: [
            {
              t: "مقدمة في هندسة البرمجيات",
              d: "محاضرة عربية تشرح مقدمة Software Engineering، تعريفها، أهميتها، والاعتماد المتزايد على البرمجيات.",
              icon: "🎥",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://www.youtube.com/watch?v=U1Lme7dWzAs",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
            {
              t: "Software Engineering Chapter 1",
              d: "كورس عربي مقسم إلى دروس Chapter 1 تشمل Introduction وSoftware Costs وSoftware Products وSoftware Engineering Diversity وEthics.",
              icon: "📚",
              actions: [
                {
                  label: "الكورس",
                  url: "https://it-sharks.com/ar/course/software-engineering-course2",
                  type: "view",
                  color: "#1E88E5",
                },
              ],
            },
            {
              t: "Chapter 1 بالعربي",
              d: "سلسلة عربية تشمل Introduction وSoftware Costs وSoftware Products وSoftware Engineering Diversity وSoftware Engineering Ethics وCase Studies.",
              icon: "🎓",
              actions: [
                {
                  label: "الدروس",
                  url: "https://www.mindluster.com/course/1746/Software-Engineering-Intro-video",
                  type: "view",
                  color: "#43A047",
                },
              ],
            },
          ],
        },

        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات مرتبطة مباشرة بمقدمة Software Engineering وسبب أهميتها وأخلاقيات مهندس البرمجيات، مع الاعتماد على موارد Sommerville الرسمية قدر الإمكان.",
          links: [
            {
              t: "Ten Questions about Software Engineering",
              d: "فيديو Ian Sommerville يجيب عن أسئلة أساسية حول Software Engineering وطبيعتها والفرق بينها وبين التخصصات الأخرى.",
              icon: "🎬",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://software-engineering-book.com/videos/se/",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
            {
              t: "Why Software Engineering Matters",
              d: "شرح لأهمية Software Engineering من الناحية الاقتصادية والاجتماعية، وهو مرتبط مباشرة بمقدمة الفصل.",
              icon: "💡",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://software-engineering-book.com/videos/se/",
                  type: "view",
                  color: "#FB8C00",
                },
              ],
            },
            {
              t: "The Conscience of Computing Professionals",
              d: "مادة مرتبطة بأخلاقيات Software Engineering وأهمية الالتزام بالمسؤولية المهنية.",
              icon: "⚖️",
              actions: [
                {
                  label: "مشاهدة",
                  url: "https://software-engineering-book.com/videos/se/",
                  type: "view",
                  color: "#8E24AA",
                },
              ],
            },
          ],
        },

        {
          category: "مواقع ومراجع أساسية",
          icon: "🌐",
          description:
            "مصادر مرجعية تغطي محتوى الفصل نفسه، وتشمل موقع Ian Sommerville، مواد Chapter 1، الفيديوهات، ودراسات الحالة، بالإضافة إلى ACM/IEEE Code of Ethics.",
          links: [
            {
              t: "Ian Sommerville - Chapter 1",
              d: "المصدر الرسمي المرتبط بكتاب Software Engineering 10th Edition، ويتضمن مواد إضافية للفصل الأول.",
              icon: "📖",
              actions: [
                {
                  label: "فتح المرجع",
                  url: "https://software-engineering-book.com/intro/",
                  type: "view",
                  color: "#1E88E5",
                },
              ],
            },
            {
              t: "Software Engineering Videos",
              d: "صفحة الفيديوهات الرسمية للكتاب، وتوضح أن مجموعة Software Engineering تدعم Chapters 1 و2.",
              icon: "🎥",
              actions: [
                {
                  label: "الفيديوهات",
                  url: "https://software-engineering-book.com/videos/se/",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
            {
              t: "Software Engineering Case Studies",
              d: "المصدر الرسمي لدراسات الحالة الموجودة في الفصل، ومنها Mentcare وPersonal Insulin Pump وWilderness Weather Station وiLearn.",
              icon: "🧩",
              actions: [
                {
                  label: "دراسات الحالة",
                  url: "https://software-engineering-book.com/case-studies/",
                  type: "view",
                  color: "#43A047",
                },
              ],
            },
            {
              t: "ACM/IEEE Software Engineering Code of Ethics",
              d: "الكود المهني والأخلاقي المشترك، ويغطي المبادئ الثمانية المذكورة في Chapter 1.",
              icon: "⚖️",
              actions: [
                {
                  label: "قراءة الكود",
                  url: "https://www.computer.org/education/code-of-ethics",
                  type: "view",
                  color: "#8E24AA",
                },
              ],
            },
            {
              t: "IEEE TechEthics",
              d: "مرجع IEEE يتضمن Software Engineering Code of Ethics and Professional Practice وأطر الأخلاقيات التقنية.",
              icon: "🏛️",
              actions: [
                {
                  label: "فتح المرجع",
                  url: "https://techethics.ieee.org/resources/ieee-frameworks/",
                  type: "view",
                  color: "#3949AB",
                },
              ],
            },
          ],
        },

        {
          category: "دراسة الأخلاقيات",
          icon: "⚖️",
          description:
            "مصادر مركزة على Software Engineering Ethics، خاصة Confidentiality وCompetence وIntellectual Property وComputer Misuse وACM/IEEE Code.",
          links: [
            {
              t: "Ethics in Software Engineering",
              d: "وحدة تعليمية أكاديمية عن أخلاقيات هندسة البرمجيات، وتشمل ACM Software Engineering Code of Ethics ودراسات حالة أخلاقية.",
              icon: "🧠",
              actions: [
                {
                  label: "دراسة",
                  url: "https://courses.ics.hawaii.edu/ics314s26/modules/ethics/",
                  type: "view",
                  color: "#8E24AA",
                },
              ],
            },
            {
              t: "Software Engineering Code of Ethics - Version 5.2",
              d: "نسخة موثقة من Software Engineering Code of Ethics and Professional Practice، وهو المرجع المرتبط بالمبادئ الثمانية في الفصل.",
              icon: "📜",
              actions: [
                {
                  label: "قراءة",
                  url: "https://onlinelibrary.wiley.com/doi/10.1002/9781119312451.app1",
                  type: "view",
                  color: "#6D4C41",
                },
              ],
            },
            {
              t: "Software Engineering Ethics - KSU",
              d: "مادة جامعية تركز على أخلاقيات Software Engineer وكود IEEE-CS/ACM والمبادئ الثمانية.",
              icon: "🎓",
              actions: [
                {
                  label: "المادة",
                  url: "https://faculty.ksu.edu.sa/en/aalgwaiz/course/229379",
                  type: "view",
                  color: "#00897B",
                },
              ],
            },
          ],
        },

        {
          category: "دراسات الحالة",
          icon: "🧩",
          description:
            "مصادر مرتبطة مباشرة بـ Case Studies الموجودة في Chapter 1، لاستخدامها لفهم اختلاف أنواع الأنظمة ومتطلبات Software Engineering لكل نوع.",
          links: [
            {
              t: "Mentcare",
              d: "نظام لإدارة سجلات الأشخاص الذين يتلقون رعاية للصحة النفسية، وهو أحد Case Studies الأساسية في الفصل.",
              icon: "🏥",
              actions: [
                {
                  label: "دراسة الحالة",
                  url: "https://software-engineering-book.com/case-studies/",
                  type: "view",
                  color: "#43A047",
                },
              ],
            },
            {
              t: "Personal Insulin Pump",
              d: "نظام Embedded Safety-Critical يتحكم في إعطاء الإنسولين اعتمادًا على بيانات مستوى السكر.",
              icon: "💉",
              actions: [
                {
                  label: "دراسة الحالة",
                  url: "https://software-engineering-book.com/case-studies/",
                  type: "view",
                  color: "#E53935",
                },
              ],
            },
            {
              t: "Wilderness Weather Station",
              d: "نظام لجمع بيانات الطقس من مناطق نائية، ويُستخدم لتوضيح نوع مختلف من الأنظمة البرمجية.",
              icon: "🌦️",
              actions: [
                {
                  label: "دراسة الحالة",
                  url: "https://software-engineering-book.com/case-studies/",
                  type: "view",
                  color: "#1E88E5",
                },
              ],
            },
            {
              t: "iLearn Digital Learning Environment",
              d: "بيئة تعلم رقمية تعتمد على مجموعة من الخدمات والتطبيقات، وتوضح Software Reuse وService Integration.",
              icon: "🎓",
              actions: [
                {
                  label: "دراسة الحالة",
                  url: "https://software-engineering-book.com/case-studies/",
                  type: "view",
                  color: "#FB8C00",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        // ─── MCQ ───
        {
          q: "What is Visual Studio primarily described as in the lecture?",
          options: [
            "A simple text editor",
            "A professional integrated development environment (IDE)",
            "A web browser",
            "A graphics design tool",
          ],
          correct: 1,
        },
        {
          q: "Which languages can Visual Studio be used to create applications with, besides Visual C#?",
          options: [
            "Java and Python",
            "Visual Basic and C++",
            "HTML and CSS",
            "SQL and PHP",
          ],
          correct: 1,
        },
        {
          q: "What is the first step to creating a new project in Visual Studio?",
          options: [
            "Click Save All",
            "Open Visual Studio and select Create a new project from the Start Window",
            "Open the Toolbox",
            "Change the form's Text property",
          ],
          correct: 1,
        },
        {
          q: "What type of application is selected in the lecture for creating a new project?",
          options: [
            "Console App",
            "Windows Forms Application",
            "Web Application",
            "Class Library",
          ],
          correct: 1,
        },
        {
          q: "What is the default name filled in the project name text box when creating a new Windows Forms App?",
          options: [
            "MyFirstProject",
            "Project1",
            "WindowsFormsApp1",
            "AppDefault",
          ],
          correct: 2,
        },
        {
          q: "What is a solution in Visual Studio?",
          options: [
            "A single file containing code",
            "A container that holds a project",
            "A type of control",
            "An event handler",
          ],
          correct: 1,
        },
        {
          q: "By default, what is the relationship between the solution name and project name?",
          options: [
            "They are always different",
            "The solution name is the same as the project name",
            "The solution name is longer",
            "There is no relationship",
          ],
          correct: 1,
        },
        {
          q: "Where is the project name displayed after creating a new project?",
          options: [
            "In the Toolbox",
            "In the title bar at the top of the Visual Studio window",
            "In the Properties window",
            "In the menu bar",
          ],
          correct: 1,
        },
        {
          q: "Which windows appear within the Visual Studio environment as mentioned in the lecture?",
          options: [
            "Code Editor, Debugger, Compiler",
            "Designer window, Solution Explorer window, Properties window",
            "Toolbox, Menu Bar, Toolbar",
            "Form, Button, Label",
          ],
          correct: 1,
        },
        {
          q: "How do you open the Solution Explorer window if it is not visible?",
          options: [
            "Click File > Open",
            "Click View on the menu bar, then Solution Explorer",
            "Press F5",
            "Double-click the form",
          ],
          correct: 1,
        },
        {
          q: "What feature allows windows in Visual Studio to be displayed as tabs along the edges when turned on?",
          options: ["Auto Save", "Auto Hide", "Auto Size", "Auto Align"],
          correct: 1,
        },
        {
          q: "How do you turn Auto Hide on or off for a window?",
          options: [
            "Click the pushpin icon in the window's title bar",
            "Press Ctrl+H",
            "Right-click the window and select Hide",
            "Change the Visible property",
          ],
          correct: 0,
        },
        {
          q: "What appears below the menu bar in Visual Studio?",
          options: [
            "The Toolbox",
            "The standard toolbar",
            "The Designer window",
            "The code editor",
          ],
          correct: 1,
        },
        {
          q: "Which toolbar button moves to the previously active tab in the Designer window?",
          options: [
            "Navigate Forward",
            "New Project",
            "Navigate Backward",
            "Save All",
          ],
          correct: 2,
        },
        {
          q: "What does the Undo button on the toolbar do?",
          options: [
            "Saves the project",
            "Undoes the most recent operation",
            "Starts debugging",
            "Configures the project",
          ],
          correct: 1,
        },
        {
          q: "Which button lets you select the platform on which the application will run?",
          options: [
            "Solution Configurations",
            "Solution Platform",
            "Start Debugging",
            "Find",
          ],
          correct: 1,
        },
        {
          q: "What is the purpose of the Toolbox window?",
          options: [
            "To edit code",
            "To select controls for the user interface",
            "To view properties",
            "To explore solutions",
          ],
          correct: 1,
        },
        {
          q: "Where does the Toolbox typically appear in Visual Studio?",
          options: [
            "On the right side",
            "On the bottom",
            "On the left side",
            "On the top",
          ],
          correct: 2,
        },
        {
          q: "What is a ToolTip in Visual Studio?",
          options: [
            "A button on the toolbar",
            "A small box with a description that pops up when hovering over a button",
            "A property in the Properties window",
            "A control in the Toolbox",
          ],
          correct: 1,
        },
        {
          q: "What is a Visual C# project composed of?",
          options: [
            "Only code files",
            "Several related files such as code and images",
            "A single image",
            "Only forms",
          ],
          correct: 1,
        },
        {
          q: "What can a solution hold in Visual Studio?",
          options: [
            "Only one project",
            "One or more Visual C# projects",
            "Only images",
            "Only code files",
          ],
          correct: 1,
        },
        {
          q: "Why might you store several related projects in the same solution?",
          options: [
            "For small organizations only",
            "For convenience in large organizations",
            "To reduce file size",
            "To hide code",
          ],
          correct: 1,
        },
        {
          q: "How do you display a project's form in the Designer if it's not shown?",
          options: [
            "Double-click the form",
            "Right-click Form1.cs in Solution Explorer and click View Designer",
            "Press F5",
            "Click the Toolbox",
          ],
          correct: 1,
        },
        {
          q: "What is the initial size of a form in pixels?",
          options: ["200 x 200", "300 x 300", "400 x 400", "100 x 100"],
          correct: 1,
        },
        {
          q: "What indicates that an object is selected in the Designer?",
          options: [
            "A solid line around it",
            "A bounding box with sizing handles",
            "A red color",
            "A tooltip",
          ],
          correct: 1,
        },
        {
          q: "What is the default name of the blank form created in a new project?",
          options: ["MainForm", "Form1", "MyForm", "DefaultForm"],
          correct: 1,
        },
        {
          q: "What determines the appearance and characteristics of a GUI object?",
          options: ["Its name", "Its properties", "Its code", "Its location"],
          correct: 1,
        },
        {
          q: "Where are an object's properties displayed when selected?",
          options: [
            "In the Toolbox",
            "In the Properties window",
            "In the code editor",
            "In the menu bar",
          ],
          correct: 1,
        },
        {
          q: "What does the Text property of a form determine?",
          options: [
            "The form's size",
            "The text in the title bar",
            "The form's color",
            "The form's name",
          ],
          correct: 1,
        },
        {
          q: "Changing a form's Text property does what to its name?",
          options: [
            "Changes the name",
            "Does not change the name",
            "Deletes the name",
            "Hides the name",
          ],
          correct: 1,
        },
        {
          q: "How can you change a form's size using the Properties window?",
          options: [
            "Edit the Name property",
            "Edit the Size property",
            "Edit the Text property",
            "Edit the Visible property",
          ],
          correct: 1,
        },
        {
          q: "How do you add a control to a form from the Toolbox?",
          options: [
            "Right-click it",
            "Double-click it or drag it",
            "Press Enter",
            "Change its properties",
          ],
          correct: 1,
        },
        {
          q: "How do you delete a control from a form?",
          options: [
            "Select it and press Delete",
            "Change its Visible property to False",
            "Resize it to zero",
            "Change its name",
          ],
          correct: 0,
        },
        {
          q: "What is the default name for the first Button control created?",
          options: ["button Default", "button1", "myButton", "clickButton"],
          correct: 1,
        },
        {
          q: "What property holds the text displayed on a Button's face?",
          options: ["Name", "Size", "Text", "Visible"],
          correct: 2,
        },
        {
          q: "Changing a Button's Text property affects what?",
          options: [
            "Its name",
            "The text on its face",
            "Its size",
            "Its visibility",
          ],
          correct: 1,
        },
        {
          q: "What is the first character rule for C# identifiers (control names)?",
          options: [
            "Must be a digit",
            "Must be a letter or underscore",
            "Must be a space",
            "Must be a symbol",
          ],
          correct: 1,
        },
        {
          q: "Can control names contain spaces in C#?",
          options: ["Yes", "No", "Only at the end", "Only if quoted"],
          correct: 1,
        },
        {
          q: "What naming convention is recommended for multi-word control names?",
          options: ["Snake case", "Camel case", "Pascal case", "Kebab case"],
          correct: 1,
        },
        {
          q: "In camelCase, how is the first word written?",
          options: [
            "All uppercase",
            "All lowercase",
            "First letter uppercase",
            "With underscores",
          ],
          correct: 1,
        },
        {
          q: "What file contains the application's start-up code in a C# project?",
          options: ["Form1.cs", "Program.cs", "Main.cs", "Startup.cs"],
          correct: 1,
        },
        {
          q: "What should you not modify in the Program.cs file?",
          options: [
            "The comments",
            "The contents, as it could prevent execution",
            "The namespace",
            "The class name",
          ],
          correct: 1,
        },
        {
          q: "Which file contains code associated with the Form1 form?",
          options: ["Program.cs", "Form1.cs", "Designer.cs", "App.cs"],
          correct: 1,
        },
        {
          q: "How is C# code primarily organized?",
          options: [
            "Functions, loops, variables",
            "Namespaces, classes, methods",
            "Forms, controls, properties",
            "Files, folders, projects",
          ],
          correct: 1,
        },
        {
          q: "What do using directives at the top of a C# file indicate?",
          options: [
            "Classes to create",
            "Namespaces from .NET Framework to use",
            "Methods to call",
            "Controls to add",
          ],
          correct: 1,
        },
        {
          q: "What marks the beginning of a namespace in code?",
          options: [
            "class namespaceName",
            "namespace namespaceName",
            "using namespaceName",
            "public namespaceName",
          ],
          correct: 1,
        },
        {
          q: "What is a class declaration in C#?",
          options: [
            "A container for methods",
            "A container for namespaces",
            "A group of statements",
            "An event handler",
          ],
          correct: 0,
        },
        {
          q: "What is the entry point method in a form class?",
          options: [
            "Main()",
            "public Form1()",
            "InitializeComponent()",
            "Click()",
          ],
          correct: 1,
        },
        {
          q: "How do you switch between the code editor and Designer using tabs?",
          options: [
            "Click Form1.cs for code, Form1.cs [Design] for Designer",
            "Press F7 for code, F6 for Designer",
            "Right-click and select",
            "Use the menu bar",
          ],
          correct: 0,
        },
        {
          q: "How can you detach the code editor to see it and the Designer simultaneously?",
          options: [
            "Press Ctrl + D",
            "Drag the code editor tab to another location",
            "Click View > Detach",
            "Change Auto Hide",
          ],
          correct: 1,
        },
        {
          q: "What is an event handler?",
          options: [
            "A property of a control",
            "A method that executes when a specific event occurs",
            "A namespace",
            "A class declaration",
          ],
          correct: 1,
        },
        {
          q: "How do you create a Click event handler for a button?",
          options: [
            "Write it manually in code",
            "Double-click the button in the Designer",
            "Change the Click property",
            "Use the Toolbox",
          ],
          correct: 1,
        },
        {
          q: "What method displays a message box?",
          options: [
            "Label.Show()",
            "MessageBox.Show()",
            "Form.Message()",
            "Button.Display()",
          ],
          correct: 1,
        },
        {
          q: "In the Hello World app, what is the form's Text property set to?",
          options: [
            "Hello World",
            "My First Program",
            "Display Message",
            "Form1",
          ],
          correct: 1,
        },
        {
          q: "What is the Button's Name property in the Hello World app?",
          options: ["button1", "displayButton", "messageButton", "helloButton"],
          correct: 2,
        },
        {
          q: "What statement is written in the Hello World app's event handler?",
          options: [
            'MessageBox.Show("Hello World");',
            'Label.Text = "Hello World";',
            "this.Close();",
            "Visible = true;",
          ],
          correct: 0,
        },
        {
          q: "What is a Label control used for?",
          options: [
            "To input text",
            "To display text",
            "To show images",
            "To close the form",
          ],
          correct: 1,
        },
        {
          q: "How do you change the font of a Label's text?",
          options: [
            "Edit Text property",
            "Click ellipses in Font property",
            "Set AutoSize to True",
            "Change BorderStyle",
          ],
          correct: 1,
        },
        {
          q: "What BorderStyle value outlines the Label's text with a thin border?",
          options: ["None", "FixedSingle", "Fixed3D", "Auto"],
          correct: 1,
        },
        {
          q: "What happens when a Label's AutoSize is True?",
          options: [
            "It cannot be resized manually",
            "It becomes invisible",
            "It centers the text",
            "It adds a border",
          ],
          correct: 0,
        },
        {
          q: "What TextAlign value aligns text in the middle center of a Label?",
          options: ["TopLeft", "MiddleCenter", "BottomRight", "MiddleLeft"],
          correct: 1,
        },
        {
          q: "Can numbers be assigned directly to a Label's Text property without quotes?",
          options: [
            "Yes",
            "No, they must be strings",
            "Only if positive",
            "Only in code",
          ],
          correct: 1,
        },
        {
          q: "How do you clear a Label's text in code?",
          options: [
            "label.Text = null;",
            'label.Text = "";',
            "label.Visible = false;",
            "label.AutoSize = false;",
          ],
          correct: 1,
        },
        {
          q: "In Example 1, what is displayed when the button is clicked?",
          options: [
            "Hello World",
            "Fundamentals of Programming 2",
            "Course Name",
            "Show Answer",
          ],
          correct: 1,
        },
        {
          q: "What is the purpose of a PictureBox control?",
          options: [
            "To display text",
            "To display a graphic image",
            "To input data",
            "To close the form",
          ],
          correct: 1,
        },
        {
          q: "How do you select an image for a PictureBox?",
          options: [
            "Edit Text property",
            "Click ellipses in Image property and import",
            "Set Visible to true",
            "Change SizeMode",
          ],
          correct: 1,
        },
        {
          q: "What SizeMode value resizes the image to fit without stretching?",
          options: ["Normal", "StretchImage", "Zoom", "AutoSize"],
          correct: 2,
        },
        {
          q: "What does the Visible property do for a PictureBox?",
          options: [
            "Changes its size",
            "Determines if it's shown at runtime",
            "Sets the image",
            "Aligns the text",
          ],
          correct: 1,
        },
        {
          q: "In Example 2, what happens when clicking the cat image?",
          options: [
            'Displays "Hello World"',
            'Displays "Hello I\'m a cat"',
            "Flips the card",
            "Shows a flag",
          ],
          correct: 1,
        },
        {
          q: "In Example 3, how many PictureBox controls are used?",
          options: ["1", "2", "3", "4"],
          correct: 2,
        },
        {
          q: "What is displayed when clicking the Egypt flag in Example 3?",
          options: ["Palestine", "UAE", "Egypt", "Flag"],
          correct: 2,
        },
        {
          q: "In Example 4, what is the initial Visible setting for cardFace PictureBox?",
          options: ["True", "False", "Auto", "None"],
          correct: 1,
        },
        {
          q: "What statement closes an application's form?",
          options: [
            "this.Exit();",
            "this.Close();",
            "Form.Close();",
            "Application.Close();",
          ],
          correct: 1,
        },
        {
          q: "What starts a single-line comment in C#?",
          options: ["/*", "//", "#", "--"],
          correct: 1,
        },
        {
          q: "What encloses a block comment in C#?",
          options: ["// and //", "/* and */", "# and #", "-- and --"],
          correct: 1,
        },
        {
          q: "In the lecture, what is the email in the template?",
          options: [
            "info@example.com",
            "example@example.com",
            "support@example.com",
            "admin@example.com",
          ],
          correct: 1,
        },
        {
          q: "What button saves all files in the current project?",
          options: ["Save", "Save All", "Undo", "Redo"],
          correct: 1,
        },
        {
          q: "What does the Find button on the toolbar do?",
          options: [
            "Starts debugging",
            "Searches for text in code",
            "Creates a new project",
            "Configures platform",
          ],
          correct: 1,
        },
        {
          q: "Why should you not modify Program.cs?",
          options: [
            "It prevents compilation",
            "It could prevent execution",
            "It deletes the project",
            "It hides the form",
          ],
          correct: 1,
        },
        {
          q: "What is the default AutoSize for a Label?",
          options: ["False", "True", "None", "Auto"],
          correct: 1,
        },
        {
          q: "What TextAlign is default for Labels?",
          options: ["MiddleCenter", "TopLeft", "BottomRight", "MiddleLeft"],
          correct: 1,
        },
        {
          q: "In Example 1, what is answerLabel's initial Text?",
          options: [
            "Fundamentals of Programming 2",
            "Empty",
            "What is the name of this course?",
            "Show the Answer",
          ],
          correct: 1,
        },
        {
          q: "What is the SizeMode for flags in Example 3?",
          options: ["Normal", "StretchImage", "Zoom", "CenterImage"],
          correct: 2,
        },
        {
          q: "In Example 4, what happens when clicking Show the Card Face?",
          options: [
            "Hides back, shows face",
            "Shows back, hides face",
            "Closes form",
            "Displays message",
          ],
          correct: 0,
        },
        {
          q: "What is the web address in the template?",
          options: [
            "www.example.org",
            "www.example.com",
            "www.example.net",
            "www.example.edu",
          ],
          correct: 1,
        },
        {
          q: "What is the pushpin icon for?",
          options: [
            "Saving files",
            "Turning Auto Hide on/off",
            "Resizing windows",
            "Adding controls",
          ],
          correct: 1,
        },
        {
          q: "What is the default BorderStyle for Labels?",
          options: ["FixedSingle", "Fixed3D", "None", "Auto"],
          correct: 2,
        },
        {
          q: "How do you import an image for PictureBox?",
          options: [
            "Drag from desktop",
            "Click Import in Select Resource",
            "Edit Text property",
            "Set Visible",
          ],
          correct: 1,
        },
        {
          q: "What SizeMode clips large images?",
          options: ["Zoom", "Normal", "AutoSize", "StretchImage"],
          correct: 1,
        },
        {
          q: "What does CenterImage SizeMode do?",
          options: [
            "Resizes to fit",
            "Centers without resizing",
            "Stretches",
            "Auto resizes control",
          ],
          correct: 1,
        },
        {
          q: "To make a PictureBox clickable, what do you create?",
          options: [
            "Text property",
            "Click event handler",
            "SizeMode",
            "BorderStyle",
          ],
          correct: 1,
        },
        {
          q: "In Example 2, what is the PictureBox name?",
          options: ["imageBox", "catPictureBox", "clickableImage", "petBox"],
          correct: 1,
        },
        {
          q: "What is countryLabel's TextAlign in Example 3?",
          options: ["TopLeft", "MiddleCenter", "BottomRight", "MiddleLeft"],
          correct: 1,
        },
        {
          q: "In Example 4, what is cardBackPictureBox's initial Visible?",
          options: ["False", "True", "Hidden", "None"],
          correct: 1,
        },
        {
          q: "What statement sets Visible to false?",
          options: [
            "control.Visible = true;",
            "control.Visible = false;",
            "control.Hide();",
            "control.Show();",
          ],
          correct: 1,
        },
        {
          q: "What is a block comment example?",
          options: [
            "// Comment",
            "/* Multi line comment */",
            "# Comment",
            "-- Comment",
          ],
          correct: 1,
        },
        {
          q: "In the Hello World writing code part, what is the event handler name?",
          options: [
            "button_Click",
            "messageButton_Click",
            "form_Load",
            "app_Run",
          ],
          correct: 1,
        },
        {
          q: "How do you run an application in Visual Studio?",
          options: [
            "Press F1",
            "Press F5 or click Start Debugging",
            "Press Ctrl + S",
            "Click Save All",
          ],
          correct: 1,
        },
      ],
    },
  ],

  midtermsCategories: [
    {
      category: " Dr. Sara 2026",
      icon: "👨‍🏫",
      description: "Dr. Sara 2026  mid tirm",
      items: [
        {
          t: "أسئلة مادة PPIS — د. سارة",
          d: "مجموعة من الأسئلة والأجوبة حول مفاهيم Windows Forms و C#",
          pdf: "Visual Programming/Questions/Mid/2026/Important - PPIS - Q & A.pdf",
          questions: [
            {
              q: "How can you determine the number of items in a ListBox?",
              options: [
                "ListBox.Count",
                "ListBox.ItemCount",
                "ListBox.Length",
                "ListBox.Size",
              ],
              correct: 0,
            },
            {
              q: "What happens if the user enters a non-numeric value in a TextBox and the code tries to convert it using int.Parse(textBox1.Text)?",
              options: [
                "It will return 0",
                "It will display an error message automatically",
                "It will throw a FormatException",
                "It will ignore the input",
              ],
              correct: 2,
            },
            {
              q: "What does the TryParse() method return when it fails to convert a string to an integer?",
              options: ["-1", "Throws an exception", "False", "Null"],
              correct: 2,
            },
            {
              q: "Which property of the Label control is used to set the displayed text?",
              options: ["TextContent", "Text", "LabelText", "Content"],
              correct: 1,
            },
            {
              q: "What will happen if you use File.CreateText() on a file that already exists?",
              options: [
                "It will throw an exception",
                "It will append new text",
                "It will overwrite the file's content",
                "It will open the file in read-only mode",
              ],
              correct: 2,
            },
            {
              q: "What is the return value of the IndexOf method if the substring is not found?",
              options: ["0", "-1", "Null", "Throws an exception"],
              correct: 1,
            },
            {
              q: "If you want a specific control to be the first one to receive focus when the form loads, what should its TabIndex be?",
              options: ["0", "1", "Any positive number"],
              correct: 0,
            },
            {
              q: "What happens if you set a GroupBox's Text property to an empty string?",
              options: [
                "The GroupBox shows no title",
                "An exception is thrown",
                'The title becomes "Untitled"',
                "The GroupBox is hidden",
              ],
              correct: 0,
            },
            {
              q: 'What will be the output when the button is clicked twice?\n\nprivate int counter = 0;\nprivate void button1_Click(object sender, EventArgs e)\n{\n    counter++;\n    MessageBox.Show("Button clicked " + counter + " times");\n}',
              options: [
                "Shows 1 on first click, 2 on second click",
                "Shows 1 every time",
                "Compile-time error",
                "Nothing happens",
              ],
              correct: 0,
            },
            {
              q: "What is the default keyboard shortcut to open the Output window in Visual Studio?",
              options: ["Alt+0", "Alt+N", "Ctrl+O", "Shift+O"],
              correct: 0,
            },
            {
              q: "Which property of a ListBox is used to get the selected item?",
              options: [
                "ListBox.Items",
                "ListBox.SelectedItem",
                "ListBox.Text",
                "ListBox.Value",
              ],
              correct: 1,
            },
            {
              q: "What is the default value of the AutoSize property for a Label control?",
              options: ["True", "False", "None", "0"],
              correct: 0,
            },
            {
              q: 'What will the following code output?\n\nstring str = "C# Programming";\nstring result = str.Substring(3);\nConsole.WriteLine(result);',
              options: ["C# P", "Programming", "Progr", "C#"],
              correct: 1,
            },
            {
              q: "Which namespace is required to handle file operations like File.CreateText?",
              options: [
                "System.Collections",
                "System.IO",
                "System.Data",
                "System.Text",
              ],
              correct: 1,
            },
          ],
        },
        {
          t: "ميدتيرم 2026 - National — د. سارة",
          d: "أسئلة اختبار الميدتيرم لمادة PPIS - أحدث نموذج",
          pdf: "Visual Programming/Questions/Mid/2026/MidTerm-2026-National-Dr.Sara.pdf",
          questions: [
            {
              q: "Which property determines the tab order of a control?",
              options: ["IndexOrder", "TabOrder", "TabIndex", "Index"],
              correct: 2,
            },
            {
              q: "If the file specified in File.AppendText() does not exist, it is automatically created.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which method is used to create a color from Red, Green, and Blue values?",
              options: [
                "Color.RGB()",
                "Color.FromRgb()",
                "Color.FromArgb()",
                "Color.Rgb()",
              ],
              correct: 2,
            },
            {
              q: "In saveFileDialog control the FileName property only contains the file name, not the folder path.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What will be the output?\n\nRandom r = new Random();\nint x = r.Next(5);\nMessageBox.Show(x.ToString());\n\nPossible output:",
              options: ["0 to 4", "0 to 5", "Only 5", "1 to 4", "1 to 5"],
              correct: 0,
            },
            {
              q: 'If two RadioButtons (radioButton1 and radioButton2) are placed directly on the same Form. What will be the output of the following code when the goButton is clicked?\n\nprivate void goButton_Click(object sender, EventArgs e)\n{\n    radioButton1.Checked = true;\n    radioButton2.Checked = true;\n    if (radioButton1.Checked)\n        MessageBox.Show("Radio 1");\n    else\n        MessageBox.Show("Radio 2");\n}',
              options: [
                'A message box showing "Radio 1"',
                'A message box showing "Radio 2"',
                'A message box showing "Radio 1", then A message box showing "Radio 2"',
              ],
              correct: 1,
            },
            {
              q: "The method used to show the ColorDialog is ShowColor()",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "To perform a case-insensitive comparison, you can write String.Compare(s1, s2)",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "ListBox controls have an _______ method that erases all the items in the Items property.",
              options: [
                "Items.Erase",
                "Items.Remove",
                "Items.Clear",
                "Items.Empty",
              ],
              correct: 2,
            },
            {
              q: "What will happen if this code is in the button event handler and the button is clicked?\n\nlabel1.Focus();",
              options: [
                "The label receives focus",
                "The Focus() call does nothing",
                "The program crashes",
              ],
              correct: 1,
            },
            {
              q: "When you use the Properties window to change a control's Visible property to false at design time, the control will still be visible in the Designer.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: 'If you write: Button1.Text = "&File"; What shortcut activates the button?',
              options: ["Ctrl + F", "Alt + F", "Shift + F", "Ctrl + Alt + F"],
              correct: 1,
            },
            {
              q: 'What does the method File.CreateText("data.txt") return?',
              options: [
                "FileInfo object",
                "StreamWriter object",
                "FileStream object",
                "StreamReader object",
              ],
              correct: 1,
            },
            {
              q: "GroupBox has a Title property to display text at the top.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: 'The correct way to read a file until the end is:\n\nStreamReader reader;\nreader = File.OpenText("Test.txt");\nwhile (reader.EndOfStream != null)\n{\n    string line = reader.ReadLine();\n}',
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "The default value of the AutoSize property of a Label control is False.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What is the default value of the BorderStyle property of a Panel control?",
              options: ["FixedSingle", "None", "Fixed3D", "Dashed"],
              correct: 1,
            },
            {
              q: "The CheckedChanged event occurs only when the CheckBox is checked",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: 'What will be the output of the following code when button1 is clicked twice?\n\nprivate int counter = 0;\nprivate void button1_Click(object sender, EventArgs e)\n{\n    counter++;\n    MessageBox.Show("Button clicked " + counter + " times");\n}',
              options: [
                'A message box showing "Button clicked 1 times" on the first click, and "Button clicked 2 times" on the second click.',
                'A message box showing "Button clicked 1 times" every time.',
                'Only one A message box showing "Button clicked 2 times"',
              ],
              correct: 0,
            },
            {
              q: "If no item is selected in ListBox1 and the following code runs:\n\nMessageBox.Show(listBox1.SelectedItem.ToString());\n\nWhat will happen?",
              options: [
                "A blank MessageBox will be displayed",
                "Nothing happens",
                "It will cause a runtime error",
                'A MessageBox displays "-1"',
              ],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      category: "other Mid",
      icon: "👩‍🏫",
      description: "other Mid",
      items: [
        {
          t: "ميدتيرم 2022 — د. محمد مصطفى درويش",
          d: "أسئلة اختبار الميدتيرم لمادة البرمجة المرئية (CS341) - جامعة أسيوط",
          pdf: "Visual Programming/Questions/Mid/2022/MidTerm-2022-Questions-Visual-Programming.pdf",
          questions: [
            {
              q: "What will be the output of the following C# code?\n\nint a, b;\na = (b = 10) + 5;",
              options: [
                "b = 10, a = 5",
                "b = 15, a = 5",
                "a = 15, b = 10",
                "a = 10, b = 10",
              ],
              correct: 2,
            },
            {
              q: "Declare variables c, thisIsAVariable, q76354 and number to be of type int.",
              options: [
                "int c, thisIsAVariable, q76354, number;",
                "integer c, thisIsAVariable, q76354, number;",
                "int c; int thisIsAVariable; int q76354; int number;",
              ],
              correct: 0,
            },
            {
              q: 'Display "This is a C# app" on two lines in the console window. The first line should end with C#. Use method Console.WriteLine.',
              options: [
                'Console.WriteLine("This is a C#\\napp");',
                'Console.WriteLine("This is a C# app");',
              ],
              correct: 0,
            },
            {
              q: "The statement while is used to execute one action when a condition is true and another when that condition is false.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "PictureBoxes typically display images.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: 'If the variable number is not equal to 7, display "The variable number is not equal to 7".',
              options: [
                'if (number != 7) Console.WriteLine("The variable number is not equal to 7");',
                'if (number == 7) Console.WriteLine("The variable number is not equal to 7");',
              ],
              correct: 0,
            },
            {
              q: 'What does the following app display?\n\nusing System;\nclass Calculate\n{\n    static void Main()\n    {\n        int sum = 0;\n        int x = 1;\n        while (x <= 10)\n        {\n            sum += x;\n            x++;\n        }\n        Console.WriteLine($"The sum is: {sum}");\n    }\n}',
              options: ["The sum is: 55", "The sum is: 45", "The sum is: 10"],
              correct: 0,
            },
            {
              q: "Calculate the value of 2.5 raised to the power of 3, using the Pow method.",
              options: ["Math.Pow(2.5, 3)", "Math.Pow(3, 2.5)", "Pow(2.5, 3)"],
              correct: 0,
            },
            {
              q: "Write a statement that uses string interpolation to display the sum of the variables x and y. Assume variables x and y of type int exist and already have values.",
              options: [
                'Console.WriteLine($"The sum is {x + y}");',
                'Console.WriteLine("The sum is {x + y}");',
              ],
              correct: 0,
            },
            {
              q: "Determine the values of the variables in the following statement after it executes. Assume that when the statement begins executing, all variables are type int and have the value 5:\n\nproduct *= x++;",
              options: [
                "product = 25, x = 6",
                "product = 30, x = 6",
                "product = 25, x = 5",
              ],
              correct: 0,
            },
            {
              q: "The _______ statement, when executed in an iteration statement, skips the remaining statements in the loop body and proceeds with the next iteration of the loop.",
              options: ["break", "continue", "foreach", "while"],
              correct: 1,
            },
            {
              q: "Vary the control variable over the sequence 99, 88, 77, 66, 55, 44, 33, 22, 11, 0.",
              options: [
                "for (int i = 99; i >= 0; i -= 11)",
                "for (int i = 0; i <= 99; i += 11)",
              ],
              correct: 0,
            },
            {
              q: "The switch statement does not provide a mechanism for testing ranges of values, so you must list every value to test in a separate case label.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Use the _______ method to output the tab character.",
              options: [
                "Console.WriteLine()",
                "Console.Write('\\t')",
                'Console.Write("\\r")',
                'Console.Write("\\\'")',
              ],
              correct: 1,
            },
            {
              q: "What will be the output of the following C# code?\n\nclass Program\n{\n    public static void Main(string[] args)\n    {\n        int i, j;\n        i = (j = 5) + 10;\n        Console.WriteLine(i);\n        Console.WriteLine(j);\n        Console.ReadLine();\n    }\n}",
              options: ["15\n5", "5\n15", "10\n5"],
              correct: 0,
            },
            {
              q: "Prompt the user to enter an integer.",
              options: [
                'Console.Write("Enter an integer: ");',
                'Console.ReadLine("Enter an integer: ");',
              ],
              correct: 0,
            },
            {
              q: "Command-line arguments are separated by commas.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: 'Identify and correct the errors in the following statement:\n\nif (c < 7)\n{\n    Console.WriteLine("c is less than 7");',
              options: [
                'Missing closing parenthesis in condition and closing brace: if (c < 7) { Console.WriteLine("c is less than 7"); }',
                "No error",
              ],
              correct: 0,
            },
            {
              q: "Control properties can be modified only by writing code.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "Calculate the remainder after q is divided by divisor, and assign the result to q. Write this statement in two different ways.",
              options: [
                "q %= divisor; and q = q % divisor;",
                "q = q / divisor; and q /= divisor;",
              ],
              correct: 0,
            },
            {
              q: "C# considers the variables number and NuMbEr to be identical.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "The break statement is required in every case of a switch statement.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "Assign the sum of x and y to z, and increment x by 1 with ++. Use only one statement and ensure that the original value of x is used in the statement.",
              options: ["z = x++ + y;", "z = ++x + y;"],
              correct: 0,
            },
            {
              q: "A Form's background color is set using the BackColor property.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Specifying the order in which statements (actions) execute in an app is called program control.",
              options: ["True", "False"],
              correct: 0,
            },
          ],
        },
        {
          t: "ميدتيرم 2023 — د. أحمد حسني",
          d: "أسئلة اختبار الميدتيرم لمادة البرمجة المرئية (CS341) - جامعة أسيوط (عام + علوم)",
          pdf: "files/Visual Programming/Questions/Mid/2023/MidTerm-2023-Questions-Visual-Programming.pdf",
          questions: [
            {
              q: "Which of the following is considered Specialized Methods in C#?",
              options: [
                "Static method",
                "Operation method",
                "Constructor",
                "Operator method",
                "ToString method",
                "Protected method",
              ],
              correct: 3,
            },
            {
              q: "What of the following tools can be used to debug the network requests from the browser?",
              options: [
                "Setting - Network Tab",
                "Developer Tools - Network Tab",
                "Developer Tools - Source Tab",
                "Browser start page",
                "Browser status bar",
              ],
              correct: 1,
            },
            {
              q: "OOP Concepts includes (Choose all that apply)",
              options: [
                "Inheritance and Abstraction",
                "Encapsulation",
                "Classes",
                "Polymorphism",
              ],
              correct: 0, // يشمل مفاهيم الـ OOP البرمجية (Inheritance, Abstraction, Encapsulation, Polymorphism)
            },
            {
              q: "Server program can (Choose all that apply)",
              options: [
                "Generate Reasonable Response",
                "Receive Responses",
                "Receive Requests",
                "Send Requests",
              ],
              correct: 2,
            },
            {
              q: "C# supports multiple inheritance",
              options: [
                "False, every class can have only one parent or none",
                "True, every class must have at least one parent",
                "True, every class must inherit from a base class",
                "False, every class must have exactly one parent",
              ],
              correct: 0,
            },
            {
              q: "Using top-level statement in C# means",
              options: [
                "Using namespaces starts at the beginning of the file",
                "None of the above",
                "Main method exists implicitly",
                "There is no main method",
                "Main method exists explicitly",
              ],
              correct: 2,
            },
            {
              q: "In Web development, HSTS mode",
              options: [
                "Enable using encrypted requests and HTTPS as an option",
                "Enforces all requests to use HTTPS",
                "Enforces all websites to use HTTPS",
                "Enable the client to receive invalid certificates",
                "None",
              ],
              correct: 1,
            },
            {
              q: "What is True in relevant to Read-only attributes in the class?",
              options: [
                "They cannot change after compile time.",
                "The data never changes.",
                "They can only be calculated or initialized at the time of instantiation",
                "They can change after compile time.",
              ],
              correct: 2,
            },
            {
              q: "Which of the following can be a class name based on best practices and naming conventions?",
              options: ["Car", "car", "carType", "BMW", "CAR"],
              correct: 0,
            },
            {
              q: "Which of the following is NOT a C# keyword?",
              options: ["None", "init", "static", "var", "record"],
              correct: 0,
            },
            {
              q: "To enable Razor pages in your .NET web application, which of the following methods is invoked in Program.cs?",
              options: [
                "None",
                "app.Services.AddRazorPages();",
                "app.UseDefaultFiles();",
                "builder.Services.AddRazorPages();",
                "builder.MapRazorPages();",
                "app.UseStaticFiles();",
              ],
              correct: 3,
            },
            {
              q: "For Web request, Put the request journey in the correct order:\n1. DNS request asking for IP\n2. DNS response with an IP\n3. HTTP request to the server\n4. Webserver routing the request to correct Server Application",
              options: [
                "1 -> 2 -> 3 -> 4",
                "2 -> 1 -> 3 -> 4",
                "1 -> 3 -> 2 -> 4",
                "3 -> 1 -> 2 -> 4",
              ],
              correct: 0,
            },
            {
              q: "What is the output of the following code? Consider `-` as new line:\n\npublic class Person\n{\n    public double Age;\n    public static int PersonCount;\n}\n\npublic class Program\n{\n    static void Main(string[] a)\n    {\n        Person p1 = new();\n        Person p2 = new();\n        p1.Age = 20;\n        p2.PersonCount = 3;\n        Console.WriteLine(p1.PersonCount);\n        Console.WriteLine(p2.Age);\n    }\n}",
              options: ["0-20", "Error", "3-0", "0-0", "3-20"],
              correct: 2,
            },
            {
              q: "Common Type System (CTS) in .NET refers to (Choose all that apply)",
              options: [
                "event",
                "enumeration",
                "class",
                "structure",
                "interface",
                "delegate",
              ],
              correct: 2,
            },
            {
              q: "Which of the following URL components constructs the shortest URL that can be used to do a web request?",
              options: [
                "Scheme - Domain - Query String",
                "Scheme - Domain - Fragment",
                "Scheme - Domain - Path",
                "Scheme - Domain",
                "All of the above",
              ],
              correct: 3,
            },
            {
              q: 'What is the output of the following code when the user inputs nothing (just pressing enter)? Consider `-` refers to a new line:\n\nConsole.WriteLine("Before parsing");\nConsole.Write("What is your age? ");\nstring? input = Console.ReadLine();\ntry\n{\n    int age = int.Parse(input);\n    Console.WriteLine($"You are {age} years old.");\n}\ncatch\n{\n    Console.WriteLine("The age you entered is not valid");\n}\nConsole.WriteLine("After parsing");',
              options: [
                "Before Parsing - What is your age? - You are 0 years old - After parsing",
                "None of the above",
                "Error",
                "Before Parsing - What is your age? - The age you entered is not valid - After parsing",
              ],
              correct: 3,
            },
            {
              q: 'Given the following method implementation, which of the following is a right method invocation syntax? (choose all that apply)\n\npublic void Method1(string command = "Run!", double number = 0)\n{\n    Console.WriteLine($"{command}, with {number}");\n}',
              options: [
                "Method1(number: 20);",
                'Method1(number = 20, command = "Test");',
                "Method1(number = 20);",
                'Method1(number: 20, command: "Test");',
                "Method1();",
              ],
              correct: 0,
            },
            {
              q: 'Considering a main method that contains the following lines, what is the output?\n\nstring name = "Challenge";\nConsole.WriteLine($"""Hello, {{{name}}}!""");',
              options: [
                "Hello, {Challenge}!",
                "Hello, {{Challenge}}!",
                "error",
                "Hello, {{{Challenge}}}!",
                "Hello, Challenge!",
              ],
              correct: 0,
            },
          ],
        },
        {
          t: "ميدتيرم 2024 - National — البرمجة المرئية",
          d: "اختبار الميدتيرم لمادة البرمجة المرئية - البرنامج الأهلي 2024",
          pdf: "files/Visual Programming/Questions/Mid/2024/MidTerm-2024-National-Visual-Programming.pdf",
          questions: [
            {
              q: "How can you change the text color of a GroupBox's title?",
              options: [
                "By setting the ForeColor property",
                "By changing the BackColor property",
                "GroupBox title color cannot be changed",
                "By setting the TextColor property",
              ],
              correct: 0,
            },
            {
              q: "To store items in a ListBox, you add them to the control's Text property.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "To handle the click event of a PictureBox named pictureBox1, which of the following is the correct method?",
              options: [
                "private void pictureBox1_Click(object sender, EventArgs e)",
                "public void PictureBox1Click(object sender)",
                "private void OnClick_PictureBox1(object sender, EventArgs e)",
                "private void Click_PictureBox1(object sender, MouseEventArgs e)",
              ],
              correct: 0,
            },
            {
              q: "Which of the following statements allows you to select the item at index 2 in a ListBox?",
              options: [
                "ListBox.SelectedIndex = 2;",
                "ListBox.Items[2].Selected = true;",
                "ListBox.Select(2);",
                "ListBox.SelectItem(2);",
              ],
              correct: 0,
            },
            {
              q: 'string str1 = "hello";\nstring str2 = "HELLO";\nString.Compare(str1, str2, true);\n\nThe method returns:',
              options: ["0", "True", "False", "Error"],
              correct: 0,
            },
            {
              q: "How can you determine the number of items in a ListBox?",
              options: [
                "ListBox.Count",
                "ListBox.Items.Count",
                "ListBox.Length",
                "ListBox.Size",
              ],
              correct: 1,
            },
            {
              q: "The ShowDialog() method will throw an exception if no file is selected by the user.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "A(n) _______ can have an uninitialized value passed into it, but it must be set to some value before the method it belongs to finishes executing.",
              options: [
                "output parameter",
                "reference parameter",
                "default parameter",
                "input parameter",
              ],
              correct: 0,
            },
            {
              q: "How can you concatenate text from two TextBox controls (textBox1 and textBox2) and display the result in a Label (label1)?",
              options: [
                "label1.Text = textBox1.Add(textBox2);",
                "label1.Text = textBox1.Text + textBox2.Text;",
                "label1.Text = textBox1.Text & textBox2.Text;",
                "label1.Text = textBox1.Append(textBox2);",
              ],
              correct: 1,
            },
            {
              q: "What will happen if you use File.CreateText on a file that already exists?",
              options: [
                "It will throw an exception.",
                "It will add a new text to the file.",
                "It will overwrite the file's content.",
                "It will open the file in read-only mode.",
              ],
              correct: 2,
            },
            {
              q: "How can you programmatically set the access key for a button named button1?",
              options: [
                'button1.Text = "&File";',
                'button1.AccessKey = "F";',
                "button1.ShortcutKeys = Keys.F;",
                'button1.Key = "&File";',
              ],
              correct: 0,
            },
            {
              q: "Multiple CheckBox controls in the same GroupBox can be selected at the same time.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "What is the visual indicator of an access key on a button?",
              options: [
                "The letter is bold",
                "The letter is highlighted",
                "The button text is grayed out",
                "The letter is underlined",
              ],
              correct: 3,
            },
            {
              q: "Which method is used to generate a random floating-point number between 0.0 (inclusive) and 1.0 (exclusive)?",
              options: [
                "random.NextFloat()",
                "random.NextDouble()",
                "random.Double()",
                "random.Float()",
              ],
              correct: 1,
            },
            {
              q: "You add your own code to the Program.cs file as you develop an application.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "How can you programmatically set focus to a TextBox control named textBox1?",
              options: [
                "textBox1.SetFocus();",
                "textBox1.Focus();",
                "SetFocus(textBox1);",
                "textBox1.Active = true;",
              ],
              correct: 1,
            },
            {
              q: "What does the SizeMode property of the PictureBox control determine?",
              options: [
                "The position of the PictureBox on the form",
                "How the image is displayed within the PictureBox",
                "The size of the PictureBox itself",
                "The border size of the PictureBox",
              ],
              correct: 1,
            },
            {
              q: "How can you check which RadioButton is selected in a group?",
              options: [
                "Iterate through each RadioButton and check its Checked property.",
                "Use groupBox.SelectedRadioButton.",
                "Use radioButton.GroupCheck.",
                "Call CheckedRadioButton() method.",
              ],
              correct: 0,
            },
            {
              q: "How can you programmatically adjust the Label size automatically to fit the content in code?",
              options: [
                "label1.AutoSize = 1;",
                'label1.AutoSize = "True";',
                "label1.AutoSize = true;",
                "label1.SetAutoSize(true);",
              ],
              correct: 2,
            },
            {
              q: "Which property is used to set the tab order of a control?",
              options: ["TabPosition", "TabControl", "TabIndex", "TabOrder"],
              correct: 2,
            },
          ],
        },
      ],
    },
  ],
  finalsCategories: [
    {
      category: " Dr. Sara 2026",
      icon: "📅",
      description: "Dr. Sara 2026  final ",
      items: [
        {
          t: "فاينل 2026 - العام والساعات المعتمدة — البرمجة المرئية",
          d: "اختبار الفاينل لمادة البرمجة المرئية - العام والساعات المعتمدة 2026",
          pdf: "Visual Programming/Questions/Final/2026/Final 2026 - General & Credit - Visual Programming.pdf",
          questions: [
            {
              q: 'What will be displayed if the check is removed from the CheckBox?\n\nprivate void checkBox1_CheckedChanged(object sender, EventArgs e)\n{\n    if (!checkBox1.Checked)\n        MessageBox.Show("Please check me!");\n}',
              options: [
                'MessageBox.Show("Please check me!")',
                "Please check me!",
                "No message until user checks it",
              ],
              correct: 1,
            },
            {
              q: "Trim() method removes whitespace in the middle of a string.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "By default, a label's text is aligned with the top and left edges of the label's bounding box.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which property of a ScrollBar determines the current position of the scroll box?",
              options: ["Position", "Location", "CurrentScroll", "Value"],
              correct: 3,
            },
            {
              q: 'If the user clicks the button twice. What happens?\n\nprivate void button1_Click(object sender, EventArgs e)\n{\n    button1.Enabled = false;\n    MessageBox.Show("Clicked");\n}',
              options: [
                "Two MessageBoxes appear",
                "Only one MessageBox appears",
                "Error occurs",
                "No MessageBox appears",
              ],
              correct: 1,
            },
            {
              q: "The property that determines how a background image is displayed on a form is:",
              options: [
                "BackgroundLayout",
                "BackgroundImageDisplayMode",
                "BackgroundImageLayout",
                "BackgroundImageStyle",
              ],
              correct: 2,
            },
            {
              q: "Which property of ToolTip sets the time it remains visible?",
              options: [
                "InitialDelay",
                "AutoPopDelay",
                "ReshowDelay",
                "ShowAlways",
              ],
              correct: 1,
            },
            {
              q: "You can select all text in a TextBox by the following code:\nTextBox.SelectionStart = 0;\nTextBox.SelectionLength = TextBox.Length;",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "How do you add items to a ComboBox at runtime?",
              options: [
                'comboBox1.Add("Item1");',
                'comboBox1.Items.Add("Item1");',
                'comboBox1.Items.Insert("Item1");',
                'comboBox1.Insert("Item1");',
              ],
              correct: 1,
            },
            {
              q: "Which of the following is a correct use of using with a file?",
              options: [
                'using (File file = new File("data.txt")) { file.WriteLine("Hello"); }',
                'using (StreamWriter sw = new StreamWriter("data.txt")) { sw.WriteLine("Hello"); }',
                'using StreamWriter("data.txt") { WriteLine("Hello"); }',
                'using ("data.txt") { WriteLine("Hello"); }',
              ],
              correct: 1,
            },
            {
              q: "char.Parse(textBox1.Text) is safe even if the TextBox is empty.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "Which statement is used to add a new TabPage at runtime?",
              options: [
                "tabControl1.Controls.Add(tabPage1);",
                "tabControl1.TabPages.Add(tabPage1);",
                "tabControl1.Items.Add(tabPage1);",
                "tabControl1.Tab.Add(tabPage1);",
              ],
              correct: 1,
            },
            {
              q: "What does String.Compare(str1, str2) return if both strings are equal?",
              options: ["True", "0", "1", "False"],
              correct: 1,
            },
            {
              q: "Which of the following is a valid use of LastIndexOf() with a TextBox?",
              options: [
                'String.textBox1.LastIndexOf("a")',
                'textBox1.LastIndexOf("a")',
                'textBox1.Text.LastIndexOf("a")',
                'String.LastIndexOf(textBox1, "a")',
              ],
              correct: 2,
            },
            {
              q: "A(n) _______ can have an uninitialized value passed into it, but it must be set to some value before the method it belongs to finishes executing.",
              options: [
                "output parameter",
                "reference parameter",
                "default parameter",
                "input parameter",
              ],
              correct: 0,
            },
            {
              q: "To give a menu item in MenuStrip the ability to become checked or unchecked when it is clicked by the user, you set the item's Checked property to True.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "In MenuStrip, what happens if ShowShortcutKeys property is set to false?",
              options: [
                "The menu item cannot be clicked",
                "The keyboard shortcut no longer works",
                "The shortcut key text is not displayed next to the menu item",
                "The menu item is hidden",
              ],
              correct: 2,
            },
            {
              q: "The Exists method can be used without creating an object of the File class.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "What happens if the file specified in File.AppendText() does not exist?",
              options: [
                "An exception is thrown",
                "The file is created",
                "AppendText() calls does nothing",
              ],
              correct: 1,
            },
            {
              q: 'What will happen when this code is executed in Form1?\n\nForm2 f2 = new Form2();\nf2.Show();\nMessageBox.Show("Form2 opened");',
              options: [
                "Only Form2 opens, no message box",
                "Message box shows, then Form2 opens",
                "Both Form2 and message box appear simultaneously",
                "Form2 opens, and the message box appears after Form2 is closed",
              ],
              correct: 2,
            },
            {
              q: 'If two RadioButtons (radioButton1 and radioButton2) are placed directly on the same Form:\n\nradioButton1.Checked = true;\nradioButton2.Checked = true;\nif (radioButton1.Checked)\n    MessageBox.Show("Radio 1");\nelse\n    MessageBox.Show("Radio 2");\n\nWhat will be the output?',
              options: ["Radio 1", "Radio 2", "Both messages appear", "Error"],
              correct: 1,
            },
            {
              q: "The default color of ColorDialog.Color (if the user does not select a color and clicks OK) is Black.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "What will happen if this code is in the button event handler and the button is clicked?\n\nlabel1.Focus();",
              options: [
                "The label receives focus",
                "The Focus() call does nothing",
                "The program crashes",
              ],
              correct: 1,
            },
            {
              q: "How do you display a blinking error icon for a TextBox named textBox1?",
              options: [
                'errorProvider1.SetError(textBox1, "Invalid input");',
                'textBox1.Error("Invalid input");',
                'errorProvider1.textBox1.Show("Invalid input");',
                'textBox1.SetError("Invalid input");',
              ],
              correct: 0,
            },
            {
              q: "Which property sets the size of images in the ImageList?",
              options: ["Size", "ImageSize", "IconSize", "SizeMode"],
              correct: 1,
            },
            {
              q: "Which value of the SizeMode property should you use to make an image in a PictureBox fit the control's size proportionally?",
              options: ["AutoSize", "CenterImage", "Normal", "Zoom"],
              correct: 3,
            },
            {
              q: "To retrieve the full path of the selected file after the user clicks OK with the Open dialog box, you can write openFileDialog1.Name",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "MessageBox.Show(radioButton1.Checked.ToString());\nIf radioButton1 is not selected, what will be the output?",
              options: [
                "MessageBox shows True",
                "MessageBox shows False",
                "MessageBox shows null",
                "Error",
              ],
              correct: 1,
            },
            {
              q: "What does the first parameter of Insert() represent?",
              options: [
                "Length of string",
                "Index position",
                "Number of characters",
                "string to be inserted",
              ],
              correct: 1,
            },
            {
              q: "What will be the output?\n\nRandom r = new Random();\nint x = r.Next(6);\nMessageBox.Show(x.ToString());\n\nPossible output:",
              options: ["0 to 5", "0 to 6", "Only 6", "1 to 5", "1 to 6"],
              correct: 0,
            },
            {
              q: "Controls with a higher TabIndex value receive focus before those with lower values.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "If comboBox has no items, and code calls: comboBox1.SelectedItem.ToString(), what will be the output?",
              options: ["Null", "Empty string", "0", "Runtime Error"],
              correct: 3,
            },
            {
              q: "What is the default value of the BorderStyle property for a Label control?",
              options: ["FixedSingle", "Fixed3D", "None"],
              correct: 2,
            },
            {
              q: 'When the button is clicked, a message box shows "20":\n\nprivate void button1_Click(object sender, EventArgs e)\n{\n    int x;\n    Display(ref x);\n    MessageBox.Show(x.ToString());\n}\n\nprivate void Display(ref int x)\n{\n    x = 20;\n}',
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which of the following is correct to extract the first 5 characters of a string?",
              options: [
                "Substring(0, 5)",
                "Substring(5, 0)",
                "Substring(5)",
                "Substring(1, 5)",
              ],
              correct: 0,
            },
            {
              q: "The Load event is executed when the form is opened, and if the form is hidden and shown again, the Load event runs again.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "Clearing a selection of Items in listBox manually by setting SelectedIndex = -1 in code always triggers SelectedIndexChanged.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "In a Windows Forms application, what is the visual indicator of an access key on a button?",
              options: [
                "The letter is bold",
                "The letter is underlined",
                "The letter is highlighted",
                "The letter is grayed out",
              ],
              correct: 1,
            },
            {
              q: "The Timer control executes code at regular intervals defined by its Time property.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What is the type of result in this code?\n\nstring s = \"Hello, World\";\nvar result = s.Split(', ');",
              options: ["string", "string[]", "List<string>", "char[]"],
              correct: 1,
            },
            {
              q: "Can a PictureBox control display multiple images at once?",
              options: ["Yes, using a list", "Yes, using an array", "No"],
              correct: 2,
            },
            {
              q: "Assigning one structure variable to another creates a copy of the structure in C#.",
              options: ["True", "False"],
              correct: 0,
            },
          ],
        },
        {
          t: "فاينل 2026 - البرنامج الأهلي - د. سارة — البرمجة المرئية",
          d: "اختبار الفاينل لمادة البرمجة المرئية - البرنامج الأهلي 2026 (د. سارة)",
          pdf: "Visual Programming/Questions/Final/2026/Final 2026 - National - Visual Programming - Dr.Sara.pdf",
          questions: [
            {
              q: "How do you split a string str by multiple delimiters?",
              options: [
                'str.Split(",", ";")',
                "str.Split(new char[] {',', ';'})",
                'str.Split(new string[]{",", ";"})',
              ],
              correct: 1,
            },
            {
              q: "Which of the following is TRUE about modal forms?",
              options: [
                "Modal forms allow interaction with both the modal form and the parent form.",
                "Modal forms prevent the user from interacting with the parent form until the modal form is closed.",
                "Modal forms automatically close the parent form.",
              ],
              correct: 1,
            },
            {
              q: 'If you have a button with the Text property set to "&Open", which key combination will activate it?',
              options: ["Alt + O", "Ctrl + O", "Shift + O", "Ctrl + Alt + O"],
              correct: 0,
            },
            {
              q: "To give a menu item in MenuStrip the ability to become checked or unchecked when it is clicked by the user, you set the item's Checked property to True.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: 'What will be the output?\n\nstring str1 = "Hello";\nchar str2 = str1.Remove(1);\nMessageBox.Show(str2);',
              options: ["H", "ello", "Error", "Hllo"],
              correct: 2,
            },
            {
              q: "What happens if the specified file already exists when using File.CreateText()?",
              options: [
                "The file is appended",
                "The file is overwritten",
                "An exception is thrown",
              ],
              correct: 1,
            },
            {
              q: "What does the int.TryParse() method return when it fails to convert a string to an integer?",
              options: [
                "It returns -1",
                "It throws an exception",
                "It returns false",
                "It returns null",
              ],
              correct: 2,
            },
            {
              q: "Which method of the ErrorProvider component is used to display an error message for a specific control?",
              options: ["SetError", "ShowError", "DisplayError", "SetMessage"],
              correct: 0,
            },
            {
              q: "The File.AppendText method creates a new file if the specified file does not exist.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Setting TabIndex to a -1 will make the control the first to receive focus when the form Load.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "To set form's BackColor to default color, we use:",
              options: [
                "SystemColors.Default",
                "System.Colors",
                "SystemColors.Control",
                "System.Colors.Default",
              ],
              correct: 2,
            },
            {
              q: 'What will happen if this code runs in Form1?\n\nForm2 f2 = new Form2();\nf2.ShowDialog();\nf2.Text = "New Title";',
              options: [
                'Form2 title is immediately "New Title"',
                "Form2 opens with default title; after closing, title changes",
                "Error",
              ],
              correct: 1,
            },
            {
              q: 'What will be the output of the following code when the button is clicked twice?\n\nprivate int counter = 0;\nprivate void button1_Click(object sender, EventArgs e)\n{\n    counter++;\n    MessageBox.Show("Button clicked " + counter + " times");\n}',
              options: [
                'A message box showing "Button clicked 1 times" on the first click, and "Button clicked 2 times" on the second click.',
                'A message box showing "Button clicked 1 times" every time',
              ],
              correct: 0,
            },
            {
              q: 'int num = 100;\nusing (StreamWriter sw = new StreamWriter("numbers.txt", append: true))\n{\n    sw.WriteLine(num);\n}\n\nWhat happens here?',
              options: [
                "Number 100 is appended to the file, and the file is closed automatically.",
                "Number 100 is appended to the file, and the file remains open after writing.",
                "Causes runtime error",
              ],
              correct: 0,
            },
            {
              q: "Which method of the Random class generates a floating-point number between 0.0 (inclusive) and 1.0 (exclusive)?",
              options: ["Next()", "NextDouble()", "Double()", "NextFloat()"],
              correct: 1,
            },
            {
              q: "string s = \"banana\";\nint index = s.LastIndexOf('a', 3);\n\nWhat is the value of index?",
              options: ["1", "3", "5", "-1"],
              correct: 1,
            },
            {
              q: "How do you get the text of the currently selected item in comboBox1?",
              options: [
                "comboBox1.SelectedItem.ToString()",
                "comboBox1.SelectedText",
                "comboBox1.Text",
                "Both comboBox1.Text and comboBox1.SelectedItem.ToString()",
              ],
              correct: 3,
            },
            {
              q: "Which of the following properties is not available in Panel control?",
              options: ["BackColor", "BorderStyle", "Text", "Visible"],
              correct: 2,
            },
            {
              q: 'What will be the output?\n\nstring s = "Hello World";\nMessageBox.Show(s.Substring(6));',
              options: ["Hello", "World", "W"],
              correct: 1,
            },
            {
              q: "When you use the Properties window to change a control's Visible property to false at design time, the control will still be visible in the Designer.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "How do you close a form programmatically?",
              options: [
                "Form.Close();",
                "this.Close();",
                "Form.Exit();",
                "Application.Close();",
              ],
              correct: 1,
            },
            {
              q: 'The correct way to read a file until the end is:\n\nStreamReader sr = File.OpenText("data.txt");\nwhile (sr.EndOfStream != true)\n{\n    string line = sr.ReadLine();\n    MessageBox.Show(line);\n}\nsr.Close();',
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which of the following is correct for declaring a jagged array of integers?",
              options: [
                "int[][] arr = new int[][];",
                "int[][] arr = new int[3][];",
                "int[][] arr = new int[][3];",
                "int[,] arr = new int[3][3];",
              ],
              correct: 1,
            },
            {
              q: "The Load event takes place after the form is displayed on the screen.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What happens if the DropDownStyle property of a ComboBox is set to Simple?",
              options: [
                "The ComboBox displays a list of items that is always visible.",
                "The ComboBox cannot display a list of items until the user clicks the down arrow.",
                "The ComboBox allows only pre-defined items to be selected.",
                "The ComboBox becomes non-editable.",
              ],
              correct: 0,
            },
            {
              q: "What does the SizeMode property of the PictureBox control determine?",
              options: [
                "The position of the control on the form",
                "How the image is displayed within the PictureBox",
                "The size of the PictureBox itself",
                "The border style of the PictureBox",
              ],
              correct: 1,
            },
            {
              q: "Increasing AutomaticDelay will make ToolTips appear faster.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: 'What will be the output?\n\nstring a = "Hello";\nstring b = "hello";\nint result = String.Compare(a, b, true);\nMessageBox.Show(result.ToString());',
              options: ["-1", "0", "1"],
              correct: 1,
            },
            {
              q: "What are the two types of ScrollBars available in C# Windows Forms?",
              options: [
                "VerticalScroll and HorizontalScroll",
                "HScrollBar and VScrollBar",
                "AutoScroll and ManualScroll",
                "HSBar and VSBar",
              ],
              correct: 1,
            },
            {
              q: "Clearing a selection of Items in listBox manually by setting SelectedIndex = -1 in code always triggers SelectedIndexChanged.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "How can you determine the number of items in a ListBox?",
              options: [
                "ListBox.Count",
                "ListBox.Items.Count",
                "ListBox.Item.Count",
                "ListBox.Size",
              ],
              correct: 1,
            },
            {
              q: "What does the Trim() method do in C#?",
              options: [
                "Removes all spaces in a string",
                "Removes leading and trailing spaces",
                "Removes only trailing spaces",
                "Removes only leading spaces",
              ],
              correct: 1,
            },
            {
              q: "What is the default value of the Checked property of a CheckBox?",
              options: ["True", "False", "null"],
              correct: 1,
            },
            {
              q: "ToolTips are visible only when the control is clicked.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "Does Insert() method modify the original string?",
              options: ["Yes", "No"],
              correct: 1,
            },
            {
              q: "What is the default value of ImageSize property in ImageList control?",
              options: ["16X16", "32X32", "64X64", "128X128"],
              correct: 0,
            },
            {
              q: "Which property of a TabControl contains the collection of tabs?",
              options: ["Tabs", "TabPages", "TabCollection", "Pages"],
              correct: 1,
            },
            {
              q: "The default behavior of a TextBox is to select all text when it gains focus.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What will happen if this code is in button2 event handler and the button is clicked?\n\nbutton1.Focus();\ntextBox1.Focus();",
              options: [
                "Both control will have the focus at the same time",
                "only button1 will have focus",
                "only textbox1 will have focus",
                "button1 will have focus, and by clicking Tab the textbox1 will have focus",
              ],
              correct: 2,
            },
            {
              q: "The default value of the AutoSize property of a Label control is False.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "If an error is set using the ErrorProvider, it is automatically cleared when the control's Validating event succeeds.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "When the button is clicked many times without closing the form, what will be displayed in textBox1?\n\nTimer Properties: Interval = 1000\nint i = 10;\n\nprivate void button1_Click(object sender, EventArgs e)\n{\n    timer1.Start();\n}\n\nprivate void timer1_Tick(object sender, EventArgs e)\n{\n    i--;\n    textBox1.Text = i.ToString();\n    if (i == 7)\n        timer1.Stop();\n}",
              options: [
                "9 for each click",
                "9 then 8 then 7 for each click",
                "9 for first click, 8 for second click, 7 for third click",
                "9 then 8 then 7 for first click, 6, 5, 4, 3, 2, 1, 0, ... for the second click",
              ],
              correct: 3,
            },
            {
              q: 'private void checkBox1_CheckedChanged(object sender, EventArgs e)\n{\n    MessageBox.Show("Checked ");\n}\n\nWhen the checkBox1 is unchecked by the user, what will happen?',
              options: ["MessageBox Show Checked", "Nothing happens", "Error"],
              correct: 0,
            },
            {
              q: 'openFileDialog1.FileName = "test.txt";\nopenFileDialog1.ShowDialog();\n\nWhat is the effect of setting FileName before ShowDialog()?',
              options: [
                "Opens the file automatically",
                "Shows the default file name (test.txt) in the open dialog",
                "Causes an error",
                "Prevents file selection",
              ],
              correct: 1,
            },
          ],
        },
        {
          t: "فاينل 2026 - برنامج PPIS - د. سارة — البرمجة المرئية",
          d: "اختبار الفاينل لمادة البرمجة المرئية - برنامج PPIS 2026 (د. سارة)",
          pdf: "Visual Programming/Questions/Final/2026/Final 2026 - PPIS - Dr. Sara.pdf",
          questions: [
            {
              q: "Which method is used to programmatically add an item to a ListBox?",
              options: [
                "ListBox.AddItem()",
                "ListBox.Items.Add()",
                "ListBox.Append()",
                "ListBox.Items.Insert()",
              ],
              correct: 1,
            },
            {
              q: 'Which of the following is the correct syntax for TryParse on a string value "45.67" to parse as a double?',
              options: [
                'double.TryParse(out result, "45.67")',
                'double.Parse("45.67", result)',
                'TryParse("45.67", result)',
                'double.TryParse("45.67", out result)',
              ],
              correct: 3,
            },
            {
              q: "Which of the following methods would you use to add new lines to a file without overwriting its contents?",
              options: [
                "File.AppendText",
                "File.CreateText",
                "File.WriteAllText",
                "File.ReadAllText",
              ],
              correct: 0,
            },
            {
              q: "To close an application's form in code, use the statement this.Close();",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which property controls how the background image is displayed on the form?",
              options: [
                "ImageLayout",
                "SizeMode",
                "BackgroundImageLayout",
                "Image",
              ],
              correct: 2,
            },
            {
              q: "What will be the output of the following code?\nstring str = \"Hello\"; MessageBox.Show(str.IndexOf('h').ToString());",
              options: ["0", "1", "-1", "Error"],
              correct: 2,
            },
            {
              q: "The Load event takes place after the form is displayed on the screen.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "How can you programmatically set focus to a TextBox control named textBox1?",
              options: [
                "textBox1.SetFocus()",
                "textBox1.Focus()",
                "SetFocus(textBox1)",
                "textBox1.Focus=true",
              ],
              correct: 1,
            },
            {
              q: "When you call a string object's Split method, the method divides the string into substrings and returns them as an array of strings.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which property of the GroupBox is used to set the title displayed at the top of the box?",
              options: ["Text", "Title", "Header", "Name"],
              correct: 0,
            },
            {
              q: "Which property controls how the image is sized or stretched within the PictureBox?",
              options: ["AutoSize", "ImageMode", "Stretch", "SizeMode"],
              correct: 3,
            },
            {
              q: "EndOfFile property is used to checks whether the end of the file has been reached?",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What is returned when the user clicks the Open button in OpenFileDialog?",
              options: [
                "Dialog.Open",
                "Dialog.OK",
                "DialogResult.Open",
                "DialogResult.OK",
              ],
              correct: 3,
            },
            {
              q: "The .... file format is commonly used to export spreadsheet data to a text file.",
              options: ["SDV", "CSV", "XML", "PDF"],
              correct: 1,
            },
            {
              q: "In a Windows Forms application, where should you declare a field variable if you need to access it from multiple event handlers (e.g., button clicks)?",
              options: [
                "Inside each method where it is used",
                "As a parameter in each method",
                "At the class level, outside any methods",
                "In the Main method",
              ],
              correct: 2,
            },
            {
              q: "Forms and most controls have a ForeColor property that allows you to change the object's background color.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "rand.Next(10) returns",
              options: ["0 to 9", "1 to 10", "0 to 10", "-10 to 10"],
              correct: 0,
            },
            {
              q: "String.Compare() returns a Boolean value.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: 'What will be the output of the following code?\ndouble x = 123.41; MessageBox.Show(x.ToString("n1"));',
              options: ["123.41", "123.4", "$123.41", "$123.4"],
              correct: 1,
            },
            {
              q: "Trim() removes whitespace in the middle of a string.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: 'What will be the output of the following code?\nstring str1 = "Hello"; string str2 = str1.Remove(1); MessageBox.Show(str2);',
              options: ["H", "ello", "Hllo", "e"],
              correct: 0,
            },
            {
              q: "You add your own code to the Program.cs file as you develop an application.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What would you use to determine if any RadioButton in a group is selected?",
              options: [
                "if (radioButton.Checked == true)",
                'if (radioButton.Text == "Selected")',
                "radioButton.IsChecked",
                "radioButton.Selected == true",
              ],
              correct: 0,
            },
            {
              q: "Which of the following is NOT a valid value for the BorderStyle property of a Label control?",
              options: ["FixedSingle", "Fixed3D", "FixedDouble", "None"],
              correct: 2,
            },
            {
              q: "The default value of the AutoSize property of a Label control is True.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which property hides the characters typed in a TextBox (for passwords)?",
              options: [
                "Hidden",
                "UseSystemPasswordChar",
                "Password",
                "PasswordChar",
              ],
              correct: 3,
            },
            {
              q: "You can clear the contents of a TextBox control in the same way that you clear the contents of a Label control.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which of the following statements allows you to select the item at index 2 in a ListBox?",
              options: [
                "ListBox.SelectItem(2);",
                "ListBox.Items[2].Selected = true;",
                "ListBox.Select(2);",
                "ListBox.SelectedIndex = 2;",
              ],
              correct: 3,
            },
            {
              q: "Consider the code for checkBox1_CheckedChanged. How many times is the message shown when the user checks and then unchecks the CheckBox1?",
              options: ["0", "1", "2", "None of these"],
              correct: 2,
            },
            {
              q: "Multiple RadioButton controls in the same GroupBox can be selected at the same time.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What is the output of the following code?\nstatic void Test(int a, int b = 5, int c = 3) { Console.WriteLine(a + b + c); }\n...\nTest(2, 3);",
              options: ["5", "8", "10", "Error"],
              correct: 1,
            },
            {
              q: "Which of the following is NOT considered an overload of the method void Sum(int number1, int number2)?",
              options: [
                "void Sum(int number1)",
                "int Sum(int number1, int number2)",
                "void Sum(double number1, int number2)",
                "void Sum(double number1, double number2)",
              ],
              correct: 1,
            },
            {
              q: "Which of the following is NOT the correct way to define and initialize an array of 3 integers?",
              options: [
                "int[] a = {5, 3, 4};",
                "int[] a; a = new int[3]{5, 3, 4};",
                "int[] a; a = new int[3]; a[0]=5; a[1]=3; a[2]=4;",
                "int[] a; a = new int{5, 3, 4};",
              ],
              correct: 3,
            },
            {
              q: "What is the output of the foreach loop code when trying to modify the iteration variable inside the loop?",
              options: [
                "Increments values successfully",
                "Skips execution",
                "Compile Error",
                "Runtime Error",
              ],
              correct: 2,
            },
          ],
        },
        {
          t: "فاينل 2025 - الإجابات - د. سارة — البرمجة المرئية",
          d: "إجابات اختبار الفاينل لمادة البرمجة المرئية - البرنامج الأهلي 2025 (د. سارة)",
          pdf: "Visual Programming/Questions/Final/2025/Final 2025 - Answers - Visual Programming - Dr.Sara.pdf",
          questions: [
            {
              q: "How do you create a jagged array that contains strings?",
              options: [
                "string jaggedStrings = new string[];",
                "string[] jaggedStrings = new string;",
                "string[][] jaggedStrings = new string[][];",
                "string[] jaggedStrings = new string[];",
              ],
              correct: 2,
            },
            {
              q: "The ToolTip will always remain visible until the user clicks on the control.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "You call the SetError method with an empty string as the error message.",
              options: [
                "The error icon is hidden for the specified control",
                "The error icon is displayed with no message",
                "An exception is thrown",
              ],
              correct: 0,
            },
            {
              q: "Which property of a ScrollBar determines the current position of the scroll box?",
              options: ["Position", "Value", "Location", "CurrentScroll"],
              correct: 1,
            },
            {
              q: "Given the following method: public void DisplayMessage(string title, string content, int duration = 5). Which call is invalid?",
              options: [
                'DisplayMessage("Warning", content: "Low Battery");',
                'DisplayMessage(title: "Warning", content: "Low Battery", duration: 10);',
                'DisplayMessage(content: "Low Battery", "Warning", 10);',
                'DisplayMessage("Warning", "Low Battery", duration: 10);',
              ],
              correct: 2,
            },
            {
              q: 'What will the following code output?\nstring str1 = "Hello "; char str2 = str1.Remove(1);\nMessageBox.Show(str2.ToString());',
              options: ["Hello", "H", "Space", "Error"],
              correct: 3,
            },
            {
              q: "Which method is used to programmatically add an item to a ListBox?",
              options: [
                "ListBox.AddItem()",
                "ListBox.Items.Add()",
                "ListBox.Items.Insert()",
                "ListBox.Items.Item.adds",
              ],
              correct: 1,
            },
            {
              q: "The default value of the AutoSize property of a Label control is False.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "What will be the output of the following code when the button is clicked twice?",
              options: [
                '"Button clicked 1 times" on the first click, and "Button clicked 2 times" on the second click.',
                'A message box showing "Button clicked 1 times" every time.',
                "Error.",
              ],
              correct: 0,
            },
            {
              q: "Which property of the Label control is used to align the text within the Label?",
              options: ["TextAlign", "Alignment", "TextPosition", "Layout"],
              correct: 0,
            },
            {
              q: "The Load event takes place after the form is displayed on the screen.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "Which property of a TabControl contains the collection of tabs?",
              options: ["Tabs", "TabPages", "TabCollection", "Pages"],
              correct: 1,
            },
            {
              q: "You can use an ImageList control to store images of different sizes.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: 'For a button with the Text property set to "&Open", which key combination will activate it?',
              options: ["Alt + O", "Ctrl + O", "Shift + O", "Ctrl + Alt + O"],
              correct: 0,
            },
            {
              q: "When the button is clicked, what will be the output? (points[0].X.ToString())",
              options: ["0", "5", "10", "Error"],
              correct: 0,
            },
            {
              q: "How can you disable a ToolStripMenuItem in a MenuStrip control?",
              options: [
                "Set the Enabled property of the ToolStripMenuItem to false",
                "Set the Visible property of the ToolStripMenuItem to false",
                "Set the Enabled property of the MenuStrip to false",
                "Set the Text property of the ToolStripMenuItem to disabled",
              ],
              correct: 0,
            },
            {
              q: "The Text property of a ComboBox always corresponds to the value of the selected item.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "Which method is used to generate a random floating-point number between 0.0 and 1.0 (exclusive)?",
              options: [
                "random.NextFloat()",
                "random.NextDouble()",
                "random.Double()",
                "random.Float()",
              ],
              correct: 1,
            },
            {
              q: "You can specify a path as well as a filename in the argument that you pass to the File.CreateText method, but not to File.AppendText method.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "In a Windows Forms application, what is the visual indicator of an access key on a button?",
              options: [
                "Letter is bold",
                "Underlined",
                "Highlighted",
                "Grayed out",
              ],
              correct: 1,
            },
            {
              q: 'string str1 = "hello"; string str2 = "HELLO"; String.Compare(str1, str2, true); The method returns:',
              options: ["0", "True", "False", "Error"],
              correct: 0,
            },
            {
              q: "How can you retrieve an image from the ImageList?",
              options: [
                "ImageList.GetImage(index)",
                "ImageList.Images[index]",
                "ImageList[index]",
                "ImageList.Image(index)",
              ],
              correct: 1,
            },
            {
              q: 'What will the following code output?\nstring text = "C# Programming"; string result = text.Substring(3);',
              options: ["#C", "Programming", "Programming #", "P"],
              correct: 1,
            },
            {
              q: "You can assign either decimal or int values to decimal variables, but you cannot assign double values to decimal variables.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "Which namespace must be included to use the File.CreateText method?",
              options: [
                "System.Windows.Forms",
                "System.IO",
                "System.Text",
                "System.Collections",
              ],
              correct: 1,
            },
            {
              q: "What will the following code output?\nstring text = \"Hello, World!\"; int position = text.IndexOf('o', 5);",
              options: ["4", "8", "5", "-1"],
              correct: 1,
            },
            {
              q: "Which event is typically used to detect when a RadioButton has been selected?",
              options: ["Click", "Selected", "CheckedChanged", "Checked"],
              correct: 2,
            },
            {
              q: "To ensure a TextBox control receives focus first when the form loads, what would you do?",
              options: [
                "Set its TabIndex property to -1",
                "Set its TabIndex property to 0",
                "Set its TabOrder property to -1",
                "Set its TabOrder property to 0",
              ],
              correct: 1,
            },
            {
              q: "How can you define multiple delimiters for tokenizing a string using the Split method?",
              options: [
                "By passing a string containing all delimiters",
                "By passing a char array of delimiters",
                "By passing a List<char> of delimiters",
                "By passing a delimiter string separated by commas",
              ],
              correct: 1,
            },
            {
              q: "The AppendText method creates a new file if the specified file does not exist.",
              options: ["True", "False"],
              correct: 0,
            },
            {
              q: "The default behavior of a TextBox is to select all text when it gains focus.",
              options: ["True", "False"],
              correct: 1,
            },
            {
              q: "How can you open a second form as a modal form from the main form?",
              options: ["Show()", "ShowDialog()", "Open()", "Run()"],
              correct: 1,
            },
            {
              q: "The property that determines how a background image is displayed on a form is:",
              options: [
                "BackgroundImageAlignment",
                "BackgroundImageDisplayMode",
                "BackgroundImageLayout",
                "BackgroundImageStyle",
              ],
              correct: 2,
            },
            {
              q: "Which method do you use to ensure a control retains focus after an event such as a button click?",
              options: [
                "Control.Focus();",
                "Control.Select();",
                "Control.SetFocus();",
                "Control.GainFocus();",
              ],
              correct: 0,
            },
            {
              q: "What will the following code output?\nstring Name = \"hmed\"; Name[0] = 'A'; MessageBox.Show(Name);",
              options: ["Ahmed", "hmed", "A", "Error"],
              correct: 3,
            },
            {
              q: "A ComboBox can display multiple columns of data simultaneously.",
              options: ["True", "False"],
              correct: 1,
            },
          ],
        },
      ],
    },
  ],
});
