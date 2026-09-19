subjects.push({
  name: "الرسم بالحاسب",
  en: "Computer Graphics",
  icon: "🎨",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في رسوميات الحاسب وأنابيب الرسم (Graphics Pipeline).",
      pdf: "Computer Graphics/lectures/Lecture 2.pdf",
      pdf2: "Computer Graphics/lectures/Lecture 1 - Questions - Computer Graphics.pdf",
      links: [
        {
          t: "دليل المحاضرة الوظيفي",
          d: "شرح تفصيلي لمحاور المحاضرة",
          icon: "📘",
          actions: [
            {
              label: "📖 الشرح",
              url: "https://youtube.com/watch?v=XXXX",
              type: "view",
            },
          ],
        },
        {
          t: "الاسلايدات التعليمية (Slides)",
          d: "عرض شرائح المحاضرة",
          icon: "📑",
          actions: [
            {
              label: "PDF ⭳ تحميل",
              url: "Computer Graphics/slides/Slides 1.pdf",
              type: "download",
              color: "green",
            },
            {
              label: "PowerPoint ⭳ تحميل",
              url: "Computer Graphics/slides/Slides 1.pptx",
              type: "download",
              color: "orange",
            },
          ],
        },
        {
          t: "موقع الإنترنت التفاعلي",
          d: "محاكاة تجريبية للمحاضرة",
          icon: "🌐",
          actions: [
            {
              label: "🚀 فتح الموقع",
              url: "https://example.com",
              type: "view",
            },
          ],
        },
      ],
      questions: [
        {
          q: "Which of the following is enough on its own to create the appearance of three dimensions on a 2D screen?",
          options: ["Color", "Perspective", "Texture mapping", "Fog"],
          correct: 1,
        },
        {
          q: "Hiding the back sides of solid geometry mainly helps in:",
          options: [
            "Saving memory",
            "Enhancing the 3D illusion",
            "Avoiding transparency issues",
            "Increasing color realism",
          ],
          correct: 1,
        },
        {
          q: "Adding different colors to objects increases:",
          options: [
            "Realism",
            "Processing time",
            "The illusion of three dimensions",
            "Anti-aliasing",
          ],
          correct: 2,
        },
        {
          q: "Proper shading creates the illusion of:",
          options: ["Motion", "Illumination", "Depth buffer", "Antialiasing"],
          correct: 1,
        },
        {
          q: "Which effect provides a convincing illusion for wide-open spaces?",
          options: ["Antialiasing", "Fog", "Shading", "Blending"],
          correct: 1,
        },
        {
          q: "Blending in 3D graphics is commonly used to achieve:",
          options: [
            "Polygon filling",
            "Reflection effects",
            "Hidden surface removal",
            "Line stippling",
          ],
          correct: 1,
        },
        {
          q: "Antialiasing is mainly used to:",
          options: [
            "Add shadows",
            "Remove background noise",
            "Smooth jagged edges",
            "Increase frame rate",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is NOT a common real-time 3D application?",
          options: [
            "Flight simulator",
            "CAD",
            "Medical imaging",
            "Movie rendering like Shrek",
          ],
          correct: 3,
        },
        {
          q: "Non-real-time 3D rendering is typically used for:",
          options: [
            "Games",
            "Scientific visualization",
            "Movies",
            "Flight simulators",
          ],
          correct: 2,
        },
        {
          q: "Rendering a single high-quality movie frame may take:",
          options: ["Seconds", "Minutes", "Hours", "Days"],
          correct: 2,
        },
        {
          q: "What does GPU stand for?",
          options: [
            "General Processing Unit",
            "Graphics Processing Unit",
            "Graphic Program Utility",
            "General Pixel Utility",
          ],
          correct: 1,
        },
        {
          q: "Shaders allow for:",
          options: [
            "Slower rendering",
            "Hardware-only lighting",
            "Real-time realism",
            "Only color adjustment",
          ],
          correct: 2,
        },
        {
          q: "OpenGL is best described as:",
          options: [
            "A programming language",
            "A software interface to graphics hardware",
            "A Windows-only API",
            "A 3D rendering engine",
          ],
          correct: 1,
        },
        {
          q: "OpenGL is designed as:",
          options: [
            "Hardware-dependent",
            "Hardware-independent",
            "CPU-based only",
            "GPU-based only",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is NOT true about OpenGL?",
          options: [
            "It is not a programming language like C++",
            "It provides high-level commands for complex shapes",
            "Models must be built from primitives like points, lines, and polygons",
            "It works across platforms",
          ],
          correct: 1,
        },
        {
          q: "OpenGL commands usually start with:",
          options: ["op", "gl", "og", "gx"],
          correct: 1,
        },
        {
          q: "Which of the following OpenGL auxiliary libraries was the first to exist?",
          options: ["freeglut", "GLUT", "AUX", "GLU"],
          correct: 2,
        },
        {
          q: "AUX was later replaced by:",
          options: ["GLX", "GLUT", "Direct3D", "OpenGL ES"],
          correct: 1,
        },
        {
          q: "GLUT stands for:",
          options: [
            "General Light Utility Toolkit",
            "Graphics Layer Unified Tool",
            "OpenGL Utility Toolkit",
            "General Library for Utility Textures",
          ],
          correct: 2,
        },
        {
          q: "Which operating system discontinued GLUT development?",
          options: ["Linux", "Windows", "MacOS", "Solaris"],
          correct: 1,
        },
        {
          q: "The modern replacement for GLUT is:",
          options: ["Freeglut", "GLU", "DirectX", "Vulkan"],
          correct: 0,
        },
        {
          q: "OpenGL does not directly handle:",
          options: [
            "Keyboard input",
            "Mouse input",
            "Window management",
            "All of the above",
          ],
          correct: 3,
        },
        {
          q: "Which company originally created OpenGL?",
          options: ["Microsoft", "Apple", "Silicon Graphics (SGI)", "Intel"],
          correct: 2,
        },
        {
          q: "OpenGL's cross-platform mobile subset is called:",
          options: ["OpenGL Mini", "OpenGL ES", "OpenGL Lite", "OpenGL Mobile"],
          correct: 1,
        },
        {
          q: "A hardware OpenGL implementation is often referred to as:",
          options: [
            "Native implementation",
            "Accelerated implementation",
            "Compact implementation",
            "Local implementation",
          ],
          correct: 1,
        },
        {
          q: "Which function is used in OpenGL to clear the screen?",
          options: ["glClearWindow()", "glClear()", "glReset()", "glWipe()"],
          correct: 1,
        },
        {
          q: "Which buffer is cleared using GL_COLOR_BUFFER_BIT?",
          options: [
            "Color buffer",
            "Depth buffer",
            "Stencil buffer",
            "Texture buffer",
          ],
          correct: 0,
        },
        {
          q: "Which OpenGL command sets the window clearing color?",
          options: [
            "glSetClear()",
            "glClearColor()",
            "glColorBuffer()",
            "glClear()",
          ],
          correct: 1,
        },
        {
          q: "The glFlush() command is used to:",
          options: [
            "Stop OpenGL execution",
            "Clear the screen",
            "Force all issued commands to execute",
            "Reset color settings",
          ],
          correct: 2,
        },
        {
          q: "The GLUT function glutMainLoop() is used to:",
          options: [
            "Initialize OpenGL",
            "Enter the event processing loop",
            "Exit the program",
            "Set the window size",
          ],
          correct: 1,
        },
        {
          q: "In OpenGL, the suffix f in a function name usually indicates:",
          options: [
            "Boolean data type",
            "Integer data type",
            "Float data type",
            "Double data type",
          ],
          correct: 2,
        },
        {
          q: "Which suffix corresponds to a 64-bit floating-point in OpenGL?",
          options: ["f", "d", "i", "s"],
          correct: 1,
        },
        {
          q: "The suffix i in OpenGL corresponds to which data type?",
          options: [
            "8-bit integer",
            "16-bit integer",
            "32-bit integer",
            "Boolean",
          ],
          correct: 2,
        },
        {
          q: "The command glVertex2i(1, 3); is equivalent to:",
          options: [
            "glVertex2f(1, 3)",
            "glVertex2f(1.0, 3.0)",
            "glVertex2d(1, 3)",
            "glVertex2s(1, 3)",
          ],
          correct: 1,
        },
        {
          q: "Which OpenGL function sets the viewport size?",
          options: [
            "glSetViewport()",
            "glViewport()",
            "glWindowSize()",
            "glOrtho()",
          ],
          correct: 1,
        },
        {
          q: "The purpose of redefining the clipping volume in ChangeSize is to:",
          options: [
            "Adjust window color",
            "Keep the aspect ratio consistent",
            "Enable depth testing",
            "Reduce CPU usage",
          ],
          correct: 1,
        },
        {
          q: "Which function defines the clipping volume in OpenGL?",
          options: [
            "glClearDepth()",
            "glViewport()",
            "glOrtho()",
            "glPolygonMode()",
          ],
          correct: 2,
        },
        {
          q: "In glOrtho(left, right, bottom, top, near, far), the near and far parameters control:",
          options: [
            "Lighting",
            "The z-axis range",
            "The background color",
            "The polygon fill mode",
          ],
          correct: 1,
        },
        {
          q: "If a viewport is rectangular but mapped to a square clipping volume, the image appears:",
          options: ["Enlarged", "Distorted", "Antialiased", "Transparent"],
          correct: 1,
        },
        {
          q: "In the bouncing square example, what is used to reverse direction when reaching an edge?",
          options: [
            "glClear()",
            "Changing step sign (xstep/ystep)",
            "glOrtho()",
            "glEnable()",
          ],
          correct: 1,
        },
        {
          q: "Which GLUT function is used to register a timer callback?",
          options: [
            "glutIdleFunc()",
            "glutTimerFunc()",
            "glutReshapeFunc()",
            "glutPostRedisplay()",
          ],
          correct: 1,
        },
        {
          q: "The parameter msecs in glutTimerFunc specifies:",
          options: [
            "Seconds",
            "Milliseconds",
            "Nanoseconds",
            "Frames per second",
          ],
          correct: 1,
        },
        {
          q: "In the timer callback, the function prototype must be:",
          options: [
            "void TimerFunction();",
            "void TimerFunction(int value);",
            "void TimerFunc(float value);",
            "void TimerFunc();",
          ],
          correct: 1,
        },
        {
          q: "In OpenGL, the command glutPostRedisplay() is used to:",
          options: [
            "Force the scene to redraw",
            "Initialize the main loop",
            "Clear the screen",
            "Resize the viewport",
          ],
          correct: 0,
        },
        {
          q: "Which display mode flag enables double buffering in GLUT?",
          options: ["GLUT_SINGLE", "GLUT_DOUBLE", "GLUT_RGBA", "GLUT_DEPTH"],
          correct: 1,
        },
        {
          q: "In the bouncing square program, double buffering is needed because:",
          options: [
            "It improves performance",
            "It avoids flickering",
            "It supports transparency",
            "It reduces memory usage",
          ],
          correct: 1,
        },
        {
          q: "OpenGL is described as a:",
          options: [
            "Shader compiler",
            "State machine",
            "Rendering engine",
            "Scene graph library",
          ],
          correct: 1,
        },
        {
          q: "In OpenGL, the current drawing color is an example of a:",
          options: [
            "State variable",
            "Function",
            "Shader program",
            "Texture coordinate",
          ],
          correct: 0,
        },
        {
          q: "To enable a mode in OpenGL, which function is used?",
          options: ["glEnable()", "glActivate()", "glSetMode()", "glRunMode()"],
          correct: 0,
        },
        {
          q: "Which command disables a specific OpenGL mode?",
          options: [
            "glModeOff()",
            "glDisable()",
            "glExitMode()",
            "glResetMode()",
          ],
          correct: 1,
        },
        {
          q: "To query the value of an OpenGL float state variable, you use:",
          options: [
            "glGetFloat()",
            "glGetInteger()",
            "glGetBoolean()",
            "glGetDouble()",
          ],
          correct: 0,
        },
        {
          q: "The command glPushAttrib(GL_TEXTURE_BIT | GL_LIGHTING_BIT) is used to:",
          options: [
            "Enable texture and lighting",
            "Save texture and lighting states",
            "Reset all attributes",
            "Clear the depth buffer",
          ],
          correct: 1,
        },
        {
          q: "Which function restores previously saved OpenGL attributes?",
          options: [
            "glRestore()",
            "glPopAttrib()",
            "glEnable()",
            "glPopState()",
          ],
          correct: 1,
        },
        {
          q: "The command glColor3f(1.0, 0.0, 0.0) sets the current color to:",
          options: ["Green", "Blue", "Red", "White"],
          correct: 2,
        },
        {
          q: "The command glColor3f(0.0, 0.0, 0.0) sets the current color to:",
          options: ["White", "Black", "Cyan", "Magenta"],
          correct: 1,
        },
        {
          q: "If you call glColor3f(0.0, 1.0, 0.0), the color is:",
          options: ["Red", "Blue", "Green", "Yellow"],
          correct: 2,
        },
        {
          q: "The color cyan is represented in OpenGL by:",
          options: [
            "(0.0, 1.0, 0.0)",
            "(1.0, 0.0, 1.0)",
            "(0.0, 1.0, 1.0)",
            "(1.0, 1.0, 0.0)",
          ],
          correct: 2,
        },
        {
          q: "The process of ensuring only visible surfaces are drawn is called:",
          options: [
            "Antialiasing",
            "Hidden-surface removal",
            "Fogging",
            "Culling",
          ],
          correct: 1,
        },
        {
          q: "OpenGL uses which algorithm for hidden-surface removal?",
          options: [
            "Painter's algorithm",
            "Z-buffer algorithm",
            "Scanline algorithm",
            "Ray tracing",
          ],
          correct: 1,
        },
        {
          q: "In z-buffering, the z-buffer stores:",
          options: [
            "Colors of each pixel",
            "Depth values of each pixel",
            "Lighting coefficients",
            "Texture coordinates",
          ],
          correct: 1,
        },
        {
          q: "The z-buffer algorithm is also known as:",
          options: [
            "Depth-buffering",
            "Scanline algorithm",
            "Ray tracing",
            "Back-face culling",
          ],
          correct: 0,
        },
        {
          q: "In z-buffering, if a new pixel is closer than the stored value, it:",
          options: [
            "Is ignored",
            "Replaces the buffered value",
            "Causes an error",
            "Makes the frame flicker",
          ],
          correct: 1,
        },
        {
          q: "Which GLUT flag should be set to enable depth buffering?",
          options: ["GLUT_RGBA", "GLUT_DEPTH", "GLUT_SINGLE", "GLUT_DOUBLE"],
          correct: 1,
        },
        {
          q: "The OpenGL command to enable depth testing is:",
          options: [
            "glEnable(GL_DEPTH_TEST)",
            "glDepthBufferOn()",
            "glInitDepth()",
            "glCheckDepth()",
          ],
          correct: 0,
        },
        {
          q: "Which OpenGL error occurs if the enum argument is out of range?",
          options: [
            "GL_INVALID_VALUE",
            "GL_INVALID_ENUM",
            "GL_STACK_OVERFLOW",
            "GL_OUT_OF_MEMORY",
          ],
          correct: 1,
        },
        {
          q: "The OpenGL error GL_STACK_UNDERFLOW occurs when:",
          options: [
            "The color stack is full",
            "A stack is popped when empty",
            "The memory is low",
            "An enum is out of range",
          ],
          correct: 1,
        },
        {
          q: "Which error code indicates insufficient memory?",
          options: [
            "GL_OUT_OF_MEMORY",
            "GL_NO_ERROR",
            "GL_INVALID_OPERATION",
            "GL_STACK_OVERFLOW",
          ],
          correct: 0,
        },
        {
          q: "Which function retrieves the latest error in OpenGL?",
          options: [
            "glError()",
            "glCheckError()",
            "glGetError()",
            "gluError()",
          ],
          correct: 2,
        },
        {
          q: "To get a human-readable string for an OpenGL error, use:",
          options: [
            "glErrorString()",
            "gluErrorString()",
            "glGetErrorText()",
            "glMessageError()",
          ],
          correct: 1,
        },
        {
          q: "In OpenGL, geometric shapes are built using:",
          options: [
            "High-level primitives",
            "Points, lines, and polygons",
            "Meshes only",
            "Texture maps",
          ],
          correct: 1,
        },
        {
          q: "To start drawing a primitive, the OpenGL command is:",
          options: ["glBegin()", "glDraw()", "glPrimitive()", "glInitShape()"],
          correct: 0,
        },
        {
          q: "To end the definition of a primitive, use:",
          options: ["glStop()", "glEnd()", "glFlush()", "glCloseShape()"],
          correct: 1,
        },
        {
          q: "The primitive GL_POINTS is used to:",
          options: [
            "Draw filled polygons",
            "Draw vertices as points",
            "Draw connected lines",
            "Draw triangle strips",
          ],
          correct: 1,
        },
        {
          q: "The function glPointSize(size) sets:",
          options: [
            "Point size in world units",
            "Point size in pixels",
            "Point size in depth values",
            "Point color intensity",
          ],
          correct: 1,
        },
        {
          q: "By default, points drawn in OpenGL are:",
          options: ["Round", "Rectangular", "Square pixels", "Depth-scaled"],
          correct: 2,
        },
        {
          q: "To set line width, which command is used?",
          options: [
            "glSetLineWidth()",
            "glLineSize()",
            "glLineWidth()",
            "glStrokeWidth()",
          ],
          correct: 2,
        },
        {
          q: "The Microsoft OpenGL implementation allows line widths from:",
          options: ["0.1 to 5.0", "0.5 to 10.0", "1.0 to 20.0", "2.0 to 15.0"],
          correct: 1,
        },
        {
          q: "The function to enable line stippling is:",
          options: [
            "glEnable(GL_LINE_STIPPLE)",
            "glLineStyle()",
            "glEnableLinePattern()",
            "glPatternOn()",
          ],
          correct: 0,
        },
        {
          q: "The function glLineStipple(factor, pattern) uses:",
          options: [
            "A 32-bit color value",
            "A 16-bit pattern of 0s and 1s",
            "A float range",
            "A boolean argument",
          ],
          correct: 1,
        },
        {
          q: "In line stippling, a bit 1 means:",
          options: ["Skip pixel", "Draw pixel", "Draw twice", "Erase pixel"],
          correct: 1,
        },
        {
          q: "Which primitive is used to draw connected lines?",
          options: ["GL_LINE_LOOP", "GL_LINE_STRIP", "GL_LINES", "GL_POINTS"],
          correct: 1,
        },
        {
          q: "Which primitive closes the loop by connecting the last vertex to the first?",
          options: [
            "GL_LINE_STRIP",
            "GL_LINE_LOOP",
            "GL_POLYGON",
            "GL_TRIANGLES",
          ],
          correct: 1,
        },
        {
          q: "Which OpenGL primitive is preferred for hardware acceleration?",
          options: ["Quads", "Polygons", "Triangles", "Points"],
          correct: 2,
        },
        {
          q: "By default, OpenGL considers which winding order as front-facing?",
          options: [
            "Clockwise (CW)",
            "Counterclockwise (CCW)",
            "Both CW and CCW",
            "Random",
          ],
          correct: 1,
        },
        {
          q: "To change front-facing winding to clockwise, call:",
          options: [
            "glFrontFace(GL_CCW)",
            "glFrontFace(GL_CW)",
            "glEnable(GL_CULL_FACE)",
            "glPolygonMode(GL_CW)",
          ],
          correct: 1,
        },
        {
          q: "Which primitive type draws a connected strip of triangles?",
          options: [
            "GL_TRIANGLES",
            "GL_TRIANGLE_STRIP",
            "GL_TRIANGLE_FAN",
            "GL_POLYGON",
          ],
          correct: 1,
        },
        {
          q: "Which primitive type draws triangles radiating out from a central point?",
          options: [
            "GL_TRIANGLE_STRIP",
            "GL_TRIANGLE_FAN",
            "GL_TRIANGLES",
            "GL_QUADS",
          ],
          correct: 1,
        },
        {
          q: "Which OpenGL primitive draws a four-sided polygon?",
          options: ["GL_QUADS", "GL_QUAD_STRIP", "GL_POLYGON", "GL_RECT"],
          correct: 0,
        },
        {
          q: "When using GL_QUADS, what must be true about the four vertices?",
          options: [
            "They must be convex",
            "They must be planar",
            "They must be normalized",
            "They must be clockwise",
          ],
          correct: 1,
        },
        {
          q: "A GL_QUAD_STRIP requires how many vertices for the first quad?",
          options: ["2", "3", "4", "5"],
          correct: 2,
        },
        {
          q: "Polygon stippling uses which size bitmap for its pattern?",
          options: ["16×16", "32×32", "64×64", "8×8"],
          correct: 1,
        },
        {
          q: "To enable polygon stippling in OpenGL, use:",
          options: [
            "glEnable(GL_LINE_STIPPLE)",
            "glEnable(GL_POLYGON_STIPPLE)",
            "glEnable(GL_TEXTURE)",
            "glEnable(GL_FILL_PATTERN)",
          ],
          correct: 1,
        },
        {
          q: "A polygon is valid in OpenGL only if:",
          options: [
            "Its vertices are round numbers",
            "It is convex and planar",
            "It is colored",
            "It is stippled",
          ],
          correct: 1,
        },
        {
          q: "If a polygon's edges intersect, the polygon is considered:",
          options: ["Convex", "Concave", "Invalid", "Hidden"],
          correct: 2,
        },
        {
          q: "OpenGL can directly draw only:",
          options: [
            "Concave polygons",
            "Convex polygons",
            "Arbitrary polygons",
            "High-level meshes",
          ],
          correct: 1,
        },
        {
          q: "By default, polygons are drawn in OpenGL as:",
          options: ["Wireframe", "Points", "Filled solids", "Transparent"],
          correct: 2,
        },
        {
          q: "The command glPolygonMode(GL_BACK, GL_LINE) makes the back faces appear as:",
          options: [
            "Filled polygons",
            "Outlined polygons",
            "Transparent",
            "Points",
          ],
          correct: 1,
        },
        {
          q: "The function to discard back-facing polygons is:",
          options: [
            "glCullFace()",
            "glBackFace()",
            "glDiscardFace()",
            "glHiddenFace()",
          ],
          correct: 0,
        },
        {
          q: "To enable polygon culling, you must also call:",
          options: [
            "glEnable(GL_CULL_FACE)",
            "glCullOn()",
            "glPolygonMode(GL_CULL)",
            "glEnable(GL_HIDDEN_SURFACE)",
          ],
          correct: 0,
        },
        {
          q: "By default, OpenGL assumes front-facing polygons are:",
          options: ["CW", "CCW", "Random", "Both"],
          correct: 1,
        },
        {
          q: "Which command manually controls boundary edges?",
          options: [
            "glPolygonMode()",
            "glEdgeFlag()",
            "glCullFace()",
            "glLineStipple()",
          ],
          correct: 1,
        },
        {
          q: "The main purpose of normal vectors in OpenGL is:",
          options: [
            "Hidden-surface removal",
            "Texture mapping",
            "Lighting calculations",
            "Antialiasing",
          ],
          correct: 2,
        },
        {
          q: "For a polygon, the normal vector can be computed using:",
          options: [
            "Addition of vertices",
            "Cross product of edges",
            "Dot product of vertices",
            "Average of coordinates",
          ],
          correct: 1,
        },
        {
          q: "If four polygons meet at a point P, the normal for P is usually:",
          options: [
            "Chosen randomly",
            "The longest normal vector",
            "The average of the four normals",
            "The shortest normal vector",
          ],
          correct: 2,
        },
        {
          q: "The gradient of an implicit surface equation F(x,y,z) = 0 gives:",
          options: [
            "Tangent vector",
            "Normal vector",
            "Vertex coordinates",
            "Light direction",
          ],
          correct: 1,
        },
        {
          q: "The unit normal vector is obtained by:",
          options: [
            "Taking the dot product",
            "Normalizing the vector",
            "Adding vectors",
            "Multiplying by z-buffer",
          ],
          correct: 1,
        },
        {
          q: "An icosahedron is often used as:",
          options: [
            "A cube substitute",
            "An approximation of a sphere",
            "A tetrahedron replacement",
            "A pyramid model",
          ],
          correct: 1,
        },
        {
          q: "The OpenGL primitive used for constructing the icosahedron faces is:",
          options: ["GL_QUADS", "GL_TRIANGLES", "GL_POLYGON", "GL_LINES"],
          correct: 1,
        },
        {
          q: "When drawing an icosahedron, adding different colors to each face helps to:",
          options: [
            "Reduce z-buffer usage",
            "Show its 3D quality",
            "Eliminate culling",
            "Smooth edges",
          ],
          correct: 1,
        },
        {
          q: "Normal vectors for an icosahedron can be calculated using:",
          options: [
            "Vector addition",
            "Normalized cross product",
            "Scalar multiplication",
            "Dot product",
          ],
          correct: 1,
        },
        {
          q: "The OpenGL command glNormal3fv() is used to:",
          options: [
            "Define texture coordinates",
            "Specify normal vectors",
            "Query state variables",
            "Initialize lighting",
          ],
          correct: 1,
        },
        {
          q: "In the cube rotation program, which function rotates the cube?",
          options: [
            "glTranslatef()",
            "glRotatef()",
            "glScalef()",
            "glColor3f()",
          ],
          correct: 1,
        },
        {
          q: "Which GLUT function handles mouse input in the cube program?",
          options: [
            "glutMouseFunc()",
            "glutKeyboardFunc()",
            "glutMotionFunc()",
            "glutPassiveMouseFunc()",
          ],
          correct: 0,
        },
        {
          q: "In the cube program, which key exits the program?",
          options: ["W", "Q", "E", "ESC"],
          correct: 1,
        },
        {
          q: "The cube program uses which projection function to define a 3D box space?",
          options: [
            "glFrustum()",
            "glPerspective()",
            "glOrtho()",
            "gluLookAt()",
          ],
          correct: 2,
        },
        {
          q: "Which OpenGL function swaps the front and back buffers?",
          options: [
            "glFlush()",
            "glutSwapBuffers()",
            "glBufferSwap()",
            "glClearBuffer()",
          ],
          correct: 1,
        },
        {
          q: "Which OpenGL matrix mode is used for setting projection transformations?",
          options: [
            "GL_MODELVIEW",
            "GL_TEXTURE",
            "GL_PROJECTION",
            "GL_VIEWPORT",
          ],
          correct: 2,
        },
        {
          q: "Which OpenGL matrix mode is typically used for camera transformations?",
          options: [
            "GL_MODELVIEW",
            "GL_TEXTURE",
            "GL_PROJECTION",
            "GL_NORMALS",
          ],
          correct: 0,
        },
        {
          q: "In the cube program, rotating with the left mouse button does what?",
          options: [
            "Rotates cube clockwise",
            "Rotates cube counterclockwise",
            "Stops rotation",
            "Resets view",
          ],
          correct: 0,
        },
        {
          q: "The glClearColor(0.0, 0.0, 0.0, 0.0) in the cube program sets the background to:",
          options: ["White", "Red", "Blue", "Black"],
          correct: 3,
        },
      ],
    },
    {
      t: "المحاضرة الثانية",
      d: "التحويلات الهندسية ثنائية الأبعاد (2D Transformations).",
      pdf: "Computer Graphics/lectures/Lecture 2.pdf",
      questions: [
        {
          q: "التحويل الذي يضرب الإحداثيات في معامل لتكبير أو تصغير الشكل هو:",
          options: [
            "الإزاحة Translation",
            "الدوران Rotation",
            "التحجيم Scaling",
            "الانعكاس Reflection",
          ],
          correct: 2,
        },
        {
          q: "لتحريك شكل من مكان لمكان نستخدم:",
          options: ["Translation", "Rotation", "Scaling", "Shear"],
          correct: 0,
        },
        {
          q: "مصفوفة الدوران تعتمد على الدوال:",
          options: ["sin و cos", "log و exp", "max و min", "abs و sqrt"],
          correct: 0,
        },
      ],
    },
    {
      t: "المحاضرة الثالثة",
      d: "خوارزميات رسم الخطوط والتعبئة (Bresenham & Fill).",
      pdf: "Computer Graphics/lectures/Lecture 3.pdf",
      questions: [
        {
          q: "خوارزمية Bresenham تُستخدم أساساً لـ:",
          options: [
            "رسم الخطوط بأعداد صحيحة بكفاءة عالية",
            "تعبئة الدوائر فقط",
            "ضغط الصور",
            "تلوين المضلعات بالتدرج",
          ],
          correct: 0,
        },
        {
          q: "خوارزمية Flood Fill تُستخدم لـ:",
          options: [
            "قص الصور",
            "تعبئة منطقة مغلقة بلون معين",
            "تحويل الصور لأبيض وأسود",
            "تكبير الصور",
          ],
          correct: 1,
        },
        {
          q: "اختصار DDA يشير إلى:",
          options: [
            "Digital Differential Analyzer",
            "Data Definition Algorithm",
            "Direct Draw Application",
            "Dynamic Display Array",
          ],
          correct: 0,
        },
      ],
    },
    {
      t: "المحاضرة الرابعة",
      d: "الرسوميات ثلاثية الأبعاد والإضاءة وإزالة الأسطح المخفية.",
      pdf: "Computer Graphics/lectures/Lecture 4.pdf",
      questions: [
        {
          q: "مكونات نموذج الإضاءة Phong هي:",
          options: [
            "Ambient و Diffuse و Specular",
            "RGB فقط",
            "X و Y و Z",
            "Top و Bottom و Side",
          ],
          correct: 0,
        },
        {
          q: "يُستخدم الـ Z-Buffer في:",
          options: [
            "إزالة الأسطح المخفية Hidden Surface Removal",
            "تحسين الصوت",
            "ضغط الملفات",
            "زيادة الدقة",
          ],
          correct: 0,
        },
        {
          q: "الإسقاط الذي يجعل الأبعاد البعيدة تبدو أصغر هو:",
          options: ["Orthographic", "Perspective", "Isometric", "Parallel"],
          correct: 1,
        },
      ],
    },
  ],
  midterms: [
    {
      t: "ميدتيرم 1 (المحاضرات 1-2)",
      d: "امتحان Midterm الترم الأول",
      pdf: "Computer Graphics/exams/Midterm 2.pdf",
      questions: [
        {
          q: "المرحلة التي تحوّل الأشكال الهندسية إلى بكسلات تسمى:",
          options: [
            "Rasterization التنقيط",
            "Clipping القص",
            "Blending المزج",
            "Culling الاستبعاد",
          ],
          correct: 0,
        },
        {
          q: "ناتج إزاحة النقطة (2، 3) بمقدار (5، 1) هو:",
          options: ["(7، 4)", "(3، 2)", "(10، 3)", "(2، 3)"],
          correct: 0,
        },
        {
          q: "مصفوفة التحويل المتجانس ثنائية الأبعاد مقاسها:",
          options: ["3×3", "2×2", "4×4", "1×1"],
          correct: 0,
        },
        {
          q: "التحجيم بمعامل 0.5 يجعل الشكل:",
          options: [
            "أصغر إلى النصف",
            "أكبر بالضعف",
            "معكوساً كالمرآة",
            "مائلاً",
          ],
          correct: 0,
        },
        {
          q: "الغرض من تمثيل النقطة كـ (x, y, 1) في الإحداثيات المتجانسة:",
          options: [
            "توحيد كل التحويلات في صورة ضرب مصفوفات",
            "تسريع الطباعة",
            "تلوين النقطة",
            "ضغط البيانات",
          ],
          correct: 0,
        },
      ],
    },
    {
      t: "ميدتيرم 2 (المحاضرات 2-3)",
      d: "امتحان منتصف الترم الثاني",
      pdf: "Computer Graphics/exams/Midterm 2.pdf",
      questions: [
        {
          q: "ميزة Bresenham الأساسية على DDA:",
          options: [
            "يستخدم أعداداً صحيحة بلا قسمة",
            "أسرع في رسم الدوائر فقط",
            "يدعم ألواناً أكثر",
            "لا يحتاج إحداثيات نقاط",
          ],
          correct: 0,
        },
        {
          q: "خوارزمية التعبئة التي تمسح الشكل أفقياً سطراً بسطر:",
          options: [
            "Scan-line Fill",
            "Boundary Fill فقط",
            "Flood Fill فقط",
            "DDA",
          ],
          correct: 0,
        },
        {
          q: "تعتمد جودة رسم الخط المائل على الشاشة على:",
          options: [
            "دقة الشاشة وتقريب البكسلات",
            "لون الخط فقط",
            "سرعة المعالج",
            "حجم الذاكرة",
          ],
          correct: 0,
        },
        {
          q: "الشكل الأساسي المستخدم في بناء المجسمات ثلاثية الأبعاد:",
          options: [
            "المثلث Triangle",
            "الدائرة",
            "المربع فقط",
            "الخط المستقيم",
          ],
          correct: 0,
        },
        {
          q: "لحساب ميل الخط بين نقطتين نقسم:",
          options: [
            "فرق y على فرق x",
            "فرق x على فرق y",
            "مجموعهما",
            "حاصل طرحهما",
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
      pdf: "Computer Graphics/exams/Final 1.pdf",
      questions: [
        {
          q: "مكوّن Phong المسؤول عن «اللمعة» اللامعة في نقطة واحدة:",
          options: ["Specular", "Ambient", "Diffuse", "Emissive"],
          correct: 0,
        },
        {
          q: "تظليل Gouraud يحسب الإضاءة عند:",
          options: [
            "الرؤوس ثم يستوفيها على سطح الوجه",
            "كل بكسل على حدة",
            "مركز الشكل فقط",
            "لا يحسبها إطلاقاً",
          ],
          correct: 0,
        },
        {
          q: "نقطة تلاشي الخطوط المتوازية في الإسقاط المنظوري تسمى:",
          options: ["Vanishing Point", "Focus Point", "Origin", "Center Pixel"],
          correct: 0,
        },
        {
          q: "الغرض من تقنية Double Buffering:",
          options: [
            "منع الوميض أثناء تحديث الصورة",
            "مضاعفة الدقة",
            "ضغط الصورة",
            "تشفير العرض",
          ],
          correct: 0,
        },
        {
          q: "عملية إخفاء الأجزاء غير المرئية من المجسم:",
          options: [
            "Hidden Surface Removal",
            "Clipping",
            "Dithering",
            "Morphing",
          ],
          correct: 0,
        },
        {
          q: "تقنية Anti-aliasing تحسّن:",
          options: [
            "نعومة حواف الخطوط",
            "سرعة المعالج",
            "حجم الملف",
            "عدد الألوان المتاحة",
          ],
          correct: 0,
        },
      ],
    },
    {
      t: "الفاينل 2 (شامل)",
      d: "امتحان نهاية الترم — نموذج ثاني",
      pdf: "Computer Graphics/exams/Final 2.pdf",
      questions: [
        {
          q: "تغطية سطح المجسم بصورة لزيادة الواقعية:",
          options: [
            "Texture Mapping",
            "Shadow Mapping",
            "Level of Detail",
            "Ray Casting",
          ],
          correct: 0,
        },
        {
          q: "الإضاءة المحيطة Ambient تتميز بأنها:",
          options: [
            "موحدة بغض النظر عن اتجاه الضوء",
            "تعتمد على زاوية سقوط الضوء",
            "تظهر في الظلام فقط",
            "تتحرك مع الكاميرا",
          ],
          correct: 0,
        },
        {
          q: "منطقة الرؤية الهرمية أمام الكاميرا تسمى:",
          options: [
            "Viewing Frustum",
            "Viewport فقط",
            "Render Target",
            "Frame Buffer",
          ],
          correct: 0,
        },
        {
          q: "زيادة قيمة Specular في نموذج Phong تجعل السطح:",
          options: ["أكثر لمعاناً", "أغمق لوناً", "شفافاً", "مطفاً تماماً"],
          correct: 0,
        },
        {
          q: "الذاكرة التي تُخزَّن فيها ألوان البكسلات الجاهزة للعرض:",
          options: ["Frame Buffer", "Cache", "Register", "Stack"],
          correct: 0,
        },
      ],
    },
  ],
});
