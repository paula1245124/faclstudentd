subjects.push({
  name: "شبكات الحاسب",
  en: "Computer Networks",
  icon: "🌐",
  lectures: [
    {
      t: "المحاضرة الأولى",
      d: "مقدمة في الشبكات ونموذج الطبقات OSI.",
      pdf: "Computer Networks/lectures/lec 1/Chapter 1 Computer Networks and the Internet.pdf",
      pdf2: "Computer Networks/Questions/Questions on each lecture/Chapter 1 - Questions - Computer Networks.pdf",
      links: [
        // --- فيديوهات عربية 🇪🇬 / 🇸🇦 ---
        {
          t: "د. خولة الهراشحة - شبكات الحاسوب (Ch1: 1.1 - 1.3.1)",
          d: "تغطية شاملة بالعربي لفقرات الملف: Nuts-and-Bolts, Services, Protocols, DSL/Cable/FTTH, و Packet Switching",
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
          t: "أب ديت (Update) - أساسيات اتصال الإنترنت وشبكات الوصول",
          d: "شرح لوسائل الاتصال الفيزيائية كالـ Twisted-Pair والألياف الضوئية والشبكات اللاسلكية",
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
        {
          t: "أحمد حفني - كورس تأسيس الشبكات (Physical Media & Switching)",
          d: "توضيح عملي لربط الـ End Systems بأجهزة الـ Routers والـ Switches وطبيعة عمل الـ ISPs",
          icon: "🇪🇬",
          actions: [
            {
              label: "📖 الشرح",
              url: "https://www.youtube.com/playlist?list=PLpwHU9rNXAVurp2h2Jh-cd4-8XjkT5osu",
              type: "view",
              color: "red",
            },
          ],
        },

        // --- فيديوهات عالمية 🌍 ---
        {
          t: "Jim Kurose - Chapter 1 (Official Lectures)",
          d: "الشرح المباشر لمؤلف الكتاب بنفسه Jim Kurose المخصص لكل جزئية وردت بالملف",
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
          d: "تركيز على مفاهيم الـ Protocols، أنواع الـ Transmission Media، وحسابات الـ Store-and-Forward Delay",
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
          t: "Epic Networks Lab - Packet Switching & Delay",
          d: "شرح أكاديمي دقيق للقوانين الحسابية ومفهوم الـ Queuing Delay والـ Packet Loss",
          icon: "🌍",
          actions: [
            {
              label: "📖 الشرح",
              url: "https://www.youtube.com/playlist?list=PLo80JwUm6hSSwGLJmS_quaeJgx9SILLiI",
              type: "view",
              color: "red",
            },
          ],
        },

        // --- مواقع ومراجع 📚 ---
        {
          t: "GeeksforGeeks - Access Networks & Internet Connection",
          d: "مقال يشرح شبكات الوصول DSL, Cable, FTTH, Ethernet, Wi-Fi والوسائط الموجهة Guided/Unguided",
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
          t: "GeeksforGeeks - Packet Switching in Computer Networks",
          d: "شرح مخصص لآلية تقسيم البيانات إلى Packets وتوجيهها عبر الـ Forwarding Tables في الـ Routers",
          icon: "📚",
          actions: [
            {
              label: "🚀 فتح المقال",
              url: "https://www.geeksforgeeks.org/packet-switching-in-computer-networks/",
              type: "view",
              color: "green",
            },
          ],
        },
        {
          t: "Kurose & Ross Official Student Resources",
          d: "الموقع الرسمي الملحق بالكتاب المباشر لأسئلة ومراجعات الجزء الموجود بالملف",
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

        // --- أدوات ومحاكاة 🔧 ---
        {
          t: "Kurose & Ross Interactive Animations",
          d: "محاكاة تفاعلية رسمية من مؤلفي الكتاب لتوضيح كيفية حركة الـ Packets وزمن التأخير والـ Queue Buffers",
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
          d: "الأداة المذكورة لتتبع الـ Packets وقراءة الـ Headers والـ Protocols الخاصة بـ TCP/IP",
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
        {
          t: "Cisco Packet Tracer",
          d: "برنامج محاكاة لبناء شبكة تحتوي على End Systems و Routers و Switches لتطبيق مفاهيم قسم 1.1 و 1.2",
          icon: "🔧",
          actions: [
            {
              label: "🚀 فتح / تحميل البرنامج",
              url: "https://www.netacad.com/courses/packet-tracer",
              type: "view",
              color: "orange",
            },
          ],
        },
      ],
      questions: [
        // ==========================================
        // الاختيار من متعدد (Multiple-Choice Questions)
        // ==========================================
        {
          q: "1. What is the primary focus of the book when discussing computer networks?[cite: 2]",
          options: [
            "Private corporate networks",
            "The public Internet and its protocols",
            "Local area networks only",
            "Satellite communication systems",
          ],
          correct: 1,
        },
        {
          q: "2. How can the Internet be described in terms of its basic components?[cite: 2]",
          options: [
            "Only as a service provider for applications",
            "As hardware and software components (nuts and bolts) or as infrastructure for distributed applications",
            "Solely as a collection of servers",
            "As a single global database",
          ],
          correct: 1,
        },
        {
          q: "3. What are computing devices connected to the Internet called in Internet jargon?[cite: 2]",
          options: ["Servers", "Hosts or end systems", "Routers", "Links"],
          correct: 1,
        },
        {
          q: "4. According to estimates mentioned, how many devices were connected to the Internet by 2022?[cite: 2]",
          options: ["18 billion", "28.5 billion", "10 billion", "50 billion"],
          correct: 1,
        },
        {
          q: "5. What connects end systems in a network?[cite: 2]",
          options: [
            "Only packet switches",
            "A network of communication links and packet switches",
            "Servers exclusively",
            "Protocols alone",
          ],
          correct: 1,
        },
        {
          q: "6. What is a packet in computer networks?[cite: 2]",
          options: [
            "A complete message sent without segmentation",
            "Segmented data with added headers sent through the network",
            "A hardware device",
            "A type of router",
          ],
          correct: 1,
        },
        {
          q: "7. What are the two main types of packet switches in the Internet?[cite: 2]",
          options: [
            "Hosts and end systems",
            "Routers and link-layer switches",
            "Servers and clients",
            "Links and protocols",
          ],
          correct: 1,
        },
        {
          q: "8. Where are link-layer switches typically used?[cite: 2]",
          options: [
            "In the network core",
            "In access networks",
            "Only in end systems",
            "In global transit",
          ],
          correct: 1,
        },
        {
          q: "9. What is the sequence of links and switches a packet traverses called?[cite: 2]",
          options: ["A protocol", "A route or path", "A header", "A segment"],
          correct: 1,
        },
        {
          q: "10. How do end systems access the Internet?[cite: 2]",
          options: [
            "Directly through global routers",
            "Through Internet Service Providers (ISPs)",
            "Via packet switches only",
            "Using protocols without intermediaries",
          ],
          correct: 1,
        },
        {
          q: "11. What interconnects lower-tier ISPs?[cite: 2]",
          options: [
            "End systems",
            "National and international upper-tier ISPs",
            "Only local links",
            "Application protocols",
          ],
          correct: 1,
        },
        {
          q: "12. What are the two most important protocols in the Internet?[cite: 2]",
          options: [
            "HTTP and SMTP",
            "TCP and IP",
            "Ethernet and WiFi",
            "DNS and FTP",
          ],
          correct: 1,
        },
        {
          q: "13. Who develops Internet standards?[cite: 2]",
          options: [
            "IEEE",
            "IETF (Internet Engineering Task Force)",
            "Cisco",
            "Google",
          ],
          correct: 1,
        },
        {
          q: "14. What are RFCs?[cite: 2]",
          options: [
            "Hardware specifications",
            "Requests for comments that define protocols like TCP and IP",
            "Network hardware",
            "Application services",
          ],
          correct: 1,
        },
        {
          q: "15. What body specifies standards for network links like Ethernet?[cite: 2]",
          options: [
            "IETF",
            "IEEE 802 LAN Standards Committee",
            "Cisco VNI",
            "Fiber Broadband",
          ],
          correct: 1,
        },
        {
          q: "16. How is the Internet described as an infrastructure?[cite: 2]",
          options: [
            "Only for hardware connections",
            "As providing services to distributed applications",
            "Solely for packet switching",
            "As a single protocol stack",
          ],
          correct: 1,
        },
        {
          q: "17. What are distributed applications?[cite: 2]",
          options: [
            "Programs running on a single system",
            "Applications involving multiple end systems exchanging data",
            "Only server-based programs",
            "Hardware components",
          ],
          correct: 1,
        },
        {
          q: "18. What interface do end systems use to deliver data over the Internet?[cite: 2]",
          options: [
            "Packet switch interface",
            "Socket interface",
            "Router interface",
            "Link-layer interface",
          ],
          correct: 1,
        },
        {
          q: "19. In a human protocol analogy, what initiates communication?[cite: 2]",
          options: [
            "Asking for time directly",
            "Offering a greeting like 'Hi'",
            "Sending a packet",
            "Closing the connection",
          ],
          correct: 1,
        },
        {
          q: "20. What defines a network protocol?[cite: 2]",
          options: [
            "Hardware only",
            "Format and order of messages, plus actions on transmission/receipt",
            "Physical media",
            "End systems alone",
          ],
          correct: 1,
        },
        {
          q: "21. What are end systems also referred to as?[cite: 2]",
          options: ["Routers", "Hosts", "Links", "Switches"],
          correct: 1,
        },
        {
          q: "22. How are hosts categorized?[cite: 2]",
          options: [
            "Into links and switches",
            "Into clients and servers",
            "Into protocols and layers",
            "Into physical media",
          ],
          correct: 1,
        },
        {
          q: "23. Where do most servers for search results and email reside today?[cite: 2]",
          options: [
            "In homes",
            "In large data centers",
            "On mobile devices",
            "In access networks",
          ],
          correct: 1,
        },
        {
          q: "24. What is the access network?[cite: 2]",
          options: [
            "The core of the Internet",
            "The network connecting an end system to the first router",
            "Only wireless connections",
            "Global transit links",
          ],
          correct: 1,
        },
        {
          q: "25. What are the two most prevalent broadband residential access types?[cite: 2]",
          options: [
            "Ethernet and WiFi",
            "DSL and cable",
            "FTTH and 5G",
            "Satellite and radio",
          ],
          correct: 1,
        },
        {
          q: "26. In DSL, what device is located in the telco's central office?[cite: 2]",
          options: [
            "Cable modem",
            "DSLAM (Digital Subscriber Line Access Multiplexer)",
            "Router",
            "Switch",
          ],
          correct: 1,
        },
        {
          q: "27. How are data and telephone signals handled in DSL?[cite: 2]",
          options: [
            "On separate lines",
            "Encoded at different frequencies on the same line",
            "Only digitally",
            "Via satellite",
          ],
          correct: 1,
        },
        {
          q: "28. What is the typical range for DSL to work effectively?[cite: 2]",
          options: ["1-2 miles", "5-10 miles", "20 miles", "Unlimited"],
          correct: 1,
        },
        {
          q: "29. What infrastructure does cable Internet use?[cite: 2]",
          options: [
            "Telephone lines",
            "Cable television infrastructure",
            "Fiber optics only",
            "Wireless spectrum",
          ],
          correct: 1,
        },
        {
          q: "30. What is HFC in cable access?[cite: 2]",
          options: [
            "High-frequency coax",
            "Hybrid fiber coax",
            "Home fiber connection",
            "High-speed fiber",
          ],
          correct: 1,
        },
        {
          q: "31. What device serves a similar function to DSLAM in cable networks?[cite: 2]",
          options: [
            "DSL modem",
            "CMTS (Cable Modem Termination System)",
            "Router",
            "Switch",
          ],
          correct: 1,
        },
        {
          q: "32. Why is cable Internet access shared?[cite: 2]",
          options: [
            "It uses dedicated lines",
            "Every packet travels on shared links to all homes",
            "Only upstream is shared",
            "It is not shared",
          ],
          correct: 1,
        },
        {
          q: "33. What technology provides gigabit speeds directly to homes?[cite: 2]",
          options: ["DSL", "Cable", "FTTH (Fiber to the Home)", "Ethernet"],
          correct: 2,
        },
        {
          q: "34. What is the simplest FTTH technology?[cite: 2]",
          options: [
            "Hybrid fiber",
            "Direct fiber",
            "Coaxial fiber",
            "Wireless fiber",
          ],
          correct: 1,
        },
        {
          q: "35. What is the most prevalent access technology in enterprises?[cite: 2]",
          options: ["DSL", "Ethernet", "Cable", "Satellite"],
          correct: 1,
        },
        {
          q: "36. What standard is WiFi based on?[cite: 2]",
          options: ["IEEE 802.3", "IEEE 802.11", "IEEE 802.1", "IEEE 802.15"],
          correct: 1,
        },
        {
          q: "37. What is the range for a wireless LAN user from an access point?[cite: 2]",
          options: [
            "A few meters",
            "A few tens of meters",
            "Kilometers",
            "Unlimited",
          ],
          correct: 1,
        },
        {
          q: "38. What generation of wireless provides wide-area access up to tens of kilometers?[cite: 2]",
          options: ["WiFi", "Ethernet", "3G, 4G, and 5G cellular", "FTTH"],
          correct: 2,
        },
        {
          q: "39. What are the two categories of physical media?[cite: 2]",
          options: [
            "Wired and wireless",
            "Guided and unguided",
            "Copper and fiber",
            "Terrestrial and satellite",
          ],
          correct: 1,
        },
        {
          q: "40. What is the most common guided medium for LANs?[cite: 2]",
          options: [
            "Fiber optics",
            "Coaxial cable",
            "Twisted-pair copper wire",
            "Radio spectrum",
          ],
          correct: 2,
        },
        {
          q: "41. What breaks messages into packets?[cite: 2]",
          options: ["Routers", "The source end system", "Switches", "Links"],
          correct: 1,
        },
        {
          q: "42. What is store-and-forward transmission?[cite: 2]",
          options: [
            "Transmitting bits immediately",
            "Receiving the entire packet before forwarding",
            "Segmenting packets",
            "Queuing only",
          ],
          correct: 1,
        },
        {
          q: "43. For a path with N links of rate R and packet length L, what is the end-to-end delay without other delays?[cite: 2]",
          options: ["L/R", "N(L/R)", "(N-1)(L/R)", "2L/R"],
          correct: 2,
        },
        {
          q: "44. What causes queuing delays?[cite: 2]",
          options: [
            "Empty buffers",
            "Packets waiting in output buffers due to congestion",
            "Propagation speed",
            "Header addition",
          ],
          correct: 1,
        },
        {
          q: "45. What happens when a queue is full?[cite: 2]",
          options: [
            "Faster transmission",
            "Packet loss",
            "Automatic rerouting",
            "No effect",
          ],
          correct: 1,
        },
        {
          q: "46. How does a router determine where to forward a packet?[cite: 2]",
          options: [
            "Using protocols",
            "Forwarding table based on destination address",
            "Randomly",
            "Via physical media",
          ],
          correct: 1,
        },
        {
          q: "47. What sets forwarding tables automatically?[cite: 2]",
          options: [
            "End systems",
            "Routing protocols",
            "Applications",
            "Physical layer",
          ],
          correct: 1,
        },
        {
          q: "48. In circuit switching, what is reserved for a session?[cite: 2]",
          options: [
            "Packets",
            "Resources like buffers and link rates",
            "Messages",
            "Headers",
          ],
          correct: 1,
        },
        {
          q: "49. What are the two multiplexing methods in circuit switching?[cite: 2]",
          options: [
            "Packet and message",
            "FDM and TDM",
            "Store-and-forward",
            "Queuing and propagation",
          ],
          correct: 1,
        },
        {
          q: "50. Why is packet switching better for sharing capacity?[cite: 2]",
          options: [
            "It reserves resources",
            "It allows better sharing than circuit switching",
            "It has fixed delays",
            "No queuing",
          ],
          correct: 1,
        },
        {
          q: "51. What trend is seen in telecommunication networks?[cite: 2]",
          options: [
            "Toward circuit switching",
            "Toward packet switching",
            "Away from multiplexing",
            "To proprietary networks",
          ],
          correct: 1,
        },
        {
          q: "52. In Network Structure 1, how are access ISPs interconnected?[cite: 2]",
          options: [
            "Directly to each other",
            "Via a single global transit ISP",
            "Through end systems",
            "Without interconnection",
          ],
          correct: 1,
        },
        {
          q: "53. What is a customer-provider relationship in ISPs?[cite: 2]",
          options: [
            "Free peering",
            "Access ISP pays the global ISP",
            "Equal sharing",
            "No payment",
          ],
          correct: 1,
        },
        {
          q: "54. What does Network Structure 2 add?[cite: 2]",
          options: [
            "Single ISP",
            "Multiple competing global transit ISPs",
            "Only access ISPs",
            "End systems",
          ],
          correct: 1,
        },
        {
          q: "55. What are tier-1 ISPs?[cite: 2]",
          options: [
            "Local access providers",
            "Global ISPs with presence not in every city",
            "Only regional",
            "Home networks",
          ],
          correct: 1,
        },
        {
          q: "56. In Network Structure 3, what connects access ISPs in a region?[cite: 2]",
          options: [
            "Global ISPs directly",
            "Regional ISPs that connect to tier-1",
            "Peering points",
            "Content providers",
          ],
          correct: 1,
        },
        {
          q: "57. What is a PoP?[cite: 2]",
          options: [
            "Point of presence for customer connections",
            "Protocol over protocol",
            "Packet of packets",
            "Point of peering",
          ],
          correct: 0,
        },
        {
          q: "58. What is multi-homing?[cite: 2]",
          options: [
            "Connecting to one ISP",
            "Connecting to two or more provider ISPs",
            "Single link use",
            "No redundancy",
          ],
          correct: 1,
        },
        {
          q: "59. What is peering between ISPs?[cite: 2]",
          options: [
            "Payment-based connection",
            "Direct, settlement-free connection",
            "Through tier-1 only",
            "Via end systems",
          ],
          correct: 1,
        },
        {
          q: "60. What is an IXP?[cite: 2]",
          options: [
            "Internet exchange point for peering",
            "ISP expansion protocol",
            "Internal exchange protocol",
            "Internet xylem point",
          ],
          correct: 0,
        },
        {
          q: "61. What does Network Structure 5 add?[cite: 2]",
          options: [
            "Only access ISPs",
            "Content-provider networks like Google",
            "More regional ISPs",
            "End systems",
          ],
          correct: 1,
        },
        {
          q: "62. How does Google bypass upper tiers?[cite: 2]",
          options: [
            "Using public Internet only",
            "Peering with lower-tier ISPs and IXPS",
            "Paying all tier-1",
            "No bypassing",
          ],
          correct: 1,
        },
        {
          q: "63. What is twisted-pair copper wire used for?[cite: 2]",
          options: [
            "Long-haul only",
            "LANs and residential access",
            "Satellite links",
            "Optical pulses",
          ],
          correct: 1,
        },
        {
          q: "64. What achieves data rates up to 10 Gbps over 100 meters?[cite: 2]",
          options: [
            "Coaxial cable",
            "Category 6a twisted-pair",
            "Radio channels",
            "Satellite",
          ],
          correct: 1,
        },
        {
          q: "65. What is fiber optics preferred for?[cite: 2]",
          options: [
            "Short-haul LANS",
            "Long-haul transmission",
            "Wireless",
            "Low bit rates",
          ],
          correct: 1,
        },

        // ==========================================
        // الأسئلة النظرية / المقالية (Theoretical Questions)
        // ==========================================
        {
          q: "1. What are the two principal ways to describe the Internet?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "2. In Internet jargon, what are the billions of computing devices connected to the Internet called?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "3. What are the two most prominent types of packet switches in today's Internet?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "4. What is the name for the sequence of communication links and packet switches traversed by a packet from sender to receiver?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "5. Through what do end systems access the Internet?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "6. What is the collective name for the Internet's principal protocols?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "7. Which organization develops Internet standards, and what are its documents called?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "8. Which committee specifies standards for Ethernet and WiFi?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "9. From a services perspective, the Internet is an infrastructure that provides services to what?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "10. Where do Internet applications run?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "11. What is the name of the interface that specifies how a program asks the Internet to deliver data to a destination program on another end system?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "12. Using a human analogy for a protocol, what might a response of 'Don't bother me!' to a 'Hi' indicate?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "13. What three things does a network protocol define?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "14. What are the components located at the edge of the Internet called?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "15. What is the equation given for hosts and end systems?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "16. Into what two categories are hosts sometimes divided?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "17. Where do many of the servers we use today reside?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "18. What is the access network?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "19. What are the two most prevalent types of broadband residential access discussed?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "20. What does a DSLAM do?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "21. What does HFC stand for, and what two types of cable does it use?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "22. What is the device at the cable head end that serves a similar function to a DSLAM?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "23. Why is cable Internet access considered a shared broadcast medium?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "24. What does FTTH stand for?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "25. What is the dominant wired access technology in corporate, university, and home LANs?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "26. What is the common name for IEEE 802.11 wireless LAN technology?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "27. Compared to WiFi, what is the typical range for a user from a cellular base station?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "28. What are the two categories of physical media?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "29. What is the least expensive and most commonly used guided transmission medium?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "30. What is a key characteristic of coaxial cable that allows it to achieve high data rates?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "31. What are three advantages of fiber optics as a transmission medium?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "32. What is a key reason fiber optics is not yet prevalent for short-haul transport like LANs?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "33. What are the three broad groups of terrestrial radio channels based on distance?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "34. What are the two types of satellites used in communications?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "35. What is a significant disadvantage of geostationary satellites?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "36. What are the two fundamental approaches to moving data through a network?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "37. In a network application, what do end systems exchange?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "38. What are the smaller chunks of data that a long message is broken into called?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "39. What does 'store-and-forward transmission' mean?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "40. In a simple two-end-system, one-router example, if a packet is L bits long and the link rate is R bits/sec, what is the total delay to get the packet to the destination?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "41. For a path with N links, each of rate R, what is the end-to-end delay for one packet?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "42. What is the purpose of an output buffer (output queue) in a packet switch?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "43. What is the variable delay that packets suffer in addition to store-and-forward delays?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "44. What happens if an arriving packet finds the output buffer full?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "45. How does a router determine which outbound link to forward a packet onto?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "46. What are the special protocols used to automatically set forwarding tables called?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "47. In circuit switching, what is reserved for the duration of a communication session?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "48. What are the two fundamental approaches to multiplexing a circuit in a link?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "49. What is the main criticism of packet switching regarding real-time services?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "50. What are two arguments made by proponents of packet switching?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "51. What is the overarching goal of interconnecting access ISPs?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "52. Why is directly connecting every access ISP to every other access ISP not a practical solution?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "53. In a simple network structure (Structure 1), what interconnects all access ISPs?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "54. In the hierarchy of ISPs, what are the approximately dozen very large ISPs called?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "55. What does it mean for an ISP to multi-home?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "56. What is the primary benefit of multi-homing?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "57. What does it mean for two ISPs to peer?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "58. What is an IXP?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "59. What is a key characteristic of content-provider networks like Google's?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "128. What is the fundamental difference between how resources are managed in packet switching versus circuit switching?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "129. Why is packet switching considered more efficient for bursty data traffic?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "130. How does the concept of 'statistical multiplexing' relate to packet switching?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "131. What is the relationship between a host, an end system, and a server?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "133. In the context of access networks, what does 'asymmetric' mean?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
        {
          q: "134. How does a router differ from a link-layer switch in terms of the layers they implement?[cite: 3]",
          options: ["انظر في الملف"],
          correct: 0,
        },
      ],
    },
  ],

  midterms: [
    {
      t: "MidTerm 2024",
      d: "امتحان منتصف الترم 2024",
      pdf: "MidTerm 2024 - Questions - Networks.pdf",
      questions: [
        {
          q: "Which of the following statements is true about Client-Server Architecture?",
          options: [
            "In Client-Server Architecture, the server waits for incoming requests while the client Initiates contact with server.",
            "In Client-Server Architecture, the client waits for incoming requests while the server Initiates contact with server.",
            "In Client-Server Architecture, the server typically requests service from the client while the client provides requested service to server.",
            "All of the options.",
          ],
          correct: 0,
        },
        {
          q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
          options: [
            "Application layer",
            "Network layer",
            "Transport layer",
            "Session layer",
          ],
          correct: 3,
        },
        {
          q: "In circuit switching, circuit segment is idle if not used by call.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Which of the following statements about DNS is TRUE?",
          options: [
            "TLD servers store all the hostname to IP mappings of the Internet.",
            "Every Web server must have a canonical name.",
            "Local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
            "DNS server listens to TCP port 53.",
          ],
          correct: 2,
        },
        {
          q: "In Go-back-N protocol, what are the size of the respective sender and receiver buffers required for a window size of N?",
          options: ["1;1", "N-1;1", "N-1;N-1", "N;1"],
          correct: 3,
        },
        {
          q: "Consider the following Python code snippet. s1.bind('', 8080)) s2, addr = s1.accept(). Suppose no exception is raised, which of the following statements is TRUE?",
          options: [
            "s1 is a UDP socket",
            "Server uses s1 to transmit application data to client",
            "s2 listens to port 8080",
            "s2 listens to a random port number assigned by operation system",
          ],
          correct: 3,
        },
        {
          q: "Using Conditional GET in HTTP Protocol, the number of RTT is reduced if the object is not modified since the date of the cached copy!",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "End-to-end delay is the time taken for a packet to travel from source to destination. It consists of which of the following delays?",
          options: [
            "Transmission delay.",
            "Propagation delay.",
            "Queuing and Processing delays.",
            "All of the options",
          ],
          correct: 3,
        },
        {
          q: "Which of the following statements is true?",
          options: [
            "Both the Internet and traditional telephone networks use packet-switching.",
            "Performance metrics such as end-to-end delay and throughput can be guaranteed in the Internet, if TCP is chosen as the transport layer protocol.",
            "The Internet uses packet switching and traditional telephone networks uses circuit switching.",
            "In the Internet, packets from the same source always take the same path to reach destination.",
          ],
          correct: 2,
        },
        {
          q: "A Web server stores a webpage that comprises a base HTML file and 2 images referenced by the base HTML file. The HTML file is 100 bytes and each image is 200 bytes. A client is connected to the Web server through a direct link of 1 Mbps. Propagation delay between the Web server and the client is 50 milliseconds. The client downloads the webpage using persistent HTTP but without pipelining. How long (in milliseconds) does it take for the client to download the entire webpage?",
          options: ["404", "604", "204", "402.4"],
          correct: 3,
        },
        {
          q: "HTTP protocol keeps state information at the server side about past client requests.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "Which of the following statements is true about TCP and not true about UDP?",
          options: [
            "Provides timing service.",
            "Provides minimum throughput guarantee service.",
            "Provides security service.",
            "Provides reliable transport service.",
          ],
          correct: 3,
        },
        {
          q: "A browser requests to download index.html from a Web server. The HTTP response header received by the browser is shown below. Which of the following statements is TRUE? (HTTP/1.1 200 OK ... Set-Cookie: PHPSESSID=... Content-Length: 1256)",
          options: [
            "In the HTTP request, browser has requested for a non-persistent connection.",
            "Suppose TCP header is 20 bytes, the length of the TCP segment containing the HTTP response is 1276 bytes.",
            "The index.html file received by the browser may have been corrupted during transmission.",
            "The Web server uses a cookie to keep the state information of the client.",
          ],
          correct: 3,
        },
        {
          q: "How many sockets are there in a TCP server communicating with 13 clients concurrently?",
          options: ["13", "14", "15", "12"],
          correct: 1,
        },
        {
          q: "Consider the transmission between a UDP sender and a UDP receiver. Which of the following will never happen?",
          options: [
            "UDP receiver fails to receive any packet from UDP sender.",
            "UDP receiver receives out-of-order packets from UDP sender.",
            "UDP receiver receives duplicate packets from UDP sender.",
            "UDP receiver receives corrupted packets from UDP sender but fails to detect bit errors.",
          ],
          correct: 3,
        },
        {
          q: "Which of the following statements is true about packet switching?",
          options: [
            'In packet switching, bandwidth is divided into "pieces" between the nodes.',
            "In packet switching, dedicated allocation is done between nodes.",
            "In packet switching, resources are reserved for nodes.",
            "None of the options.",
          ],
          correct: 3,
        },
        {
          q: "Consider a sender and a receiver communicating using Selective Repeat protocol. Every packet embeds a 4-bit sequence number field. Sender window size is 4. The third data packet and the second ACK packet are lost. What is the sender window over the sequence number space at time t?",
          options: [
            "12, 13, 14, 15",
            "13, 14, 0, 1",
            "13, 14, 15, 0",
            "13, 14, 15, 16",
          ],
          correct: 2,
        },
        {
          q: "Top-level domain (TLD) servers are organization's own DNS server(s), providing authoritative hostname to IP mappings for organization's named hosts.",
          options: ["Yes", "No"],
          correct: 1,
        },
        {
          q: "Which of the following is present in both HTTP request line and status line?",
          options: [
            "HTTP version number",
            "Request method",
            "Status code",
            "URL",
          ],
          correct: 0,
        },
        {
          q: "Which of the following HTTP protocols does the given figure represent to fetch a web page with 2 reference objects?",
          options: [
            "Non-persistent HTTP.",
            "Persistent HTTP.",
            "Non-persistent HTTP with parallel connection.",
            "Persistent HTTP with pipelining.",
          ],
          correct: 2,
        },
        {
          q: "A packet switch receives a packet and determines the outbound link. When the packet arrives, x bits of the currently-being-transmitted packet have been transmitted and n other packets are waiting. What is the queuing delay?",
          options: ["nL/R", "(nL+(x-L))/R", "n(L-x)/R", "(nL+(L-x))/R"],
          correct: 3,
        },
        {
          q: "Assume a sender and a receiver connected via one packet-switch. The sender sends a message of size 24 KBytes using packets of length 1000 Bytes. The bit rates are 2 kbps and 5 kbps for the first and the second link, respectively. Using store and forward, what is the end-to-end delay (in seconds)?",
          options: ["16.8", "134.4", "0.1008", "16800"],
          correct: 1,
        },
        {
          q: "In Non-persistent HTTP, the client closes the TCP connection after fetching one object (one pair of HTTP request and HTTP response)",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "A source and a destination are separated by 3*10^5 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^8 meters/second. The source sends 100 packets to the destination using RDT 2.2. Each packet is of 2*10^3 bits long. Suppose ACK packets are of negligible size and transmission channel is perfectly reliable. What is the throughput (in bps) of transmission?",
          options: ["200", "500", "100", "400"],
          correct: 1,
        },
        {
          q: "Which of the following statements is true about circuit switching?",
          options: [
            "Resources are pre-allocated regardless of demand",
            "Packet transmission can use the full link bandwidth",
            "The path between a source and a destination is not fixed",
            "All of the options",
          ],
          correct: 0,
        },
        {
          q: "A Selective Repeat sender just receives an ACK packet with ACK number 7. This ACK number falls within sender window which has the window size 3. Every data packet embeds a k-bit sequence number field. Which of the following definitely CANNOT be the sequence number of the next packet transmitted by the sender?",
          options: ["0", "2", "3", "6"],
          correct: 2,
        },
        {
          q: "Can HTTP response message contains an empty body? If yes, When can this happen?",
          options: [
            "No, an HTTP response message can never have an empty body.",
            "Yes, if the requested object has been moved to a new location.",
            "Yes, if the requested object is recently modified.",
            "Yes, if the requested object is very small in size.",
          ],
          correct: 1,
        },
      ],
    },
    {
      t: "MidTerm 2023",
      d: "امتحان منتصف الترم 2023",
      pdf: "MidTerm 2023 - Questions - Networks.pdf",
      questions: [
        {
          q: "How many sockets are there in a TCP server communicating with 13 clients concurrently?",
          options: ["15", "None of the options", "13", "12", "14"],
          correct: 4,
        },
        {
          q: "A source and a destination are separated by 3*10^4 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^4 meters/second. The source sends 100 packets using RDT 2.2. Each packet is of 2*10^4 bits long. What is the throughput (in bps) of transmission?",
          options: ["100", "500", "400", "None of the options", "200"],
          correct: 4,
        },
        {
          q: "Which of the following statements is true about TCP and not true about UDP?",
          options: [
            "Provides timing service.",
            "Provides reliable transport service.",
            "Provides security service.",
            "Provides minimum throughput guarantee service.",
          ],
          correct: 1,
        },
        {
          q: "Top-level domain (TLD) servers are organization's own DNS server(s), providing authoritative hostname to IP mappings for organization's named hosts.",
          options: ["No", "Yes"],
          correct: 0,
        },
        {
          q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
          options: [
            "Physical layer",
            "Session layer",
            "Application layer",
            "None of the options",
            "Network layer",
            "Transport layer",
          ],
          correct: 1,
        },
        {
          q: "Consider pseudo-code for rdt 3.0 receiver. Which of the following statements is TRUE?",
          options: [
            "A single loss ACK packet is sufficient to cause the sender to loop forever.",
            "A single corrupted data packet is sufficient to cause the sender to loop forever.",
            "A single corrupted data packet is sufficient to cause the receiver to wait forever.",
            "A single premature timeout is sufficient to cause the sender to loop forever.",
          ],
          correct: -1,
        },
        {
          q: "Which of the following statements is true about circuit switching?",
          options: [
            "The path between a source and a destination is not fixed",
            "Packet transmission can use the full link bandwidth",
            "None of the options",
            "Resources are pre-allocated regardless of demand",
            "All of the options",
          ],
          correct: 3,
        },
        {
          q: "A packet switch receives a packet. When the packet arrives, x bits of the currently-being-transmitted packet have been transmitted and n other packets are waiting. What is the queuing delay?",
          options: [
            "(nL + (L - x)) / R",
            "nL / R",
            "n(L - x) / R",
            "nL + (L - x) / R",
            "(nL + (x - L)) / R",
          ],
          correct: 0,
        },
        {
          q: "In Go-back-N protocol, what are the size of the respective sender and receiver buffers required for a window size of N?",
          options: ["N; N", "N; 1", "1; 1", "N - 1; N - 1", "N - 1; 1"],
          correct: 1,
        },
        {
          q: "Which of the following statements about DNS is TRUE?",
          options: [
            "None of the options",
            "Every Web server must have a canonical name.",
            "Local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
            "DNS server listens to TCP port 53.",
            "TLD servers store all the hostname to IP mappings of the Internet.",
          ],
          correct: 2,
        },
        {
          q: "A Web server stores a webpage that comprises a base HTML file and 2 images. The client downloads using persistent HTTP but without pipelining. How long does it take?",
          options: ["604", "204", "402.4", "404"],
          correct: 3,
        },
        {
          q: "HTTP protocol keeps state information at the server side about past client requests.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "Which of the following statements is true about packet switching?",
          options: [
            "In packet switching, dedicated allocation is done between nodes.",
            'In packet switching, time is divided into "slots" between the nodes.',
            'In packet switching, bandwidth is divided into "pieces" between the nodes.',
            "In packet switching, resources are reserved for nodes.",
            "None of the options.",
          ],
          correct: 4,
        },
        {
          q: "In Non-persistent HTTP, the client closes the TCP connection after fetching one object.",
          options: ["False", "True"],
          correct: 1,
        },
        {
          q: "Can HTTP response message contains an empty body? If yes, When can this happen?",
          options: [
            "No, an HTTP response message can never have an empty body.",
            "Yes, if the requested object is recently modified.",
            "Yes, if the requested object is very small in size.",
            "Yes, if the requested object has been moved to a new location.",
          ],
          correct: 3,
        },
        {
          q: "In circuit switching, circuit segment is idle if not used by call.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "A browser requests to download index.html. The HTTP response header is shown. Which statement is TRUE?",
          options: [
            "Suppose TCP header is 20 bytes, the length of the TCP segment containing the HTTP response is 1276 bytes.",
            "In the HTTP request, browser has requested for a non-persistent connection.",
            "None of the options.",
            "The index.html file received by the browser may have been corrupted during transmission.",
            "The Web server uses a cookie to keep the state information of the client.",
          ],
          correct: 4,
        },
        {
          q: "Assume a sender and a receiver connected via one packet-switch. The sender sends a message of size 24 KBytes using packets of length 1000 Bytes. The bit rates are 2 kbps and 5 kbps. Using store and forward, what is the end-to-end delay (in seconds)?",
          options: ["16800", "134.4", "16.8", "None of the options", "0.1008"],
          correct: 1,
        },
        {
          q: "End-to-end delay is the time taken for a packet to travel from source to destination. It consists of which of the following delays?",
          options: [
            "Propagation delay.",
            "Queuing delay.",
            "Processing delay.",
            "All the options.",
            "Transmission delay.",
            "None of the options.",
          ],
          correct: 3,
        },
        {
          q: "Which of the following statements is true?",
          options: [
            "The Internet uses packet switching and traditional telephone networks uses circuit switching.",
            "Performance metrics such as end-to-end delay and throughput can be guaranteed in the Internet, if TCP is chosen as the transport layer protocol.",
            "None of the options",
            "In the Internet, packets from the same source always take the same path to reach destination.",
            "Both the Internet and traditional telephone networks use packet-switching.",
          ],
          correct: 0,
        },
        {
          q: "Which of the following HTTP protocols does the given figure represent to fetch a web page with 2 reference objects?",
          options: [
            "Persistent HTTP with pipelining.",
            "Non-persistent HTTP.",
            "Persistent HTTP.",
            "Non-persistent HTTP with parallel connection.",
          ],
          correct: 3,
        },
        {
          q: "Which of the following statements about socket programming with TCP is true?",
          options: [
            "Server cannot send data to client after a client initiates TCP connection to the server.",
            "Client explicitly attaches destination IP address and port number to every packet",
            "Server extracts sender IP address and port number from the received packet.",
          ],
          correct: 2,
        },
        {
          q: "Which of the following statements is true about Client-Server Architecture?",
          options: [
            "In Client-Server Architecture, the server typically requests service from the client while the client provides requested service to server.",
            "In Client-Server Architecture, the server waits for incoming requests while the client initiates contact with server.",
            "In Client-Server Architecture, the client waits for incoming requests while the server initiates contact with server.",
            "All of the options.",
            "None of the options.",
          ],
          correct: 1,
        },
        {
          q: "A Selective Repeat sender just receives an ACK packet with ACK number 7. This ACK number falls within sender window which has the window size 3. Which of the following definitely CANNOT be the sequence number of the next packet transmitted by the sender?",
          options: ["3", "0", "10", "2", "6"],
          correct: 0,
        },
        {
          q: "Using Conditional GET in HTTP Protocol, the number of RTT is reduced if the object is not modified since the date of the cached copy!",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "Consider the transmission between a UDP sender and a UDP receiver. Which of the following will never happen?",
          options: [
            "UDP receiver receives duplicate packets from UDP sender.",
            "None of the above",
            "UDP receiver receives out-of-order packets from UDP sender.",
            "UDP receiver fails to receive any packet from UDP sender.",
            "UDP receiver receives corrupted packets from UDP sender but fails to detect bit errors.",
          ],
          correct: 4,
        },
        {
          q: "What is the checksum (1's complement of the sum) of the following 3 bytes? 10010011 10011001 11011101",
          options: ["11011110", "00100010", "11011111"],
          correct: -1,
        },
        {
          q: "Which of the following is present in both HTTP request line and status line?",
          options: [
            "Status code",
            "None of the options",
            "URL",
            "HTTP version number",
            "Request method",
          ],
          correct: 3,
        },
        {
          q: "Consider the following Python code snippet. Suppose no exception is raised, which of the following statements is TRUE?",
          options: [
            "s2 listens to a random port number assigned by operation system",
            "s1 is a UDP socket",
            "None of the options.",
            "Server uses s1 to transmit application data to client",
            "s2 listens to port 8080",
          ],
          correct: 0,
        },
        {
          q: "Consider a sender and a receiver communicating using Selective Repeat protocol. Every packet embeds a 4-bit sequence number field. Sender window size is 4. The third data packet and the second ACK packet are lost. What is the sender window over the sequence number space at time t?",
          options: [
            "13, 14, 0, 1",
            "12, 13, 14, 15",
            "13, 14, 15, 0",
            "13, 14, 15, 16",
          ],
          correct: 2,
        },
      ],
    },
    {
      t: "MidTerm 2024 (Short)",
      d: "امتحان منتصف الترم 2024 (أسئلة قصيرة/صح وخطأ)",
      pdf: "MidTerm 2024 - Questions - Networks(2).pdf",
      questions: [
        {
          q: "In BitTorrent, if Alice has a subset of chunks and knows which chunks her neighbors have, then Alice requests small size chunks first from her neighbors. In this manner she gets chunks more quickly and will have a lot of chunks which helps her to be one of the top 4 for other pears",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "Dial-up and DSL are both dedicated access technology, where HFC and FTTH(PON) are completely shared along the path.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Assume that a file of size F is to be distributed to N clients in client-server architecture. If the upload rate of the server's access link is us, then the time to distribute the file to N clients is equal to NF / us",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "UDP socket is fully identified by a source port number, and a destination port number while TCP socket is fully identified by a source port number, a destination port number, a source IP address and a destination IP address",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "In packet switching, end-end resources along path are reserved for the duration of communication session",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "Given that the requested information is not available at any intermediate databases, a recursive DNS query from a requesting host would follow the path.",
          options: [
            "root DNS server, TLD server, local DNS server, authoritative DNS server",
            "authoritative DNS server, root server, TLD server, local DNS server",
            "local DNS server, root DNS server, local DNS server, TLD server, local DNS server, authoritative DNS server",
            "local DNS server, root DNS server, TLD server, authoritative DNS server",
            "None of the above",
          ],
          correct: 3,
        },
        {
          q: "Consider that there is a shared link of 1 Mb/s. In case of using TDM with 10 slots per frame and each slot 1000 bit, then the number of frames per second will be 100000.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "When the server side receives a command for a file transfer over the control connection (either to, or from, the remote host), the server side initiates a TCP data connection to the client side, then FTP sends exactly one file over the data connection, and then closes the data connection.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Because many firewalls are configured to block (most types of) UDP traffic, designers have increasingly chosen to run multimedia and real-time applications over TCP.",
          options: ["True", "False"],
          correct: 0,
        },
      ],
    },
    {
      t: "مقدمة في شبكات الحاسب 10:00-11:00 26/11/2022 د/طارق محمد عبدالقادر",
      d: "Midterm Exam - 26/11/2022 - Dr. Tarek Mohamed Abdelkader",
      pdf: "مقدمة في شبكات الحاسب 10_00-11_00 26_11_2022 د_طارق محمد عبدالقادر  (Preview) Microsoft Forms.pdf",
      questions: [
        {
          q: "The only control that the application developer has on the transport-layer side is",
          options: [
            "the choice of transport protocol",
            "perhaps the ability to fix a few transport-layer parameters",
            "all of the mentioned",
          ],
          correct: 2,
        },
        {
          q: "When this client-server interaction is taking place over TCP, the application developer needs to make an important decision—should each request/response pair be sent over a separate TCP connection, or should all of the requests and their corresponding responses be sent over the same TCP connection? In the former approach, the application is said to use ---",
          options: [
            "non-persistent connections",
            "persistent connections",
            "none of the above",
          ],
          correct: 0,
        },
        {
          q: "In the layer hierarchy as the data packet moves from the upper to the lower layers, headers are",
          options: ["Added", "Removed", "Rearranged"],
          correct: 0,
        },
        {
          q: "Processes on two different end systems communicate with each other",
          options: [
            "by exchanging messages",
            "across the computer network",
            "with interprocess communication",
            "all of the mentioned",
          ],
          correct: 3,
        },
        {
          q: "The number of layers in ISO / OSI reference model is",
          options: ["10", "7", "5"],
          correct: 1,
        },
        {
          q: "What is client process",
          options: [
            "Process that initiates communication",
            "Process that waits to be contacted",
            "protocol in the application layer",
          ],
          correct: 0,
        },
        {
          q: "A is the physical path over which a message travels",
          options: ["Path", "Medium"],
          correct: 1,
        },
        {
          q: "The RTT includes",
          options: [
            "packet-propagation delays",
            "packet-queuing delays",
            "all of the mentioned",
          ],
          correct: 2,
        },
        {
          q: "Two devices are in network if",
          options: [
            "a process in one device is able to exchange information with a process in another device",
            "a process is running on both devices",
            "PIDs of the processes running of different devices are same",
          ],
          correct: 0,
        },
        {
          q: "the rate at which data is transferred is referred to",
          options: ["transmission rate", "transfer ratio", "compression rate"],
          correct: 0,
        },
        {
          q: "Which is not a application layer protocol",
          options: ["HTTP", "SMTP", "TCP"],
          correct: 2,
        },
        {
          q: "A set of rules that governs data communication",
          options: ["Protocols", "Standards", "RFCs"],
          correct: 0,
        },
        {
          q: "malware can record keystrokes, web sites visited, upload info to collection site",
          options: ["virus", "worm", "spyware"],
          correct: 2,
        },
        {
          q: "Which protocol is a protocol of application layer",
          options: ["HTTP", "TCP", "IP"],
          correct: 0,
        },
        {
          q: "data over DSL phone line goes to",
          options: ["internet", "telephone net", "none of the above"],
          correct: 0,
        },
        {
          q: "Which of this is not a network edge device",
          options: ["PC", "Smartphones", "Switch"],
          correct: 2,
        },
        {
          q: "can make use of as much, or as little, throughput as happens to be available",
          options: [
            "bandwidth-sensitive applications",
            "elastic applications",
            "all of the mentioned",
          ],
          correct: 1,
        },
        {
          q: "A list of protocols used by a system, one protocol per layer, is called",
          options: [
            "protocol architecture",
            "protocol stack",
            "protocol suite",
          ],
          correct: 1,
        },
        {
          q: "What is the HTTP port number",
          options: ["25", "110", "80"],
          correct: 2,
        },
        {
          q: "End systems access the Internet through",
          options: [
            "Internet Service Providers ISPs",
            "Customer premises Equipment CBE",
            "Digital subscriber line DSL",
          ],
          correct: 0,
        },
        {
          q: "A is a device that forwards packets between networks by processing the routing information included in the packet",
          options: ["bridge", "firewall", "router"],
          correct: 2,
        },
        {
          q: "Network congestion occurs",
          options: [
            "in case of traffic overloading",
            "when a system terminates",
            "when connection between two nodes terminates",
          ],
          correct: 0,
        },
        {
          q: "The structure or format of data is called",
          options: ["Syntax", "Semantics", "Struct"],
          correct: 0,
        },
      ],
    },
  ],
  finals: [
    {
      t: "Final 2026 - National - Dr.Tarek",
      d: "Final exam - National - Dr. Tarek",
      pdf: "Final 2026 - National - Dr.Tarek.pdf",
      questions: [
        {
          q: "What is an HTTP cookie used for?",
          options: [
            "Like dessert, cookies are used at the end of a transaction, to indicate the end of the transaction",
            "A cookies is a code used by a server, carried on a client's HTTP request, to access information the server had earlier stored about an earlier interaction with this person. [Think about the distinction between a browser and a person.]",
            "A cookie is a code used by a server, carried on a client's HTTP request, to access information the server had earlier stored about an earlier interaction with this Web browser. [Think about the distinction between a browser and a person.]",
            "A cookie is a code used by a client to authenticate a person's identity to an HTTP server.",
          ],
          correct: 2,
        },
        {
          q: "an IPv4 datagram has a",
          options: ["4- byte header", "8- byte header", "20- byte header"],
          correct: 2,
        },
        {
          q: "Which of the characteristics below are associated with a client-server approach to structuring network applications (as opposed to a P2P approach)",
          options: [
            "A process requests service from those it contacts and will provide service to processes that contact it.",
            "There is a server with a well known server IP address.",
            "There is not a server that is always on",
            "None of the above",
          ],
          correct: 1,
        },
        {
          q: "Transfer of a bit into and out of a transmission media",
          options: [
            "Application Layer",
            "Transport layer",
            "Network layer",
            "Physical layer",
          ],
          correct: 3,
        },
        {
          q: "What specifies the format of packets that are sent and received among routers and end systems",
          options: ["TCP", "UDP", "IP", "DNS"],
          correct: 2,
        },
        {
          q: 'Which of the following descriptions below correspond to a "services" view of the Internet?',
          options: [
            "A platform for building network applications",
            "A collection of billions of computing devices, and packet switches interconnected by links",
            'A "network of networks".',
            "A collection of hardware and software components executing protocols that define the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.",
          ],
          correct: 0,
        },
        {
          q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Replies to DNS query by local host, by contacting other DNS servers to answer the query.",
          options: [
            "Local DNS server",
            "Authoritative DNS server",
            "DNS root servers",
            "Top Level Domain (TLD) servers",
          ],
          correct: 0,
        },
        {
          q: "Time spent transmitting packets bits into the link",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 2,
        },
        {
          q: "Which of the following are changes between HTTP 1.1 and HTTP/2?",
          options: [
            "HTTP/2 allows a large object to be broken down into smaller pieces, and the transmission of those pieces to be interleaved with transmission other smaller objects, thus preventing a large object from forcing many smaller objects to wait their turn for transmission.",
            "HTTP/2 provides enhanced security by using transport layer security (TLS).",
            "HTTP/2 has many new HTTP methods and status codes.",
            "All of the above",
          ],
          correct: 0,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Application layer",
          options: ["Datagram", "Message", "Bit", "Segment"],
          correct: 1,
        },
        {
          q: "Forwarding is the local action of moving arriving packets from router's input link to appropriate router output link, while routing is the global action of determining the source- destination paths taken by packets.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "When an application uses a UDP socket, what transport services are provided to the application by UDP?",
          options: [
            "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
            "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
            "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
            "Flow Control. The provided service will ensure that the sender does not send so fast as to overflow receiver buffers.",
          ],
          correct: 2,
        },
        {
          q: "What is the purpose of a cookie value in the HTTP GET request?",
          options: [
            "The cookie value encodes a default set of preferences that the user has previously specified for this web site",
            "The cookie value encodes the format of the reply preferred by the client in the response to this GET request",
            "The cookie value itself doesn't mean anything. It is just a value that was returned by a web server to this client during an earlier interaction",
            "The cookie value indicates whether the user wants to use HTTP/1, HTTP/1.1, or HTTP/2 for this GET request.",
          ],
          correct: 2,
        },
        {
          q: "What is the purpose of the HTTP GET message?",
          options: [
            "The HTTP GET request message is sent by a web server to a web client to get the identity of the web client.",
            "The HTTP GET request message is sent by a web server to a web client to get the next request from the web client.",
            "The HTTP GET request message is used by a web client to request a web server to send the requested object from the server to the client.",
            "The HTTP GET request message is used by a web client to post an object on a web server.",
          ],
          correct: 2,
        },
        {
          q: "Which of the fields below are in a UDP segment header",
          options: [
            "Internet checksum",
            "Upper layer protocol",
            "Data (payload)",
            "Sequence number",
          ],
          correct: 0,
        },
        {
          q: "Time spent waiting in packet buffers for link transmission",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 3,
        },
        {
          q: 'What do we mean when we say "HTTP is stateless"? In answering this question, assume that cookies are not used',
          options: [
            "The HTTP protocol is not licensed in any country.",
            "An HTTP client does not remember anything about what happened during earlier steps in interacting with any HTTP server.",
            "An HTTP server does not remember anything about what happened during earlier steps in interacting with this HTTP client",
            "An HTTP client does not remember the identities of the servers with which it has interacted.",
          ],
          correct: 2,
        },
        {
          q: "What is the purpose of the HTTP GET message?",
          options: [
            "The HTTP GET request message is sent by a web server to a web client to get the identity of the web client.",
            "The HTTP GET request message is sent by a web server to a web client to get the next request from the web client.",
            "The HTTP GET request message is used by a web client to request a web server to send the requested object from the server to the client.",
            "The HTTP GET request message is used by a web client to post an object on a web server.",
          ],
          correct: 2,
        },
        {
          q: "Time spent waiting in packet buffers for link transmission",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 3,
        },
        {
          q: "Which of the characteristics below are associated with the technique of circuit switching?",
          options: [
            "This technique is used in the Internet",
            "Congestion loss and variable end- end delays are possible with this technique",
            "Resources are used on demand, not reserved in advance",
            "Frequency Division Multiplexing (FDM) and Time Division Multiplexing (TDM) are two approaches for implementing this technique",
          ],
          correct: 3,
        },
        {
          q: 'When we say that the Internet is a "network of networks," we mean?',
          options: [
            "The Internet is the largest network ever built",
            "The Internet is made up of a lot of different networks that are interconnected to each other",
            "The Internet is the fastest network ever built",
            "All of the above",
          ],
          correct: 1,
        },
        {
          q: "What is the purpose of the conditional HTTP GET request message?",
          options: [
            "To allow a server to only send the requested object to the client if the server is not overloaded.",
            "To allow a server to only send the requested object to the client if this object has changed since the server last sent this object to the client",
            "To allow a server to only send the requested object to the client if the client is authorized to received that object.",
            "To allow a server to only send the requested object to the client if the client has never requested that object before",
          ],
          correct: 1,
        },
        {
          q: "Time need for bits to physically propagate through the transmission medium from end one of a link to the other",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 1,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Link layer",
          options: ["Datagram", "Message", "Segment", "Frame"],
          correct: 3,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Transport layer",
          options: ["Datagram", "Message", "Bit", "Segment"],
          correct: 3,
        },
        {
          q: "What is the purpose of the conditional HTTP GET request message?",
          options: [
            "To allow a server to only send the requested object to the client if the server is not overloaded.",
            "To allow a server to only send the requested object to the client if this object has changed since the server last sent this object to the client",
            "To allow a server to only send the requested object to the client if the client is authorized to received that object.",
            "To allow a server to only send the requested object to the client if the client has never requested that object before",
          ],
          correct: 1,
        },
        {
          q: "Delivery of datagrams from a source host to a destination host (typically)",
          options: [
            "Link layer",
            "Application Layer",
            "Transport layer",
            "Network layer",
          ],
          correct: 3,
        },
        {
          q: "Which of the characteristics below are associated with the technique of packet switching?",
          options: [
            "Frequency Division Multiplexing (FDM) and Time Division Multiplexing (TDM) are two approaches for implementing this technique.",
            "This technique was the basis for the telephone call switching during the 20th century and into the beginning of this current century.",
            "Data may be queued before being transmitted due to other user's data that's also queueing for transmission.",
            "Reserves resources needed for a call from source to destination",
          ],
          correct: 2,
        },
        {
          q: "P2P networks do not need a server",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "When an application uses a UDP socket, what transport services are provided to the application by UDP?",
          options: [
            "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
            "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
            "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
            "Flow Control. The provided service will ensure that the sender does not send so fast as to overflow receiver buffers.",
          ],
          correct: 2,
        },
        {
          q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Provides authoritative hostname to IP mappings for organization's named hosts.",
          options: [
            "Local DNS server",
            "Authoritative DNS server",
            "DNS root servers",
            "Top Level Domain (TLD) servers",
          ],
          correct: 1,
        },
        {
          q: "Transfer of data between one process and another process (typically on different hosts)",
          options: [
            "Link layer",
            "Application Layer",
            "Transport layer",
            "Network layer",
          ],
          correct: 2,
        },
        {
          q: 'Which of the following descriptions below correspond to a "nuts-and-bolts" view of the Internet?',
          options: [
            "A platform for building network applications",
            'A "network of networks"',
            "A place I go for information, entertainment, and to communicate with people",
            "All of the above",
          ],
          correct: 1,
        },
        {
          q: "Where is transport-layer functionality primarily implemented",
          options: [
            'Transport layer functions are implemented primarily at the hosts at the "edge" of the network',
            "Transport layer functions are implemented primarily at the routers and switches in the network",
            "Transport layer functions are implemented primarily at each end of a physical link connecting one host/router/switch to another one host/router/switch",
            "None of the above",
          ],
          correct: 0,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Network layer",
          options: ["Datagram", "Message", "Segment", "Frame"],
          correct: 0,
        },
        {
          q: "UDP packet has",
          options: [
            "2 byte header",
            "8 byte header",
            "12 byte header",
            "16 byte header",
          ],
          correct: 1,
        },
        {
          q: "Which of the characteristics below are associated with a P2P approach to structuring network applications (as opposed to a client-server approach)?",
          options: [
            "There is a server that is always on",
            "HTTP uses this application structure",
            "There is a server with a well known server IP address",
            "There is not a server that is always on",
          ],
          correct: 3,
        },
        {
          q: "What is the purpose of a cookie value in the HTTP GET request?",
          options: [
            "The cookie value encodes a default set of preferences that the user has previously specified for this web site.",
            "The cookie value encodes the format of the reply preferred by the client in the response to this GET request.",
            "The cookie value itself doesn't mean anything. It is just a value that was returned by a web server to this client during an earlier interaction.",
            "The cookie value indicates whether the user wants to use HTTP/1, HTTP/1.1, or HTTP/2 for this GET request.",
          ],
          correct: 2,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Physical layer",
          options: ["Datagram", "Message", "Bit", "Segment"],
          correct: 2,
        },
        {
          q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Responsible for a domain (e.g., *.com, *.edu); knows how to contact authoritative name servers",
          options: [
            "Local DNS server",
            "Authoritative DNS server",
            "DNS root servers",
            "Top Level Domain (TLD) servers",
          ],
          correct: 3,
        },
        {
          q: 'Which of the definitions below describe what is meant by the term "encapsulation"?',
          options: [
            "Determining the name of the destination host, translating that name to an IP address and then placing that value in a packet header field.",
            "Starting a transport layer timer for a transmitted segment, and then if an ACK segment isn't received before the timeout, placing that segment in a retransmission queue.",
            'Taking data from the layer above, adding header fields appropriate for this layer, and then placing the data in the payload field of the "packet" for that layer.',
            'Receiving a "packet" from the layer below, extracting the payload field, and after some internal actions possibly delivering that payload to an upper layer protocol.',
          ],
          correct: 2,
        },
        {
          q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Highest level of the DNS hierarchy, knows how to reach servers responsible for a given domain (e.g., *.com, *.edu)",
          options: [
            "Local DNS server",
            "Authoritative DNS server",
            "DNS root servers",
            "Top Level Domain (TLD) servers",
          ],
          correct: 2,
        },
        {
          q: "Which of the characteristics below are associated with a client-server approach to structuring network applications (as opposed to a P2P approach)",
          options: [
            "A process requests service from those it contacts and will provide service to processes that contact it.",
            "There is a server with a well known server IP address",
            "There is not a server that is always on",
            "All of the above",
          ],
          correct: 1,
        },
        {
          q: "Transfer of data between neighboring network devices",
          options: [
            "Link layer",
            "Application Layer",
            "Transport layer",
            "Network layer",
          ],
          correct: 0,
        },
        {
          q: "When there is not enough memory to buffer an incoming packet, a decision must be made to either drop the arriving packet (a policy known as drop-tail) or remove one or more already-queued packets to make room for the newly arrived packet.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Time needed to perform an integrity check, lookup packet information in a local table and move the packet from an input link to an output link in a router.",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 0,
        },
        {
          q: "Protocols that are part of a distributed network application",
          options: [
            "Link layer",
            "Application Layer",
            "Transport layer",
            "Network layer",
          ],
          correct: 1,
        },
        {
          q: "Which of the following physical layer technologies has the highest transmission rate and lowest bit error rate in practice?",
          options: [
            "Twisted pair (e.g., CAT5, CAT6)",
            "Coaxial cable",
            "Satellite channel",
            "Fiber optic cable",
          ],
          correct: 3,
        },
        {
          q: "When an application uses a TCP socket, what transport services are provided to the application by TCP?",
          options: [
            "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
            "Real- time delivery. The service will guarantee that data will be delivered to the receiver within a specified time bound.",
            "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle",
            "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
          ],
          correct: 2,
        },
        {
          q: "When an application uses a TCP socket, what transport services are provided to the application by TCP?",
          options: [
            "Throughout guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
            "Real- time delivery. The service will guarantee that data will be delivered to the receiver within a specified time bound.",
            "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
            "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
          ],
          correct: 2,
        },
      ],
    },
    {
      t: "Final 2026 - National - Dr.Tarek",
      d: "Final exam - National - Dr. Tarek",
      pdf: "Final 2026 - National - Dr.Tarek.pdf",
      questions: [
        {
          q: "What is an HTTP cookie used for?",
          options: [
            "Like dessert, cookies are used at the end of a transaction, to indicate the end of the transaction",
            "A cookies is a code used by a server, carried on a client's HTTP request, to access information the server had earlier stored about an earlier interaction with this person. [Think about the distinction between a browser and a person.]",
            "A cookie is a code used by a server, carried on a client's HTTP request, to access information the server had earlier stored about an earlier interaction with this Web browser. [Think about the distinction between a browser and a person.]",
            "A cookie is a code used by a client to authenticate a person's identity to an HTTP server.",
          ],
          correct: 2,
        },
        {
          q: "an IPv4 datagram has a",
          options: ["4- byte header", "8- byte header", "20- byte header"],
          correct: 2,
        },
        {
          q: "Which of the characteristics below are associated with a client-server approach to structuring network applications (as opposed to a P2P approach)",
          options: [
            "A process requests service from those it contacts and will provide service to processes that contact it.",
            "There is a server with a well known server IP address.",
            "There is not a server that is always on",
            "None of the above",
          ],
          correct: 1,
        },
        {
          q: "Transfer of a bit into and out of a transmission media",
          options: [
            "Application Layer",
            "Transport layer",
            "Network layer",
            "Physical layer",
          ],
          correct: 3,
        },
        {
          q: "What specifies the format of packets that are sent and received among routers and end systems",
          options: ["TCP", "UDP", "IP", "DNS"],
          correct: 2,
        },
        {
          q: 'Which of the following descriptions below correspond to a "services" view of the Internet?',
          options: [
            "A platform for building network applications",
            "A collection of billions of computing devices, and packet switches interconnected by links",
            'A "network of networks".',
            "A collection of hardware and software components executing protocols that define the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.",
          ],
          correct: 0,
        },
        {
          q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Replies to DNS query by local host, by contacting other DNS servers to answer the query.",
          options: [
            "Local DNS server",
            "Authoritative DNS server",
            "DNS root servers",
            "Top Level Domain (TLD) servers",
          ],
          correct: 0,
        },
        {
          q: "Time spent transmitting packets bits into the link",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 2,
        },
        {
          q: "Which of the following are changes between HTTP 1.1 and HTTP/2?",
          options: [
            "HTTP/2 allows a large object to be broken down into smaller pieces, and the transmission of those pieces to be interleaved with transmission other smaller objects, thus preventing a large object from forcing many smaller objects to wait their turn for transmission.",
            "HTTP/2 provides enhanced security by using transport layer security (TLS).",
            "HTTP/2 has many new HTTP methods and status codes.",
            "All of the above",
          ],
          correct: 0,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Application layer",
          options: ["Datagram", "Message", "Bit", "Segment"],
          correct: 1,
        },
        {
          q: "Forwarding is the local action of moving arriving packets from router's input link to appropriate router output link, while routing is the global action of determining the source- destination paths taken by packets.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "When an application uses a UDP socket, what transport services are provided to the application by UDP?",
          options: [
            "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
            "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
            "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
            "Flow Control. The provided service will ensure that the sender does not send so fast as to overflow receiver buffers.",
          ],
          correct: 2,
        },
        {
          q: "What is the purpose of a cookie value in the HTTP GET request?",
          options: [
            "The cookie value encodes a default set of preferences that the user has previously specified for this web site",
            "The cookie value encodes the format of the reply preferred by the client in the response to this GET request",
            "The cookie value itself doesn't mean anything. It is just a value that was returned by a web server to this client during an earlier interaction",
            "The cookie value indicates whether the user wants to use HTTP/1, HTTP/1.1, or HTTP/2 for this GET request.",
          ],
          correct: 2,
        },
        {
          q: "What is the purpose of the HTTP GET message?",
          options: [
            "The HTTP GET request message is sent by a web server to a web client to get the identity of the web client.",
            "The HTTP GET request message is sent by a web server to a web client to get the next request from the web client.",
            "The HTTP GET request message is used by a web client to request a web server to send the requested object from the server to the client.",
            "The HTTP GET request message is used by a web client to post an object on a web server.",
          ],
          correct: 2,
        },
        {
          q: "Which of the fields below are in a UDP segment header",
          options: [
            "Internet checksum",
            "Upper layer protocol",
            "Data (payload)",
            "Sequence number",
          ],
          correct: 0,
        },
        {
          q: "Time spent waiting in packet buffers for link transmission",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 3,
        },
        {
          q: 'What do we mean when we say "HTTP is stateless"? In answering this question, assume that cookies are not used',
          options: [
            "The HTTP protocol is not licensed in any country.",
            "An HTTP client does not remember anything about what happened during earlier steps in interacting with any HTTP server.",
            "An HTTP server does not remember anything about what happened during earlier steps in interacting with this HTTP client",
            "An HTTP client does not remember the identities of the servers with which it has interacted.",
          ],
          correct: 2,
        },
        {
          q: "What is the purpose of the HTTP GET message?",
          options: [
            "The HTTP GET request message is sent by a web server to a web client to get the identity of the web client.",
            "The HTTP GET request message is sent by a web server to a web client to get the next request from the web client.",
            "The HTTP GET request message is used by a web client to request a web server to send the requested object from the server to the client.",
            "The HTTP GET request message is used by a web client to post an object on a web server.",
          ],
          correct: 2,
        },
        {
          q: "Time spent waiting in packet buffers for link transmission",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 3,
        },
        {
          q: "Which of the characteristics below are associated with the technique of circuit switching?",
          options: [
            "This technique is used in the Internet",
            "Congestion loss and variable end- end delays are possible with this technique",
            "Resources are used on demand, not reserved in advance",
            "Frequency Division Multiplexing (FDM) and Time Division Multiplexing (TDM) are two approaches for implementing this technique",
          ],
          correct: 3,
        },
        {
          q: 'When we say that the Internet is a "network of networks," we mean?',
          options: [
            "The Internet is the largest network ever built",
            "The Internet is made up of a lot of different networks that are interconnected to each other",
            "The Internet is the fastest network ever built",
            "All of the above",
          ],
          correct: 1,
        },
        {
          q: "What is the purpose of the conditional HTTP GET request message?",
          options: [
            "To allow a server to only send the requested object to the client if the server is not overloaded.",
            "To allow a server to only send the requested object to the client if this object has changed since the server last sent this object to the client",
            "To allow a server to only send the requested object to the client if the client is authorized to received that object.",
            "To allow a server to only send the requested object to the client if the client has never requested that object before",
          ],
          correct: 1,
        },
        {
          q: "Time need for bits to physically propagate through the transmission medium from end one of a link to the other",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 1,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Link layer",
          options: ["Datagram", "Message", "Segment", "Frame"],
          correct: 3,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Transport layer",
          options: ["Datagram", "Message", "Bit", "Segment"],
          correct: 3,
        },
        {
          q: "What is the purpose of the conditional HTTP GET request message?",
          options: [
            "To allow a server to only send the requested object to the client if the server is not overloaded.",
            "To allow a server to only send the requested object to the client if this object has changed since the server last sent this object to the client",
            "To allow a server to only send the requested object to the client if the client is authorized to received that object.",
            "To allow a server to only send the requested object to the client if the client has never requested that object before",
          ],
          correct: 1,
        },
        {
          q: "Delivery of datagrams from a source host to a destination host (typically)",
          options: [
            "Link layer",
            "Application Layer",
            "Transport layer",
            "Network layer",
          ],
          correct: 3,
        },
        {
          q: "Which of the characteristics below are associated with the technique of packet switching?",
          options: [
            "Frequency Division Multiplexing (FDM) and Time Division Multiplexing (TDM) are two approaches for implementing this technique.",
            "This technique was the basis for the telephone call switching during the 20th century and into the beginning of this current century.",
            "Data may be queued before being transmitted due to other user's data that's also queueing for transmission.",
            "Reserves resources needed for a call from source to destination",
          ],
          correct: 2,
        },
        {
          q: "P2P networks do not need a server",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "When an application uses a UDP socket, what transport services are provided to the application by UDP?",
          options: [
            "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
            "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
            "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
            "Flow Control. The provided service will ensure that the sender does not send so fast as to overflow receiver buffers.",
          ],
          correct: 2,
        },
        {
          q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Provides authoritative hostname to IP mappings for organization's named hosts.",
          options: [
            "Local DNS server",
            "Authoritative DNS server",
            "DNS root servers",
            "Top Level Domain (TLD) servers",
          ],
          correct: 1,
        },
        {
          q: "Transfer of data between one process and another process (typically on different hosts)",
          options: [
            "Link layer",
            "Application Layer",
            "Transport layer",
            "Network layer",
          ],
          correct: 2,
        },
        {
          q: 'Which of the following descriptions below correspond to a "nuts-and-bolts" view of the Internet?',
          options: [
            "A platform for building network applications",
            'A "network of networks"',
            "A place I go for information, entertainment, and to communicate with people",
            "All of the above",
          ],
          correct: 1,
        },
        {
          q: "Where is transport-layer functionality primarily implemented",
          options: [
            'Transport layer functions are implemented primarily at the hosts at the "edge" of the network',
            "Transport layer functions are implemented primarily at the routers and switches in the network",
            "Transport layer functions are implemented primarily at each end of a physical link connecting one host/router/switch to another one host/router/switch",
            "None of the above",
          ],
          correct: 0,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Network layer",
          options: ["Datagram", "Message", "Segment", "Frame"],
          correct: 0,
        },
        {
          q: "UDP packet has",
          options: [
            "2 byte header",
            "8 byte header",
            "12 byte header",
            "16 byte header",
          ],
          correct: 1,
        },
        {
          q: "Which of the characteristics below are associated with a P2P approach to structuring network applications (as opposed to a client-server approach)?",
          options: [
            "There is a server that is always on",
            "HTTP uses this application structure",
            "There is a server with a well known server IP address",
            "There is not a server that is always on",
          ],
          correct: 3,
        },
        {
          q: "What is the purpose of a cookie value in the HTTP GET request?",
          options: [
            "The cookie value encodes a default set of preferences that the user has previously specified for this web site.",
            "The cookie value encodes the format of the reply preferred by the client in the response to this GET request.",
            "The cookie value itself doesn't mean anything. It is just a value that was returned by a web server to this client during an earlier interaction.",
            "The cookie value indicates whether the user wants to use HTTP/1, HTTP/1.1, or HTTP/2 for this GET request.",
          ],
          correct: 2,
        },
        {
          q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Physical layer",
          options: ["Datagram", "Message", "Bit", "Segment"],
          correct: 2,
        },
        {
          q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Responsible for a domain (e.g., *.com, *.edu); knows how to contact authoritative name servers",
          options: [
            "Local DNS server",
            "Authoritative DNS server",
            "DNS root servers",
            "Top Level Domain (TLD) servers",
          ],
          correct: 3,
        },
        {
          q: 'Which of the definitions below describe what is meant by the term "encapsulation"?',
          options: [
            "Determining the name of the destination host, translating that name to an IP address and then placing that value in a packet header field.",
            "Starting a transport layer timer for a transmitted segment, and then if an ACK segment isn't received before the timeout, placing that segment in a retransmission queue.",
            'Taking data from the layer above, adding header fields appropriate for this layer, and then placing the data in the payload field of the "packet" for that layer.',
            'Receiving a "packet" from the layer below, extracting the payload field, and after some internal actions possibly delivering that payload to an upper layer protocol.',
          ],
          correct: 2,
        },
        {
          q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Highest level of the DNS hierarchy, knows how to reach servers responsible for a given domain (e.g., *.com, *.edu)",
          options: [
            "Local DNS server",
            "Authoritative DNS server",
            "DNS root servers",
            "Top Level Domain (TLD) servers",
          ],
          correct: 2,
        },
        {
          q: "Which of the characteristics below are associated with a client-server approach to structuring network applications (as opposed to a P2P approach)",
          options: [
            "A process requests service from those it contacts and will provide service to processes that contact it.",
            "There is a server with a well known server IP address",
            "There is not a server that is always on",
            "All of the above",
          ],
          correct: 1,
        },
        {
          q: "Transfer of data between neighboring network devices",
          options: [
            "Link layer",
            "Application Layer",
            "Transport layer",
            "Network layer",
          ],
          correct: 0,
        },
        {
          q: "When there is not enough memory to buffer an incoming packet, a decision must be made to either drop the arriving packet (a policy known as drop-tail) or remove one or more already-queued packets to make room for the newly arrived packet.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Time needed to perform an integrity check, lookup packet information in a local table and move the packet from an input link to an output link in a router.",
          options: [
            "Processing delay",
            "Propagation delay",
            "Transmission delay",
            "Queueing delay",
          ],
          correct: 0,
        },
        {
          q: "Protocols that are part of a distributed network application",
          options: [
            "Link layer",
            "Application Layer",
            "Transport layer",
            "Network layer",
          ],
          correct: 1,
        },
        {
          q: "Which of the following physical layer technologies has the highest transmission rate and lowest bit error rate in practice?",
          options: [
            "Twisted pair (e.g., CAT5, CAT6)",
            "Coaxial cable",
            "Satellite channel",
            "Fiber optic cable",
          ],
          correct: 3,
        },
        {
          q: "When an application uses a TCP socket, what transport services are provided to the application by TCP?",
          options: [
            "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
            "Real- time delivery. The service will guarantee that data will be delivered to the receiver within a specified time bound.",
            "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle",
            "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
          ],
          correct: 2,
        },
        {
          q: "When an application uses a TCP socket, what transport services are provided to the application by TCP?",
          options: [
            "Throughout guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
            "Real- time delivery. The service will guarantee that data will be delivered to the receiver within a specified time bound.",
            "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
            "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
          ],
          correct: 2,
        },
      ],
    },
    {
      t: "Final 2026 - Computer Networks - Credit - Dr. Ebram",
      d: "Final exam - Computer Networks - Credit - Dr. Ebram",
      pdf: "Final 2026 - Computer Networks - Credit - Dr. Ebram.pdf",
      questions: [
        {
          q: "In Go-back-N protocol, what are the size of the respective sender and receiver buffers required for a window size of N?",
          options: ["1; 1", "N - 1; 1", "N; N", "N; 1"],
          correct: 3,
        },
        {
          q: "Assume a sender and a receiver connected via one packet-switch. The sender sends a message of size 24 KBytes using packets of length 1000 Bytes. The bit rates are 2 kbps and 5 kbps for the first and the second link, respectively. Using store and forward, what is the end-to-end delay (in seconds)? You may ignore the propagation delay!",
          options: ["16.8", "134.4", "124", "16800"],
          correct: 1,
        },
        {
          q: "Consider sending a 1500-byte IP datagram into a link that has an MTU of 500 bytes. Suppose that IP header is 20 bytes long. How many fragments will be generated?",
          options: ["3", "4", "5", "2"],
          correct: 1,
        },
        {
          q: "The following diagram shows a simple network topology with 4 nodes. The links in the diagram are labeled with the cost of each link. The nodes run distance vector routing protocol. The protocol has just started, at node X, what is the cost to node z?",
          options: ["6", "3", "5", "23"],
          correct: 3,
        },
        {
          q: "Router R3 received two datagrams, which router to deliver it to if the datagrams has a destination IP address 200.23.19.3 and 200.23.18.33?",
          options: ["R2, R1", "R2, R2", "R1, R1", "R1, R2"],
          correct: 3,
        },
        {
          q: "Which of the following protocols can be used to get the mappings of IP address and MAC address of other nodes in a different subnet?",
          options: ["ARP", "DNS", "DHCP", "None of the options"],
          correct: 3,
        },
        {
          q: "Consider the transmission between a UDP sender and a UDP receiver. Which of the following will never happen? You may assume that the application riding on UDP doesn't implement any reliability mechanisms.",
          options: [
            "UDP receiver fails to receive any packet from UDP sender.",
            "UDP receiver receives out-of-order packets from UDP sender.",
            "UDP receiver receives duplicate packets from UDP sender.",
            "UDP receiver receives corrupted packets from UDP sender but fails to detect bit errors.",
          ],
          correct: 3,
        },
        {
          q: "Can HTTP response message contains an empty body? If yes, When can this happen?",
          options: [
            "No, an HTTP response message can never have an empty body.",
            "Yes, if the requested object has been moved to a new location.",
            "Yes, if the requested object is recently modified.",
            "Yes, if the requested object is very small in size.",
          ],
          correct: 3,
        },
        {
          q: "Which of the following statements is true?",
          options: [
            "Both the Internet and traditional telephone networks use packet-switching.",
            "Performance metrics such as end-to-end delay and throughput can be guaranteed in the Internet, if TCP is chosen as the transport layer protocol.",
            "In the Internet, packets from the same source always take the same path to reach destination.",
            "The Internet uses packet switching and traditional telephone networks uses circuit switching.",
          ],
          correct: 3,
        },
        {
          q: "Consider the following diagram, what is the destination MAC address in the frame transmitted from node A if node A is sending to node B?",
          options: [
            "74-29-9C-E8-FF-55",
            "E6-E9-00-17-BB-4B",
            "1A-23-F9-CD-06-9B",
            "49-BD-D2-C7-56-2A",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is present in both HTTP request line and status line?",
          options: [
            "HTTP version number",
            "Request method",
            "Status code",
            "URL",
          ],
          correct: 0,
        },
        {
          q: "Which of the following HTTP protocols does the given figure represent to fetch a web page with 2 reference objects?",
          options: [
            "Non-persistent HTTP.",
            "Persistent HTTP.",
            "Non-persistent HTTP with parallel connection.",
            "Persistent HTTP with pipelining.",
          ],
          correct: 3,
        },
        {
          q: "Considering the operation of a learning switch and its forwarding table in the following figure. Which interface will the switch forward a frame transmitted from node D to node A?",
          options: ["1", "3", "4", "1, 2, 4"],
          correct: 3,
        },
        {
          q: "Consider a 4-bit generator G with value 1001, what is the CRC checksum R if data D has the value 10001100001?",
          options: ["011", "100", "110", "0110"],
          correct: 3,
        },
        {
          q: "Given a subnet with network prefix 192.168.1.0/24, how many hosts can be connected to this subnet?",
          options: ["256", "255", "253", "254"],
          correct: 3,
        },
        {
          q: "Which of the following statements is true about TCP and not true about UDP?",
          options: [
            "Provides timing service.",
            "Provides minimum throughput guarantee service.",
            "Provides security service.",
            "Provides reliable transport service.",
          ],
          correct: 3,
        },
        {
          q: "Which of the following statements is true about circuit switching?",
          options: [
            "Resources are pre-allocated regardless of demand",
            "Packet transmission can use the full link bandwidth",
            "The path between a source and a destination is not fixed",
            "All of the options",
          ],
          correct: 0,
        },
        {
          q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
          options: [
            "Application layer",
            "Network layer",
            "Transport layer",
            "Session layer",
          ],
          correct: 3,
        },
        {
          q: "Which of the following statements about DNS is TRUE?",
          options: [
            "TLD servers store all the hostname to IP mappings of the Internet.",
            "Every Web server must have a canonical name.",
            "Local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
            "DNS server listens to TCP port 53.",
          ],
          correct: 2,
        },
        {
          q: "Which of the following protocols can be used by routers for error signaling?",
          options: ["DHCP", "ICMP", "ARP", "NAT"],
          correct: 1,
        },
        {
          q: "A Web server stores a webpage that comprises a base HTML file and 2 images referenced by the base HTML file. The HTML file is 100 bytes and each image is 200 bytes. A client is connected to the Web server through a direct link of 1 Mbps. Propagation delay between the Web server and the client is 50 milliseconds. The client downloads the webpage using persistent HTTP but without pipelining (i.e. the next HTTP request is sent after the response for the previous HTTP request is received). Assume HTTP header, TCP header and ACK packets are of negligible size, transmission channel is perfectly reliable, time to establish and close TCP connection can be ignored. How long (in milliseconds) does it take for the client to download the entire webpage from the Web server?",
          options: ["404", "604", "204", "402.4"],
          correct: 0,
        },
        {
          q: "A source and a destination are separated by 3*10^5 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^8 meters/second. The source sends 100 packets to the destination using RDT 2.2. Each packet is of 2*10^3 bits long. Suppose ACK packets are of negligible size and transmission channel is perfectly reliable. What is the throughput (in bps) of transmission?",
          options: ["200", "500", "100", "400"],
          correct: 1,
        },
        {
          q: "A Selective Repeat sender just receives an ACK packet with ACK number 7. This ACK number falls within sender window which has the window size 3. Every data packet embeds a k-bit sequence number field (k is a constant unknown to you). Which of the following definitely CANNOT be the sequence number of the next packet transmitted by the sender?",
          options: ["0", "2", "3", "6"],
          correct: 0,
        },
        {
          q: "Consider a sender and a receiver communicating using Selective Repeat protocol. Every packet embeds a 4-bit sequence number field. Sender window size is 4. None of the packets shown in the following figure are corrupted packets. However, the third data packet and the second ACK packet are lost. What is the sender window over the sequence number space at time t?",
          options: [
            "12, 13, 14, 15",
            "13, 14, 0, 1",
            "13, 14, 15, 0",
            "13, 14, 15, 16",
          ],
          correct: 2,
        },
        {
          q: "The router in the following figure is a NAT enabled router, what is the source IP address when the router forwards a datagram transmitted from the host with IP address 172.26.184.3 to a server with IP address 128.119.40.186.",
          options: [
            "172.26.184.3",
            "128.119.40.186",
            "172.26.184.1",
            "137.132.228.5",
          ],
          correct: 3,
        },
      ],
    },
  ],
  testBanks: [
    {
      t: "Test Bank - Computer Networks - Final",
      d: "Final Question Bank - Computer Networks",
      pdf: "Test Bank - Computer Networks - Final.pdf",
      questions: [
        {
          q: "What are the two most prominent types of packet switches in today's Internet?",
          options: [
            "Modems and switches",
            "Hubs and bridges",
            "Routers and link-layer switches",
            "Servers and clients",
          ],
          correct: 2,
        },
        {
          q: "In the Internet protocol stack, application-layer protocols such as HTTP and SMTP are almost always implemented in software in the end systems.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Which of the following is NOT a type of delay experienced by packets in packet-switched networks?",
          options: [
            "Processing delay",
            "Queuing delay",
            "Compilation delay",
            "Propagation delay",
          ],
          correct: 2,
        },
        {
          q: "Which access technology uses a combination of fiber optics and coaxial cable, often referred to as HFC?",
          options: [
            "DSL",
            "FTTH",
            "Cable Internet access",
            "5G Fixed Wireless",
          ],
          correct: 2,
        },
        {
          q: "The propagation delay in a network is calculated as d/s, where d is the distance between routers and s is the propagation speed of the link.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Which type of multiplexing is used in circuit-switched networks?",
          options: [
            "Packet multiplexing",
            "Frequency-division multiplexing (FDM) or time-division multiplexing (TDM)",
            "Code-division multiplexing",
            "Statistical multiplexing",
          ],
          correct: 1,
        },
        {
          q: "In the five-layer Internet protocol stack, which layers are typically implemented by link-layer switches?",
          options: [
            "Layers 1 and 2",
            "Layers 1, 2, and 3",
            "All five layers",
            "Only layer 1",
          ],
          correct: 0,
        },
        {
          q: "Consider a simple network with two end systems connected by a single router. If the source has three packets, each consisting of L bits, to send to the destination over links with transmission rate R, what is the total time for the destination to receive all three packets?",
          options: ["3L/R", "2L/R", "4L/R", "6L/R"],
          correct: 2,
        },
        {
          q: "In a network with N links between server and client, where each link has transmission rates R1, R2, ..., RN, what determines the throughput for a file transfer?",
          options: [
            "The average of all transmission rates",
            "The sum of all transmission rates",
            "min{R1, R2, ..., RN}, which is the transmission rate of the bottleneck link",
            "The maximum transmission rate among all links",
          ],
          correct: 2,
        },
        {
          q: "Which of the following statements about packet switching versus circuit switching is correct?",
          options: [
            "Circuit switching offers better sharing of transmission capacity",
            "Packet switching is more suitable for voice calls due to predictable delays",
            "Packet switching offers better sharing of transmission capacity and is simpler, more efficient, and less costly to implement than circuit switching",
            "Circuit switching has variable end-to-end delays",
          ],
          correct: 2,
        },
        {
          q: "Tier-1 ISPs do not pay anyone as they are at the top of the hierarchy in the Internet's network structure.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "What is encapsulation in the context of network protocols?",
          options: [
            "Encrypting data for security",
            "Compressing data to reduce size",
            "The process where each layer adds its header information to the packet from the layer above, creating a new packet",
            "Removing unnecessary data from packets",
          ],
          correct: 2,
        },
        {
          q: "Which physical medium is described as immune to electromagnetic interference, has very low signal attenuation up to 100 kilometers, and is very hard to tap?",
          options: [
            "Twisted-pair copper wire",
            "Coaxial cable",
            "Fiber optics",
            "Terrestrial radio channels",
          ],
          correct: 2,
        },
        {
          q: "In Network Structure 5, which describes today's Internet, content-provider networks like Google attempt to bypass upper-tier ISPs by doing what?",
          options: [
            "Building their own satellite networks",
            "Using only wireless connections",
            "Peering with lower-tier ISPs directly or at Internet Exchange Points (IXPs) and connecting to tier-1 ISPs for remaining access",
            "Eliminating the need for any ISP connections",
          ],
          correct: 2,
        },
        {
          q: "A distributed denial-of-service (DDoS) attack is harder to detect and defend against than a DoS attack from a single host.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Which of the following best describes the socket interface in Internet communication?",
          options: [
            "A hardware component for network connections",
            "A physical port on end systems",
            "A set of rules that a sending program must follow so that the Internet can deliver data to a destination program on another end system",
            "A type of packet switch",
          ],
          correct: 2,
        },
        {
          q: "End systems are also referred to as hosts because they host application programs such as Web browsers and email clients.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "The Internet Engineering Task Force (IETF) develops Internet standards documented as RFCs (Requests for Comments).",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "What happens when the traffic intensity (La/R) exceeds 1 in a packet-switched network?",
          options: [
            "The network operates at optimal efficiency",
            "Packets are transmitted faster",
            "The queue will tend to increase without bound and queuing delay will approach infinity",
            "The network automatically reduces packet size",
          ],
          correct: 2,
        },
        {
          q: "DSL technology is expressly designed for short distances, and generally requires that residences be located within what distance of the central office (CO)?",
          options: [
            "1 to 2 miles",
            "5 to 10 miles",
            "15 to 20 miles",
            "25 to 30 miles",
          ],
          correct: 1,
        },
        {
          q: "socket is referred to as the.....between the application and the network",
          options: ["isp", "Api", "dns", "vpn"],
          correct: 1,
        },
        {
          q: "many multimedia applications are considered to be",
          options: [
            "bandwidth-sensitive application",
            "real time-sensitive application",
            "elastic application",
            "jitter-intolerant application",
          ],
          correct: 0,
        },
        {
          q: "TCP connection is a half-duplex connection",
          options: ["true", "false"],
          correct: 1,
        },
        {
          q: "The TCP flow-control mechanism throttles a sending process (client or server) when the network is congested between sender and receiver",
          options: ["true", "false"],
          correct: 1,
        },
        {
          q: "The default mode of HTTP uses ....",
          options: [
            "persistent connections with pipelining",
            "persistent connections with non-parallel",
            "non-persistent with non-parallel",
            "non-persistent with parallel",
          ],
          correct: 0,
        },
        {
          q: "status codes 400 means ...",
          options: [
            "The requested document does not exist on this server.",
            "The requested HTTP protocol version is not supported by the server.",
            "There is a generic error code indicating that the request could not be understood by the server.",
            "Request succeeded and the information is returned in the response",
          ],
          correct: 2,
        },
        {
          q: "A client sends the following HTTP request to the server: GET /styles/main.css HTTP/1.1 Host: example.com If-Modified-Since: Tue, 02 Dec 2025 10:00:00 GMT. The file main.css on the server has a Last-Modified date of: Tue, 01 Dec 2025 15:00:00 GMT. What status code should the server return?",
          options: ["304", "200", "505", "301"],
          correct: 0,
        },
        {
          q: "how can http/1.1 overcoming the Head of Line (HOL) blocking problem?",
          options: [
            "by opening multiple parallel TCP connections",
            "by using framing mechanism",
            "by using congestion mechanism",
            "none of the above",
          ],
          correct: 0,
        },
        {
          q: "The primary goals for HTTP/2 ...",
          options: [
            "HTTP/2 are to reduce perceived latency by enabling request and response multiplexing over a single TCP connection",
            "to get rid of (or at least reduce the number of) parallel TCP connections for transporting a single Web page",
            "using framing mechanism to avoid (HOL) blocking",
            "all of the above",
          ],
          correct: 3,
        },
        {
          q: "HTTP require multimedia data to be ASCII encoded before transfer.",
          options: ["true", "false"],
          correct: 1,
        },
        {
          q: "The DNS protocol runs over ... and uses port ....",
          options: ["TCP, 35", "TCP, 80", "UDP, 53", "UDP, 80"],
          correct: 2,
        },
        {
          q: "Which type of DNS query involves a DNS server contacting other DNS servers on behalf of the client to resolve a domain name?",
          options: ["Recursive", "Iterative", "Parallel", "Static"],
          correct: 0,
        },
        {
          q: "A network entity that stores copies of recently requested objects in its local storage and satisfies HTTP requests on behalf of an origin server, often used by ISPs to reduce response time and traffic?",
          options: ["cookies", "proxy server", "DNS server", "DNS caching"],
          correct: 1,
        },
        {
          q: "UDP include a congestion-control mechanism",
          options: ["true", "false"],
          correct: 1,
        },
        {
          q: "TCP is a no-frills, lightweight transport protocol",
          options: ["true", "false"],
          correct: 1,
        },
        {
          q: "The RTT includes .... (multi choice)",
          options: [
            "queuing delays",
            "processing delays",
            "propagation delays",
            "transmission delays",
          ],
          correct: 2,
        },
        {
          q: "What is the primary function of cookies in the context of web browsing?",
          options: [
            "Storing the entire webpage on the user's computer.",
            "Compressing webpage data for faster loading.",
            "Verifying user identity using encryption.",
            "Allowing the website to track user activity across multiple requests.",
          ],
          correct: 3,
        },
        {
          q: "What type of protocol is the Simple Mail Transfer Protocol (SMTP) primarily classified as?",
          options: [
            "A \"push\" protocol, used to send email from the sender's mail server to the recipient's mail server.",
            "A peer-to-peer protocol for direct email exchange between users.",
            "A protocol for formatting the content of email messages.",
            'A "pull" protocol, used by a user agent to retrieve emails from the mailbox.',
          ],
          correct: 0,
        },
        {
          q: "Why does a user agent need a protocol like IMAP or HTTP in addition to SMTP to manage email?",
          options: [
            "SMTP cannot handle attachments, so IMAP is used for files.",
            "SMTP is not secure, so HTTP with TLS is used instead.",
            "SMTP is for sending mail to the server, while IMAP or HTTP is needed to retrieve and manage mail from the server.",
            "IMAP is a newer and more efficient version of SMTP.",
          ],
          correct: 2,
        },
        {
          q: 'What is the main reason why peer-to-peer (P2P) file distribution architectures are considered "self-scaling"?',
          options: [
            "Because every peer who joins to download a file also contributes their upload capacity to distribute the file to others.",
            "The file size is reduced for each peer that joins the network.",
            "All peers are required to have the same high-speed internet connection.",
            "The central server's capacity automatically increases as more peers join.",
          ],
          correct: 0,
        },
        {
          q: "...is the principal application-layer protocol for Internet electronic mail.",
          options: ["FTP", "SMTP", "SIP", "Telnet"],
          correct: 1,
        },
        {
          q: "The transport layer provides logical communication between processes running on different hosts, while the network layer provides logical communication between hosts.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Which of the following statements about UDP and TCP is correct?",
          options: [
            "UDP provides connection-oriented service while TCP provides connectionless service",
            "Both UDP and TCP provide reliable data transfer services to applications",
            "UDP provides unreliable, connectionless service while TCP provides reliable, connection-oriented service",
            "None of the above",
          ],
          correct: 2,
        },
        {
          q: "The process of delivering data in a transport-layer segment to the correct socket is called:",
          options: [
            "Encapsulation",
            "Multiplexing",
            "Demultiplexing",
            "Segmentation",
          ],
          correct: 2,
        },
        {
          q: "Well-known port numbers range from 0 to 1023 and are reserved for well-known application protocols such as HTTP and FTP.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In UDP, a socket is identified by which of the following?",
          options: [
            "A two-tuple consisting of destination IP address and destination port number",
            "A four-tuple consisting of source IP address, source port number, destination IP address, and destination port number",
            "Only the destination port number",
            "A three-tuple consisting of source port number, destination IP address, and destination port number",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is NOT an advantage of UDP over TCP?",
          options: [
            "No connection establishment delay",
            "No connection state maintenance",
            "Guaranteed reliable data transfer",
            "Smaller packet header overhead",
          ],
          correct: 2,
        },
        {
          q: "A TCP socket is identified by a four-tuple consisting of source IP address, source port number, destination IP address, and destination port number.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "The UDP segment header consists of how many fields?",
          options: ["Two fields", "Four fields", "Six fields", "Eight fields"],
          correct: 1,
        },
        {
          q: "Why does UDP provide a checksum for error detection even though many link-layer protocols also provide error checking?",
          options: [
            "Because UDP wants to be redundant",
            "Because there is no guarantee that all links between source and destination provide error checking, and bit errors could be introduced when a segment is stored in a router's memory",
            "Because link-layer protocols are unreliable",
            "None of the above",
          ],
          correct: 1,
        },
        {
          q: "In the rdt2.0 protocol, which type of acknowledgments are used?",
          options: [
            "Only positive acknowledgments (ACK)",
            "Only negative acknowledgments (NAK)",
            "Both positive acknowledgments (ACK) and negative acknowledgments (NAK)",
            "Neither ACK nor NAK",
          ],
          correct: 2,
        },
        {
          q: "The stop-and-wait protocol can have poor performance because the sender must wait for acknowledgment before sending the next packet.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In the rdt2.1 protocol, what is the purpose of adding sequence numbers to data packets?",
          options: [
            "To ensure packets arrive in order",
            "To allow the receiver to determine whether a received packet is a retransmission or contains new data",
            "To implement flow control",
            "To detect corrupted packets",
          ],
          correct: 1,
        },
        {
          q: "For a simple stop-and-wait protocol, a 1-bit sequence number is sufficient because:",
          options: [
            "It's the smallest possible sequence number",
            "It allows the receiver to distinguish between a new packet and a retransmission in modulo-2 arithmetic",
            "It reduces header overhead",
            "All of the above",
          ],
          correct: 3,
        },
        {
          q: "In the rdt3.0 protocol (alternating-bit protocol), which mechanism is used to handle packet loss?",
          options: [
            "Negative acknowledgments only",
            "Checksums only",
            "A timeout/retransmit mechanism where the sender retransmits if an ACK is not received within a timeout interval",
            "Forward error correction",
          ],
          correct: 2,
        },
        {
          q: "Pipelining techniques allow the sender to send multiple packets without waiting for acknowledgments, which significantly improves utilization compared to stop-and-wait protocols.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In a Go-Back-N (GBN) protocol, when a timeout occurs, the sender:",
          options: [
            "Retransmits only the packet that timed out",
            "Retransmits all packets that have been previously sent but not yet acknowledged",
            "Sends a negative acknowledgment to the receiver",
            "Waits for another timeout before retransmitting",
          ],
          correct: 1,
        },
        {
          q: "In GBN protocol, the receiver discards out-of-order packets because:",
          options: [
            "It simplifies receiver buffering since the receiver doesn't need to buffer any out-of-order packets",
            "Out-of-order packets are always corrupted",
            "The protocol specification requires it",
            "It improves network throughput",
          ],
          correct: 0,
        },
        {
          q: "Which statement about Selective Repeat (SR) protocol is correct?",
          options: [
            "SR retransmits all unacknowledged packets when a timeout occurs",
            "SR retransmits only those packets that it suspects were received in error, requiring the receiver to individually acknowledge correctly received packets",
            "SR does not use acknowledgments",
            "SR is identical to GBN",
          ],
          correct: 1,
        },
        {
          q: "TCP provides full-duplex service, meaning application-layer data can flow from Process A to Process B at the same time as data flows from Process B to Process A.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "The three-way handshake in TCP connection establishment involves:",
          options: [
            "One segment from client to server",
            "Two segments exchanged between client and server",
            "Three segments exchanged where the client sends a SYN segment, the server responds with a SYNACK segment, and the client sends a final acknowledgment segment",
            "Four segments to ensure reliability",
          ],
          correct: 2,
        },
        {
          q: "The Maximum Segment Size (MSS) in TCP refers to:",
          options: [
            "The maximum size of the TCP segment including all headers",
            "The maximum amount of application-layer data in the segment, not including headers",
            "The maximum size of the TCP header",
            "The maximum size of the IP datagram",
          ],
          correct: 1,
        },
        {
          q: "TCP provides cumulative acknowledgments, which means:",
          options: [
            "TCP acknowledges every single packet individually",
            "TCP only acknowledges bytes up to the first missing byte in the stream",
            "TCP acknowledges only the last received packet",
            "TCP does not use acknowledgments",
          ],
          correct: 1,
        },
        {
          q: "When a TCP sender receives three duplicate ACKs for the same data, it performs a fast retransmit by retransmitting the missing segment before that segment's timer expires.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "The TCP timeout interval (Timeout Interval) is calculated as:",
          options: [
            "EstimatedRTT only",
            "SampleRTT × 2",
            "EstimatedRTT + 4 × DevRTT",
            "DevRTT × 4",
          ],
          correct: 2,
        },
        {
          q: "TCP's error-recovery mechanism is best categorized as:",
          options: [
            "Pure Go-Back-N protocol",
            "Pure Selective Repeat protocol",
            "A hybrid of GBN and SR protocols",
            "None of the above",
          ],
          correct: 2,
        },
        {
          q: "Flow control in TCP is implemented to:",
          options: [
            "Control congestion in the network",
            "Match the rate at which the sender is sending against the rate at which the receiving application is reading, preventing the sender from overflowing the receiver's buffer",
            "Ensure packets arrive in order",
            "Detect errors in transmitted segments",
          ],
          correct: 1,
        },
        {
          q: "The receive window (rwnd) in TCP is used to give the sender an idea of how much free buffer space is available at the receiver.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "When the TCP timeout interval expires and a segment is retransmitted, TCP sets the next timeout interval to:",
          options: [
            "The same value as before",
            "Half the previous value",
            "Twice the previous value, causing intervals to grow exponentially after each retransmission",
            "A random value",
          ],
          correct: 2,
        },
        {
          q: "During TCP connection teardown, the TIME_WAIT state exists to:",
          options: [
            "Allow the server to close properly",
            "Ensure all data has been transmitted",
            "Let the TCP client resend the final acknowledgment in case the ACK is lost",
            "Prevent new connections from starting",
          ],
          correct: 2,
        },
        {
          q: "When a host receives a TCP segment whose port numbers or source IP address do not match with any ongoing sockets in the host, the host:",
          options: [
            "Silently discards the segment",
            "Sends an ICMP error message",
            "Sends a special reset segment with the RST flag bit set to 1 telling the source not to resend the segment",
            "Buffers the segment for future processing",
          ],
          correct: 2,
        },
        {
          q: "The network layer in H1 encapsulates transport-layer segments into datagrams before sending them to the router.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Routing is typically done in hardware because it must operate at nanosecond timescales.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "A router uses its forwarding table by",
          options: [
            "Examining packet header fields and using them to select the correct output interface",
            "Determining end-to-end routes between H1 and H2",
            "Broadcasting to all ports",
            "Running the routing protocol",
          ],
          correct: 0,
        },
        {
          q: "In the traditional approach, each router runs a routing algorithm that communicates with other routers' routing algorithms.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In the SDN approach, which component is responsible for computing and distributing forwarding tables?",
          options: [
            "Each individual router",
            "A centralized remote controller",
            "The transport-layer protocol",
            "DNS servers",
          ],
          correct: 1,
        },
        {
          q: "Which statement best describes a key difference between the traditional control plane and the SDN control plane?",
          options: [
            "SDN removes the need for forwarding tables entirely.",
            "Traditional routing relies on a centralized controller instead of distributed routers.",
            "SDN separates routing logic from routers, relocating it to a software-based controller.",
            "Traditional routing algorithms run slower than SDN controllers.",
          ],
          correct: 2,
        },
        {
          q: "Which router component is responsible for consulting the forwarding table to determine the correct output port?",
          options: [
            "Routing processor",
            "Input port",
            "Switching fabric",
            "Output port",
          ],
          correct: 1,
        },
        {
          q: "Which statement best describes the division of hardware vs. software responsibilities in a router?",
          options: [
            "Input ports, output ports, and switching fabric are implemented in software; routing protocols run in hardware.",
            "Data-plane forwarding operates on millisecond timescales and is implemented in software.",
            "Control-plane functions run on the routing processor and operate at slower timescales compared to data-plane forwarding.",
            "The switching fabric is controlled entirely by a remote SDN controller.",
          ],
          correct: 2,
        },
        {
          q: "The routing processor handles physical- and link-layer functions for incoming packets.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "Why is a complete forwarding table with one entry for each possible 32-bit IP address impossible?",
          options: [
            "It would require too much memory",
            "IP addresses do not use 32-bit values",
            "Forwarding tables cannot be stored on line cards",
            "The routing processor cannot compute them",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is NOT performed during input port processing?",
          options: [
            "Checking and updating the packet's TTL field",
            "Performing physical- and link-layer processing",
            "Running the routing protocol to compute forwarding tables",
            "Updating network management counters",
          ],
          correct: 2,
        },
        {
          q: "A router has the following forwarding table: Prefix 1100 → Interface 0, 110010 → Interface 1, 11001000 → Interface 2, (default) → Interface 3. A packet arrives with destination address starting with 1100100011010110. Which interface will the router forward the packet to?",
          options: ["Interface 0", "Interface 1", "Interface 2", "Interface 3"],
          correct: 2,
        },
        {
          q: "In switching via a shared bus, multiple packets from different input ports can be transmitted simultaneously without waiting.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "Which statement is true regarding switching via memory compared to switching via bus?",
          options: [
            "Memory switching allows multiple packets to cross the bus simultaneously.",
            "Bus switching requires the routing processor to copy packets.",
            "Memory switching is limited by memory bandwidth, and only one packet can be read/written at a time.",
            "Bus switching can forward multiple packets in parallel without limitation.",
          ],
          correct: 2,
        },
        {
          q: "Even if the switching fabric is N times faster than the input line speeds, output port queues can still form.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "A router has 3 input ports and 1 output port. All input ports operate at the same line speed Rline, and the switch fabric operates at 3× Rline. At a given time, one packet arrives at each input port, all destined for the single output port. How many packets will be queued at the output port after the first time unit?",
          options: ["0", "1", "2", "3"],
          correct: 2,
        },
        {
          q: "Which of the following statements about buffering in routers is true?",
          options: [
            "Larger buffers always reduce delay in the network.",
            "Buffering can absorb short-term traffic fluctuations but may increase queueing delay.",
            "Output port queues never experience packet loss if the switch fabric is fast enough.",
            "Head-of-the-line blocking occurs only at output queues.",
          ],
          correct: 1,
        },
        {
          q: "In non-preemptive priority queuing, a higher-priority packet can interrupt the transmission of a currently transmitting lower-priority packet.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: 'In CIDR notation, the "/24" in the address 223.1.1.0/24 indicates:',
          options: [
            "The address has 24 host bits",
            "The network portion of the address is 24 bits",
            "There are 24 subnets",
            "There are 24 total addresses",
          ],
          correct: 1,
        },
        {
          q: "The broadcast IP address 255.255.255.255 can be used to send a datagram to all hosts on a subnet.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "When a DHCP server responds to a client's discover message, the server:",
          options: [
            "Sends the response only to the client's MAC address",
            "Broadcasts the offer to all nodes on the subnet",
            "Sends the response directly to the next-hop router",
            "Waits for the client to request the IP before responding",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is NOT included in a DHCP offer message?",
          options: [
            "Proposed IP address for the client",
            "Subnet mask",
            "Lease time",
            "MAC address of all other hosts",
          ],
          correct: 3,
        },
        {
          q: "When a NAT router forwards a datagram from an internal host to the Internet, it typically:",
          options: [
            "Changes only the source IP address",
            "Changes only the destination IP address",
            "Changes both the source IP address and source port number",
            "Leaves the datagram unchanged",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is a main reason for developing IPv6?",
          options: [
            "IPv4 addresses were running out",
            "To reduce the size of TCP headers",
            "To eliminate the need for routers",
            "To replace DNS",
          ],
          correct: 0,
        },
        {
          q: "IPv6 routers perform fragmentation and reassembly of datagrams at intermediate routers, just like IPv4.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "How does tunneling help in the IPv4-to-IPv6 transition?",
          options: [
            "By allowing IPv6 datagrams to be sent inside IPv4 datagrams across IPv4 routers",
            "By converting IPv6 addresses to IPv4 addresses permanently",
            "By replacing all IPv4 routers with IPv6 routers instantly",
            "By compressing IPv6 headers to fit IPv4",
          ],
          correct: 0,
        },
        {
          q: "How does a NAT router know which internal host should receive a returning datagram from the Internet?",
          options: [
            "By checking the destination IP address alone",
            "By checking the destination IP address and destination port number against its NAT translation table",
            "By using DNS lookup",
            "By sending the datagram to all hosts in the private network",
          ],
          correct: 1,
        },
        {
          q: "If a subnet does not have a DHCP server, what component helps the client communicate with a DHCP server on another subnet?",
          options: [
            "Default gateway",
            "DHCP relay agent",
            "DNS server",
            "ARP cache",
          ],
          correct: 1,
        },
        {
          q: "Which IPv6 header field is similar in purpose to the TTL field in IPv4?",
          options: ["Traffic class", "Hop limit", "Flow label", "Next header"],
          correct: 1,
        },
        {
          q: "Which organization is responsible for the global allocation of IP addresses?",
          options: ["IEEE", "ICANN", "IETF", "ISO"],
          correct: 1,
        },
        {
          q: "A NAT-enabled router allows multiple devices on a private network to share a single public IP address.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Increasing buffer size at a router always reduces packet loss without affecting delay.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "In priority queuing, what happens to packets with lower priority when high-priority packets continuously arrive?",
          options: [
            "They are transmitted first",
            "They may experience starvation",
            "They are dropped immediately",
            "They increase the link bandwidth",
          ],
          correct: 1,
        },
      ],
    },
    {
      t: "Test Bank - Answers - Computer Networks",
      d: "Test Bank Answers - Computer Networks",
      pdf: "Test Bank - Answers - Computer Networks.pdf",
      questions: [
        {
          q: "check bit errors.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 0,
        },
        {
          q: "determine output link.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 0,
        },
        {
          q: "time waiting at output link for transmission.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 1,
        },
        {
          q: "depends on congestion level of router.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 1,
        },
        {
          q: "= L/R (L: packet length (bits), R: link bandwidth (bps)).",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 2,
        },
        {
          q: "= d/s (d: length of physical link, s: propagation speed in medium).",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 3,
        },
        {
          q: "self-replicating infection by receiving/executing object (e.g., e-mail attachment)",
          options: ["virus", "worm", "spyware", "botnet"],
          correct: 0,
        },
        {
          q: "self-replicating infection by passively receiving object that gets itself executed",
          options: ["virus", "worm", "spyware", "botnet"],
          correct: 1,
        },
        {
          q: "malware can record keystrokes, web sites visited, upload info to collection site.",
          options: ["virus", "worm", "spyware", "botnet"],
          correct: 2,
        },
        {
          q: "attackers make resources (server, bandwidth) unavailable to legitimate traffic by overwhelming resource with bogus traffic.",
          options: ["virus", "worm", "spyware", "DoS"],
          correct: 3,
        },
        {
          q: "RFC stands for Request for comments.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "IETF stands for Internet Engineering Task Force.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "protocols define format, order of msgs sent and received among network entities, and actions taken on msg transmission, receipt.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "voice over DSL phone line goes to Internet.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "data over DSL phone line goes to telephone net.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "In DSL, voice, data transmitted at different frequencies over dedicated line to central office.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "DSL stands for digital subscriber line.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In cable network, data, TV transmitted at different frequencies over shared cable distribution network.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "link transmission rate, aka link capacity, aka link bandwidth.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "packet transmission delay = time needed to transmit L-bit packet into link.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "twisted pair (TP) is two insulated copper wires.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In packet-switching hosts break application-layer messages into packets.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "If arrival rate (in bits) to link exceeds transmission rate of link for a period of time: packets will queue, wait to be transmitted on link.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "If arrival rate (in bits) to link exceeds transmission rate of link for a period of time: packets can be dropped (lost) if memory (buffer) fills up.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "forwarding: determines source-destination route taken by packets.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "routing: move packets from router's input to appropriate router output.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "connecting each access ISP to each other directly does scale.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "R: link bandwidth (bps), L: packet length (bits), a: average packet arrival rate, La/R ~ 0: avg. queueing delay small.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "R: link bandwidth (bps), L: packet length (bits), a: average packet arrival rate, La/R ~ 1: avg. queueing delay large.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: 'R: link bandwidth (bps), L: packet length (bits), a: average packet arrival rate, La/R > 1: more "work" arriving than can be serviced, average delay infinite!',
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "lost packet may be retransmitted by previous node, by source end system, or not at all.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "throughput: rate (bits/time unit) at which bits transferred between sender/receiver.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In ISO/OSI reference model, presentation: allow applications to interpret meaning of data, e.g., encryption, compression, machine-specific conventions.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "Internet stack missing the layers presentation and session.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "infected host can be enrolled in botnet, used for spam.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "IP spoofing: send packet with true source address.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "server not always-on host.",
          options: ["True", "False"],
          correct: 1,
        },
        {
          q: "server has permanent IP address.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In client-server architecture, clients communicate with server.",
          options: ["True", "False"],
          correct: 0,
        },
        {
          q: "In client-server architecture, clients may be intermittently connected.",
          options: ["True", "False"],
          correct: 0,
        },
      ],
    },
    {
      t: "Test Bank Dr. Tarek",
      d: "Test Bank - Dr. Tarek",
      pdf: "Test Bank Dr. Tarek.pdf",
      questions: [
        {
          q: "A computer network:",
          options: [
            "Is a collection of hardware components and computers",
            "Is interconnected by communication channels",
            "Allows sharing of resources and information",
            "All of the above",
          ],
          correct: 3,
        },
        {
          q: "What is a firewall in a computer network?",
          options: [
            "The physical boundary of the network",
            "An operating system of a computer network",
            "A system designed to prevent unauthorized access",
            "A web browsing software",
          ],
          correct: 2,
        },
        {
          q: "What is the use of Bridge in the network?",
          options: [
            "To connect LANs",
            "To separate LANs",
            "To control network speed",
            "All of the above",
          ],
          correct: 0,
        },
        {
          q: "Each IP packet must contain:",
          options: [
            "Only Source address",
            "Only Destination address",
            "Source and Destination address",
            "Source or Destination address",
          ],
          correct: 2,
        },
        {
          q: "Which of these is not a communication channel?",
          options: ["Satellite", "Microwave", "Radio wave", "Wi-Fi"],
          correct: 3,
        },
        {
          q: "MAN Stands for",
          options: [
            "Metropolitan Area Network",
            "Main Area Network",
            "Metropolitan Access Network",
            "Metro Access Network",
          ],
          correct: 0,
        },
        {
          q: "Which of these is not an example of unguided media?",
          options: [
            "Optical Fibre Cable",
            "Radio wave",
            "Bluetooth",
            "Satellite",
          ],
          correct: 0,
        },
        {
          q: "In which topology is all the nodes connected through a single Coaxial cable?",
          options: ["Star", "Tree", "Bus", "Ring"],
          correct: 2,
        },
        {
          q: "Which of the following is the smallest network?",
          options: ["WAN", "MAN", "LAN", "Wi-Fi"],
          correct: 2,
        },
        {
          q: "Which protocol is used for the transfer of hypertext content over the web?",
          options: ["HTML", "HTTP", "TCP/IP", "FTP"],
          correct: 1,
        },
        {
          q: "Two devices are in network if",
          options: [
            "a process in one device is able to exchange information with a process in another device",
            "a process is running on both devices",
            "the processes running of different devices are of same type",
            "none of the mentioned",
          ],
          correct: 0,
        },
        {
          q: "What is a standalone computer?",
          options: [
            "A computer that is not connected to a network",
            "A computer that is being used as a server",
            "A computer that does not have any peripherals attached to it",
            "A computer that is used by only one person",
          ],
          correct: 0,
        },
        {
          q: "Central Computer which is powerful than other computers in the network is called as",
          options: ["Client", "Server", "Hub", "Switch"],
          correct: 1,
        },
        {
          q: "Network in which every computer is capable of playing the role of a client, or a server or both at same time is called",
          options: [
            "peer-to-peer network",
            "local area network",
            "dedicated server network",
            "wide area network",
          ],
          correct: 0,
        },
        {
          q: "In peer-to-peer network, each computer in a network is referred as",
          options: ["server", "client", "peer", "sender"],
          correct: 2,
        },
        {
          q: "Which transmission media is capable of having a much higher bandwidth (data capacity)?",
          options: [
            "Coaxial",
            "Twisted pair cable",
            "Untwisted cable",
            "Fiber optic",
          ],
          correct: 3,
        },
        {
          q: "Which type of transmission media is the least expensive to manufacture?",
          options: [
            "Coaxial",
            "Twisted pair cable",
            "CAT cable",
            "Fiber optic",
          ],
          correct: 1,
        },
        {
          q: "Which of these components is internal to a computer and is required to connect the computer to a network?",
          options: [
            "Wireless Access Point",
            "Network Interface card",
            "Switch",
            "Hub",
          ],
          correct: 1,
        },
        {
          q: "A device that forwards data packet from one network to another is called a",
          options: ["Bridge", "Router", "Hub", "Gateway"],
          correct: 1,
        },
        {
          q: "Which of the following is the fastest media of data transfer?",
          options: [
            "Co-axial Cable",
            "Untwisted Wire",
            "Telephone Lines",
            "Fiber Optic",
          ],
          correct: 3,
        },
        {
          q: "Hub is a",
          options: [
            "Broadcast device",
            "Uni-cast device",
            "Multi-cast device",
            "None of the above",
          ],
          correct: 0,
        },
        {
          q: "Switch is a",
          options: [
            "Broadcast device",
            "Uni-cast device",
            "Multi-cast device",
            "None of the above",
          ],
          correct: 1,
        },
        {
          q: "The device that can operate in place of a hub is a:",
          options: ["Switch", "Bridge", "Router", "Gateway"],
          correct: 0,
        },
        {
          q: "A repeater takes a weak and corrupted signal and it.",
          options: ["Amplifies", "Regenerates", "Resembles", "Reroutes"],
          correct: 1,
        },
        {
          q: "Which of the following is not a type of cloud?",
          options: ["Private", "Public", "Protected", "Hybrid"],
          correct: 2,
        },
        {
          q: "Protocols are",
          options: [
            "Agreements on how communication components and devices are to communicate",
            "Logical communication channels for transferring data",
            "Physical communication channels used for transferring data",
            "None of above",
          ],
          correct: 0,
        },
        {
          q: "In computer, converting a digital signal into an analog signal is called",
          options: [
            "modulation",
            "demodulation",
            "conversion",
            "transformation",
          ],
          correct: 0,
        },
        {
          q: "Protocol/Standard that is used to transfer data among computers on the Internet",
          options: ["FTP", "Archie", "TCP", "Gopher"],
          correct: 2,
        },
        {
          q: "Which address is used in an internet employing the TCP/IP protocols?",
          options: [
            "physical address and logical address",
            "port address",
            "specific address",
            "all of the mentioned",
          ],
          correct: 3,
        },
        {
          q: "Which address identifies a process on a host?",
          options: [
            "physical address",
            "logical address",
            "port address",
            "specific address",
          ],
          correct: 2,
        },
        {
          q: "Transmission data rate is decided by",
          options: [
            "network layer",
            "physical layer",
            "data link layer",
            "transport layer",
          ],
          correct: 1,
        },
        {
          q: "When collection of various computers seems a single coherent system to its client, then it is called",
          options: [
            "computer network",
            "distributed system",
            "both (a) and (b)",
            "none of the mentioned",
          ],
          correct: 1,
        },
        {
          q: "Which one of the following computer network is built on the top of another network?",
          options: [
            "prior network",
            "chief network",
            "prime network",
            "overlay network",
          ],
          correct: 3,
        },
        {
          q: "Bluetooth is an example of",
          options: [
            "personal area network",
            "local area network",
            "virtual private network",
            "none of the mentioned",
          ],
          correct: 0,
        },
        {
          q: "A is a device that forwards packets between networks by processing the routing information included in the packet.",
          options: ["bridge", "firewall", "routers", "all of the mentioned"],
          correct: 2,
        },
        {
          q: "A list of protocols used by a system, one protocol per layer, is called",
          options: [
            "protocol architecture",
            "protocol stack",
            "protocol suit",
            "none of the mentioned",
          ],
          correct: 1,
        },
        {
          q: "Network congestion occurs",
          options: [
            "in case of traffic overloading",
            "when a system terminates",
            "when connection between two nodes terminates",
            "none of the mentioned",
          ],
          correct: 0,
        },
        {
          q: "Which one of the following extends a private network across public networks?",
          options: [
            "local area network",
            "virtual private network",
            "enterprise private network",
            "storage area network",
          ],
          correct: 1,
        },
        {
          q: "The structure or format of data is called",
          options: ["Syntax", "Semantics", "Struct", "None of the mentioned"],
          correct: 0,
        },
        {
          q: "Which of this is not a network edge device?",
          options: ["PC", "Smartphones", "Servers", "Switch"],
          correct: 3,
        },
        {
          q: "Delimiting and synchronization of data exchange is provided by",
          options: [
            "Application layer",
            "Session layer",
            "Transport layer",
            "Link layer",
          ],
          correct: 1,
        },
        {
          q: "The address identifies a process on a host.",
          options: ["physical", "IP", "port", "specific"],
          correct: 2,
        },
        {
          q: "The address uniquely defines a host on the Internet.",
          options: ["physical", "IP", "port", "specific"],
          correct: 1,
        },
        {
          q: "A connection provides a dedicated link between two devices.",
          options: ["point-to-point", "multipoint", "primary", "secondary"],
          correct: 0,
        },
        {
          q: "Devices may be arranged in a topology.",
          options: ["ring", "mesh", "bus", "all of the above"],
          correct: 3,
        },
        {
          q: "A is a data communication system within a building, plant, or campus, or between nearby buildings.",
          options: ["LAN", "MAN", "WAN", "none of the above"],
          correct: 0,
        },
        {
          q: "Which of the following is required to communicate between two computers?",
          options: [
            "communications software",
            "protocol",
            "communication hardware",
            "all of above including access to transmission medium",
          ],
          correct: 3,
        },
        {
          q: "What is NIC used for?",
          options: [
            "To remotely access PC",
            "To connect computer to a network",
            "It is used in junipers routers for gateway card",
            "None",
          ],
          correct: 1,
        },
        {
          q: "In a type of computer network, what does MAN stands for?",
          options: [
            "Major area network",
            "Mini area network",
            "Metropolitan area network",
            "Micro area network",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is the type of the computer network?",
          options: [
            "Metropolitan area network (MAN)",
            "Local area network (LAN)",
            "Personal area network (PAN)",
            "All of the above",
          ],
          correct: 3,
        },
        {
          q: "How many layers does OSI have?",
          options: ["4", "7", "5", "6"],
          correct: 1,
        },
        {
          q: "Collection of network or networks is called",
          options: ["Intranet", "Internet", "Extranet", "LAN network"],
          correct: 1,
        },
        {
          q: "What is a Firewall in Computer Network?",
          options: [
            "The physical boundary of Network",
            "An operating System of Computer Network",
            "A system designed to prevent unauthorized access",
            "A web browsing Software",
          ],
          correct: 2,
        },
        {
          q: "What is the meaning of Bandwidth in Network?",
          options: [
            "Transmission capacity of a communication channels",
            "Connected Computers in the Network",
            "Class of IP used in Network",
            "None of Above",
          ],
          correct: 0,
        },
        {
          q: "ADSL is the abbreviation of",
          options: [
            "Asymmetric Dual Subscriber Line",
            "Asymmetric Digital System Line",
            "Asymmetric Dual System Line",
            "Asymmetric Digital Subscriber Line",
          ],
          correct: 3,
        },
        {
          q: "The Internet is an example of",
          options: [
            "Cell switched network",
            "circuit switched network",
            "Packet switched network",
            "All of above",
          ],
          correct: 2,
        },
        {
          q: "Which of the following includes the benefit of the Networking?",
          options: [
            "File Sharing",
            "Easier access to Resources",
            "Easier Backups",
            "All of the Above",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is not the Networking Devices?",
          options: ["Gateways", "Linux", "Routers", "Firewalls"],
          correct: 1,
        },
        {
          q: "We can divide today's networks into broad categories based on switching.",
          options: ["four", "three", "five", "two"],
          correct: 3,
        },
        {
          q: "A is a device that operates only in the physical layer.",
          options: ["passive hub", "repeater", "bridge", "router"],
          correct: 1,
        },
        {
          q: "Which protocol assigns IP address to the client connected in the internet?",
          options: ["DHCP", "IP", "RPC", "none of the above"],
          correct: 0,
        },
        {
          q: "is a network that covers geographic areas that are larger, such as districts or cities.",
          options: ["LAN", "MAN", "WAN", "PAN"],
          correct: 1,
        },
        {
          q: "HTTP is the acronym of",
          options: [
            "Hyper Text Transfer Protocol",
            "Hyper Test Transfer Protocol",
            "Hyper Text Transport Protocol",
            "Hyper Text Transport Program",
          ],
          correct: 0,
        },
        {
          q: "DHCP is the abbreviation of",
          options: [
            "Dynamic Host Control Protocol",
            "Dynamic Host Configuration Protocol",
            "Dynamic Hyper Control Protocol",
            "Dynamic Hyper Configuration Protocol",
          ],
          correct: 1,
        },
        {
          q: "In DSL telco provides these services",
          options: [
            "Wired phone access",
            "ISP",
            "All of the mentioned",
            "None of the mentioned",
          ],
          correct: 2,
        },
        {
          q: "Physical or logical arrangement of network is",
          options: [
            "Topology",
            "Routing",
            "Networking",
            "None of the mentioned",
          ],
          correct: 0,
        },
        {
          q: "In which topology there is a central controller or hub?",
          options: ["Star", "Mesh", "Ring", "Bus"],
          correct: 0,
        },
        {
          q: "This topology requires multi point connection",
          options: ["Star", "Mesh", "Ring", "Bus"],
          correct: 3,
        },
        {
          q: "Data communication system within a building or campus is",
          options: ["LAN", "WAN", "MAN", "None of the mentioned"],
          correct: 0,
        },
        {
          q: "DNS is the abbreviation of",
          options: [
            "Dynamic Name System",
            "Dynamic Network System",
            "Domain Name System",
            "Domain Network Service",
          ],
          correct: 2,
        },
        {
          q: "How many layers are in the TCP/IP model?",
          options: ["4 layers", "5 layers", "6 layers", "7 layers"],
          correct: 1,
        },
        {
          q: "Each IP packet must contain",
          options: [
            "Only Source address",
            "Only Destination address",
            "Source and Destination address",
            "Source or Destination address",
          ],
          correct: 2,
        },
        {
          q: "Bridge works in which layer of the OSI model?",
          options: [
            "Application layer",
            "Transport layer",
            "Network layer",
            "Datalink layer",
          ],
          correct: 3,
        },
        {
          q: "provides a connection-oriented reliable service for sending messages",
          options: ["TCP", "IP", "UDP", "All of the above"],
          correct: 0,
        },
        {
          q: "Which layers of the OSI model are host-to-host layers?",
          options: [
            "Transport, Session, Presentation, Application",
            "Network, Transport, Session, Presentation",
            "Datalink, Network, Transport, Session",
            "Physical, Datalink, Network, Transport",
          ],
          correct: 0,
        },
        {
          q: "The last address of IP address represents",
          options: [
            "Unicast address",
            "Network address",
            "Broadcast address",
            "None of above",
          ],
          correct: 2,
        },
        {
          q: "Which of the following layer of OSI model also called end-to-end layer?",
          options: [
            "Presentation layer",
            "Network layer",
            "Session layer",
            "Transport layer",
          ],
          correct: 3,
        },
        {
          q: "Which is not a application layer protocol?",
          options: ["HTTP", "SMTP", "FTP", "TCP"],
          correct: 3,
        },
        {
          q: "The packet of information at the application layer is called",
          options: ["Packet", "Message", "Segment", "Frame"],
          correct: 1,
        },
        {
          q: "Which one of the following is an architecture paradigms?",
          options: [
            "Peer to peer",
            "Client-server",
            "HTTP",
            "Both Peer-to-Peer & Client-Server",
          ],
          correct: 3,
        },
        {
          q: "Application developer has permission to decide the following on transport layer side",
          options: [
            "Transport layer protocol",
            "Maximum buffer size",
            "Both Transport layer protocol and Maximum buffer size",
            "None of the mentioned",
          ],
          correct: 2,
        },
        {
          q: "Application layer offers service.",
          options: [
            "End to end",
            "Process to process",
            "Both End to end and Process to process",
            "None of the mentioned",
          ],
          correct: 1,
        },
        {
          q: "E-mail is",
          options: [
            "Loss-tolerant application",
            "Bandwidth-sensitive application",
            "Elastic application",
            "None of the mentioned",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is an application layer service?",
          options: [
            "Network virtual terminal",
            "File transfer, access, and management",
            "Mail service",
            "All of the mentioned",
          ],
          correct: 3,
        },
        {
          q: "The time required to examine the packet's header and determine where to direct the packet is part of",
          options: [
            "Processing delay",
            "Queuing delay",
            "Transmission delay",
            "Propagation delay",
          ],
          correct: 0,
        },
        {
          q: "In a network, If P is the only packet being transmitted and there was no earlier transmission, which of the following delays could be zero?",
          options: [
            "Propagation delay",
            "Queuing delay",
            "Transmission delay",
            "Processing delay",
          ],
          correct: 1,
        },
        {
          q: "Transmission delay does not depend on",
          options: [
            "Packet length",
            "Distance between the routers",
            "Transmission rate",
            "Bandwidth of medium",
          ],
          correct: 1,
        },
        {
          q: "Propagation delay depends on",
          options: [
            "Packet length",
            "Transmission rate",
            "Distance between the routers",
            "Speed of the CPU",
          ],
          correct: 2,
        },
        {
          q: "The attacker using a network of compromised devices is known as",
          options: ["Internet", "Botnet", "Telnet", "D-net"],
          correct: 1,
        },
        {
          q: "Which of this is not a guided media?",
          options: [
            "Fiber optical cable",
            "Coaxial cable",
            "Wireless LAN",
            "Copper wire",
          ],
          correct: 2,
        },
        {
          q: "The number of objects in a Web page which consists of 4 jpeg images and HTML text is",
          options: ["4", "1", "5", "7"],
          correct: 2,
        },
        {
          q: "The default connection type used by HTTP is",
          options: [
            "Persistent",
            "Non-persistent",
            "Can be either persistent or non-persistent depending on connection request",
            "None of the mentioned",
          ],
          correct: 0,
        },
        {
          q: "The method when used in the method field, leaves entity body empty.",
          options: ["POST", "SEND", "GET", "PUT"],
          correct: 2,
        },
        {
          q: "The values GET, POST, HEAD etc are specified in of HTTP message",
          options: [
            "Request line",
            "Header line",
            "Status line",
            "Entity body",
          ],
          correct: 0,
        },
        {
          q: "The first line of HTTP request message is called",
          options: [
            "Request line",
            "Header line",
            "Status line",
            "Entity line",
          ],
          correct: 0,
        },
        {
          q: "The HTTP response message leaves out the requested object when method is used",
          options: ["GET", "POST", "HEAD", "PUT"],
          correct: 2,
        },
        {
          q: "Find the oddly matched HTTP status codes",
          options: [
            "200 OK",
            "400 Bad Request",
            "301 Moved permanently",
            "304 Not Found",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is present in both an HTTP request line and a status line?",
          options: [
            "HTTP version number",
            "URL",
            "Method",
            "None of the mentioned",
          ],
          correct: 0,
        },
        {
          q: "The conditional GET mechanism",
          options: [
            "Imposes conditions on the objects to be requested",
            "Limits the number of response from a server",
            "Helps to keep a cache upto date",
            "None of the mentioned",
          ],
          correct: 2,
        },
        {
          q: "The physical layer is concerned with",
          options: [
            "bit-by-bit delivery",
            "process to process delivery",
            "application to application delivery",
            "port to port delivery",
          ],
          correct: 0,
        },
        {
          q: "The portion of physical layer that interfaces with the media access control sublayer is called",
          options: [
            "physical signalling sublayer",
            "physical data sublayer",
            "physical address sublayer",
            "physical transport sublayer",
          ],
          correct: 0,
        },
        {
          q: "The physical layer provides",
          options: [
            "mechanical specifications of electrical connectors and cables",
            "electrical specification of transmission line signal level",
            "specification for IR over optical fiber",
            "all of the mentioned",
          ],
          correct: 3,
        },
        {
          q: "The physical layer is responsible for",
          options: [
            "line coding",
            "channel coding",
            "modulation",
            "all of the mentioned",
          ],
          correct: 3,
        },
        {
          q: "The physical layer translates logical communication requests from the ______ into hardware specific operations.",
          options: [
            "data link layer",
            "network layer",
            "transport layer",
            "application layer",
          ],
          correct: 0,
        },
        {
          q: "A single channel is shared by multiple signals by",
          options: [
            "analog modulation",
            "digital modulation",
            "multiplexing",
            "phase modulation",
          ],
          correct: 2,
        },
        {
          q: "Wireless transmission of signals can be done via",
          options: [
            "radio waves",
            "microwaves",
            "infrared",
            "all of the mentioned",
          ],
          correct: 3,
        },
        {
          q: "The network layer is concerned with of data.",
          options: ["bits", "frames", "packets", "bytes"],
          correct: 2,
        },
        {
          q: "Which one of the following is not a function of network layer?",
          options: [
            "routing",
            "inter-networking",
            "congestion control",
            "error control",
          ],
          correct: 3,
        },
        {
          q: "A 4 byte IP address consists of",
          options: [
            "only network address",
            "only host address",
            "network address & host address",
            "network address & MAC address",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is not correct in relation to multi-destination routing?",
          options: [
            "is same as broadcast routing",
            "contains the list of all destinations",
            "data is not sent by packets",
            "there are multiple receivers",
          ],
          correct: 2,
        },
        {
          q: "The network layer protocol for internet is",
          options: [
            "ethernet",
            "internet protocol",
            "hypertext transfer protocol",
            "file transfer protocol",
          ],
          correct: 1,
        },
        {
          q: "Transport layer aggregates data from different applications into a single stream before passing it to",
          options: [
            "network layer",
            "data link layer",
            "application layer",
            "physical layer",
          ],
          correct: 0,
        },
        {
          q: "Which of the following are transport layer protocols used in networking?",
          options: [
            "TCP and FTP",
            "UDP and HTTP",
            "TCP and UDP",
            "HTTP and FTP",
          ],
          correct: 2,
        },
        {
          q: "User datagram protocol is called connectionless because",
          options: [
            "all UDP packets are treated independently by transport layer",
            "it sends data as a stream of related packets",
            "it is received in the same order as sent order",
            "it sends data very quickly",
          ],
          correct: 0,
        },
        {
          q: "Transmission control protocol",
          options: [
            "is a connection-oriented protocol",
            "uses a three way handshake to establish a connection",
            "receives data from application as a single stream",
            "all of the mentioned",
          ],
          correct: 3,
        },
        {
          q: "An endpoint of an inter-process communication flow across a computer network is called",
          options: ["socket", "pipe", "port", "machine"],
          correct: 0,
        },
        {
          q: "A is a TCP name for a transport service access point.",
          options: ["port", "pipe", "node", "protocol"],
          correct: 0,
        },
        {
          q: "Transport layer protocols deals with",
          options: [
            "application to application communication",
            "process to process communication",
            "node to node communication",
            "man to man communication",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is a transport layer protocol?",
          options: [
            "stream control transmission protocol",
            "internet control message protocol",
            "neighbor discovery protocol",
            "dynamic host configuration protocol",
          ],
          correct: 0,
        },
      ],
    },
  ],
});
