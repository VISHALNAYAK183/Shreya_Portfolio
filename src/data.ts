import { TimelineItem, Project, Skill } from './types';
import smlImage from "./assets/sml.png";
import urlShortener from "./assets/url.png"
import { ins } from 'framer-motion/client';

export const timelineExperienceData: TimelineItem[] = [
  {
    id: 1,
    title: "Software Developer Intern",
    role: "Manipal Technologies Ltd",
    date: "April 2024 - July 2024",
    description: "Developed Document Management System  using ASP.NET with Web Forms, C#, HTML, CSS and MySQL to enhance document storage retrieval. Implemented Secure user Authentication, reducing unauthorized incidents by 60%.",
    skills: ["ReactJS", "Node.js", "Express", "PostgreSQL", "Bootstrap"]
  },
  
];


export const timelineEducationData: TimelineItem[] = [
  {
    id: 1,
    title: "Master of Computer Applications (MCA)",
    role: "Mangalore Institute Of Technology & Engineering",
    date: "2023 - 2024",
    description: "Specialized in full-stack development, software engineering, and advanced algorithms.",
    skills: ["Web Development & ReactJS", "Data Structures & Algorithms", "Software Engineering", "Database & Cloud Technologies"]
  },
  {
    id: 2,
    title: "Bachelor of Computer Applications (BCA)",
    role: "Mangalore University",
    date: "2019 - 2022",
    description: "Built a strong foundation in programming, database management, and computer networking.",
    skills: ["Programming with C, C++, Java, and Python", "Database Management & SQL", "Full-Stack Technologies", "Operating Systems & Computer Networks"]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Online Restaurant Management System",
    description: "Developed an Online Restaurant Management System using ASP.NET with MVC, MySQL, HTML,CSS,JavaScript, and Bootstrap",
    longDescription: "Optimized order processing, reducing manual effort by 40% and improving efficiency.Enhanced user experience with a responsive interface, increasing customer engagement by 30%. Implemented secure database management, ensuring 99.9% uptime and seamless order tracking",
    tags: ["HTML, CSS", "ASP>NET", "MVC", "PostgreSQL", "Bootstrap"],
    imageUrl: "",
    demoLink: "",
    githubLink: "#"
  },
  

];


export const skillsData: Skill[] = [
  { id: 1, name: "C/C++", icon: "devicon-cplusplus-plain", category: "Languages" },
  { id: 2, name: "JavaScript", icon: "devicon-javascript-plain", category: "Languages" },
  { id: 3, name: "Python", icon: "devicon-python-plain", category: "Languages" },
  { id: 4, name: "Java", icon: "devicon-java-plain", category: "Languages" },
  { id: 5, name: "SQL", icon: "devicon-mysql-plain", category: "Languages" },
  { id: 6, name: "HTML/CSS", icon: "devicon-html5-plain", category: "Frontend" },
  { id: 7, name: "ReactJS", icon: "devicon-react-original", category: "Frontend" },
  { id: 8, name: "Redux", icon: "devicon-redux-original", category: "Frontend" },
  { id: 9, name: "Node.js", icon: "devicon-nodejs-plain", category: "Backend" },
  { id: 10, name: "Express.js", icon: "devicon-express-original", category: "Backend" },
  { id: 11, name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", category: "Frontend" },
  { id: 12, name: "Bootstrap", icon: "devicon-bootstrap-plain", category: "Frontend" },
  { id: 13, name: "Material UI", icon: "devicon-materialui-plain", category: "Frontend" },
  { id: 14, name: "MongoDB", icon: "devicon-mongodb-plain", category: "Backend" },
  { id: 15, name: "MySQL", icon: "devicon-mysql-plain", category: "Backend" },
  { id: 16, name: "PostgreSQL", icon: "devicon-postgresql-plain", category: "Backend" },
  { id: 17, name: "Firebase", icon: "devicon-firebase-plain", category: "Cloud" },
  { id: 18, name: "Git", icon: "devicon-git-plain", category: "Tools" }
];



export const personalInfo = {
  name: "Shreya",
  phone: "9008676158",
  location: "Manipal",
  email: "shreyanayak954@gmail.com",
  linkedin: "",
  github: "",
  instagram: "",
};