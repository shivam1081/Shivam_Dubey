// Portfolio Mock Data - Easy to update with real content
import profilePic from "../assets/Shivam_Profile_Pic.JPG";

export const personalInfo = {
  name: "Shivam Dubey",
  title: "Frontend Developer",
  tagline: "Crafting Digital Experiences That Matter",
  summary:
    "Passionate developer with 4.5+ years of experience building scalable web applications. I transform complex problems into elegant, user-friendly solutions.",
  email: "shivamdubey1801@email.com",
  phone: "+91-8357998700",
  location: "Indore, Madhya Pradesh",
  profilePhoto: profilePic,
  resumeUrl:
    "https://drive.google.com/file/d/19SI19nWXdAZ77hUoBbA-mJqHOHM_u3NO/view?usp=sharing",
  yoe: "4.5+",
  social: {
    linkedin: "https://www.linkedin.com/in/shivamdubey18",
    github: "https://github.com/shivam1081",
    instagram: "https://www.instagram.com/shivam.dubey1801",
    whatsapp: "+91-8357998700",
  },
};

export const stats = [
  { label: "Years Experience", value: "4.5+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Happy Clients", value: "3+" },
  { label: "Technologies", value: "10+" },
];

export const aboutMe = {
  title: "About Me",
  description: `I’m a Frontend Developer with 4.5 years of experience building responsive, accessible, and high-performance web applications. I specialize in modern frontend technologies such as React.js, Redux, JavaScript, and TypeScript, with a strong focus on delivering clean and intuitive user experiences.

My professional journey has involved creating scalable and maintainable solutions while working in Agile environments and collaborating closely with cross-functional teams. I follow clean coding principles and value writing code that is easy to understand, test, and extend.

Beyond frontend development, I actively explore system design concepts, cloud technologies, and backend tools like Node.js and MongoDB, while staying current with modern UI standards, testing practices, and CI/CD workflows.`,
  highlights: [
    "Specialized in React.js, Redux, and modern frontend development",
    "Focused on building accessible, responsive, and high-performance UIs",
    "Experienced with clean code, testing practices, and CI/CD workflows",
    "Continuous learner with exposure to backend, cloud",
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Software Engineering Analyst",
    company: "Accenture Pvt Ltd",
    location: "Indore, MP",
    duration: "2021 - Present",
    description:
      "Contributed to front-end design and development of enterprise-grade web applications using React, Redux, Redux-Saga, and TypeScript, focusing on modernization, performance, and scalability while collaborating across teams.",
    achievements: [
      "Led frontend modernization efforts using React, Redux, Redux-Saga, and TypeScript",
      "Improved application performance by 30–40% through render optimization and component refactoring",
      "Recognized with the Accenture Celebrates Excellence (ACE) award for impactful cross-functional collaboration",
    ],
  },
  // {
  //   id: 2,
  //   role: "Full Stack Developer",
  //   company: "StartupHub",
  //   location: "Austin, TX",
  //   duration: "2020 - 2022",
  //   description:
  //     "Developed and maintained multiple client-facing applications using React and Node.js, working in an agile environment.",
  //   achievements: [
  //     "Built real-time collaboration features serving 10K+ users",
  //     "Implemented CI/CD pipelines reducing deployment time by 60%",
  //     "Designed and developed RESTful APIs",
  //   ],
  // },
  // {
  //   id: 3,
  //   role: "Junior Developer",
  //   company: "Digital Agency Co.",
  //   location: "Remote",
  //   duration: "2019 - 2020",
  //   description:
  //     "Started career building responsive websites and web applications for diverse clients across industries.",
  //   achievements: [
  //     "Delivered 15+ client projects on time",
  //     "Learned modern frontend frameworks",
  //     "Collaborated with design team on UI implementations",
  //   ],
  // },
];

export const skills = {
  programminglang: [
    { name: "C", level: 80 },
    { name: "C++", level: 80 },
    { name: "JAVA", level: 85 },
    { name: "Javascript", level: 95 },
    { name: "Typescript", level: 70 },
    { name: "Python", level: 50 },
    { name: "SQL", level: 60 },
  ],
  frontend: [
    { name: "React", level: 95 },
    { name: "Angular", level: 10 },
    { name: "Vue", level: 20 },
    { name: "Next", level: 20 },
    { name: "SCSS", level: 90 },
    { name: "Tailwind CSS", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "PostgreSQL", level: 50 },
    { name: "MongoDB", level: 85 },
    { name: "GraphQL", level: 75 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 20 },
    { name: "AWS", level: 50 },
    { name: "Figma", level: 80 },
    { name: "CI/CD", level: 50 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/alexjohnson/ecommerce",
    live: "https://ecommerce-demo.com",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com/alexjohnson/taskmanager",
    live: "https://taskmanager-demo.com",
    category: "fullstack",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps creators produce high-quality articles and social media posts.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["React", "Python", "OpenAI", "FastAPI"],
    github: "https://github.com/alexjohnson/ai-content",
    live: "https://ai-content-demo.com",
    category: "ai",
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description:
      "Interactive financial dashboard with data visualization, budget tracking, and expense categorization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["React", "D3.js", "Node.js", "Chart.js"],
    github: "https://github.com/alexjohnson/finance-dash",
    live: "https://finance-demo.com",
    category: "frontend",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    year: "2015 - 2019",
    description:
      "Graduated with honors. Focused on software engineering and data structures.",
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    institution: "Coding Academy",
    year: "2019",
    description:
      "Intensive 12-week program covering modern web development technologies.",
  },
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google",
    year: "2022",
  },
  {
    id: 3,
    name: "Meta Frontend Developer Certificate",
    issuer: "Meta",
    year: "2022",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Product Manager at TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "Alex is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at StartupHub",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Working with Alex was a pleasure. They brought innovative solutions to complex challenges and were always willing to go the extra mile.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead at Creative Co.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Alex has an incredible ability to translate designs into pixel-perfect implementations. A true professional who understands both design and development.",
  },
];

export const hobbies = [
  {
    id: 1,
    name: "Photography",
    icon: "Camera",
    description: "Capturing moments and exploring visual storytelling",
  },
  {
    id: 2,
    name: "Hiking",
    icon: "Mountain",
    description: "Exploring nature trails and scenic landscapes",
  },
  {
    id: 3,
    name: "Reading",
    icon: "BookOpen",
    description: "Tech blogs, sci-fi novels, and self-improvement books",
  },
  {
    id: 4,
    name: "Gaming",
    icon: "Gamepad2",
    description: "Strategy games and indie titles",
  },
  {
    id: 5,
    name: "Music",
    icon: "Music",
    description: "Playing guitar and discovering new artists",
  },
  {
    id: 6,
    name: "Cooking",
    icon: "ChefHat",
    description: "Experimenting with international cuisines",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
