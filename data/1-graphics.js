subjects.push({
  name: "الرسم بالحاسب",
  en: "Computer Graphics",
  icon: "🎨",
  lectures: [
    {
      t: "المحاضرة 1: مقدمة الرسوميات، الإسقاط المنظوري، والـ Rasterization",
      d: "تغطي المفاهيم الأساسية لرسوميات الحاسوب، تحويل المجسمات من 3D إلى 2D باستخدام الإسقاط المنظوري (Perspective Projection)، وخوارزميات تحويل الخطوط إلى بيكسلات (Rasterization).",
      pdf: "Computer Graphics/lectures/Lec1-Computer Graphics.pdf",
      //   pdf2: "Computer Graphics/Questions/Questions on each lecture/Lecture 1 - Questions - Computer Graphics.pdf",
      // فئات روابط منظمة لمادة رسوميات الحاسوب (Computer Graphics - Lecture 1)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم رسوميات الحاسوب واساسيات تحويل الأشكال والرسم",
          links: [
            {
              t: "مبادئ رسوميات الحاسوب (Computer Graphics) - بالعربي",
              d: "مقدمة شاملة عن الرسوميات، تحويل النقاط من 3D إلى 2D، وكيفية معالجة الصور والتسقيط",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLvS947PnbR_mK04oVWBfCsw_6qDylu9M_",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزميات رسم الخطوط والشبكات (Line Rasterization)",
              d: "تغطية تفصيلية لخوارزميات DDA و Bresenham لعملية الـ Rasterization وتلوين البيكسلات على الشاشة",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL3X--Qeb3951P_eW8bL12_X8N9B95C3C",
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
            "محاضرات أكاديمية من صاحب السلايدات (Keenan Crane) وقنوات عالمية متخصصة",
          links: [
            {
              t: "Keenan Crane (CMU) - Computer Graphics Lecture Course",
              d: "المحاضرات الرسمية لمؤلف هذه السلايدات: Perspective Projection, Rasterization, Line Drawing",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL9_jI1ts8Bn482X5A6Kz3d1-u2G_I1r1O",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "GAMES101 - Introduction to Computer Graphics",
              d: "كورس أكاديمي ممتاز يغطي 3D Transformation, Pinhole Camera Model, Projection, Rasterization",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLlrATfBNZ98edc5GshPRIJ9gU1CC6zEV0",
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
            "مقالات وشروحات تفاعلية للـ Perspective Projection والـ Rasterization",
          links: [
            {
              t: "Scratchapixel - Computer Graphics From Scratch",
              d: "مرجع متكامل يشرح 3D Perspective Projection (u=x/z, v=y/z), Pinhole Camera, Rasterization",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح الموقع",
                  url: "https://www.scratchapixel.com/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Computer Graphics Tutorial",
              d: "توثيق شامل لمفاهيم Line Rasterization, Diamond Rule, 3D Transformations & Graphics Pipeline",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-graphics-2/",
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
            "برامج تفاعلية ومحاكاة للـ 3D Modeling، الكاميرا والـ Shading",
          links: [
            {
              t: "Shadertoy - Interactive Pixel Shaders",
              d: "منصة تفاعلية لكتابة الكود والتحكم المباشر بالبيكسلات (Rasterization) والرسوميات في الوقت الفعلي",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://www.shadertoy.com/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Three.js - Interactive 3D Editor",
              d: "محرر تفاعلي لإنشاء المكعبات وتجربة إسقاط المنظور (Perspective Camera) والتحكم بالمجسمات",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح المحرر",
                  url: "https://threejs.org/editor/",
                  type: "view",
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
          q: "What was the primary method of input/output for early computers like ENIAC (1945) before graphical displays?",
          options: [
            "Touchscreens",
            "Punch cards",
            "Voice commands",
            "3D printers",
          ],
          correct: 1,
        },
        {
          q: "According to the lecture, why is visual information considered so important for humans?",
          options: [
            "Because it is easier to program",
            "Because about 30% of the brain is dedicated to visual processing, and eyes are the highest-bandwidth port",
            "Because it requires no energy",
            "Because it only works with VR headsets",
          ],
          correct: 1,
        },
        {
          q: "What is the approximate data rate required for a 2020 Virtual Reality headset (2x 2160x2160 @ 90Hz) as mentioned in the lecture?",
          options: ["95 MB", "2.3 GB/s", "1 TB/s", "30 MB/s"],
          correct: 1,
        },
        {
          q: "Which of the following is NOT listed as a component of the 'richer model of the world' needed for more realistic pictures?",
          options: ["Geometry", "Materials", "Lights", "Sound"],
          correct: 3,
        },
        {
          q: "Which field uses Computer Graphics for crash simulations, as shown with the Mercedes-Benz example?",
          options: [
            "Computer-Aided Engineering (CAE)",
            "Entertainment",
            "Medical Visualization",
            "Navigation",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is considered a 'System' foundation of Computer Graphics rather than a 'Theory' foundation?",
          options: [
            "Sampling & Aliasing",
            "Radiometry & Light Transport",
            "Parallel & Heterogeneous Processing",
            "Perception",
          ],
          correct: 2,
        },
        {
          q: "In the pinhole camera model, if the camera is at c=(2,3,5) and a vertex is at (4,4,6), what is the resulting z-coordinate for projection?",
          options: ["1", "2", "3", "6"],
          correct: 0,
        },
        {
          q: "After subtracting the camera position and getting (x, y, z), how do you calculate the 2D image coordinates (u, v)?",
          options: [
            "u = x + z, v = y + z",
            "u = x / z, v = y / z",
            "u = x * z, v = y * z",
            "u = z / x, v = z / y",
          ],
          correct: 1,
        },
        {
          q: "What rule do modern GPUs use to decide which pixels to light up when rasterizing a line?",
          options: [
            "The Square Rule",
            "The Diamond Rule",
            "The Triangle Rule",
            "The Bresenham Rule",
          ],
          correct: 1,
        },
        {
          q: "What is the complexity of checking every single pixel in the image to see if it satisfies a rasterization condition?",
          options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
          correct: 1,
        },
        {
          q: "In the incremental line rasterization special case, what is the condition for the slope (s)?",
          options: ["0 < s < 1", "s > 1", "s < 0", "s = 0"],
          correct: 0,
        },
        {
          q: "Which definition best represents the expanded modern definition of Computer Graphics provided in the lecture?",
          options: [
            "The use of computers to draw 3D models only",
            "The use of computation to turn digital information into sensory stimuli",
            "The study of how to build faster GPUs",
            "The process of printing digital images on paper",
          ],
          correct: 1,
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Compare the traditional definition of Computer Graphics with the expanded definition presented in the lecture. How does the concept of 'sensory stimuli' change the scope of the field?",
          answer:
            "Traditional Definition:\n" +
            "• Early definitions focused on 'turning on pixels' or simply synthesizing visual information.\n" +
            "• It was limited to displaying images on a screen.\n\n" +
            "Expanded Definition:\n" +
            "• The lecture defines Computer Graphics as 'the use of computation to turn digital information into sensory stimuli.'\n" +
            "• This includes not just visual information, but also sound (e.g., in animations) and touch (haptic feedback).\n" +
            "• The lecture even poses the question of expanding to taste and smell.\n" +
            "• It also extends to turning digital information into physical matter (e.g., 3D printing).\n\n" +
            "Impact:\n" +
            "• This broader definition moves CG beyond just screen displays and into VR/AR, robotics, and physical fabrication, making it a truly interdisciplinary field.",
          tags: ["Definition", "Sensory Stimuli", "Evolution"],
          ref: "Lecture 1 — Pages 13, 16, 18",
        },
        {
          type: "essay",
          q: "List and briefly describe at least four distinct application areas of Computer Graphics mentioned in the lecture.",
          answer:
            "1. Entertainment (Movies, Games):\n" +
            "• Used for creating animated films (e.g., Pixar) and video games (e.g., Zelda).\n" +
            "• Includes both cartoon-style and photorealistic rendering (e.g., digital humans).\n\n" +
            "2. Computer-Aided Engineering (CAE):\n" +
            "• Used for simulating physical tests like car crashes (e.g., Mercedes-Benz simulation vs. real crash test).\n" +
            "• Allows engineers to visualize stress, deformation, and safety without physical prototypes.\n\n" +
            "3. Scientific and Medical Visualization:\n" +
            "• Visualizing complex mathematical surfaces (e.g., bubbles) and fluid dynamics (e.g., smoke/fire simulations).\n" +
            "• Medical imaging and anatomical visualization for diagnosis and research.\n\n" +
            "4. Art, Design, and Communication:\n" +
            "• Industrial design, architecture, and digital art.\n" +
            "• Navigation systems (GPS) and communication tools (e.g., facial tracking for avatars).",
          tags: ["Applications", "CAE", "Medical", "Entertainment"],
          ref: "Lecture 1 — Pages 21–31",
        },
        {
          type: "essay",
          q: "Explain the concept of Rasterization and discuss the complexity issue (O(n²) vs O(n)) when drawing a line.",
          answer:
            "Rasterization Definition:\n" +
            "• Rasterization is the process of converting a continuous object (like a mathematically perfect line) into a discrete representation on a raster grid (a pixel grid).\n\n" +
            "The Complexity Problem:\n" +
            "• A naive approach would be to check every single pixel in the image to see if the line passes through it.\n" +
            "• If the image has n² pixels, and the line only lights up O(n) pixels, checking all n² pixels is inefficient.\n" +
            "• We must be able to do better, working proportional to the number of pixels in the drawing of the line, not the entire image.\n\n" +
            "Incremental Line Rasterization:\n" +
            "• An efficient algorithm for simple cases (e.g., slope 0 < s < 1).\n" +
            "• It iterates through the x-coordinates (u) from start to end, incrementally adding the slope to the y-coordinate (v) and rounding it to the nearest pixel.\n" +
            "• This ensures we only visit the pixels that actually need to be drawn, achieving O(n) complexity.",
          tags: ["Rasterization", "Complexity", "Line Drawing"],
          ref: "Lecture 1 — Pages 47–52",
        },
        {
          type: "essay",
          q: "Detail the mathematical steps for projecting a 3D cube onto a 2D image using the pinhole camera model.",
          answer:
            "1. Modeling the Cube:\n" +
            "• Define the 3D vertices (e.g., A: (1,1,1), B: (-1,1,1), etc.).\n" +
            "• Define the edges connecting these vertices (e.g., AB, CD, EF, etc.).\n\n" +
            "2. Perspective Projection (Pinhole Camera Model):\n" +
            "• Assume the camera has a unit size and the origin is at the pinhole c.\n" +
            "• For each vertex (X, Y, Z), subtract the camera position c to get (x, y, z).\n" +
            "• Use similar triangles to derive the projection equations.\n" +
            "• The vertical coordinate v is the slope y/z, and the horizontal coordinate u is x/z.\n" +
            "• Formula: u = x / z, v = y / z.\n\n" +
            "3. Drawing:\n" +
            "• Convert the resulting 2D coordinates (u, v) into rasterized lines on the pixel grid.\n" +
            "• This turns purely digital information (vertex coordinates) into visual information (a 2D image of a cube).",
          tags: ["Modeling", "Perspective Projection", "Cube Activity"],
          ref: "Lecture 1 — Pages 33–41",
        },
        {
          type: "essay",
          q: "What are the theoretical and systemic foundations of Computer Graphics? Provide examples for each category.",
          answer:
            "Theoretical Foundations:\n" +
            "• Basic Representations: How to digitally encode shape and motion (e.g., vertices and edges of a cube).\n" +
            "• Sampling & Aliasing: How to acquire and reproduce a signal (e.g., converting a continuous line to discrete pixels).\n" +
            "• Numerical Methods: How to manipulate signals numerically (e.g., matrix transformations).\n" +
            "• Radiometry & Light Transport: How light behaves and interacts with surfaces.\n" +
            "• Perception: How visual information relates to human biology and psychology.\n\n" +
            "Systemic Foundations:\n" +
            "• Parallel, Heterogeneous Processing: Utilizing GPUs and multi-core processors for rendering.\n" +
            "• Graphics-Specific Programming Languages: Languages and APIs designed specifically for rendering (e.g., OpenGL, DirectX, shading languages).",
          tags: ["Foundations", "Theory", "Systems"],
          ref: "Lecture 1 — Page 32",
        },
        {
          type: "essay",
          q: "How has the history of computer graphics evolved from ENIAC and punch cards to modern VR and 3D printing? Include the 'Why visual information?' argument in your answer.",
          answer:
            "Historical Evolution:\n" +
            "• Early computing (ENIAC, 1945) relied on punch cards and physical wiring, with very limited output (e.g., blinking lights).\n" +
            "• There was a clear need for a better way to visualize data, leading to early computer displays (e.g., the Whirlwind computer).\n" +
            "• Modern displays have advanced to 8K monitors (7680x4320, ~95MB per frame) and VR headsets requiring massive bandwidth (2.3 GB/s).\n\n" +
            "Why Visual Information?\n" +
            "• About 30% of the brain is dedicated to visual processing.\n" +
            "• The eyes are the highest-bandwidth port into the head.\n" +
            "• This makes visual output the most efficient way to convey complex information to humans.\n\n" +
            "Modern Frontiers:\n" +
            "• VR and AR for immersive experiences.\n" +
            "• 3D printing, which turns digital information into physical matter.\n" +
            "• Haptic feedback, which turns digital information into touch sensations.",
          tags: ["History", "Visual Information", "VR", "3D Printing"],
          ref: "Lecture 1 — Pages 6–12, 16–17",
        },
      ],
    },
  ],
  // midterms: [
  //   {
  //     t: "MidTerm 2021 - Questions - Computer Graphics.pdf",
  //     d: "MidTerm 2021 - Questions - Computer Graphics.pdf",
  //     pdf: "Computer Graphics/Questions/Mid/MidTerm 2021 - Questions - Computer Graphics.pdf",
  //     questions: [
  //       {
  //         q: "المرحلة التي تحوّل الأشكال الهندسية إلى بكسلات تسمى:",
  //         options: [
  //           "Rasterization التنقيط",
  //           "Clipping القص",
  //           "Blending المزج",
  //           "Culling الاستبعاد",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "ناتج إزاحة النقطة (2، 3) بمقدار (5، 1) هو:",
  //         options: ["(7، 4)", "(3، 2)", "(10، 3)", "(2، 3)"],
  //         correct: 0,
  //       },
  //       {
  //         q: "مصفوفة التحويل المتجانس ثنائية الأبعاد مقاسها:",
  //         options: ["3×3", "2×2", "4×4", "1×1"],
  //         correct: 0,
  //       },
  //       {
  //         q: "التحجيم بمعامل 0.5 يجعل الشكل:",
  //         options: [
  //           "أصغر إلى النصف",
  //           "أكبر بالضعف",
  //           "معكوساً كالمرآة",
  //           "مائلاً",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "الغرض من تمثيل النقطة كـ (x, y, 1) في الإحداثيات المتجانسة:",
  //         options: [
  //           "توحيد كل التحويلات في صورة ضرب مصفوفات",
  //           "تسريع الطباعة",
  //           "تلوين النقطة",
  //           "ضغط البيانات",
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
  //     pdf: "Computer Graphics/exams/Final 1.pdf",
  //     questions: [
  //       {
  //         q: "مكوّن Phong المسؤول عن «اللمعة» اللامعة في نقطة واحدة:",
  //         options: ["Specular", "Ambient", "Diffuse", "Emissive"],
  //         correct: 0,
  //       },
  //       {
  //         q: "تظليل Gouraud يحسب الإضاءة عند:",
  //         options: [
  //           "الرؤوس ثم يستوفيها على سطح الوجه",
  //           "كل بكسل على حدة",
  //           "مركز الشكل فقط",
  //           "لا يحسبها إطلاقاً",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "نقطة تلاشي الخطوط المتوازية في الإسقاط المنظوري تسمى:",
  //         options: ["Vanishing Point", "Focus Point", "Origin", "Center Pixel"],
  //         correct: 0,
  //       },
  //       {
  //         q: "الغرض من تقنية Double Buffering:",
  //         options: [
  //           "منع الوميض أثناء تحديث الصورة",
  //           "مضاعفة الدقة",
  //           "ضغط الصورة",
  //           "تشفير العرض",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "عملية إخفاء الأجزاء غير المرئية من المجسم:",
  //         options: [
  //           "Hidden Surface Removal",
  //           "Clipping",
  //           "Dithering",
  //           "Morphing",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "تقنية Anti-aliasing تحسّن:",
  //         options: [
  //           "نعومة حواف الخطوط",
  //           "سرعة المعالج",
  //           "حجم الملف",
  //           "عدد الألوان المتاحة",
  //         ],
  //         correct: 0,
  //       },
  //     ],
  //   },
  //   {
  //     t: "الفاينل 2 (شامل)",
  //     d: "امتحان نهاية الترم — نموذج ثاني",
  //     pdf: "Computer Graphics/exams/Final 2.pdf",
  //     questions: [
  //       {
  //         q: "تغطية سطح المجسم بصورة لزيادة الواقعية:",
  //         options: [
  //           "Texture Mapping",
  //           "Shadow Mapping",
  //           "Level of Detail",
  //           "Ray Casting",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "الإضاءة المحيطة Ambient تتميز بأنها:",
  //         options: [
  //           "موحدة بغض النظر عن اتجاه الضوء",
  //           "تعتمد على زاوية سقوط الضوء",
  //           "تظهر في الظلام فقط",
  //           "تتحرك مع الكاميرا",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "منطقة الرؤية الهرمية أمام الكاميرا تسمى:",
  //         options: [
  //           "Viewing Frustum",
  //           "Viewport فقط",
  //           "Render Target",
  //           "Frame Buffer",
  //         ],
  //         correct: 0,
  //       },
  //       {
  //         q: "زيادة قيمة Specular في نموذج Phong تجعل السطح:",
  //         options: ["أكثر لمعاناً", "أغمق لوناً", "شفافاً", "مطفاً تماماً"],
  //         correct: 0,
  //       },
  //       {
  //         q: "الذاكرة التي تُخزَّن فيها ألوان البكسلات الجاهزة للعرض:",
  //         options: ["Frame Buffer", "Cache", "Register", "Stack"],
  //         correct: 0,
  //       },
  //     ],
  //   },
  // ],
});
