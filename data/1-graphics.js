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
    {
      t: "المحاضرة 2: مراجعة الرياضيات (الجزء الأول: الجبر الخطي والـ Vector Spaces)",
      d: "تغطي المفاهيم الأساسية للجبر الخطي في الرسوميات الحاسوبية: مسلمات الفضاءات المتجهة (Vector Spaces)، التمثيل بالإحداثيات الديكارتية، عمليات الجمع والتكبيس (Scaling)، حساب منتصف القطعة (Midpoint)، معاملة الدوال كمتجهات، ومعايير قياس الطول (Euclidean Norm وL2 Norm للدوال).",
      pdf: "Computer Graphics/lectures/Lecture 2/Lecture 2.pdf",
      pdf2: "Computer Graphics/Questions/new/Questions on each lecture/Lecture2_Linear_Algebra_Questions.pdf",

      // فئات روابط منظمة لمادة رسوميات الحاسوب (Computer Graphics - Lecture 1)
      // فئات روابط منظمة ومخصصة لمحاضرة الجبر الخطي للرسوميات الحاسوبية (CMU Lecture 2)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية تمس موضوعات المتجهات، المعيار، والفضاءات المتجهة المذكورة بالملف",
          links: [
            {
              t: "SpicyCoders - المتجهات | Vectors | الجبر الخطى",
              d: "شرح تفصيلي لمفهوم المتجهات، المركبات الديكارتية، وحساب طول المتجه (Magnitude) متوافق مع الشرائح 4-8 و 21-26",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=lMahHHwQ_Eo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "د. أحمد حجاج - الجبر الخطي (فيديوهات التركيبات والفضاءات المتجهة)",
              d: "فيديوهات محددة للملف: فيديو #20 (Linear Combinations) وفيديو #24 (Linear Independence & Spanning Sets)",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 فتح قائمة التشغيل",
                  url: "https://youtube.com/playlist?list=PLxIvc-MGOs6iQXFnjF_STbhGdrZBphrv_&si=IaeoOStIm3rXMfNA",
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
            "المحاضرة الرسمية لجامعة CMU وسلسلة 3Blue1Brown المحددة بموضوعات الملف",
          links: [
            {
              t: "Prof. Keenan Crane - CMU 15-462 Math Review Part I: Linear Algebra",
              d: "المحاضرة الأكاديمية الرسمية المباشرة لمؤلف الشرائح من جامعة كارنيغي ميلون",
              icon: "🌍",
              actions: [
                {
                  label: "📖 المحاضرة الرسمية",
                  url: "http://15462.courses.cs.cmu.edu/fall2020/",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://youtu.be/2c8XQlQApx8",
                  type: "view",
                  color: "red",
                },
                {
                  label: "📚 القائمة الكاملة",
                  url: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "3Blue1Brown - Essence of Linear Algebra (مقاطع محددة للملف)",
              d: "المقاطع التابعة للملف: Ch 1 (Vectors)، Ch 2 (Span & Basis)، Ch 9 (Dot Products & Norms)، Ch 16 (Abstract Vector Spaces & Functions)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 فتح القائمة المحددة",
                  url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
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
          description: "مقالات وتوثيقات هندسية متخصصة في الرياضيات للرسوميات",
          links: [
            {
              t: "Scratchapixel - Geometry: Points, Vectors and Normals",
              d: "مرجع متقدم يشرح تمثيل النقاط والمتجهات والمعايير في المحركات ثلاثية الأبعاد",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "CMU 15-462/662 Official Course Page",
              d: "الموقع الرسمي لمساق الرسوميات الحاسوبية بجامعة CMU ويتضمن الشرائح والواجبات البرمجية (Scotty3D)",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "http://15462.courses.cs.cmu.edu/",
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
            "برامج تفاعلية لمحاكاة جمع المتجهات وحساب المعيار في ثنائي وثلاثي الأبعاد",
          links: [
            {
              t: "PhET Interactive Simulation - Vector Addition",
              d: "أداة محاكاة تفاعلية من جامعة كولورادو لتركيب المتجهات واختبار خصائص الجمع والمعيار",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكاة",
                  url: "https://phet.colorado.edu/en/simulations/vector-addition",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeoGebra 3D Visualizer - 3D Vector Addition",
              d: "بيئة تفاعلية ثلاثية الأبعاد لبناء المتجهات وتحليل المركبات وتطبيق متباينة المثلث هندسياً",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة 3D",
                  url: "https://www.geogebra.org/3d",
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
          q: "Why is linear algebra described as important for computer graphics?",
          options: [
            "It is only used for drawing text",
            "It is only needed for hardware design",
            "It replaces the need for any programming",
            "It is an effective bridge between geometry, physics, etc., and computation",
          ],
          correct: 3,
        },
        {
          q: "According to the lecture, once you can express a graphics problem in terms of linear algebra, you are essentially done because:",
          options: [
            "The GPU automatically draws the result",
            "The problem no longer needs any input data",
            "The answer is always a single number",
            "You can ask the computer to solve Ax = b",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is listed as an area made possible by fast numerical linear algebra?",
          options: [
            "Image processing, physically-based animation, and geometry processing",
            "Only network routing",
            "Only database indexing",
            "Only file compression",
          ],
          correct: 0,
        },
        {
          q: "Linear algebra is defined in the lecture as the study of:",
          options: [
            "Only 3D rotations",
            "Vector spaces and linear maps between them",
            "Polynomials and nothing else",
            "Only matrices of integers",
          ],
          correct: 1,
        },
        {
          q: "What is the intuitive mental model of a vector used in the lecture?",
          options: [
            "A closed curve",
            "A grid of pixels",
            "A little arrow",
            "A single point",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is mentioned as data in graphics that may not look like arrows but still behaves like vectors?",
          options: [
            "Only file names",
            "Only integers",
            "Polynomials, images, and radiance",
            "Only text strings",
          ],
          correct: 2,
        },
        {
          q: "What information does a vector fundamentally encode?",
          options: [
            "Color and texture",
            "Only its starting point",
            "Position and mass",
            "Direction and magnitude",
          ],
          correct: 3,
        },
        {
          q: "A vector in 2D can be encoded by a length and an angle relative to a fixed direction. This is called:",
          options: [
            "Barycentric coordinates",
            "Homogeneous coordinates",
            "Polar coordinates",
            "Cartesian coordinates",
          ],
          correct: 2,
        },
        {
          q: "Traditionally, a vector does NOT include a:",
          options: ["Basepoint", "Direction", "Length", "Magnitude"],
          correct: 0,
        },
        {
          q: "A vector with a basepoint is sometimes called a:",
          options: [
            "Tangent vector",
            "Normal vector",
            "Unit vector",
            "Zero vector",
          ],
          correct: 0,
        },
        {
          q: "Measuring the components of a vector with respect to a chosen coordinate system gives which representation (named after Descartes)?",
          options: [
            "Spherical coordinates only",
            "Cartesian coordinates",
            "Polar coordinates",
            "Radiance coordinates",
          ],
          correct: 1,
        },
        {
          q: "What does the lecture warn about coordinates?",
          options: [
            "Only integer coordinates are valid",
            "You cannot directly compare coordinates in different systems, e.g., (r,θ) with (x,y)",
            "Coordinates can never be used on a computer",
            "Coordinates are always identical in every system",
          ],
          correct: 1,
        },
        {
          q: "The first basic operation on vectors shown in the lecture is addition. How is it done geometrically?",
          options: [
            "Rotating one arrow by 90 degrees",
            "Taking the longer of the two",
            "Multiplying their lengths",
            "Placing the arrows end to end",
          ],
          correct: 3,
        },
        {
          q: "The fact that u + v = v + u means vector addition is:",
          options: [
            "Non-linear",
            "Associative only",
            "Commutative (abelian)",
            "Distributive",
          ],
          correct: 2,
        },
        {
          q: "The term 'abelian' used for commutative addition comes from the name of:",
          options: [
            "René Descartes",
            "Isaac Newton",
            "Niels Henrik Abel",
            "Carl Friedrich Gauss",
          ],
          correct: 2,
        },
        {
          q: "The second basic operation on vectors is:",
          options: [
            "Sorting the components",
            "Dividing one vector by another",
            "Scaling by a number (scalar)",
            "Squaring a vector",
          ],
          correct: 2,
        },
        {
          q: "Which identity describes how scaling behaves with repeated scaling?",
          options: [
            "a(bu) = (a + b)u",
            "a(bu) = abu²",
            "a(bu) = a + bu",
            "a(bu) = (ab)u",
          ],
          correct: 3,
        },
        {
          q: "Which identity describes the interaction of addition and scaling?",
          options: [
            "a(u + v) = a + u + v",
            "a(u + v) = au · av",
            "a(u + v) = au + av",
            "a(u + v) = a(uv)",
          ],
          correct: 2,
        },
        {
          q: "According to the lecture, where do the rules (axioms) of a vector space come from?",
          options: [
            "They were given by an authority with no explanation",
            "They come only from computer hardware",
            "They are random conventions",
            "The geometric behavior of little arrows",
          ],
          correct: 3,
        },
        {
          q: "Any collection of objects satisfying all of the vector-space properties is called:",
          options: [
            "An invalid set",
            "A matrix",
            "A vector space, even if the objects do not look like little arrows",
            "A scalar field only",
          ],
          correct: 2,
        },
        {
          q: "The most common example of a vector space, denoted Rⁿ, means:",
          options: [
            "n functions",
            "n complex numbers",
            "n integers only",
            "n real numbers",
          ],
          correct: 3,
        },
        {
          q: "The tuple (1.23, 4.56, π/2) is a point in which space?",
          options: ["R³", "R¹", "R⁴", "R²"],
          correct: 0,
        },
        {
          q: "Why is Euclidean n-dimensional space such a common example? (choose the best answer)",
          options: [
            "It is the only vector space that exists",
            "It cannot represent images",
            "It looks a lot like the space we live in and is easy to encode on a computer as a list of floating-point numbers",
            "It needs no memory to store",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is given as another very important example of vector spaces in graphics?",
          options: [
            "Spaces of file names",
            "Spaces of passwords",
            "Spaces of functions",
            "Spaces of network packets",
          ],
          correct: 2,
        },
        {
          q: "Why are spaces of functions important in computer graphics?",
          options: [
            "They replace the need for coordinates",
            "Many objects we work with in graphics are functions",
            "Functions are always linear",
            "Functions never change",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is listed as an example of a function that behaves as a vector?",
          options: [
            "Only the size of a file",
            "Only memory addresses",
            "Only the keyboard state",
            "Images, radiance from a light source, surfaces, and modal vibrations",
          ],
          correct: 3,
        },
        {
          q: "How can two functions be added, according to the lecture?",
          options: [
            "Add their values at each point x",
            "Multiply their graphs",
            "Take the maximum of the two graphs",
            "It is not possible to add functions",
          ],
          correct: 0,
        },
        {
          q: "What is the 'zero vector' in a space of functions?",
          options: [
            "The function equal to one for all x",
            "There is no zero vector",
            "The function equal to zero for all x",
            "The function x",
          ],
          correct: 2,
        },
        {
          q: "Short answer given in the lecture: are functions vectors?",
          options: [
            "No, only arrows are vectors",
            "Only functions on [0,1] are",
            "Yes, even if they do not look like little arrows",
            "Only polynomial functions are",
          ],
          correct: 2,
        },
        {
          q: "After coming up with a rule for adding pairs of numbers, how does the lecture check that it faithfully encodes the geometry of little arrows?",
          options: [
            "Test it on a single example only",
            "Check that it agrees with the list of rules the arrows must obey",
            "Draw it once and trust it",
            "Assume it works since it looks simple",
          ],
          correct: 1,
        },
        {
          q: "How are vectors added in Cartesian coordinates?",
          options: [
            "Component by component: (u1,u2) + (v1,v2) = (u1+v1, u2+v2)",
            "By adding the lengths only",
            "By multiplying the components",
            "By adding only the first components",
          ],
          correct: 0,
        },
        {
          q: "According to the lecture, why is turning geometric observations into algebraic rules convenient?",
          options: [
            "It makes vectors non-commutative",
            "It is convenient for symbolic manipulation and numerical computation",
            "It is required by all graphics hardware",
            "It removes the need for geometry forever",
          ],
          correct: 1,
        },
        {
          q: "What should you always ask about a rule given to you by an authority?",
          options: [
            "Is it short enough to memorize?",
            "Who published it first?",
            "Where does this rule come from, and what does it mean geometrically (can you draw a picture)?",
            "Is it written in the textbook?",
          ],
          correct: 2,
        },
        {
          q: "How do we scale a vector in coordinates?",
          options: [
            "Divide the scalar by each component",
            "Add the scalar to each component",
            "Multiply each component by the scalar",
            "Multiply only the first component",
          ],
          correct: 2,
        },
        {
          q: "What is (3/2)·(4,2)?",
          options: ["(6, 3)", "(4, 3)", "(5.5, 3.5)", "(12, 6)"],
          correct: 0,
        },
        {
          q: "The midpoint m of two points a and b is computed as:",
          options: ["m = 2(a + b)", "m = a − b", "m = ½(a + b)", "m = a · b"],
          correct: 2,
        },
        {
          q: "What is the midpoint of a = (3,4) and b = (7,2)?",
          options: ["(10, 6)", "(5, 3)", "(4, 2)", "(5, 6)"],
          correct: 1,
        },
        {
          q: "The midpoint example is used to show that:",
          options: [
            "Vectors cannot be added to points",
            "Combining vector operations builds up operations needed for computer graphics",
            "Midpoints cannot be computed with vectors",
            "Scaling is not a valid operation",
          ],
          correct: 1,
        },
        {
          q: "What two quantities does a vector encode that we want to measure?",
          options: [
            "Orientation (direction) and magnitude",
            "Origin and destination only",
            "Mass and velocity",
            "Color and brightness",
          ],
          correct: 0,
        },
        {
          q: "The number |v| assigned to a vector v is called its:",
          options: [
            "Basepoint",
            "Scalar field",
            "Component",
            "Length, magnitude, or norm",
          ],
          correct: 3,
        },
        {
          q: "Intuitively, the norm of a vector should capture:",
          options: [
            "Where it starts",
            "How 'big' the vector is",
            "Which direction it points",
            "How many components it has",
          ],
          correct: 1,
        },
        {
          q: "Which natural property says the norm should not be negative?",
          options: [
            "Commutativity",
            "Positivity: |u| ≥ 0",
            "Triangle inequality",
            "Homogeneity: |cu| = |c||u|",
          ],
          correct: 1,
        },
        {
          q: "A norm should be zero only for:",
          options: [
            "Every unit vector",
            "The zero vector",
            "Any vector in R²",
            "Every vector of length one",
          ],
          correct: 1,
        },
        {
          q: "If a vector is scaled by a factor c, its norm should:",
          options: [
            "Stay the same",
            "Become c²",
            "Scale by the same amount: |cu| = |c||u|",
            "Become negative",
          ],
          correct: 2,
        },
        {
          q: "Which norm property expresses that the shortest path between two points is a straight line?",
          options: [
            "|u + v| ≤ |u| + |v|",
            "|u + v| = 0",
            "|u + v| ≥ |u| + |v|",
            "|u + v| = |u| · |v|",
          ],
          correct: 0,
        },
        {
          q: "The slide says the final norm property is sometimes called the 'pentagon inequality' because:",
          options: [
            "It only applies in five dimensions",
            "The diagram looks like a pentagon",
            "It involves five vectors",
            "It was discovered by a mathematician named Penta",
          ],
          correct: 1,
        },
        {
          q: "According to the formal definition, a norm is:",
          options: [
            "Only the length of an arrow in 2D",
            "Any function of a vector, with no conditions",
            "Any function that assigns a number to each vector and satisfies the norm properties for all vectors u, v and all scalars a",
            "Only the square root of a sum of squares",
          ],
          correct: 2,
        },
        {
          q: "Each norm rule has a concrete geometric picture that explains:",
          options: [
            "Which hardware to use",
            "Why the rule is there",
            "How to draw a texture",
            "How to avoid using it",
          ],
          correct: 1,
        },
        {
          q: "What is the standard norm of n-vectors called?",
          options: [
            "The Manhattan norm",
            "The Euclidean norm",
            "The polar norm",
            "The L2 function norm",
          ],
          correct: 1,
        },
        {
          q: "The Euclidean norm of u = (u1, …, un) is:",
          options: [
            "The product of the uᵢ",
            "The square root of the sum of uᵢ² (i = 1 to n)",
            "The largest uᵢ",
            "The sum of the uᵢ",
          ],
          correct: 1,
        },
        {
          q: "What is the Euclidean norm of u = (4, 2)?",
          options: ["6", "2√5", "8", "√6"],
          correct: 1,
        },
        {
          q: "The L² norm of functions measures:",
          options: [
            "The total magnitude of a function",
            "The slope at a single point",
            "The maximum input value",
            "The number of zeros of a function",
          ],
          correct: 0,
        },
        {
          q: "The L² norm in the lecture is defined for functions on which domain?",
          options: [
            "All functions on the real line with no conditions",
            "Only integer-valued functions",
            "Only functions on [0,10]",
            "Real-valued functions on the unit interval [0,1] whose square has a well-defined integral",
          ],
          correct: 3,
        },
        {
          q: "The L² norm of a function f on [0,1] is defined as:",
          options: [
            "The sum of f at the endpoints",
            "The integral of f(x) from 0 to 1",
            "The maximum of f(x)",
            "The square root of the integral of f(x)² from 0 to 1",
          ],
          correct: 3,
        },
        {
          q: "How does the L² norm differ from the Euclidean norm, as described in the lecture?",
          options: [
            "We replaced the square root with a logarithm",
            "There is no relationship between them",
            "We replaced squares with cubes",
            "We just replaced a sum with an integral",
          ],
          correct: 3,
        },
        {
          q: "For f(x) = √3·x on [0,1], what is ||f||²?",
          options: ["√3", "3", "∫₀¹ 3x² dx = 1", "0"],
          correct: 2,
        },
        {
          q: "What is the L² norm ||f|| of f(x) = √3·x on [0,1]?",
          options: ["√3", "3", "0", "1"],
          correct: 3,
        },
        {
          q: "Which notation does the lecture use for the norm of a function versus the norm of a vector in Rⁿ?",
          options: [
            "Both use ||·||",
            "Both use |·|",
            "|·| for a function and ||·|| for a vector",
            "||·|| for a function and |·| for a vector in Rⁿ",
          ],
          correct: 3,
        },
        {
          q: "What does the lecture say about how most integrals in graphics are calculated?",
          options: [
            "All are calculated by hand exactly",
            "They are never needed in graphics",
            "They are always replaced by matrices",
            "Most are not calculated analytically like this; numerical integration will be discussed later",
          ],
          correct: 3,
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Why is linear algebra important for computer graphics, according to the lecture?",
          answer:
            "• It is an effective bridge between geometry, physics, etc., and computation.\n" +
            "• In many areas of graphics, once a problem is expressed in linear algebra, you are essentially done: you ask the computer to solve Ax = b.\n" +
            "• Fast numerical linear algebra has made modern computer graphics possible (image processing, physically-based animation, geometry processing).",
          tags: ["Lecture 2", "Linear algebra", "Motivation"],
          ref: "Lecture 2 — Linear Algebra",
        },
        {
          type: "essay",
          q: "Explain the two basic vector operations and the rules they obey, and where those rules come from. Why can functions also be treated as vectors?",
          answer:
            "Two basic operations:\n" +
            "• Addition: place vectors end to end. It is commutative (abelian): u + v = v + u.\n" +
            "• Scaling: multiply a vector by a scalar a to get au. It behaves as expected, e.g., a(bu) = (ab)u.\n" +
            "• Interaction: a(u + v) = au + av.\n" +
            "\n" +
            "Where the rules come from:\n" +
            "• Each rule comes from the geometric behavior of 'little arrows'; the rules did not 'fall out of the sky'.\n" +
            "• Any collection of objects satisfying all the properties is a vector space, even if the objects do not look like arrows.\n" +
            "\n" +
            "Functions as vectors:\n" +
            "• Many objects in graphics are functions (images, radiance from a light source, surfaces, modal vibrations).\n" +
            "• Functions can be added and scaled, and the other properties hold too (e.g., the zero vector is the function equal to zero for all x), so functions are vectors.",
          tags: ["Lecture 2", "Vector spaces", "Functions as vectors"],
          ref: "Lecture 2 — Linear Algebra",
        },
        {
          type: "essay",
          q: "What properties should a norm satisfy? Give the Euclidean norm and the L² norm, with one worked example of each.",
          answer:
            "Natural properties of a norm:\n" +
            "• Positivity: |u| ≥ 0, and |u| = 0 only for the zero vector.\n" +
            "• Scaling: |cu| = |c||u|.\n" +
            "• Triangle inequality (the 'shortest path is a straight line' property): |u + v| ≤ |u| + |v|.\n" +
            "\n" +
            "Euclidean norm (vectors in Rⁿ):\n" +
            "• |u| = √(Σ uᵢ²). Example: u = (4,2) gives |u| = √(4² + 2²) = 2√5.\n" +
            "\n" +
            "L² norm (functions on [0,1]):\n" +
            "• ||f|| = √(∫₀¹ f(x)² dx), i.e., the Euclidean norm with a sum replaced by an integral.\n" +
            "• Example: f(x) = √3·x gives ||f||² = ∫₀¹ 3x² dx = [x³]₀¹ = 1, so ||f|| = 1.",
          tags: ["Lecture 2", "Norms", "Euclidean norm", "L2 norm"],
          ref: "Lecture 2 — Linear Algebra",
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
