const skills = {
  about: `Hi, I’m Bhargav — a full-stack developer passionate about building
          meaningful web applications. I love combining the fundamentals of
          JavaScript with React, Node.js, Express, and MongoDB to bring ideas to
          life. My problem-solving approach is rooted in experimentation;
          whether it's at work or in my free time, I’m constantly building,
          tinkering, and learning something new with every project.`,
  frontEnd: [
    { id: 1, label: "JavaScript" },
    { id: 2, label: "React" },
    { id: 3, label: "MUI" },
    { id: 4, label: "Tailwind" },
    { id: 5, label: "Redux Toolkit" },
    { id: 6, label: "TypeScript" },
    { id: 7, label: "Bootstrap" },
    { id: 8, label: "HTML5" },
    { id: 9, label: "CSS3" }
  ],
  backEnd: [
    { id: 1, label: "Node.js" },
    {
      id: 2,
      label: "Express.js",
    },
    { id: 3, label: "MongoDB" },
    { id: 4, label: "Mongoose" },
    { id: 5, label: "REST API" },
    { id: 6, label: "JWT Auth" },
    { id: 7, label: "SQL" },
  ],
  languages: [
    { id: 1, label: "Javascript" },
    { id: 2, label: "Java" },
    { id: 3, label: "SQL" },
  ],
  tools: [
    { id: 1, label: "Git" },
    { id: 2, label: "Postman" },
    { id: 3, label: "CORS" },
    { id: 4, label: "Chrome Dev Tools" },
    { id: 5, label: "VS Code" },
  ],
  projects: [
    {
      id: 1,
      label: "Vyoma",
      tag: "Frontend",
      about:"An e-commerce platform allowing users to browse, filter, and manage products via cart and wishlist features.",
      website: "https://vyoma-six.vercel.app/",
      code: "https://github.com/bhargav-parashar/vyoma",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "Tailwind CSS" },
        { id: 3, label: "Redux Toolkit" },
        { id: 4, label: "JavaScript" },
        { id: 5, label: "VITE" },
        { id: 6, label: "Debouncing" },
        { id: 7, label: "Vercel" }
      ],
    },
    {
      id: 2,
      label: "AuthHR",
      tag: "Full-stack",
      about:
        "Full-stack, role based access control, JWT Authentication based HRM application.",
      website: "https://auth-hr.vercel.app/",
      code: "https://github.com/bhargav-parashar/auth-HR",
      walkthrough: "https://www.youtube.com/watch?v=VHpn7cg2_lQ",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "Node.js" },
        { id: 4, label: "Express" },
        { id: 5, label: "Middlewares" },
        { id: 6, label: "MongoDB" },
        { id: 7, label: "Mongoose" },
        { id: 8, label: "Parcel" },
        { id: 9, label: "Lazy loading" },
        { id: 10, label: "JWT Auth" },
        { id: 11, label: "RBAC" },
        { id: 12, label: "Password Hashing" },
        { id: 13, label: "Vercel" },
        { id: 14, label: "Render" },
      ],
    },
    {
      id: 3,
      label: "QKart",
      tag: "Frontend",
      about: "Cart based E-Commerce Platform.",
      website:
        "https://qkart-frontend-zeta-sable.vercel.app/",
      code: "https://github.com/bhargav-parashar/bhargavparashar99-ME_QKART_FRONTEND_V2",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "REST" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" },
      ],
    },
    {
      id: 4,
      label: "Medify",
      tag: "Frontend",
      about: "Doctor's appointment booking application.",
      website: "https://medify-bice-ten.vercel.app/",
      code: "https://github.com/bhargav-parashar/medify",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "Swiper" },
        { id: 4, label: "REST" },
        { id: 5, label: "CRA" },
        { id: 6, label: "Vercel" },
        { id: 7, label: "Render" },
      ],
    },
    {
      id: 5,
      label: "Expense Tracker",
      tag: "Frontend",
      about: "A personal expense tracker application.",
      website: "https://expense-tracker-rose-nine.vercel.app/",
      code: "https://github.com/bhargav-parashar/expense-tracker",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "REST" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" },
      ],
    },
    {
      id: 6,
      label: "Swift Exit",
      tag: "Full-stack",
      about:
        "JWT Auth enables RBAC application for submitting and reviewing resignations.",
      website: "https://swift-exit-frontend.vercel.app/",
      code: "https://github.com/bhargav-parashar/swift-exit-fullstack-app",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "Node.js" },
        { id: 4, label: "Express" },
        { id: 5, label: "Middlewares" },
        { id: 6, label: "MongoDB" },
        { id: 7, label: "Mongoose" },
        { id: 8, label: "Vite" },
        { id: 9, label: "JWT Auth" },
        { id: 10, label: "RBAC" },
        { id: 11, label: "Vercel" },
        { id: 12, label: "Render" },
      ],
    },
    {
      id: 7,
      label: "QTify",
      tag: "Frontend",
      about: "UI Layout of a music streaming platform.",
      website: "https://qtify-seven-iota.vercel.app/",
      code: "https://github.com/bhargav-parashar/L-square-QTify",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "Swiper" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" },
      ],
    },
    {
      id: 8,
      label: "Task Manager",
      tag: "Full-stack",
      about: "CRUD operations based full-stack task management platform.",
      website: "https://task-manager-frontend-green.vercel.app/",
      code: "https://github.com/bhargav-parashar/task-manager-fullstack",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "Node.js" },
        { id: 4, label: "Express" },
        { id: 6, label: "MongoDB" },
        { id: 7, label: "Mongoose" },
        { id: 8, label: "CRA" },
        { id: 13, label: "Vercel" },
        { id: 14, label: "Render" },
      ],
    },
    {
      id: 9,
      label: "Weather App",
      tag: "Frontend",
      about:
        "Makes a live weather data API call and displays it for any chosen location around the world.",
      website: "https://weather-app-eight-swart-30.vercel.app/",
      code: "https://github.com/bhargav-parashar/weather-app",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 3, label: "REST" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" },
      ],
    },
    {
      id: 10,
      label: "BotAI",
      tag: "Frontend",
      about: "AI Chat Application UI Layout for static data.",
      website: "https://bot-ai-lime.vercel.app/",
      code: "https://github.com/bhargav-parashar/bot-ai",
      walkthrough: "",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" },
      ],
    },
  ],
  certifications: [ 
    {
      id: 1,
      label: "Fellowship in Software Development - Fullstack",
      source: "Crio.Do",
      location: "Bengaluru, India",
      date: "March, 2025",
      link:"https://drive.google.com/file/d/1K-w7zycVQka2CiqFWWH7A3sSKo1c2k22/view?usp=sharing"
    },
    {
      id: 2,
      label: "JavaScript Algorithms and Data Structures Masterclass ",
      source: "Udemy",
      location: "Remote",
      date: "Ongoing",
      link:""
    },
  ],
  education: [
    {
      id: 1,
      label: "Bachelor's of Technology",
      source: "Tezpur University",
      location: "Assam, India",
      duration: "2018 - 2022",
    },
  ],
  resume:{
    frontend : "https://drive.google.com/file/d/14f8r6LFT2slRNInLkbo3Qh-juIoON4Cs/view?usp=sharing",
    fullstack : "https://drive.google.com/file/d/1HfkQ7G5Ieush_WLbxnjAkl_zXWqY2YV9/view?usp=sharing"
  },
  
  github:"https://github.com/bhargav-parashar",
  linkedin:"https://www.linkedin.com/in/bhargavparashar/",
  leetcode:"https://leetcode.com/u/bhp100/"
};

export { skills };
