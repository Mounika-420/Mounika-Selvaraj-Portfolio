/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  location: string;
  highlights?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  technologies: string[];
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  category: "AI/NLP" | "Web Development" | "Systems";
  demoUrl?: string;
  githubUrl?: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level: number; // percentage or strength index
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  category: "Athletics" | "Academic" | "Coding";
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
