import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Avinash Shukla",
  initials: "AS",
  url: "https://avinashshukla.tech",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Full-Stack Engineer passionate about solving real-world problems with clean, scalable code.",
  summary:
    "With over 2 years of professional experience, I specialize in delivering scalable web and mobile solutions using React, Node.js, and AWS. I’ve worked on everything from Chrome extensions and real-time games to production-ready SaaS platforms and cross-platform mobile apps. I also write about JavaScript and React on Medium and contribute to open-source projects.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Node.js",
    "React Native",
    "PostgreSQL",
    "MongoDB",
    "Socket.io",
    "TailwindCSS",
    "Docker",
    "AWS",
    "GitHub Actions",
    "Jest",
    "Redux",
    "Microservices",
    "Chrome Extension API",
    "Next.js",
    "Typescript",
  ],
  navbar: [
    { href: "/#hero-start", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "avinashukla0704@gmail.com",
    tel: "+91-8827040821",
    social: {
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1GY_nKWwy5RgPIDZtTZILnNRSQgBV_Kmf/view?usp=sharing",
        icon: NotebookIcon,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Luci04",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/avinashukla",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/offi_beat",
        icon: Icons.x,
        navbar: true,
      },
      Gmail: {
        name: "Send Email",
        url: "mailto:avinashukla0704@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://api.whatsapp.com/send?phone=8827040821&text=",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Medium: {
        name: "Send Email",
        url: "mailto:avinashukla0704@gmail.com",
        icon: Icons.medium,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Onelab Ventures",
      href: "",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Software Engineer",
      logoUrl:
        "https://tts-website-images.s3.ap-south-1.amazonaws.com/fabicon-tts.png",
      start: "June 2023",
      end: "Present",
      description:
        "Built and deployed scalable React/Next.js apps on AWS, reducing load time by 33%. Created a high-accuracy transcription Chrome extension, developed InteliDoc from scratch, integrated Azure Blob with Node.js microservices, and led CI/CD pipeline setup using Docker and GitHub Actions.",
    },
    {
      company: "MobileFirst Applications",
      href: "https://mobilefirst.in/images/MobileFirstApplications_Logo.jpg",
      badges: [],
      location: "Ahmedabad, Gujarat",
      title: "React Developer",
      logoUrl: "https://mobilefirst.in/images/MobileFirstApplications_Logo.jpg",
      start: "August 2022",
      end: "May 2023",
      description:
        "Designed dynamic web apps with React, improving performance by 11%. Implemented optimized REST APIs and unit tests with Jest, enhancing code quality and reducing backend load times by 20%.",
    },
    {
      company: "Riverhouse Technologies",
      href: "#",
      badges: [],
      location: "Bhilai, Chhattisgarh",
      title: "Full-Stack Developer Intern",
      logoUrl:
        "https://riverhousetechnologies.com/wp-content/uploads/2021/09/cropped-Riverhouse-Logo-Icon-Light-1.png",
      start: "June 2021",
      end: "December 2021",
      description:
        "Built full-stack React/Node/MongoDB applications, improving data fetch times by 30% using Axios and Context API. Ensured platform-wide reliability and responsiveness.",
    },
  ],

  education: [
    {
      school: "Shri Shankaracharya Technical Campus",
      href: "https://sstc.ac.in/",
      degree: "B.Tech in Computer Science (GPA: 8.0/10)",
      logoUrl: "https://sstc.ac.in/img2/logofavicon.png",
      start: "2018",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "Rev Bus App",
      href: "#", // Replace with actual link or Play Store URL if available
      dates: "2024",
      active: true,
      description:
        "Developed a smart bus tracking and route management mobile application with real-time location updates and route planning. Integrated WebView and dynamic route rendering to enhance fleet monitoring and commuter experience.",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "WebView",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.rev.travel/", // Replace with demo or store link
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add a screenshot or illustration if available
      video: "", // Optional: You can add a screen recording or demo link
    },

    {
      title: "InteliDoc",
      href: "#", // Replace with live demo or store link if available
      dates: "2025",
      active: true,
      description:
        "Led end-to-end development of a Chrome extension that automates medical note-taking with high transcription accuracy, reducing manual documentation efforts by 50%. Earned client recognition for quality and timely delivery.",
      technologies: [
        "React",
        "Node.js",
        "Chrome Extension API",
        "Azure Blob Storage",
        "AWS",
        "Docker",
      ],
      links: [
        {
          type: "Video",
          href: "https://drive.google.com/file/d/1Q6JTbDEaI7Xpa-E6xQ_bMiOrXdUllQBA/view", // Replace with real URL if available
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "#", // Replace with real URL if available
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "", // Add video link if you have a demo
    },
    {
      title: "Tab Tamer",
      href: "https://chromewebstore.google.com/detail/tab-tamer/pipnhehkjmleinejobhceggefedglfoo",
      dates: "2025",
      active: true,
      description:
        "Built a productivity Chrome extension to manage and sync browser tabs with keyboard shortcuts. Helped users reduce tab clutter, improving productivity by 40%.",
      technologies: ["React", "Node.js", "MongoDB", "Chrome Extension API"],
      links: [
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/tab-tamer/pipnhehkjmleinejobhceggefedglfoo",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Real-Time Tic-Tac-Toe",
      href: "https://fancy-beijinho-8c74a3.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "Built a real-time multiplayer game with persistent sessions, WebSocket-based PvP gameplay, and leaderboard tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      links: [
        {
          type: "Website",
          href: "https://fancy-beijinho-8c74a3.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FocusTube",
      href: "#", // Replace with Chrome Web Store or demo link
      dates: "2024",
      active: true,
      description:
        "Built a Chrome extension to eliminate distractions on YouTube by hiding recommendations, comments, and autoplay. Helps users stay focused and improve productivity while consuming educational content.",
      technologies: [
        "JavaScript",
        "Chrome Extension API",
        "Manifest V3",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/focustube/faldkompbndimkbbidadhgmmnhdadafa?authuser=1&hl=en", // Replace with real store link
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // You can add a screenshot of the UI
      video: "", // Optional: add a short demo video link
    },
    {
      title: "Workout App",
      href: "https://play.google.com/store/apps/details?id=com.akashlilhare.homeworkout",
      dates: "2021",
      active: true,
      description:
        "Contributed core features to a fitness app that has crossed 10,000+ downloads. Helped implement workout tracking and notification-based engagement.",
      technologies: ["React Native", "Firebase", "Push Notifications"],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.akashlilhare.homeworkout",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [], // You can add if you want later
} as const;
