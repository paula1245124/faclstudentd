subjects.push({
  name: "نظم التشغيل",
  en: "Operating Systems",
  icon: "⚙️",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في نظم التشغيل والعمليات Processes.",
      pdf: "Operating Systems/lectures/chapter 1 - OS.pdf",
      pdf2: "Operating Systems/Questions/New/Questions on each lecture/OS_Chapter1_Slides1-23_Questions.pdf",
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
        // ─── MCQ ───
        {
          q: "An operating system is best described as:",
          options: [
            "A piece of hardware that speeds up the CPU",
            "A programming language compiler",
            "A program that only manages files",
            "A program that acts as an intermediary between a user of a computer and the computer hardware",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is NOT listed as an operating system goal?",
          options: [
            "Execute user programs and make solving user problems easier",
            "Increase the physical size of main memory",
            "Use the computer hardware in an efficient manner",
            "Make the computer system convenient to use",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is NOT one of the four components of a computer system?",
          options: [
            "Hardware",
            "Operating system",
            "Application programs",
            "Network cables",
          ],
          correct: 3,
        },
        {
          q: "In the four-component view of a computer system, which component provides the basic computing resources (CPU, memory, I/O devices)?",
          options: [
            "Users",
            "Application programs",
            "Hardware",
            "Operating system",
          ],
          correct: 2,
        },
        {
          q: "Which component controls and coordinates the use of hardware among various applications and users?",
          options: [
            "Application programs",
            "Users",
            "Operating system",
            "Hardware",
          ],
          correct: 2,
        },
        {
          q: "Word processors, compilers, web browsers, database systems, and video games are examples of:",
          options: [
            "Application programs",
            "Operating systems",
            "Hardware",
            "Device controllers",
          ],
          correct: 0,
        },
        {
          q: "In the slides, 'users' can be:",
          options: [
            "Only application programs",
            "People, machines, or other computers",
            "Only people",
            "Only other computers",
          ],
          correct: 1,
        },
        {
          q: "When the OS is described as a 'resource allocator', it:",
          options: [
            "Manages all resources and decides between conflicting requests for efficient and fair resource use",
            "Prevents users from using resources",
            "Only allocates memory to the compiler",
            "Only allocates disk space",
          ],
          correct: 0,
        },
        {
          q: "When the OS is described as a 'control program', it:",
          options: [
            "Controls only the printer",
            "Controls the execution of programs to prevent errors and improper use of the computer",
            "Decides which application is installed",
            "Compiles user programs",
          ],
          correct: 1,
        },
        {
          q: "According to the slides, the one program running at all times on the computer is called the:",
          options: [
            "System program",
            "Kernel",
            "Bootstrap program",
            "Application program",
          ],
          correct: 1,
        },
        {
          q: "Everything other than the kernel is either:",
          options: [
            "A cache or a buffer",
            "A system program (ships with the OS) or an application program",
            "A device driver or a trap",
            "An interrupt or a spool",
          ],
          correct: 1,
        },
        {
          q: "When is the bootstrap program loaded?",
          options: [
            "When the printer is connected",
            "Only when an application crashes",
            "At power-up or reboot",
            "When a file is deleted",
          ],
          correct: 2,
        },
        {
          q: "Where is the bootstrap program typically stored?",
          options: ["RAM only", "The cache", "ROM or EEPROM", "Magnetic tape"],
          correct: 2,
        },
        {
          q: "Firmware is described in the slides as:",
          options: [
            "A user interface",
            "A kind of magnetic disk",
            "A type of application program",
            "A type of software etched directly into a piece of hardware",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is NOT a job of the bootstrap program?",
          options: [
            "Scheduling user applications on the printer",
            "Starting execution of the kernel",
            "Loading the operating system kernel",
            "Initializing all aspects of the system",
          ],
          correct: 0,
        },
        {
          q: "EEPROM stands for:",
          options: [
            "Electrically Erasable Programmable Read-Only Memory",
            "Extended Executable Program ROM Module",
            "Electronic Embedded Processor Memory",
            "Electrically Enabled Peripheral ROM",
          ],
          correct: 0,
        },
        {
          q: "In a computer-system organization, CPUs and device controllers connect through a common bus that provides access to:",
          options: [
            "Shared memory",
            "Only the hard disk",
            "Only the printer",
            "The bootstrap program",
          ],
          correct: 0,
        },
        {
          q: "Concurrent execution of CPUs and devices leads to them:",
          options: [
            "Sharing the same registers",
            "Running only one at a time",
            "Ignoring the bus",
            "Competing for memory cycles",
          ],
          correct: 3,
        },
        {
          q: "Each device controller is in charge of:",
          options: [
            "Only main memory",
            "Only the CPU",
            "A particular device type",
            "All devices in the system",
          ],
          correct: 2,
        },
        {
          q: "Each device controller has a:",
          options: ["Bootstrap program", "Local buffer", "Kernel", "Compiler"],
          correct: 1,
        },
        {
          q: "Who moves data between main memory and the local buffers of the device controllers?",
          options: [
            "The user",
            "The compiler",
            "The CPU",
            "The bootstrap program",
          ],
          correct: 2,
        },
        {
          q: "How does a device controller inform the CPU that it has finished its operation?",
          options: [
            "By causing an interrupt",
            "By shutting down the system",
            "By deleting its buffer",
            "By rebooting the CPU",
          ],
          correct: 0,
        },
        {
          q: "How can hardware trigger an interrupt?",
          options: [
            "By sending a signal to the CPU through the system bus",
            "By executing a system call",
            "By rewriting the kernel",
            "By running the compiler",
          ],
          correct: 0,
        },
        {
          q: "How can software trigger an interrupt?",
          options: [
            "By executing a special operation called a system call (monitor call)",
            "By sending a signal over the system bus",
            "By clearing the cache",
            "By turning off the device controller",
          ],
          correct: 0,
        },
        {
          q: "The interrupt vector contains:",
          options: [
            "The contents of main memory",
            "The addresses of all the service routines",
            "The list of all installed applications",
            "The disk sectors",
          ],
          correct: 1,
        },
        {
          q: "When are the addresses in the interrupt vector loaded by the OS?",
          options: [
            "At shutdown",
            "At the OS initialization phase",
            "Every time an interrupt occurs",
            "Only when the disk is full",
          ],
          correct: 1,
        },
        {
          q: "Why must the interrupt architecture save the address of the interrupted instruction?",
          options: [
            "To speed up the disk",
            "So the interrupt vector can be erased",
            "To free memory",
            "So the CPU can return to the interrupted computation after handling the interrupt",
          ],
          correct: 3,
        },
        {
          q: "Why are incoming interrupts disabled while another interrupt is being processed?",
          options: [
            "To save disk space",
            "To prevent a lost interrupt",
            "To speed up the CPU clock",
            "To reset the device controller",
          ],
          correct: 1,
        },
        {
          q: "A trap (exception) is:",
          options: [
            "A software-generated interrupt caused by an error or a user program request",
            "A hardware failure of the bus",
            "A type of storage device",
            "A type of cache",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is an example of a trap caused by an error?",
          options: [
            "Division by zero",
            "Printing a document",
            "Saving a file",
            "Opening a browser",
          ],
          correct: 0,
        },
        {
          q: "The slides state that an operating system is:",
          options: [
            "Cache driven",
            "Interrupt driven",
            "Disk driven",
            "Compiler driven",
          ],
          correct: 1,
        },
        {
          q: "To preserve the state of the CPU during interrupt handling, the OS stores:",
          options: [
            "The registers and the program counter",
            "Only the kernel",
            "Only the cache",
            "Only the disk sectors",
          ],
          correct: 0,
        },
        {
          q: "According to the slides, spooling is used for:",
          options: [
            "Managing the cache",
            "Booting the system",
            "Input only",
            "Output (e.g., saving printer jobs in a buffer)",
          ],
          correct: 3,
        },
        {
          q: "Why is spooling needed for a printer?",
          options: [
            "The printer replaces the CPU",
            "The printer has no power",
            "The printer cannot print all the jobs at the same time, so jobs are saved in a buffer",
            "The printer stores the kernel",
          ],
          correct: 2,
        },
        {
          q: "The device controller is responsible for:",
          options: [
            "Scheduling the CPU",
            "Compiling programs",
            "Moving data between the peripheral devices it controls and its local buffer storage",
            "Loading the bootstrap program",
          ],
          correct: 2,
        },
        {
          q: "What does the OS have for each device controller to present a uniform interface to the rest of the OS?",
          options: [
            "A cache",
            "A device driver",
            "A bootstrap program",
            "A spool",
          ],
          correct: 1,
        },
        {
          q: "To start an I/O operation, the device driver first:",
          options: [
            "Loads the appropriate registers within the device controller",
            "Reboots the system",
            "Flushes the cache",
            "Sends a trap to the user",
          ],
          correct: 0,
        },
        {
          q: "After the driver loads the registers, the controller:",
          options: [
            "Turns off the device",
            "Examines the register contents to determine what action to take",
            "Loads the kernel again",
            "Erases the registers",
          ],
          correct: 1,
        },
        {
          q: "Then the controller starts the transfer of data from:",
          options: [
            "The cache to the registers",
            "The CPU to the compiler",
            "The kernel to the disk",
            "The device to its local buffer",
          ],
          correct: 3,
        },
        {
          q: "In the first I/O method, control returns to the user program:",
          options: [
            "Immediately without waiting",
            "Only after a reboot",
            "Never",
            "Only upon I/O completion",
          ],
          correct: 3,
        },
        {
          q: "The first I/O method (waiting for completion) is suitable for:",
          options: [
            "Only the cache",
            "Only tape drives",
            "Small amounts of data",
            "Bulk data",
          ],
          correct: 2,
        },
        {
          q: "In the first I/O method, at most how many I/O requests are outstanding at a time?",
          options: ["One", "Two", "Unlimited", "Eight"],
          correct: 0,
        },
        {
          q: "In the second I/O method, control returns to the user program:",
          options: [
            "Only after a trap",
            "Only after shutdown",
            "Without waiting for I/O completion",
            "Only upon I/O completion",
          ],
          correct: 2,
        },
        {
          q: "The second I/O method (no waiting) is suitable for:",
          options: [
            "Very small data only",
            "Large amounts of data (bulk data)",
            "Registers only",
            "Nothing",
          ],
          correct: 1,
        },
        {
          q: "The device-status table contains an entry for each I/O device indicating its:",
          options: [
            "Owner and password",
            "Type, address, and state",
            "Color and shape",
            "Price, brand, and size",
          ],
          correct: 1,
        },
        {
          q: "What does the OS do with the device-status table?",
          options: [
            "Uses it as a cache",
            "Deletes it after boot",
            "Indexes into it to determine device status and to modify the table entry to include an interrupt",
            "Stores the kernel in it",
          ],
          correct: 2,
        },
        {
          q: "DMA stands for:",
          options: [
            "Device Memory Allocation",
            "Dynamic Module Address",
            "Direct Memory Access",
            "Data Management Application",
          ],
          correct: 2,
        },
        {
          q: "DMA is used for:",
          options: [
            "Only the bootstrap program",
            "High-speed I/O devices able to transmit information at close to memory speeds",
            "Only slow keyboards",
            "Only compilers",
          ],
          correct: 1,
        },
        {
          q: "In DMA, the device controller transfers blocks of data directly from buffer storage to main memory:",
          options: [
            "Only after a reboot",
            "Without CPU intervention",
            "Only through the printer",
            "Only with CPU intervention for each byte",
          ],
          correct: 1,
        },
        {
          q: "How many interrupts does DMA generate?",
          options: [
            "None at all",
            "One per second",
            "One per byte of data",
            "One per block of data",
          ],
          correct: 3,
        },
        {
          q: "What is the only large storage medium that the CPU can access directly?",
          options: [
            "Secondary storage",
            "Optical disk",
            "Magnetic tape",
            "Main memory",
          ],
          correct: 3,
        },
        {
          q: "Secondary storage is described as:",
          options: [
            "The fastest storage in the system",
            "A small volatile storage",
            "Part of the CPU",
            "An extension of main memory that provides large nonvolatile storage capacity",
          ],
          correct: 3,
        },
        {
          q: "Magnetic disks consist of:",
          options: [
            "Rigid metal or glass platters covered with magnetic recording material",
            "Plastic ribbons",
            "Optical lenses",
            "Silicon chips only",
          ],
          correct: 0,
        },
        {
          q: "A magnetic disk surface is logically divided into:",
          options: [
            "Pages and frames",
            "Tracks, which are subdivided into sectors",
            "Sectors, which are subdivided into tracks",
            "Blocks and buffers",
          ],
          correct: 1,
        },
        {
          q: "The disk controller determines:",
          options: [
            "The size of the cache",
            "The logical interaction between the device and the computer",
            "Which application runs first",
            "The interrupt vector contents",
          ],
          correct: 1,
        },
        {
          q: "Storage systems are organized in a hierarchy according to:",
          options: [
            "Age, weight, and location",
            "Speed, cost, and volatility",
            "Brand, price, and warranty",
            "Color, size, and shape",
          ],
          correct: 1,
        },
        {
          q: "Main memory can be viewed as:",
          options: [
            "A last cache for secondary storage",
            "The slowest storage",
            "Non-volatile backup",
            "A device driver",
          ],
          correct: 0,
        },
        {
          q: "In the storage-device hierarchy figure, which level is at the very top (fastest)?",
          options: ["Cache", "Registers", "Main memory", "Magnetic tapes"],
          correct: 1,
        },
        {
          q: "In the storage-device hierarchy figure, which level is at the very bottom?",
          options: [
            "Electronic disk",
            "Optical disk",
            "Magnetic disk",
            "Magnetic tapes",
          ],
          correct: 3,
        },
        {
          q: "Which is the correct order of the hierarchy from top to bottom?",
          options: [
            "Cache, registers, main memory, magnetic disk, electronic disk, magnetic tapes, optical disk",
            "Main memory, registers, cache, optical disk, magnetic disk, electronic disk, magnetic tapes",
            "Registers, main memory, cache, magnetic tapes, optical disk, magnetic disk, electronic disk",
            "Registers, cache, main memory, electronic disk, magnetic disk, optical disk, magnetic tapes",
          ],
          correct: 3,
        },
        {
          q: "Caching means:",
          options: [
            "Deleting old files",
            "Rebooting the CPU",
            "Increasing disk size",
            "Copying information into a faster storage system",
          ],
          correct: 3,
        },
        {
          q: "When information is needed, which storage is checked first?",
          options: [
            "The slower storage",
            "The faster storage (cache)",
            "Magnetic tape",
            "Optical disk",
          ],
          correct: 1,
        },
        {
          q: "If the required information is not in the cache, then:",
          options: [
            "The system crashes",
            "It is copied to the cache and used there",
            "The CPU ignores the request",
            "The kernel is reloaded",
          ],
          correct: 1,
        },
        {
          q: "Why is cache management an important design problem?",
          options: [
            "The cache has no speed advantage",
            "The cache is smaller than the storage being cached",
            "The cache never changes",
            "The cache is larger than main memory",
          ],
          correct: 1,
        },
        {
          q: "Which two aspects of cache management are named in the slides?",
          options: [
            "Cache owner and password",
            "Cache brand and price",
            "Cache size and replacement policy",
            "Cache color and shape",
          ],
          correct: 2,
        },
        {
          q: "Caching is performed at which levels?",
          options: [
            "Hardware, operating system, and software",
            "Only software",
            "Only hardware",
            "Only the operating system",
          ],
          correct: 0,
        },
        {
          q: "According to the performance table, the typical size of registers is:",
          options: [
            "More than 16 GB",
            "More than 16 MB",
            "Less than 1 KB",
            "More than 100 GB",
          ],
          correct: 2,
        },
        {
          q: "According to the performance table, cache is typically implemented using:",
          options: [
            "Optical tape",
            "CMOS DRAM",
            "On-chip or off-chip CMOS SRAM",
            "Magnetic disk",
          ],
          correct: 2,
        },
        {
          q: "Main memory is implemented using:",
          options: [
            "CMOS DRAM",
            "Magnetic disk",
            "Custom multi-port memory",
            "CMOS SRAM",
          ],
          correct: 0,
        },
        {
          q: "Which storage level is managed by the compiler?",
          options: ["Registers", "Main memory", "Cache", "Disk storage"],
          correct: 0,
        },
        {
          q: "Which storage level is managed by hardware?",
          options: ["Main memory", "Registers", "Cache", "Disk storage"],
          correct: 2,
        },
        {
          q: "Which storage levels are managed by the operating system?",
          options: [
            "Only registers",
            "Main memory and disk storage",
            "Registers and cache",
            "Only cache",
          ],
          correct: 1,
        },
        {
          q: "According to the table, disk storage is typically backed by:",
          options: ["Cache", "Main memory", "CD or tape", "Registers"],
          correct: 2,
        },
        {
          q: "Which storage level has the lowest access time according to the table?",
          options: ["Disk storage", "Main memory", "Registers", "Cache"],
          correct: 2,
        },
        {
          q: "In a multitasking environment, why must the OS be careful about which value is used for a piece of data?",
          options: [
            "More than one copy of the data may exist (e.g., changed in cache but not yet on disk), so the most recent value must be used",
            "Because there is only ever one copy of the data",
            "Because the cache is always up to date",
            "Because the disk is faster than the cache",
          ],
          correct: 0,
        },
        {
          q: "What must a multiprocessor environment provide so that all CPUs have the most recent value in their cache?",
          options: [
            "More disks",
            "Cache coherency (in hardware)",
            "A larger kernel",
            "A faster printer",
          ],
          correct: 1,
        },
        {
          q: "Cache coherency ensures that:",
          options: [
            "Only one CPU can run",
            "Main memory is disabled",
            "Caches are erased regularly",
            "An update to a value in one cache is reflected in all other caches",
          ],
          correct: 3,
        },
        {
          q: "Why is data consistency even more complex in a distributed environment?",
          options: [
            "Because there is only one location",
            "Several copies of a datum can exist in distributed locations connected by a network, and all must be updated",
            "Because caches do not exist",
            "Because there is no network",
          ],
          correct: 1,
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Explain the four components of a computer system and the role of each one.",
          answer:
            "Hardware: provides the basic computing resources (CPU, memory, I/O devices).\n" +
            "Operating system: controls and coordinates the use of the hardware among the various applications and users.\n" +
            "Application programs: define the ways in which the system resources are used to solve the computing problems of users (word processors, compilers, web browsers, database systems, video games).\n" +
            "Users: people, machines, or other computers.",
          tags: ["Chapter 1", "Computer System Structure"],
          ref: "Chapter 1 — Slides 1 to 23",
        },
        {
          type: "essay",
          q: "Describe how an interrupt is handled, from the moment it occurs until the CPU resumes the interrupted work.",
          answer:
            "• A device controller (hardware, via the system bus) or a program (software, via a system call/trap) signals an interrupt.\n" +
            "• The CPU stops what it is doing; the OS preserves the CPU state by saving the registers and the program counter (the address of the interrupted instruction).\n" +
            "• Control is transferred, through the interrupt vector (which holds the addresses of all service routines, loaded at OS initialization), to the appropriate interrupt service routine.\n" +
            "• Incoming interrupts are disabled while another is being processed, to prevent a lost interrupt.\n" +
            "• When the service routine finishes, the saved address is retrieved and the CPU returns to the interrupted computation.",
          tags: ["Chapter 1", "Interrupts"],
          ref: "Chapter 1 — Slides 1 to 23",
        },
        {
          type: "essay",
          q: "Compare the two I/O methods (synchronous vs. asynchronous) and explain the role of DMA.",
          answer:
            "Method 1: control returns to the user program only upon I/O completion. The CPU idles (wait instruction or wait loop), at most one I/O request is outstanding, and it is suitable for small amounts of data.\n" +
            "Method 2: control returns to the user program without waiting for I/O completion. It is suitable for bulk data; a system call lets the user wait for completion while the CPU does other work, and the device-status table tracks each device's type, address, and state.\n" +
            "DMA: used for high-speed devices; the device controller transfers blocks of data directly between its buffer and main memory without CPU intervention, generating only one interrupt per block instead of one per byte.",
          tags: ["Chapter 1", "I/O Structure", "DMA"],
          ref: "Chapter 1 — Slides 1 to 23",
        },
        {
          type: "essay",
          q: "Explain caching and why maintaining consistency of data is a challenge in multitasking, multiprocessor, and distributed environments.",
          answer:
            "Caching: information in use is copied temporarily from slower to faster storage. The faster storage (cache) is checked first; if the data is there it is used directly, otherwise it is copied to the cache and used there. Because the cache is smaller than the storage being cached, cache size and replacement policy are important design problems.\n" +
            "Multitasking: multiple copies of the same data may exist at different levels of the hierarchy, so the most recent value must always be used.\n" +
            "Multiprocessor: hardware must provide cache coherency so every CPU sees the latest value.\n" +
            "Distributed: copies may exist in several locations connected by a network, so all must be updated as soon as possible (and disconnections make this harder).",
          tags: ["Chapter 1", "Caching", "Cache coherency"],
          ref: "Chapter 1 — Slides 1 to 23",
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
