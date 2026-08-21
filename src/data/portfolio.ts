/**
 * All portfolio content lives here.
 * Update this file to change the site — no component edits needed.
 */

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const profile = {
  name: "Tejal Singh",
  greeting: "Hi, I'm Tejal Singh",
  headline: "Aspiring AI/ML Engineer & Robotics Enthusiast",
  intro:
    "I'm a first-year BTech student at S-VYASA University, specializing in Computer Science Engineering (Artificial Intelligence & Machine Learning) and upskilling in collaboration with NIAT. After completing my schooling in 2025 and taking a focused drop year, I began my engineering journey in 2026. Right now I'm building strong fundamentals in Python and Java while exploring how intelligent systems and robotics work.",
  location: "India",
  // Replace with your real links when ready.
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Interests", href: "#interests" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm curious about how machines learn, reason and move. That curiosity is what pulled me toward Artificial Intelligence, Machine Learning and Robotics early in my engineering journey.",
    "I'm at the very start of that path — writing my first programs, understanding the mathematics behind models, and slowly turning ideas into small projects. I care more about understanding fundamentals deeply than collecting buzzwords.",
    "My goal for the next few years is simple: build real technical depth, ship projects I can defend line by line, and work on problems where AI and robotics meet the physical world.",
  ],
  timeline: [
    {
      period: "2026",
      title: "Started BTech at S-VYASA University",
      description:
        "Joined Computer Science Engineering with a specialization in Artificial Intelligence & Machine Learning, in collaboration with NIAT.",
    },
    {
      period: "Now",
      title: "Learning to Build",
      description:
        "Learning Python and Java, exploring AI/ML fundamentals, and getting comfortable with Git, GitHub and the web stack — with upskilling support from NIAT.",
    },
  ],
};

export const education = [
  {
    degree: "BTech — Computer Science Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "S-VYASA University",
    period: "Started 2026 · First Year · Ongoing",
    points: [
      "Core CSE fundamentals with an AI/ML specialization track",
      "Focus areas: programming, mathematics for ML, problem solving",
    ],
  },
  {
    degree: "Upskilling Program",
    specialization: "Industry-aligned technical training",
    institution: "In collaboration with NIAT",
    period: "Started 2026 · Ongoing",
    points: [
      "Practical skill-building alongside the university curriculum",
      "Hands-on practice with programming and modern development tools",
    ],
  },
];

export type SkillLevel = "Exploring" | "Learning" | "Practicing" | "Building Projects";

export const skillGroups: {
  category: string;
  icon: "code" | "brain" | "wrench";
  skills: { name: string; level: SkillLevel }[];
}[] = [
  {
    category: "Programming",
    icon: "code",
    skills: [
      { name: "Python", level: "Learning" },
      { name: "Java", level: "Learning" },
    ],
  },
  {
    category: "AI / ML",
    icon: "brain",
    skills: [
      { name: "Artificial Intelligence", level: "Exploring" },
      { name: "Machine Learning", level: "Exploring" },
      { name: "Data Science", level: "Learning" },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "wrench",
    skills: [
      { name: "Git", level: "Practicing" },
      { name: "GitHub", level: "Practicing" },
      { name: "React", level: "Learning" },
      { name: "Tailwind CSS", level: "Learning" },
    ],
  },
];

/** Add new projects here — the grid updates automatically. */
export const projects = [
  {
    title: "Project Placeholder One",
    description:
      "A planned beginner project in Python to practise core programming concepts and working with data.",
    tech: ["Python"],
    image: project1,
    github: "#",
    demo: "#",
    status: "Planned",
  },
  {
    title: "Project Placeholder Two",
    description:
      "A future robotics / automation experiment to connect code with hardware and sensors.",
    tech: ["Python", "Robotics"],
    image: project2,
    github: "#",
    demo: "#",
    status: "Planned",
  },
  {
    title: "Project Placeholder Three",
    description:
      "A small web project to practise React, Tailwind CSS and version control with Git and GitHub.",
    tech: ["React", "Tailwind CSS", "Git"],
    image: project3,
    github: "#",
    demo: "#",
    status: "Planned",
  },
];

export const learning: { name: string; stage: SkillLevel; note: string }[] = [
  { name: "Python", stage: "Practicing", note: "Syntax, logic building and small scripts." },
  { name: "Java", stage: "Learning", note: "Object-oriented programming fundamentals." },
  { name: "AI/ML Fundamentals", stage: "Exploring", note: "Core concepts, maths and intuition." },
  { name: "React", stage: "Learning", note: "Components, props and state." },
  { name: "Git & GitHub", stage: "Practicing", note: "Version control and collaboration basics." },
  { name: "Robotics", stage: "Exploring", note: "How software controls physical systems." },
];

export const interests: { name: string; icon: string; description: string }[] = [
  { name: "Artificial Intelligence", icon: "Brain", description: "How machines reason and decide." },
  { name: "Machine Learning", icon: "Sparkles", description: "Learning patterns from data." },
  { name: "Robotics", icon: "Bot", description: "Bringing intelligence into the physical world." },
  { name: "Technology", icon: "Cpu", description: "Following how the field keeps shifting." },
  { name: "Problem Solving", icon: "Puzzle", description: "Breaking hard things into small steps." },
  { name: "Building Projects", icon: "Hammer", description: "Learning by making things that run." },
];

/** Add certifications, hackathons, workshops and awards here as you earn them. */
export const achievements: { category: string; items: string[] }[] = [
  { category: "Certifications", items: ["To be added"] },
  { category: "Hackathons", items: ["To be added"] },
  { category: "Workshops", items: ["To be added"] },
  { category: "Courses", items: ["To be added"] },
  { category: "Academic", items: ["To be added"] },
];
