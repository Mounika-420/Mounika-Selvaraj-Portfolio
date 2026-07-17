/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Education, Experience, Project, SkillCategory, Certification, Achievement } from "./types";

export const personalInfo = {
  name: "MOUNIKA SELVARAJ",
  title: "Computer Science & Business Systems Student",
  email: "mounikaselvarajp@gmail.com",
  phone: "+91 9360058155",
  location: "Mallur, Salem, Tamil Nadu, India",
  address: "1/54 Mel Street, Vallakuttapatti, Mallur, Salem - 636203",
  objective: "Motivated Computer Science and Business Systems student seeking a Software Development Internship to apply programming and problem-solving skills and gain hands-on industry experience in software development.",
  socials: {
    linkedin: "https://linkedin.com/in/mounikaselvaraj",
    github: "https://github.com/mounika-selvaraj",
    salesforce: "https://trailblazer.me/id/mounikaselvaraj",
    leetcode: "https://leetcode.com/mounikaselvarajp"
  }
};

export const educationList: Education[] = [
  {
    id: "edu-1",
    institution: "V.S.B. ENGINEERING COLLEGE, KARUR",
    degree: "B.Tech – Computer Science and Business Systems",
    duration: "2023 – 2027",
    grade: "CGPA: 8.46 / 10",
    location: "Karur, Tamil Nadu",
    highlights: [
      "Specialized curriculum blending core Computer Science with Business Management, Financial Systems, and Business Strategy.",
      "Maintained a strong academic record with persistent high performance in Data Structures, DBMS, and Object-Oriented Programming."
    ]
  },
  {
    id: "edu-2",
    institution: "MODEL SCHOOL, MALLUR, SALEM",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2022 – 2023",
    grade: "72.5%",
    location: "Salem, Tamil Nadu",
    highlights: [
      "Focused on Mathematics, Physics, Chemistry, and Computer Science.",
      "Participated actively in school events and sports competitions."
    ]
  },
  {
    id: "edu-3",
    institution: "MERLION MATRICULATION HIGHER SECONDARY SCHOOL, MALLUR",
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "2019 – 2020",
    location: "Mallur, Salem",
    highlights: [
      "Completed secondary education with high marks.",
      "Laid foundations in Science, Mathematics, and Analytical thinking."
    ]
  }
];

export const experienceList: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Development Intern",
    company: "Web-Based Coffee Ordering & Management Platform",
    duration: "Internship Project",
    location: "Remote / Academic",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    points: [
      "Developed a complete web-based coffee ordering system for seamless online menu browsing and instant order placement.",
      "Implemented robust user authentication, interactive order management, and real-time inventory tracking modules.",
      "Designed a fully responsive client-side interface using HTML/CSS/JS and integrated a MySQL database for efficient transactional data persistence."
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: "proj-1",
    title: "AI Meeting Notes Generator",
    description: "An intelligent AI-based assistant application designed to automatically transcribe, summarize, and extract actionable checklists from meetings.",
    details: [
      "Developed an AI-based application that processes meeting logs/transcripts to generate detailed meeting summaries using Natural Language Processing (NLP).",
      "Created algorithms to detect context, identify high-priority discussion points, and automatically extract key action items and assignees.",
      "Designed a sleek dashboard UI to let users search, filter, and review historical meeting summaries."
    ],
    technologies: ["Python", "NLP", "Machine Learning", "Streamlit", "NLTK/SpaCy"],
    category: "AI/NLP",
    iconName: "FileText"
  },
  {
    id: "proj-2",
    title: "AI-Based Vehicle Rental System",
    description: "A comprehensive, smart rental management portal that simplifies booking tracking, fleet allocation, and customer management.",
    details: [
      "Built a robust vehicle rental management platform enabling real-time checking of vehicle availability, dynamic rate computations, and custom booking profiles.",
      "Implemented secure customer accounts, multi-vehicle tracking, and localized booking history logs.",
      "Integrated database queries for efficient customer lookup, automated rental duration calculation, and status updates."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "Web Development",
    iconName: "Car"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "skill-lang",
    name: "Programming Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    id: "skill-back",
    name: "Backend Development",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "Java EE", level: 70 },
      { name: "RESTful APIs", level: 75 }
    ]
  },
  {
    id: "skill-front",
    name: "Frontend Development",
    skills: [
      { name: "HTML5 / CSS3", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Tailwind CSS", level: 80 }
    ]
  },
  {
    id: "skill-db",
    name: "Database & Tools",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 }
    ]
  },
  {
    id: "skill-core",
    name: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Database Management Systems", level: 78 },
      { name: "Machine Learning", level: 70 }
    ]
  },
  {
    id: "skill-soft",
    name: "Soft Skills",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Teamwork", level: 85 },
      { name: "Time Management", level: 80 }
    ]
  }
];

export const certificationsList: Certification[] = [
  {
    id: "cert-1",
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2024"
  },
  {
    id: "cert-2",
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2024"
  },
  {
    id: "cert-3",
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025"
  }
];

export const achievementsList: Achievement[] = [
  {
    id: "ach-1",
    title: "District-Level Discus Throw and Shot Put",
    description: "District-level athletic participant representing school and competing at high standards, demonstrating athletic dedication and teamwork.",
    date: "2020",
    category: "Athletics"
  },
  {
    id: "ach-2",
    title: "Active LeetCode Problem Solver",
    description: "Consistent problem solver tackling coding challenges regularly, maintaining high interest in data structures and algorithmic complexity.",
    date: "Ongoing",
    category: "Coding"
  }
];
