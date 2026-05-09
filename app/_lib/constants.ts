import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiRedux , SiTypescript, SiCss , SiTailwindcss, SiExpress, SiPostgresql, SiMongoose, SiMongodb, SiPostman, SiFramer, SiNextdotjs, SiReactquery, SiGraphql, SiTestinglibrary, SiVite, SiSass } from "react-icons/si";

export const navLinks = ["home", "about", "skills", "experience", "projects", "contact me"];

export const items = [
  {
    id: 1,
    year: "March 2021 - Present",
    title: "Frontend Software Engineer @ Transifex by XTM",
    location: "Athens, Greece (Remote)",
    description: [
      "Led modernization of legacy frontend, reducing technical debt and improving maintainability.",
      "Contributed to integrations with external platforms (e.g., Contentful, Rigi), enabling seamless data flow and feature expansion.",
      "Developed UI components for AI-driven features, contributing to new product capabilities.",
      "Implemented onboarding flows in React, improving user experience and feature adoption.",
      "Supported a junior developer through ad-hoc guidance and code reviews.",
      "ACHIEVEMENT: Received Growth Award for contributions to frontend development and continuous improvement"
    ],
    technology: ["HTML5", "CSS", "LESS", "Javascript", "React", "NextJS", "TailwindCSS", "Redux", "MarionetteJS", "BackboneJS", "Jquery", "GraphQL", "Cursor", "Claude", "React Query", "Django", "Docker"]
  },
  {
    id: 2,
    year: "September 2020 - March 2021",
    title: "Frontend Web Developer @ Netmechanics",
    location: "Iraklion, Crete (On-site)",
    description: [
      "Developed React-based templating engine used to render customizable pages across the platform",
      "Coded websites using the company's custom templates and components.",
      "Enhanced user experience by implementing responsive web design and optimizing performance.",
      "Adhered to SEO & WCAG compliance while designing sites.",
    ],
    technology: ["HTML5", "CSS", "Javascript", "React", "Jquery", "Bootstrap"]
  },
{
  id: 3,
  year: "June 2020 - August 2020",
  title: "Frontend Web Developer @ iWorx",
  location: "Iraklion, Crete (On-site)",
  description: [
    "Developed and maintained websites using WordPress and front-end technologies.",
    "Integrated and customized WordPress plugins to extend site functionality.",
    "Implemented UI and styling updates (CSS) for existing client websites to improve usability and consistency."
  ],
  technology: ["HTML5", "CSS", "Javascript", "Wordpress"]
}
];

export const feSkills = [
  { name: "React", level: 95, icon: FaReact },
  { name: "CSS3", level: 90, icon: SiCss },
  { name: "TailwindCSS", level: 85, icon: SiTailwindcss },
  { name: "TypeScript", level: 75, icon: SiTypescript },
  { name: "JavaScript", level: 95, icon: FaJs },
  { name: "Redux & Redux Toolkit", level: 80, icon: SiRedux  },
]

export const feSecondarySkills = [
  { name: "Nextjs", icon: SiNextdotjs },
  { name: "SCSS (Sass)", icon: SiSass },
  { name: "React Query", icon: SiReactquery },
  { name: "GraphQL", icon: SiGraphql },
  { name: "React Testing Library",  icon: SiTestinglibrary },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Vite", icon: SiVite },
]

export const beSkills = [
  { name: "Node.js", level: 60, icon: FaNodeJs },
  { name: "Express", level: 80, icon: SiExpress },
  { name: "PostgreSQL", level: 60, icon: SiPostgresql },
  { name: "Mongoose", level: 40, icon: SiMongoose },
  { name: "MongoDB", level: 40, icon: SiMongodb },
  { name: "Postman", level: 85, icon: SiPostman  },
]

export const methodologies = [
  { name: "Responsive Web Design" },
  { name: "Mobile-first Development Approach" },
  { name: "Desktop-first Development Approach" },
  { name: "Component-based Architecture Design" },
  { name: "RESTful API Design" },
  { name: "Agile Software Development" },
  { name: "AI-assisted Development" },
  { name: "UI/UX Design Principles" },
  { name: "Application Performance Optimization" },
  { name: "System Scalability Planning" },
  { name: "CI / CD" },
  { name: "Microservices Architecture" },
  { name: "Design Systems Implementation" },
  { name: "State Management Architecture" },
  { name: "WCAG Accessibility (A11y) Best Practices" },
]