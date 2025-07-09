import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiCplusplus,
  SiPhp,
  SiMysql
} from "react-icons/si";

import { 
  TbBinaryTree,
  TbCode,
  TbShieldLock,
  TbBug 
} from "react-icons/tb";

export const projects = [
  {
    id: 1,
    title: "Harry Potter Metaverse",
    description: "The Harry Potter Metaverse is an impressive and comprehensive implementation that leverages a wide range of data structures and algorithms with best possible and optimized time complexity. Features include Graph-based map of Hogwarts using DFS and Dijkstra's Algorithm, Event scheduler with min-heap, Library catalog using Red-Black Tree, Hashing for secure password storage, Mailbox system using stacks, File handling, Admin interface, and Shopping cart queues.",
    techStack: ["Data Structures", "Algorithms", "C++", "File Handling", "Graph Algorithms", "Heap", "Red-Black Tree", "Hashing"],
    githubLink: "https://github.com/bhawya-rawal/harrypotter",
    liveLink: null,
    category: "Data Structures & Algorithms"
  },
  {
    id: 2,
    title: "PlanIT",
    description: "A social media web app where users earn points for uploading images of verified social work. Built using MERN stack in collaboration with my friend with features like user authentication, dynamic routing, and interactive UI components. Integrated MapsPage for location-based activity tracking.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Authentication", "Maps API"],
    githubLink: "https://github.com/bhawya-rawal/planit",
    liveLink: null,
    category: "Full Stack"
  }
];

export const skills = {
  languages: [
    { name: "C++", icon: "SiCplusplus" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "PHP", icon: "SiPhp" },
    { name: "CSS", icon: "SiCss3" }
  ],

  frameworks: [
    { name: "React", icon: "SiReact" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" }
  ],

  toolsDatabases: [
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "Burp Suite", icon: "SiBurpsuite" },
    { name: "Nmap", icon: "SiNmap" }
  ],

  concepts: [
    { name: "Data Structures", icon: "TbBinaryTree" },

    { name: "System Hacking", icon: "TbShieldLock" },
    { name: "Vulnerability Analysis", icon: "TbBug" }
  ]
};

// Export icons object for use in components
export const skillIcons = {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiCplusplus,
  SiPhp,
  SiMysql,
  TbBinaryTree,
  TbCode,
  TbShieldLock,
  TbBug
};
