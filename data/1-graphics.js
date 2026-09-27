subjects.push({
  name: "الرسم بالحاسب",
  en: "Computer Graphics",
  icon: "🎨",
  lectures: [
    {
      t: "المحاضرة 1: مقدمة الرسوميات، الإسقاط المنظوري، والـ Rasterization",
      d: "تغطي المفاهيم الأساسية لرسوميات الحاسوب، تحويل المجسمات من 3D إلى 2D باستخدام الإسقاط المنظوري (Perspective Projection)، وخوارزميات تحويل الخطوط إلى بيكسلات (Rasterization).",
      pdf: "Computer Graphics/lectures/Lec1-Computer Graphics.pdf",
      pdf2: "Computer Graphics/Questions/new/Questions on each lecture/Lecture_1_Questions_Intro_to_Computer_Graphics.pdf",
      // فئات روابط منظمة لمادة رسوميات الحاسوب (Computer Graphics - Lecture 1)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم رسوميات الحاسوب: المقدمة، الإسقاط المنظوري (3D→2D)، والـ Rasterization",
          links: [
            {
              t: "Computer Graphics || كورس كامل بالعربي - Programming Secrets",
              d: "32 درساً (11 ساعة و42 دقيقة) تغطي: مقدمة الرسوميات، الرسم باستخدام الحاسب، التحويلات، والإسقاط — من الصفر حتى الاحتراف",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLp2eAGIFKMEVpQoEqqEo4o-S1enQ59ocw",
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
            "المحاضرة الرسمية من مؤلف السلايدات (Keenan Crane - CMU) + كورس أكاديمي عالمي مرافق",
          links: [
            {
              t: "Keenan Crane - Lecture 01: Course Overview (CMU 15-462/662)",
              d: "المحاضرة الأولى الرسمية — هي نفسها محتوى هذا الملف بالضبط: تعريف CG، لماذا المعلومات البصرية، التطبيقات، نشاط رسم المكعب، الإسقاط المنظوري، والـ Rasterization",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=PhxV_JrXeVk",
                  type: "view",
                  color: "red",
                },
                {
                  label: "📚 القائمة الكاملة",
                  url: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🌐 صفحة المادة الرسمية",
                  url: "https://15462.courses.cs.cmu.edu/fall2021/home",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GAMES101 - Introduction to Computer Graphics",
              d: "كورس أكاديمي ممتاز يغطي: التحويلات ثلاثية الأبعاد، نموذج الكاميرا المنظورية، الإسقاط، والـ Rasterization — مرجع تكميلي قوي",
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
            "مقالات تفصيلية تشرح بالضبط مفاهيم الملف: إسقاط المنظور (u=x/z, v=y/z) والـ Rasterization",
          links: [
            {
              t: "Scratchapixel - Computing Pixel Coordinates of a 3D Point (Perspective Projection)",
              d: "شرح تفاعلي مطابق تماماً للمحاضرة: نموذج الكاميرا الثقبية، المثلثات المتشابهة، حساب (u,v) من (x,y,z) بقسمة x,y على z",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المرجع",
                  url: "https://scratchapixel.com/lessons/3d-basic-rendering/computing-pixel-coordinates-of-3d-point/perspective-projection.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Scratchapixel - The Rasterization Algorithm",
              d: "شرح مفصل لعملية Rasterization: تحويل الأشكال المستمرة إلى شبكة بيكسلات، خوارزمية الرسم التدريجي — يطابق القسم الأخير من المحاضرة",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المرجع",
                  url: "https://scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Computer Graphics Tutorial",
              d: "توثيق شامل: Line Drawing Algorithms، التحويلات ثنائية وثلاثية الأبعاد، وVisible Surface Detection — مرجع سريع للمفاهيم",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-graphics-2/",
                  type: "view",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات تفاعلية لتجربة مفاهيم المحاضرة عملياً: رسم المكعب، الكاميرا المنظورية، والتحكم بالبيكسلات",
          links: [
            {
              t: "Three.js - Interactive 3D Editor",
              d: "محرر ثلاثي الأبعاد عبر الويب: أنشئ مكعباً، جرّب Perspective Camera، وحرّك المجسمات — يربط مباشرة بنشاط رسم المكعب في المحاضرة",
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
            {
              t: "Shadertoy - Interactive Pixel Shaders",
              d: "منصة تفاعلية للكتابة المباشرة على مستوى البيكسل في الوقت الفعلي — لتجربة كيفية تلوين البيكسلات ورسم الخطوط (Rasterization)",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعلية",
                  url: "https://www.shadertoy.com/",
                  type: "view",
                  color: "orange",
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
          q: "What are the two main objectives stated at the start of the lecture?",
          options: [
            "Learn a graphics API and write shader code",
            "Understand broadly what computer graphics is about, and implement the first algorithm for making images of 3D shapes",
            "Study hardware architecture and GPU pipelines",
            "Review linear algebra and calculus",
          ],
          correct: 1,
        },
        {
          q: "According to the lecture's definition, computer graphics is:",
          options: [
            "The use of computers to synthesize visual information",
            "The study of pixel manipulation only",
            "A branch of computer hardware engineering",
            "The science of image compression",
          ],
          correct: 0,
        },
        {
          q: "The lecture later revises the definition of graphics to include:",
          options: [
            "Only visual information",
            "The use of computation to turn digital information into sensory stimuli",
            "Only sound and touch",
            "Only 3D geometry",
          ],
          correct: 1,
        },
        {
          q: "Roughly what fraction of the brain is dedicated to visual processing, according to the lecture?",
          options: ["About 5%", "About 30%", "About 60%", "About 90%"],
          correct: 1,
        },
        {
          q: "Why are eyes described as important in the lecture?",
          options: [
            "They are the slowest input to the brain",
            "They are the highest-bandwidth port into the head",
            "They only process color, not shape",
            "They are not relevant to computer graphics",
          ],
          correct: 1,
        },
        {
          q: "Which historical device is mentioned as an early computer (1945)?",
          options: ["Sketchpad", "ENIAC", "Apple II", "IBM PC"],
          correct: 1,
        },
        {
          q: "Punch cards, as referenced in the lecture, stored roughly how much data?",
          options: ["~12 bytes", "~120 bytes", "~1.2 KB", "~12 KB"],
          correct: 1,
        },
        {
          q: "Sketchpad, an early interactive graphics system, was created by:",
          options: [
            "Alan Turing",
            "Ivan Sutherland",
            "John von Neumann",
            "Douglas Engelbart",
          ],
          correct: 1,
        },
        {
          q: "In what year was Sketchpad created?",
          options: ["1945", "1955", "1963", "1980"],
          correct: 2,
        },
        {
          q: "An 8K monitor (7680x4320) produces an image of roughly what size, per the lecture?",
          options: ["~9.5 MB", "~95 MB", "~950 MB", "~9.5 GB"],
          correct: 1,
        },
        {
          q: "According to the lecture, a 2020 VR headset with two 2160x2160 displays at 90Hz produces data at roughly:",
          options: ["2.3 MB/s", "23 MB/s", "2.3 GB/s", "23 GB/s"],
          correct: 2,
        },
        {
          q: "Which of the following is NOT listed as an application area of computer graphics in the lecture?",
          options: [
            "Entertainment (movies, games)",
            "Architecture",
            "Scientific/mathematical visualization",
            "Database indexing",
          ],
          correct: 3,
        },
        {
          q: "Which visualization type is specifically mentioned alongside scientific visualization?",
          options: [
            "Medical/anatomical visualization",
            "Financial visualization",
            "Network visualization",
            "Weather visualization",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is listed under the 'Theory' foundations of computer graphics?",
          options: [
            "Sampling & aliasing",
            "Compiler design",
            "Operating systems",
            "Database theory",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is listed under the 'Theory' foundations of computer graphics?",
          options: [
            "Radiometry & light transport",
            "Network protocols",
            "File systems",
            "Cryptography",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is listed under the 'Systems' foundations of computer graphics?",
          options: [
            "Parallel, heterogeneous processing",
            "Radiometry",
            "Perception",
            "Sampling & aliasing",
          ],
          correct: 0,
        },
        {
          q: "In the cube-modeling activity, the cube is assumed to be centered at:",
          options: ["(1,1,1)", "The origin (0,0,0)", "(2,2,2)", "(-1,-1,-1)"],
          correct: 1,
        },
        {
          q: "What are the dimensions of the cube used in the modeling activity?",
          options: ["1x1x1", "2x2x2", "3x3x3", "4x4x4"],
          correct: 1,
        },
        {
          q: "How many vertices does the cube in the activity have?",
          options: ["4", "6", "8", "12"],
          correct: 2,
        },
        {
          q: "How many edges does the cube in the activity have?",
          options: ["6", "8", "10", "12"],
          correct: 3,
        },
        {
          q: "In the cube-drawing activity, what is the basic two-step strategy for turning a 3D cube into a 2D image?",
          options: [
            "Rotate the cube, then scale it",
            "Map 3D vertices to 2D points, then connect them with straight lines",
            "Apply color, then shade the faces",
            "Compute normals, then apply lighting",
          ],
          correct: 1,
        },
        {
          q: "The lecture explains perspective projection using which simple camera model?",
          options: [
            "Lens camera",
            "Pinhole camera",
            "Fisheye camera",
            "Orthographic camera",
          ],
          correct: 1,
        },
        {
          q: "In perspective projection, objects appear smaller as they:",
          options: [
            "Get closer to the camera",
            "Get further away from the camera",
            "Rotate faster",
            "Change color",
          ],
          correct: 1,
        },
        {
          q: "In the side-view derivation, the image point is called:",
          options: ["p = (x,y,z)", "q = (u,v)", "c = (2,3,5)", "s = slope"],
          correct: 1,
        },
        {
          q: "Under the assumption that the camera has unit size with origin at the pinhole c, the vertical image coordinate v is derived as:",
          options: [
            "v = y + z",
            "v = y/z (the slope y/z)",
            "v = y * z",
            "v = z/y",
          ],
          correct: 1,
        },
        {
          q: "Following the same logic, the horizontal image coordinate u is given by:",
          options: ["u = x/z", "u = z/x", "u = x*z", "u = x+z"],
          correct: 0,
        },
        {
          q: "In the 'draw the cube' activity, what camera position is assumed?",
          options: ["c = (0,0,0)", "c = (1,1,1)", "c = (2,3,5)", "c = (5,3,2)"],
          correct: 2,
        },
        {
          q: "To project each 3D vertex to 2D in the activity, the first step is to:",
          options: [
            "Divide (x,y) by z directly",
            "Subtract the camera position c from the vertex to get (x,y,z)",
            "Multiply the vertex by the camera position",
            "Add the camera position to the vertex",
          ],
          correct: 1,
        },
        {
          q: "After subtracting the camera position, the second step to get (u,v) is to:",
          options: [
            "Multiply (x,y) by z",
            "Divide (x,y) by z",
            "Add z to (x,y)",
            "Take the square root of z",
          ],
          correct: 1,
        },
        {
          q: "Once the two endpoints of an edge have been projected to (u1,v1) and (u2,v2), what does the algorithm do next?",
          options: [
            "Fill the polygon between them",
            "Draw a line between the two 2D points",
            "Compute a normal vector",
            "Apply a color gradient",
          ],
          correct: 1,
        },
        {
          q: "According to the lecture, what did the cube-drawing exercise successfully demonstrate?",
          options: [
            "Turning visual information into digital information",
            "Turning purely digital information into purely visual information using a completely algorithmic procedure",
            "Compressing an image",
            "Simulating lighting",
          ],
          correct: 1,
        },
        {
          q: "The lecture describes a raster display using which common abstraction?",
          options: [
            "A continuous vector canvas",
            "A 2D grid of pixels, each with a color value",
            "A single scanning laser beam",
            "A 1D array of intensities",
          ],
          correct: 1,
        },
        {
          q: "The process of converting a continuous object (like a line) into a discrete pixel-grid representation is called:",
          options: [
            "Aliasing",
            "Rasterization",
            "Tessellation",
            "Quantization",
          ],
          correct: 1,
        },
        {
          q: "Which rule for choosing which pixels to light up for a line is specifically named in the lecture, and used by modern GPUs?",
          options: [
            "The midpoint rule",
            "The diamond rule",
            "The Bresenham rule",
            "The scanline rule",
          ],
          correct: 1,
        },
        {
          q: "Under the diamond rule, a pixel is lit up if:",
          options: [
            "The line passes through the pixel's associated diamond",
            "The line touches any corner of the pixel",
            "The pixel is closer to the camera",
            "The pixel's color matches the line's color",
          ],
          correct: 0,
        },
        {
          q: "Why is naively checking every pixel in the image to rasterize a line considered inefficient?",
          options: [
            "It only works for horizontal lines",
            "It costs O(n^2) work in the number of image pixels, versus at most O(n) pixels actually lit up",
            "It cannot represent color",
            "It requires floating-point hardware that doesn't exist",
          ],
          correct: 1,
        },
        {
          q: "In the incremental line rasterization algorithm described, the slope s of the line is computed as:",
          options: [
            "s = (u2-u1) / (v2-v1)",
            "s = (v2-v1) / (u2-u1)",
            "s = (u2+u1) / (v2+v1)",
            "s = u2 * v2",
          ],
          correct: 1,
        },
        {
          q: "The easy special case handled by the incremental algorithm assumes:",
          options: [
            "u1 > u2 and v1 > v2",
            "u1 < u2, v1 < v2, and 0 < s < 1",
            "The line is vertical",
            "The slope is greater than 1",
          ],
          correct: 1,
        },
        {
          q: "In the incremental algorithm's loop, what is updated on every iteration as u increases by 1?",
          options: [
            "v is incremented by s, then rounded to draw the pixel",
            "u is divided by s",
            "The camera position is updated",
            "The color is incremented",
          ],
          correct: 0,
        },
        {
          q: "The lecture notes that although the incremental algorithm is easy to implement, it is:",
          options: [
            "Exactly how lines are drawn in modern software/hardware",
            "Not how lines are actually drawn in modern software/hardware",
            "Only usable for 3D lines",
            "The fastest possible method",
          ],
          correct: 1,
        },
        {
          q: "After completing the simple line-drawing algorithm for the cube, what does the lecture say is needed for more realistic pictures?",
          options: [
            "Only better monitors",
            "A richer model of the world, including geometry, materials, lights, cameras, and motion",
            "Faster punch card readers",
            "More pixels per inch only",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is explicitly listed as part of the 'richer model of the world' needed for realism?",
          options: ["Materials", "Punch cards", "Compilers", "Databases"],
          correct: 0,
        },
        {
          q: "Which of the following is explicitly listed as part of the 'richer model of the world' needed for realism?",
          options: [
            "Motion",
            "Networking",
            "Cryptography",
            "Operating systems",
          ],
          correct: 0,
        },
        {
          q: "The lecture frames the whole cube-drawing exercise as fundamentally illustrating:",
          options: [
            "What computer graphics is all about",
            "How to compress an image",
            "How compilers work",
            "How networks transmit images",
          ],
          correct: 0,
        },
        {
          q: "What footnote does the lecture add about the idea of a pixel as 'a little square'?",
          options: [
            "It is completely accurate and never questioned",
            "The notion will be strongly challenged later in the course",
            "Pixels are always circular",
            "Pixels do not have color",
          ],
          correct: 1,
        },
        {
          q: "The lecture references a SIGGRAPH trailer to make which point?",
          options: [
            "That computer graphics is a narrow, niche field",
            "That even the broadened definition of graphics is still too narrow",
            "That SIGGRAPH only covers hardware",
            "That graphics has not changed since the 1960s",
          ],
          correct: 1,
        },
        {
          q: "The lecture mentions turning digital information into physical matter as an example of graphics evolving beyond:",
          options: [
            "Just turning on pixels",
            "Just writing text",
            "Just playing sound",
            "Just 2D drawing",
          ],
          correct: 0,
        },
        {
          q: "Where does the lecture say students can find all logistics for the course?",
          options: [
            "In the lecture slides only",
            "On the course webpage",
            "By email only",
            "In the textbook appendix",
          ],
          correct: 1,
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
